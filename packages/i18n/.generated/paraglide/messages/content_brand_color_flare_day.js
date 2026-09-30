/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Brand_Color_Flare_DayInputs */

const en_content_brand_color_flare_day = /** @type {(inputs: Content_Brand_Color_Flare_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Flare on Day`)
};

const es_content_brand_color_flare_day = /** @type {(inputs: Content_Brand_Color_Flare_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bengala sobre Día`)
};

const de_content_brand_color_flare_day = /** @type {(inputs: Content_Brand_Color_Flare_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Flare auf Day`)
};

const fr_content_brand_color_flare_day = /** @type {(inputs: Content_Brand_Color_Flare_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fusée sur Jour`)
};

const it_content_brand_color_flare_day = /** @type {(inputs: Content_Brand_Color_Flare_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Razzo su Giorno`)
};

const nl_content_brand_color_flare_day = /** @type {(inputs: Content_Brand_Color_Flare_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Flare op Day`)
};

const pl_content_brand_color_flare_day = /** @type {(inputs: Content_Brand_Color_Flare_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Raca na Dniu`)
};

const pt_content_brand_color_flare_day = /** @type {(inputs: Content_Brand_Color_Flare_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sinalizador sobre Dia`)
};

const ru_content_brand_color_flare_day = /** @type {(inputs: Content_Brand_Color_Flare_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ракета на «Дне»`)
};

const sv_content_brand_color_flare_day = /** @type {(inputs: Content_Brand_Color_Flare_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Flare på Day`)
};

const tr_content_brand_color_flare_day = /** @type {(inputs: Content_Brand_Color_Flare_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Day üzerinde Flare`)
};

const zh_content_brand_color_flare_day = /** @type {(inputs: Content_Brand_Color_Flare_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`日间上的信号焰`)
};

const ja_content_brand_color_flare_day = /** @type {(inputs: Content_Brand_Color_Flare_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Day 上の Flare`)
};

/**
* | output |
* | --- |
* | "Flare on Day" |
*
* @param {Content_Brand_Color_Flare_DayInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_brand_color_flare_day = /** @type {((inputs?: Content_Brand_Color_Flare_DayInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Brand_Color_Flare_DayInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_brand_color_flare_day(inputs)
	if (locale === "de") return de_content_brand_color_flare_day(inputs)
	if (locale === "fr") return fr_content_brand_color_flare_day(inputs)
	if (locale === "it") return it_content_brand_color_flare_day(inputs)
	if (locale === "nl") return nl_content_brand_color_flare_day(inputs)
	if (locale === "pl") return pl_content_brand_color_flare_day(inputs)
	if (locale === "pt") return pt_content_brand_color_flare_day(inputs)
	if (locale === "ru") return ru_content_brand_color_flare_day(inputs)
	if (locale === "sv") return sv_content_brand_color_flare_day(inputs)
	if (locale === "tr") return tr_content_brand_color_flare_day(inputs)
	if (locale === "zh") return zh_content_brand_color_flare_day(inputs)
	if (locale === "ja") return ja_content_brand_color_flare_day(inputs)
	return en_content_brand_color_flare_day(inputs)
});
