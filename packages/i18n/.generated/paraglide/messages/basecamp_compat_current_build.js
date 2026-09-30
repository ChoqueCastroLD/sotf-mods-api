/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Compat_Current_BuildInputs */

const en_basecamp_compat_current_build = /** @type {(inputs: Basecamp_Compat_Current_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`current`)
};

const es_basecamp_compat_current_build = /** @type {(inputs: Basecamp_Compat_Current_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`actual`)
};

const de_basecamp_compat_current_build = /** @type {(inputs: Basecamp_Compat_Current_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`aktuell`)
};

const fr_basecamp_compat_current_build = /** @type {(inputs: Basecamp_Compat_Current_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`actuel`)
};

const it_basecamp_compat_current_build = /** @type {(inputs: Basecamp_Compat_Current_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`attuale`)
};

const nl_basecamp_compat_current_build = /** @type {(inputs: Basecamp_Compat_Current_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`huidig`)
};

const pl_basecamp_compat_current_build = /** @type {(inputs: Basecamp_Compat_Current_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`obecny`)
};

const pt_basecamp_compat_current_build = /** @type {(inputs: Basecamp_Compat_Current_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`atual`)
};

const ru_basecamp_compat_current_build = /** @type {(inputs: Basecamp_Compat_Current_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`текущий`)
};

const sv_basecamp_compat_current_build = /** @type {(inputs: Basecamp_Compat_Current_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`aktuell`)
};

const tr_basecamp_compat_current_build = /** @type {(inputs: Basecamp_Compat_Current_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`güncel`)
};

const zh_basecamp_compat_current_build = /** @type {(inputs: Basecamp_Compat_Current_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`当前`)
};

const ja_basecamp_compat_current_build = /** @type {(inputs: Basecamp_Compat_Current_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`現在`)
};

/**
* | output |
* | --- |
* | "current" |
*
* @param {Basecamp_Compat_Current_BuildInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_compat_current_build = /** @type {((inputs?: Basecamp_Compat_Current_BuildInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Compat_Current_BuildInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_compat_current_build(inputs)
	if (locale === "de") return de_basecamp_compat_current_build(inputs)
	if (locale === "fr") return fr_basecamp_compat_current_build(inputs)
	if (locale === "it") return it_basecamp_compat_current_build(inputs)
	if (locale === "nl") return nl_basecamp_compat_current_build(inputs)
	if (locale === "pl") return pl_basecamp_compat_current_build(inputs)
	if (locale === "pt") return pt_basecamp_compat_current_build(inputs)
	if (locale === "ru") return ru_basecamp_compat_current_build(inputs)
	if (locale === "sv") return sv_basecamp_compat_current_build(inputs)
	if (locale === "tr") return tr_basecamp_compat_current_build(inputs)
	if (locale === "zh") return zh_basecamp_compat_current_build(inputs)
	if (locale === "ja") return ja_basecamp_compat_current_build(inputs)
	return en_basecamp_compat_current_build(inputs)
});
