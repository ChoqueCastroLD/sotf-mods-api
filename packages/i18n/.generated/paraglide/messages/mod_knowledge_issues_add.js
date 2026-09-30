/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Issues_AddInputs */

const en_mod_knowledge_issues_add = /** @type {(inputs: Mod_Knowledge_Issues_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add an issue`)
};

const es_mod_knowledge_issues_add = /** @type {(inputs: Mod_Knowledge_Issues_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Añadir un problema`)
};

const de_mod_knowledge_issues_add = /** @type {(inputs: Mod_Knowledge_Issues_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Problem hinzufügen`)
};

const fr_mod_knowledge_issues_add = /** @type {(inputs: Mod_Knowledge_Issues_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajouter un problème`)
};

const it_mod_knowledge_issues_add = /** @type {(inputs: Mod_Knowledge_Issues_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aggiungi un problema`)
};

const nl_mod_knowledge_issues_add = /** @type {(inputs: Mod_Knowledge_Issues_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Probleem toevoegen`)
};

const pl_mod_knowledge_issues_add = /** @type {(inputs: Mod_Knowledge_Issues_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dodaj problem`)
};

const pt_mod_knowledge_issues_add = /** @type {(inputs: Mod_Knowledge_Issues_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adicionar um problema`)
};

const ru_mod_knowledge_issues_add = /** @type {(inputs: Mod_Knowledge_Issues_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Добавить проблему`)
};

const sv_mod_knowledge_issues_add = /** @type {(inputs: Mod_Knowledge_Issues_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lägg till ett problem`)
};

const tr_mod_knowledge_issues_add = /** @type {(inputs: Mod_Knowledge_Issues_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sorun ekle`)
};

const zh_mod_knowledge_issues_add = /** @type {(inputs: Mod_Knowledge_Issues_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`添加问题`)
};

const ja_mod_knowledge_issues_add = /** @type {(inputs: Mod_Knowledge_Issues_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`問題を追加`)
};

/**
* | output |
* | --- |
* | "Add an issue" |
*
* @param {Mod_Knowledge_Issues_AddInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_issues_add = /** @type {((inputs?: Mod_Knowledge_Issues_AddInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Issues_AddInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_issues_add(inputs)
	if (locale === "de") return de_mod_knowledge_issues_add(inputs)
	if (locale === "fr") return fr_mod_knowledge_issues_add(inputs)
	if (locale === "it") return it_mod_knowledge_issues_add(inputs)
	if (locale === "nl") return nl_mod_knowledge_issues_add(inputs)
	if (locale === "pl") return pl_mod_knowledge_issues_add(inputs)
	if (locale === "pt") return pt_mod_knowledge_issues_add(inputs)
	if (locale === "ru") return ru_mod_knowledge_issues_add(inputs)
	if (locale === "sv") return sv_mod_knowledge_issues_add(inputs)
	if (locale === "tr") return tr_mod_knowledge_issues_add(inputs)
	if (locale === "zh") return zh_mod_knowledge_issues_add(inputs)
	if (locale === "ja") return ja_mod_knowledge_issues_add(inputs)
	return en_mod_knowledge_issues_add(inputs)
});
