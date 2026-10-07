/**
 * Hosts whose `X-Forwarded-*` headers Astro may trust (`security.allowedDomains`).
 *
 * Behind Cloudflare and Traefik the Node server only sees plain `http://`. Astro applies
 * `X-Forwarded-Proto/Host/For` **only when this list is configured** (the protocol is taken from
 * the header when a pattern names it; the forwarded host and client address need a listed host).
 * Without it the request URL stays `http://<host>`, and the origin check refuses every same-site
 * form POST (`POST /logout` answered "Cross-site POST form submissions are forbidden").
 */

export interface TrustedDomain {
  hostname: string;
  protocol: string;
}

/** Hosts whose X-Forwarded-* headers Astro may trust: the public site (and its www alias). */
export function trustedDomains(siteUrl: string | undefined): TrustedDomain[] {
  const site = new URL(siteUrl || 'https://sotf-mods.com');
  const protocol = site.protocol.replace(':', '');
  const host = site.hostname.replace(/^www\./, '');
  return [
    { hostname: host, protocol },
    { hostname: `www.${host}`, protocol },
  ];
}
