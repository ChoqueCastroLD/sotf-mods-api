/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Traffic_By_LocaleInputs */

const en_admin_traffic_by_locale = /** @type {(inputs: Admin_Traffic_By_LocaleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Language`)
};

const es_admin_traffic_by_locale = /** @type {(inputs: Admin_Traffic_By_LocaleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Idioma`)
};

const de_admin_traffic_by_locale = /** @type {(inputs: Admin_Traffic_By_LocaleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sprache`)
};

const fr_admin_traffic_by_locale = /** @type {(inputs: Admin_Traffic_By_LocaleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Langue`)
};

const it_admin_traffic_by_locale = /** @type {(inputs: Admin_Traffic_By_LocaleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lingua`)
};

const nl_admin_traffic_by_locale = /** @type {(inputs: Admin_Traffic_By_LocaleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taal`)
};

const pl_admin_traffic_by_locale = /** @type {(inputs: Admin_Traffic_By_LocaleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Język`)
};

const pt_admin_traffic_by_locale = /** @type {(inputs: Admin_Traffic_By_LocaleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Idioma`)
};

const ru_admin_traffic_by_locale = /** @type {(inputs: Admin_Traffic_By_LocaleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Язык`)
};

const sv_admin_traffic_by_locale = /** @type {(inputs: Admin_Traffic_By_LocaleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Språk`)
};

const tr_admin_traffic_by_locale = /** @type {(inputs: Admin_Traffic_By_LocaleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dil`)
};

const zh_admin_traffic_by_locale = /** @type {(inputs: Admin_Traffic_By_LocaleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`语言`)
};

const ja_admin_traffic_by_locale = /** @type {(inputs: Admin_Traffic_By_LocaleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`言語`)
};

/**
* | output |
* | --- |
* | "Language" |
*
* @param {Admin_Traffic_By_LocaleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_traffic_by_locale = /** @type {((inputs?: Admin_Traffic_By_LocaleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Traffic_By_LocaleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_traffic_by_locale(inputs)
	if (locale === "de") return de_admin_traffic_by_locale(inputs)
	if (locale === "fr") return fr_admin_traffic_by_locale(inputs)
	if (locale === "it") return it_admin_traffic_by_locale(inputs)
	if (locale === "nl") return nl_admin_traffic_by_locale(inputs)
	if (locale === "pl") return pl_admin_traffic_by_locale(inputs)
	if (locale === "pt") return pt_admin_traffic_by_locale(inputs)
	if (locale === "ru") return ru_admin_traffic_by_locale(inputs)
	if (locale === "sv") return sv_admin_traffic_by_locale(inputs)
	if (locale === "tr") return tr_admin_traffic_by_locale(inputs)
	if (locale === "zh") return zh_admin_traffic_by_locale(inputs)
	if (locale === "ja") return ja_admin_traffic_by_locale(inputs)
	return en_admin_traffic_by_locale(inputs)
});
