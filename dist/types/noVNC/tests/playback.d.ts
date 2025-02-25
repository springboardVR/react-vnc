export default class RecordingPlayer {
    constructor(frames: any, disconnected: any);
    _frames: any;
    _disconnected: any;
    _rfb: RFB | undefined;
    _frameLength: any;
    _frameIndex: number;
    _startTime: number | undefined;
    _realtime: boolean;
    _trafficManagement: boolean;
    _running: boolean;
    onfinish: () => void;
    run(realtime: any, trafficManagement: any): void;
    _enablePlaybackMode(): void;
    _queueNextPacket(): void;
    _doPacket(): void;
    _finish(): void;
    _handleDisconnect(evt: any): void;
    _handleCredentials(evt: any): void;
}
import RFB from "../core/rfb.js";
