/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Invites_DeclinedInputs */

const en_mod_knowledge_invites_declined = /** @type {(inputs: Mod_Knowledge_Invites_DeclinedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invitation declined`)
};

const es_mod_knowledge_invites_declined = /** @type {(inputs: Mod_Knowledge_Invites_DeclinedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invitación rechazada`)
};

const de_mod_knowledge_invites_declined = /** @type {(inputs: Mod_Knowledge_Invites_DeclinedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Einladung abgelehnt`)
};

const fr_mod_knowledge_invites_declined = /** @type {(inputs: Mod_Knowledge_Invites_DeclinedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invitation refusée`)
};

const it_mod_knowledge_invites_declined = /** @type {(inputs: Mod_Knowledge_Invites_DeclinedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invito rifiutato`)
};

const nl_mod_knowledge_invites_declined = /** @type {(inputs: Mod_Knowledge_Invites_DeclinedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uitnodiging geweigerd`)
};

const pl_mod_knowledge_invites_declined = /** @type {(inputs: Mod_Knowledge_Invites_DeclinedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaproszenie odrzucone`)
};

const pt_mod_knowledge_invites_declined = /** @type {(inputs: Mod_Knowledge_Invites_DeclinedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Convite recusado`)
};

const ru_mod_knowledge_invites_declined = /** @type {(inputs: Mod_Knowledge_Invites_DeclinedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Приглашение отклонено`)
};

const sv_mod_knowledge_invites_declined = /** @type {(inputs: Mod_Knowledge_Invites_DeclinedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inbjudan avböjd`)
};

const tr_mod_knowledge_invites_declined = /** @type {(inputs: Mod_Knowledge_Invites_DeclinedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Davet reddedildi`)
};

const zh_mod_knowledge_invites_declined = /** @type {(inputs: Mod_Knowledge_Invites_DeclinedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已拒绝邀请`)
};

const ja_mod_knowledge_invites_declined = /** @type {(inputs: Mod_Knowledge_Invites_DeclinedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`招待を辞退しました`)
};

/**
* | output |
* | --- |
* | "Invitation declined" |
*
* @param {Mod_Knowledge_Invites_DeclinedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_invites_declined = /** @type {((inputs?: Mod_Knowledge_Invites_DeclinedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Invites_DeclinedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_invites_declined(inputs)
	if (locale === "de") return de_mod_knowledge_invites_declined(inputs)
	if (locale === "fr") return fr_mod_knowledge_invites_declined(inputs)
	if (locale === "it") return it_mod_knowledge_invites_declined(inputs)
	if (locale === "nl") return nl_mod_knowledge_invites_declined(inputs)
	if (locale === "pl") return pl_mod_knowledge_invites_declined(inputs)
	if (locale === "pt") return pt_mod_knowledge_invites_declined(inputs)
	if (locale === "ru") return ru_mod_knowledge_invites_declined(inputs)
	if (locale === "sv") return sv_mod_knowledge_invites_declined(inputs)
	if (locale === "tr") return tr_mod_knowledge_invites_declined(inputs)
	if (locale === "zh") return zh_mod_knowledge_invites_declined(inputs)
	if (locale === "ja") return ja_mod_knowledge_invites_declined(inputs)
	return en_mod_knowledge_invites_declined(inputs)
});
