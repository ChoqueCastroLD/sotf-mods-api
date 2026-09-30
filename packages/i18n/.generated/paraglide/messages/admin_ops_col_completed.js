/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ops_Col_CompletedInputs */

const en_admin_ops_col_completed = /** @type {(inputs: Admin_Ops_Col_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Done · 1 h`)
};

const es_admin_ops_col_completed = /** @type {(inputs: Admin_Ops_Col_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hechas · 1 h`)
};

const de_admin_ops_col_completed = /** @type {(inputs: Admin_Ops_Col_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erledigt · 1 h`)
};

const fr_admin_ops_col_completed = /** @type {(inputs: Admin_Ops_Col_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Terminées · 1 h`)
};

const it_admin_ops_col_completed = /** @type {(inputs: Admin_Ops_Col_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Completati · 1 h`)
};

const nl_admin_ops_col_completed = /** @type {(inputs: Admin_Ops_Col_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Klaar · 1 u`)
};

const pl_admin_ops_col_completed = /** @type {(inputs: Admin_Ops_Col_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zakończone · 1 h`)
};

const pt_admin_ops_col_completed = /** @type {(inputs: Admin_Ops_Col_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Concluídas · 1 h`)
};

const ru_admin_ops_col_completed = /** @type {(inputs: Admin_Ops_Col_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Готово · 1 ч`)
};

const sv_admin_ops_col_completed = /** @type {(inputs: Admin_Ops_Col_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Klara · 1 h`)
};

const tr_admin_ops_col_completed = /** @type {(inputs: Admin_Ops_Col_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Biten · 1 sa`)
};

const zh_admin_ops_col_completed = /** @type {(inputs: Admin_Ops_Col_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`完成 · 1 小时`)
};

const ja_admin_ops_col_completed = /** @type {(inputs: Admin_Ops_Col_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`完了 · 1 時間`)
};

/**
* | output |
* | --- |
* | "Done · 1 h" |
*
* @param {Admin_Ops_Col_CompletedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ops_col_completed = /** @type {((inputs?: Admin_Ops_Col_CompletedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_Col_CompletedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ops_col_completed(inputs)
	if (locale === "de") return de_admin_ops_col_completed(inputs)
	if (locale === "fr") return fr_admin_ops_col_completed(inputs)
	if (locale === "it") return it_admin_ops_col_completed(inputs)
	if (locale === "nl") return nl_admin_ops_col_completed(inputs)
	if (locale === "pl") return pl_admin_ops_col_completed(inputs)
	if (locale === "pt") return pt_admin_ops_col_completed(inputs)
	if (locale === "ru") return ru_admin_ops_col_completed(inputs)
	if (locale === "sv") return sv_admin_ops_col_completed(inputs)
	if (locale === "tr") return tr_admin_ops_col_completed(inputs)
	if (locale === "zh") return zh_admin_ops_col_completed(inputs)
	if (locale === "ja") return ja_admin_ops_col_completed(inputs)
	return en_admin_ops_col_completed(inputs)
});
