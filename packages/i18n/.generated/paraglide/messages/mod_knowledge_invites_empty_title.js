/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Invites_Empty_TitleInputs */

const en_mod_knowledge_invites_empty_title = /** @type {(inputs: Mod_Knowledge_Invites_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No pending invitations`)
};

const es_mod_knowledge_invites_empty_title = /** @type {(inputs: Mod_Knowledge_Invites_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No hay invitaciones pendientes`)
};

const de_mod_knowledge_invites_empty_title = /** @type {(inputs: Mod_Knowledge_Invites_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine ausstehenden Einladungen`)
};

const fr_mod_knowledge_invites_empty_title = /** @type {(inputs: Mod_Knowledge_Invites_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune invitation en attente`)
};

const it_mod_knowledge_invites_empty_title = /** @type {(inputs: Mod_Knowledge_Invites_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessun invito in sospeso`)
};

const nl_mod_knowledge_invites_empty_title = /** @type {(inputs: Mod_Knowledge_Invites_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen openstaande uitnodigingen`)
};

const pl_mod_knowledge_invites_empty_title = /** @type {(inputs: Mod_Knowledge_Invites_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak oczekujących zaproszeń`)
};

const pt_mod_knowledge_invites_empty_title = /** @type {(inputs: Mod_Knowledge_Invites_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhum convite pendente`)
};

const ru_mod_knowledge_invites_empty_title = /** @type {(inputs: Mod_Knowledge_Invites_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нет ожидающих приглашений`)
};

const sv_mod_knowledge_invites_empty_title = /** @type {(inputs: Mod_Knowledge_Invites_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga väntande inbjudningar`)
};

const tr_mod_knowledge_invites_empty_title = /** @type {(inputs: Mod_Knowledge_Invites_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bekleyen davet yok`)
};

const zh_mod_knowledge_invites_empty_title = /** @type {(inputs: Mod_Knowledge_Invites_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有待处理的邀请`)
};

const ja_mod_knowledge_invites_empty_title = /** @type {(inputs: Mod_Knowledge_Invites_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保留中の招待はありません`)
};

/**
* | output |
* | --- |
* | "No pending invitations" |
*
* @param {Mod_Knowledge_Invites_Empty_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_invites_empty_title = /** @type {((inputs?: Mod_Knowledge_Invites_Empty_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Invites_Empty_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_invites_empty_title(inputs)
	if (locale === "de") return de_mod_knowledge_invites_empty_title(inputs)
	if (locale === "fr") return fr_mod_knowledge_invites_empty_title(inputs)
	if (locale === "it") return it_mod_knowledge_invites_empty_title(inputs)
	if (locale === "nl") return nl_mod_knowledge_invites_empty_title(inputs)
	if (locale === "pl") return pl_mod_knowledge_invites_empty_title(inputs)
	if (locale === "pt") return pt_mod_knowledge_invites_empty_title(inputs)
	if (locale === "ru") return ru_mod_knowledge_invites_empty_title(inputs)
	if (locale === "sv") return sv_mod_knowledge_invites_empty_title(inputs)
	if (locale === "tr") return tr_mod_knowledge_invites_empty_title(inputs)
	if (locale === "zh") return zh_mod_knowledge_invites_empty_title(inputs)
	if (locale === "ja") return ja_mod_knowledge_invites_empty_title(inputs)
	return en_mod_knowledge_invites_empty_title(inputs)
});
