/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Awards_Kind_Mod_Of_WeekInputs */

const en_admin_awards_kind_mod_of_week = /** @type {(inputs: Admin_Awards_Kind_Mod_Of_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod of the Week`)
};

const es_admin_awards_kind_mod_of_week = /** @type {(inputs: Admin_Awards_Kind_Mod_Of_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod de la semana`)
};

const de_admin_awards_kind_mod_of_week = /** @type {(inputs: Admin_Awards_Kind_Mod_Of_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod der Woche`)
};

const fr_admin_awards_kind_mod_of_week = /** @type {(inputs: Admin_Awards_Kind_Mod_Of_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod de la semaine`)
};

const it_admin_awards_kind_mod_of_week = /** @type {(inputs: Admin_Awards_Kind_Mod_Of_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod della settimana`)
};

const nl_admin_awards_kind_mod_of_week = /** @type {(inputs: Admin_Awards_Kind_Mod_Of_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod van de week`)
};

const pl_admin_awards_kind_mod_of_week = /** @type {(inputs: Admin_Awards_Kind_Mod_Of_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod tygodnia`)
};

const pt_admin_awards_kind_mod_of_week = /** @type {(inputs: Admin_Awards_Kind_Mod_Of_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod da semana`)
};

const ru_admin_awards_kind_mod_of_week = /** @type {(inputs: Admin_Awards_Kind_Mod_Of_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Мод недели`)
};

const sv_admin_awards_kind_mod_of_week = /** @type {(inputs: Admin_Awards_Kind_Mod_Of_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veckans modd`)
};

const tr_admin_awards_kind_mod_of_week = /** @type {(inputs: Admin_Awards_Kind_Mod_Of_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Haftanın Modu`)
};

const zh_admin_awards_kind_mod_of_week = /** @type {(inputs: Admin_Awards_Kind_Mod_Of_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`每周模组`)
};

const ja_admin_awards_kind_mod_of_week = /** @type {(inputs: Admin_Awards_Kind_Mod_Of_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`今週の MOD`)
};

/**
* | output |
* | --- |
* | "Mod of the Week" |
*
* @param {Admin_Awards_Kind_Mod_Of_WeekInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_awards_kind_mod_of_week = /** @type {((inputs?: Admin_Awards_Kind_Mod_Of_WeekInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Awards_Kind_Mod_Of_WeekInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_awards_kind_mod_of_week(inputs)
	if (locale === "de") return de_admin_awards_kind_mod_of_week(inputs)
	if (locale === "fr") return fr_admin_awards_kind_mod_of_week(inputs)
	if (locale === "it") return it_admin_awards_kind_mod_of_week(inputs)
	if (locale === "nl") return nl_admin_awards_kind_mod_of_week(inputs)
	if (locale === "pl") return pl_admin_awards_kind_mod_of_week(inputs)
	if (locale === "pt") return pt_admin_awards_kind_mod_of_week(inputs)
	if (locale === "ru") return ru_admin_awards_kind_mod_of_week(inputs)
	if (locale === "sv") return sv_admin_awards_kind_mod_of_week(inputs)
	if (locale === "tr") return tr_admin_awards_kind_mod_of_week(inputs)
	if (locale === "zh") return zh_admin_awards_kind_mod_of_week(inputs)
	if (locale === "ja") return ja_admin_awards_kind_mod_of_week(inputs)
	return en_admin_awards_kind_mod_of_week(inputs)
});
