export default function binpack(boxes: Box[]): PackingResult {
    let area = 0;
    let maxWidth = 0;

    for (const box of boxes) {
        area += box.w * box.h;
        maxWidth = Math.max(maxWidth, box.w);
    }

    boxes.sort((a, b) => b.h - a.h);

    const startWidth = Math.max(Math.ceil(Math.sqrt(area / 0.95)), maxWidth);
    const spaces: { x: number; y: number; w: number; h: number; }[] = [{ x: 0, y: 0, w: startWidth, h: Infinity }];

    let width = 0;
    let height = 0;

    for (const box of boxes) {
        let placed = false;

        for (let i = spaces.length - 1; i >= 0; i--) {
            const space = spaces[i];

            if (box.w <= space.w && box.h <= space.h) {
                box.x = space.x;
                box.y = space.y;
                placed = true;

                height = Math.max(height, box.y + box.h);
                width = Math.max(width, box.x + box.w);

                if (box.w === space.w && box.h === space.h) {
                    spaces.splice(i, 1);
                } else if (box.h === space.h) {
                    space.x += box.w;
                    space.w -= box.w;
                } else if (box.w === space.w) {
                    space.y += box.h;
                    space.h -= box.h;
                } else {
                    spaces.push({
                        x: space.x + box.w,
                        y: space.y,
                        w: space.w - box.w,
                        h: box.h
                    });
                    space.y += box.h;
                    space.h -= box.h;
                }
                break;
            }
        }

        if (!placed) {
            spaces.sort((a, b) => a.w - b.w);
            const space = spaces.find(s => s.w >= box.w && s.h >= box.h);
            if (space) {
                box.x = space.x;
                box.y = space.y;
                placed = true;

                height = Math.max(height, box.y + box.h);
                width = Math.max(width, box.x + box.w);

                if (box.w === space.w && box.h === space.h) {
                    spaces.splice(spaces.indexOf(space), 1);
                } else if (box.h === space.h) {
                    space.x += box.w;
                    space.w -= box.w;
                } else if (box.w === space.w) {
                    space.y += box.h;
                    space.h -= box.h;
                } else {
                    spaces.push({
                        x: space.x + box.w,
                        y: space.y,
                        w: space.w - box.w,
                        h: box.h
                    });
                    space.y += box.h;
                    space.h -= box.h;
                }
            }
        }

        if (!placed) {
            throw new Error('Неможливо розмістити блок: ' + JSON.stringify(box));
        }
    }

    return {
        w: width,
        h: height,
        fill: (area / (width * height)) || 0
    };
}