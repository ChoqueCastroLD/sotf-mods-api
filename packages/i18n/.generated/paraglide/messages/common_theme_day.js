/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Theme_DayInputs */

const en_common_theme_day = /** @type {(inputs: Common_Theme_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Day`)
};

const es_common_theme_day = /** @type {(inputs: Common_Theme_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Día`)
};

const de_common_theme_day = /** @type {(inputs: Common_Theme_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tag`)
};

const fr_common_theme_day = /** @type {(inputs: Common_Theme_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jour`)
};

const it_common_theme_day = /** @type {(inputs: Common_Theme_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Giorno`)
};

const nl_common_theme_day = /** @type {(inputs: Common_Theme_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dag`)
};

const pl_common_theme_day = /** @type {(inputs: Common_Theme_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dzień`)
};

const pt_common_theme_day = /** @type {(inputs: Common_Theme_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dia`)
};

const ru_common_theme_day = /** @type {(inputs: Common_Theme_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`День`)
};

const sv_common_theme_day = /** @type {(inputs: Common_Theme_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dag`)
};

const tr_common_theme_day = /** @type {(inputs: Common_Theme_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gündüz`)
};

const zh_common_theme_day = /** @type {(inputs: Common_Theme_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`日间`)
};

const ja_common_theme_day = /** @type {(inputs: Common_Theme_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`昼`)
};

/**
* | output |
* | --- |
* | "Day" |
*
* @param {Common_Theme_DayInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_theme_day = /** @type {((inputs?: Common_Theme_DayInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Theme_DayInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_theme_day(inputs)
	if (locale === "de") return de_common_theme_day(inputs)
	if (locale === "fr") return fr_common_theme_day(inputs)
	if (locale === "it") return it_common_theme_day(inputs)
	if (locale === "nl") return nl_common_theme_day(inputs)
	if (locale === "pl") return pl_common_theme_day(inputs)
	if (locale === "pt") return pt_common_theme_day(inputs)
	if (locale === "ru") return ru_common_theme_day(inputs)
	if (locale === "sv") return sv_common_theme_day(inputs)
	if (locale === "tr") return tr_common_theme_day(inputs)
	if (locale === "zh") return zh_common_theme_day(inputs)
	if (locale === "ja") return ja_common_theme_day(inputs)
	return en_common_theme_day(inputs)
});
