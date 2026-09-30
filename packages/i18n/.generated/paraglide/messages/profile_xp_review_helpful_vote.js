/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Xp_Review_Helpful_VoteInputs */

const en_profile_xp_review_helpful_vote = /** @type {(inputs: Profile_Xp_Review_Helpful_VoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A “helpful” vote on your review`)
};

const es_profile_xp_review_helpful_vote = /** @type {(inputs: Profile_Xp_Review_Helpful_VoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un voto «útil» en tu reseña`)
};

const de_profile_xp_review_helpful_vote = /** @type {(inputs: Profile_Xp_Review_Helpful_VoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eine „Hilfreich“-Stimme für deine Bewertung`)
};

const fr_profile_xp_review_helpful_vote = /** @type {(inputs: Profile_Xp_Review_Helpful_VoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un vote « utile » sur votre avis`)
};

const it_profile_xp_review_helpful_vote = /** @type {(inputs: Profile_Xp_Review_Helpful_VoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un voto «utile» sulla tua recensione`)
};

const nl_profile_xp_review_helpful_vote = /** @type {(inputs: Profile_Xp_Review_Helpful_VoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een ‘nuttig’-stem op je review`)
};

const pl_profile_xp_review_helpful_vote = /** @type {(inputs: Profile_Xp_Review_Helpful_VoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Głos „pomocne” przy twojej recenzji`)
};

const pt_profile_xp_review_helpful_vote = /** @type {(inputs: Profile_Xp_Review_Helpful_VoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Um voto “útil” na sua avaliação`)
};

const ru_profile_xp_review_helpful_vote = /** @type {(inputs: Profile_Xp_Review_Helpful_VoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Голос «полезно» за ваш отзыв`)
};

const sv_profile_xp_review_helpful_vote = /** @type {(inputs: Profile_Xp_Review_Helpful_VoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En ”hjälpsam”-röst på din recension`)
};

const tr_profile_xp_review_helpful_vote = /** @type {(inputs: Profile_Xp_Review_Helpful_VoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İncelemene verilen bir “faydalı” oyu`)
};

const zh_profile_xp_review_helpful_vote = /** @type {(inputs: Profile_Xp_Review_Helpful_VoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的评价获得一张“有帮助”票`)
};

const ja_profile_xp_review_helpful_vote = /** @type {(inputs: Profile_Xp_Review_Helpful_VoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レビューへの「役に立った」票`)
};

/**
* | output |
* | --- |
* | "A “helpful” vote on your review" |
*
* @param {Profile_Xp_Review_Helpful_VoteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_xp_review_helpful_vote = /** @type {((inputs?: Profile_Xp_Review_Helpful_VoteInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Xp_Review_Helpful_VoteInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_xp_review_helpful_vote(inputs)
	if (locale === "de") return de_profile_xp_review_helpful_vote(inputs)
	if (locale === "fr") return fr_profile_xp_review_helpful_vote(inputs)
	if (locale === "it") return it_profile_xp_review_helpful_vote(inputs)
	if (locale === "nl") return nl_profile_xp_review_helpful_vote(inputs)
	if (locale === "pl") return pl_profile_xp_review_helpful_vote(inputs)
	if (locale === "pt") return pt_profile_xp_review_helpful_vote(inputs)
	if (locale === "ru") return ru_profile_xp_review_helpful_vote(inputs)
	if (locale === "sv") return sv_profile_xp_review_helpful_vote(inputs)
	if (locale === "tr") return tr_profile_xp_review_helpful_vote(inputs)
	if (locale === "zh") return zh_profile_xp_review_helpful_vote(inputs)
	if (locale === "ja") return ja_profile_xp_review_helpful_vote(inputs)
	return en_profile_xp_review_helpful_vote(inputs)
});
