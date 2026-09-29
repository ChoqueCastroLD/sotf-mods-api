/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Footer_LegalInputs */

const en_common_footer_legal = /** @type {(inputs: Common_Footer_LegalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Legal`)
};

const es_common_footer_legal = /** @type {(inputs: Common_Footer_LegalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Legal`)
};

const de_common_footer_legal = /** @type {(inputs: Common_Footer_LegalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rechtliches`)
};

const fr_common_footer_legal = /** @type {(inputs: Common_Footer_LegalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mentions légales`)
};

const it_common_footer_legal = /** @type {(inputs: Common_Footer_LegalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Note legali`)
};

const nl_common_footer_legal = /** @type {(inputs: Common_Footer_LegalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Juridisch`)
};

const pl_common_footer_legal = /** @type {(inputs: Common_Footer_LegalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Informacje prawne`)
};

const pt_common_footer_legal = /** @type {(inputs: Common_Footer_LegalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jurídico`)
};

const ru_common_footer_legal = /** @type {(inputs: Common_Footer_LegalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Правовая информация`)
};

const sv_common_footer_legal = /** @type {(inputs: Common_Footer_LegalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Juridiskt`)
};

const tr_common_footer_legal = /** @type {(inputs: Common_Footer_LegalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yasal`)
};

const zh_common_footer_legal = /** @type {(inputs: Common_Footer_LegalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`法律信息`)
};

const ja_common_footer_legal = /** @type {(inputs: Common_Footer_LegalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`法的情報`)
};

/**
* | output |
* | --- |
* | "Legal" |
*
* @param {Common_Footer_LegalInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_footer_legal = /** @type {((inputs?: Common_Footer_LegalInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Footer_LegalInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_footer_legal(inputs)
	if (locale === "de") return de_common_footer_legal(inputs)
	if (locale === "fr") return fr_common_footer_legal(inputs)
	if (locale === "it") return it_common_footer_legal(inputs)
	if (locale === "nl") return nl_common_footer_legal(inputs)
	if (locale === "pl") return pl_common_footer_legal(inputs)
	if (locale === "pt") return pt_common_footer_legal(inputs)
	if (locale === "ru") return ru_common_footer_legal(inputs)
	if (locale === "sv") return sv_common_footer_legal(inputs)
	if (locale === "tr") return tr_common_footer_legal(inputs)
	if (locale === "zh") return zh_common_footer_legal(inputs)
	if (locale === "ja") return ja_common_footer_legal(inputs)
	return en_common_footer_legal(inputs)
});
