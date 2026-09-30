/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_ReactionsInputs */

const en_social_reactions = /** @type {(inputs: Social_ReactionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reactions`)
};

const es_social_reactions = /** @type {(inputs: Social_ReactionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reacciones`)
};

const de_social_reactions = /** @type {(inputs: Social_ReactionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reaktionen`)
};

const fr_social_reactions = /** @type {(inputs: Social_ReactionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Réactions`)
};

const it_social_reactions = /** @type {(inputs: Social_ReactionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reazioni`)
};

const nl_social_reactions = /** @type {(inputs: Social_ReactionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reacties`)
};

const pl_social_reactions = /** @type {(inputs: Social_ReactionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reakcje`)
};

const pt_social_reactions = /** @type {(inputs: Social_ReactionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reações`)
};

const ru_social_reactions = /** @type {(inputs: Social_ReactionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Реакции`)
};

const sv_social_reactions = /** @type {(inputs: Social_ReactionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reaktioner`)
};

const tr_social_reactions = /** @type {(inputs: Social_ReactionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tepkiler`)
};

const zh_social_reactions = /** @type {(inputs: Social_ReactionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`表情回应`)
};

const ja_social_reactions = /** @type {(inputs: Social_ReactionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リアクション`)
};

/**
* | output |
* | --- |
* | "Reactions" |
*
* @param {Social_ReactionsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_reactions = /** @type {((inputs?: Social_ReactionsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_ReactionsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_reactions(inputs)
	if (locale === "de") return de_social_reactions(inputs)
	if (locale === "fr") return fr_social_reactions(inputs)
	if (locale === "it") return it_social_reactions(inputs)
	if (locale === "nl") return nl_social_reactions(inputs)
	if (locale === "pl") return pl_social_reactions(inputs)
	if (locale === "pt") return pt_social_reactions(inputs)
	if (locale === "ru") return ru_social_reactions(inputs)
	if (locale === "sv") return sv_social_reactions(inputs)
	if (locale === "tr") return tr_social_reactions(inputs)
	if (locale === "zh") return zh_social_reactions(inputs)
	if (locale === "ja") return ja_social_reactions(inputs)
	return en_social_reactions(inputs)
});
