/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ops_Col_ActiveInputs */

const en_admin_ops_col_active = /** @type {(inputs: Admin_Ops_Col_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Running`)
};

const es_admin_ops_col_active = /** @type {(inputs: Admin_Ops_Col_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En curso`)
};

const de_admin_ops_col_active = /** @type {(inputs: Admin_Ops_Col_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Laufend`)
};

const fr_admin_ops_col_active = /** @type {(inputs: Admin_Ops_Col_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En cours`)
};

const it_admin_ops_col_active = /** @type {(inputs: Admin_Ops_Col_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In corso`)
};

const nl_admin_ops_col_active = /** @type {(inputs: Admin_Ops_Col_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bezig`)
};

const pl_admin_ops_col_active = /** @type {(inputs: Admin_Ops_Col_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`W toku`)
};

const pt_admin_ops_col_active = /** @type {(inputs: Admin_Ops_Col_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Em execução`)
};

const ru_admin_ops_col_active = /** @type {(inputs: Admin_Ops_Col_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выполняются`)
};

const sv_admin_ops_col_active = /** @type {(inputs: Admin_Ops_Col_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Körs`)
};

const tr_admin_ops_col_active = /** @type {(inputs: Admin_Ops_Col_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çalışan`)
};

const zh_admin_ops_col_active = /** @type {(inputs: Admin_Ops_Col_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`运行中`)
};

const ja_admin_ops_col_active = /** @type {(inputs: Admin_Ops_Col_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`実行中`)
};

/**
* | output |
* | --- |
* | "Running" |
*
* @param {Admin_Ops_Col_ActiveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ops_col_active = /** @type {((inputs?: Admin_Ops_Col_ActiveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_Col_ActiveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ops_col_active(inputs)
	if (locale === "de") return de_admin_ops_col_active(inputs)
	if (locale === "fr") return fr_admin_ops_col_active(inputs)
	if (locale === "it") return it_admin_ops_col_active(inputs)
	if (locale === "nl") return nl_admin_ops_col_active(inputs)
	if (locale === "pl") return pl_admin_ops_col_active(inputs)
	if (locale === "pt") return pt_admin_ops_col_active(inputs)
	if (locale === "ru") return ru_admin_ops_col_active(inputs)
	if (locale === "sv") return sv_admin_ops_col_active(inputs)
	if (locale === "tr") return tr_admin_ops_col_active(inputs)
	if (locale === "zh") return zh_admin_ops_col_active(inputs)
	if (locale === "ja") return ja_admin_ops_col_active(inputs)
	return en_admin_ops_col_active(inputs)
});
