/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Analytics_CsvInputs */

const en_basecamp_analytics_csv = /** @type {(inputs: Basecamp_Analytics_CsvInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Export CSV`)
};

const es_basecamp_analytics_csv = /** @type {(inputs: Basecamp_Analytics_CsvInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Exportar CSV`)
};

const de_basecamp_analytics_csv = /** @type {(inputs: Basecamp_Analytics_CsvInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`CSV exportieren`)
};

const fr_basecamp_analytics_csv = /** @type {(inputs: Basecamp_Analytics_CsvInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Exporter en CSV`)
};

const it_basecamp_analytics_csv = /** @type {(inputs: Basecamp_Analytics_CsvInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esporta CSV`)
};

const nl_basecamp_analytics_csv = /** @type {(inputs: Basecamp_Analytics_CsvInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`CSV exporteren`)
};

const pl_basecamp_analytics_csv = /** @type {(inputs: Basecamp_Analytics_CsvInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eksportuj CSV`)
};

const pt_basecamp_analytics_csv = /** @type {(inputs: Basecamp_Analytics_CsvInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Exportar CSV`)
};

const ru_basecamp_analytics_csv = /** @type {(inputs: Basecamp_Analytics_CsvInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Экспорт в CSV`)
};

const sv_basecamp_analytics_csv = /** @type {(inputs: Basecamp_Analytics_CsvInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Exportera CSV`)
};

const tr_basecamp_analytics_csv = /** @type {(inputs: Basecamp_Analytics_CsvInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`CSV olarak dışa aktar`)
};

const zh_basecamp_analytics_csv = /** @type {(inputs: Basecamp_Analytics_CsvInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`导出 CSV`)
};

const ja_basecamp_analytics_csv = /** @type {(inputs: Basecamp_Analytics_CsvInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`CSV で書き出す`)
};

/**
* | output |
* | --- |
* | "Export CSV" |
*
* @param {Basecamp_Analytics_CsvInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_analytics_csv = /** @type {((inputs?: Basecamp_Analytics_CsvInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Analytics_CsvInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_analytics_csv(inputs)
	if (locale === "de") return de_basecamp_analytics_csv(inputs)
	if (locale === "fr") return fr_basecamp_analytics_csv(inputs)
	if (locale === "it") return it_basecamp_analytics_csv(inputs)
	if (locale === "nl") return nl_basecamp_analytics_csv(inputs)
	if (locale === "pl") return pl_basecamp_analytics_csv(inputs)
	if (locale === "pt") return pt_basecamp_analytics_csv(inputs)
	if (locale === "ru") return ru_basecamp_analytics_csv(inputs)
	if (locale === "sv") return sv_basecamp_analytics_csv(inputs)
	if (locale === "tr") return tr_basecamp_analytics_csv(inputs)
	if (locale === "zh") return zh_basecamp_analytics_csv(inputs)
	if (locale === "ja") return ja_basecamp_analytics_csv(inputs)
	return en_basecamp_analytics_csv(inputs)
});
