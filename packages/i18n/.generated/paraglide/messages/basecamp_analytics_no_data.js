/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Analytics_No_DataInputs */

const en_basecamp_analytics_no_data = /** @type {(inputs: Basecamp_Analytics_No_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No data in this period.`)
};

const es_basecamp_analytics_no_data = /** @type {(inputs: Basecamp_Analytics_No_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No hay datos en este periodo.`)
};

const de_basecamp_analytics_no_data = /** @type {(inputs: Basecamp_Analytics_No_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine Daten in diesem Zeitraum.`)
};

const fr_basecamp_analytics_no_data = /** @type {(inputs: Basecamp_Analytics_No_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune donnée sur cette période.`)
};

const it_basecamp_analytics_no_data = /** @type {(inputs: Basecamp_Analytics_No_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessun dato in questo periodo.`)
};

const nl_basecamp_analytics_no_data = /** @type {(inputs: Basecamp_Analytics_No_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen gegevens in deze periode.`)
};

const pl_basecamp_analytics_no_data = /** @type {(inputs: Basecamp_Analytics_No_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak danych w tym okresie.`)
};

const pt_basecamp_analytics_no_data = /** @type {(inputs: Basecamp_Analytics_No_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sem dados neste período.`)
};

const ru_basecamp_analytics_no_data = /** @type {(inputs: Basecamp_Analytics_No_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`За этот период данных нет.`)
};

const sv_basecamp_analytics_no_data = /** @type {(inputs: Basecamp_Analytics_No_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga data under perioden.`)
};

const tr_basecamp_analytics_no_data = /** @type {(inputs: Basecamp_Analytics_No_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu dönemde veri yok.`)
};

const zh_basecamp_analytics_no_data = /** @type {(inputs: Basecamp_Analytics_No_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此期间没有数据。`)
};

const ja_basecamp_analytics_no_data = /** @type {(inputs: Basecamp_Analytics_No_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この期間のデータはありません。`)
};

/**
* | output |
* | --- |
* | "No data in this period." |
*
* @param {Basecamp_Analytics_No_DataInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_analytics_no_data = /** @type {((inputs?: Basecamp_Analytics_No_DataInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Analytics_No_DataInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_analytics_no_data(inputs)
	if (locale === "de") return de_basecamp_analytics_no_data(inputs)
	if (locale === "fr") return fr_basecamp_analytics_no_data(inputs)
	if (locale === "it") return it_basecamp_analytics_no_data(inputs)
	if (locale === "nl") return nl_basecamp_analytics_no_data(inputs)
	if (locale === "pl") return pl_basecamp_analytics_no_data(inputs)
	if (locale === "pt") return pt_basecamp_analytics_no_data(inputs)
	if (locale === "ru") return ru_basecamp_analytics_no_data(inputs)
	if (locale === "sv") return sv_basecamp_analytics_no_data(inputs)
	if (locale === "tr") return tr_basecamp_analytics_no_data(inputs)
	if (locale === "zh") return zh_basecamp_analytics_no_data(inputs)
	if (locale === "ja") return ja_basecamp_analytics_no_data(inputs)
	return en_basecamp_analytics_no_data(inputs)
});
