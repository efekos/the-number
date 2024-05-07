
/**
 * Represents a result information about a number.
 */
export interface Info {
    message: string;
    detail?: string;
    type: InfoType;
}

/**
 * Type of an information. Can be used to give different colors, or illustrate a specific type of information in different ways.
 */
export type InfoType = 'even' | 'odd' | 'dividable' | 'prime' | 'square';