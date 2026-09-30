/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ops_Col_FailedInputs */

const en_admin_ops_col_failed = /** @type {(inputs: Admin_Ops_Col_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed · 24 h`)
};

const es_admin_ops_col_failed = /** @type {(inputs: Admin_Ops_Col_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fallidas · 24 h`)
};

const de_admin_ops_col_failed = /** @type {(inputs: Admin_Ops_Col_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fehlgeschlagen · 24 h`)
};

const fr_admin_ops_col_failed = /** @type {(inputs: Admin_Ops_Col_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Échecs · 24 h`)
};

const it_admin_ops_col_failed = /** @type {(inputs: Admin_Ops_Col_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Falliti · 24 h`)
};

const nl_admin_ops_col_failed = /** @type {(inputs: Admin_Ops_Col_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mislukt · 24 u`)
};

const pl_admin_ops_col_failed = /** @type {(inputs: Admin_Ops_Col_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieudane · 24 h`)
};

const pt_admin_ops_col_failed = /** @type {(inputs: Admin_Ops_Col_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Falhas · 24 h`)
};

const ru_admin_ops_col_failed = /** @type {(inputs: Admin_Ops_Col_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ошибки · 24 ч`)
};

const sv_admin_ops_col_failed = /** @type {(inputs: Admin_Ops_Col_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Misslyckade · 24 h`)
};

const tr_admin_ops_col_failed = /** @type {(inputs: Admin_Ops_Col_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başarısız · 24 sa`)
};

const zh_admin_ops_col_failed = /** @type {(inputs: Admin_Ops_Col_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`失败 · 24 小时`)
};

const ja_admin_ops_col_failed = /** @type {(inputs: Admin_Ops_Col_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`失敗 · 24 時間`)
};

/**
* | output |
* | --- |
* | "Failed · 24 h" |
*
* @param {Admin_Ops_Col_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ops_col_failed = /** @type {((inputs?: Admin_Ops_Col_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_Col_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ops_col_failed(inputs)
	if (locale === "de") return de_admin_ops_col_failed(inputs)
	if (locale === "fr") return fr_admin_ops_col_failed(inputs)
	if (locale === "it") return it_admin_ops_col_failed(inputs)
	if (locale === "nl") return nl_admin_ops_col_failed(inputs)
	if (locale === "pl") return pl_admin_ops_col_failed(inputs)
	if (locale === "pt") return pt_admin_ops_col_failed(inputs)
	if (locale === "ru") return ru_admin_ops_col_failed(inputs)
	if (locale === "sv") return sv_admin_ops_col_failed(inputs)
	if (locale === "tr") return tr_admin_ops_col_failed(inputs)
	if (locale === "zh") return zh_admin_ops_col_failed(inputs)
	if (locale === "ja") return ja_admin_ops_col_failed(inputs)
	return en_admin_ops_col_failed(inputs)
});
