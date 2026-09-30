/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Nav_PerformanceInputs */

const en_console_nav_performance = /** @type {(inputs: Console_Nav_PerformanceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Performance`)
};

const es_console_nav_performance = /** @type {(inputs: Console_Nav_PerformanceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rendimiento`)
};

const de_console_nav_performance = /** @type {(inputs: Console_Nav_PerformanceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Performance`)
};

const fr_console_nav_performance = /** @type {(inputs: Console_Nav_PerformanceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Performances`)
};

const it_console_nav_performance = /** @type {(inputs: Console_Nav_PerformanceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prestazioni`)
};

const nl_console_nav_performance = /** @type {(inputs: Console_Nav_PerformanceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prestaties`)
};

const pl_console_nav_performance = /** @type {(inputs: Console_Nav_PerformanceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wydajność`)
};

const pt_console_nav_performance = /** @type {(inputs: Console_Nav_PerformanceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desempenho`)
};

const ru_console_nav_performance = /** @type {(inputs: Console_Nav_PerformanceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Производительность`)
};

const sv_console_nav_performance = /** @type {(inputs: Console_Nav_PerformanceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prestanda`)
};

const tr_console_nav_performance = /** @type {(inputs: Console_Nav_PerformanceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Performans`)
};

const zh_console_nav_performance = /** @type {(inputs: Console_Nav_PerformanceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`性能`)
};

const ja_console_nav_performance = /** @type {(inputs: Console_Nav_PerformanceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`パフォーマンス`)
};

/**
* | output |
* | --- |
* | "Performance" |
*
* @param {Console_Nav_PerformanceInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_nav_performance = /** @type {((inputs?: Console_Nav_PerformanceInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Nav_PerformanceInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_nav_performance(inputs)
	if (locale === "de") return de_console_nav_performance(inputs)
	if (locale === "fr") return fr_console_nav_performance(inputs)
	if (locale === "it") return it_console_nav_performance(inputs)
	if (locale === "nl") return nl_console_nav_performance(inputs)
	if (locale === "pl") return pl_console_nav_performance(inputs)
	if (locale === "pt") return pt_console_nav_performance(inputs)
	if (locale === "ru") return ru_console_nav_performance(inputs)
	if (locale === "sv") return sv_console_nav_performance(inputs)
	if (locale === "tr") return tr_console_nav_performance(inputs)
	if (locale === "zh") return zh_console_nav_performance(inputs)
	if (locale === "ja") return ja_console_nav_performance(inputs)
	return en_console_nav_performance(inputs)
});
