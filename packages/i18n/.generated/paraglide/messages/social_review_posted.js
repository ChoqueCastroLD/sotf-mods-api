/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Review_PostedInputs */

const en_social_review_posted = /** @type {(inputs: Social_Review_PostedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Thanks! Your review is live.`)
};

const es_social_review_posted = /** @type {(inputs: Social_Review_PostedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¡Gracias! Tu reseña ya está publicada.`)
};

const de_social_review_posted = /** @type {(inputs: Social_Review_PostedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Danke! Deine Bewertung ist online.`)
};

const fr_social_review_posted = /** @type {(inputs: Social_Review_PostedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Merci ! Votre avis est en ligne.`)
};

const it_social_review_posted = /** @type {(inputs: Social_Review_PostedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grazie! La tua recensione è online.`)
};

const nl_social_review_posted = /** @type {(inputs: Social_Review_PostedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bedankt! Je review staat online.`)
};

const pl_social_review_posted = /** @type {(inputs: Social_Review_PostedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dzięki! Twoja recenzja jest już widoczna.`)
};

const pt_social_review_posted = /** @type {(inputs: Social_Review_PostedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Valeu! Sua avaliação já está no ar.`)
};

const ru_social_review_posted = /** @type {(inputs: Social_Review_PostedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Спасибо! Ваш отзыв опубликован.`)
};

const sv_social_review_posted = /** @type {(inputs: Social_Review_PostedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tack! Din recension är publicerad.`)
};

const tr_social_review_posted = /** @type {(inputs: Social_Review_PostedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Teşekkürler! İncelemen yayında.`)
};

const zh_social_review_posted = /** @type {(inputs: Social_Review_PostedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`谢谢！你的评价已发布。`)
};

const ja_social_review_posted = /** @type {(inputs: Social_Review_PostedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ありがとうございます！レビューを公開しました。`)
};

/**
* | output |
* | --- |
* | "Thanks! Your review is live." |
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
