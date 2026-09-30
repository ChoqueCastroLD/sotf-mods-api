/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Team_HandleInputs */

const en_mod_knowledge_team_handle = /** @type {(inputs: Mod_Knowledge_Team_HandleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Handle`)
};

const es_mod_knowledge_team_handle = /** @type {(inputs: Mod_Knowledge_Team_HandleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nombre de usuario`)
};

const de_mod_knowledge_team_handle = /** @type {(inputs: Mod_Knowledge_Team_HandleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Benutzername`)
};

const fr_mod_knowledge_team_handle = /** @type {(inputs: Mod_Knowledge_Team_HandleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Identifiant`)
};

const it_mod_knowledge_team_handle = /** @type {(inputs: Mod_Knowledge_Team_HandleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nome utente`)
};

const nl_mod_knowledge_team_handle = /** @type {(inputs: Mod_Knowledge_Team_HandleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gebruikersnaam`)
};

const pl_mod_knowledge_team_handle = /** @type {(inputs: Mod_Knowledge_Team_HandleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nazwa użytkownika`)
};

const pt_mod_knowledge_team_handle = /** @type {(inputs: Mod_Knowledge_Team_HandleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nome de usuário`)
};

const ru_mod_knowledge_team_handle = /** @type {(inputs: Mod_Knowledge_Team_HandleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Имя пользователя`)
};

const sv_mod_knowledge_team_handle = /** @type {(inputs: Mod_Knowledge_Team_HandleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Användarnamn`)
};

const tr_mod_knowledge_team_handle = /** @type {(inputs: Mod_Knowledge_Team_HandleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kullanıcı adı`)
};

const zh_mod_knowledge_team_handle = /** @type {(inputs: Mod_Knowledge_Team_HandleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`用户名`)
};

const ja_mod_knowledge_team_handle = /** @type {(inputs: Mod_Knowledge_Team_HandleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ユーザー名`)
};

/**
* | output |
* | --- |
* | "Handle" |
*
* @param {Mod_Knowledge_Team_HandleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_team_handle = /** @type {((inputs?: Mod_Knowledge_Team_HandleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Team_HandleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_team_handle(inputs)
	if (locale === "de") return de_mod_knowledge_team_handle(inputs)
	if (locale === "fr") return fr_mod_knowledge_team_handle(inputs)
	if (locale === "it") return it_mod_knowledge_team_handle(inputs)
	if (locale === "nl") return nl_mod_knowledge_team_handle(inputs)
	if (locale === "pl") return pl_mod_knowledge_team_handle(inputs)
	if (locale === "pt") return pt_mod_knowledge_team_handle(inputs)
	if (locale === "ru") return ru_mod_knowledge_team_handle(inputs)
	if (locale === "sv") return sv_mod_knowledge_team_handle(inputs)
	if (locale === "tr") return tr_mod_knowledge_team_handle(inputs)
	if (locale === "zh") return zh_mod_knowledge_team_handle(inputs)
	if (locale === "ja") return ja_mod_knowledge_team_handle(inputs)
	return en_mod_knowledge_team_handle(inputs)
});
