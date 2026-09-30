/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_Badge_Name_First_ReviewInputs */

const en_signals_badge_name_first_review = /** @type {(inputs: Signals_Badge_Name_First_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`First Review`)
};

const es_signals_badge_name_first_review = /** @type {(inputs: Signals_Badge_Name_First_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Primera reseña`)
};

const de_signals_badge_name_first_review = /** @type {(inputs: Signals_Badge_Name_First_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erste Bewertung`)
};

const fr_signals_badge_name_first_review = /** @type {(inputs: Signals_Badge_Name_First_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Premier avis`)
};

const it_signals_badge_name_first_review = /** @type {(inputs: Signals_Badge_Name_First_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prima recensione`)
};

const nl_signals_badge_name_first_review = /** @type {(inputs: Signals_Badge_Name_First_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eerste review`)
};

const pl_signals_badge_name_first_review = /** @type {(inputs: Signals_Badge_Name_First_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pierwsza recenzja`)
};

const pt_signals_badge_name_first_review = /** @type {(inputs: Signals_Badge_Name_First_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Primeira avaliação`)
};

const ru_signals_badge_name_first_review = /** @type {(inputs: Signals_Badge_Name_First_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Первый отзыв`)
};

const sv_signals_badge_name_first_review = /** @type {(inputs: Signals_Badge_Name_First_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Första recensionen`)
};

const tr_signals_badge_name_first_review = /** @type {(inputs: Signals_Badge_Name_First_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İlk İnceleme`)
};

const zh_signals_badge_name_first_review = /** @type {(inputs: Signals_Badge_Name_First_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`首条评价`)
};

const ja_signals_badge_name_first_review = /** @type {(inputs: Signals_Badge_Name_First_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最初のレビュー`)
};

/**
* | output |
* | --- |
* | "First Review" |
*
* @param {Signals_Badge_Name_First_ReviewInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_badge_name_first_review = /** @type {((inputs?: Signals_Badge_Name_First_ReviewInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Badge_Name_First_ReviewInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_badge_name_first_review(inputs)
	if (locale === "de") return de_signals_badge_name_first_review(inputs)
	if (locale === "fr") return fr_signals_badge_name_first_review(inputs)
	if (locale === "it") return it_signals_badge_name_first_review(inputs)
	if (locale === "nl") return nl_signals_badge_name_first_review(inputs)
	if (locale === "pl") return pl_signals_badge_name_first_review(inputs)
	if (locale === "pt") return pt_signals_badge_name_first_review(inputs)
	if (locale === "ru") return ru_signals_badge_name_first_review(inputs)
	if (locale === "sv") return sv_signals_badge_name_first_review(inputs)
	if (locale === "tr") return tr_signals_badge_name_first_review(inputs)
	if (locale === "zh") return zh_signals_badge_name_first_review(inputs)
	if (locale === "ja") return ja_signals_badge_name_first_review(inputs)
	return en_signals_badge_name_first_review(inputs)
});
