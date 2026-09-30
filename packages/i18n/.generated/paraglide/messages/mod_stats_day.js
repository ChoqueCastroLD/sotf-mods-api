/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Stats_DayInputs */

const en_mod_stats_day = /** @type {(inputs: Mod_Stats_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Day`)
};

const es_mod_stats_day = /** @type {(inputs: Mod_Stats_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Día`)
};

const de_mod_stats_day = /** @type {(inputs: Mod_Stats_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tag`)
};

const fr_mod_stats_day = /** @type {(inputs: Mod_Stats_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jour`)
};

const it_mod_stats_day = /** @type {(inputs: Mod_Stats_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Giorno`)
};

const nl_mod_stats_day = /** @type {(inputs: Mod_Stats_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dag`)
};

const pl_mod_stats_day = /** @type {(inputs: Mod_Stats_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dzień`)
};

const pt_mod_stats_day = /** @type {(inputs: Mod_Stats_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dia`)
};

const ru_mod_stats_day = /** @type {(inputs: Mod_Stats_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`День`)
};

const sv_mod_stats_day = /** @type {(inputs: Mod_Stats_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dag`)
};

const tr_mod_stats_day = /** @type {(inputs: Mod_Stats_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gün`)
};

const zh_mod_stats_day = /** @type {(inputs: Mod_Stats_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`日期`)
};

const ja_mod_stats_day = /** @type {(inputs: Mod_Stats_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`日付`)
};

/**
* | output |
* | --- |
* | "Day" |
*
* @param {Mod_Stats_DayInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_stats_day = /** @type {((inputs?: Mod_Stats_DayInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Stats_DayInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_stats_day(inputs)
	if (locale === "de") return de_mod_stats_day(inputs)
	if (locale === "fr") return fr_mod_stats_day(inputs)
	if (locale === "it") return it_mod_stats_day(inputs)
	if (locale === "nl") return nl_mod_stats_day(inputs)
	if (locale === "pl") return pl_mod_stats_day(inputs)
	if (locale === "pt") return pt_mod_stats_day(inputs)
	if (locale === "ru") return ru_mod_stats_day(inputs)
	if (locale === "sv") return sv_mod_stats_day(inputs)
	if (locale === "tr") return tr_mod_stats_day(inputs)
	if (locale === "zh") return zh_mod_stats_day(inputs)
	if (locale === "ja") return ja_mod_stats_day(inputs)
	return en_mod_stats_day(inputs)
});
