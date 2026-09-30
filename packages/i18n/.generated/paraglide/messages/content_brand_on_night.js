/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Brand_On_NightInputs */

const en_content_brand_on_night = /** @type {(inputs: Content_Brand_On_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dark backgrounds`)
};

const es_content_brand_on_night = /** @type {(inputs: Content_Brand_On_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fondos oscuros`)
};

const de_content_brand_on_night = /** @type {(inputs: Content_Brand_On_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dunkle Hintergründe`)
};

const fr_content_brand_on_night = /** @type {(inputs: Content_Brand_On_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fonds sombres`)
};

const it_content_brand_on_night = /** @type {(inputs: Content_Brand_On_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sfondi scuri`)
};

const nl_content_brand_on_night = /** @type {(inputs: Content_Brand_On_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Donkere achtergronden`)
};

const pl_content_brand_on_night = /** @type {(inputs: Content_Brand_On_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ciemne tła`)
};

const pt_content_brand_on_night = /** @type {(inputs: Content_Brand_On_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fundos escuros`)
};

const ru_content_brand_on_night = /** @type {(inputs: Content_Brand_On_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Тёмный фон`)
};

const sv_content_brand_on_night = /** @type {(inputs: Content_Brand_On_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mörka bakgrunder`)
};

const tr_content_brand_on_night = /** @type {(inputs: Content_Brand_On_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Koyu arka planlar`)
};

const zh_content_brand_on_night = /** @type {(inputs: Content_Brand_On_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`深色背景`)
};

const ja_content_brand_on_night = /** @type {(inputs: Content_Brand_On_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暗い背景`)
};

/**
* | output |
* | --- |
* | "Dark backgrounds" |
*
* @param {Content_Brand_On_NightInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_brand_on_night = /** @type {((inputs?: Content_Brand_On_NightInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Brand_On_NightInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_brand_on_night(inputs)
	if (locale === "de") return de_content_brand_on_night(inputs)
	if (locale === "fr") return fr_content_brand_on_night(inputs)
	if (locale === "it") return it_content_brand_on_night(inputs)
	if (locale === "nl") return nl_content_brand_on_night(inputs)
	if (locale === "pl") return pl_content_brand_on_night(inputs)
	if (locale === "pt") return pt_content_brand_on_night(inputs)
	if (locale === "ru") return ru_content_brand_on_night(inputs)
	if (locale === "sv") return sv_content_brand_on_night(inputs)
	if (locale === "tr") return tr_content_brand_on_night(inputs)
	if (locale === "zh") return zh_content_brand_on_night(inputs)
	if (locale === "ja") return ja_content_brand_on_night(inputs)
	return en_content_brand_on_night(inputs)
});
