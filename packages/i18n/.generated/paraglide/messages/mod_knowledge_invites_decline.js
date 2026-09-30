/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Invites_DeclineInputs */

const en_mod_knowledge_invites_decline = /** @type {(inputs: Mod_Knowledge_Invites_DeclineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Decline`)
};

const es_mod_knowledge_invites_decline = /** @type {(inputs: Mod_Knowledge_Invites_DeclineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rechazar`)
};

const de_mod_knowledge_invites_decline = /** @type {(inputs: Mod_Knowledge_Invites_DeclineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ablehnen`)
};

const fr_mod_knowledge_invites_decline = /** @type {(inputs: Mod_Knowledge_Invites_DeclineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Refuser`)
};

const it_mod_knowledge_invites_decline = /** @type {(inputs: Mod_Knowledge_Invites_DeclineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rifiuta`)
};

const nl_mod_knowledge_invites_decline = /** @type {(inputs: Mod_Knowledge_Invites_DeclineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Weigeren`)
};

const pl_mod_knowledge_invites_decline = /** @type {(inputs: Mod_Knowledge_Invites_DeclineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odrzuć`)
};

const pt_mod_knowledge_invites_decline = /** @type {(inputs: Mod_Knowledge_Invites_DeclineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recusar`)
};

const ru_mod_knowledge_invites_decline = /** @type {(inputs: Mod_Knowledge_Invites_DeclineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отклонить`)
};

const sv_mod_knowledge_invites_decline = /** @type {(inputs: Mod_Knowledge_Invites_DeclineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avböj`)
};

const tr_mod_knowledge_invites_decline = /** @type {(inputs: Mod_Knowledge_Invites_DeclineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reddet`)
};

const zh_mod_knowledge_invites_decline = /** @type {(inputs: Mod_Knowledge_Invites_DeclineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`拒绝`)
};

const ja_mod_knowledge_invites_decline = /** @type {(inputs: Mod_Knowledge_Invites_DeclineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`辞退`)
};

/**
* | output |
* | --- |
* | "Decline" |
*
* @param {Mod_Knowledge_Invites_DeclineInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_invites_decline = /** @type {((inputs?: Mod_Knowledge_Invites_DeclineInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Invites_DeclineInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_invites_decline(inputs)
	if (locale === "de") return de_mod_knowledge_invites_decline(inputs)
	if (locale === "fr") return fr_mod_knowledge_invites_decline(inputs)
	if (locale === "it") return it_mod_knowledge_invites_decline(inputs)
	if (locale === "nl") return nl_mod_knowledge_invites_decline(inputs)
	if (locale === "pl") return pl_mod_knowledge_invites_decline(inputs)
	if (locale === "pt") return pt_mod_knowledge_invites_decline(inputs)
	if (locale === "ru") return ru_mod_knowledge_invites_decline(inputs)
	if (locale === "sv") return sv_mod_knowledge_invites_decline(inputs)
	if (locale === "tr") return tr_mod_knowledge_invites_decline(inputs)
	if (locale === "zh") return zh_mod_knowledge_invites_decline(inputs)
	if (locale === "ja") return ja_mod_knowledge_invites_decline(inputs)
	return en_mod_knowledge_invites_decline(inputs)
});
