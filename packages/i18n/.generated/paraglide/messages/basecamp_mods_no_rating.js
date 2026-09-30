/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Mods_No_RatingInputs */

const en_basecamp_mods_no_rating = /** @type {(inputs: Basecamp_Mods_No_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No reviews`)
};

const es_basecamp_mods_no_rating = /** @type {(inputs: Basecamp_Mods_No_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin reseñas`)
};

const de_basecamp_mods_no_rating = /** @type {(inputs: Basecamp_Mods_No_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine Bewertungen`)
};

const fr_basecamp_mods_no_rating = /** @type {(inputs: Basecamp_Mods_No_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun avis`)
};

const it_basecamp_mods_no_rating = /** @type {(inputs: Basecamp_Mods_No_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessuna recensione`)
};

const nl_basecamp_mods_no_rating = /** @type {(inputs: Basecamp_Mods_No_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen reviews`)
};

const pl_basecamp_mods_no_rating = /** @type {(inputs: Basecamp_Mods_No_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak recenzji`)
};

const pt_basecamp_mods_no_rating = /** @type {(inputs: Basecamp_Mods_No_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sem avaliações`)
};

const ru_basecamp_mods_no_rating = /** @type {(inputs: Basecamp_Mods_No_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нет отзывов`)
};

const sv_basecamp_mods_no_rating = /** @type {(inputs: Basecamp_Mods_No_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga recensioner`)
};

const tr_basecamp_mods_no_rating = /** @type {(inputs: Basecamp_Mods_No_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İnceleme yok`)
};

const zh_basecamp_mods_no_rating = /** @type {(inputs: Basecamp_Mods_No_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂无评价`)
};

const ja_basecamp_mods_no_rating = /** @type {(inputs: Basecamp_Mods_No_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レビューなし`)
};

/**
* | output |
* | --- |
* | "No reviews" |
*
* @param {Basecamp_Mods_No_RatingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_mods_no_rating = /** @type {((inputs?: Basecamp_Mods_No_RatingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Mods_No_RatingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_mods_no_rating(inputs)
	if (locale === "de") return de_basecamp_mods_no_rating(inputs)
	if (locale === "fr") return fr_basecamp_mods_no_rating(inputs)
	if (locale === "it") return it_basecamp_mods_no_rating(inputs)
	if (locale === "nl") return nl_basecamp_mods_no_rating(inputs)
	if (locale === "pl") return pl_basecamp_mods_no_rating(inputs)
	if (locale === "pt") return pt_basecamp_mods_no_rating(inputs)
	if (locale === "ru") return ru_basecamp_mods_no_rating(inputs)
	if (locale === "sv") return sv_basecamp_mods_no_rating(inputs)
	if (locale === "tr") return tr_basecamp_mods_no_rating(inputs)
	if (locale === "zh") return zh_basecamp_mods_no_rating(inputs)
	if (locale === "ja") return ja_basecamp_mods_no_rating(inputs)
	return en_basecamp_mods_no_rating(inputs)
});
