/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Awards_FilterInputs */

const en_admin_awards_filter = /** @type {(inputs: Admin_Awards_FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kind`)
};

const es_admin_awards_filter = /** @type {(inputs: Admin_Awards_FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tipo`)
};

const de_admin_awards_filter = /** @type {(inputs: Admin_Awards_FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Art`)
};

const fr_admin_awards_filter = /** @type {(inputs: Admin_Awards_FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Type`)
};

const it_admin_awards_filter = /** @type {(inputs: Admin_Awards_FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tipo`)
};

const nl_admin_awards_filter = /** @type {(inputs: Admin_Awards_FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Soort`)
};

const pl_admin_awards_filter = /** @type {(inputs: Admin_Awards_FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rodzaj`)
};

const pt_admin_awards_filter = /** @type {(inputs: Admin_Awards_FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tipo`)
};

const ru_admin_awards_filter = /** @type {(inputs: Admin_Awards_FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Тип`)
};

const sv_admin_awards_filter = /** @type {(inputs: Admin_Awards_FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slag`)
};

const tr_admin_awards_filter = /** @type {(inputs: Admin_Awards_FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tür`)
};

const zh_admin_awards_filter = /** @type {(inputs: Admin_Awards_FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`类型`)
};

const ja_admin_awards_filter = /** @type {(inputs: Admin_Awards_FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`種類`)
};

/**
* | output |
* | --- |
* | "Kind" |
*
* @param {Admin_Awards_FilterInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_awards_filter = /** @type {((inputs?: Admin_Awards_FilterInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Awards_FilterInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_awards_filter(inputs)
	if (locale === "de") return de_admin_awards_filter(inputs)
	if (locale === "fr") return fr_admin_awards_filter(inputs)
	if (locale === "it") return it_admin_awards_filter(inputs)
	if (locale === "nl") return nl_admin_awards_filter(inputs)
	if (locale === "pl") return pl_admin_awards_filter(inputs)
	if (locale === "pt") return pt_admin_awards_filter(inputs)
	if (locale === "ru") return ru_admin_awards_filter(inputs)
	if (locale === "sv") return sv_admin_awards_filter(inputs)
	if (locale === "tr") return tr_admin_awards_filter(inputs)
	if (locale === "zh") return zh_admin_awards_filter(inputs)
	if (locale === "ja") return ja_admin_awards_filter(inputs)
	return en_admin_awards_filter(inputs)
});
