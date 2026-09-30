/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Chart_WeekInputs */

const en_basecamp_chart_week = /** @type {(inputs: Basecamp_Chart_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Week`)
};

const es_basecamp_chart_week = /** @type {(inputs: Basecamp_Chart_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Semana`)
};

const de_basecamp_chart_week = /** @type {(inputs: Basecamp_Chart_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Woche`)
};

const fr_basecamp_chart_week = /** @type {(inputs: Basecamp_Chart_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Semaine`)
};

const it_basecamp_chart_week = /** @type {(inputs: Basecamp_Chart_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Settimana`)
};

const nl_basecamp_chart_week = /** @type {(inputs: Basecamp_Chart_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Week`)
};

const pl_basecamp_chart_week = /** @type {(inputs: Basecamp_Chart_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tydzień`)
};

const pt_basecamp_chart_week = /** @type {(inputs: Basecamp_Chart_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Semana`)
};

const ru_basecamp_chart_week = /** @type {(inputs: Basecamp_Chart_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Неделя`)
};

const sv_basecamp_chart_week = /** @type {(inputs: Basecamp_Chart_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vecka`)
};

const tr_basecamp_chart_week = /** @type {(inputs: Basecamp_Chart_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hafta`)
};

const zh_basecamp_chart_week = /** @type {(inputs: Basecamp_Chart_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`周`)
};

const ja_basecamp_chart_week = /** @type {(inputs: Basecamp_Chart_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`週`)
};

/**
* | output |
* | --- |
* | "Week" |
*
* @param {Basecamp_Chart_WeekInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_chart_week = /** @type {((inputs?: Basecamp_Chart_WeekInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Chart_WeekInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_chart_week(inputs)
	if (locale === "de") return de_basecamp_chart_week(inputs)
	if (locale === "fr") return fr_basecamp_chart_week(inputs)
	if (locale === "it") return it_basecamp_chart_week(inputs)
	if (locale === "nl") return nl_basecamp_chart_week(inputs)
	if (locale === "pl") return pl_basecamp_chart_week(inputs)
	if (locale === "pt") return pt_basecamp_chart_week(inputs)
	if (locale === "ru") return ru_basecamp_chart_week(inputs)
	if (locale === "sv") return sv_basecamp_chart_week(inputs)
	if (locale === "tr") return tr_basecamp_chart_week(inputs)
	if (locale === "zh") return zh_basecamp_chart_week(inputs)
	if (locale === "ja") return ja_basecamp_chart_week(inputs)
	return en_basecamp_chart_week(inputs)
});
