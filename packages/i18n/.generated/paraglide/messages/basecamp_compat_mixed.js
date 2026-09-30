/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Compat_MixedInputs */

const en_basecamp_compat_mixed = /** @type {(inputs: Basecamp_Compat_MixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mixed`)
};

const es_basecamp_compat_mixed = /** @type {(inputs: Basecamp_Compat_MixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mixto`)
};

const de_basecamp_compat_mixed = /** @type {(inputs: Basecamp_Compat_MixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gemischt`)
};

const fr_basecamp_compat_mixed = /** @type {(inputs: Basecamp_Compat_MixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mitigé`)
};

const it_basecamp_compat_mixed = /** @type {(inputs: Basecamp_Compat_MixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Misto`)
};

const nl_basecamp_compat_mixed = /** @type {(inputs: Basecamp_Compat_MixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wisselend`)
};

const pl_basecamp_compat_mixed = /** @type {(inputs: Basecamp_Compat_MixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Różnie`)
};

const pt_basecamp_compat_mixed = /** @type {(inputs: Basecamp_Compat_MixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Misto`)
};

const ru_basecamp_compat_mixed = /** @type {(inputs: Basecamp_Compat_MixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`По-разному`)
};

const sv_basecamp_compat_mixed = /** @type {(inputs: Basecamp_Compat_MixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Blandat`)
};

const tr_basecamp_compat_mixed = /** @type {(inputs: Basecamp_Compat_MixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Karışık`)
};

const zh_basecamp_compat_mixed = /** @type {(inputs: Basecamp_Compat_MixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`褒贬不一`)
};

const ja_basecamp_compat_mixed = /** @type {(inputs: Basecamp_Compat_MixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`賛否あり`)
};

/**
* | output |
* | --- |
* | "Mixed" |
*
* @param {Basecamp_Compat_MixedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_compat_mixed = /** @type {((inputs?: Basecamp_Compat_MixedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Compat_MixedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_compat_mixed(inputs)
	if (locale === "de") return de_basecamp_compat_mixed(inputs)
	if (locale === "fr") return fr_basecamp_compat_mixed(inputs)
	if (locale === "it") return it_basecamp_compat_mixed(inputs)
	if (locale === "nl") return nl_basecamp_compat_mixed(inputs)
	if (locale === "pl") return pl_basecamp_compat_mixed(inputs)
	if (locale === "pt") return pt_basecamp_compat_mixed(inputs)
	if (locale === "ru") return ru_basecamp_compat_mixed(inputs)
	if (locale === "sv") return sv_basecamp_compat_mixed(inputs)
	if (locale === "tr") return tr_basecamp_compat_mixed(inputs)
	if (locale === "zh") return zh_basecamp_compat_mixed(inputs)
	if (locale === "ja") return ja_basecamp_compat_mixed(inputs)
	return en_basecamp_compat_mixed(inputs)
});
