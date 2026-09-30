/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Review_SubmitInputs */

const en_social_review_submit = /** @type {(inputs: Social_Review_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publish review`)
};

const es_social_review_submit = /** @type {(inputs: Social_Review_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicar reseña`)
};

const de_social_review_submit = /** @type {(inputs: Social_Review_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bewertung veröffentlichen`)
};

const fr_social_review_submit = /** @type {(inputs: Social_Review_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publier l’avis`)
};

const it_social_review_submit = /** @type {(inputs: Social_Review_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pubblica recensione`)
};

const nl_social_review_submit = /** @type {(inputs: Social_Review_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Review publiceren`)
};

const pl_social_review_submit = /** @type {(inputs: Social_Review_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opublikuj recenzję`)
};

const pt_social_review_submit = /** @type {(inputs: Social_Review_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicar avaliação`)
};

const ru_social_review_submit = /** @type {(inputs: Social_Review_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Опубликовать отзыв`)
};

const sv_social_review_submit = /** @type {(inputs: Social_Review_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicera recension`)
};

const tr_social_review_submit = /** @type {(inputs: Social_Review_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İncelemeyi yayınla`)
};

const zh_social_review_submit = /** @type {(inputs: Social_Review_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发布评价`)
};

const ja_social_review_submit = /** @type {(inputs: Social_Review_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レビューを公開`)
};

/**
* | output |
* | --- |
* | "Publish review" |
*
* @param {Social_Review_SubmitInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_review_submit = /** @type {((inputs?: Social_Review_SubmitInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Review_SubmitInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_review_submit(inputs)
	if (locale === "de") return de_social_review_submit(inputs)
	if (locale === "fr") return fr_social_review_submit(inputs)
	if (locale === "it") return it_social_review_submit(inputs)
	if (locale === "nl") return nl_social_review_submit(inputs)
	if (locale === "pl") return pl_social_review_submit(inputs)
	if (locale === "pt") return pt_social_review_submit(inputs)
	if (locale === "ru") return ru_social_review_submit(inputs)
	if (locale === "sv") return sv_social_review_submit(inputs)
	if (locale === "tr") return tr_social_review_submit(inputs)
	if (locale === "zh") return zh_social_review_submit(inputs)
	if (locale === "ja") return ja_social_review_submit(inputs)
	return en_social_review_submit(inputs)
});
