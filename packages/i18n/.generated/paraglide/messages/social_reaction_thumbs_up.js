/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Reaction_Thumbs_UpInputs */

const en_social_reaction_thumbs_up = /** @type {(inputs: Social_Reaction_Thumbs_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Thumbs up`)
};

const es_social_reaction_thumbs_up = /** @type {(inputs: Social_Reaction_Thumbs_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pulgar arriba`)
};

const de_social_reaction_thumbs_up = /** @type {(inputs: Social_Reaction_Thumbs_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Daumen hoch`)
};

const fr_social_reaction_thumbs_up = /** @type {(inputs: Social_Reaction_Thumbs_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pouce levé`)
};

const it_social_reaction_thumbs_up = /** @type {(inputs: Social_Reaction_Thumbs_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pollice in su`)
};

const nl_social_reaction_thumbs_up = /** @type {(inputs: Social_Reaction_Thumbs_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Duim omhoog`)
};

const pl_social_reaction_thumbs_up = /** @type {(inputs: Social_Reaction_Thumbs_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kciuk w górę`)
};

const pt_social_reaction_thumbs_up = /** @type {(inputs: Social_Reaction_Thumbs_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Joinha`)
};

const ru_social_reaction_thumbs_up = /** @type {(inputs: Social_Reaction_Thumbs_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Палец вверх`)
};

const sv_social_reaction_thumbs_up = /** @type {(inputs: Social_Reaction_Thumbs_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tummen upp`)
};

const tr_social_reaction_thumbs_up = /** @type {(inputs: Social_Reaction_Thumbs_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beğen`)
};

const zh_social_reaction_thumbs_up = /** @type {(inputs: Social_Reaction_Thumbs_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`点赞`)
};

const ja_social_reaction_thumbs_up = /** @type {(inputs: Social_Reaction_Thumbs_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`いいね`)
};

/**
* | output |
* | --- |
* | "Thumbs up" |
*
* @param {Social_Reaction_Thumbs_UpInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_reaction_thumbs_up = /** @type {((inputs?: Social_Reaction_Thumbs_UpInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Reaction_Thumbs_UpInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_reaction_thumbs_up(inputs)
	if (locale === "de") return de_social_reaction_thumbs_up(inputs)
	if (locale === "fr") return fr_social_reaction_thumbs_up(inputs)
	if (locale === "it") return it_social_reaction_thumbs_up(inputs)
	if (locale === "nl") return nl_social_reaction_thumbs_up(inputs)
	if (locale === "pl") return pl_social_reaction_thumbs_up(inputs)
	if (locale === "pt") return pt_social_reaction_thumbs_up(inputs)
	if (locale === "ru") return ru_social_reaction_thumbs_up(inputs)
	if (locale === "sv") return sv_social_reaction_thumbs_up(inputs)
	if (locale === "tr") return tr_social_reaction_thumbs_up(inputs)
	if (locale === "zh") return zh_social_reaction_thumbs_up(inputs)
	if (locale === "ja") return ja_social_reaction_thumbs_up(inputs)
	return en_social_reaction_thumbs_up(inputs)
});
