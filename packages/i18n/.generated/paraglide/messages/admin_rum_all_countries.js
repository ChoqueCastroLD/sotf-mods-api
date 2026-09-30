/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Rum_All_CountriesInputs */

const en_admin_rum_all_countries = /** @type {(inputs: Admin_Rum_All_CountriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All countries`)
};

const es_admin_rum_all_countries = /** @type {(inputs: Admin_Rum_All_CountriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todos los países`)
};

const de_admin_rum_all_countries = /** @type {(inputs: Admin_Rum_All_CountriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle Länder`)
};

const fr_admin_rum_all_countries = /** @type {(inputs: Admin_Rum_All_CountriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tous les pays`)
};

const it_admin_rum_all_countries = /** @type {(inputs: Admin_Rum_All_CountriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutti i paesi`)
};

const nl_admin_rum_all_countries = /** @type {(inputs: Admin_Rum_All_CountriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle landen`)
};

const pl_admin_rum_all_countries = /** @type {(inputs: Admin_Rum_All_CountriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszystkie kraje`)
};

const pt_admin_rum_all_countries = /** @type {(inputs: Admin_Rum_All_CountriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todos os países`)
};

const ru_admin_rum_all_countries = /** @type {(inputs: Admin_Rum_All_CountriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Все страны`)
};

const sv_admin_rum_all_countries = /** @type {(inputs: Admin_Rum_All_CountriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla länder`)
};

const tr_admin_rum_all_countries = /** @type {(inputs: Admin_Rum_All_CountriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tüm ülkeler`)
};

const zh_admin_rum_all_countries = /** @type {(inputs: Admin_Rum_All_CountriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`所有国家/地区`)
};

const ja_admin_rum_all_countries = /** @type {(inputs: Admin_Rum_All_CountriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべての国・地域`)
};

/**
* | output |
* | --- |
* | "All countries" |
*
* @param {Admin_Rum_All_CountriesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_rum_all_countries = /** @type {((inputs?: Admin_Rum_All_CountriesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Rum_All_CountriesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_rum_all_countries(inputs)
	if (locale === "de") return de_admin_rum_all_countries(inputs)
	if (locale === "fr") return fr_admin_rum_all_countries(inputs)
	if (locale === "it") return it_admin_rum_all_countries(inputs)
	if (locale === "nl") return nl_admin_rum_all_countries(inputs)
	if (locale === "pl") return pl_admin_rum_all_countries(inputs)
	if (locale === "pt") return pt_admin_rum_all_countries(inputs)
	if (locale === "ru") return ru_admin_rum_all_countries(inputs)
	if (locale === "sv") return sv_admin_rum_all_countries(inputs)
	if (locale === "tr") return tr_admin_rum_all_countries(inputs)
	if (locale === "zh") return zh_admin_rum_all_countries(inputs)
	if (locale === "ja") return ja_admin_rum_all_countries(inputs)
	return en_admin_rum_all_countries(inputs)
});
