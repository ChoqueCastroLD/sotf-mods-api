/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ mod: NonNullable<unknown> }} Profile_Review_OfInputs */

const en_profile_review_of = /** @type {(inputs: Profile_Review_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Review of ${i?.mod}`)
};

const es_profile_review_of = /** @type {(inputs: Profile_Review_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Reseña de ${i?.mod}`)
};

const de_profile_review_of = /** @type {(inputs: Profile_Review_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bewertung von ${i?.mod}`)
};

const fr_profile_review_of = /** @type {(inputs: Profile_Review_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Avis sur ${i?.mod}`)
};

const it_profile_review_of = /** @type {(inputs: Profile_Review_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Recensione di ${i?.mod}`)
};

const nl_profile_review_of = /** @type {(inputs: Profile_Review_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Review van ${i?.mod}`)
};

const pl_profile_review_of = /** @type {(inputs: Profile_Review_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Recenzja: ${i?.mod}`)
};

const pt_profile_review_of = /** @type {(inputs: Profile_Review_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Avaliação de ${i?.mod}`)
};

const ru_profile_review_of = /** @type {(inputs: Profile_Review_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Отзыв о ${i?.mod}`)
};

const sv_profile_review_of = /** @type {(inputs: Profile_Review_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Recension av ${i?.mod}`)
};

const tr_profile_review_of = /** @type {(inputs: Profile_Review_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} incelemesi`)
};

const zh_profile_review_of = /** @type {(inputs: Profile_Review_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`对 ${i?.mod} 的评价`)
};

const ja_profile_review_of = /** @type {(inputs: Profile_Review_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} のレビュー`)
};

/**
* | output |
* | --- |
* | "Review of {mod}" |
*
* @param {Profile_Review_OfInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_review_of = /** @type {((inputs: Profile_Review_OfInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Review_OfInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_review_of(inputs)
	if (locale === "de") return de_profile_review_of(inputs)
	if (locale === "fr") return fr_profile_review_of(inputs)
	if (locale === "it") return it_profile_review_of(inputs)
	if (locale === "nl") return nl_profile_review_of(inputs)
	if (locale === "pl") return pl_profile_review_of(inputs)
	if (locale === "pt") return pt_profile_review_of(inputs)
	if (locale === "ru") return ru_profile_review_of(inputs)
	if (locale === "sv") return sv_profile_review_of(inputs)
	if (locale === "tr") return tr_profile_review_of(inputs)
	if (locale === "zh") return zh_profile_review_of(inputs)
	if (locale === "ja") return ja_profile_review_of(inputs)
	return en_profile_review_of(inputs)
});
