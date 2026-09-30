/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Brand_Color_Flare_NightInputs */

const en_content_brand_color_flare_night = /** @type {(inputs: Content_Brand_Color_Flare_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Flare on Night`)
};

const es_content_brand_color_flare_night = /** @type {(inputs: Content_Brand_Color_Flare_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bengala sobre Noche`)
};

const de_content_brand_color_flare_night = /** @type {(inputs: Content_Brand_Color_Flare_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Flare auf Night`)
};

const fr_content_brand_color_flare_night = /** @type {(inputs: Content_Brand_Color_Flare_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fusée sur Nuit`)
};

const it_content_brand_color_flare_night = /** @type {(inputs: Content_Brand_Color_Flare_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Razzo su Notte`)
};

const nl_content_brand_color_flare_night = /** @type {(inputs: Content_Brand_Color_Flare_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Flare op Night`)
};

const pl_content_brand_color_flare_night = /** @type {(inputs: Content_Brand_Color_Flare_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Raca na Nocy`)
};

const pt_content_brand_color_flare_night = /** @type {(inputs: Content_Brand_Color_Flare_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sinalizador sobre Noite`)
};

const ru_content_brand_color_flare_night = /** @type {(inputs: Content_Brand_Color_Flare_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ракета на «Ночи»`)
};

const sv_content_brand_color_flare_night = /** @type {(inputs: Content_Brand_Color_Flare_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Flare på Night`)
};

const tr_content_brand_color_flare_night = /** @type {(inputs: Content_Brand_Color_Flare_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Night üzerinde Flare`)
};

const zh_content_brand_color_flare_night = /** @type {(inputs: Content_Brand_Color_Flare_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`夜色上的信号焰`)
};

const ja_content_brand_color_flare_night = /** @type {(inputs: Content_Brand_Color_Flare_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Night 上の Flare`)
};

/**
* | output |
* | --- |
* | "Flare on Night" |
*
* @param {Content_Brand_Color_Flare_NightInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_brand_color_flare_night = /** @type {((inputs?: Content_Brand_Color_Flare_NightInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Brand_Color_Flare_NightInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_brand_color_flare_night(inputs)
	if (locale === "de") return de_content_brand_color_flare_night(inputs)
	if (locale === "fr") return fr_content_brand_color_flare_night(inputs)
	if (locale === "it") return it_content_brand_color_flare_night(inputs)
	if (locale === "nl") return nl_content_brand_color_flare_night(inputs)
	if (locale === "pl") return pl_content_brand_color_flare_night(inputs)
	if (locale === "pt") return pt_content_brand_color_flare_night(inputs)
	if (locale === "ru") return ru_content_brand_color_flare_night(inputs)
	if (locale === "sv") return sv_content_brand_color_flare_night(inputs)
	if (locale === "tr") return tr_content_brand_color_flare_night(inputs)
	if (locale === "zh") return zh_content_brand_color_flare_night(inputs)
	if (locale === "ja") return ja_content_brand_color_flare_night(inputs)
	return en_content_brand_color_flare_night(inputs)
});
