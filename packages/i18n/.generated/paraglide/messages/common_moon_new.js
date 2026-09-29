/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Moon_NewInputs */

const en_common_moon_new = /** @type {(inputs: Common_Moon_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New moon`)
};

const es_common_moon_new = /** @type {(inputs: Common_Moon_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Luna nueva`)
};

const de_common_moon_new = /** @type {(inputs: Common_Moon_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neumond`)
};

const fr_common_moon_new = /** @type {(inputs: Common_Moon_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nouvelle lune`)
};

const it_common_moon_new = /** @type {(inputs: Common_Moon_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Luna nuova`)
};

const nl_common_moon_new = /** @type {(inputs: Common_Moon_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuwe maan`)
};

const pl_common_moon_new = /** @type {(inputs: Common_Moon_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nów`)
};

const pt_common_moon_new = /** @type {(inputs: Common_Moon_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lua nova`)
};

const ru_common_moon_new = /** @type {(inputs: Common_Moon_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новолуние`)
};

const sv_common_moon_new = /** @type {(inputs: Common_Moon_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nymåne`)
};

const tr_common_moon_new = /** @type {(inputs: Common_Moon_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni ay`)
};

const zh_common_moon_new = /** @type {(inputs: Common_Moon_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新月`)
};

const ja_common_moon_new = /** @type {(inputs: Common_Moon_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新月`)
};

/**
* | output |
* | --- |
* | "New moon" |
*
* @param {Common_Moon_NewInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_moon_new = /** @type {((inputs?: Common_Moon_NewInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Moon_NewInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_moon_new(inputs)
	if (locale === "de") return de_common_moon_new(inputs)
	if (locale === "fr") return fr_common_moon_new(inputs)
	if (locale === "it") return it_common_moon_new(inputs)
	if (locale === "nl") return nl_common_moon_new(inputs)
	if (locale === "pl") return pl_common_moon_new(inputs)
	if (locale === "pt") return pt_common_moon_new(inputs)
	if (locale === "ru") return ru_common_moon_new(inputs)
	if (locale === "sv") return sv_common_moon_new(inputs)
	if (locale === "tr") return tr_common_moon_new(inputs)
	if (locale === "zh") return zh_common_moon_new(inputs)
	if (locale === "ja") return ja_common_moon_new(inputs)
	return en_common_moon_new(inputs)
});
