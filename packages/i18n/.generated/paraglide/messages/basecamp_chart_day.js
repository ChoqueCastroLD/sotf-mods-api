/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Chart_DayInputs */

const en_basecamp_chart_day = /** @type {(inputs: Basecamp_Chart_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Day`)
};

const es_basecamp_chart_day = /** @type {(inputs: Basecamp_Chart_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Día`)
};

const de_basecamp_chart_day = /** @type {(inputs: Basecamp_Chart_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tag`)
};

const fr_basecamp_chart_day = /** @type {(inputs: Basecamp_Chart_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jour`)
};

const it_basecamp_chart_day = /** @type {(inputs: Basecamp_Chart_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Giorno`)
};

const nl_basecamp_chart_day = /** @type {(inputs: Basecamp_Chart_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dag`)
};

const pl_basecamp_chart_day = /** @type {(inputs: Basecamp_Chart_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dzień`)
};

const pt_basecamp_chart_day = /** @type {(inputs: Basecamp_Chart_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dia`)
};

const ru_basecamp_chart_day = /** @type {(inputs: Basecamp_Chart_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`День`)
};

const sv_basecamp_chart_day = /** @type {(inputs: Basecamp_Chart_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dag`)
};

const tr_basecamp_chart_day = /** @type {(inputs: Basecamp_Chart_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gün`)
};

const zh_basecamp_chart_day = /** @type {(inputs: Basecamp_Chart_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`日期`)
};

const ja_basecamp_chart_day = /** @type {(inputs: Basecamp_Chart_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`日付`)
};

/**
* | output |
* | --- |
* | "Day" |
*
* @param {Basecamp_Chart_DayInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_chart_day = /** @type {((inputs?: Basecamp_Chart_DayInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Chart_DayInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_chart_day(inputs)
	if (locale === "de") return de_basecamp_chart_day(inputs)
	if (locale === "fr") return fr_basecamp_chart_day(inputs)
	if (locale === "it") return it_basecamp_chart_day(inputs)
	if (locale === "nl") return nl_basecamp_chart_day(inputs)
	if (locale === "pl") return pl_basecamp_chart_day(inputs)
	if (locale === "pt") return pt_basecamp_chart_day(inputs)
	if (locale === "ru") return ru_basecamp_chart_day(inputs)
	if (locale === "sv") return sv_basecamp_chart_day(inputs)
	if (locale === "tr") return tr_basecamp_chart_day(inputs)
	if (locale === "zh") return zh_basecamp_chart_day(inputs)
	if (locale === "ja") return ja_basecamp_chart_day(inputs)
	return en_basecamp_chart_day(inputs)
});
