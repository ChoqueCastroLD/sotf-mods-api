/**
 * Footer accordions: the columns are `<details>` that fold below 48rem and stay open from md up
 * (open without JavaScript). Inline, right after the footer markup, so the columns fold before the
 * first paint. Its CSP hash is derived from this exact string (`lib/security/csp.ts`).
 */
export const FOOTER_ACCORDION_SCRIPT =
  "{const q=matchMedia('(min-width: 48rem)'),c=document.querySelectorAll('[data-footer-column]'),s=()=>c.forEach(e=>e.open=q.matches);s();q.addEventListener('change',s);c.forEach(e=>e.addEventListener('toggle',()=>{if(q.matches&&!e.open)e.open=true}))}";
