/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Reaction_PrayInputs */

const en_social_reaction_pray = /** @type {(inputs: Social_Reaction_PrayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Thanks`)
};

const es_social_reaction_pray = /** @type {(inputs: Social_Reaction_PrayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gracias`)
};

const de_social_reaction_pray = /** @type {(inputs: Social_Reaction_PrayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Danke`)
};

const fr_social_reaction_pray = /** @type {(inputs: Social_Reaction_PrayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Merci`)
};

const it_social_reaction_pray = /** @type {(inputs: Social_Reaction_PrayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grazie`)
};

const nl_social_reaction_pray = /** @type {(inputs: Social_Reaction_PrayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bedankt`)
};

const pl_social_reaction_pray = /** @type {(inputs: Social_Reaction_PrayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dzięki`)
};

const pt_social_reaction_pray = /** @type {(inputs: Social_Reaction_PrayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obrigado`)
};

const ru_social_reaction_pray = /** @type {(inputs: Social_Reaction_PrayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Спасибо`)
};

const sv_social_reaction_pray = /** @type {(inputs: Social_Reaction_PrayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tack`)
};

const tr_social_reaction_pray = /** @type {(inputs: Social_Reaction_PrayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Teşekkürler`)
};

const zh_social_reaction_pray = /** @type {(inputs: Social_Reaction_PrayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`感谢`)
};

const ja_social_reaction_pray = /** @type {(inputs: Social_Reaction_PrayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ありがとう`)
};

/**
* | output |
* | --- |
* | "Thanks" |
*
* @param {Social_Reaction_PrayInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_reaction_pray = /** @type {((inputs?: Social_Reaction_PrayInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Reaction_PrayInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_reaction_pray(inputs)
	if (locale === "de") return de_social_reaction_pray(inputs)
	if (locale === "fr") return fr_social_reaction_pray(inputs)
	if (locale === "it") return it_social_reaction_pray(inputs)
	if (locale === "nl") return nl_social_reaction_pray(inputs)
	if (locale === "pl") return pl_social_reaction_pray(inputs)
	if (locale === "pt") return pt_social_reaction_pray(inputs)
	if (locale === "ru") return ru_social_reaction_pray(inputs)
	if (locale === "sv") return sv_social_reaction_pray(inputs)
	if (locale === "tr") return tr_social_reaction_pray(inputs)
	if (locale === "zh") return zh_social_reaction_pray(inputs)
	if (locale === "ja") return ja_social_reaction_pray(inputs)
	return en_social_reaction_pray(inputs)
});
