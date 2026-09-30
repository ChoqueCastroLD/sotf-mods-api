/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Kpi_Views_7dInputs */

const en_basecamp_kpi_views_7d = /** @type {(inputs: Basecamp_Kpi_Views_7dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Views · 7 days`)
};

const es_basecamp_kpi_views_7d = /** @type {(inputs: Basecamp_Kpi_Views_7dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vistas · 7 días`)
};

const de_basecamp_kpi_views_7d = /** @type {(inputs: Basecamp_Kpi_Views_7dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aufrufe · 7 Tage`)
};

const fr_basecamp_kpi_views_7d = /** @type {(inputs: Basecamp_Kpi_Views_7dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vues · 7 jours`)
};

const it_basecamp_kpi_views_7d = /** @type {(inputs: Basecamp_Kpi_Views_7dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visualizzazioni · 7 giorni`)
};

const nl_basecamp_kpi_views_7d = /** @type {(inputs: Basecamp_Kpi_Views_7dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Weergaven · 7 dagen`)
};

const pl_basecamp_kpi_views_7d = /** @type {(inputs: Basecamp_Kpi_Views_7dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyświetlenia · 7 dni`)
};

const pt_basecamp_kpi_views_7d = /** @type {(inputs: Basecamp_Kpi_Views_7dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visualizações · 7 dias`)
};

const ru_basecamp_kpi_views_7d = /** @type {(inputs: Basecamp_Kpi_Views_7dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Просмотры · 7 дней`)
};

const sv_basecamp_kpi_views_7d = /** @type {(inputs: Basecamp_Kpi_Views_7dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visningar · 7 dagar`)
};

const tr_basecamp_kpi_views_7d = /** @type {(inputs: Basecamp_Kpi_Views_7dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Görüntülenme · 7 gün`)
};

const zh_basecamp_kpi_views_7d = /** @type {(inputs: Basecamp_Kpi_Views_7dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`浏览 · 7 天`)
};

const ja_basecamp_kpi_views_7d = /** @type {(inputs: Basecamp_Kpi_Views_7dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`閲覧 · 7 日間`)
};

/**
* | output |
* | --- |
* | "Views · 7 days" |
*
* @param {Basecamp_Kpi_Views_7dInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_kpi_views_7d = /** @type {((inputs?: Basecamp_Kpi_Views_7dInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Kpi_Views_7dInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_kpi_views_7d(inputs)
	if (locale === "de") return de_basecamp_kpi_views_7d(inputs)
	if (locale === "fr") return fr_basecamp_kpi_views_7d(inputs)
	if (locale === "it") return it_basecamp_kpi_views_7d(inputs)
	if (locale === "nl") return nl_basecamp_kpi_views_7d(inputs)
	if (locale === "pl") return pl_basecamp_kpi_views_7d(inputs)
	if (locale === "pt") return pt_basecamp_kpi_views_7d(inputs)
	if (locale === "ru") return ru_basecamp_kpi_views_7d(inputs)
	if (locale === "sv") return sv_basecamp_kpi_views_7d(inputs)
	if (locale === "tr") return tr_basecamp_kpi_views_7d(inputs)
	if (locale === "zh") return zh_basecamp_kpi_views_7d(inputs)
	if (locale === "ja") return ja_basecamp_kpi_views_7d(inputs)
	return en_basecamp_kpi_views_7d(inputs)
});
