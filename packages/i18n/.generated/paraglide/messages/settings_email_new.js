/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Email_NewInputs */

const en_settings_email_new = /** @type {(inputs: Settings_Email_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New email address`)
};

const es_settings_email_new = /** @type {(inputs: Settings_Email_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Correo electrónico nuevo`)
};

const de_settings_email_new = /** @type {(inputs: Settings_Email_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neue E-Mail-Adresse`)
};

const fr_settings_email_new = /** @type {(inputs: Settings_Email_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nouvelle adresse e-mail`)
};

const it_settings_email_new = /** @type {(inputs: Settings_Email_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuovo indirizzo email`)
};

const nl_settings_email_new = /** @type {(inputs: Settings_Email_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuw e-mailadres`)
};

const pl_settings_email_new = /** @type {(inputs: Settings_Email_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nowy adres e-mail`)
};

const pt_settings_email_new = /** @type {(inputs: Settings_Email_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Novo endereço de e-mail`)
};

const ru_settings_email_new = /** @type {(inputs: Settings_Email_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новый адрес почты`)
};

const sv_settings_email_new = /** @type {(inputs: Settings_Email_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ny e-postadress`)
};

const tr_settings_email_new = /** @type {(inputs: Settings_Email_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni e-posta adresi`)
};

const zh_settings_email_new = /** @type {(inputs: Settings_Email_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新邮箱地址`)
};

const ja_settings_email_new = /** @type {(inputs: Settings_Email_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しいメールアドレス`)
};

/**
* | output |
* | --- |
* | "New email address" |
*
* @param {Settings_Email_NewInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_email_new = /** @type {((inputs?: Settings_Email_NewInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Email_NewInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_email_new(inputs)
	if (locale === "de") return de_settings_email_new(inputs)
	if (locale === "fr") return fr_settings_email_new(inputs)
	if (locale === "it") return it_settings_email_new(inputs)
	if (locale === "nl") return nl_settings_email_new(inputs)
	if (locale === "pl") return pl_settings_email_new(inputs)
	if (locale === "pt") return pt_settings_email_new(inputs)
	if (locale === "ru") return ru_settings_email_new(inputs)
	if (locale === "sv") return sv_settings_email_new(inputs)
	if (locale === "tr") return tr_settings_email_new(inputs)
	if (locale === "zh") return zh_settings_email_new(inputs)
	if (locale === "ja") return ja_settings_email_new(inputs)
	return en_settings_email_new(inputs)
});
