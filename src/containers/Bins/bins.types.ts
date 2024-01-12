export type Block = {
    w: number;
    h: number;
    x?: number;
    y?: number;
};

export type BinsProps = {
    blocks: Block[];
    sheetWidth: number;
    sheetHeight: number;
};

export type PackedSheet = Block[];
