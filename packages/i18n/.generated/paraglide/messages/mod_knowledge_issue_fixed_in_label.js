/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Issue_Fixed_In_LabelInputs */

const en_mod_knowledge_issue_fixed_in_label = /** @type {(inputs: Mod_Knowledge_Issue_Fixed_In_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fixed in version`)
};

const es_mod_knowledge_issue_fixed_in_label = /** @type {(inputs: Mod_Knowledge_Issue_Fixed_In_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Corregido en la versión`)
};

const de_mod_knowledge_issue_fixed_in_label = /** @type {(inputs: Mod_Knowledge_Issue_Fixed_In_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Behoben in Version`)
};

const fr_mod_knowledge_issue_fixed_in_label = /** @type {(inputs: Mod_Knowledge_Issue_Fixed_In_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Corrigé dans la version`)
};

const it_mod_knowledge_issue_fixed_in_label = /** @type {(inputs: Mod_Knowledge_Issue_Fixed_In_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Risolto nella versione`)
};

const nl_mod_knowledge_issue_fixed_in_label = /** @type {(inputs: Mod_Knowledge_Issue_Fixed_In_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opgelost in versie`)
};

const pl_mod_knowledge_issue_fixed_in_label = /** @type {(inputs: Mod_Knowledge_Issue_Fixed_In_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Naprawione w wersji`)
};

const pt_mod_knowledge_issue_fixed_in_label = /** @type {(inputs: Mod_Knowledge_Issue_Fixed_In_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Corrigido na versão`)
};

const ru_mod_knowledge_issue_fixed_in_label = /** @type {(inputs: Mod_Knowledge_Issue_Fixed_In_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Исправлено в версии`)
};

const sv_mod_knowledge_issue_fixed_in_label = /** @type {(inputs: Mod_Knowledge_Issue_Fixed_In_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Åtgärdat i version`)
};

const tr_mod_knowledge_issue_fixed_in_label = /** @type {(inputs: Mod_Knowledge_Issue_Fixed_In_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Düzeltildiği sürüm`)
};

const zh_mod_knowledge_issue_fixed_in_label = /** @type {(inputs: Mod_Knowledge_Issue_Fixed_In_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`修复版本`)
};

const ja_mod_knowledge_issue_fixed_in_label = /** @type {(inputs: Mod_Knowledge_Issue_Fixed_In_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`修正バージョン`)
};

/**
* | output |
* | --- |
* | "Fixed in version" |
*
* @param {Mod_Knowledge_Issue_Fixed_In_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_issue_fixed_in_label = /** @type {((inputs?: Mod_Knowledge_Issue_Fixed_In_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Issue_Fixed_In_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_issue_fixed_in_label(inputs)
	if (locale === "de") return de_mod_knowledge_issue_fixed_in_label(inputs)
	if (locale === "fr") return fr_mod_knowledge_issue_fixed_in_label(inputs)
	if (locale === "it") return it_mod_knowledge_issue_fixed_in_label(inputs)
	if (locale === "nl") return nl_mod_knowledge_issue_fixed_in_label(inputs)
	if (locale === "pl") return pl_mod_knowledge_issue_fixed_in_label(inputs)
	if (locale === "pt") return pt_mod_knowledge_issue_fixed_in_label(inputs)
	if (locale === "ru") return ru_mod_knowledge_issue_fixed_in_label(inputs)
	if (locale === "sv") return sv_mod_knowledge_issue_fixed_in_label(inputs)
	if (locale === "tr") return tr_mod_knowledge_issue_fixed_in_label(inputs)
	if (locale === "zh") return zh_mod_knowledge_issue_fixed_in_label(inputs)
	if (locale === "ja") return ja_mod_knowledge_issue_fixed_in_label(inputs)
	return en_mod_knowledge_issue_fixed_in_label(inputs)
});
