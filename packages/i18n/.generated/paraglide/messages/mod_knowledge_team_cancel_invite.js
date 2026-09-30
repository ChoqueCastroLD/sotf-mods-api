/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Team_Cancel_InviteInputs */

const en_mod_knowledge_team_cancel_invite = /** @type {(inputs: Mod_Knowledge_Team_Cancel_InviteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancel invitation`)
};

const es_mod_knowledge_team_cancel_invite = /** @type {(inputs: Mod_Knowledge_Team_Cancel_InviteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancelar invitación`)
};

const de_mod_knowledge_team_cancel_invite = /** @type {(inputs: Mod_Knowledge_Team_Cancel_InviteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Einladung zurückziehen`)
};

const fr_mod_knowledge_team_cancel_invite = /** @type {(inputs: Mod_Knowledge_Team_Cancel_InviteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annuler l’invitation`)
};

const it_mod_knowledge_team_cancel_invite = /** @type {(inputs: Mod_Knowledge_Team_Cancel_InviteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annulla invito`)
};

const nl_mod_knowledge_team_cancel_invite = /** @type {(inputs: Mod_Knowledge_Team_Cancel_InviteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uitnodiging intrekken`)
};

const pl_mod_knowledge_team_cancel_invite = /** @type {(inputs: Mod_Knowledge_Team_Cancel_InviteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anuluj zaproszenie`)
};

const pt_mod_knowledge_team_cancel_invite = /** @type {(inputs: Mod_Knowledge_Team_Cancel_InviteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancelar convite`)
};

const ru_mod_knowledge_team_cancel_invite = /** @type {(inputs: Mod_Knowledge_Team_Cancel_InviteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отозвать приглашение`)
};

const sv_mod_knowledge_team_cancel_invite = /** @type {(inputs: Mod_Knowledge_Team_Cancel_InviteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avbryt inbjudan`)
};

const tr_mod_knowledge_team_cancel_invite = /** @type {(inputs: Mod_Knowledge_Team_Cancel_InviteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Daveti iptal et`)
};

const zh_mod_knowledge_team_cancel_invite = /** @type {(inputs: Mod_Knowledge_Team_Cancel_InviteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`取消邀请`)
};

const ja_mod_knowledge_team_cancel_invite = /** @type {(inputs: Mod_Knowledge_Team_Cancel_InviteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`招待を取り消す`)
};

/**
* | output |
* | --- |
* | "Cancel invitation" |
*
* @param {Mod_Knowledge_Team_Cancel_InviteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_team_cancel_invite = /** @type {((inputs?: Mod_Knowledge_Team_Cancel_InviteInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Team_Cancel_InviteInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_team_cancel_invite(inputs)
	if (locale === "de") return de_mod_knowledge_team_cancel_invite(inputs)
	if (locale === "fr") return fr_mod_knowledge_team_cancel_invite(inputs)
	if (locale === "it") return it_mod_knowledge_team_cancel_invite(inputs)
	if (locale === "nl") return nl_mod_knowledge_team_cancel_invite(inputs)
	if (locale === "pl") return pl_mod_knowledge_team_cancel_invite(inputs)
	if (locale === "pt") return pt_mod_knowledge_team_cancel_invite(inputs)
	if (locale === "ru") return ru_mod_knowledge_team_cancel_invite(inputs)
	if (locale === "sv") return sv_mod_knowledge_team_cancel_invite(inputs)
	if (locale === "tr") return tr_mod_knowledge_team_cancel_invite(inputs)
	if (locale === "zh") return zh_mod_knowledge_team_cancel_invite(inputs)
	if (locale === "ja") return ja_mod_knowledge_team_cancel_invite(inputs)
	return en_mod_knowledge_team_cancel_invite(inputs)
});
