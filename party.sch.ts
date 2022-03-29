import { Type } from 'beamio';

/**
 * Serveur: Pour annoncer l'owner de la Party
 */
export const setPartyOwner = {
  /** Username du client */
  username: Type.String,
};

/**
 * Serveur: Pour annoncer qu'un Player a rejoint la Party
 */
export const addPlayer = {
  /** Username du client */
  username: Type.String,
};

/**
 * Serveur: Pour annoncer qu'un Player a quitté la Party
 */
export const removePlayer = {
  /** Username du client */
  username: Type.String,
};

/**
 * Serveur: Pour annoncer le score d'un Player
 */
export const setPlayerScore = {
  /** Username du client */
  username: Type.String,
  /** Score du client */
  score: Type.Number,
};

/**
 * Serveur: Pour annoncer le status d'un Player
 */
export const setPlayerStatus = {
  /** Username du Player */
  username: Type.String,
  /** Status du Player */
  status: Type.Boolean,
};
