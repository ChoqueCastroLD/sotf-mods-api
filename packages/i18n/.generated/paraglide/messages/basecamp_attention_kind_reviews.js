/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Attention_Kind_ReviewsInputs */

const en_basecamp_attention_kind_reviews = /** @type {(inputs: Basecamp_Attention_Kind_ReviewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reviews`)
};

const es_basecamp_attention_kind_reviews = /** @type {(inputs: Basecamp_Attention_Kind_ReviewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reseñas`)
};

const de_basecamp_attention_kind_reviews = /** @type {(inputs: Basecamp_Attention_Kind_ReviewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bewertungen`)
};

const fr_basecamp_attention_kind_reviews = /** @type {(inputs: Basecamp_Attention_Kind_ReviewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avis`)
};

const it_basecamp_attention_kind_reviews = /** @type {(inputs: Basecamp_Attention_Kind_ReviewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recensioni`)
};

const nl_basecamp_attention_kind_reviews = /** @type {(inputs: Basecamp_Attention_Kind_ReviewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reviews`)
};

const pl_basecamp_attention_kind_reviews = /** @type {(inputs: Basecamp_Attention_Kind_ReviewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recenzje`)
};

const pt_basecamp_attention_kind_reviews = /** @type {(inputs: Basecamp_Attention_Kind_ReviewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avaliações`)
};

const ru_basecamp_attention_kind_reviews = /** @type {(inputs: Basecamp_Attention_Kind_ReviewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отзывы`)
};

const sv_basecamp_attention_kind_reviews = /** @type {(inputs: Basecamp_Attention_Kind_ReviewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recensioner`)
};

const tr_basecamp_attention_kind_reviews = /** @type {(inputs: Basecamp_Attention_Kind_ReviewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Değerlendirmeler`)
};

const zh_basecamp_attention_kind_reviews = /** @type {(inputs: Basecamp_Attention_Kind_ReviewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`评价`)
};

const ja_basecamp_attention_kind_reviews = /** @type {(inputs: Basecamp_Attention_Kind_ReviewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レビュー`)
};

/**
* | output |
* | --- |
* | "Reviews" |
*
* @param {Basecamp_Attention_Kind_ReviewsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_attention_kind_reviews = /** @type {((inputs?: Basecamp_Attention_Kind_ReviewsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Attention_Kind_ReviewsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_attention_kind_reviews(inputs)
	if (locale === "de") return de_basecamp_attention_kind_reviews(inputs)
	if (locale === "fr") return fr_basecamp_attention_kind_reviews(inputs)
	if (locale === "it") return it_basecamp_attention_kind_reviews(inputs)
	if (locale === "nl") return nl_basecamp_attention_kind_reviews(inputs)
	if (locale === "pl") return pl_basecamp_attention_kind_reviews(inputs)
	if (locale === "pt") return pt_basecamp_attention_kind_reviews(inputs)
	if (locale === "ru") return ru_basecamp_attention_kind_reviews(inputs)
	if (locale === "sv") return sv_basecamp_attention_kind_reviews(inputs)
	if (locale === "tr") return tr_basecamp_attention_kind_reviews(inputs)
	if (locale === "zh") return zh_basecamp_attention_kind_reviews(inputs)
	if (locale === "ja") return ja_basecamp_attention_kind_reviews(inputs)
	return en_basecamp_attention_kind_reviews(inputs)
});
