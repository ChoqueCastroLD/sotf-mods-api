/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Badge_First_Review_NameInputs */

const en_profile_badge_first_review_name = /** @type {(inputs: Profile_Badge_First_Review_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`First Review`)
};

const es_profile_badge_first_review_name = /** @type {(inputs: Profile_Badge_First_Review_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Primera reseña`)
};

const de_profile_badge_first_review_name = /** @type {(inputs: Profile_Badge_First_Review_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erste Bewertung`)
};

const fr_profile_badge_first_review_name = /** @type {(inputs: Profile_Badge_First_Review_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Premier avis`)
};

const it_profile_badge_first_review_name = /** @type {(inputs: Profile_Badge_First_Review_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prima recensione`)
};

const nl_profile_badge_first_review_name = /** @type {(inputs: Profile_Badge_First_Review_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eerste review`)
};

const pl_profile_badge_first_review_name = /** @type {(inputs: Profile_Badge_First_Review_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pierwsza recenzja`)
};

const pt_profile_badge_first_review_name = /** @type {(inputs: Profile_Badge_First_Review_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Primeira avaliação`)
};

const ru_profile_badge_first_review_name = /** @type {(inputs: Profile_Badge_First_Review_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Первый отзыв`)
};

const sv_profile_badge_first_review_name = /** @type {(inputs: Profile_Badge_First_Review_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Första recensionen`)
};

const tr_profile_badge_first_review_name = /** @type {(inputs: Profile_Badge_First_Review_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İlk İnceleme`)
};

const zh_profile_badge_first_review_name = /** @type {(inputs: Profile_Badge_First_Review_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`首条评价`)
};

const ja_profile_badge_first_review_name = /** @type {(inputs: Profile_Badge_First_Review_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最初のレビュー`)
};

/**
* | output |
* | --- |
* | "First Review" |
*
* @param {Profile_Badge_First_Review_NameInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_badge_first_review_name = /** @type {((inputs?: Profile_Badge_First_Review_NameInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_First_Review_NameInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_badge_first_review_name(inputs)
	if (locale === "de") return de_profile_badge_first_review_name(inputs)
	if (locale === "fr") return fr_profile_badge_first_review_name(inputs)
	if (locale === "it") return it_profile_badge_first_review_name(inputs)
	if (locale === "nl") return nl_profile_badge_first_review_name(inputs)
	if (locale === "pl") return pl_profile_badge_first_review_name(inputs)
	if (locale === "pt") return pt_profile_badge_first_review_name(inputs)
	if (locale === "ru") return ru_profile_badge_first_review_name(inputs)
	if (locale === "sv") return sv_profile_badge_first_review_name(inputs)
	if (locale === "tr") return tr_profile_badge_first_review_name(inputs)
	if (locale === "zh") return zh_profile_badge_first_review_name(inputs)
	if (locale === "ja") return ja_profile_badge_first_review_name(inputs)
	return en_profile_badge_first_review_name(inputs)
});
