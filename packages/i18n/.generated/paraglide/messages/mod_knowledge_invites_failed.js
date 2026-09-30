/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Invites_FailedInputs */

const en_mod_knowledge_invites_failed = /** @type {(inputs: Mod_Knowledge_Invites_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Could not answer the invitation`)
};

const es_mod_knowledge_invites_failed = /** @type {(inputs: Mod_Knowledge_Invites_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo responder a la invitación`)
};

const de_mod_knowledge_invites_failed = /** @type {(inputs: Mod_Knowledge_Invites_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Einladung konnte nicht beantwortet werden`)
};

const fr_mod_knowledge_invites_failed = /** @type {(inputs: Mod_Knowledge_Invites_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de répondre à l’invitation`)
};

const it_mod_knowledge_invites_failed = /** @type {(inputs: Mod_Knowledge_Invites_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile rispondere all’invito`)
};

const nl_mod_knowledge_invites_failed = /** @type {(inputs: Mod_Knowledge_Invites_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reageren op de uitnodiging mislukt`)
};

const pl_mod_knowledge_invites_failed = /** @type {(inputs: Mod_Knowledge_Invites_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się odpowiedzieć na zaproszenie`)
};

const pt_mod_knowledge_invites_failed = /** @type {(inputs: Mod_Knowledge_Invites_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível responder ao convite`)
};

const ru_mod_knowledge_invites_failed = /** @type {(inputs: Mod_Knowledge_Invites_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось ответить на приглашение`)
};

const sv_mod_knowledge_invites_failed = /** @type {(inputs: Mod_Knowledge_Invites_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kunde inte svara på inbjudan`)
};

const tr_mod_knowledge_invites_failed = /** @type {(inputs: Mod_Knowledge_Invites_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Davete yanıt verilemedi`)
};

const zh_mod_knowledge_invites_failed = /** @type {(inputs: Mod_Knowledge_Invites_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法回应邀请`)
};

const ja_mod_knowledge_invites_failed = /** @type {(inputs: Mod_Knowledge_Invites_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`招待に応答できませんでした`)
};

/**
* | output |
* | --- |
* | "Could not answer the invitation" |
*
* @param {Mod_Knowledge_Invites_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_invites_failed = /** @type {((inputs?: Mod_Knowledge_Invites_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Invites_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_invites_failed(inputs)
	if (locale === "de") return de_mod_knowledge_invites_failed(inputs)
	if (locale === "fr") return fr_mod_knowledge_invites_failed(inputs)
	if (locale === "it") return it_mod_knowledge_invites_failed(inputs)
	if (locale === "nl") return nl_mod_knowledge_invites_failed(inputs)
	if (locale === "pl") return pl_mod_knowledge_invites_failed(inputs)
	if (locale === "pt") return pt_mod_knowledge_invites_failed(inputs)
	if (locale === "ru") return ru_mod_knowledge_invites_failed(inputs)
	if (locale === "sv") return sv_mod_knowledge_invites_failed(inputs)
	if (locale === "tr") return tr_mod_knowledge_invites_failed(inputs)
	if (locale === "zh") return zh_mod_knowledge_invites_failed(inputs)
	if (locale === "ja") return ja_mod_knowledge_invites_failed(inputs)
	return en_mod_knowledge_invites_failed(inputs)
});
