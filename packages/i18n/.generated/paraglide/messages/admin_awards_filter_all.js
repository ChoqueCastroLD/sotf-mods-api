/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Awards_Filter_AllInputs */

const en_admin_awards_filter_all = /** @type {(inputs: Admin_Awards_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All kinds`)
};

const es_admin_awards_filter_all = /** @type {(inputs: Admin_Awards_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todos los tipos`)
};

const de_admin_awards_filter_all = /** @type {(inputs: Admin_Awards_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle Arten`)
};

const fr_admin_awards_filter_all = /** @type {(inputs: Admin_Awards_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tous les types`)
};

const it_admin_awards_filter_all = /** @type {(inputs: Admin_Awards_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutti i tipi`)
};

const nl_admin_awards_filter_all = /** @type {(inputs: Admin_Awards_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle soorten`)
};

const pl_admin_awards_filter_all = /** @type {(inputs: Admin_Awards_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszystkie rodzaje`)
};

const pt_admin_awards_filter_all = /** @type {(inputs: Admin_Awards_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todos os tipos`)
};

const ru_admin_awards_filter_all = /** @type {(inputs: Admin_Awards_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Все типы`)
};

const sv_admin_awards_filter_all = /** @type {(inputs: Admin_Awards_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla slag`)
};

const tr_admin_awards_filter_all = /** @type {(inputs: Admin_Awards_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tüm türler`)
};

const zh_admin_awards_filter_all = /** @type {(inputs: Admin_Awards_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`全部类型`)
};

const ja_admin_awards_filter_all = /** @type {(inputs: Admin_Awards_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべての種類`)
};

/**
* | output |
* | --- |
* | "All kinds" |
*
* @param {Admin_Awards_Filter_AllInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_awards_filter_all = /** @type {((inputs?: Admin_Awards_Filter_AllInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Awards_Filter_AllInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_awards_filter_all(inputs)
	if (locale === "de") return de_admin_awards_filter_all(inputs)
	if (locale === "fr") return fr_admin_awards_filter_all(inputs)
	if (locale === "it") return it_admin_awards_filter_all(inputs)
	if (locale === "nl") return nl_admin_awards_filter_all(inputs)
	if (locale === "pl") return pl_admin_awards_filter_all(inputs)
	if (locale === "pt") return pt_admin_awards_filter_all(inputs)
	if (locale === "ru") return ru_admin_awards_filter_all(inputs)
	if (locale === "sv") return sv_admin_awards_filter_all(inputs)
	if (locale === "tr") return tr_admin_awards_filter_all(inputs)
	if (locale === "zh") return zh_admin_awards_filter_all(inputs)
	if (locale === "ja") return ja_admin_awards_filter_all(inputs)
	return en_admin_awards_filter_all(inputs)
});
