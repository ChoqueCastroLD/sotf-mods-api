/**
 * Every header that starts with this prefix is internal to the web process: the server entry
 * removes incoming ones before routing, so a client can never inject a locale, cache tags or any
 * other internal signal.
 */
export const INTERNAL_HEADER_PREFIX = 'x-sotf-';
