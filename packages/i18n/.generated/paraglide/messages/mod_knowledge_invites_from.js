/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Mod_Knowledge_Invites_FromInputs */

const en_mod_knowledge_invites_from = /** @type {(inputs: Mod_Knowledge_Invites_FromInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`invited by ${i?.name}`)
};

const es_mod_knowledge_invites_from = /** @type {(inputs: Mod_Knowledge_Invites_FromInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`invitado por ${i?.name}`)
};

const de_mod_knowledge_invites_from = /** @type {(inputs: Mod_Knowledge_Invites_FromInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`eingeladen von ${i?.name}`)
};

const fr_mod_knowledge_invites_from = /** @type {(inputs: Mod_Knowledge_Invites_FromInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`invité par ${i?.name}`)
};

const it_mod_knowledge_invites_from = /** @type {(inputs: Mod_Knowledge_Invites_FromInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`invitato da ${i?.name}`)
};

const nl_mod_knowledge_invites_from = /** @type {(inputs: Mod_Knowledge_Invites_FromInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`uitgenodigd door ${i?.name}`)
};

const pl_mod_knowledge_invites_from = /** @type {(inputs: Mod_Knowledge_Invites_FromInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`zaprasza ${i?.name}`)
};

const pt_mod_knowledge_invites_from = /** @type {(inputs: Mod_Knowledge_Invites_FromInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`convidado por ${i?.name}`)
};

const ru_mod_knowledge_invites_from = /** @type {(inputs: Mod_Knowledge_Invites_FromInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`приглашает ${i?.name}`)
};

const sv_mod_knowledge_invites_from = /** @type {(inputs: Mod_Knowledge_Invites_FromInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`inbjuden av ${i?.name}`)
};

const tr_mod_knowledge_invites_from = /** @type {(inputs: Mod_Knowledge_Invites_FromInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} davet etti`)
};

const zh_mod_knowledge_invites_from = /** @type {(inputs: Mod_Knowledge_Invites_FromInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 邀请`)
};

const ja_mod_knowledge_invites_from = /** @type {(inputs: Mod_Knowledge_Invites_FromInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} からの招待`)
};

/**
* | output |
* | --- |
* | "invited by {name}" |
*
* @param {Mod_Knowledge_Invites_FromInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_invites_from = /** @type {((inputs: Mod_Knowledge_Invites_FromInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Invites_FromInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_invites_from(inputs)
	if (locale === "de") return de_mod_knowledge_invites_from(inputs)
	if (locale === "fr") return fr_mod_knowledge_invites_from(inputs)
	if (locale === "it") return it_mod_knowledge_invites_from(inputs)
	if (locale === "nl") return nl_mod_knowledge_invites_from(inputs)
	if (locale === "pl") return pl_mod_knowledge_invites_from(inputs)
	if (locale === "pt") return pt_mod_knowledge_invites_from(inputs)
	if (locale === "ru") return ru_mod_knowledge_invites_from(inputs)
	if (locale === "sv") return sv_mod_knowledge_invites_from(inputs)
	if (locale === "tr") return tr_mod_knowledge_invites_from(inputs)
	if (locale === "zh") return zh_mod_knowledge_invites_from(inputs)
	if (locale === "ja") return ja_mod_knowledge_invites_from(inputs)
	return en_mod_knowledge_invites_from(inputs)
});
