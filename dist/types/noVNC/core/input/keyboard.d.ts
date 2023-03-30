export default class Keyboard {
    constructor(target: any);
    _target: any;
    _keyDownList: {};
    _pendingKey: any;
    _altGrArmed: boolean;
    _eventHandlers: {
        keyup: (e: any) => void;
        keydown: (e: any) => void;
        keypress: (e: any) => void;
        blur: () => void;
        checkalt: (e: any) => void;
    };
    onkeyevent: () => void;
    _sendKeyEvent(keysym: any, code: any, down: any): void;
    _getKeyCode(e: any): any;
    _handleKeyDown(e: any): void;
    _altGrTimeout: NodeJS.Timeout | undefined;
    _altGrCtrlTime: any;
    _handleKeyPress(e: any): void;
    _handleKeyPressTimeout(e: any): void;
    _handleKeyUp(e: any): void;
    _handleAltGrTimeout(): void;
    _allKeysUp(): void;
    _checkAlt(e: any): void;
    grab(): void;
    ungrab(): void;
}
