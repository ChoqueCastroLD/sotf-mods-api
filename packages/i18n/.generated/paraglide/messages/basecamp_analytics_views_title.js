/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Analytics_Views_TitleInputs */

const en_basecamp_analytics_views_title = /** @type {(inputs: Basecamp_Analytics_Views_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Views`)
};

const es_basecamp_analytics_views_title = /** @type {(inputs: Basecamp_Analytics_Views_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vistas`)
};

const de_basecamp_analytics_views_title = /** @type {(inputs: Basecamp_Analytics_Views_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aufrufe`)
};

const fr_basecamp_analytics_views_title = /** @type {(inputs: Basecamp_Analytics_Views_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vues`)
};

const it_basecamp_analytics_views_title = /** @type {(inputs: Basecamp_Analytics_Views_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visualizzazioni`)
};

const nl_basecamp_analytics_views_title = /** @type {(inputs: Basecamp_Analytics_Views_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Weergaven`)
};

const pl_basecamp_analytics_views_title = /** @type {(inputs: Basecamp_Analytics_Views_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyświetlenia`)
};

const pt_basecamp_analytics_views_title = /** @type {(inputs: Basecamp_Analytics_Views_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visualizações`)
};

const ru_basecamp_analytics_views_title = /** @type {(inputs: Basecamp_Analytics_Views_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Просмотры`)
};

const sv_basecamp_analytics_views_title = /** @type {(inputs: Basecamp_Analytics_Views_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visningar`)
};

const tr_basecamp_analytics_views_title = /** @type {(inputs: Basecamp_Analytics_Views_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Görüntülenmeler`)
};

const zh_basecamp_analytics_views_title = /** @type {(inputs: Basecamp_Analytics_Views_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`浏览量`)
};

const ja_basecamp_analytics_views_title = /** @type {(inputs: Basecamp_Analytics_Views_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`閲覧`)
};

/**
* | output |
* | --- |
* | "Views" |
*
* @param {Basecamp_Analytics_Views_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_analytics_views_title = /** @type {((inputs?: Basecamp_Analytics_Views_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Analytics_Views_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_analytics_views_title(inputs)
	if (locale === "de") return de_basecamp_analytics_views_title(inputs)
	if (locale === "fr") return fr_basecamp_analytics_views_title(inputs)
	if (locale === "it") return it_basecamp_analytics_views_title(inputs)
	if (locale === "nl") return nl_basecamp_analytics_views_title(inputs)
	if (locale === "pl") return pl_basecamp_analytics_views_title(inputs)
	if (locale === "pt") return pt_basecamp_analytics_views_title(inputs)
	if (locale === "ru") return ru_basecamp_analytics_views_title(inputs)
	if (locale === "sv") return sv_basecamp_analytics_views_title(inputs)
	if (locale === "tr") return tr_basecamp_analytics_views_title(inputs)
	if (locale === "zh") return zh_basecamp_analytics_views_title(inputs)
	if (locale === "ja") return ja_basecamp_analytics_views_title(inputs)
	return en_basecamp_analytics_views_title(inputs)
});
