/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Scope_AllInputs */

const en_cmdk_scope_all = /** @type {(inputs: Cmdk_Scope_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Everything`)
};

const es_cmdk_scope_all = /** @type {(inputs: Cmdk_Scope_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todo`)
};

const de_cmdk_scope_all = /** @type {(inputs: Cmdk_Scope_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alles`)
};

const fr_cmdk_scope_all = /** @type {(inputs: Cmdk_Scope_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tout`)
};

const it_cmdk_scope_all = /** @type {(inputs: Cmdk_Scope_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutto`)
};

const nl_cmdk_scope_all = /** @type {(inputs: Cmdk_Scope_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alles`)
};

const pl_cmdk_scope_all = /** @type {(inputs: Cmdk_Scope_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszystko`)
};

const pt_cmdk_scope_all = /** @type {(inputs: Cmdk_Scope_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tudo`)
};

const ru_cmdk_scope_all = /** @type {(inputs: Cmdk_Scope_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Везде`)
};

const sv_cmdk_scope_all = /** @type {(inputs: Cmdk_Scope_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Allt`)
};

const tr_cmdk_scope_all = /** @type {(inputs: Cmdk_Scope_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Her şey`)
};

const zh_cmdk_scope_all = /** @type {(inputs: Cmdk_Scope_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`全部`)
};

const ja_cmdk_scope_all = /** @type {(inputs: Cmdk_Scope_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべて`)
};

/**
* | output |
* | --- |
* | "Everything" |
*
* @param {Cmdk_Scope_AllInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_scope_all = /** @type {((inputs?: Cmdk_Scope_AllInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Scope_AllInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_scope_all(inputs)
	if (locale === "de") return de_cmdk_scope_all(inputs)
	if (locale === "fr") return fr_cmdk_scope_all(inputs)
	if (locale === "it") return it_cmdk_scope_all(inputs)
	if (locale === "nl") return nl_cmdk_scope_all(inputs)
	if (locale === "pl") return pl_cmdk_scope_all(inputs)
	if (locale === "pt") return pt_cmdk_scope_all(inputs)
	if (locale === "ru") return ru_cmdk_scope_all(inputs)
	if (locale === "sv") return sv_cmdk_scope_all(inputs)
	if (locale === "tr") return tr_cmdk_scope_all(inputs)
	if (locale === "zh") return zh_cmdk_scope_all(inputs)
	if (locale === "ja") return ja_cmdk_scope_all(inputs)
	return en_cmdk_scope_all(inputs)
});
