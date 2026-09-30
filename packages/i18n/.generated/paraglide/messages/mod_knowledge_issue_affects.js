/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ versions: NonNullable<unknown> }} Mod_Knowledge_Issue_AffectsInputs */

const en_mod_knowledge_issue_affects = /** @type {(inputs: Mod_Knowledge_Issue_AffectsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Affects: ${i?.versions}`)
};

const es_mod_knowledge_issue_affects = /** @type {(inputs: Mod_Knowledge_Issue_AffectsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Afecta a: ${i?.versions}`)
};

const de_mod_knowledge_issue_affects = /** @type {(inputs: Mod_Knowledge_Issue_AffectsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Betrifft: ${i?.versions}`)
};

const fr_mod_knowledge_issue_affects = /** @type {(inputs: Mod_Knowledge_Issue_AffectsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Concerne : ${i?.versions}`)
};

const it_mod_knowledge_issue_affects = /** @type {(inputs: Mod_Knowledge_Issue_AffectsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Riguarda: ${i?.versions}`)
};

const nl_mod_knowledge_issue_affects = /** @type {(inputs: Mod_Knowledge_Issue_AffectsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Geldt voor: ${i?.versions}`)
};

const pl_mod_knowledge_issue_affects = /** @type {(inputs: Mod_Knowledge_Issue_AffectsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dotyczy: ${i?.versions}`)
};

const pt_mod_knowledge_issue_affects = /** @type {(inputs: Mod_Knowledge_Issue_AffectsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Afeta: ${i?.versions}`)
};

const ru_mod_knowledge_issue_affects = /** @type {(inputs: Mod_Knowledge_Issue_AffectsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Затрагивает: ${i?.versions}`)
};

const sv_mod_knowledge_issue_affects = /** @type {(inputs: Mod_Knowledge_Issue_AffectsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Gäller: ${i?.versions}`)
};

const tr_mod_knowledge_issue_affects = /** @type {(inputs: Mod_Knowledge_Issue_AffectsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Etkilenen: ${i?.versions}`)
};

const zh_mod_knowledge_issue_affects = /** @type {(inputs: Mod_Knowledge_Issue_AffectsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`影响版本：${i?.versions}`)
};

const ja_mod_knowledge_issue_affects = /** @type {(inputs: Mod_Knowledge_Issue_AffectsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`影響範囲：${i?.versions}`)
};

/**
* | output |
* | --- |
* | "Affects: {versions}" |
*
* @param {Mod_Knowledge_Issue_AffectsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_issue_affects = /** @type {((inputs: Mod_Knowledge_Issue_AffectsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Issue_AffectsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_issue_affects(inputs)
	if (locale === "de") return de_mod_knowledge_issue_affects(inputs)
	if (locale === "fr") return fr_mod_knowledge_issue_affects(inputs)
	if (locale === "it") return it_mod_knowledge_issue_affects(inputs)
	if (locale === "nl") return nl_mod_knowledge_issue_affects(inputs)
	if (locale === "pl") return pl_mod_knowledge_issue_affects(inputs)
	if (locale === "pt") return pt_mod_knowledge_issue_affects(inputs)
	if (locale === "ru") return ru_mod_knowledge_issue_affects(inputs)
	if (locale === "sv") return sv_mod_knowledge_issue_affects(inputs)
	if (locale === "tr") return tr_mod_knowledge_issue_affects(inputs)
	if (locale === "zh") return zh_mod_knowledge_issue_affects(inputs)
	if (locale === "ja") return ja_mod_knowledge_issue_affects(inputs)
	return en_mod_knowledge_issue_affects(inputs)
});
