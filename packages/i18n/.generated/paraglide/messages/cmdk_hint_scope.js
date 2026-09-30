/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Hint_ScopeInputs */

const en_cmdk_hint_scope = /** @type {(inputs: Cmdk_Hint_ScopeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scope`)
};

const es_cmdk_hint_scope = /** @type {(inputs: Cmdk_Hint_ScopeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ámbito`)
};

const de_cmdk_hint_scope = /** @type {(inputs: Cmdk_Hint_ScopeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bereich`)
};

const fr_cmdk_hint_scope = /** @type {(inputs: Cmdk_Hint_ScopeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Portée`)
};

const it_cmdk_hint_scope = /** @type {(inputs: Cmdk_Hint_ScopeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ambito`)
};

const nl_cmdk_hint_scope = /** @type {(inputs: Cmdk_Hint_ScopeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bereik`)
};

const pl_cmdk_hint_scope = /** @type {(inputs: Cmdk_Hint_ScopeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zakres`)
};

const pt_cmdk_hint_scope = /** @type {(inputs: Cmdk_Hint_ScopeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escopo`)
};

const ru_cmdk_hint_scope = /** @type {(inputs: Cmdk_Hint_ScopeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Область`)
};

const sv_cmdk_hint_scope = /** @type {(inputs: Cmdk_Hint_ScopeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Omfång`)
};

const tr_cmdk_hint_scope = /** @type {(inputs: Cmdk_Hint_ScopeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alan`)
};

const zh_cmdk_hint_scope = /** @type {(inputs: Cmdk_Hint_ScopeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`范围`)
};

const ja_cmdk_hint_scope = /** @type {(inputs: Cmdk_Hint_ScopeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`範囲`)
};

/**
* | output |
* | --- |
* | "Scope" |
*
* @param {Cmdk_Hint_ScopeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_hint_scope = /** @type {((inputs?: Cmdk_Hint_ScopeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Hint_ScopeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_hint_scope(inputs)
	if (locale === "de") return de_cmdk_hint_scope(inputs)
	if (locale === "fr") return fr_cmdk_hint_scope(inputs)
	if (locale === "it") return it_cmdk_hint_scope(inputs)
	if (locale === "nl") return nl_cmdk_hint_scope(inputs)
	if (locale === "pl") return pl_cmdk_hint_scope(inputs)
	if (locale === "pt") return pt_cmdk_hint_scope(inputs)
	if (locale === "ru") return ru_cmdk_hint_scope(inputs)
	if (locale === "sv") return sv_cmdk_hint_scope(inputs)
	if (locale === "tr") return tr_cmdk_hint_scope(inputs)
	if (locale === "zh") return zh_cmdk_hint_scope(inputs)
	if (locale === "ja") return ja_cmdk_hint_scope(inputs)
	return en_cmdk_hint_scope(inputs)
});
