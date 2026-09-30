/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Team_Role_OwnerInputs */

const en_mod_knowledge_team_role_owner = /** @type {(inputs: Mod_Knowledge_Team_Role_OwnerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Owner`)
};

const es_mod_knowledge_team_role_owner = /** @type {(inputs: Mod_Knowledge_Team_Role_OwnerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Propietario`)
};

const de_mod_knowledge_team_role_owner = /** @type {(inputs: Mod_Knowledge_Team_Role_OwnerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inhaber`)
};

const fr_mod_knowledge_team_role_owner = /** @type {(inputs: Mod_Knowledge_Team_Role_OwnerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Propriétaire`)
};

const it_mod_knowledge_team_role_owner = /** @type {(inputs: Mod_Knowledge_Team_Role_OwnerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Proprietario`)
};

const nl_mod_knowledge_team_role_owner = /** @type {(inputs: Mod_Knowledge_Team_Role_OwnerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eigenaar`)
};

const pl_mod_knowledge_team_role_owner = /** @type {(inputs: Mod_Knowledge_Team_Role_OwnerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Właściciel`)
};

const pt_mod_knowledge_team_role_owner = /** @type {(inputs: Mod_Knowledge_Team_Role_OwnerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Proprietário`)
};

const ru_mod_knowledge_team_role_owner = /** @type {(inputs: Mod_Knowledge_Team_Role_OwnerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Владелец`)
};

const sv_mod_knowledge_team_role_owner = /** @type {(inputs: Mod_Knowledge_Team_Role_OwnerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ägare`)
};

const tr_mod_knowledge_team_role_owner = /** @type {(inputs: Mod_Knowledge_Team_Role_OwnerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sahip`)
};

const zh_mod_knowledge_team_role_owner = /** @type {(inputs: Mod_Knowledge_Team_Role_OwnerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`所有者`)
};

const ja_mod_knowledge_team_role_owner = /** @type {(inputs: Mod_Knowledge_Team_Role_OwnerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`オーナー`)
};

/**
* | output |
* | --- |
* | "Owner" |
*
* @param {Mod_Knowledge_Team_Role_OwnerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_team_role_owner = /** @type {((inputs?: Mod_Knowledge_Team_Role_OwnerInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Team_Role_OwnerInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_team_role_owner(inputs)
	if (locale === "de") return de_mod_knowledge_team_role_owner(inputs)
	if (locale === "fr") return fr_mod_knowledge_team_role_owner(inputs)
	if (locale === "it") return it_mod_knowledge_team_role_owner(inputs)
	if (locale === "nl") return nl_mod_knowledge_team_role_owner(inputs)
	if (locale === "pl") return pl_mod_knowledge_team_role_owner(inputs)
	if (locale === "pt") return pt_mod_knowledge_team_role_owner(inputs)
	if (locale === "ru") return ru_mod_knowledge_team_role_owner(inputs)
	if (locale === "sv") return sv_mod_knowledge_team_role_owner(inputs)
	if (locale === "tr") return tr_mod_knowledge_team_role_owner(inputs)
	if (locale === "zh") return zh_mod_knowledge_team_role_owner(inputs)
	if (locale === "ja") return ja_mod_knowledge_team_role_owner(inputs)
	return en_mod_knowledge_team_role_owner(inputs)
});
