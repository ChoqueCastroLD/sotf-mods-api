/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Tpl_Error_KeyInputs */

const en_admin_tpl_error_key = /** @type {(inputs: Admin_Tpl_Error_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invalid key.`)
};

const es_admin_tpl_error_key = /** @type {(inputs: Admin_Tpl_Error_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clave no válida.`)
};

const de_admin_tpl_error_key = /** @type {(inputs: Admin_Tpl_Error_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ungültiger Schlüssel.`)
};

const fr_admin_tpl_error_key = /** @type {(inputs: Admin_Tpl_Error_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clé invalide.`)
};

const it_admin_tpl_error_key = /** @type {(inputs: Admin_Tpl_Error_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chiave non valida.`)
};

const nl_admin_tpl_error_key = /** @type {(inputs: Admin_Tpl_Error_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ongeldige sleutel.`)
};

const pl_admin_tpl_error_key = /** @type {(inputs: Admin_Tpl_Error_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieprawidłowy klucz.`)
};

const pt_admin_tpl_error_key = /** @type {(inputs: Admin_Tpl_Error_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chave inválida.`)
};

const ru_admin_tpl_error_key = /** @type {(inputs: Admin_Tpl_Error_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Неверный ключ.`)
};

const sv_admin_tpl_error_key = /** @type {(inputs: Admin_Tpl_Error_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ogiltig nyckel.`)
};

const tr_admin_tpl_error_key = /** @type {(inputs: Admin_Tpl_Error_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geçersiz anahtar.`)
};

const zh_admin_tpl_error_key = /** @type {(inputs: Admin_Tpl_Error_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`键无效。`)
};

const ja_admin_tpl_error_key = /** @type {(inputs: Admin_Tpl_Error_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`無効なキーです。`)
};

/**
* | output |
* | --- |
* | "Invalid key." |
*
* @param {Admin_Tpl_Error_KeyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tpl_error_key = /** @type {((inputs?: Admin_Tpl_Error_KeyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tpl_Error_KeyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tpl_error_key(inputs)
	if (locale === "de") return de_admin_tpl_error_key(inputs)
	if (locale === "fr") return fr_admin_tpl_error_key(inputs)
	if (locale === "it") return it_admin_tpl_error_key(inputs)
	if (locale === "nl") return nl_admin_tpl_error_key(inputs)
	if (locale === "pl") return pl_admin_tpl_error_key(inputs)
	if (locale === "pt") return pt_admin_tpl_error_key(inputs)
	if (locale === "ru") return ru_admin_tpl_error_key(inputs)
	if (locale === "sv") return sv_admin_tpl_error_key(inputs)
	if (locale === "tr") return tr_admin_tpl_error_key(inputs)
	if (locale === "zh") return zh_admin_tpl_error_key(inputs)
	if (locale === "ja") return ja_admin_tpl_error_key(inputs)
	return en_admin_tpl_error_key(inputs)
});
