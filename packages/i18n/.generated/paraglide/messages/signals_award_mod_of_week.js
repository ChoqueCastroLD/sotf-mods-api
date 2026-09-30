/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ mod: NonNullable<unknown> }} Signals_Award_Mod_Of_WeekInputs */

const en_signals_award_mod_of_week = /** @type {(inputs: Signals_Award_Mod_Of_WeekInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} is Mod of the Week`)
};

const es_signals_award_mod_of_week = /** @type {(inputs: Signals_Award_Mod_Of_WeekInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} es el Mod de la semana`)
};

const de_signals_award_mod_of_week = /** @type {(inputs: Signals_Award_Mod_Of_WeekInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} ist Mod der Woche`)
};

const fr_signals_award_mod_of_week = /** @type {(inputs: Signals_Award_Mod_Of_WeekInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} est le Mod de la semaine`)
};

const it_signals_award_mod_of_week = /** @type {(inputs: Signals_Award_Mod_Of_WeekInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} è la Mod della settimana`)
};

const nl_signals_award_mod_of_week = /** @type {(inputs: Signals_Award_Mod_Of_WeekInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} is Mod van de week`)
};

const pl_signals_award_mod_of_week = /** @type {(inputs: Signals_Award_Mod_Of_WeekInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} to Mod tygodnia`)
};

const pt_signals_award_mod_of_week = /** @type {(inputs: Signals_Award_Mod_Of_WeekInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} é o Mod da semana`)
};

const ru_signals_award_mod_of_week = /** @type {(inputs: Signals_Award_Mod_Of_WeekInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} — мод недели`)
};

const sv_signals_award_mod_of_week = /** @type {(inputs: Signals_Award_Mod_Of_WeekInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} är veckans modd`)
};

const tr_signals_award_mod_of_week = /** @type {(inputs: Signals_Award_Mod_Of_WeekInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} Haftanın Modu oldu`)
};

const zh_signals_award_mod_of_week = /** @type {(inputs: Signals_Award_Mod_Of_WeekInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} 当选本周模组`)
};

const ja_signals_award_mod_of_week = /** @type {(inputs: Signals_Award_Mod_Of_WeekInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} が今週のMODに選ばれました`)
};

/**
* | output |
* | --- |
* | "{mod} is Mod of the Week" |
*
* @param {Signals_Award_Mod_Of_WeekInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_award_mod_of_week = /** @type {((inputs: Signals_Award_Mod_Of_WeekInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Award_Mod_Of_WeekInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_award_mod_of_week(inputs)
	if (locale === "de") return de_signals_award_mod_of_week(inputs)
	if (locale === "fr") return fr_signals_award_mod_of_week(inputs)
	if (locale === "it") return it_signals_award_mod_of_week(inputs)
	if (locale === "nl") return nl_signals_award_mod_of_week(inputs)
	if (locale === "pl") return pl_signals_award_mod_of_week(inputs)
	if (locale === "pt") return pt_signals_award_mod_of_week(inputs)
	if (locale === "ru") return ru_signals_award_mod_of_week(inputs)
	if (locale === "sv") return sv_signals_award_mod_of_week(inputs)
	if (locale === "tr") return tr_signals_award_mod_of_week(inputs)
	if (locale === "zh") return zh_signals_award_mod_of_week(inputs)
	if (locale === "ja") return ja_signals_award_mod_of_week(inputs)
	return en_signals_award_mod_of_week(inputs)
});
