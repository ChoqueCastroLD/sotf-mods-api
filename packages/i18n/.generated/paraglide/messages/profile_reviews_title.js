/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Profile_Reviews_TitleInputs */

const en_profile_reviews_title = /** @type {(inputs: Profile_Reviews_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Reviews by ${i?.name}`)
};

const es_profile_reviews_title = /** @type {(inputs: Profile_Reviews_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Reseñas de ${i?.name}`)
};

const de_profile_reviews_title = /** @type {(inputs: Profile_Reviews_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bewertungen von ${i?.name}`)
};

const fr_profile_reviews_title = /** @type {(inputs: Profile_Reviews_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Avis de ${i?.name}`)
};

const it_profile_reviews_title = /** @type {(inputs: Profile_Reviews_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Recensioni di ${i?.name}`)
};

const nl_profile_reviews_title = /** @type {(inputs: Profile_Reviews_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Reviews van ${i?.name}`)
};

const pl_profile_reviews_title = /** @type {(inputs: Profile_Reviews_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Recenzje: ${i?.name}`)
};

const pt_profile_reviews_title = /** @type {(inputs: Profile_Reviews_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Avaliações de ${i?.name}`)
};

const ru_profile_reviews_title = /** @type {(inputs: Profile_Reviews_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Отзывы автора ${i?.name}`)
};

const sv_profile_reviews_title = /** @type {(inputs: Profile_Reviews_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Recensioner av ${i?.name}`)
};

const tr_profile_reviews_title = /** @type {(inputs: Profile_Reviews_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} kullanıcısının incelemeleri`)
};

const zh_profile_reviews_title = /** @type {(inputs: Profile_Reviews_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 的评价`)
};

const ja_profile_reviews_title = /** @type {(inputs: Profile_Reviews_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} のレビュー`)
};

/**
* | output |
* | --- |
* | "Reviews by {name}" |
*
* @param {Profile_Reviews_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_reviews_title = /** @type {((inputs: Profile_Reviews_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Reviews_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_reviews_title(inputs)
	if (locale === "de") return de_profile_reviews_title(inputs)
	if (locale === "fr") return fr_profile_reviews_title(inputs)
	if (locale === "it") return it_profile_reviews_title(inputs)
	if (locale === "nl") return nl_profile_reviews_title(inputs)
	if (locale === "pl") return pl_profile_reviews_title(inputs)
	if (locale === "pt") return pt_profile_reviews_title(inputs)
	if (locale === "ru") return ru_profile_reviews_title(inputs)
	if (locale === "sv") return sv_profile_reviews_title(inputs)
	if (locale === "tr") return tr_profile_reviews_title(inputs)
	if (locale === "zh") return zh_profile_reviews_title(inputs)
	if (locale === "ja") return ja_profile_reviews_title(inputs)
	return en_profile_reviews_title(inputs)
});
