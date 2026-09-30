/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Reaction_HeartInputs */

const en_social_reaction_heart = /** @type {(inputs: Social_Reaction_HeartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Heart`)
};

const es_social_reaction_heart = /** @type {(inputs: Social_Reaction_HeartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Corazón`)
};

const de_social_reaction_heart = /** @type {(inputs: Social_Reaction_HeartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Herz`)
};

const fr_social_reaction_heart = /** @type {(inputs: Social_Reaction_HeartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cœur`)
};

const it_social_reaction_heart = /** @type {(inputs: Social_Reaction_HeartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cuore`)
};

const nl_social_reaction_heart = /** @type {(inputs: Social_Reaction_HeartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hart`)
};

const pl_social_reaction_heart = /** @type {(inputs: Social_Reaction_HeartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Serce`)
};

const pt_social_reaction_heart = /** @type {(inputs: Social_Reaction_HeartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Coração`)
};

const ru_social_reaction_heart = /** @type {(inputs: Social_Reaction_HeartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сердце`)
};

const sv_social_reaction_heart = /** @type {(inputs: Social_Reaction_HeartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hjärta`)
};

const tr_social_reaction_heart = /** @type {(inputs: Social_Reaction_HeartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kalp`)
};

const zh_social_reaction_heart = /** @type {(inputs: Social_Reaction_HeartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`爱心`)
};

const ja_social_reaction_heart = /** @type {(inputs: Social_Reaction_HeartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ハート`)
};

/**
* | output |
* | --- |
* | "Heart" |
*
* @param {Social_Reaction_HeartInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_reaction_heart = /** @type {((inputs?: Social_Reaction_HeartInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Reaction_HeartInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_reaction_heart(inputs)
	if (locale === "de") return de_social_reaction_heart(inputs)
	if (locale === "fr") return fr_social_reaction_heart(inputs)
	if (locale === "it") return it_social_reaction_heart(inputs)
	if (locale === "nl") return nl_social_reaction_heart(inputs)
	if (locale === "pl") return pl_social_reaction_heart(inputs)
	if (locale === "pt") return pt_social_reaction_heart(inputs)
	if (locale === "ru") return ru_social_reaction_heart(inputs)
	if (locale === "sv") return sv_social_reaction_heart(inputs)
	if (locale === "tr") return tr_social_reaction_heart(inputs)
	if (locale === "zh") return zh_social_reaction_heart(inputs)
	if (locale === "ja") return ja_social_reaction_heart(inputs)
	return en_social_reaction_heart(inputs)
});
