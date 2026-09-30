/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Review_Star_4Inputs */

const en_social_review_star_4 = /** @type {(inputs: Social_Review_Star_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Great`)
};

const es_social_review_star_4 = /** @type {(inputs: Social_Review_Star_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Muy bueno`)
};

const de_social_review_star_4 = /** @type {(inputs: Social_Review_Star_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sehr gut`)
};

const fr_social_review_star_4 = /** @type {(inputs: Social_Review_Star_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Très bien`)
};

const it_social_review_star_4 = /** @type {(inputs: Social_Review_Star_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ottimo`)
};

const nl_social_review_star_4 = /** @type {(inputs: Social_Review_Star_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erg goed`)
};

const pl_social_review_star_4 = /** @type {(inputs: Social_Review_Star_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Świetny`)
};

const pt_social_review_star_4 = /** @type {(inputs: Social_Review_Star_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Muito bom`)
};

const ru_social_review_star_4 = /** @type {(inputs: Social_Review_Star_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отлично`)
};

const sv_social_review_star_4 = /** @type {(inputs: Social_Review_Star_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Riktigt bra`)
};

const tr_social_review_star_4 = /** @type {(inputs: Social_Review_Star_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Harika`)
};

const zh_social_review_star_4 = /** @type {(inputs: Social_Review_Star_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`很棒`)
};

const ja_social_review_star_4 = /** @type {(inputs: Social_Review_Star_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`とても良い`)
};

/**
* | output |
* | --- |
* | "Great" |
*
* @param {Social_Review_Star_4Inputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_review_star_4 = /** @type {((inputs?: Social_Review_Star_4Inputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Review_Star_4Inputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_review_star_4(inputs)
	if (locale === "de") return de_social_review_star_4(inputs)
	if (locale === "fr") return fr_social_review_star_4(inputs)
	if (locale === "it") return it_social_review_star_4(inputs)
	if (locale === "nl") return nl_social_review_star_4(inputs)
	if (locale === "pl") return pl_social_review_star_4(inputs)
	if (locale === "pt") return pt_social_review_star_4(inputs)
	if (locale === "ru") return ru_social_review_star_4(inputs)
	if (locale === "sv") return sv_social_review_star_4(inputs)
	if (locale === "tr") return tr_social_review_star_4(inputs)
	if (locale === "zh") return zh_social_review_star_4(inputs)
	if (locale === "ja") return ja_social_review_star_4(inputs)
	return en_social_review_star_4(inputs)
});
