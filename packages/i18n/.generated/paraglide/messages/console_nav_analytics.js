/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Nav_AnalyticsInputs */

const en_console_nav_analytics = /** @type {(inputs: Console_Nav_AnalyticsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Analytics`)
};

const es_console_nav_analytics = /** @type {(inputs: Console_Nav_AnalyticsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Estadísticas`)
};

const de_console_nav_analytics = /** @type {(inputs: Console_Nav_AnalyticsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Statistiken`)
};

const fr_console_nav_analytics = /** @type {(inputs: Console_Nav_AnalyticsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Statistiques`)
};

const it_console_nav_analytics = /** @type {(inputs: Console_Nav_AnalyticsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Statistiche`)
};

const nl_console_nav_analytics = /** @type {(inputs: Console_Nav_AnalyticsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Statistieken`)
};

const pl_console_nav_analytics = /** @type {(inputs: Console_Nav_AnalyticsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Statystyki`)
};

const pt_console_nav_analytics = /** @type {(inputs: Console_Nav_AnalyticsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Estatísticas`)
};

const ru_console_nav_analytics = /** @type {(inputs: Console_Nav_AnalyticsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Статистика`)
};

const sv_console_nav_analytics = /** @type {(inputs: Console_Nav_AnalyticsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Statistik`)
};

const tr_console_nav_analytics = /** @type {(inputs: Console_Nav_AnalyticsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İstatistikler`)
};

const zh_console_nav_analytics = /** @type {(inputs: Console_Nav_AnalyticsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`数据分析`)
};

const ja_console_nav_analytics = /** @type {(inputs: Console_Nav_AnalyticsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`統計`)
};

/**
* | output |
* | --- |
* | "Analytics" |
*
* @param {Console_Nav_AnalyticsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_nav_analytics = /** @type {((inputs?: Console_Nav_AnalyticsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Nav_AnalyticsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_nav_analytics(inputs)
	if (locale === "de") return de_console_nav_analytics(inputs)
	if (locale === "fr") return fr_console_nav_analytics(inputs)
	if (locale === "it") return it_console_nav_analytics(inputs)
	if (locale === "nl") return nl_console_nav_analytics(inputs)
	if (locale === "pl") return pl_console_nav_analytics(inputs)
	if (locale === "pt") return pt_console_nav_analytics(inputs)
	if (locale === "ru") return ru_console_nav_analytics(inputs)
	if (locale === "sv") return sv_console_nav_analytics(inputs)
	if (locale === "tr") return tr_console_nav_analytics(inputs)
	if (locale === "zh") return zh_console_nav_analytics(inputs)
	if (locale === "ja") return ja_console_nav_analytics(inputs)
	return en_console_nav_analytics(inputs)
});
