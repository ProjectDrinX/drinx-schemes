import { Type } from 'beamio';

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
export const initClient = {
  /** Username du client */
  username: Type.String,
  /** sessionID du client */
  session: Type.String,
  /** Identifiant de la partie */
  party: Type.String,
};

export * from './party.sch';

export default {};
