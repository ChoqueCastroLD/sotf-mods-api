/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Tpl_FilterInputs */

const en_admin_tpl_filter = /** @type {(inputs: Admin_Tpl_FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Action`)
};

const es_admin_tpl_filter = /** @type {(inputs: Admin_Tpl_FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Acción`)
};

const de_admin_tpl_filter = /** @type {(inputs: Admin_Tpl_FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktion`)
};

const fr_admin_tpl_filter = /** @type {(inputs: Admin_Tpl_FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Action`)
};

const it_admin_tpl_filter = /** @type {(inputs: Admin_Tpl_FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Azione`)
};

const nl_admin_tpl_filter = /** @type {(inputs: Admin_Tpl_FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actie`)
};

const pl_admin_tpl_filter = /** @type {(inputs: Admin_Tpl_FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Działanie`)
};

const pt_admin_tpl_filter = /** @type {(inputs: Admin_Tpl_FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ação`)
};

const ru_admin_tpl_filter = /** @type {(inputs: Admin_Tpl_FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Действие`)
};

const sv_admin_tpl_filter = /** @type {(inputs: Admin_Tpl_FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Åtgärd`)
};

const tr_admin_tpl_filter = /** @type {(inputs: Admin_Tpl_FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İşlem`)
};

const zh_admin_tpl_filter = /** @type {(inputs: Admin_Tpl_FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`操作`)
};

const ja_admin_tpl_filter = /** @type {(inputs: Admin_Tpl_FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`操作`)
};

/**
* | output |
* | --- |
* | "Action" |
*
* @param {Admin_Tpl_FilterInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tpl_filter = /** @type {((inputs?: Admin_Tpl_FilterInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tpl_FilterInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tpl_filter(inputs)
	if (locale === "de") return de_admin_tpl_filter(inputs)
	if (locale === "fr") return fr_admin_tpl_filter(inputs)
	if (locale === "it") return it_admin_tpl_filter(inputs)
	if (locale === "nl") return nl_admin_tpl_filter(inputs)
	if (locale === "pl") return pl_admin_tpl_filter(inputs)
	if (locale === "pt") return pt_admin_tpl_filter(inputs)
	if (locale === "ru") return ru_admin_tpl_filter(inputs)
	if (locale === "sv") return sv_admin_tpl_filter(inputs)
	if (locale === "tr") return tr_admin_tpl_filter(inputs)
	if (locale === "zh") return zh_admin_tpl_filter(inputs)
	if (locale === "ja") return ja_admin_tpl_filter(inputs)
	return en_admin_tpl_filter(inputs)
});
