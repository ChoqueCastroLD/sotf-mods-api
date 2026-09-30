/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Scope_LabelInputs */

const en_cmdk_scope_label = /** @type {(inputs: Cmdk_Scope_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search in`)
};

const es_cmdk_scope_label = /** @type {(inputs: Cmdk_Scope_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscar en`)
};

const de_cmdk_scope_label = /** @type {(inputs: Cmdk_Scope_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suchen in`)
};

const fr_cmdk_scope_label = /** @type {(inputs: Cmdk_Scope_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rechercher dans`)
};

const it_cmdk_scope_label = /** @type {(inputs: Cmdk_Scope_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerca in`)
};

const nl_cmdk_scope_label = /** @type {(inputs: Cmdk_Scope_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zoeken in`)
};

const pl_cmdk_scope_label = /** @type {(inputs: Cmdk_Scope_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szukaj w`)
};

const pt_cmdk_scope_label = /** @type {(inputs: Cmdk_Scope_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscar em`)
};

const ru_cmdk_scope_label = /** @type {(inputs: Cmdk_Scope_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Где искать`)
};

const sv_cmdk_scope_label = /** @type {(inputs: Cmdk_Scope_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sök i`)
};

const tr_cmdk_scope_label = /** @type {(inputs: Cmdk_Scope_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arama alanı`)
};

const zh_cmdk_scope_label = /** @type {(inputs: Cmdk_Scope_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索范围`)
};

const ja_cmdk_scope_label = /** @type {(inputs: Cmdk_Scope_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`検索対象`)
};

/**
* | output |
* | --- |
* | "Search in" |
*
* @param {Cmdk_Scope_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_scope_label = /** @type {((inputs?: Cmdk_Scope_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Scope_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_scope_label(inputs)
	if (locale === "de") return de_cmdk_scope_label(inputs)
	if (locale === "fr") return fr_cmdk_scope_label(inputs)
	if (locale === "it") return it_cmdk_scope_label(inputs)
	if (locale === "nl") return nl_cmdk_scope_label(inputs)
	if (locale === "pl") return pl_cmdk_scope_label(inputs)
	if (locale === "pt") return pt_cmdk_scope_label(inputs)
	if (locale === "ru") return ru_cmdk_scope_label(inputs)
	if (locale === "sv") return sv_cmdk_scope_label(inputs)
	if (locale === "tr") return tr_cmdk_scope_label(inputs)
	if (locale === "zh") return zh_cmdk_scope_label(inputs)
	if (locale === "ja") return ja_cmdk_scope_label(inputs)
	return en_cmdk_scope_label(inputs)
});
