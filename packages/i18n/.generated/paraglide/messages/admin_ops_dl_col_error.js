/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ops_Dl_Col_ErrorInputs */

const en_admin_ops_dl_col_error = /** @type {(inputs: Admin_Ops_Dl_Col_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Last error`)
};

const es_admin_ops_dl_col_error = /** @type {(inputs: Admin_Ops_Dl_Col_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Último error`)
};

const de_admin_ops_dl_col_error = /** @type {(inputs: Admin_Ops_Dl_Col_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Letzter Fehler`)
};

const fr_admin_ops_dl_col_error = /** @type {(inputs: Admin_Ops_Dl_Col_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dernière erreur`)
};

const it_admin_ops_dl_col_error = /** @type {(inputs: Admin_Ops_Dl_Col_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ultimo errore`)
};

const nl_admin_ops_dl_col_error = /** @type {(inputs: Admin_Ops_Dl_Col_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Laatste fout`)
};

const pl_admin_ops_dl_col_error = /** @type {(inputs: Admin_Ops_Dl_Col_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ostatni błąd`)
};

const pt_admin_ops_dl_col_error = /** @type {(inputs: Admin_Ops_Dl_Col_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Último erro`)
};

const ru_admin_ops_dl_col_error = /** @type {(inputs: Admin_Ops_Dl_Col_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Последняя ошибка`)
};

const sv_admin_ops_dl_col_error = /** @type {(inputs: Admin_Ops_Dl_Col_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Senaste fel`)
};

const tr_admin_ops_dl_col_error = /** @type {(inputs: Admin_Ops_Dl_Col_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Son hata`)
};

const zh_admin_ops_dl_col_error = /** @type {(inputs: Admin_Ops_Dl_Col_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最近的错误`)
};

const ja_admin_ops_dl_col_error = /** @type {(inputs: Admin_Ops_Dl_Col_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最後のエラー`)
};

/**
* | output |
* | --- |
* | "Last error" |
*
* @param {Admin_Ops_Dl_Col_ErrorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ops_dl_col_error = /** @type {((inputs?: Admin_Ops_Dl_Col_ErrorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_Dl_Col_ErrorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ops_dl_col_error(inputs)
	if (locale === "de") return de_admin_ops_dl_col_error(inputs)
	if (locale === "fr") return fr_admin_ops_dl_col_error(inputs)
	if (locale === "it") return it_admin_ops_dl_col_error(inputs)
	if (locale === "nl") return nl_admin_ops_dl_col_error(inputs)
	if (locale === "pl") return pl_admin_ops_dl_col_error(inputs)
	if (locale === "pt") return pt_admin_ops_dl_col_error(inputs)
	if (locale === "ru") return ru_admin_ops_dl_col_error(inputs)
	if (locale === "sv") return sv_admin_ops_dl_col_error(inputs)
	if (locale === "tr") return tr_admin_ops_dl_col_error(inputs)
	if (locale === "zh") return zh_admin_ops_dl_col_error(inputs)
	if (locale === "ja") return ja_admin_ops_dl_col_error(inputs)
	return en_admin_ops_dl_col_error(inputs)
});
