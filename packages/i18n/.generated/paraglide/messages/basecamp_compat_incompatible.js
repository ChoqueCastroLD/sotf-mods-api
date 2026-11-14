/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Compat_IncompatibleInputs */

const en_basecamp_compat_incompatible = /** @type {(inputs: Basecamp_Compat_IncompatibleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Incompatible mods`)
};

const es_basecamp_compat_incompatible = /** @type {(inputs: Basecamp_Compat_IncompatibleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods incompatibles`)
};

const de_basecamp_compat_incompatible = /** @type {(inputs: Basecamp_Compat_IncompatibleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inkompatible Mods`)
};

const fr_basecamp_compat_incompatible = /** @type {(inputs: Basecamp_Compat_IncompatibleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods incompatibles`)
};

const it_basecamp_compat_incompatible = /** @type {(inputs: Basecamp_Compat_IncompatibleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod incompatibili`)
};

const nl_basecamp_compat_incompatible = /** @type {(inputs: Basecamp_Compat_IncompatibleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Incompatibele mods`)
};

const pl_basecamp_compat_incompatible = /** @type {(inputs: Basecamp_Compat_IncompatibleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niezgodne mody`)
};

const pt_basecamp_compat_incompatible = /** @type {(inputs: Basecamp_Compat_IncompatibleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods incompatíveis`)
};

const ru_basecamp_compat_incompatible = /** @type {(inputs: Basecamp_Compat_IncompatibleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Несовместимые моды`)
};

const sv_basecamp_compat_incompatible = /** @type {(inputs: Basecamp_Compat_IncompatibleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inkompatibla moddar`)
};

const tr_basecamp_compat_incompatible = /** @type {(inputs: Basecamp_Compat_IncompatibleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uyumsuz modlar`)
};

const zh_basecamp_compat_incompatible = /** @type {(inputs: Basecamp_Compat_IncompatibleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不兼容的模组`)
};

const ja_basecamp_compat_incompatible = /** @type {(inputs: Basecamp_Compat_IncompatibleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`互換性のないMod`)
};

/**
* | output |
* | --- |
* | "Incompatible mods" |
*
* @param {Basecamp_Compat_IncompatibleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_compat_incompatible = /** @type {((inputs?: Basecamp_Compat_IncompatibleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Compat_IncompatibleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_compat_incompatible(inputs)
	if (locale === "de") return de_basecamp_compat_incompatible(inputs)
	if (locale === "fr") return fr_basecamp_compat_incompatible(inputs)
	if (locale === "it") return it_basecamp_compat_incompatible(inputs)
	if (locale === "nl") return nl_basecamp_compat_incompatible(inputs)
	if (locale === "pl") return pl_basecamp_compat_incompatible(inputs)
	if (locale === "pt") return pt_basecamp_compat_incompatible(inputs)
	if (locale === "ru") return ru_basecamp_compat_incompatible(inputs)
	if (locale === "sv") return sv_basecamp_compat_incompatible(inputs)
	if (locale === "tr") return tr_basecamp_compat_incompatible(inputs)
	if (locale === "zh") return zh_basecamp_compat_incompatible(inputs)
	if (locale === "ja") return ja_basecamp_compat_incompatible(inputs)
	return en_basecamp_compat_incompatible(inputs)
});
