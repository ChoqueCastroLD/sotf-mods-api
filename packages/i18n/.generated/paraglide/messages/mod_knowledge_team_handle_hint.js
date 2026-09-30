/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Team_Handle_HintInputs */

const en_mod_knowledge_team_handle_hint = /** @type {(inputs: Mod_Knowledge_Team_Handle_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The person receives a notification and must accept.`)
};

const es_mod_knowledge_team_handle_hint = /** @type {(inputs: Mod_Knowledge_Team_Handle_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La persona recibe una notificación y debe aceptar.`)
};

const de_mod_knowledge_team_handle_hint = /** @type {(inputs: Mod_Knowledge_Team_Handle_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Person erhält eine Benachrichtigung und muss annehmen.`)
};

const fr_mod_knowledge_team_handle_hint = /** @type {(inputs: Mod_Knowledge_Team_Handle_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La personne reçoit une notification et doit accepter.`)
};

const it_mod_knowledge_team_handle_hint = /** @type {(inputs: Mod_Knowledge_Team_Handle_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La persona riceve una notifica e deve accettare.`)
};

const nl_mod_knowledge_team_handle_hint = /** @type {(inputs: Mod_Knowledge_Team_Handle_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De persoon krijgt een melding en moet accepteren.`)
};

const pl_mod_knowledge_team_handle_hint = /** @type {(inputs: Mod_Knowledge_Team_Handle_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Osoba dostanie powiadomienie i musi je zaakceptować.`)
};

const pt_mod_knowledge_team_handle_hint = /** @type {(inputs: Mod_Knowledge_Team_Handle_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A pessoa recebe uma notificação e precisa aceitar.`)
};

const ru_mod_knowledge_team_handle_hint = /** @type {(inputs: Mod_Knowledge_Team_Handle_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Человек получит уведомление и должен принять приглашение.`)
};

const sv_mod_knowledge_team_handle_hint = /** @type {(inputs: Mod_Knowledge_Team_Handle_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Personen får en avisering och måste acceptera.`)
};

const tr_mod_knowledge_team_handle_hint = /** @type {(inputs: Mod_Knowledge_Team_Handle_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kişi bir bildirim alır ve kabul etmelidir.`)
};

const zh_mod_knowledge_team_handle_hint = /** @type {(inputs: Mod_Knowledge_Team_Handle_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`对方会收到通知，并需要接受邀请。`)
};

const ja_mod_knowledge_team_handle_hint = /** @type {(inputs: Mod_Knowledge_Team_Handle_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`相手に通知が届き、承諾が必要です。`)
};

/**
* | output |
* | --- |
* | "The person receives a notification and must accept." |
*
* @param {Mod_Knowledge_Team_Handle_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_team_handle_hint = /** @type {((inputs?: Mod_Knowledge_Team_Handle_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Team_Handle_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_team_handle_hint(inputs)
	if (locale === "de") return de_mod_knowledge_team_handle_hint(inputs)
	if (locale === "fr") return fr_mod_knowledge_team_handle_hint(inputs)
	if (locale === "it") return it_mod_knowledge_team_handle_hint(inputs)
	if (locale === "nl") return nl_mod_knowledge_team_handle_hint(inputs)
	if (locale === "pl") return pl_mod_knowledge_team_handle_hint(inputs)
	if (locale === "pt") return pt_mod_knowledge_team_handle_hint(inputs)
	if (locale === "ru") return ru_mod_knowledge_team_handle_hint(inputs)
	if (locale === "sv") return sv_mod_knowledge_team_handle_hint(inputs)
	if (locale === "tr") return tr_mod_knowledge_team_handle_hint(inputs)
	if (locale === "zh") return zh_mod_knowledge_team_handle_hint(inputs)
	if (locale === "ja") return ja_mod_knowledge_team_handle_hint(inputs)
	return en_mod_knowledge_team_handle_hint(inputs)
});
