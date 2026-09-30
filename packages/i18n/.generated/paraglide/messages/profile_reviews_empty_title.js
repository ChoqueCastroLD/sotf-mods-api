/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Reviews_Empty_TitleInputs */

const en_profile_reviews_empty_title = /** @type {(inputs: Profile_Reviews_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No reviews yet`)
};

const es_profile_reviews_empty_title = /** @type {(inputs: Profile_Reviews_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún no hay reseñas`)
};

const de_profile_reviews_empty_title = /** @type {(inputs: Profile_Reviews_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch keine Bewertungen`)
};

const fr_profile_reviews_empty_title = /** @type {(inputs: Profile_Reviews_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun avis pour l’instant`)
};

const it_profile_reviews_empty_title = /** @type {(inputs: Profile_Reviews_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ancora nessuna recensione`)
};

const nl_profile_reviews_empty_title = /** @type {(inputs: Profile_Reviews_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog geen reviews`)
};

const pl_profile_reviews_empty_title = /** @type {(inputs: Profile_Reviews_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak recenzji`)
};

const pt_profile_reviews_empty_title = /** @type {(inputs: Profile_Reviews_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhuma avaliação ainda`)
};

const ru_profile_reviews_empty_title = /** @type {(inputs: Profile_Reviews_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отзывов пока нет`)
};

const sv_profile_reviews_empty_title = /** @type {(inputs: Profile_Reviews_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga recensioner än`)
};

const tr_profile_reviews_empty_title = /** @type {(inputs: Profile_Reviews_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz inceleme yok`)
};

const zh_profile_reviews_empty_title = /** @type {(inputs: Profile_Reviews_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂无评价`)
};

const ja_profile_reviews_empty_title = /** @type {(inputs: Profile_Reviews_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`まだレビューはありません`)
};

/**
* | output |
* | --- |
* | "No reviews yet" |
*
* @param {Profile_Reviews_Empty_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_reviews_empty_title = /** @type {((inputs?: Profile_Reviews_Empty_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Reviews_Empty_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_reviews_empty_title(inputs)
	if (locale === "de") return de_profile_reviews_empty_title(inputs)
	if (locale === "fr") return fr_profile_reviews_empty_title(inputs)
	if (locale === "it") return it_profile_reviews_empty_title(inputs)
	if (locale === "nl") return nl_profile_reviews_empty_title(inputs)
	if (locale === "pl") return pl_profile_reviews_empty_title(inputs)
	if (locale === "pt") return pt_profile_reviews_empty_title(inputs)
	if (locale === "ru") return ru_profile_reviews_empty_title(inputs)
	if (locale === "sv") return sv_profile_reviews_empty_title(inputs)
	if (locale === "tr") return tr_profile_reviews_empty_title(inputs)
	if (locale === "zh") return zh_profile_reviews_empty_title(inputs)
	if (locale === "ja") return ja_profile_reviews_empty_title(inputs)
	return en_profile_reviews_empty_title(inputs)
});
