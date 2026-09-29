/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Theme_NightInputs */

const en_common_theme_night = /** @type {(inputs: Common_Theme_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Night`)
};

const es_common_theme_night = /** @type {(inputs: Common_Theme_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noche`)
};

const de_common_theme_night = /** @type {(inputs: Common_Theme_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nacht`)
};

const fr_common_theme_night = /** @type {(inputs: Common_Theme_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuit`)
};

const it_common_theme_night = /** @type {(inputs: Common_Theme_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notte`)
};

const nl_common_theme_night = /** @type {(inputs: Common_Theme_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nacht`)
};

const pl_common_theme_night = /** @type {(inputs: Common_Theme_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noc`)
};

const pt_common_theme_night = /** @type {(inputs: Common_Theme_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noite`)
};

const ru_common_theme_night = /** @type {(inputs: Common_Theme_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ночь`)
};

const sv_common_theme_night = /** @type {(inputs: Common_Theme_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Natt`)
};

const tr_common_theme_night = /** @type {(inputs: Common_Theme_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gece`)
};

const zh_common_theme_night = /** @type {(inputs: Common_Theme_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`夜间`)
};

const ja_common_theme_night = /** @type {(inputs: Common_Theme_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`夜`)
};

/**
* | output |
* | --- |
* | "Night" |
*
* @param {Common_Theme_NightInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_theme_night = /** @type {((inputs?: Common_Theme_NightInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Theme_NightInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_theme_night(inputs)
	if (locale === "de") return de_common_theme_night(inputs)
	if (locale === "fr") return fr_common_theme_night(inputs)
	if (locale === "it") return it_common_theme_night(inputs)
	if (locale === "nl") return nl_common_theme_night(inputs)
	if (locale === "pl") return pl_common_theme_night(inputs)
	if (locale === "pt") return pt_common_theme_night(inputs)
	if (locale === "ru") return ru_common_theme_night(inputs)
	if (locale === "sv") return sv_common_theme_night(inputs)
	if (locale === "tr") return tr_common_theme_night(inputs)
	if (locale === "zh") return zh_common_theme_night(inputs)
	if (locale === "ja") return ja_common_theme_night(inputs)
	return en_common_theme_night(inputs)
});
