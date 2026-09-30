/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Reaction_FireInputs */

const en_social_reaction_fire = /** @type {(inputs: Social_Reaction_FireInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fire`)
};

const es_social_reaction_fire = /** @type {(inputs: Social_Reaction_FireInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fuego`)
};

const de_social_reaction_fire = /** @type {(inputs: Social_Reaction_FireInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Feuer`)
};

const fr_social_reaction_fire = /** @type {(inputs: Social_Reaction_FireInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Feu`)
};

const it_social_reaction_fire = /** @type {(inputs: Social_Reaction_FireInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fuoco`)
};

const nl_social_reaction_fire = /** @type {(inputs: Social_Reaction_FireInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vuur`)
};

const pl_social_reaction_fire = /** @type {(inputs: Social_Reaction_FireInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ogień`)
};

const pt_social_reaction_fire = /** @type {(inputs: Social_Reaction_FireInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fogo`)
};

const ru_social_reaction_fire = /** @type {(inputs: Social_Reaction_FireInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Огонь`)
};

const sv_social_reaction_fire = /** @type {(inputs: Social_Reaction_FireInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eld`)
};

const tr_social_reaction_fire = /** @type {(inputs: Social_Reaction_FireInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ateş`)
};

const zh_social_reaction_fire = /** @type {(inputs: Social_Reaction_FireInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`火`)
};

const ja_social_reaction_fire = /** @type {(inputs: Social_Reaction_FireInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`炎`)
};

/**
* | output |
* | --- |
* | "Fire" |
*
* @param {Social_Reaction_FireInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_reaction_fire = /** @type {((inputs?: Social_Reaction_FireInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Reaction_FireInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_reaction_fire(inputs)
	if (locale === "de") return de_social_reaction_fire(inputs)
	if (locale === "fr") return fr_social_reaction_fire(inputs)
	if (locale === "it") return it_social_reaction_fire(inputs)
	if (locale === "nl") return nl_social_reaction_fire(inputs)
	if (locale === "pl") return pl_social_reaction_fire(inputs)
	if (locale === "pt") return pt_social_reaction_fire(inputs)
	if (locale === "ru") return ru_social_reaction_fire(inputs)
	if (locale === "sv") return sv_social_reaction_fire(inputs)
	if (locale === "tr") return tr_social_reaction_fire(inputs)
	if (locale === "zh") return zh_social_reaction_fire(inputs)
	if (locale === "ja") return ja_social_reaction_fire(inputs)
	return en_social_reaction_fire(inputs)
});
