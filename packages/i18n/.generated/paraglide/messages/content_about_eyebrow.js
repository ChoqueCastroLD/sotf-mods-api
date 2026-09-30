/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_About_EyebrowInputs */

const en_content_about_eyebrow = /** @type {(inputs: Content_About_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`About`)
};

const es_content_about_eyebrow = /** @type {(inputs: Content_About_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Acerca de`)
};

const de_content_about_eyebrow = /** @type {(inputs: Content_About_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Über uns`)
};

const fr_content_about_eyebrow = /** @type {(inputs: Content_About_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`À propos`)
};

const it_content_about_eyebrow = /** @type {(inputs: Content_About_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chi siamo`)
};

const nl_content_about_eyebrow = /** @type {(inputs: Content_About_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Over ons`)
};

const pl_content_about_eyebrow = /** @type {(inputs: Content_About_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O nas`)
};

const pt_content_about_eyebrow = /** @type {(inputs: Content_About_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sobre`)
};

const ru_content_about_eyebrow = /** @type {(inputs: Content_About_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`О проекте`)
};

const sv_content_about_eyebrow = /** @type {(inputs: Content_About_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Om oss`)
};

const tr_content_about_eyebrow = /** @type {(inputs: Content_About_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hakkında`)
};

const zh_content_about_eyebrow = /** @type {(inputs: Content_About_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`关于`)
};

const ja_content_about_eyebrow = /** @type {(inputs: Content_About_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`概要`)
};

/**
* | output |
* | --- |
* | "About" |
*
* @param {Content_About_EyebrowInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_about_eyebrow = /** @type {((inputs?: Content_About_EyebrowInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_About_EyebrowInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_about_eyebrow(inputs)
	if (locale === "de") return de_content_about_eyebrow(inputs)
	if (locale === "fr") return fr_content_about_eyebrow(inputs)
	if (locale === "it") return it_content_about_eyebrow(inputs)
	if (locale === "nl") return nl_content_about_eyebrow(inputs)
	if (locale === "pl") return pl_content_about_eyebrow(inputs)
	if (locale === "pt") return pt_content_about_eyebrow(inputs)
	if (locale === "ru") return ru_content_about_eyebrow(inputs)
	if (locale === "sv") return sv_content_about_eyebrow(inputs)
	if (locale === "tr") return tr_content_about_eyebrow(inputs)
	if (locale === "zh") return zh_content_about_eyebrow(inputs)
	if (locale === "ja") return ja_content_about_eyebrow(inputs)
	return en_content_about_eyebrow(inputs)
});
