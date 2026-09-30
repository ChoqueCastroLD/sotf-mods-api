/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Reaction_PartyInputs */

const en_social_reaction_party = /** @type {(inputs: Social_Reaction_PartyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Celebrate`)
};

const es_social_reaction_party = /** @type {(inputs: Social_Reaction_PartyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Celebrar`)
};

const de_social_reaction_party = /** @type {(inputs: Social_Reaction_PartyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Feiern`)
};

const fr_social_reaction_party = /** @type {(inputs: Social_Reaction_PartyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fête`)
};

const it_social_reaction_party = /** @type {(inputs: Social_Reaction_PartyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Festa`)
};

const nl_social_reaction_party = /** @type {(inputs: Social_Reaction_PartyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Feest`)
};

const pl_social_reaction_party = /** @type {(inputs: Social_Reaction_PartyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Świętowanie`)
};

const pt_social_reaction_party = /** @type {(inputs: Social_Reaction_PartyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comemorar`)
};

const ru_social_reaction_party = /** @type {(inputs: Social_Reaction_PartyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Праздник`)
};

const sv_social_reaction_party = /** @type {(inputs: Social_Reaction_PartyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fira`)
};

const tr_social_reaction_party = /** @type {(inputs: Social_Reaction_PartyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kutlama`)
};

const zh_social_reaction_party = /** @type {(inputs: Social_Reaction_PartyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`庆祝`)
};

const ja_social_reaction_party = /** @type {(inputs: Social_Reaction_PartyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`お祝い`)
};

/**
* | output |
* | --- |
* | "Celebrate" |
*
* @param {Social_Reaction_PartyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_reaction_party = /** @type {((inputs?: Social_Reaction_PartyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Reaction_PartyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_reaction_party(inputs)
	if (locale === "de") return de_social_reaction_party(inputs)
	if (locale === "fr") return fr_social_reaction_party(inputs)
	if (locale === "it") return it_social_reaction_party(inputs)
	if (locale === "nl") return nl_social_reaction_party(inputs)
	if (locale === "pl") return pl_social_reaction_party(inputs)
	if (locale === "pt") return pt_social_reaction_party(inputs)
	if (locale === "ru") return ru_social_reaction_party(inputs)
	if (locale === "sv") return sv_social_reaction_party(inputs)
	if (locale === "tr") return tr_social_reaction_party(inputs)
	if (locale === "zh") return zh_social_reaction_party(inputs)
	if (locale === "ja") return ja_social_reaction_party(inputs)
	return en_social_reaction_party(inputs)
});
