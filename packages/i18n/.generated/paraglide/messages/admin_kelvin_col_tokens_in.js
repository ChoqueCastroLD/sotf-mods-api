/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Kelvin_Col_Tokens_InInputs */

const en_admin_kelvin_col_tokens_in = /** @type {(inputs: Admin_Kelvin_Col_Tokens_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tokens in`)
};

const es_admin_kelvin_col_tokens_in = /** @type {(inputs: Admin_Kelvin_Col_Tokens_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tokens de entrada`)
};

const de_admin_kelvin_col_tokens_in = /** @type {(inputs: Admin_Kelvin_Col_Tokens_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tokens rein`)
};

const fr_admin_kelvin_col_tokens_in = /** @type {(inputs: Admin_Kelvin_Col_Tokens_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tokens en entrée`)
};

const it_admin_kelvin_col_tokens_in = /** @type {(inputs: Admin_Kelvin_Col_Tokens_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Token in ingresso`)
};

const nl_admin_kelvin_col_tokens_in = /** @type {(inputs: Admin_Kelvin_Col_Tokens_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tokens in`)
};

const pl_admin_kelvin_col_tokens_in = /** @type {(inputs: Admin_Kelvin_Col_Tokens_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tokeny wejściowe`)
};

const pt_admin_kelvin_col_tokens_in = /** @type {(inputs: Admin_Kelvin_Col_Tokens_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tokens de entrada`)
};

const ru_admin_kelvin_col_tokens_in = /** @type {(inputs: Admin_Kelvin_Col_Tokens_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Токены на входе`)
};

const sv_admin_kelvin_col_tokens_in = /** @type {(inputs: Admin_Kelvin_Col_Tokens_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tokens in`)
};

const tr_admin_kelvin_col_tokens_in = /** @type {(inputs: Admin_Kelvin_Col_Tokens_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Giriş token’ları`)
};

const zh_admin_kelvin_col_tokens_in = /** @type {(inputs: Admin_Kelvin_Col_Tokens_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`输入 token`)
};

const ja_admin_kelvin_col_tokens_in = /** @type {(inputs: Admin_Kelvin_Col_Tokens_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`入力トークン`)
};

/**
* | output |
* | --- |
* | "Tokens in" |
*
* @param {Admin_Kelvin_Col_Tokens_InInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_kelvin_col_tokens_in = /** @type {((inputs?: Admin_Kelvin_Col_Tokens_InInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Kelvin_Col_Tokens_InInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_kelvin_col_tokens_in(inputs)
	if (locale === "de") return de_admin_kelvin_col_tokens_in(inputs)
	if (locale === "fr") return fr_admin_kelvin_col_tokens_in(inputs)
	if (locale === "it") return it_admin_kelvin_col_tokens_in(inputs)
	if (locale === "nl") return nl_admin_kelvin_col_tokens_in(inputs)
	if (locale === "pl") return pl_admin_kelvin_col_tokens_in(inputs)
	if (locale === "pt") return pt_admin_kelvin_col_tokens_in(inputs)
	if (locale === "ru") return ru_admin_kelvin_col_tokens_in(inputs)
	if (locale === "sv") return sv_admin_kelvin_col_tokens_in(inputs)
	if (locale === "tr") return tr_admin_kelvin_col_tokens_in(inputs)
	if (locale === "zh") return zh_admin_kelvin_col_tokens_in(inputs)
	if (locale === "ja") return ja_admin_kelvin_col_tokens_in(inputs)
	return en_admin_kelvin_col_tokens_in(inputs)
});
