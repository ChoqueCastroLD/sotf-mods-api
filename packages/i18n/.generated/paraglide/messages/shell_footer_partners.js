/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Shell_Footer_PartnersInputs */

const en_shell_footer_partners = /** @type {(inputs: Shell_Footer_PartnersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Partners`)
};

const es_shell_footer_partners = /** @type {(inputs: Shell_Footer_PartnersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Socios`)
};

const de_shell_footer_partners = /** @type {(inputs: Shell_Footer_PartnersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Partner`)
};

const fr_shell_footer_partners = /** @type {(inputs: Shell_Footer_PartnersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Partenaires`)
};

const it_shell_footer_partners = /** @type {(inputs: Shell_Footer_PartnersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Partner`)
};

const nl_shell_footer_partners = /** @type {(inputs: Shell_Footer_PartnersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Partners`)
};

const pl_shell_footer_partners = /** @type {(inputs: Shell_Footer_PartnersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Partnerzy`)
};

const pt_shell_footer_partners = /** @type {(inputs: Shell_Footer_PartnersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Parceiros`)
};

const ru_shell_footer_partners = /** @type {(inputs: Shell_Footer_PartnersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Партнеры`)
};

const sv_shell_footer_partners = /** @type {(inputs: Shell_Footer_PartnersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Partners`)
};

const tr_shell_footer_partners = /** @type {(inputs: Shell_Footer_PartnersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ortaklar`)
};

const zh_shell_footer_partners = /** @type {(inputs: Shell_Footer_PartnersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`合作伙伴`)
};

const ja_shell_footer_partners = /** @type {(inputs: Shell_Footer_PartnersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`パートナー`)
};

/**
* | output |
* | --- |
* | "Partners" |
*
* @param {Shell_Footer_PartnersInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const shell_footer_partners = /** @type {((inputs?: Shell_Footer_PartnersInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_Footer_PartnersInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_shell_footer_partners(inputs)
	if (locale === "de") return de_shell_footer_partners(inputs)
	if (locale === "fr") return fr_shell_footer_partners(inputs)
	if (locale === "it") return it_shell_footer_partners(inputs)
	if (locale === "nl") return nl_shell_footer_partners(inputs)
	if (locale === "pl") return pl_shell_footer_partners(inputs)
	if (locale === "pt") return pt_shell_footer_partners(inputs)
	if (locale === "ru") return ru_shell_footer_partners(inputs)
	if (locale === "sv") return sv_shell_footer_partners(inputs)
	if (locale === "tr") return tr_shell_footer_partners(inputs)
	if (locale === "zh") return zh_shell_footer_partners(inputs)
	if (locale === "ja") return ja_shell_footer_partners(inputs)
	return en_shell_footer_partners(inputs)
});
