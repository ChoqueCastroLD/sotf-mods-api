/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Review_Star_5Inputs */

const en_social_review_star_5 = /** @type {(inputs: Social_Review_Star_5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Essential`)
};

const es_social_review_star_5 = /** @type {(inputs: Social_Review_Star_5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Imprescindible`)
};

const de_social_review_star_5 = /** @type {(inputs: Social_Review_Star_5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unverzichtbar`)
};

const fr_social_review_star_5 = /** @type {(inputs: Social_Review_Star_5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Indispensable`)
};

const it_social_review_star_5 = /** @type {(inputs: Social_Review_Star_5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Indispensabile`)
};

const nl_social_review_star_5 = /** @type {(inputs: Social_Review_Star_5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Onmisbaar`)
};

const pl_social_review_star_5 = /** @type {(inputs: Social_Review_Star_5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niezbędny`)
};

const pt_social_review_star_5 = /** @type {(inputs: Social_Review_Star_5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Essencial`)
};

const ru_social_review_star_5 = /** @type {(inputs: Social_Review_Star_5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Незаменимо`)
};

const sv_social_review_star_5 = /** @type {(inputs: Social_Review_Star_5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oumbärlig`)
};

const tr_social_review_star_5 = /** @type {(inputs: Social_Review_Star_5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Olmazsa olmaz`)
};

const zh_social_review_star_5 = /** @type {(inputs: Social_Review_Star_5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`必备`)
};

const ja_social_review_star_5 = /** @type {(inputs: Social_Review_Star_5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`必須`)
};

/**
* | output |
* | --- |
* | "Essential" |
*
* @param {Social_Review_Star_5Inputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_review_star_5 = /** @type {((inputs?: Social_Review_Star_5Inputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Review_Star_5Inputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_review_star_5(inputs)
	if (locale === "de") return de_social_review_star_5(inputs)
	if (locale === "fr") return fr_social_review_star_5(inputs)
	if (locale === "it") return it_social_review_star_5(inputs)
	if (locale === "nl") return nl_social_review_star_5(inputs)
	if (locale === "pl") return pl_social_review_star_5(inputs)
	if (locale === "pt") return pt_social_review_star_5(inputs)
	if (locale === "ru") return ru_social_review_star_5(inputs)
	if (locale === "sv") return sv_social_review_star_5(inputs)
	if (locale === "tr") return tr_social_review_star_5(inputs)
	if (locale === "zh") return zh_social_review_star_5(inputs)
	if (locale === "ja") return ja_social_review_star_5(inputs)
	return en_social_review_star_5(inputs)
});
