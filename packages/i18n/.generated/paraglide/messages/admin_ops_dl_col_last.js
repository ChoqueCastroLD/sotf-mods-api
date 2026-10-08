/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ops_Dl_Col_LastInputs */

const en_admin_ops_dl_col_last = /** @type {(inputs: Admin_Ops_Dl_Col_LastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Last failure`)
};

const es_admin_ops_dl_col_last = /** @type {(inputs: Admin_Ops_Dl_Col_LastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Último fallo`)
};

const de_admin_ops_dl_col_last = /** @type {(inputs: Admin_Ops_Dl_Col_LastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Letzter Fehlschlag`)
};

const fr_admin_ops_dl_col_last = /** @type {(inputs: Admin_Ops_Dl_Col_LastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dernier échec`)
};

const it_admin_ops_dl_col_last = /** @type {(inputs: Admin_Ops_Dl_Col_LastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ultimo fallimento`)
};

const nl_admin_ops_dl_col_last = /** @type {(inputs: Admin_Ops_Dl_Col_LastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Laatste mislukking`)
};

const pl_admin_ops_dl_col_last = /** @type {(inputs: Admin_Ops_Dl_Col_LastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ostatnia porażka`)
};

const pt_admin_ops_dl_col_last = /** @type {(inputs: Admin_Ops_Dl_Col_LastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Última falha`)
};

const ru_admin_ops_dl_col_last = /** @type {(inputs: Admin_Ops_Dl_Col_LastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Последний сбой`)
};

const sv_admin_ops_dl_col_last = /** @type {(inputs: Admin_Ops_Dl_Col_LastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Senaste misslyckande`)
};

const tr_admin_ops_dl_col_last = /** @type {(inputs: Admin_Ops_Dl_Col_LastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Son başarısızlık`)
};

const zh_admin_ops_dl_col_last = /** @type {(inputs: Admin_Ops_Dl_Col_LastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最近一次失败`)
};

const ja_admin_ops_dl_col_last = /** @type {(inputs: Admin_Ops_Dl_Col_LastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最後の失敗`)
};

/**
* | output |
* | --- |
* | "Last failure" |
*
* @param {Admin_Ops_Dl_Col_LastInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ops_dl_col_last = /** @type {((inputs?: Admin_Ops_Dl_Col_LastInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_Dl_Col_LastInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ops_dl_col_last(inputs)
	if (locale === "de") return de_admin_ops_dl_col_last(inputs)
	if (locale === "fr") return fr_admin_ops_dl_col_last(inputs)
	if (locale === "it") return it_admin_ops_dl_col_last(inputs)
	if (locale === "nl") return nl_admin_ops_dl_col_last(inputs)
	if (locale === "pl") return pl_admin_ops_dl_col_last(inputs)
	if (locale === "pt") return pt_admin_ops_dl_col_last(inputs)
	if (locale === "ru") return ru_admin_ops_dl_col_last(inputs)
	if (locale === "sv") return sv_admin_ops_dl_col_last(inputs)
	if (locale === "tr") return tr_admin_ops_dl_col_last(inputs)
	if (locale === "zh") return zh_admin_ops_dl_col_last(inputs)
	if (locale === "ja") return ja_admin_ops_dl_col_last(inputs)
	return en_admin_ops_dl_col_last(inputs)
});
