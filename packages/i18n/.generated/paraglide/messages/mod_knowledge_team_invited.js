/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ handle: NonNullable<unknown> }} Mod_Knowledge_Team_InvitedInputs */

const en_mod_knowledge_team_invited = /** @type {(inputs: Mod_Knowledge_Team_InvitedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Invitation sent to @${i?.handle}`)
};

const es_mod_knowledge_team_invited = /** @type {(inputs: Mod_Knowledge_Team_InvitedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Invitación enviada a @${i?.handle}`)
};

const de_mod_knowledge_team_invited = /** @type {(inputs: Mod_Knowledge_Team_InvitedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Einladung an @${i?.handle} gesendet`)
};

const fr_mod_knowledge_team_invited = /** @type {(inputs: Mod_Knowledge_Team_InvitedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Invitation envoyée à @${i?.handle}`)
};

const it_mod_knowledge_team_invited = /** @type {(inputs: Mod_Knowledge_Team_InvitedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Invito inviato a @${i?.handle}`)
};

const nl_mod_knowledge_team_invited = /** @type {(inputs: Mod_Knowledge_Team_InvitedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Uitnodiging verstuurd naar @${i?.handle}`)
};

const pl_mod_knowledge_team_invited = /** @type {(inputs: Mod_Knowledge_Team_InvitedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zaproszenie wysłano do @${i?.handle}`)
};

const pt_mod_knowledge_team_invited = /** @type {(inputs: Mod_Knowledge_Team_InvitedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Convite enviado para @${i?.handle}`)
};

const ru_mod_knowledge_team_invited = /** @type {(inputs: Mod_Knowledge_Team_InvitedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Приглашение отправлено @${i?.handle}`)
};

const sv_mod_knowledge_team_invited = /** @type {(inputs: Mod_Knowledge_Team_InvitedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Inbjudan skickad till @${i?.handle}`)
};

const tr_mod_knowledge_team_invited = /** @type {(inputs: Mod_Knowledge_Team_InvitedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`@${i?.handle} kullanıcısına davet gönderildi`)
};

const zh_mod_knowledge_team_invited = /** @type {(inputs: Mod_Knowledge_Team_InvitedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已向 @${i?.handle} 发送邀请`)
};

const ja_mod_knowledge_team_invited = /** @type {(inputs: Mod_Knowledge_Team_InvitedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`@${i?.handle} に招待を送りました`)
};

/**
* | output |
* | --- |
* | "Invitation sent to @{handle}" |
*
* @param {Mod_Knowledge_Team_InvitedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_team_invited = /** @type {((inputs: Mod_Knowledge_Team_InvitedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Team_InvitedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_team_invited(inputs)
	if (locale === "de") return de_mod_knowledge_team_invited(inputs)
	if (locale === "fr") return fr_mod_knowledge_team_invited(inputs)
	if (locale === "it") return it_mod_knowledge_team_invited(inputs)
	if (locale === "nl") return nl_mod_knowledge_team_invited(inputs)
	if (locale === "pl") return pl_mod_knowledge_team_invited(inputs)
	if (locale === "pt") return pt_mod_knowledge_team_invited(inputs)
	if (locale === "ru") return ru_mod_knowledge_team_invited(inputs)
	if (locale === "sv") return sv_mod_knowledge_team_invited(inputs)
	if (locale === "tr") return tr_mod_knowledge_team_invited(inputs)
	if (locale === "zh") return zh_mod_knowledge_team_invited(inputs)
	if (locale === "ja") return ja_mod_knowledge_team_invited(inputs)
	return en_mod_knowledge_team_invited(inputs)
});
