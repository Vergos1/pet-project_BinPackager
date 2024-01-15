// Функція для вставки вузла в бінарне дерево упаковки.
// використовується для розміщення прямокутників в заданому просторі.
function insertNode(root: BinsNode, w: number, h: number): BinsNode | null | undefined {

    // Якщо поточний вузол вже використовується,
    // шукаємо вільне місце праворуч або внизу
    if (root.used) {
        return (
         (root.right && insertNode(root.right, w, h)) ||
         (root.down && insertNode(root.down, w, h))
        );
    } else if (
     w <= root.w && h <= root.h
    ) {

        // Якщо прямокутник поміщається
        // в поточний вузол, виконуємо його розбиття
        root.used = true;

        //doc: Створення нових вузлів для правої та нижньої частини вільного простору
        root.down = {
            x: root.x,
            y: root.y + h,
            w: root.w,
            h: root.h - h,
            used: false,
            right: null,
            down: null
        };
        root.right = {
            x: root.x + w,
            y: root.y,
            w: root.w - w,
            h: h,
            used: false,
            right: null,
            down: null
        };

        // Якщо прямокутник не поміщається,
        // повертаємо null
        return root;
    } else {
        return null;
    }
}

// Основна функція для упаковки прямокутників у визначений простір
export default function binPack(boxes: Box[], w: number, h: number): Box[] {
    //doc: Ініціалізація кореневого вузла
    // з максимальними розмірами
    let root: BinsNode = {x: 0, y: 0, w: w, h: h};

    let packedBoxes: Box[] = [];

    for (let box of boxes) {
        //doc: Спроба вставки
        // кожного прямокутника в дерево упаковки
        let node = insertNode(root, box.w, box.h);

        //doc: Якщо вставка успішна,
        // зберігаємо координати у прямокутнику
        if (node) {
            box.x = node.x;
            box.y = node.y;
            packedBoxes.push(box);
        }
    }

    //doc: Повертаємо упаковані прямокутники
    return packedBoxes;
}