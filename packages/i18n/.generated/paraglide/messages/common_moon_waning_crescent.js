/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Moon_Waning_CrescentInputs */

const en_common_moon_waning_crescent = /** @type {(inputs: Common_Moon_Waning_CrescentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Waning crescent`)
};

const es_common_moon_waning_crescent = /** @type {(inputs: Common_Moon_Waning_CrescentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Luna menguante`)
};

const de_common_moon_waning_crescent = /** @type {(inputs: Common_Moon_Waning_CrescentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abnehmende Sichel`)
};

const fr_common_moon_waning_crescent = /** @type {(inputs: Common_Moon_Waning_CrescentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dernier croissant`)
};

const it_common_moon_waning_crescent = /** @type {(inputs: Common_Moon_Waning_CrescentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Luna calante`)
};

const nl_common_moon_waning_crescent = /** @type {(inputs: Common_Moon_Waning_CrescentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afnemende sikkel`)
};

const pl_common_moon_waning_crescent = /** @type {(inputs: Common_Moon_Waning_CrescentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ubywający sierp`)
};

const pt_common_moon_waning_crescent = /** @type {(inputs: Common_Moon_Waning_CrescentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lua minguante`)
};

const ru_common_moon_waning_crescent = /** @type {(inputs: Common_Moon_Waning_CrescentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Убывающий серп`)
};

const sv_common_moon_waning_crescent = /** @type {(inputs: Common_Moon_Waning_CrescentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avtagande skära`)
};

const tr_common_moon_waning_crescent = /** @type {(inputs: Common_Moon_Waning_CrescentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Küçülen hilal`)
};

const zh_common_moon_waning_crescent = /** @type {(inputs: Common_Moon_Waning_CrescentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`残月`)
};

const ja_common_moon_waning_crescent = /** @type {(inputs: Common_Moon_Waning_CrescentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`有明月`)
};

/**
* | output |
* | --- |
* | "Waning crescent" |
*
* @param {Common_Moon_Waning_CrescentInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_moon_waning_crescent = /** @type {((inputs?: Common_Moon_Waning_CrescentInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Moon_Waning_CrescentInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_moon_waning_crescent(inputs)
	if (locale === "de") return de_common_moon_waning_crescent(inputs)
	if (locale === "fr") return fr_common_moon_waning_crescent(inputs)
	if (locale === "it") return it_common_moon_waning_crescent(inputs)
	if (locale === "nl") return nl_common_moon_waning_crescent(inputs)
	if (locale === "pl") return pl_common_moon_waning_crescent(inputs)
	if (locale === "pt") return pt_common_moon_waning_crescent(inputs)
	if (locale === "ru") return ru_common_moon_waning_crescent(inputs)
	if (locale === "sv") return sv_common_moon_waning_crescent(inputs)
	if (locale === "tr") return tr_common_moon_waning_crescent(inputs)
	if (locale === "zh") return zh_common_moon_waning_crescent(inputs)
	if (locale === "ja") return ja_common_moon_waning_crescent(inputs)
	return en_common_moon_waning_crescent(inputs)
});
