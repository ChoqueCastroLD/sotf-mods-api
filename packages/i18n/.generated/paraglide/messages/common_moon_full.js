/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Moon_FullInputs */

const en_common_moon_full = /** @type {(inputs: Common_Moon_FullInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Full moon`)
};

const es_common_moon_full = /** @type {(inputs: Common_Moon_FullInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Luna llena`)
};

const de_common_moon_full = /** @type {(inputs: Common_Moon_FullInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vollmond`)
};

const fr_common_moon_full = /** @type {(inputs: Common_Moon_FullInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pleine lune`)
};

const it_common_moon_full = /** @type {(inputs: Common_Moon_FullInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Luna piena`)
};

const nl_common_moon_full = /** @type {(inputs: Common_Moon_FullInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volle maan`)
};

const pl_common_moon_full = /** @type {(inputs: Common_Moon_FullInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pełnia`)
};

const pt_common_moon_full = /** @type {(inputs: Common_Moon_FullInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lua cheia`)
};

const ru_common_moon_full = /** @type {(inputs: Common_Moon_FullInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Полнолуние`)
};

const sv_common_moon_full = /** @type {(inputs: Common_Moon_FullInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fullmåne`)
};

const tr_common_moon_full = /** @type {(inputs: Common_Moon_FullInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dolunay`)
};

const zh_common_moon_full = /** @type {(inputs: Common_Moon_FullInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`满月`)
};

const ja_common_moon_full = /** @type {(inputs: Common_Moon_FullInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`満月`)
};

/**
* | output |
* | --- |
* | "Full moon" |
*
* @param {Common_Moon_FullInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_moon_full = /** @type {((inputs?: Common_Moon_FullInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Moon_FullInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_moon_full(inputs)
	if (locale === "de") return de_common_moon_full(inputs)
	if (locale === "fr") return fr_common_moon_full(inputs)
	if (locale === "it") return it_common_moon_full(inputs)
	if (locale === "nl") return nl_common_moon_full(inputs)
	if (locale === "pl") return pl_common_moon_full(inputs)
	if (locale === "pt") return pt_common_moon_full(inputs)
	if (locale === "ru") return ru_common_moon_full(inputs)
	if (locale === "sv") return sv_common_moon_full(inputs)
	if (locale === "tr") return tr_common_moon_full(inputs)
	if (locale === "zh") return zh_common_moon_full(inputs)
	if (locale === "ja") return ja_common_moon_full(inputs)
	return en_common_moon_full(inputs)
});
