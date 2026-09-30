/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Reaction_LaughInputs */

const en_social_reaction_laugh = /** @type {(inputs: Social_Reaction_LaughInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Laugh`)
};

const es_social_reaction_laugh = /** @type {(inputs: Social_Reaction_LaughInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Risa`)
};

const de_social_reaction_laugh = /** @type {(inputs: Social_Reaction_LaughInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lachen`)
};

const fr_social_reaction_laugh = /** @type {(inputs: Social_Reaction_LaughInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rire`)
};

const it_social_reaction_laugh = /** @type {(inputs: Social_Reaction_LaughInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Risata`)
};

const nl_social_reaction_laugh = /** @type {(inputs: Social_Reaction_LaughInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lach`)
};

const pl_social_reaction_laugh = /** @type {(inputs: Social_Reaction_LaughInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Śmiech`)
};

const pt_social_reaction_laugh = /** @type {(inputs: Social_Reaction_LaughInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Risada`)
};

const ru_social_reaction_laugh = /** @type {(inputs: Social_Reaction_LaughInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Смех`)
};

const sv_social_reaction_laugh = /** @type {(inputs: Social_Reaction_LaughInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skratt`)
};

const tr_social_reaction_laugh = /** @type {(inputs: Social_Reaction_LaughInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gülme`)
};

const zh_social_reaction_laugh = /** @type {(inputs: Social_Reaction_LaughInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`大笑`)
};

const ja_social_reaction_laugh = /** @type {(inputs: Social_Reaction_LaughInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`笑い`)
};

/**
* | output |
* | --- |
* | "Laugh" |
*
* @param {Social_Reaction_LaughInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_reaction_laugh = /** @type {((inputs?: Social_Reaction_LaughInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Reaction_LaughInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_reaction_laugh(inputs)
	if (locale === "de") return de_social_reaction_laugh(inputs)
	if (locale === "fr") return fr_social_reaction_laugh(inputs)
	if (locale === "it") return it_social_reaction_laugh(inputs)
	if (locale === "nl") return nl_social_reaction_laugh(inputs)
	if (locale === "pl") return pl_social_reaction_laugh(inputs)
	if (locale === "pt") return pt_social_reaction_laugh(inputs)
	if (locale === "ru") return ru_social_reaction_laugh(inputs)
	if (locale === "sv") return sv_social_reaction_laugh(inputs)
	if (locale === "tr") return tr_social_reaction_laugh(inputs)
	if (locale === "zh") return zh_social_reaction_laugh(inputs)
	if (locale === "ja") return ja_social_reaction_laugh(inputs)
	return en_social_reaction_laugh(inputs)
});
