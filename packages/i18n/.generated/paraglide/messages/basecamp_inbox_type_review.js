/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Inbox_Type_ReviewInputs */

const en_basecamp_inbox_type_review = /** @type {(inputs: Basecamp_Inbox_Type_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Review`)
};

const es_basecamp_inbox_type_review = /** @type {(inputs: Basecamp_Inbox_Type_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reseña`)
};

const de_basecamp_inbox_type_review = /** @type {(inputs: Basecamp_Inbox_Type_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bewertung`)
};

const fr_basecamp_inbox_type_review = /** @type {(inputs: Basecamp_Inbox_Type_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avis`)
};

const it_basecamp_inbox_type_review = /** @type {(inputs: Basecamp_Inbox_Type_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recensione`)
};

const nl_basecamp_inbox_type_review = /** @type {(inputs: Basecamp_Inbox_Type_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Review`)
};

const pl_basecamp_inbox_type_review = /** @type {(inputs: Basecamp_Inbox_Type_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recenzja`)
};

const pt_basecamp_inbox_type_review = /** @type {(inputs: Basecamp_Inbox_Type_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avaliação`)
};

const ru_basecamp_inbox_type_review = /** @type {(inputs: Basecamp_Inbox_Type_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отзыв`)
};

const sv_basecamp_inbox_type_review = /** @type {(inputs: Basecamp_Inbox_Type_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recension`)
};

const tr_basecamp_inbox_type_review = /** @type {(inputs: Basecamp_Inbox_Type_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İnceleme`)
};

const zh_basecamp_inbox_type_review = /** @type {(inputs: Basecamp_Inbox_Type_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`评价`)
};

const ja_basecamp_inbox_type_review = /** @type {(inputs: Basecamp_Inbox_Type_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レビュー`)
};

/**
* | output |
* | --- |
* | "Review" |
*
* @param {Basecamp_Inbox_Type_ReviewInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_inbox_type_review = /** @type {((inputs?: Basecamp_Inbox_Type_ReviewInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Inbox_Type_ReviewInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_inbox_type_review(inputs)
	if (locale === "de") return de_basecamp_inbox_type_review(inputs)
	if (locale === "fr") return fr_basecamp_inbox_type_review(inputs)
	if (locale === "it") return it_basecamp_inbox_type_review(inputs)
	if (locale === "nl") return nl_basecamp_inbox_type_review(inputs)
	if (locale === "pl") return pl_basecamp_inbox_type_review(inputs)
	if (locale === "pt") return pt_basecamp_inbox_type_review(inputs)
	if (locale === "ru") return ru_basecamp_inbox_type_review(inputs)
	if (locale === "sv") return sv_basecamp_inbox_type_review(inputs)
	if (locale === "tr") return tr_basecamp_inbox_type_review(inputs)
	if (locale === "zh") return zh_basecamp_inbox_type_review(inputs)
	if (locale === "ja") return ja_basecamp_inbox_type_review(inputs)
	return en_basecamp_inbox_type_review(inputs)
});
