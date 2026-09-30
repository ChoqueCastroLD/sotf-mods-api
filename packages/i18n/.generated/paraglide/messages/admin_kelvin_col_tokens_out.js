/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Kelvin_Col_Tokens_OutInputs */

const en_admin_kelvin_col_tokens_out = /** @type {(inputs: Admin_Kelvin_Col_Tokens_OutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tokens out`)
};

const es_admin_kelvin_col_tokens_out = /** @type {(inputs: Admin_Kelvin_Col_Tokens_OutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tokens de salida`)
};

const de_admin_kelvin_col_tokens_out = /** @type {(inputs: Admin_Kelvin_Col_Tokens_OutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tokens raus`)
};

const fr_admin_kelvin_col_tokens_out = /** @type {(inputs: Admin_Kelvin_Col_Tokens_OutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tokens en sortie`)
};

const it_admin_kelvin_col_tokens_out = /** @type {(inputs: Admin_Kelvin_Col_Tokens_OutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Token in uscita`)
};

const nl_admin_kelvin_col_tokens_out = /** @type {(inputs: Admin_Kelvin_Col_Tokens_OutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tokens uit`)
};

const pl_admin_kelvin_col_tokens_out = /** @type {(inputs: Admin_Kelvin_Col_Tokens_OutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tokeny wyjściowe`)
};

const pt_admin_kelvin_col_tokens_out = /** @type {(inputs: Admin_Kelvin_Col_Tokens_OutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tokens de saída`)
};

const ru_admin_kelvin_col_tokens_out = /** @type {(inputs: Admin_Kelvin_Col_Tokens_OutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Токены на выходе`)
};

const sv_admin_kelvin_col_tokens_out = /** @type {(inputs: Admin_Kelvin_Col_Tokens_OutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tokens ut`)
};

const tr_admin_kelvin_col_tokens_out = /** @type {(inputs: Admin_Kelvin_Col_Tokens_OutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çıkış token’ları`)
};

const zh_admin_kelvin_col_tokens_out = /** @type {(inputs: Admin_Kelvin_Col_Tokens_OutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`输出 token`)
};

const ja_admin_kelvin_col_tokens_out = /** @type {(inputs: Admin_Kelvin_Col_Tokens_OutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`出力トークン`)
};

/**
* | output |
* | --- |
* | "Tokens out" |
*
* @param {Admin_Kelvin_Col_Tokens_OutInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_kelvin_col_tokens_out = /** @type {((inputs?: Admin_Kelvin_Col_Tokens_OutInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Kelvin_Col_Tokens_OutInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_kelvin_col_tokens_out(inputs)
	if (locale === "de") return de_admin_kelvin_col_tokens_out(inputs)
	if (locale === "fr") return fr_admin_kelvin_col_tokens_out(inputs)
	if (locale === "it") return it_admin_kelvin_col_tokens_out(inputs)
	if (locale === "nl") return nl_admin_kelvin_col_tokens_out(inputs)
	if (locale === "pl") return pl_admin_kelvin_col_tokens_out(inputs)
	if (locale === "pt") return pt_admin_kelvin_col_tokens_out(inputs)
	if (locale === "ru") return ru_admin_kelvin_col_tokens_out(inputs)
	if (locale === "sv") return sv_admin_kelvin_col_tokens_out(inputs)
	if (locale === "tr") return tr_admin_kelvin_col_tokens_out(inputs)
	if (locale === "zh") return zh_admin_kelvin_col_tokens_out(inputs)
	if (locale === "ja") return ja_admin_kelvin_col_tokens_out(inputs)
	return en_admin_kelvin_col_tokens_out(inputs)
});
