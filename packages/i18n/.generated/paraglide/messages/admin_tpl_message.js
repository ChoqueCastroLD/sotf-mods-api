/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ language: NonNullable<unknown> }} Admin_Tpl_MessageInputs */

const en_admin_tpl_message = /** @type {(inputs: Admin_Tpl_MessageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Message (${i?.language})`)
};

const es_admin_tpl_message = /** @type {(inputs: Admin_Tpl_MessageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mensaje (${i?.language})`)
};

const de_admin_tpl_message = /** @type {(inputs: Admin_Tpl_MessageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nachricht (${i?.language})`)
};

const fr_admin_tpl_message = /** @type {(inputs: Admin_Tpl_MessageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Message (${i?.language})`)
};

const it_admin_tpl_message = /** @type {(inputs: Admin_Tpl_MessageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Messaggio (${i?.language})`)
};

const nl_admin_tpl_message = /** @type {(inputs: Admin_Tpl_MessageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bericht (${i?.language})`)
};

const pl_admin_tpl_message = /** @type {(inputs: Admin_Tpl_MessageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wiadomość (${i?.language})`)
};

const pt_admin_tpl_message = /** @type {(inputs: Admin_Tpl_MessageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mensagem (${i?.language})`)
};

const ru_admin_tpl_message = /** @type {(inputs: Admin_Tpl_MessageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Текст (${i?.language})`)
};

const sv_admin_tpl_message = /** @type {(inputs: Admin_Tpl_MessageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Meddelande (${i?.language})`)
};

const tr_admin_tpl_message = /** @type {(inputs: Admin_Tpl_MessageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mesaj (${i?.language})`)
};

const zh_admin_tpl_message = /** @type {(inputs: Admin_Tpl_MessageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`内容（${i?.language}）`)
};

const ja_admin_tpl_message = /** @type {(inputs: Admin_Tpl_MessageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`メッセージ（${i?.language}）`)
};

/**
* | output |
* | --- |
* | "Message ({language})" |
*
* @param {Admin_Tpl_MessageInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tpl_message = /** @type {((inputs: Admin_Tpl_MessageInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tpl_MessageInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tpl_message(inputs)
	if (locale === "de") return de_admin_tpl_message(inputs)
	if (locale === "fr") return fr_admin_tpl_message(inputs)
	if (locale === "it") return it_admin_tpl_message(inputs)
	if (locale === "nl") return nl_admin_tpl_message(inputs)
	if (locale === "pl") return pl_admin_tpl_message(inputs)
	if (locale === "pt") return pt_admin_tpl_message(inputs)
	if (locale === "ru") return ru_admin_tpl_message(inputs)
	if (locale === "sv") return sv_admin_tpl_message(inputs)
	if (locale === "tr") return tr_admin_tpl_message(inputs)
	if (locale === "zh") return zh_admin_tpl_message(inputs)
	if (locale === "ja") return ja_admin_tpl_message(inputs)
	return en_admin_tpl_message(inputs)
});
