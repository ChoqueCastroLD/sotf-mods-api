/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Legal_EyebrowInputs */

const en_content_legal_eyebrow = /** @type {(inputs: Content_Legal_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Legal`)
};

const es_content_legal_eyebrow = /** @type {(inputs: Content_Legal_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Legal`)
};

const de_content_legal_eyebrow = /** @type {(inputs: Content_Legal_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rechtliches`)
};

const fr_content_legal_eyebrow = /** @type {(inputs: Content_Legal_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mentions légales`)
};

const it_content_legal_eyebrow = /** @type {(inputs: Content_Legal_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Note legali`)
};

const nl_content_legal_eyebrow = /** @type {(inputs: Content_Legal_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Juridisch`)
};

const pl_content_legal_eyebrow = /** @type {(inputs: Content_Legal_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Informacje prawne`)
};

const pt_content_legal_eyebrow = /** @type {(inputs: Content_Legal_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jurídico`)
};

const ru_content_legal_eyebrow = /** @type {(inputs: Content_Legal_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Правовая информация`)
};

const sv_content_legal_eyebrow = /** @type {(inputs: Content_Legal_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Juridik`)
};

const tr_content_legal_eyebrow = /** @type {(inputs: Content_Legal_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yasal`)
};

const zh_content_legal_eyebrow = /** @type {(inputs: Content_Legal_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`法律信息`)
};

const ja_content_legal_eyebrow = /** @type {(inputs: Content_Legal_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`法的情報`)
};

/**
* | output |
* | --- |
* | "Legal" |
*
* @param {Content_Legal_EyebrowInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_legal_eyebrow = /** @type {((inputs?: Content_Legal_EyebrowInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Legal_EyebrowInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_legal_eyebrow(inputs)
	if (locale === "de") return de_content_legal_eyebrow(inputs)
	if (locale === "fr") return fr_content_legal_eyebrow(inputs)
	if (locale === "it") return it_content_legal_eyebrow(inputs)
	if (locale === "nl") return nl_content_legal_eyebrow(inputs)
	if (locale === "pl") return pl_content_legal_eyebrow(inputs)
	if (locale === "pt") return pt_content_legal_eyebrow(inputs)
	if (locale === "ru") return ru_content_legal_eyebrow(inputs)
	if (locale === "sv") return sv_content_legal_eyebrow(inputs)
	if (locale === "tr") return tr_content_legal_eyebrow(inputs)
	if (locale === "zh") return zh_content_legal_eyebrow(inputs)
	if (locale === "ja") return ja_content_legal_eyebrow(inputs)
	return en_content_legal_eyebrow(inputs)
});
