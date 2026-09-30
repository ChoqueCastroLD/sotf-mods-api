/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_Group_TodayInputs */

const en_signals_group_today = /** @type {(inputs: Signals_Group_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Today`)
};

const es_signals_group_today = /** @type {(inputs: Signals_Group_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hoy`)
};

const de_signals_group_today = /** @type {(inputs: Signals_Group_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Heute`)
};

const fr_signals_group_today = /** @type {(inputs: Signals_Group_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aujourd’hui`)
};

const it_signals_group_today = /** @type {(inputs: Signals_Group_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oggi`)
};

const nl_signals_group_today = /** @type {(inputs: Signals_Group_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vandaag`)
};

const pl_signals_group_today = /** @type {(inputs: Signals_Group_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dzisiaj`)
};

const pt_signals_group_today = /** @type {(inputs: Signals_Group_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hoje`)
};

const ru_signals_group_today = /** @type {(inputs: Signals_Group_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сегодня`)
};

const sv_signals_group_today = /** @type {(inputs: Signals_Group_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I dag`)
};

const tr_signals_group_today = /** @type {(inputs: Signals_Group_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bugün`)
};

const zh_signals_group_today = /** @type {(inputs: Signals_Group_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`今天`)
};

const ja_signals_group_today = /** @type {(inputs: Signals_Group_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`今日`)
};

/**
* | output |
* | --- |
* | "Today" |
*
* @param {Signals_Group_TodayInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_group_today = /** @type {((inputs?: Signals_Group_TodayInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Group_TodayInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_group_today(inputs)
	if (locale === "de") return de_signals_group_today(inputs)
	if (locale === "fr") return fr_signals_group_today(inputs)
	if (locale === "it") return it_signals_group_today(inputs)
	if (locale === "nl") return nl_signals_group_today(inputs)
	if (locale === "pl") return pl_signals_group_today(inputs)
	if (locale === "pt") return pt_signals_group_today(inputs)
	if (locale === "ru") return ru_signals_group_today(inputs)
	if (locale === "sv") return sv_signals_group_today(inputs)
	if (locale === "tr") return tr_signals_group_today(inputs)
	if (locale === "zh") return zh_signals_group_today(inputs)
	if (locale === "ja") return ja_signals_group_today(inputs)
	return en_signals_group_today(inputs)
});
