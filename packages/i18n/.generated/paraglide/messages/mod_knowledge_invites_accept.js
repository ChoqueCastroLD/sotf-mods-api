/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Invites_AcceptInputs */

const en_mod_knowledge_invites_accept = /** @type {(inputs: Mod_Knowledge_Invites_AcceptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accept`)
};

const es_mod_knowledge_invites_accept = /** @type {(inputs: Mod_Knowledge_Invites_AcceptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aceptar`)
};

const de_mod_knowledge_invites_accept = /** @type {(inputs: Mod_Knowledge_Invites_AcceptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annehmen`)
};

const fr_mod_knowledge_invites_accept = /** @type {(inputs: Mod_Knowledge_Invites_AcceptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accepter`)
};

const it_mod_knowledge_invites_accept = /** @type {(inputs: Mod_Knowledge_Invites_AcceptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accetta`)
};

const nl_mod_knowledge_invites_accept = /** @type {(inputs: Mod_Knowledge_Invites_AcceptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accepteren`)
};

const pl_mod_knowledge_invites_accept = /** @type {(inputs: Mod_Knowledge_Invites_AcceptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaakceptuj`)
};

const pt_mod_knowledge_invites_accept = /** @type {(inputs: Mod_Knowledge_Invites_AcceptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aceitar`)
};

const ru_mod_knowledge_invites_accept = /** @type {(inputs: Mod_Knowledge_Invites_AcceptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Принять`)
};

const sv_mod_knowledge_invites_accept = /** @type {(inputs: Mod_Knowledge_Invites_AcceptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Acceptera`)
};

const tr_mod_knowledge_invites_accept = /** @type {(inputs: Mod_Knowledge_Invites_AcceptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kabul et`)
};

const zh_mod_knowledge_invites_accept = /** @type {(inputs: Mod_Knowledge_Invites_AcceptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`接受`)
};

const ja_mod_knowledge_invites_accept = /** @type {(inputs: Mod_Knowledge_Invites_AcceptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`承諾`)
};

/**
* | output |
* | --- |
* | "Accept" |
*
* @param {Mod_Knowledge_Invites_AcceptInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_invites_accept = /** @type {((inputs?: Mod_Knowledge_Invites_AcceptInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Invites_AcceptInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_invites_accept(inputs)
	if (locale === "de") return de_mod_knowledge_invites_accept(inputs)
	if (locale === "fr") return fr_mod_knowledge_invites_accept(inputs)
	if (locale === "it") return it_mod_knowledge_invites_accept(inputs)
	if (locale === "nl") return nl_mod_knowledge_invites_accept(inputs)
	if (locale === "pl") return pl_mod_knowledge_invites_accept(inputs)
	if (locale === "pt") return pt_mod_knowledge_invites_accept(inputs)
	if (locale === "ru") return ru_mod_knowledge_invites_accept(inputs)
	if (locale === "sv") return sv_mod_knowledge_invites_accept(inputs)
	if (locale === "tr") return tr_mod_knowledge_invites_accept(inputs)
	if (locale === "zh") return zh_mod_knowledge_invites_accept(inputs)
	if (locale === "ja") return ja_mod_knowledge_invites_accept(inputs)
	return en_mod_knowledge_invites_accept(inputs)
});
