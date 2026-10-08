/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ops_Dl_No_ErrorInputs */

const en_admin_ops_dl_no_error = /** @type {(inputs: Admin_Ops_Dl_No_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No error message`)
};

const es_admin_ops_dl_no_error = /** @type {(inputs: Admin_Ops_Dl_No_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin mensaje de error`)
};

const de_admin_ops_dl_no_error = /** @type {(inputs: Admin_Ops_Dl_No_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine Fehlermeldung`)
};

const fr_admin_ops_dl_no_error = /** @type {(inputs: Admin_Ops_Dl_No_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun message d’erreur`)
};

const it_admin_ops_dl_no_error = /** @type {(inputs: Admin_Ops_Dl_No_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessun messaggio di errore`)
};

const nl_admin_ops_dl_no_error = /** @type {(inputs: Admin_Ops_Dl_No_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen foutmelding`)
};

const pl_admin_ops_dl_no_error = /** @type {(inputs: Admin_Ops_Dl_No_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak komunikatu o błędzie`)
};

const pt_admin_ops_dl_no_error = /** @type {(inputs: Admin_Ops_Dl_No_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sem mensagem de erro`)
};

const ru_admin_ops_dl_no_error = /** @type {(inputs: Admin_Ops_Dl_No_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нет сообщения об ошибке`)
};

const sv_admin_ops_dl_no_error = /** @type {(inputs: Admin_Ops_Dl_No_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inget felmeddelande`)
};

const tr_admin_ops_dl_no_error = /** @type {(inputs: Admin_Ops_Dl_No_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hata mesajı yok`)
};

const zh_admin_ops_dl_no_error = /** @type {(inputs: Admin_Ops_Dl_No_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有错误信息`)
};

const ja_admin_ops_dl_no_error = /** @type {(inputs: Admin_Ops_Dl_No_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`エラーメッセージなし`)
};

/**
* | output |
* | --- |
* | "No error message" |
*
* @param {Admin_Ops_Dl_No_ErrorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ops_dl_no_error = /** @type {((inputs?: Admin_Ops_Dl_No_ErrorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_Dl_No_ErrorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ops_dl_no_error(inputs)
	if (locale === "de") return de_admin_ops_dl_no_error(inputs)
	if (locale === "fr") return fr_admin_ops_dl_no_error(inputs)
	if (locale === "it") return it_admin_ops_dl_no_error(inputs)
	if (locale === "nl") return nl_admin_ops_dl_no_error(inputs)
	if (locale === "pl") return pl_admin_ops_dl_no_error(inputs)
	if (locale === "pt") return pt_admin_ops_dl_no_error(inputs)
	if (locale === "ru") return ru_admin_ops_dl_no_error(inputs)
	if (locale === "sv") return sv_admin_ops_dl_no_error(inputs)
	if (locale === "tr") return tr_admin_ops_dl_no_error(inputs)
	if (locale === "zh") return zh_admin_ops_dl_no_error(inputs)
	if (locale === "ja") return ja_admin_ops_dl_no_error(inputs)
	return en_admin_ops_dl_no_error(inputs)
});
