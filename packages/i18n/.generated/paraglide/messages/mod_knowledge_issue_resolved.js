/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ date: NonNullable<unknown> }} Mod_Knowledge_Issue_ResolvedInputs */

const en_mod_knowledge_issue_resolved = /** @type {(inputs: Mod_Knowledge_Issue_ResolvedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Resolved on ${i?.date}`)
};

const es_mod_knowledge_issue_resolved = /** @type {(inputs: Mod_Knowledge_Issue_ResolvedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Resuelto el ${i?.date}`)
};

const de_mod_knowledge_issue_resolved = /** @type {(inputs: Mod_Knowledge_Issue_ResolvedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Gelöst am ${i?.date}`)
};

const fr_mod_knowledge_issue_resolved = /** @type {(inputs: Mod_Knowledge_Issue_ResolvedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Résolu le ${i?.date}`)
};

const it_mod_knowledge_issue_resolved = /** @type {(inputs: Mod_Knowledge_Issue_ResolvedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Risolto il ${i?.date}`)
};

const nl_mod_knowledge_issue_resolved = /** @type {(inputs: Mod_Knowledge_Issue_ResolvedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Opgelost op ${i?.date}`)
};

const pl_mod_knowledge_issue_resolved = /** @type {(inputs: Mod_Knowledge_Issue_ResolvedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rozwiązano ${i?.date}`)
};

const pt_mod_knowledge_issue_resolved = /** @type {(inputs: Mod_Knowledge_Issue_ResolvedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Resolvido em ${i?.date}`)
};

const ru_mod_knowledge_issue_resolved = /** @type {(inputs: Mod_Knowledge_Issue_ResolvedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Решено ${i?.date}`)
};

const sv_mod_knowledge_issue_resolved = /** @type {(inputs: Mod_Knowledge_Issue_ResolvedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Löst ${i?.date}`)
};

const tr_mod_knowledge_issue_resolved = /** @type {(inputs: Mod_Knowledge_Issue_ResolvedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date} tarihinde çözüldü`)
};

const zh_mod_knowledge_issue_resolved = /** @type {(inputs: Mod_Knowledge_Issue_ResolvedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`解决于 ${i?.date}`)
};

const ja_mod_knowledge_issue_resolved = /** @type {(inputs: Mod_Knowledge_Issue_ResolvedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date} に解決`)
};

/**
* | output |
* | --- |
* | "Resolved on {date}" |
*
* @param {Mod_Knowledge_Issue_ResolvedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_issue_resolved = /** @type {((inputs: Mod_Knowledge_Issue_ResolvedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Issue_ResolvedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_issue_resolved(inputs)
	if (locale === "de") return de_mod_knowledge_issue_resolved(inputs)
	if (locale === "fr") return fr_mod_knowledge_issue_resolved(inputs)
	if (locale === "it") return it_mod_knowledge_issue_resolved(inputs)
	if (locale === "nl") return nl_mod_knowledge_issue_resolved(inputs)
	if (locale === "pl") return pl_mod_knowledge_issue_resolved(inputs)
	if (locale === "pt") return pt_mod_knowledge_issue_resolved(inputs)
	if (locale === "ru") return ru_mod_knowledge_issue_resolved(inputs)
	if (locale === "sv") return sv_mod_knowledge_issue_resolved(inputs)
	if (locale === "tr") return tr_mod_knowledge_issue_resolved(inputs)
	if (locale === "zh") return zh_mod_knowledge_issue_resolved(inputs)
	if (locale === "ja") return ja_mod_knowledge_issue_resolved(inputs)
	return en_mod_knowledge_issue_resolved(inputs)
});
