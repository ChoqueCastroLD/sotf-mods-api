/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Review_Star_2Inputs */

const en_social_review_star_2 = /** @type {(inputs: Social_Review_Star_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Needs work`)
};

const es_social_review_star_2 = /** @type {(inputs: Social_Review_Star_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Necesita mejorar`)
};

const de_social_review_star_2 = /** @type {(inputs: Social_Review_Star_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ausbaufähig`)
};

const fr_social_review_star_2 = /** @type {(inputs: Social_Review_Star_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`À améliorer`)
};

const it_social_review_star_2 = /** @type {(inputs: Social_Review_Star_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Da migliorare`)
};

const nl_social_review_star_2 = /** @type {(inputs: Social_Review_Star_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kan beter`)
};

const pl_social_review_star_2 = /** @type {(inputs: Social_Review_Star_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wymaga poprawek`)
};

const pt_social_review_star_2 = /** @type {(inputs: Social_Review_Star_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Precisa melhorar`)
};

const ru_social_review_star_2 = /** @type {(inputs: Social_Review_Star_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нужно доработать`)
};

const sv_social_review_star_2 = /** @type {(inputs: Social_Review_Star_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Behöver jobbas på`)
};

const tr_social_review_star_2 = /** @type {(inputs: Social_Review_Star_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geliştirilmeli`)
};

const zh_social_review_star_2 = /** @type {(inputs: Social_Review_Star_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`有待改进`)
};

const ja_social_review_star_2 = /** @type {(inputs: Social_Review_Star_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`いまひとつ`)
};

/**
* | output |
* | --- |
* | "Needs work" |
*
* @param {Social_Review_Star_2Inputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_review_star_2 = /** @type {((inputs?: Social_Review_Star_2Inputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Review_Star_2Inputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_review_star_2(inputs)
	if (locale === "de") return de_social_review_star_2(inputs)
	if (locale === "fr") return fr_social_review_star_2(inputs)
	if (locale === "it") return it_social_review_star_2(inputs)
	if (locale === "nl") return nl_social_review_star_2(inputs)
	if (locale === "pl") return pl_social_review_star_2(inputs)
	if (locale === "pt") return pt_social_review_star_2(inputs)
	if (locale === "ru") return ru_social_review_star_2(inputs)
	if (locale === "sv") return sv_social_review_star_2(inputs)
	if (locale === "tr") return tr_social_review_star_2(inputs)
	if (locale === "zh") return zh_social_review_star_2(inputs)
	if (locale === "ja") return ja_social_review_star_2(inputs)
	return en_social_review_star_2(inputs)
});
