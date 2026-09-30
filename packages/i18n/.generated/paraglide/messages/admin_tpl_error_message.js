/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Tpl_Error_MessageInputs */

const en_admin_tpl_error_message = /** @type {(inputs: Admin_Tpl_Error_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The English message is required.`)
};

const es_admin_tpl_error_message = /** @type {(inputs: Admin_Tpl_Error_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El mensaje en inglés es obligatorio.`)
};

const de_admin_tpl_error_message = /** @type {(inputs: Admin_Tpl_Error_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die englische Nachricht ist Pflicht.`)
};

const fr_admin_tpl_error_message = /** @type {(inputs: Admin_Tpl_Error_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le message en anglais est obligatoire.`)
};

const it_admin_tpl_error_message = /** @type {(inputs: Admin_Tpl_Error_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il messaggio in inglese è obbligatorio.`)
};

const nl_admin_tpl_error_message = /** @type {(inputs: Admin_Tpl_Error_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het Engelse bericht is verplicht.`)
};

const pl_admin_tpl_error_message = /** @type {(inputs: Admin_Tpl_Error_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wiadomość po angielsku jest wymagana.`)
};

const pt_admin_tpl_error_message = /** @type {(inputs: Admin_Tpl_Error_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A mensagem em inglês é obrigatória.`)
};

const ru_admin_tpl_error_message = /** @type {(inputs: Admin_Tpl_Error_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Английский текст обязателен.`)
};

const sv_admin_tpl_error_message = /** @type {(inputs: Admin_Tpl_Error_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det engelska meddelandet krävs.`)
};

const tr_admin_tpl_error_message = /** @type {(inputs: Admin_Tpl_Error_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İngilizce mesaj zorunlu.`)
};

const zh_admin_tpl_error_message = /** @type {(inputs: Admin_Tpl_Error_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`英文内容为必填项。`)
};

const ja_admin_tpl_error_message = /** @type {(inputs: Admin_Tpl_Error_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`英語のメッセージは必須です。`)
};

/**
* | output |
* | --- |
* | "The English message is required." |
*
* @param {Admin_Tpl_Error_MessageInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tpl_error_message = /** @type {((inputs?: Admin_Tpl_Error_MessageInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tpl_Error_MessageInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tpl_error_message(inputs)
	if (locale === "de") return de_admin_tpl_error_message(inputs)
	if (locale === "fr") return fr_admin_tpl_error_message(inputs)
	if (locale === "it") return it_admin_tpl_error_message(inputs)
	if (locale === "nl") return nl_admin_tpl_error_message(inputs)
	if (locale === "pl") return pl_admin_tpl_error_message(inputs)
	if (locale === "pt") return pt_admin_tpl_error_message(inputs)
	if (locale === "ru") return ru_admin_tpl_error_message(inputs)
	if (locale === "sv") return sv_admin_tpl_error_message(inputs)
	if (locale === "tr") return tr_admin_tpl_error_message(inputs)
	if (locale === "zh") return zh_admin_tpl_error_message(inputs)
	if (locale === "ja") return ja_admin_tpl_error_message(inputs)
	return en_admin_tpl_error_message(inputs)
});
