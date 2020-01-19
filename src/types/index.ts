
export enum DisplayMode {
    TEXT,
    RENDER,
}

export interface ModeContext {
    mode: DisplayMode;
    changeMode: (mode: DisplayMode) => void;
}
