/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Team_Invite_TitleInputs */

const en_mod_knowledge_team_invite_title = /** @type {(inputs: Mod_Knowledge_Team_Invite_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invite a co-author`)
};

const es_mod_knowledge_team_invite_title = /** @type {(inputs: Mod_Knowledge_Team_Invite_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invitar a un coautor`)
};

const de_mod_knowledge_team_invite_title = /** @type {(inputs: Mod_Knowledge_Team_Invite_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Co-Autor einladen`)
};

const fr_mod_knowledge_team_invite_title = /** @type {(inputs: Mod_Knowledge_Team_Invite_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inviter un co-auteur`)
};

const it_mod_knowledge_team_invite_title = /** @type {(inputs: Mod_Knowledge_Team_Invite_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invita un coautore`)
};

const nl_mod_knowledge_team_invite_title = /** @type {(inputs: Mod_Knowledge_Team_Invite_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een co-auteur uitnodigen`)
};

const pl_mod_knowledge_team_invite_title = /** @type {(inputs: Mod_Knowledge_Team_Invite_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaproś współautora`)
};

const pt_mod_knowledge_team_invite_title = /** @type {(inputs: Mod_Knowledge_Team_Invite_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Convidar um coautor`)
};

const ru_mod_knowledge_team_invite_title = /** @type {(inputs: Mod_Knowledge_Team_Invite_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пригласить соавтора`)
};

const sv_mod_knowledge_team_invite_title = /** @type {(inputs: Mod_Knowledge_Team_Invite_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bjud in en medförfattare`)
};

const tr_mod_knowledge_team_invite_title = /** @type {(inputs: Mod_Knowledge_Team_Invite_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ortak yazar davet et`)
};

const zh_mod_knowledge_team_invite_title = /** @type {(inputs: Mod_Knowledge_Team_Invite_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`邀请共同作者`)
};

const ja_mod_knowledge_team_invite_title = /** @type {(inputs: Mod_Knowledge_Team_Invite_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`共同制作者を招待`)
};

/**
* | output |
* | --- |
* | "Invite a co-author" |
*
* @param {Mod_Knowledge_Team_Invite_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_team_invite_title = /** @type {((inputs?: Mod_Knowledge_Team_Invite_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Team_Invite_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_team_invite_title(inputs)
	if (locale === "de") return de_mod_knowledge_team_invite_title(inputs)
	if (locale === "fr") return fr_mod_knowledge_team_invite_title(inputs)
	if (locale === "it") return it_mod_knowledge_team_invite_title(inputs)
	if (locale === "nl") return nl_mod_knowledge_team_invite_title(inputs)
	if (locale === "pl") return pl_mod_knowledge_team_invite_title(inputs)
	if (locale === "pt") return pt_mod_knowledge_team_invite_title(inputs)
	if (locale === "ru") return ru_mod_knowledge_team_invite_title(inputs)
	if (locale === "sv") return sv_mod_knowledge_team_invite_title(inputs)
	if (locale === "tr") return tr_mod_knowledge_team_invite_title(inputs)
	if (locale === "zh") return zh_mod_knowledge_team_invite_title(inputs)
	if (locale === "ja") return ja_mod_knowledge_team_invite_title(inputs)
	return en_mod_knowledge_team_invite_title(inputs)
});
