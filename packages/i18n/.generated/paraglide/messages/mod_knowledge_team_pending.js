/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Team_PendingInputs */

const en_mod_knowledge_team_pending = /** @type {(inputs: Mod_Knowledge_Team_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invitation pending`)
};

const es_mod_knowledge_team_pending = /** @type {(inputs: Mod_Knowledge_Team_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invitación pendiente`)
};

const de_mod_knowledge_team_pending = /** @type {(inputs: Mod_Knowledge_Team_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Einladung ausstehend`)
};

const fr_mod_knowledge_team_pending = /** @type {(inputs: Mod_Knowledge_Team_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invitation en attente`)
};

const it_mod_knowledge_team_pending = /** @type {(inputs: Mod_Knowledge_Team_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invito in sospeso`)
};

const nl_mod_knowledge_team_pending = /** @type {(inputs: Mod_Knowledge_Team_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uitnodiging in behandeling`)
};

const pl_mod_knowledge_team_pending = /** @type {(inputs: Mod_Knowledge_Team_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaproszenie oczekuje`)
};

const pt_mod_knowledge_team_pending = /** @type {(inputs: Mod_Knowledge_Team_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Convite pendente`)
};

const ru_mod_knowledge_team_pending = /** @type {(inputs: Mod_Knowledge_Team_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Приглашение ожидает`)
};

const sv_mod_knowledge_team_pending = /** @type {(inputs: Mod_Knowledge_Team_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inbjudan väntar`)
};

const tr_mod_knowledge_team_pending = /** @type {(inputs: Mod_Knowledge_Team_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Davet bekliyor`)
};

const zh_mod_knowledge_team_pending = /** @type {(inputs: Mod_Knowledge_Team_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`邀请待处理`)
};

const ja_mod_knowledge_team_pending = /** @type {(inputs: Mod_Knowledge_Team_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`招待待ち`)
};

/**
* | output |
* | --- |
* | "Invitation pending" |
*
* @param {Mod_Knowledge_Team_PendingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_team_pending = /** @type {((inputs?: Mod_Knowledge_Team_PendingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Team_PendingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_team_pending(inputs)
	if (locale === "de") return de_mod_knowledge_team_pending(inputs)
	if (locale === "fr") return fr_mod_knowledge_team_pending(inputs)
	if (locale === "it") return it_mod_knowledge_team_pending(inputs)
	if (locale === "nl") return nl_mod_knowledge_team_pending(inputs)
	if (locale === "pl") return pl_mod_knowledge_team_pending(inputs)
	if (locale === "pt") return pt_mod_knowledge_team_pending(inputs)
	if (locale === "ru") return ru_mod_knowledge_team_pending(inputs)
	if (locale === "sv") return sv_mod_knowledge_team_pending(inputs)
	if (locale === "tr") return tr_mod_knowledge_team_pending(inputs)
	if (locale === "zh") return zh_mod_knowledge_team_pending(inputs)
	if (locale === "ja") return ja_mod_knowledge_team_pending(inputs)
	return en_mod_knowledge_team_pending(inputs)
});
