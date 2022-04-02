"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initClient = void 0;
const beamio_1 = require("beamio");
/**
 * - Pour créer une partie:
 *   - Client: `Username`
 *   - Server: `SessionID` + `PartyID`
 *
 * - Pour rejoindre une partie:
 *   - Client: `PartyID` + `Username`
 *   - Server: `SessionID`
 *
 * - Pour rejoindre une partie en cours:
 *   - Client: `PartyID` + `SessionID`
 *   - Server: `Username`
 */
exports.initClient = {
    /** Username du client */
    username: beamio_1.Type.String,
    /** sessionID du client */
    session: beamio_1.Type.String,
    /** Identifiant de la partie */
    party: beamio_1.Type.String,
};
__exportStar(require("./party.sch"), exports);
exports.default = {};
