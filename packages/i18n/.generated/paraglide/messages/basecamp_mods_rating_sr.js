/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ rating: NonNullable<unknown> }} Basecamp_Mods_Rating_SrInputs */

const en_basecamp_mods_rating_sr = /** @type {(inputs: Basecamp_Mods_Rating_SrInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rated ${i?.rating} out of 5`)
};

const es_basecamp_mods_rating_sr = /** @type {(inputs: Basecamp_Mods_Rating_SrInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Valorado con ${i?.rating} de 5`)
};

const de_basecamp_mods_rating_sr = /** @type {(inputs: Basecamp_Mods_Rating_SrInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bewertet mit ${i?.rating} von 5`)
};

const fr_basecamp_mods_rating_sr = /** @type {(inputs: Basecamp_Mods_Rating_SrInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Noté ${i?.rating} sur 5`)
};

const it_basecamp_mods_rating_sr = /** @type {(inputs: Basecamp_Mods_Rating_SrInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Valutata ${i?.rating} su 5`)
};

const nl_basecamp_mods_rating_sr = /** @type {(inputs: Basecamp_Mods_Rating_SrInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Beoordeeld met ${i?.rating} van de 5`)
};

const pl_basecamp_mods_rating_sr = /** @type {(inputs: Basecamp_Mods_Rating_SrInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ocena ${i?.rating} na 5`)
};

const pt_basecamp_mods_rating_sr = /** @type {(inputs: Basecamp_Mods_Rating_SrInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Avaliado com ${i?.rating} de 5`)
};

const ru_basecamp_mods_rating_sr = /** @type {(inputs: Basecamp_Mods_Rating_SrInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Оценка ${i?.rating} из 5`)
};

const sv_basecamp_mods_rating_sr = /** @type {(inputs: Basecamp_Mods_Rating_SrInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Betyg ${i?.rating} av 5`)
};

const tr_basecamp_mods_rating_sr = /** @type {(inputs: Basecamp_Mods_Rating_SrInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`5 üzerinden ${i?.rating} puan`)
};

const zh_basecamp_mods_rating_sr = /** @type {(inputs: Basecamp_Mods_Rating_SrInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`评分 ${i?.rating}（满分 5）`)
};

const ja_basecamp_mods_rating_sr = /** @type {(inputs: Basecamp_Mods_Rating_SrInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`5 段階中 ${i?.rating}`)
};

/**
* | output |
* | --- |
* | "Rated {rating} out of 5" |
*
* @param {Basecamp_Mods_Rating_SrInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_mods_rating_sr = /** @type {((inputs: Basecamp_Mods_Rating_SrInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Mods_Rating_SrInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_mods_rating_sr(inputs)
	if (locale === "de") return de_basecamp_mods_rating_sr(inputs)
	if (locale === "fr") return fr_basecamp_mods_rating_sr(inputs)
	if (locale === "it") return it_basecamp_mods_rating_sr(inputs)
	if (locale === "nl") return nl_basecamp_mods_rating_sr(inputs)
	if (locale === "pl") return pl_basecamp_mods_rating_sr(inputs)
	if (locale === "pt") return pt_basecamp_mods_rating_sr(inputs)
	if (locale === "ru") return ru_basecamp_mods_rating_sr(inputs)
	if (locale === "sv") return sv_basecamp_mods_rating_sr(inputs)
	if (locale === "tr") return tr_basecamp_mods_rating_sr(inputs)
	if (locale === "zh") return zh_basecamp_mods_rating_sr(inputs)
	if (locale === "ja") return ja_basecamp_mods_rating_sr(inputs)
	return en_basecamp_mods_rating_sr(inputs)
});
