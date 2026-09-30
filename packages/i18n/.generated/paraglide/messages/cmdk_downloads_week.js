/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ display: NonNullable<unknown> }} Cmdk_Downloads_WeekInputs */

const en_cmdk_downloads_week = /** @type {(inputs: Cmdk_Downloads_WeekInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.display} this week`)
};

const es_cmdk_downloads_week = /** @type {(inputs: Cmdk_Downloads_WeekInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.display} esta semana`)
};

const de_cmdk_downloads_week = /** @type {(inputs: Cmdk_Downloads_WeekInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.display} diese Woche`)
};

const fr_cmdk_downloads_week = /** @type {(inputs: Cmdk_Downloads_WeekInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.display} cette semaine`)
};

const it_cmdk_downloads_week = /** @type {(inputs: Cmdk_Downloads_WeekInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.display} questa settimana`)
};

const nl_cmdk_downloads_week = /** @type {(inputs: Cmdk_Downloads_WeekInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.display} deze week`)
};

const pl_cmdk_downloads_week = /** @type {(inputs: Cmdk_Downloads_WeekInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.display} w tym tygodniu`)
};

const pt_cmdk_downloads_week = /** @type {(inputs: Cmdk_Downloads_WeekInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.display} esta semana`)
};

const ru_cmdk_downloads_week = /** @type {(inputs: Cmdk_Downloads_WeekInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.display} за неделю`)
};

const sv_cmdk_downloads_week = /** @type {(inputs: Cmdk_Downloads_WeekInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.display} denna vecka`)
};

const tr_cmdk_downloads_week = /** @type {(inputs: Cmdk_Downloads_WeekInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bu hafta ${i?.display}`)
};

const zh_cmdk_downloads_week = /** @type {(inputs: Cmdk_Downloads_WeekInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`本周 ${i?.display}`)
};

const ja_cmdk_downloads_week = /** @type {(inputs: Cmdk_Downloads_WeekInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`今週 ${i?.display}`)
};

/**
* | output |
* | --- |
* | "{display} this week" |
*
* @param {Cmdk_Downloads_WeekInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_downloads_week = /** @type {((inputs: Cmdk_Downloads_WeekInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Downloads_WeekInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_downloads_week(inputs)
	if (locale === "de") return de_cmdk_downloads_week(inputs)
	if (locale === "fr") return fr_cmdk_downloads_week(inputs)
	if (locale === "it") return it_cmdk_downloads_week(inputs)
	if (locale === "nl") return nl_cmdk_downloads_week(inputs)
	if (locale === "pl") return pl_cmdk_downloads_week(inputs)
	if (locale === "pt") return pt_cmdk_downloads_week(inputs)
	if (locale === "ru") return ru_cmdk_downloads_week(inputs)
	if (locale === "sv") return sv_cmdk_downloads_week(inputs)
	if (locale === "tr") return tr_cmdk_downloads_week(inputs)
	if (locale === "zh") return zh_cmdk_downloads_week(inputs)
	if (locale === "ja") return ja_cmdk_downloads_week(inputs)
	return en_cmdk_downloads_week(inputs)
});
