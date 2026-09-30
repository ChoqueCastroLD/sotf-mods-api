/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Analytics_TotalsInputs */

const en_basecamp_analytics_totals = /** @type {(inputs: Basecamp_Analytics_TotalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Totals of the period`)
};

const es_basecamp_analytics_totals = /** @type {(inputs: Basecamp_Analytics_TotalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Totales del periodo`)
};

const de_basecamp_analytics_totals = /** @type {(inputs: Basecamp_Analytics_TotalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Summen des Zeitraums`)
};

const fr_basecamp_analytics_totals = /** @type {(inputs: Basecamp_Analytics_TotalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Totaux de la période`)
};

const it_basecamp_analytics_totals = /** @type {(inputs: Basecamp_Analytics_TotalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Totali del periodo`)
};

const nl_basecamp_analytics_totals = /** @type {(inputs: Basecamp_Analytics_TotalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Totalen van de periode`)
};

const pl_basecamp_analytics_totals = /** @type {(inputs: Basecamp_Analytics_TotalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sumy okresu`)
};

const pt_basecamp_analytics_totals = /** @type {(inputs: Basecamp_Analytics_TotalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Totais do período`)
};

const ru_basecamp_analytics_totals = /** @type {(inputs: Basecamp_Analytics_TotalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Итоги за период`)
};

const sv_basecamp_analytics_totals = /** @type {(inputs: Basecamp_Analytics_TotalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Periodens summor`)
};

const tr_basecamp_analytics_totals = /** @type {(inputs: Basecamp_Analytics_TotalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dönem toplamları`)
};

const zh_basecamp_analytics_totals = /** @type {(inputs: Basecamp_Analytics_TotalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`本期合计`)
};

const ja_basecamp_analytics_totals = /** @type {(inputs: Basecamp_Analytics_TotalsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`期間の合計`)
};

/**
* | output |
* | --- |
* | "Totals of the period" |
*
* @param {Basecamp_Analytics_TotalsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_analytics_totals = /** @type {((inputs?: Basecamp_Analytics_TotalsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Analytics_TotalsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_analytics_totals(inputs)
	if (locale === "de") return de_basecamp_analytics_totals(inputs)
	if (locale === "fr") return fr_basecamp_analytics_totals(inputs)
	if (locale === "it") return it_basecamp_analytics_totals(inputs)
	if (locale === "nl") return nl_basecamp_analytics_totals(inputs)
	if (locale === "pl") return pl_basecamp_analytics_totals(inputs)
	if (locale === "pt") return pt_basecamp_analytics_totals(inputs)
	if (locale === "ru") return ru_basecamp_analytics_totals(inputs)
	if (locale === "sv") return sv_basecamp_analytics_totals(inputs)
	if (locale === "tr") return tr_basecamp_analytics_totals(inputs)
	if (locale === "zh") return zh_basecamp_analytics_totals(inputs)
	if (locale === "ja") return ja_basecamp_analytics_totals(inputs)
	return en_basecamp_analytics_totals(inputs)
});
