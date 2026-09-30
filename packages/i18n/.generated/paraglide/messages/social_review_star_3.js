/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Review_Star_3Inputs */

const en_social_review_star_3 = /** @type {(inputs: Social_Review_Star_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Okay`)
};

const es_social_review_star_3 = /** @type {(inputs: Social_Review_Star_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Está bien`)
};

const de_social_review_star_3 = /** @type {(inputs: Social_Review_Star_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Okay`)
};

const fr_social_review_star_3 = /** @type {(inputs: Social_Review_Star_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Correct`)
};

const it_social_review_star_3 = /** @type {(inputs: Social_Review_Star_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discreto`)
};

const nl_social_review_star_3 = /** @type {(inputs: Social_Review_Star_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oké`)
};

const pl_social_review_star_3 = /** @type {(inputs: Social_Review_Star_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`W porządku`)
};

const pt_social_review_star_3 = /** @type {(inputs: Social_Review_Star_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ok`)
};

const ru_social_review_star_3 = /** @type {(inputs: Social_Review_Star_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нормально`)
};

const sv_social_review_star_3 = /** @type {(inputs: Social_Review_Star_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Okej`)
};

const tr_social_review_star_3 = /** @type {(inputs: Social_Review_Star_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İdare eder`)
};

const zh_social_review_star_3 = /** @type {(inputs: Social_Review_Star_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`还行`)
};

const ja_social_review_star_3 = /** @type {(inputs: Social_Review_Star_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`まあまあ`)
};

/**
* | output |
* | --- |
* | "Okay" |
*
* @param {Social_Review_Star_3Inputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_review_star_3 = /** @type {((inputs?: Social_Review_Star_3Inputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Review_Star_3Inputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_review_star_3(inputs)
	if (locale === "de") return de_social_review_star_3(inputs)
	if (locale === "fr") return fr_social_review_star_3(inputs)
	if (locale === "it") return it_social_review_star_3(inputs)
	if (locale === "nl") return nl_social_review_star_3(inputs)
	if (locale === "pl") return pl_social_review_star_3(inputs)
	if (locale === "pt") return pt_social_review_star_3(inputs)
	if (locale === "ru") return ru_social_review_star_3(inputs)
	if (locale === "sv") return sv_social_review_star_3(inputs)
	if (locale === "tr") return tr_social_review_star_3(inputs)
	if (locale === "zh") return zh_social_review_star_3(inputs)
	if (locale === "ja") return ja_social_review_star_3(inputs)
	return en_social_review_star_3(inputs)
});
