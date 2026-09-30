/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Brand_Color_NightInputs */

const en_content_brand_color_night = /** @type {(inputs: Content_Brand_Color_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Night (background)`)
};

const es_content_brand_color_night = /** @type {(inputs: Content_Brand_Color_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noche (fondo)`)
};

const de_content_brand_color_night = /** @type {(inputs: Content_Brand_Color_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Night (Hintergrund)`)
};

const fr_content_brand_color_night = /** @type {(inputs: Content_Brand_Color_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuit (fond)`)
};

const it_content_brand_color_night = /** @type {(inputs: Content_Brand_Color_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notte (sfondo)`)
};

const nl_content_brand_color_night = /** @type {(inputs: Content_Brand_Color_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Night (achtergrond)`)
};

const pl_content_brand_color_night = /** @type {(inputs: Content_Brand_Color_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noc (tło)`)
};

const pt_content_brand_color_night = /** @type {(inputs: Content_Brand_Color_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noite (fundo)`)
};

const ru_content_brand_color_night = /** @type {(inputs: Content_Brand_Color_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ночь (фон)`)
};

const sv_content_brand_color_night = /** @type {(inputs: Content_Brand_Color_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Night (bakgrund)`)
};

const tr_content_brand_color_night = /** @type {(inputs: Content_Brand_Color_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Night (arka plan)`)
};

const zh_content_brand_color_night = /** @type {(inputs: Content_Brand_Color_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`夜色（背景）`)
};

const ja_content_brand_color_night = /** @type {(inputs: Content_Brand_Color_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Night（背景）`)
};

/**
* | output |
* | --- |
* | "Night (background)" |
*
* @param {Content_Brand_Color_NightInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_brand_color_night = /** @type {((inputs?: Content_Brand_Color_NightInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Brand_Color_NightInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_brand_color_night(inputs)
	if (locale === "de") return de_content_brand_color_night(inputs)
	if (locale === "fr") return fr_content_brand_color_night(inputs)
	if (locale === "it") return it_content_brand_color_night(inputs)
	if (locale === "nl") return nl_content_brand_color_night(inputs)
	if (locale === "pl") return pl_content_brand_color_night(inputs)
	if (locale === "pt") return pt_content_brand_color_night(inputs)
	if (locale === "ru") return ru_content_brand_color_night(inputs)
	if (locale === "sv") return sv_content_brand_color_night(inputs)
	if (locale === "tr") return tr_content_brand_color_night(inputs)
	if (locale === "zh") return zh_content_brand_color_night(inputs)
	if (locale === "ja") return ja_content_brand_color_night(inputs)
	return en_content_brand_color_night(inputs)
});
