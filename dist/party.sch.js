"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setPlayerStatus = exports.setPlayerScore = exports.removePlayer = exports.addPlayer = exports.setPartyOwner = void 0;
const beamio_1 = require("beamio");
/**
 * Serveur: Pour annoncer l'owner de la Party
 */
exports.setPartyOwner = {
    /** Username du client */
    username: beamio_1.Type.String,
};
/**
 * Serveur: Pour annoncer qu'un Player a rejoint la Party
 */
exports.addPlayer = {
    /** Username du client */
    username: beamio_1.Type.String,
};
/**
 * Serveur: Pour annoncer qu'un Player a quitté la Party
 */
exports.removePlayer = {
    /** Username du client */
    username: beamio_1.Type.String,
};
/**
 * Serveur: Pour annoncer le score d'un Player
 */
exports.setPlayerScore = {
    /** Username du client */
    username: beamio_1.Type.String,
    /** Score du client */
    score: beamio_1.Type.Number,
};
/**
 * Serveur: Pour annoncer le status d'un Player
 */
exports.setPlayerStatus = {
    /** Username du Player */
    username: beamio_1.Type.String,
    /** Status du Player */
    status: beamio_1.Type.Boolean,
};
