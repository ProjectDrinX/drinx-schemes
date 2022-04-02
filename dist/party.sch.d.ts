/**
 * Serveur: Pour annoncer l'owner de la Party
 */
export declare const setPartyOwner: {
    /** Username du client */
    username: string;
};
/**
 * Serveur: Pour annoncer qu'un Player a rejoint la Party
 */
export declare const addPlayer: {
    /** Username du client */
    username: string;
};
/**
 * Serveur: Pour annoncer qu'un Player a quitté la Party
 */
export declare const removePlayer: {
    /** Username du client */
    username: string;
};
/**
 * Serveur: Pour annoncer le score d'un Player
 */
export declare const setPlayerScore: {
    /** Username du client */
    username: string;
    /** Score du client */
    score: number;
};
/**
 * Serveur: Pour annoncer le status d'un Player
 */
export declare const setPlayerStatus: {
    /** Username du Player */
    username: string;
    /** Status du Player */
    status: boolean;
};
