/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_Badge_Name_Mod_Of_The_WeekInputs */

const en_signals_badge_name_mod_of_the_week = /** @type {(inputs: Signals_Badge_Name_Mod_Of_The_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod of the Week`)
};

const es_signals_badge_name_mod_of_the_week = /** @type {(inputs: Signals_Badge_Name_Mod_Of_The_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod de la semana`)
};

const de_signals_badge_name_mod_of_the_week = /** @type {(inputs: Signals_Badge_Name_Mod_Of_The_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod der Woche`)
};

const fr_signals_badge_name_mod_of_the_week = /** @type {(inputs: Signals_Badge_Name_Mod_Of_The_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod de la semaine`)
};

const it_signals_badge_name_mod_of_the_week = /** @type {(inputs: Signals_Badge_Name_Mod_Of_The_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod della settimana`)
};

const nl_signals_badge_name_mod_of_the_week = /** @type {(inputs: Signals_Badge_Name_Mod_Of_The_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod van de week`)
};

const pl_signals_badge_name_mod_of_the_week = /** @type {(inputs: Signals_Badge_Name_Mod_Of_The_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod tygodnia`)
};

const pt_signals_badge_name_mod_of_the_week = /** @type {(inputs: Signals_Badge_Name_Mod_Of_The_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod da semana`)
};

const ru_signals_badge_name_mod_of_the_week = /** @type {(inputs: Signals_Badge_Name_Mod_Of_The_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Мод недели`)
};

const sv_signals_badge_name_mod_of_the_week = /** @type {(inputs: Signals_Badge_Name_Mod_Of_The_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veckans modd`)
};

const tr_signals_badge_name_mod_of_the_week = /** @type {(inputs: Signals_Badge_Name_Mod_Of_The_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Haftanın Modu`)
};

const zh_signals_badge_name_mod_of_the_week = /** @type {(inputs: Signals_Badge_Name_Mod_Of_The_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`本周模组`)
};

const ja_signals_badge_name_mod_of_the_week = /** @type {(inputs: Signals_Badge_Name_Mod_Of_The_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`今週の MOD`)
};

/**
* | output |
* | --- |
* | "Mod of the Week" |
*
* @param {Signals_Badge_Name_Mod_Of_The_WeekInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_badge_name_mod_of_the_week = /** @type {((inputs?: Signals_Badge_Name_Mod_Of_The_WeekInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Badge_Name_Mod_Of_The_WeekInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_badge_name_mod_of_the_week(inputs)
	if (locale === "de") return de_signals_badge_name_mod_of_the_week(inputs)
	if (locale === "fr") return fr_signals_badge_name_mod_of_the_week(inputs)
	if (locale === "it") return it_signals_badge_name_mod_of_the_week(inputs)
	if (locale === "nl") return nl_signals_badge_name_mod_of_the_week(inputs)
	if (locale === "pl") return pl_signals_badge_name_mod_of_the_week(inputs)
	if (locale === "pt") return pt_signals_badge_name_mod_of_the_week(inputs)
	if (locale === "ru") return ru_signals_badge_name_mod_of_the_week(inputs)
	if (locale === "sv") return sv_signals_badge_name_mod_of_the_week(inputs)
	if (locale === "tr") return tr_signals_badge_name_mod_of_the_week(inputs)
	if (locale === "zh") return zh_signals_badge_name_mod_of_the_week(inputs)
	if (locale === "ja") return ja_signals_badge_name_mod_of_the_week(inputs)
	return en_signals_badge_name_mod_of_the_week(inputs)
});
