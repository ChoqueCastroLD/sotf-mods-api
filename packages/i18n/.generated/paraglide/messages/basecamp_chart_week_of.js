/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ date: NonNullable<unknown> }} Basecamp_Chart_Week_OfInputs */

const en_basecamp_chart_week_of = /** @type {(inputs: Basecamp_Chart_Week_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Week of ${i?.date}`)
};

const es_basecamp_chart_week_of = /** @type {(inputs: Basecamp_Chart_Week_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Semana del ${i?.date}`)
};

const de_basecamp_chart_week_of = /** @type {(inputs: Basecamp_Chart_Week_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Woche vom ${i?.date}`)
};

const fr_basecamp_chart_week_of = /** @type {(inputs: Basecamp_Chart_Week_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Semaine du ${i?.date}`)
};

const it_basecamp_chart_week_of = /** @type {(inputs: Basecamp_Chart_Week_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Settimana del ${i?.date}`)
};

const nl_basecamp_chart_week_of = /** @type {(inputs: Basecamp_Chart_Week_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Week van ${i?.date}`)
};

const pl_basecamp_chart_week_of = /** @type {(inputs: Basecamp_Chart_Week_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tydzień od ${i?.date}`)
};

const pt_basecamp_chart_week_of = /** @type {(inputs: Basecamp_Chart_Week_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Semana de ${i?.date}`)
};

const ru_basecamp_chart_week_of = /** @type {(inputs: Basecamp_Chart_Week_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Неделя с ${i?.date}`)
};

const sv_basecamp_chart_week_of = /** @type {(inputs: Basecamp_Chart_Week_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Veckan från ${i?.date}`)
};

const tr_basecamp_chart_week_of = /** @type {(inputs: Basecamp_Chart_Week_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date} haftası`)
};

const zh_basecamp_chart_week_of = /** @type {(inputs: Basecamp_Chart_Week_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date} 当周`)
};

const ja_basecamp_chart_week_of = /** @type {(inputs: Basecamp_Chart_Week_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date} の週`)
};

/**
* | output |
* | --- |
* | "Week of {date}" |
*
* @param {Basecamp_Chart_Week_OfInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_chart_week_of = /** @type {((inputs: Basecamp_Chart_Week_OfInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Chart_Week_OfInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_chart_week_of(inputs)
	if (locale === "de") return de_basecamp_chart_week_of(inputs)
	if (locale === "fr") return fr_basecamp_chart_week_of(inputs)
	if (locale === "it") return it_basecamp_chart_week_of(inputs)
	if (locale === "nl") return nl_basecamp_chart_week_of(inputs)
	if (locale === "pl") return pl_basecamp_chart_week_of(inputs)
	if (locale === "pt") return pt_basecamp_chart_week_of(inputs)
	if (locale === "ru") return ru_basecamp_chart_week_of(inputs)
	if (locale === "sv") return sv_basecamp_chart_week_of(inputs)
	if (locale === "tr") return tr_basecamp_chart_week_of(inputs)
	if (locale === "zh") return zh_basecamp_chart_week_of(inputs)
	if (locale === "ja") return ja_basecamp_chart_week_of(inputs)
	return en_basecamp_chart_week_of(inputs)
});
