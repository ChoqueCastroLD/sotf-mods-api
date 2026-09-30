/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Fact_WeeklyInputs */

const en_cmdk_fact_weekly = /** @type {(inputs: Cmdk_Fact_WeeklyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This week`)
};

const es_cmdk_fact_weekly = /** @type {(inputs: Cmdk_Fact_WeeklyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta semana`)
};

const de_cmdk_fact_weekly = /** @type {(inputs: Cmdk_Fact_WeeklyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diese Woche`)
};

const fr_cmdk_fact_weekly = /** @type {(inputs: Cmdk_Fact_WeeklyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cette semaine`)
};

const it_cmdk_fact_weekly = /** @type {(inputs: Cmdk_Fact_WeeklyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questa settimana`)
};

const nl_cmdk_fact_weekly = /** @type {(inputs: Cmdk_Fact_WeeklyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze week`)
};

const pl_cmdk_fact_weekly = /** @type {(inputs: Cmdk_Fact_WeeklyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`W tym tygodniu`)
};

const pt_cmdk_fact_weekly = /** @type {(inputs: Cmdk_Fact_WeeklyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta semana`)
};

const ru_cmdk_fact_weekly = /** @type {(inputs: Cmdk_Fact_WeeklyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`За неделю`)
};

const sv_cmdk_fact_weekly = /** @type {(inputs: Cmdk_Fact_WeeklyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Denna vecka`)
};

const tr_cmdk_fact_weekly = /** @type {(inputs: Cmdk_Fact_WeeklyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu hafta`)
};

const zh_cmdk_fact_weekly = /** @type {(inputs: Cmdk_Fact_WeeklyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`本周`)
};

const ja_cmdk_fact_weekly = /** @type {(inputs: Cmdk_Fact_WeeklyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`今週`)
};

/**
* | output |
* | --- |
* | "This week" |
*
* @param {Cmdk_Fact_WeeklyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_fact_weekly = /** @type {((inputs?: Cmdk_Fact_WeeklyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Fact_WeeklyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_fact_weekly(inputs)
	if (locale === "de") return de_cmdk_fact_weekly(inputs)
	if (locale === "fr") return fr_cmdk_fact_weekly(inputs)
	if (locale === "it") return it_cmdk_fact_weekly(inputs)
	if (locale === "nl") return nl_cmdk_fact_weekly(inputs)
	if (locale === "pl") return pl_cmdk_fact_weekly(inputs)
	if (locale === "pt") return pt_cmdk_fact_weekly(inputs)
	if (locale === "ru") return ru_cmdk_fact_weekly(inputs)
	if (locale === "sv") return sv_cmdk_fact_weekly(inputs)
	if (locale === "tr") return tr_cmdk_fact_weekly(inputs)
	if (locale === "zh") return zh_cmdk_fact_weekly(inputs)
	if (locale === "ja") return ja_cmdk_fact_weekly(inputs)
	return en_cmdk_fact_weekly(inputs)
});
