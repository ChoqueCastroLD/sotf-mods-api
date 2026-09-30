/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ total: NonNullable<unknown> }} Basecamp_Downloads_Chart_TitleInputs */

const en_basecamp_downloads_chart_title = /** @type {(inputs: Basecamp_Downloads_Chart_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Downloads in the period: ${i?.total}`)
};

const es_basecamp_downloads_chart_title = /** @type {(inputs: Basecamp_Downloads_Chart_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Descargas del periodo: ${i?.total}`)
};

const de_basecamp_downloads_chart_title = /** @type {(inputs: Basecamp_Downloads_Chart_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Downloads im Zeitraum: ${i?.total}`)
};

const fr_basecamp_downloads_chart_title = /** @type {(inputs: Basecamp_Downloads_Chart_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Téléchargements sur la période : ${i?.total}`)
};

const it_basecamp_downloads_chart_title = /** @type {(inputs: Basecamp_Downloads_Chart_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Download nel periodo: ${i?.total}`)
};

const nl_basecamp_downloads_chart_title = /** @type {(inputs: Basecamp_Downloads_Chart_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Downloads in de periode: ${i?.total}`)
};

const pl_basecamp_downloads_chart_title = /** @type {(inputs: Basecamp_Downloads_Chart_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Pobrania w okresie: ${i?.total}`)
};

const pt_basecamp_downloads_chart_title = /** @type {(inputs: Basecamp_Downloads_Chart_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Downloads no período: ${i?.total}`)
};

const ru_basecamp_downloads_chart_title = /** @type {(inputs: Basecamp_Downloads_Chart_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Загрузки за период: ${i?.total}`)
};

const sv_basecamp_downloads_chart_title = /** @type {(inputs: Basecamp_Downloads_Chart_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nedladdningar under perioden: ${i?.total}`)
};

const tr_basecamp_downloads_chart_title = /** @type {(inputs: Basecamp_Downloads_Chart_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dönemdeki indirmeler: ${i?.total}`)
};

const zh_basecamp_downloads_chart_title = /** @type {(inputs: Basecamp_Downloads_Chart_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`本期下载量：${i?.total}`)
};

const ja_basecamp_downloads_chart_title = /** @type {(inputs: Basecamp_Downloads_Chart_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`期間内のダウンロード：${i?.total}`)
};

/**
* | output |
* | --- |
* | "Downloads in the period: {total}" |
*
* @param {Basecamp_Downloads_Chart_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_downloads_chart_title = /** @type {((inputs: Basecamp_Downloads_Chart_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Downloads_Chart_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_downloads_chart_title(inputs)
	if (locale === "de") return de_basecamp_downloads_chart_title(inputs)
	if (locale === "fr") return fr_basecamp_downloads_chart_title(inputs)
	if (locale === "it") return it_basecamp_downloads_chart_title(inputs)
	if (locale === "nl") return nl_basecamp_downloads_chart_title(inputs)
	if (locale === "pl") return pl_basecamp_downloads_chart_title(inputs)
	if (locale === "pt") return pt_basecamp_downloads_chart_title(inputs)
	if (locale === "ru") return ru_basecamp_downloads_chart_title(inputs)
	if (locale === "sv") return sv_basecamp_downloads_chart_title(inputs)
	if (locale === "tr") return tr_basecamp_downloads_chart_title(inputs)
	if (locale === "zh") return zh_basecamp_downloads_chart_title(inputs)
	if (locale === "ja") return ja_basecamp_downloads_chart_title(inputs)
	return en_basecamp_downloads_chart_title(inputs)
});
