export declare const CODES: {
    readonly EQUAL: "Equal";
    readonly MINUS: "Minus";
    readonly NUM_ADD: "NumpadAdd";
    readonly NUM_SUBTRACT: "NumpadSubtract";
    readonly NUM_ZERO: "Numpad0";
    readonly BRACKET_RIGHT: "BracketRight";
    readonly BRACKET_LEFT: "BracketLeft";
    readonly ONE: "Digit1";
    readonly TWO: "Digit2";
    readonly THREE: "Digit3";
    readonly NINE: "Digit9";
    readonly QUOTE: "Quote";
    readonly ZERO: "Digit0";
    readonly SLASH: "Slash";
    readonly C: "KeyC";
    readonly D: "KeyD";
    readonly H: "KeyH";
    readonly V: "KeyV";
    readonly Z: "KeyZ";
    readonly R: "KeyR";
    readonly S: "KeyS";
};
export declare const KEYS: {
    readonly ARROW_DOWN: "ArrowDown";
    readonly ARROW_LEFT: "ArrowLeft";
    readonly ARROW_RIGHT: "ArrowRight";
    readonly ARROW_UP: "ArrowUp";
    readonly PAGE_UP: "PageUp";
    readonly PAGE_DOWN: "PageDown";
    readonly BACKSPACE: "Backspace";
    readonly ALT: "Alt";
    readonly CTRL_OR_CMD: "metaKey" | "ctrlKey";
    readonly DELETE: "Delete";
    readonly ENTER: "Enter";
    readonly ESCAPE: "Escape";
    readonly QUESTION_MARK: "?";
    readonly SPACE: " ";
    readonly TAB: "Tab";
    readonly CHEVRON_LEFT: "<";
    readonly CHEVRON_RIGHT: ">";
    readonly PERIOD: ".";
    readonly COMMA: ",";
    readonly SUBTRACT: "-";
    readonly A: "a";
    readonly C: "c";
    readonly D: "d";
    readonly E: "e";
    readonly F: "f";
    readonly G: "g";
    readonly H: "h";
    readonly I: "i";
    readonly L: "l";
    readonly O: "o";
    readonly P: "p";
    readonly Q: "q";
    readonly R: "r";
    readonly S: "s";
    readonly T: "t";
    readonly V: "v";
    readonly X: "x";
    readonly Y: "y";
    readonly Z: "z";
    readonly K: "k";
    readonly W: "w";
    readonly 0: "0";
    readonly 1: "1";
    readonly 2: "2";
    readonly 3: "3";
    readonly 4: "4";
    readonly 5: "5";
    readonly 6: "6";
    readonly 7: "7";
    readonly 8: "8";
    readonly 9: "9";
};
export type Key = keyof typeof KEYS;
export declare const isArrowKey: (key: string) => boolean;
export declare const shouldResizeFromCenter: (event: MouseEvent | KeyboardEvent) => boolean;
export declare const shouldMaintainAspectRatio: (event: MouseEvent | KeyboardEvent) => boolean;
export declare const shouldRotateWithDiscreteAngle: (event: MouseEvent | KeyboardEvent | React.PointerEvent<HTMLCanvasElement>) => boolean;
