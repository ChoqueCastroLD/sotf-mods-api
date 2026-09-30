/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Rum_CountryInputs */

const en_admin_rum_country = /** @type {(inputs: Admin_Rum_CountryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Country`)
};

const es_admin_rum_country = /** @type {(inputs: Admin_Rum_CountryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`País`)
};

const de_admin_rum_country = /** @type {(inputs: Admin_Rum_CountryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Land`)
};

const fr_admin_rum_country = /** @type {(inputs: Admin_Rum_CountryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pays`)
};

const it_admin_rum_country = /** @type {(inputs: Admin_Rum_CountryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paese`)
};

const nl_admin_rum_country = /** @type {(inputs: Admin_Rum_CountryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Land`)
};

const pl_admin_rum_country = /** @type {(inputs: Admin_Rum_CountryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kraj`)
};

const pt_admin_rum_country = /** @type {(inputs: Admin_Rum_CountryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`País`)
};

const ru_admin_rum_country = /** @type {(inputs: Admin_Rum_CountryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Страна`)
};

const sv_admin_rum_country = /** @type {(inputs: Admin_Rum_CountryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Land`)
};

const tr_admin_rum_country = /** @type {(inputs: Admin_Rum_CountryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ülke`)
};

const zh_admin_rum_country = /** @type {(inputs: Admin_Rum_CountryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`国家/地区`)
};

const ja_admin_rum_country = /** @type {(inputs: Admin_Rum_CountryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`国・地域`)
};

/**
* | output |
* | --- |
* | "Country" |
*
* @param {Admin_Rum_CountryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_rum_country = /** @type {((inputs?: Admin_Rum_CountryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Rum_CountryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_rum_country(inputs)
	if (locale === "de") return de_admin_rum_country(inputs)
	if (locale === "fr") return fr_admin_rum_country(inputs)
	if (locale === "it") return it_admin_rum_country(inputs)
	if (locale === "nl") return nl_admin_rum_country(inputs)
	if (locale === "pl") return pl_admin_rum_country(inputs)
	if (locale === "pt") return pt_admin_rum_country(inputs)
	if (locale === "ru") return ru_admin_rum_country(inputs)
	if (locale === "sv") return sv_admin_rum_country(inputs)
	if (locale === "tr") return tr_admin_rum_country(inputs)
	if (locale === "zh") return zh_admin_rum_country(inputs)
	if (locale === "ja") return ja_admin_rum_country(inputs)
	return en_admin_rum_country(inputs)
});
