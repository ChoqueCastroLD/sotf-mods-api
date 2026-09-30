/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Target_ReviewInputs */

const en_ranger_target_review = /** @type {(inputs: Ranger_Target_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Review`)
};

const es_ranger_target_review = /** @type {(inputs: Ranger_Target_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reseña`)
};

const de_ranger_target_review = /** @type {(inputs: Ranger_Target_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rezension`)
};

const fr_ranger_target_review = /** @type {(inputs: Ranger_Target_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avis`)
};

const it_ranger_target_review = /** @type {(inputs: Ranger_Target_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recensione`)
};

const nl_ranger_target_review = /** @type {(inputs: Ranger_Target_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recensie`)
};

const pl_ranger_target_review = /** @type {(inputs: Ranger_Target_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recenzja`)
};

const pt_ranger_target_review = /** @type {(inputs: Ranger_Target_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avaliação`)
};

const ru_ranger_target_review = /** @type {(inputs: Ranger_Target_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отзыв`)
};

const sv_ranger_target_review = /** @type {(inputs: Ranger_Target_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recension`)
};

const tr_ranger_target_review = /** @type {(inputs: Ranger_Target_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İnceleme`)
};

const zh_ranger_target_review = /** @type {(inputs: Ranger_Target_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`评价`)
};

const ja_ranger_target_review = /** @type {(inputs: Ranger_Target_ReviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レビュー`)
};

/**
* | output |
* | --- |
* | "Review" |
*
* @param {Ranger_Target_ReviewInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_target_review = /** @type {((inputs?: Ranger_Target_ReviewInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Target_ReviewInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_target_review(inputs)
	if (locale === "de") return de_ranger_target_review(inputs)
	if (locale === "fr") return fr_ranger_target_review(inputs)
	if (locale === "it") return it_ranger_target_review(inputs)
	if (locale === "nl") return nl_ranger_target_review(inputs)
	if (locale === "pl") return pl_ranger_target_review(inputs)
	if (locale === "pt") return pt_ranger_target_review(inputs)
	if (locale === "ru") return ru_ranger_target_review(inputs)
	if (locale === "sv") return sv_ranger_target_review(inputs)
	if (locale === "tr") return tr_ranger_target_review(inputs)
	if (locale === "zh") return zh_ranger_target_review(inputs)
	if (locale === "ja") return ja_ranger_target_review(inputs)
	return en_ranger_target_review(inputs)
});
