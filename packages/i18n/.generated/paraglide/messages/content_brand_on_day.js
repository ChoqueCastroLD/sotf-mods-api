/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Brand_On_DayInputs */

const en_content_brand_on_day = /** @type {(inputs: Content_Brand_On_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Light backgrounds`)
};

const es_content_brand_on_day = /** @type {(inputs: Content_Brand_On_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fondos claros`)
};

const de_content_brand_on_day = /** @type {(inputs: Content_Brand_On_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Helle Hintergründe`)
};

const fr_content_brand_on_day = /** @type {(inputs: Content_Brand_On_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fonds clairs`)
};

const it_content_brand_on_day = /** @type {(inputs: Content_Brand_On_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sfondi chiari`)
};

const nl_content_brand_on_day = /** @type {(inputs: Content_Brand_On_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lichte achtergronden`)
};

const pl_content_brand_on_day = /** @type {(inputs: Content_Brand_On_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jasne tła`)
};

const pt_content_brand_on_day = /** @type {(inputs: Content_Brand_On_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fundos claros`)
};

const ru_content_brand_on_day = /** @type {(inputs: Content_Brand_On_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Светлый фон`)
};

const sv_content_brand_on_day = /** @type {(inputs: Content_Brand_On_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ljusa bakgrunder`)
};

const tr_content_brand_on_day = /** @type {(inputs: Content_Brand_On_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Açık arka planlar`)
};

const zh_content_brand_on_day = /** @type {(inputs: Content_Brand_On_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`浅色背景`)
};

const ja_content_brand_on_day = /** @type {(inputs: Content_Brand_On_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`明るい背景`)
};

/**
* | output |
* | --- |
* | "Light backgrounds" |
*
* @param {Content_Brand_On_DayInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_brand_on_day = /** @type {((inputs?: Content_Brand_On_DayInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Brand_On_DayInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_brand_on_day(inputs)
	if (locale === "de") return de_content_brand_on_day(inputs)
	if (locale === "fr") return fr_content_brand_on_day(inputs)
	if (locale === "it") return it_content_brand_on_day(inputs)
	if (locale === "nl") return nl_content_brand_on_day(inputs)
	if (locale === "pl") return pl_content_brand_on_day(inputs)
	if (locale === "pt") return pt_content_brand_on_day(inputs)
	if (locale === "ru") return ru_content_brand_on_day(inputs)
	if (locale === "sv") return sv_content_brand_on_day(inputs)
	if (locale === "tr") return tr_content_brand_on_day(inputs)
	if (locale === "zh") return zh_content_brand_on_day(inputs)
	if (locale === "ja") return ja_content_brand_on_day(inputs)
	return en_content_brand_on_day(inputs)
});
