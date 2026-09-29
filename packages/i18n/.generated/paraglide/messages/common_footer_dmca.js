/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Footer_DmcaInputs */

const en_common_footer_dmca = /** @type {(inputs: Common_Footer_DmcaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`DMCA`)
};

const es_common_footer_dmca = /** @type {(inputs: Common_Footer_DmcaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`DMCA`)
};

const de_common_footer_dmca = /** @type {(inputs: Common_Footer_DmcaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`DMCA`)
};

const fr_common_footer_dmca = /** @type {(inputs: Common_Footer_DmcaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`DMCA`)
};

const it_common_footer_dmca = /** @type {(inputs: Common_Footer_DmcaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`DMCA`)
};

const nl_common_footer_dmca = /** @type {(inputs: Common_Footer_DmcaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`DMCA`)
};

const pl_common_footer_dmca = /** @type {(inputs: Common_Footer_DmcaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`DMCA`)
};

const pt_common_footer_dmca = /** @type {(inputs: Common_Footer_DmcaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`DMCA`)
};

const ru_common_footer_dmca = /** @type {(inputs: Common_Footer_DmcaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`DMCA`)
};

const sv_common_footer_dmca = /** @type {(inputs: Common_Footer_DmcaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`DMCA`)
};

const tr_common_footer_dmca = /** @type {(inputs: Common_Footer_DmcaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`DMCA`)
};

const zh_common_footer_dmca = /** @type {(inputs: Common_Footer_DmcaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`DMCA`)
};

const ja_common_footer_dmca = /** @type {(inputs: Common_Footer_DmcaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`DMCA`)
};

/**
* | output |
* | --- |
* | "DMCA" |
*
* @param {Common_Footer_DmcaInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_footer_dmca = /** @type {((inputs?: Common_Footer_DmcaInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Footer_DmcaInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_footer_dmca(inputs)
	if (locale === "de") return de_common_footer_dmca(inputs)
	if (locale === "fr") return fr_common_footer_dmca(inputs)
	if (locale === "it") return it_common_footer_dmca(inputs)
	if (locale === "nl") return nl_common_footer_dmca(inputs)
	if (locale === "pl") return pl_common_footer_dmca(inputs)
	if (locale === "pt") return pt_common_footer_dmca(inputs)
	if (locale === "ru") return ru_common_footer_dmca(inputs)
	if (locale === "sv") return sv_common_footer_dmca(inputs)
	if (locale === "tr") return tr_common_footer_dmca(inputs)
	if (locale === "zh") return zh_common_footer_dmca(inputs)
	if (locale === "ja") return ja_common_footer_dmca(inputs)
	return en_common_footer_dmca(inputs)
});
