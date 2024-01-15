type Box = {
    w: number;
    h: number;
    x?: number;
    y?: number;
};

interface BinsNode {
    x: number;
    y: number;
    w: number;
    h: number;
    used?: boolean;
    right?: BinsNode | null;
    down?: BinsNode | null;
}
