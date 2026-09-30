/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Mods_Col_RatingInputs */

const en_basecamp_mods_col_rating = /** @type {(inputs: Basecamp_Mods_Col_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rating`)
};

const es_basecamp_mods_col_rating = /** @type {(inputs: Basecamp_Mods_Col_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Valoración`)
};

const de_basecamp_mods_col_rating = /** @type {(inputs: Basecamp_Mods_Col_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bewertung`)
};

const fr_basecamp_mods_col_rating = /** @type {(inputs: Basecamp_Mods_Col_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Note`)
};

const it_basecamp_mods_col_rating = /** @type {(inputs: Basecamp_Mods_Col_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Valutazione`)
};

const nl_basecamp_mods_col_rating = /** @type {(inputs: Basecamp_Mods_Col_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beoordeling`)
};

const pl_basecamp_mods_col_rating = /** @type {(inputs: Basecamp_Mods_Col_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ocena`)
};

const pt_basecamp_mods_col_rating = /** @type {(inputs: Basecamp_Mods_Col_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avaliação`)
};

const ru_basecamp_mods_col_rating = /** @type {(inputs: Basecamp_Mods_Col_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Оценка`)
};

const sv_basecamp_mods_col_rating = /** @type {(inputs: Basecamp_Mods_Col_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Betyg`)
};

const tr_basecamp_mods_col_rating = /** @type {(inputs: Basecamp_Mods_Col_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Puan`)
};

const zh_basecamp_mods_col_rating = /** @type {(inputs: Basecamp_Mods_Col_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`评分`)
};

const ja_basecamp_mods_col_rating = /** @type {(inputs: Basecamp_Mods_Col_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`評価`)
};

/**
* | output |
* | --- |
* | "Rating" |
*
* @param {Basecamp_Mods_Col_RatingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_mods_col_rating = /** @type {((inputs?: Basecamp_Mods_Col_RatingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Mods_Col_RatingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_mods_col_rating(inputs)
	if (locale === "de") return de_basecamp_mods_col_rating(inputs)
	if (locale === "fr") return fr_basecamp_mods_col_rating(inputs)
	if (locale === "it") return it_basecamp_mods_col_rating(inputs)
	if (locale === "nl") return nl_basecamp_mods_col_rating(inputs)
	if (locale === "pl") return pl_basecamp_mods_col_rating(inputs)
	if (locale === "pt") return pt_basecamp_mods_col_rating(inputs)
	if (locale === "ru") return ru_basecamp_mods_col_rating(inputs)
	if (locale === "sv") return sv_basecamp_mods_col_rating(inputs)
	if (locale === "tr") return tr_basecamp_mods_col_rating(inputs)
	if (locale === "zh") return zh_basecamp_mods_col_rating(inputs)
	if (locale === "ja") return ja_basecamp_mods_col_rating(inputs)
	return en_basecamp_mods_col_rating(inputs)
});
