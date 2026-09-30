/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Review_YoursInputs */

const en_social_review_yours = /** @type {(inputs: Social_Review_YoursInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your review`)
};

const es_social_review_yours = /** @type {(inputs: Social_Review_YoursInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu reseña`)
};

const de_social_review_yours = /** @type {(inputs: Social_Review_YoursInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deine Bewertung`)
};

const fr_social_review_yours = /** @type {(inputs: Social_Review_YoursInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votre avis`)
};

const it_social_review_yours = /** @type {(inputs: Social_Review_YoursInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La tua recensione`)
};

const nl_social_review_yours = /** @type {(inputs: Social_Review_YoursInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je review`)
};

const pl_social_review_yours = /** @type {(inputs: Social_Review_YoursInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twoja recenzja`)
};

const pt_social_review_yours = /** @type {(inputs: Social_Review_YoursInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sua avaliação`)
};

const ru_social_review_yours = /** @type {(inputs: Social_Review_YoursInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваш отзыв`)
};

const sv_social_review_yours = /** @type {(inputs: Social_Review_YoursInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Din recension`)
};

const tr_social_review_yours = /** @type {(inputs: Social_Review_YoursInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İncelemen`)
};

const zh_social_review_yours = /** @type {(inputs: Social_Review_YoursInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的评价`)
};

const ja_social_review_yours = /** @type {(inputs: Social_Review_YoursInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`あなたのレビュー`)
};

/**
* | output |
* | --- |
* | "Your review" |
*
* @param {Social_Review_YoursInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_review_yours = /** @type {((inputs?: Social_Review_YoursInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Review_YoursInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_review_yours(inputs)
	if (locale === "de") return de_social_review_yours(inputs)
	if (locale === "fr") return fr_social_review_yours(inputs)
	if (locale === "it") return it_social_review_yours(inputs)
	if (locale === "nl") return nl_social_review_yours(inputs)
	if (locale === "pl") return pl_social_review_yours(inputs)
	if (locale === "pt") return pt_social_review_yours(inputs)
	if (locale === "ru") return ru_social_review_yours(inputs)
	if (locale === "sv") return sv_social_review_yours(inputs)
	if (locale === "tr") return tr_social_review_yours(inputs)
	if (locale === "zh") return zh_social_review_yours(inputs)
	if (locale === "ja") return ja_social_review_yours(inputs)
	return en_social_review_yours(inputs)
});
