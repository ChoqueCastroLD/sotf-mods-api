/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ version: NonNullable<unknown> }} Mod_Knowledge_Issue_Fixed_InInputs */

const en_mod_knowledge_issue_fixed_in = /** @type {(inputs: Mod_Knowledge_Issue_Fixed_InInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Fixed in ${i?.version}`)
};

const es_mod_knowledge_issue_fixed_in = /** @type {(inputs: Mod_Knowledge_Issue_Fixed_InInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Corregido en ${i?.version}`)
};

const de_mod_knowledge_issue_fixed_in = /** @type {(inputs: Mod_Knowledge_Issue_Fixed_InInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Behoben in ${i?.version}`)
};

const fr_mod_knowledge_issue_fixed_in = /** @type {(inputs: Mod_Knowledge_Issue_Fixed_InInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Corrigé dans ${i?.version}`)
};

const it_mod_knowledge_issue_fixed_in = /** @type {(inputs: Mod_Knowledge_Issue_Fixed_InInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Risolto in ${i?.version}`)
};

const nl_mod_knowledge_issue_fixed_in = /** @type {(inputs: Mod_Knowledge_Issue_Fixed_InInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Opgelost in ${i?.version}`)
};

const pl_mod_knowledge_issue_fixed_in = /** @type {(inputs: Mod_Knowledge_Issue_Fixed_InInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Naprawione w ${i?.version}`)
};

const pt_mod_knowledge_issue_fixed_in = /** @type {(inputs: Mod_Knowledge_Issue_Fixed_InInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Corrigido na ${i?.version}`)
};

const ru_mod_knowledge_issue_fixed_in = /** @type {(inputs: Mod_Knowledge_Issue_Fixed_InInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Исправлено в ${i?.version}`)
};

const sv_mod_knowledge_issue_fixed_in = /** @type {(inputs: Mod_Knowledge_Issue_Fixed_InInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Åtgärdat i ${i?.version}`)
};

const tr_mod_knowledge_issue_fixed_in = /** @type {(inputs: Mod_Knowledge_Issue_Fixed_InInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.version} sürümünde düzeltildi`)
};

const zh_mod_knowledge_issue_fixed_in = /** @type {(inputs: Mod_Knowledge_Issue_Fixed_InInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已在 ${i?.version} 中修复`)
};

const ja_mod_knowledge_issue_fixed_in = /** @type {(inputs: Mod_Knowledge_Issue_Fixed_InInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.version} で修正`)
};

/**
* | output |
* | --- |
* | "Fixed in {version}" |
*
* @param {Mod_Knowledge_Issue_Fixed_InInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_issue_fixed_in = /** @type {((inputs: Mod_Knowledge_Issue_Fixed_InInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Issue_Fixed_InInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_issue_fixed_in(inputs)
	if (locale === "de") return de_mod_knowledge_issue_fixed_in(inputs)
	if (locale === "fr") return fr_mod_knowledge_issue_fixed_in(inputs)
	if (locale === "it") return it_mod_knowledge_issue_fixed_in(inputs)
	if (locale === "nl") return nl_mod_knowledge_issue_fixed_in(inputs)
	if (locale === "pl") return pl_mod_knowledge_issue_fixed_in(inputs)
	if (locale === "pt") return pt_mod_knowledge_issue_fixed_in(inputs)
	if (locale === "ru") return ru_mod_knowledge_issue_fixed_in(inputs)
	if (locale === "sv") return sv_mod_knowledge_issue_fixed_in(inputs)
	if (locale === "tr") return tr_mod_knowledge_issue_fixed_in(inputs)
	if (locale === "zh") return zh_mod_knowledge_issue_fixed_in(inputs)
	if (locale === "ja") return ja_mod_knowledge_issue_fixed_in(inputs)
	return en_mod_knowledge_issue_fixed_in(inputs)
});
