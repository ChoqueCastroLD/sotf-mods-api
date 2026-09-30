/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Email_InvalidInputs */

const en_settings_email_invalid = /** @type {(inputs: Settings_Email_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enter a valid email address.`)
};

const es_settings_email_invalid = /** @type {(inputs: Settings_Email_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escribe un correo electrónico válido.`)
};

const de_settings_email_invalid = /** @type {(inputs: Settings_Email_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gib eine gültige E-Mail-Adresse ein.`)
};

const fr_settings_email_invalid = /** @type {(inputs: Settings_Email_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saisissez une adresse e-mail valide.`)
};

const it_settings_email_invalid = /** @type {(inputs: Settings_Email_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inserisci un indirizzo email valido.`)
};

const nl_settings_email_invalid = /** @type {(inputs: Settings_Email_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voer een geldig e-mailadres in.`)
};

const pl_settings_email_invalid = /** @type {(inputs: Settings_Email_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wpisz poprawny adres e-mail.`)
};

const pt_settings_email_invalid = /** @type {(inputs: Settings_Email_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Digite um endereço de e-mail válido.`)
};

const ru_settings_email_invalid = /** @type {(inputs: Settings_Email_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Введите корректный адрес почты.`)
};

const sv_settings_email_invalid = /** @type {(inputs: Settings_Email_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ange en giltig e-postadress.`)
};

const tr_settings_email_invalid = /** @type {(inputs: Settings_Email_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geçerli bir e-posta adresi gir.`)
};

const zh_settings_email_invalid = /** @type {(inputs: Settings_Email_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请输入有效的邮箱地址。`)
};

const ja_settings_email_invalid = /** @type {(inputs: Settings_Email_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`有効なメールアドレスを入力してください。`)
};

/**
* | output |
* | --- |
* | "Enter a valid email address." |
*
* @param {Settings_Email_InvalidInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_email_invalid = /** @type {((inputs?: Settings_Email_InvalidInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Email_InvalidInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_email_invalid(inputs)
	if (locale === "de") return de_settings_email_invalid(inputs)
	if (locale === "fr") return fr_settings_email_invalid(inputs)
	if (locale === "it") return it_settings_email_invalid(inputs)
	if (locale === "nl") return nl_settings_email_invalid(inputs)
	if (locale === "pl") return pl_settings_email_invalid(inputs)
	if (locale === "pt") return pt_settings_email_invalid(inputs)
	if (locale === "ru") return ru_settings_email_invalid(inputs)
	if (locale === "sv") return sv_settings_email_invalid(inputs)
	if (locale === "tr") return tr_settings_email_invalid(inputs)
	if (locale === "zh") return zh_settings_email_invalid(inputs)
	if (locale === "ja") return ja_settings_email_invalid(inputs)
	return en_settings_email_invalid(inputs)
});
