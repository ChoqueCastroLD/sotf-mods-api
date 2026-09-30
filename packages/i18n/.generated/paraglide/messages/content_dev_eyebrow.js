/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Dev_EyebrowInputs */

const en_content_dev_eyebrow = /** @type {(inputs: Content_Dev_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Developers`)
};

const es_content_dev_eyebrow = /** @type {(inputs: Content_Dev_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desarrolladores`)
};

const de_content_dev_eyebrow = /** @type {(inputs: Content_Dev_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entwickler`)
};

const fr_content_dev_eyebrow = /** @type {(inputs: Content_Dev_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Développeurs`)
};

const it_content_dev_eyebrow = /** @type {(inputs: Content_Dev_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sviluppatori`)
};

const nl_content_dev_eyebrow = /** @type {(inputs: Content_Dev_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ontwikkelaars`)
};

const pl_content_dev_eyebrow = /** @type {(inputs: Content_Dev_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dla deweloperów`)
};

const pt_content_dev_eyebrow = /** @type {(inputs: Content_Dev_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desenvolvedores`)
};

const ru_content_dev_eyebrow = /** @type {(inputs: Content_Dev_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Разработчикам`)
};

const sv_content_dev_eyebrow = /** @type {(inputs: Content_Dev_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utvecklare`)
};

const tr_content_dev_eyebrow = /** @type {(inputs: Content_Dev_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geliştiriciler`)
};

const zh_content_dev_eyebrow = /** @type {(inputs: Content_Dev_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`开发者`)
};

const ja_content_dev_eyebrow = /** @type {(inputs: Content_Dev_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`開発者向け`)
};

/**
* | output |
* | --- |
* | "Developers" |
*
* @param {Content_Dev_EyebrowInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_dev_eyebrow = /** @type {((inputs?: Content_Dev_EyebrowInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Dev_EyebrowInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_dev_eyebrow(inputs)
	if (locale === "de") return de_content_dev_eyebrow(inputs)
	if (locale === "fr") return fr_content_dev_eyebrow(inputs)
	if (locale === "it") return it_content_dev_eyebrow(inputs)
	if (locale === "nl") return nl_content_dev_eyebrow(inputs)
	if (locale === "pl") return pl_content_dev_eyebrow(inputs)
	if (locale === "pt") return pt_content_dev_eyebrow(inputs)
	if (locale === "ru") return ru_content_dev_eyebrow(inputs)
	if (locale === "sv") return sv_content_dev_eyebrow(inputs)
	if (locale === "tr") return tr_content_dev_eyebrow(inputs)
	if (locale === "zh") return zh_content_dev_eyebrow(inputs)
	if (locale === "ja") return ja_content_dev_eyebrow(inputs)
	return en_content_dev_eyebrow(inputs)
});
