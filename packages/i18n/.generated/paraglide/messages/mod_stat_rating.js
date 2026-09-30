/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Stat_RatingInputs */

const en_mod_stat_rating = /** @type {(inputs: Mod_Stat_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rating`)
};

const es_mod_stat_rating = /** @type {(inputs: Mod_Stat_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Valoración`)
};

const de_mod_stat_rating = /** @type {(inputs: Mod_Stat_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bewertung`)
};

const fr_mod_stat_rating = /** @type {(inputs: Mod_Stat_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Note`)
};

const it_mod_stat_rating = /** @type {(inputs: Mod_Stat_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Valutazione`)
};

const nl_mod_stat_rating = /** @type {(inputs: Mod_Stat_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beoordeling`)
};

const pl_mod_stat_rating = /** @type {(inputs: Mod_Stat_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ocena`)
};

const pt_mod_stat_rating = /** @type {(inputs: Mod_Stat_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nota`)
};

const ru_mod_stat_rating = /** @type {(inputs: Mod_Stat_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Оценка`)
};

const sv_mod_stat_rating = /** @type {(inputs: Mod_Stat_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Betyg`)
};

const tr_mod_stat_rating = /** @type {(inputs: Mod_Stat_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Puan`)
};

const zh_mod_stat_rating = /** @type {(inputs: Mod_Stat_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`评分`)
};

const ja_mod_stat_rating = /** @type {(inputs: Mod_Stat_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`評価`)
};

/**
* | output |
* | --- |
* | "Rating" |
*
* @param {Mod_Stat_RatingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_stat_rating = /** @type {((inputs?: Mod_Stat_RatingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Stat_RatingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_stat_rating(inputs)
	if (locale === "de") return de_mod_stat_rating(inputs)
	if (locale === "fr") return fr_mod_stat_rating(inputs)
	if (locale === "it") return it_mod_stat_rating(inputs)
	if (locale === "nl") return nl_mod_stat_rating(inputs)
	if (locale === "pl") return pl_mod_stat_rating(inputs)
	if (locale === "pt") return pt_mod_stat_rating(inputs)
	if (locale === "ru") return ru_mod_stat_rating(inputs)
	if (locale === "sv") return sv_mod_stat_rating(inputs)
	if (locale === "tr") return tr_mod_stat_rating(inputs)
	if (locale === "zh") return zh_mod_stat_rating(inputs)
	if (locale === "ja") return ja_mod_stat_rating(inputs)
	return en_mod_stat_rating(inputs)
});
