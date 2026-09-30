/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Awards_Kind_Mod_Of_MonthInputs */

const en_admin_awards_kind_mod_of_month = /** @type {(inputs: Admin_Awards_Kind_Mod_Of_MonthInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod of the Month`)
};

const es_admin_awards_kind_mod_of_month = /** @type {(inputs: Admin_Awards_Kind_Mod_Of_MonthInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod del mes`)
};

const de_admin_awards_kind_mod_of_month = /** @type {(inputs: Admin_Awards_Kind_Mod_Of_MonthInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod des Monats`)
};

const fr_admin_awards_kind_mod_of_month = /** @type {(inputs: Admin_Awards_Kind_Mod_Of_MonthInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod du mois`)
};

const it_admin_awards_kind_mod_of_month = /** @type {(inputs: Admin_Awards_Kind_Mod_Of_MonthInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod del mese`)
};

const nl_admin_awards_kind_mod_of_month = /** @type {(inputs: Admin_Awards_Kind_Mod_Of_MonthInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod van de maand`)
};

const pl_admin_awards_kind_mod_of_month = /** @type {(inputs: Admin_Awards_Kind_Mod_Of_MonthInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod miesiąca`)
};

const pt_admin_awards_kind_mod_of_month = /** @type {(inputs: Admin_Awards_Kind_Mod_Of_MonthInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod do mês`)
};

const ru_admin_awards_kind_mod_of_month = /** @type {(inputs: Admin_Awards_Kind_Mod_Of_MonthInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Мод месяца`)
};

const sv_admin_awards_kind_mod_of_month = /** @type {(inputs: Admin_Awards_Kind_Mod_Of_MonthInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Månadens modd`)
};

const tr_admin_awards_kind_mod_of_month = /** @type {(inputs: Admin_Awards_Kind_Mod_Of_MonthInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ayın Modu`)
};

const zh_admin_awards_kind_mod_of_month = /** @type {(inputs: Admin_Awards_Kind_Mod_Of_MonthInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`月度模组`)
};

const ja_admin_awards_kind_mod_of_month = /** @type {(inputs: Admin_Awards_Kind_Mod_Of_MonthInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`今月の MOD`)
};

/**
* | output |
* | --- |
* | "Mod of the Month" |
*
* @param {Admin_Awards_Kind_Mod_Of_MonthInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_awards_kind_mod_of_month = /** @type {((inputs?: Admin_Awards_Kind_Mod_Of_MonthInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Awards_Kind_Mod_Of_MonthInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_awards_kind_mod_of_month(inputs)
	if (locale === "de") return de_admin_awards_kind_mod_of_month(inputs)
	if (locale === "fr") return fr_admin_awards_kind_mod_of_month(inputs)
	if (locale === "it") return it_admin_awards_kind_mod_of_month(inputs)
	if (locale === "nl") return nl_admin_awards_kind_mod_of_month(inputs)
	if (locale === "pl") return pl_admin_awards_kind_mod_of_month(inputs)
	if (locale === "pt") return pt_admin_awards_kind_mod_of_month(inputs)
	if (locale === "ru") return ru_admin_awards_kind_mod_of_month(inputs)
	if (locale === "sv") return sv_admin_awards_kind_mod_of_month(inputs)
	if (locale === "tr") return tr_admin_awards_kind_mod_of_month(inputs)
	if (locale === "zh") return zh_admin_awards_kind_mod_of_month(inputs)
	if (locale === "ja") return ja_admin_awards_kind_mod_of_month(inputs)
	return en_admin_awards_kind_mod_of_month(inputs)
});
