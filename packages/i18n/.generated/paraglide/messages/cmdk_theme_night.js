/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Theme_NightInputs */

const en_cmdk_theme_night = /** @type {(inputs: Cmdk_Theme_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Night`)
};

const es_cmdk_theme_night = /** @type {(inputs: Cmdk_Theme_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noche`)
};

const de_cmdk_theme_night = /** @type {(inputs: Cmdk_Theme_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nacht`)
};

const fr_cmdk_theme_night = /** @type {(inputs: Cmdk_Theme_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuit`)
};

const it_cmdk_theme_night = /** @type {(inputs: Cmdk_Theme_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notte`)
};

const nl_cmdk_theme_night = /** @type {(inputs: Cmdk_Theme_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nacht`)
};

const pl_cmdk_theme_night = /** @type {(inputs: Cmdk_Theme_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noc`)
};

const pt_cmdk_theme_night = /** @type {(inputs: Cmdk_Theme_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noite`)
};

const ru_cmdk_theme_night = /** @type {(inputs: Cmdk_Theme_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ночь`)
};

const sv_cmdk_theme_night = /** @type {(inputs: Cmdk_Theme_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Natt`)
};

const tr_cmdk_theme_night = /** @type {(inputs: Cmdk_Theme_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gece`)
};

const zh_cmdk_theme_night = /** @type {(inputs: Cmdk_Theme_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`夜间`)
};

const ja_cmdk_theme_night = /** @type {(inputs: Cmdk_Theme_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`夜`)
};

/**
* | output |
* | --- |
* | "Night" |
*
* @param {Cmdk_Theme_NightInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_theme_night = /** @type {((inputs?: Cmdk_Theme_NightInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Theme_NightInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_theme_night(inputs)
	if (locale === "de") return de_cmdk_theme_night(inputs)
	if (locale === "fr") return fr_cmdk_theme_night(inputs)
	if (locale === "it") return it_cmdk_theme_night(inputs)
	if (locale === "nl") return nl_cmdk_theme_night(inputs)
	if (locale === "pl") return pl_cmdk_theme_night(inputs)
	if (locale === "pt") return pt_cmdk_theme_night(inputs)
	if (locale === "ru") return ru_cmdk_theme_night(inputs)
	if (locale === "sv") return sv_cmdk_theme_night(inputs)
	if (locale === "tr") return tr_cmdk_theme_night(inputs)
	if (locale === "zh") return zh_cmdk_theme_night(inputs)
	if (locale === "ja") return ja_cmdk_theme_night(inputs)
	return en_cmdk_theme_night(inputs)
});
