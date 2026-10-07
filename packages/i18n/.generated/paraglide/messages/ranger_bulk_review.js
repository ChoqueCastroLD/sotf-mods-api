/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Bulk_ReviewInputs */

const en_ranger_bulk_review = /** @type {(inputs: Ranger_Bulk_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mark reviewed`)
};

const es_ranger_bulk_review = /** @type {(inputs: Ranger_Bulk_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marcar como revisado`)
};

const de_ranger_bulk_review = /** @type {(inputs: Ranger_Bulk_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Als geprüft markieren`)
};

const fr_ranger_bulk_review = /** @type {(inputs: Ranger_Bulk_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marquer comme revu`)
};

const it_ranger_bulk_review = /** @type {(inputs: Ranger_Bulk_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segna come rivisto`)
};

const nl_ranger_bulk_review = /** @type {(inputs: Ranger_Bulk_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markeren als gecontroleerd`)
};

const pl_ranger_bulk_review = /** @type {(inputs: Ranger_Bulk_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oznacz jako sprawdzone`)
};

const pt_ranger_bulk_review = /** @type {(inputs: Ranger_Bulk_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marcar como revisado`)
};

const ru_ranger_bulk_review = /** @type {(inputs: Ranger_Bulk_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отметить как проверенное`)
};

const sv_ranger_bulk_review = /** @type {(inputs: Ranger_Bulk_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markera som granskad`)
};

const tr_ranger_bulk_review = /** @type {(inputs: Ranger_Bulk_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İncelendi olarak işaretle`)
};

const zh_ranger_bulk_review = /** @type {(inputs: Ranger_Bulk_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`标记为已审核`)
};

const ja_ranger_bulk_review = /** @type {(inputs: Ranger_Bulk_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レビュー済みにする`)
};

/**
* | output |
* | --- |
* | "Mark reviewed" |
*
* @param {Ranger_Bulk_ReviewInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_bulk_review = /** @type {((inputs?: Ranger_Bulk_ReviewInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Bulk_ReviewInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_bulk_review(inputs)
	if (locale === "de") return de_ranger_bulk_review(inputs)
	if (locale === "fr") return fr_ranger_bulk_review(inputs)
	if (locale === "it") return it_ranger_bulk_review(inputs)
	if (locale === "nl") return nl_ranger_bulk_review(inputs)
	if (locale === "pl") return pl_ranger_bulk_review(inputs)
	if (locale === "pt") return pt_ranger_bulk_review(inputs)
	if (locale === "ru") return ru_ranger_bulk_review(inputs)
	if (locale === "sv") return sv_ranger_bulk_review(inputs)
	if (locale === "tr") return tr_ranger_bulk_review(inputs)
	if (locale === "zh") return zh_ranger_bulk_review(inputs)
	if (locale === "ja") return ja_ranger_bulk_review(inputs)
	return en_ranger_bulk_review(inputs)
});
