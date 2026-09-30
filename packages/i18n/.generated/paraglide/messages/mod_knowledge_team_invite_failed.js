/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Team_Invite_FailedInputs */

const en_mod_knowledge_team_invite_failed = /** @type {(inputs: Mod_Knowledge_Team_Invite_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Could not send the invitation`)
};

const es_mod_knowledge_team_invite_failed = /** @type {(inputs: Mod_Knowledge_Team_Invite_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo enviar la invitación`)
};

const de_mod_knowledge_team_invite_failed = /** @type {(inputs: Mod_Knowledge_Team_Invite_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Einladung konnte nicht gesendet werden`)
};

const fr_mod_knowledge_team_invite_failed = /** @type {(inputs: Mod_Knowledge_Team_Invite_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible d’envoyer l’invitation`)
};

const it_mod_knowledge_team_invite_failed = /** @type {(inputs: Mod_Knowledge_Team_Invite_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile inviare l’invito`)
};

const nl_mod_knowledge_team_invite_failed = /** @type {(inputs: Mod_Knowledge_Team_Invite_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uitnodiging versturen mislukt`)
};

const pl_mod_knowledge_team_invite_failed = /** @type {(inputs: Mod_Knowledge_Team_Invite_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się wysłać zaproszenia`)
};

const pt_mod_knowledge_team_invite_failed = /** @type {(inputs: Mod_Knowledge_Team_Invite_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível enviar o convite`)
};

const ru_mod_knowledge_team_invite_failed = /** @type {(inputs: Mod_Knowledge_Team_Invite_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось отправить приглашение`)
};

const sv_mod_knowledge_team_invite_failed = /** @type {(inputs: Mod_Knowledge_Team_Invite_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kunde inte skicka inbjudan`)
};

const tr_mod_knowledge_team_invite_failed = /** @type {(inputs: Mod_Knowledge_Team_Invite_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Davet gönderilemedi`)
};

const zh_mod_knowledge_team_invite_failed = /** @type {(inputs: Mod_Knowledge_Team_Invite_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法发送邀请`)
};

const ja_mod_knowledge_team_invite_failed = /** @type {(inputs: Mod_Knowledge_Team_Invite_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`招待を送れませんでした`)
};

/**
* | output |
* | --- |
* | "Could not send the invitation" |
*
* @param {Mod_Knowledge_Team_Invite_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_team_invite_failed = /** @type {((inputs?: Mod_Knowledge_Team_Invite_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Team_Invite_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_team_invite_failed(inputs)
	if (locale === "de") return de_mod_knowledge_team_invite_failed(inputs)
	if (locale === "fr") return fr_mod_knowledge_team_invite_failed(inputs)
	if (locale === "it") return it_mod_knowledge_team_invite_failed(inputs)
	if (locale === "nl") return nl_mod_knowledge_team_invite_failed(inputs)
	if (locale === "pl") return pl_mod_knowledge_team_invite_failed(inputs)
	if (locale === "pt") return pt_mod_knowledge_team_invite_failed(inputs)
	if (locale === "ru") return ru_mod_knowledge_team_invite_failed(inputs)
	if (locale === "sv") return sv_mod_knowledge_team_invite_failed(inputs)
	if (locale === "tr") return tr_mod_knowledge_team_invite_failed(inputs)
	if (locale === "zh") return zh_mod_knowledge_team_invite_failed(inputs)
	if (locale === "ja") return ja_mod_knowledge_team_invite_failed(inputs)
	return en_mod_knowledge_team_invite_failed(inputs)
});
