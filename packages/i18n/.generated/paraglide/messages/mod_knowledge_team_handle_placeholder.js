/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Team_Handle_PlaceholderInputs */

const en_mod_knowledge_team_handle_placeholder = /** @type {(inputs: Mod_Knowledge_Team_Handle_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`username`)
};

const es_mod_knowledge_team_handle_placeholder = /** @type {(inputs: Mod_Knowledge_Team_Handle_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`usuario`)
};

const de_mod_knowledge_team_handle_placeholder = /** @type {(inputs: Mod_Knowledge_Team_Handle_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`benutzername`)
};

const fr_mod_knowledge_team_handle_placeholder = /** @type {(inputs: Mod_Knowledge_Team_Handle_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`identifiant`)
};

const it_mod_knowledge_team_handle_placeholder = /** @type {(inputs: Mod_Knowledge_Team_Handle_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`nomeutente`)
};

const nl_mod_knowledge_team_handle_placeholder = /** @type {(inputs: Mod_Knowledge_Team_Handle_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`gebruikersnaam`)
};

const pl_mod_knowledge_team_handle_placeholder = /** @type {(inputs: Mod_Knowledge_Team_Handle_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`uzytkownik`)
};

const pt_mod_knowledge_team_handle_placeholder = /** @type {(inputs: Mod_Knowledge_Team_Handle_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`usuario`)
};

const ru_mod_knowledge_team_handle_placeholder = /** @type {(inputs: Mod_Knowledge_Team_Handle_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`username`)
};

const sv_mod_knowledge_team_handle_placeholder = /** @type {(inputs: Mod_Knowledge_Team_Handle_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`användarnamn`)
};

const tr_mod_knowledge_team_handle_placeholder = /** @type {(inputs: Mod_Knowledge_Team_Handle_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`kullanici`)
};

const zh_mod_knowledge_team_handle_placeholder = /** @type {(inputs: Mod_Knowledge_Team_Handle_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`username`)
};

const ja_mod_knowledge_team_handle_placeholder = /** @type {(inputs: Mod_Knowledge_Team_Handle_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`username`)
};

/**
* | output |
* | --- |
* | "username" |
*
* @param {Mod_Knowledge_Team_Handle_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_team_handle_placeholder = /** @type {((inputs?: Mod_Knowledge_Team_Handle_PlaceholderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Team_Handle_PlaceholderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_team_handle_placeholder(inputs)
	if (locale === "de") return de_mod_knowledge_team_handle_placeholder(inputs)
	if (locale === "fr") return fr_mod_knowledge_team_handle_placeholder(inputs)
	if (locale === "it") return it_mod_knowledge_team_handle_placeholder(inputs)
	if (locale === "nl") return nl_mod_knowledge_team_handle_placeholder(inputs)
	if (locale === "pl") return pl_mod_knowledge_team_handle_placeholder(inputs)
	if (locale === "pt") return pt_mod_knowledge_team_handle_placeholder(inputs)
	if (locale === "ru") return ru_mod_knowledge_team_handle_placeholder(inputs)
	if (locale === "sv") return sv_mod_knowledge_team_handle_placeholder(inputs)
	if (locale === "tr") return tr_mod_knowledge_team_handle_placeholder(inputs)
	if (locale === "zh") return zh_mod_knowledge_team_handle_placeholder(inputs)
	if (locale === "ja") return ja_mod_knowledge_team_handle_placeholder(inputs)
	return en_mod_knowledge_team_handle_placeholder(inputs)
});
