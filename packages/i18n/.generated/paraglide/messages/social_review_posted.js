/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Review_PostedInputs */

const en_social_review_posted = /** @type {(inputs: Social_Review_PostedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your review was published.`)
};

const es_social_review_posted = /** @type {(inputs: Social_Review_PostedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu reseña se ha publicado.`)
};

const de_social_review_posted = /** @type {(inputs: Social_Review_PostedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deine Bewertung wurde veröffentlicht.`)
};

const fr_social_review_posted = /** @type {(inputs: Social_Review_PostedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votre avis a été publié.`)
};

const it_social_review_posted = /** @type {(inputs: Social_Review_PostedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La tua recensione è stata pubblicata.`)
};

const nl_social_review_posted = /** @type {(inputs: Social_Review_PostedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je review is geplaatst.`)
};

const pl_social_review_posted = /** @type {(inputs: Social_Review_PostedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twoja recenzja została opublikowana.`)
};

const pt_social_review_posted = /** @type {(inputs: Social_Review_PostedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sua avaliação foi publicada.`)
};

const ru_social_review_posted = /** @type {(inputs: Social_Review_PostedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваш отзыв опубликован.`)
};

const sv_social_review_posted = /** @type {(inputs: Social_Review_PostedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Din recension har publicerats.`)
};

const tr_social_review_posted = /** @type {(inputs: Social_Review_PostedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İncelemen yayımlandı.`)
};

const zh_social_review_posted = /** @type {(inputs: Social_Review_PostedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的评价已发布。`)
};

const ja_social_review_posted = /** @type {(inputs: Social_Review_PostedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レビューを公開しました。`)
};

/**
* | output |
* | --- |
* | "Your review was published." |
*
* @param {Social_Review_PostedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_review_posted = /** @type {((inputs?: Social_Review_PostedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Review_PostedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_review_posted(inputs)
	if (locale === "de") return de_social_review_posted(inputs)
	if (locale === "fr") return fr_social_review_posted(inputs)
	if (locale === "it") return it_social_review_posted(inputs)
	if (locale === "nl") return nl_social_review_posted(inputs)
	if (locale === "pl") return pl_social_review_posted(inputs)
	if (locale === "pt") return pt_social_review_posted(inputs)
	if (locale === "ru") return ru_social_review_posted(inputs)
	if (locale === "sv") return sv_social_review_posted(inputs)
	if (locale === "tr") return tr_social_review_posted(inputs)
	if (locale === "zh") return zh_social_review_posted(inputs)
	if (locale === "ja") return ja_social_review_posted(inputs)
	return en_social_review_posted(inputs)
});
