/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Stats_Row_WeekInputs */

const en_mod_stats_row_week = /** @type {(inputs: Mod_Stats_Row_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Week of`)
};

const es_mod_stats_row_week = /** @type {(inputs: Mod_Stats_Row_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Semana del`)
};

const de_mod_stats_row_week = /** @type {(inputs: Mod_Stats_Row_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Woche ab`)
};

const fr_mod_stats_row_week = /** @type {(inputs: Mod_Stats_Row_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Semaine du`)
};

const it_mod_stats_row_week = /** @type {(inputs: Mod_Stats_Row_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Settimana del`)
};

const nl_mod_stats_row_week = /** @type {(inputs: Mod_Stats_Row_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Week van`)
};

const pl_mod_stats_row_week = /** @type {(inputs: Mod_Stats_Row_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tydzień od`)
};

const pt_mod_stats_row_week = /** @type {(inputs: Mod_Stats_Row_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Semana de`)
};

const ru_mod_stats_row_week = /** @type {(inputs: Mod_Stats_Row_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Неделя с`)
};

const sv_mod_stats_row_week = /** @type {(inputs: Mod_Stats_Row_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vecka från`)
};

const tr_mod_stats_row_week = /** @type {(inputs: Mod_Stats_Row_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hafta başlangıcı`)
};

const zh_mod_stats_row_week = /** @type {(inputs: Mod_Stats_Row_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`起始周`)
};

const ja_mod_stats_row_week = /** @type {(inputs: Mod_Stats_Row_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`週の開始日`)
};

/**
* | output |
* | --- |
* | "Week of" |
*
* @param {Mod_Stats_Row_WeekInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_stats_row_week = /** @type {((inputs?: Mod_Stats_Row_WeekInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Stats_Row_WeekInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_stats_row_week(inputs)
	if (locale === "de") return de_mod_stats_row_week(inputs)
	if (locale === "fr") return fr_mod_stats_row_week(inputs)
	if (locale === "it") return it_mod_stats_row_week(inputs)
	if (locale === "nl") return nl_mod_stats_row_week(inputs)
	if (locale === "pl") return pl_mod_stats_row_week(inputs)
	if (locale === "pt") return pt_mod_stats_row_week(inputs)
	if (locale === "ru") return ru_mod_stats_row_week(inputs)
	if (locale === "sv") return sv_mod_stats_row_week(inputs)
	if (locale === "tr") return tr_mod_stats_row_week(inputs)
	if (locale === "zh") return zh_mod_stats_row_week(inputs)
	if (locale === "ja") return ja_mod_stats_row_week(inputs)
	return en_mod_stats_row_week(inputs)
});
