/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Moon_Waxing_CrescentInputs */

const en_common_moon_waxing_crescent = /** @type {(inputs: Common_Moon_Waxing_CrescentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Waxing crescent`)
};

const es_common_moon_waxing_crescent = /** @type {(inputs: Common_Moon_Waxing_CrescentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Luna creciente`)
};

const de_common_moon_waxing_crescent = /** @type {(inputs: Common_Moon_Waxing_CrescentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zunehmende Sichel`)
};

const fr_common_moon_waxing_crescent = /** @type {(inputs: Common_Moon_Waxing_CrescentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Premier croissant`)
};

const it_common_moon_waxing_crescent = /** @type {(inputs: Common_Moon_Waxing_CrescentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Luna crescente`)
};

const nl_common_moon_waxing_crescent = /** @type {(inputs: Common_Moon_Waxing_CrescentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wassende sikkel`)
};

const pl_common_moon_waxing_crescent = /** @type {(inputs: Common_Moon_Waxing_CrescentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przybywający sierp`)
};

const pt_common_moon_waxing_crescent = /** @type {(inputs: Common_Moon_Waxing_CrescentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lua crescente`)
};

const ru_common_moon_waxing_crescent = /** @type {(inputs: Common_Moon_Waxing_CrescentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Растущий серп`)
};

const sv_common_moon_waxing_crescent = /** @type {(inputs: Common_Moon_Waxing_CrescentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tilltagande skära`)
};

const tr_common_moon_waxing_crescent = /** @type {(inputs: Common_Moon_Waxing_CrescentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Büyüyen hilal`)
};

const zh_common_moon_waxing_crescent = /** @type {(inputs: Common_Moon_Waxing_CrescentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`蛾眉月`)
};

const ja_common_moon_waxing_crescent = /** @type {(inputs: Common_Moon_Waxing_CrescentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`三日月`)
};

/**
* | output |
* | --- |
* | "Waxing crescent" |
*
* @param {Common_Moon_Waxing_CrescentInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_moon_waxing_crescent = /** @type {((inputs?: Common_Moon_Waxing_CrescentInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Moon_Waxing_CrescentInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_moon_waxing_crescent(inputs)
	if (locale === "de") return de_common_moon_waxing_crescent(inputs)
	if (locale === "fr") return fr_common_moon_waxing_crescent(inputs)
	if (locale === "it") return it_common_moon_waxing_crescent(inputs)
	if (locale === "nl") return nl_common_moon_waxing_crescent(inputs)
	if (locale === "pl") return pl_common_moon_waxing_crescent(inputs)
	if (locale === "pt") return pt_common_moon_waxing_crescent(inputs)
	if (locale === "ru") return ru_common_moon_waxing_crescent(inputs)
	if (locale === "sv") return sv_common_moon_waxing_crescent(inputs)
	if (locale === "tr") return tr_common_moon_waxing_crescent(inputs)
	if (locale === "zh") return zh_common_moon_waxing_crescent(inputs)
	if (locale === "ja") return ja_common_moon_waxing_crescent(inputs)
	return en_common_moon_waxing_crescent(inputs)
});
