/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Mod_Knowledge_Shared_InvitesInputs */

const en_mod_knowledge_shared_invites = /** @type {(inputs: Mod_Knowledge_Shared_InvitesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Invitations (${i?.count})`)
};

const es_mod_knowledge_shared_invites = /** @type {(inputs: Mod_Knowledge_Shared_InvitesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Invitaciones (${i?.count})`)
};

const de_mod_knowledge_shared_invites = /** @type {(inputs: Mod_Knowledge_Shared_InvitesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Einladungen (${i?.count})`)
};

const fr_mod_knowledge_shared_invites = /** @type {(inputs: Mod_Knowledge_Shared_InvitesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Invitations (${i?.count})`)
};

const it_mod_knowledge_shared_invites = /** @type {(inputs: Mod_Knowledge_Shared_InvitesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Inviti (${i?.count})`)
};

const nl_mod_knowledge_shared_invites = /** @type {(inputs: Mod_Knowledge_Shared_InvitesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Uitnodigingen (${i?.count})`)
};

const pl_mod_knowledge_shared_invites = /** @type {(inputs: Mod_Knowledge_Shared_InvitesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zaproszenia (${i?.count})`)
};

const pt_mod_knowledge_shared_invites = /** @type {(inputs: Mod_Knowledge_Shared_InvitesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Convites (${i?.count})`)
};

const ru_mod_knowledge_shared_invites = /** @type {(inputs: Mod_Knowledge_Shared_InvitesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Приглашения (${i?.count})`)
};

const sv_mod_knowledge_shared_invites = /** @type {(inputs: Mod_Knowledge_Shared_InvitesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Inbjudningar (${i?.count})`)
};

const tr_mod_knowledge_shared_invites = /** @type {(inputs: Mod_Knowledge_Shared_InvitesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Davetler (${i?.count})`)
};

const zh_mod_knowledge_shared_invites = /** @type {(inputs: Mod_Knowledge_Shared_InvitesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`邀请（${i?.count}）`)
};

const ja_mod_knowledge_shared_invites = /** @type {(inputs: Mod_Knowledge_Shared_InvitesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`招待（${i?.count}）`)
};

/**
* | output |
* | --- |
* | "Invitations ({count})" |
*
* @param {Mod_Knowledge_Shared_InvitesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_shared_invites = /** @type {((inputs: Mod_Knowledge_Shared_InvitesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Shared_InvitesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_shared_invites(inputs)
	if (locale === "de") return de_mod_knowledge_shared_invites(inputs)
	if (locale === "fr") return fr_mod_knowledge_shared_invites(inputs)
	if (locale === "it") return it_mod_knowledge_shared_invites(inputs)
	if (locale === "nl") return nl_mod_knowledge_shared_invites(inputs)
	if (locale === "pl") return pl_mod_knowledge_shared_invites(inputs)
	if (locale === "pt") return pt_mod_knowledge_shared_invites(inputs)
	if (locale === "ru") return ru_mod_knowledge_shared_invites(inputs)
	if (locale === "sv") return sv_mod_knowledge_shared_invites(inputs)
	if (locale === "tr") return tr_mod_knowledge_shared_invites(inputs)
	if (locale === "zh") return zh_mod_knowledge_shared_invites(inputs)
	if (locale === "ja") return ja_mod_knowledge_shared_invites(inputs)
	return en_mod_knowledge_shared_invites(inputs)
});
