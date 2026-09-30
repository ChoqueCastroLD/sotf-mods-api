/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Tab_KnowledgeInputs */

const en_mod_knowledge_tab_knowledge = /** @type {(inputs: Mod_Knowledge_Tab_KnowledgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Known issues & FAQ`)
};

const es_mod_knowledge_tab_knowledge = /** @type {(inputs: Mod_Knowledge_Tab_KnowledgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Problemas y FAQ`)
};

const de_mod_knowledge_tab_knowledge = /** @type {(inputs: Mod_Knowledge_Tab_KnowledgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Probleme & FAQ`)
};

const fr_mod_knowledge_tab_knowledge = /** @type {(inputs: Mod_Knowledge_Tab_KnowledgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Problèmes et FAQ`)
};

const it_mod_knowledge_tab_knowledge = /** @type {(inputs: Mod_Knowledge_Tab_KnowledgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Problemi e FAQ`)
};

const nl_mod_knowledge_tab_knowledge = /** @type {(inputs: Mod_Knowledge_Tab_KnowledgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Problemen & FAQ`)
};

const pl_mod_knowledge_tab_knowledge = /** @type {(inputs: Mod_Knowledge_Tab_KnowledgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Problemy i FAQ`)
};

const pt_mod_knowledge_tab_knowledge = /** @type {(inputs: Mod_Knowledge_Tab_KnowledgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Problemas e FAQ`)
};

const ru_mod_knowledge_tab_knowledge = /** @type {(inputs: Mod_Knowledge_Tab_KnowledgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Проблемы и FAQ`)
};

const sv_mod_knowledge_tab_knowledge = /** @type {(inputs: Mod_Knowledge_Tab_KnowledgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Problem & FAQ`)
};

const tr_mod_knowledge_tab_knowledge = /** @type {(inputs: Mod_Knowledge_Tab_KnowledgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sorunlar ve SSS`)
};

const zh_mod_knowledge_tab_knowledge = /** @type {(inputs: Mod_Knowledge_Tab_KnowledgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已知问题与 FAQ`)
};

const ja_mod_knowledge_tab_knowledge = /** @type {(inputs: Mod_Knowledge_Tab_KnowledgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`既知の問題とFAQ`)
};

/**
* | output |
* | --- |
* | "Known issues & FAQ" |
*
* @param {Mod_Knowledge_Tab_KnowledgeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_tab_knowledge = /** @type {((inputs?: Mod_Knowledge_Tab_KnowledgeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Tab_KnowledgeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_tab_knowledge(inputs)
	if (locale === "de") return de_mod_knowledge_tab_knowledge(inputs)
	if (locale === "fr") return fr_mod_knowledge_tab_knowledge(inputs)
	if (locale === "it") return it_mod_knowledge_tab_knowledge(inputs)
	if (locale === "nl") return nl_mod_knowledge_tab_knowledge(inputs)
	if (locale === "pl") return pl_mod_knowledge_tab_knowledge(inputs)
	if (locale === "pt") return pt_mod_knowledge_tab_knowledge(inputs)
	if (locale === "ru") return ru_mod_knowledge_tab_knowledge(inputs)
	if (locale === "sv") return sv_mod_knowledge_tab_knowledge(inputs)
	if (locale === "tr") return tr_mod_knowledge_tab_knowledge(inputs)
	if (locale === "zh") return zh_mod_knowledge_tab_knowledge(inputs)
	if (locale === "ja") return ja_mod_knowledge_tab_knowledge(inputs)
	return en_mod_knowledge_tab_knowledge(inputs)
});
