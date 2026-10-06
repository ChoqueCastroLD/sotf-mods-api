/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Weekly_This_WeekInputs */

const en_landing_weekly_this_week = /** @type {(inputs: Landing_Weekly_This_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`this week`)
};

const es_landing_weekly_this_week = /** @type {(inputs: Landing_Weekly_This_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`esta semana`)
};

const de_landing_weekly_this_week = /** @type {(inputs: Landing_Weekly_This_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`diese Woche`)
};

const fr_landing_weekly_this_week = /** @type {(inputs: Landing_Weekly_This_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`cette semaine`)
};

const it_landing_weekly_this_week = /** @type {(inputs: Landing_Weekly_This_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`questa settimana`)
};

const nl_landing_weekly_this_week = /** @type {(inputs: Landing_Weekly_This_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`deze week`)
};

const pl_landing_weekly_this_week = /** @type {(inputs: Landing_Weekly_This_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`w tym tygodniu`)
};

const pt_landing_weekly_this_week = /** @type {(inputs: Landing_Weekly_This_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`esta semana`)
};

const ru_landing_weekly_this_week = /** @type {(inputs: Landing_Weekly_This_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`на этой неделе`)
};

const sv_landing_weekly_this_week = /** @type {(inputs: Landing_Weekly_This_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`den här veckan`)
};

const tr_landing_weekly_this_week = /** @type {(inputs: Landing_Weekly_This_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`bu hafta`)
};

const zh_landing_weekly_this_week = /** @type {(inputs: Landing_Weekly_This_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`本周`)
};

const ja_landing_weekly_this_week = /** @type {(inputs: Landing_Weekly_This_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`今週`)
};

/**
* | output |
* | --- |
* | "this week" |
*
* @param {Landing_Weekly_This_WeekInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_weekly_this_week = /** @type {((inputs?: Landing_Weekly_This_WeekInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Weekly_This_WeekInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_weekly_this_week(inputs)
	if (locale === "de") return de_landing_weekly_this_week(inputs)
	if (locale === "fr") return fr_landing_weekly_this_week(inputs)
	if (locale === "it") return it_landing_weekly_this_week(inputs)
	if (locale === "nl") return nl_landing_weekly_this_week(inputs)
	if (locale === "pl") return pl_landing_weekly_this_week(inputs)
	if (locale === "pt") return pt_landing_weekly_this_week(inputs)
	if (locale === "ru") return ru_landing_weekly_this_week(inputs)
	if (locale === "sv") return sv_landing_weekly_this_week(inputs)
	if (locale === "tr") return tr_landing_weekly_this_week(inputs)
	if (locale === "zh") return zh_landing_weekly_this_week(inputs)
	if (locale === "ja") return ja_landing_weekly_this_week(inputs)
	return en_landing_weekly_this_week(inputs)
});
