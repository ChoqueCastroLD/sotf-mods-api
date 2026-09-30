/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Team_Role_CoauthorInputs */

const en_mod_knowledge_team_role_coauthor = /** @type {(inputs: Mod_Knowledge_Team_Role_CoauthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Co-author`)
};

const es_mod_knowledge_team_role_coauthor = /** @type {(inputs: Mod_Knowledge_Team_Role_CoauthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Coautor`)
};

const de_mod_knowledge_team_role_coauthor = /** @type {(inputs: Mod_Knowledge_Team_Role_CoauthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Co-Autor`)
};

const fr_mod_knowledge_team_role_coauthor = /** @type {(inputs: Mod_Knowledge_Team_Role_CoauthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Co-auteur`)
};

const it_mod_knowledge_team_role_coauthor = /** @type {(inputs: Mod_Knowledge_Team_Role_CoauthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Coautore`)
};

const nl_mod_knowledge_team_role_coauthor = /** @type {(inputs: Mod_Knowledge_Team_Role_CoauthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Co-auteur`)
};

const pl_mod_knowledge_team_role_coauthor = /** @type {(inputs: Mod_Knowledge_Team_Role_CoauthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Współautor`)
};

const pt_mod_knowledge_team_role_coauthor = /** @type {(inputs: Mod_Knowledge_Team_Role_CoauthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Coautor`)
};

const ru_mod_knowledge_team_role_coauthor = /** @type {(inputs: Mod_Knowledge_Team_Role_CoauthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Соавтор`)
};

const sv_mod_knowledge_team_role_coauthor = /** @type {(inputs: Mod_Knowledge_Team_Role_CoauthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Medförfattare`)
};

const tr_mod_knowledge_team_role_coauthor = /** @type {(inputs: Mod_Knowledge_Team_Role_CoauthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ortak yazar`)
};

const zh_mod_knowledge_team_role_coauthor = /** @type {(inputs: Mod_Knowledge_Team_Role_CoauthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`共同作者`)
};

const ja_mod_knowledge_team_role_coauthor = /** @type {(inputs: Mod_Knowledge_Team_Role_CoauthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`共同制作者`)
};

/**
* | output |
* | --- |
* | "Co-author" |
*
* @param {Mod_Knowledge_Team_Role_CoauthorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_team_role_coauthor = /** @type {((inputs?: Mod_Knowledge_Team_Role_CoauthorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Team_Role_CoauthorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_team_role_coauthor(inputs)
	if (locale === "de") return de_mod_knowledge_team_role_coauthor(inputs)
	if (locale === "fr") return fr_mod_knowledge_team_role_coauthor(inputs)
	if (locale === "it") return it_mod_knowledge_team_role_coauthor(inputs)
	if (locale === "nl") return nl_mod_knowledge_team_role_coauthor(inputs)
	if (locale === "pl") return pl_mod_knowledge_team_role_coauthor(inputs)
	if (locale === "pt") return pt_mod_knowledge_team_role_coauthor(inputs)
	if (locale === "ru") return ru_mod_knowledge_team_role_coauthor(inputs)
	if (locale === "sv") return sv_mod_knowledge_team_role_coauthor(inputs)
	if (locale === "tr") return tr_mod_knowledge_team_role_coauthor(inputs)
	if (locale === "zh") return zh_mod_knowledge_team_role_coauthor(inputs)
	if (locale === "ja") return ja_mod_knowledge_team_role_coauthor(inputs)
	return en_mod_knowledge_team_role_coauthor(inputs)
});
