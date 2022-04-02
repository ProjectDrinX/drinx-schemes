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
export declare const initClient: {
    /** Username du client */
    username: string;
    /** sessionID du client */
    session: string;
    /** Identifiant de la partie */
    party: string;
};
export * from './party.sch';
declare const _default: {};
export default _default;
