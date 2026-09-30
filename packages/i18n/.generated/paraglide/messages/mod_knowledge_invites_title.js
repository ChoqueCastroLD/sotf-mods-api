/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Invites_TitleInputs */

const en_mod_knowledge_invites_title = /** @type {(inputs: Mod_Knowledge_Invites_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Co-author invitations`)
};

const es_mod_knowledge_invites_title = /** @type {(inputs: Mod_Knowledge_Invites_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invitaciones de coautoría`)
};

const de_mod_knowledge_invites_title = /** @type {(inputs: Mod_Knowledge_Invites_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Einladungen zur Co-Autorschaft`)
};

const fr_mod_knowledge_invites_title = /** @type {(inputs: Mod_Knowledge_Invites_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invitations de co-auteur`)
};

const it_mod_knowledge_invites_title = /** @type {(inputs: Mod_Knowledge_Invites_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inviti di coautore`)
};

const nl_mod_knowledge_invites_title = /** @type {(inputs: Mod_Knowledge_Invites_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uitnodigingen voor co-auteurschap`)
};

const pl_mod_knowledge_invites_title = /** @type {(inputs: Mod_Knowledge_Invites_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaproszenia do współautorstwa`)
};

const pt_mod_knowledge_invites_title = /** @type {(inputs: Mod_Knowledge_Invites_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Convites de coautoria`)
};

const ru_mod_knowledge_invites_title = /** @type {(inputs: Mod_Knowledge_Invites_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Приглашения в соавторы`)
};

const sv_mod_knowledge_invites_title = /** @type {(inputs: Mod_Knowledge_Invites_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inbjudningar till medförfattarskap`)
};

const tr_mod_knowledge_invites_title = /** @type {(inputs: Mod_Knowledge_Invites_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ortak yazarlık davetleri`)
};

const zh_mod_knowledge_invites_title = /** @type {(inputs: Mod_Knowledge_Invites_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`共同作者邀请`)
};

const ja_mod_knowledge_invites_title = /** @type {(inputs: Mod_Knowledge_Invites_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`共同制作の招待`)
};

/**
* | output |
* | --- |
* | "Co-author invitations" |
*
* @param {Mod_Knowledge_Invites_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_invites_title = /** @type {((inputs?: Mod_Knowledge_Invites_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Invites_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_invites_title(inputs)
	if (locale === "de") return de_mod_knowledge_invites_title(inputs)
	if (locale === "fr") return fr_mod_knowledge_invites_title(inputs)
	if (locale === "it") return it_mod_knowledge_invites_title(inputs)
	if (locale === "nl") return nl_mod_knowledge_invites_title(inputs)
	if (locale === "pl") return pl_mod_knowledge_invites_title(inputs)
	if (locale === "pt") return pt_mod_knowledge_invites_title(inputs)
	if (locale === "ru") return ru_mod_knowledge_invites_title(inputs)
	if (locale === "sv") return sv_mod_knowledge_invites_title(inputs)
	if (locale === "tr") return tr_mod_knowledge_invites_title(inputs)
	if (locale === "zh") return zh_mod_knowledge_invites_title(inputs)
	if (locale === "ja") return ja_mod_knowledge_invites_title(inputs)
	return en_mod_knowledge_invites_title(inputs)
});
