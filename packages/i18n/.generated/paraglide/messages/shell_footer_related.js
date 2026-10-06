/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Shell_Footer_RelatedInputs */

const en_shell_footer_related = /** @type {(inputs: Shell_Footer_RelatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Related sites`)
};

const es_shell_footer_related = /** @type {(inputs: Shell_Footer_RelatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sitios relacionados`)
};

const de_shell_footer_related = /** @type {(inputs: Shell_Footer_RelatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verwandte Websites`)
};

const fr_shell_footer_related = /** @type {(inputs: Shell_Footer_RelatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sites associés`)
};

const it_shell_footer_related = /** @type {(inputs: Shell_Footer_RelatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Siti correlati`)
};

const nl_shell_footer_related = /** @type {(inputs: Shell_Footer_RelatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gerelateerde sites`)
};

const pl_shell_footer_related = /** @type {(inputs: Shell_Footer_RelatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Powiązane strony`)
};

const pt_shell_footer_related = /** @type {(inputs: Shell_Footer_RelatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sites relacionados`)
};

const ru_shell_footer_related = /** @type {(inputs: Shell_Footer_RelatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Связанные сайты`)
};

const sv_shell_footer_related = /** @type {(inputs: Shell_Footer_RelatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Relaterade webbplatser`)
};

const tr_shell_footer_related = /** @type {(inputs: Shell_Footer_RelatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İlgili siteler`)
};

const zh_shell_footer_related = /** @type {(inputs: Shell_Footer_RelatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`相关网站`)
};

const ja_shell_footer_related = /** @type {(inputs: Shell_Footer_RelatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`関連サイト`)
};

/**
* | output |
* | --- |
* | "Related sites" |
*
* @param {Shell_Footer_RelatedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const shell_footer_related = /** @type {((inputs?: Shell_Footer_RelatedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_Footer_RelatedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_shell_footer_related(inputs)
	if (locale === "de") return de_shell_footer_related(inputs)
	if (locale === "fr") return fr_shell_footer_related(inputs)
	if (locale === "it") return it_shell_footer_related(inputs)
	if (locale === "nl") return nl_shell_footer_related(inputs)
	if (locale === "pl") return pl_shell_footer_related(inputs)
	if (locale === "pt") return pt_shell_footer_related(inputs)
	if (locale === "ru") return ru_shell_footer_related(inputs)
	if (locale === "sv") return sv_shell_footer_related(inputs)
	if (locale === "tr") return tr_shell_footer_related(inputs)
	if (locale === "zh") return zh_shell_footer_related(inputs)
	if (locale === "ja") return ja_shell_footer_related(inputs)
	return en_shell_footer_related(inputs)
});
