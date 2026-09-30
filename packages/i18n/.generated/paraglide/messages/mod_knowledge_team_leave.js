/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Team_LeaveInputs */

const en_mod_knowledge_team_leave = /** @type {(inputs: Mod_Knowledge_Team_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leave this mod`)
};

const es_mod_knowledge_team_leave = /** @type {(inputs: Mod_Knowledge_Team_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dejar este mod`)
};

const de_mod_knowledge_team_leave = /** @type {(inputs: Mod_Knowledge_Team_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diesen Mod verlassen`)
};

const fr_mod_knowledge_team_leave = /** @type {(inputs: Mod_Knowledge_Team_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quitter ce mod`)
};

const it_mod_knowledge_team_leave = /** @type {(inputs: Mod_Knowledge_Team_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lascia questo mod`)
};

const nl_mod_knowledge_team_leave = /** @type {(inputs: Mod_Knowledge_Team_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze mod verlaten`)
};

const pl_mod_knowledge_team_leave = /** @type {(inputs: Mod_Knowledge_Team_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opuść tego moda`)
};

const pt_mod_knowledge_team_leave = /** @type {(inputs: Mod_Knowledge_Team_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sair deste mod`)
};

const ru_mod_knowledge_team_leave = /** @type {(inputs: Mod_Knowledge_Team_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Покинуть мод`)
};

const sv_mod_knowledge_team_leave = /** @type {(inputs: Mod_Knowledge_Team_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lämna den här moden`)
};

const tr_mod_knowledge_team_leave = /** @type {(inputs: Mod_Knowledge_Team_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu moddan ayrıl`)
};

const zh_mod_knowledge_team_leave = /** @type {(inputs: Mod_Knowledge_Team_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`退出此模组`)
};

const ja_mod_knowledge_team_leave = /** @type {(inputs: Mod_Knowledge_Team_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このModから退出`)
};

/**
* | output |
* | --- |
* | "Leave this mod" |
*
* @param {Mod_Knowledge_Team_LeaveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_team_leave = /** @type {((inputs?: Mod_Knowledge_Team_LeaveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Team_LeaveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_team_leave(inputs)
	if (locale === "de") return de_mod_knowledge_team_leave(inputs)
	if (locale === "fr") return fr_mod_knowledge_team_leave(inputs)
	if (locale === "it") return it_mod_knowledge_team_leave(inputs)
	if (locale === "nl") return nl_mod_knowledge_team_leave(inputs)
	if (locale === "pl") return pl_mod_knowledge_team_leave(inputs)
	if (locale === "pt") return pt_mod_knowledge_team_leave(inputs)
	if (locale === "ru") return ru_mod_knowledge_team_leave(inputs)
	if (locale === "sv") return sv_mod_knowledge_team_leave(inputs)
	if (locale === "tr") return tr_mod_knowledge_team_leave(inputs)
	if (locale === "zh") return zh_mod_knowledge_team_leave(inputs)
	if (locale === "ja") return ja_mod_knowledge_team_leave(inputs)
	return en_mod_knowledge_team_leave(inputs)
});
