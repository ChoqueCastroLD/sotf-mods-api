/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Reviews_HistogramInputs */

const en_ui_domain_reviews_histogram = /** @type {(inputs: Ui_Domain_Reviews_HistogramInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rating distribution`)
};

const es_ui_domain_reviews_histogram = /** @type {(inputs: Ui_Domain_Reviews_HistogramInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Distribución de valoraciones`)
};

const de_ui_domain_reviews_histogram = /** @type {(inputs: Ui_Domain_Reviews_HistogramInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verteilung der Bewertungen`)
};

const fr_ui_domain_reviews_histogram = /** @type {(inputs: Ui_Domain_Reviews_HistogramInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Répartition des notes`)
};

const it_ui_domain_reviews_histogram = /** @type {(inputs: Ui_Domain_Reviews_HistogramInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Distribuzione dei voti`)
};

const nl_ui_domain_reviews_histogram = /** @type {(inputs: Ui_Domain_Reviews_HistogramInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verdeling van de beoordelingen`)
};

const pl_ui_domain_reviews_histogram = /** @type {(inputs: Ui_Domain_Reviews_HistogramInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rozkład ocen`)
};

const pt_ui_domain_reviews_histogram = /** @type {(inputs: Ui_Domain_Reviews_HistogramInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Distribuição das notas`)
};

const ru_ui_domain_reviews_histogram = /** @type {(inputs: Ui_Domain_Reviews_HistogramInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Распределение оценок`)
};

const sv_ui_domain_reviews_histogram = /** @type {(inputs: Ui_Domain_Reviews_HistogramInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fördelning av betyg`)
};

const tr_ui_domain_reviews_histogram = /** @type {(inputs: Ui_Domain_Reviews_HistogramInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Puan dağılımı`)
};

const zh_ui_domain_reviews_histogram = /** @type {(inputs: Ui_Domain_Reviews_HistogramInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`评分分布`)
};

const ja_ui_domain_reviews_histogram = /** @type {(inputs: Ui_Domain_Reviews_HistogramInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`評価の分布`)
};

/**
* | output |
* | --- |
* | "Rating distribution" |
*
* @param {Ui_Domain_Reviews_HistogramInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_reviews_histogram = /** @type {((inputs?: Ui_Domain_Reviews_HistogramInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Reviews_HistogramInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_reviews_histogram(inputs)
	if (locale === "de") return de_ui_domain_reviews_histogram(inputs)
	if (locale === "fr") return fr_ui_domain_reviews_histogram(inputs)
	if (locale === "it") return it_ui_domain_reviews_histogram(inputs)
	if (locale === "nl") return nl_ui_domain_reviews_histogram(inputs)
	if (locale === "pl") return pl_ui_domain_reviews_histogram(inputs)
	if (locale === "pt") return pt_ui_domain_reviews_histogram(inputs)
	if (locale === "ru") return ru_ui_domain_reviews_histogram(inputs)
	if (locale === "sv") return sv_ui_domain_reviews_histogram(inputs)
	if (locale === "tr") return tr_ui_domain_reviews_histogram(inputs)
	if (locale === "zh") return zh_ui_domain_reviews_histogram(inputs)
	if (locale === "ja") return ja_ui_domain_reviews_histogram(inputs)
	return en_ui_domain_reviews_histogram(inputs)
});
