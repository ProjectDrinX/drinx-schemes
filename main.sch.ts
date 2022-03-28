import { Type } from 'beamio';

/**
 * Client -> Envoie son sessionID (même s'il est vide)
 * Server -> Envoie le sessionID du client
 */
export const initClient = {
  /** sessionID du client */
  session: Type.String,
};

export default {};
