import { IUri } from "./IUri";
/**
 * Url object class which can perform various transformations on url strings.
 */
export declare class UrlString {
    private _urlString;
    get urlString(): string;
    constructor(url: string);
    /**
     * Ensure urls are lower case and end with a / character.
     * @param url
     */
    private canonicalizeUri;
    /**
     * Throws if urlString passed is not a valid authority URI string.
     */
    validateAsUri(): void;
    /**
     * Function to remove query string params from url. Returns the new url.
     * @param url
     * @param name
     */
    urlRemoveQueryStringParameter(name: string): string;
    /**
     * Given a url like https://a:b/common/d?e=f#g, and a tenantId, returns https://a:b/tenantId/d
     * @param href The url
     * @param tenantId The tenant id to replace
     */
    replaceTenantPath(tenantId: string): UrlString;
    /**
     * Returns the anchor part(#) of the URL
     */
    getHash(): string;
    /**
     * Returns deserialized portion of URL hash
     */
    getDeserializedHash<T>(): T;
    /**
     * Parses out the components from a url string.
     * @returns An object with the various components. Please cache this value insted of calling this multiple times on the same url.
     */
    getUrlComponents(): IUri;
    static constructAuthorityUriFromObject(urlObject: IUri): UrlString;
    /**
     * Check if the hash of the URL string contains known properties
     */
    static hashContainsKnownProperties(url: string): boolean;
}