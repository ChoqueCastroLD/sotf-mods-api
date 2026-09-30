/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Issue_Affects_LabelInputs */

const en_mod_knowledge_issue_affects_label = /** @type {(inputs: Mod_Knowledge_Issue_Affects_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Affected versions`)
};

const es_mod_knowledge_issue_affects_label = /** @type {(inputs: Mod_Knowledge_Issue_Affects_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versiones afectadas`)
};

const de_mod_knowledge_issue_affects_label = /** @type {(inputs: Mod_Knowledge_Issue_Affects_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Betroffene Versionen`)
};

const fr_mod_knowledge_issue_affects_label = /** @type {(inputs: Mod_Knowledge_Issue_Affects_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versions concernées`)
};

const it_mod_knowledge_issue_affects_label = /** @type {(inputs: Mod_Knowledge_Issue_Affects_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versioni interessate`)
};

const nl_mod_knowledge_issue_affects_label = /** @type {(inputs: Mod_Knowledge_Issue_Affects_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Betrokken versies`)
};

const pl_mod_knowledge_issue_affects_label = /** @type {(inputs: Mod_Knowledge_Issue_Affects_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dotknięte wersje`)
};

const pt_mod_knowledge_issue_affects_label = /** @type {(inputs: Mod_Knowledge_Issue_Affects_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versões afetadas`)
};

const ru_mod_knowledge_issue_affects_label = /** @type {(inputs: Mod_Knowledge_Issue_Affects_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Затронутые версии`)
};

const sv_mod_knowledge_issue_affects_label = /** @type {(inputs: Mod_Knowledge_Issue_Affects_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Berörda versioner`)
};

const tr_mod_knowledge_issue_affects_label = /** @type {(inputs: Mod_Knowledge_Issue_Affects_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etkilenen sürümler`)
};

const zh_mod_knowledge_issue_affects_label = /** @type {(inputs: Mod_Knowledge_Issue_Affects_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`受影响的版本`)
};

const ja_mod_knowledge_issue_affects_label = /** @type {(inputs: Mod_Knowledge_Issue_Affects_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`影響を受けるバージョン`)
};

/**
* | output |
* | --- |
* | "Affected versions" |
*
* @param {Mod_Knowledge_Issue_Affects_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_issue_affects_label = /** @type {((inputs?: Mod_Knowledge_Issue_Affects_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Issue_Affects_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_issue_affects_label(inputs)
	if (locale === "de") return de_mod_knowledge_issue_affects_label(inputs)
	if (locale === "fr") return fr_mod_knowledge_issue_affects_label(inputs)
	if (locale === "it") return it_mod_knowledge_issue_affects_label(inputs)
	if (locale === "nl") return nl_mod_knowledge_issue_affects_label(inputs)
	if (locale === "pl") return pl_mod_knowledge_issue_affects_label(inputs)
	if (locale === "pt") return pt_mod_knowledge_issue_affects_label(inputs)
	if (locale === "ru") return ru_mod_knowledge_issue_affects_label(inputs)
	if (locale === "sv") return sv_mod_knowledge_issue_affects_label(inputs)
	if (locale === "tr") return tr_mod_knowledge_issue_affects_label(inputs)
	if (locale === "zh") return zh_mod_knowledge_issue_affects_label(inputs)
	if (locale === "ja") return ja_mod_knowledge_issue_affects_label(inputs)
	return en_mod_knowledge_issue_affects_label(inputs)
});
