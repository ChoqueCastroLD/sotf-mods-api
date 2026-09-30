/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Kelvin_EyebrowInputs */

const en_content_kelvin_eyebrow = /** @type {(inputs: Content_Kelvin_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Community mod`)
};

const es_content_kelvin_eyebrow = /** @type {(inputs: Content_Kelvin_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod de la comunidad`)
};

const de_content_kelvin_eyebrow = /** @type {(inputs: Content_Kelvin_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Community-Mod`)
};

const fr_content_kelvin_eyebrow = /** @type {(inputs: Content_Kelvin_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod communautaire`)
};

const it_content_kelvin_eyebrow = /** @type {(inputs: Content_Kelvin_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod della community`)
};

const nl_content_kelvin_eyebrow = /** @type {(inputs: Content_Kelvin_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Communitymod`)
};

const pl_content_kelvin_eyebrow = /** @type {(inputs: Content_Kelvin_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod społeczności`)
};

const pt_content_kelvin_eyebrow = /** @type {(inputs: Content_Kelvin_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod da comunidade`)
};

const ru_content_kelvin_eyebrow = /** @type {(inputs: Content_Kelvin_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Мод сообщества`)
};

const sv_content_kelvin_eyebrow = /** @type {(inputs: Content_Kelvin_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gemenskapsmodd`)
};

const tr_content_kelvin_eyebrow = /** @type {(inputs: Content_Kelvin_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Topluluk modu`)
};

const zh_content_kelvin_eyebrow = /** @type {(inputs: Content_Kelvin_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`社区模组`)
};

const ja_content_kelvin_eyebrow = /** @type {(inputs: Content_Kelvin_EyebrowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コミュニティ Mod`)
};

/**
* | output |
* | --- |
* | "Community mod" |
*
* @param {Content_Kelvin_EyebrowInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_kelvin_eyebrow = /** @type {((inputs?: Content_Kelvin_EyebrowInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Kelvin_EyebrowInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_kelvin_eyebrow(inputs)
	if (locale === "de") return de_content_kelvin_eyebrow(inputs)
	if (locale === "fr") return fr_content_kelvin_eyebrow(inputs)
	if (locale === "it") return it_content_kelvin_eyebrow(inputs)
	if (locale === "nl") return nl_content_kelvin_eyebrow(inputs)
	if (locale === "pl") return pl_content_kelvin_eyebrow(inputs)
	if (locale === "pt") return pt_content_kelvin_eyebrow(inputs)
	if (locale === "ru") return ru_content_kelvin_eyebrow(inputs)
	if (locale === "sv") return sv_content_kelvin_eyebrow(inputs)
	if (locale === "tr") return tr_content_kelvin_eyebrow(inputs)
	if (locale === "zh") return zh_content_kelvin_eyebrow(inputs)
	if (locale === "ja") return ja_content_kelvin_eyebrow(inputs)
	return en_content_kelvin_eyebrow(inputs)
});
