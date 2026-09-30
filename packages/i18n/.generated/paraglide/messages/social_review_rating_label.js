/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Review_Rating_LabelInputs */

const en_social_review_rating_label = /** @type {(inputs: Social_Review_Rating_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your rating`)
};

const es_social_review_rating_label = /** @type {(inputs: Social_Review_Rating_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu valoración`)
};

const de_social_review_rating_label = /** @type {(inputs: Social_Review_Rating_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deine Bewertung`)
};

const fr_social_review_rating_label = /** @type {(inputs: Social_Review_Rating_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votre note`)
};

const it_social_review_rating_label = /** @type {(inputs: Social_Review_Rating_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il tuo voto`)
};

const nl_social_review_rating_label = /** @type {(inputs: Social_Review_Rating_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jouw beoordeling`)
};

const pl_social_review_rating_label = /** @type {(inputs: Social_Review_Rating_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twoja ocena`)
};

const pt_social_review_rating_label = /** @type {(inputs: Social_Review_Rating_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sua nota`)
};

const ru_social_review_rating_label = /** @type {(inputs: Social_Review_Rating_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваша оценка`)
};

const sv_social_review_rating_label = /** @type {(inputs: Social_Review_Rating_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ditt betyg`)
};

const tr_social_review_rating_label = /** @type {(inputs: Social_Review_Rating_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Puanın`)
};

const zh_social_review_rating_label = /** @type {(inputs: Social_Review_Rating_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的评分`)
};

const ja_social_review_rating_label = /** @type {(inputs: Social_Review_Rating_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`あなたの評価`)
};

/**
* | output |
* | --- |
* | "Your rating" |
*
* @param {Social_Review_Rating_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_review_rating_label = /** @type {((inputs?: Social_Review_Rating_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Review_Rating_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_review_rating_label(inputs)
	if (locale === "de") return de_social_review_rating_label(inputs)
	if (locale === "fr") return fr_social_review_rating_label(inputs)
	if (locale === "it") return it_social_review_rating_label(inputs)
	if (locale === "nl") return nl_social_review_rating_label(inputs)
	if (locale === "pl") return pl_social_review_rating_label(inputs)
	if (locale === "pt") return pt_social_review_rating_label(inputs)
	if (locale === "ru") return ru_social_review_rating_label(inputs)
	if (locale === "sv") return sv_social_review_rating_label(inputs)
	if (locale === "tr") return tr_social_review_rating_label(inputs)
	if (locale === "zh") return zh_social_review_rating_label(inputs)
	if (locale === "ja") return ja_social_review_rating_label(inputs)
	return en_social_review_rating_label(inputs)
});
