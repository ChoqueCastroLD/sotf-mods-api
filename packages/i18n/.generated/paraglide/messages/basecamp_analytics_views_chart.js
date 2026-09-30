/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Analytics_Views_ChartInputs */

const en_basecamp_analytics_views_chart = /** @type {(inputs: Basecamp_Analytics_Views_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Page views`)
};

const es_basecamp_analytics_views_chart = /** @type {(inputs: Basecamp_Analytics_Views_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vistas de la página`)
};

const de_basecamp_analytics_views_chart = /** @type {(inputs: Basecamp_Analytics_Views_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seitenaufrufe`)
};

const fr_basecamp_analytics_views_chart = /** @type {(inputs: Basecamp_Analytics_Views_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vues de la page`)
};

const it_basecamp_analytics_views_chart = /** @type {(inputs: Basecamp_Analytics_Views_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visualizzazioni della pagina`)
};

const nl_basecamp_analytics_views_chart = /** @type {(inputs: Basecamp_Analytics_Views_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paginaweergaven`)
};

const pl_basecamp_analytics_views_chart = /** @type {(inputs: Basecamp_Analytics_Views_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyświetlenia strony`)
};

const pt_basecamp_analytics_views_chart = /** @type {(inputs: Basecamp_Analytics_Views_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visualizações da página`)
};

const ru_basecamp_analytics_views_chart = /** @type {(inputs: Basecamp_Analytics_Views_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Просмотры страницы`)
};

const sv_basecamp_analytics_views_chart = /** @type {(inputs: Basecamp_Analytics_Views_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sidvisningar`)
};

const tr_basecamp_analytics_views_chart = /** @type {(inputs: Basecamp_Analytics_Views_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sayfa görüntülenmeleri`)
};

const zh_basecamp_analytics_views_chart = /** @type {(inputs: Basecamp_Analytics_Views_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`页面浏览量`)
};

const ja_basecamp_analytics_views_chart = /** @type {(inputs: Basecamp_Analytics_Views_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ページの閲覧`)
};

/**
* | output |
* | --- |
* | "Page views" |
*
* @param {Basecamp_Analytics_Views_ChartInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_analytics_views_chart = /** @type {((inputs?: Basecamp_Analytics_Views_ChartInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Analytics_Views_ChartInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_analytics_views_chart(inputs)
	if (locale === "de") return de_basecamp_analytics_views_chart(inputs)
	if (locale === "fr") return fr_basecamp_analytics_views_chart(inputs)
	if (locale === "it") return it_basecamp_analytics_views_chart(inputs)
	if (locale === "nl") return nl_basecamp_analytics_views_chart(inputs)
	if (locale === "pl") return pl_basecamp_analytics_views_chart(inputs)
	if (locale === "pt") return pt_basecamp_analytics_views_chart(inputs)
	if (locale === "ru") return ru_basecamp_analytics_views_chart(inputs)
	if (locale === "sv") return sv_basecamp_analytics_views_chart(inputs)
	if (locale === "tr") return tr_basecamp_analytics_views_chart(inputs)
	if (locale === "zh") return zh_basecamp_analytics_views_chart(inputs)
	if (locale === "ja") return ja_basecamp_analytics_views_chart(inputs)
	return en_basecamp_analytics_views_chart(inputs)
});
