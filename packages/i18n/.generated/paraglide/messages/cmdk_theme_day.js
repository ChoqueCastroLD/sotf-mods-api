/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Theme_DayInputs */

const en_cmdk_theme_day = /** @type {(inputs: Cmdk_Theme_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Day`)
};

const es_cmdk_theme_day = /** @type {(inputs: Cmdk_Theme_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Día`)
};

const de_cmdk_theme_day = /** @type {(inputs: Cmdk_Theme_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tag`)
};

const fr_cmdk_theme_day = /** @type {(inputs: Cmdk_Theme_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jour`)
};

const it_cmdk_theme_day = /** @type {(inputs: Cmdk_Theme_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Giorno`)
};

const nl_cmdk_theme_day = /** @type {(inputs: Cmdk_Theme_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dag`)
};

const pl_cmdk_theme_day = /** @type {(inputs: Cmdk_Theme_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dzień`)
};

const pt_cmdk_theme_day = /** @type {(inputs: Cmdk_Theme_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dia`)
};

const ru_cmdk_theme_day = /** @type {(inputs: Cmdk_Theme_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`День`)
};

const sv_cmdk_theme_day = /** @type {(inputs: Cmdk_Theme_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dag`)
};

const tr_cmdk_theme_day = /** @type {(inputs: Cmdk_Theme_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gündüz`)
};

const zh_cmdk_theme_day = /** @type {(inputs: Cmdk_Theme_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`日间`)
};

const ja_cmdk_theme_day = /** @type {(inputs: Cmdk_Theme_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`昼`)
};

/**
* | output |
* | --- |
* | "Day" |
*
* @param {Cmdk_Theme_DayInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_theme_day = /** @type {((inputs?: Cmdk_Theme_DayInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Theme_DayInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_theme_day(inputs)
	if (locale === "de") return de_cmdk_theme_day(inputs)
	if (locale === "fr") return fr_cmdk_theme_day(inputs)
	if (locale === "it") return it_cmdk_theme_day(inputs)
	if (locale === "nl") return nl_cmdk_theme_day(inputs)
	if (locale === "pl") return pl_cmdk_theme_day(inputs)
	if (locale === "pt") return pt_cmdk_theme_day(inputs)
	if (locale === "ru") return ru_cmdk_theme_day(inputs)
	if (locale === "sv") return sv_cmdk_theme_day(inputs)
	if (locale === "tr") return tr_cmdk_theme_day(inputs)
	if (locale === "zh") return zh_cmdk_theme_day(inputs)
	if (locale === "ja") return ja_cmdk_theme_day(inputs)
	return en_cmdk_theme_day(inputs)
});
