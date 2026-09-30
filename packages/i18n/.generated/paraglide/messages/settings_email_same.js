/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Email_SameInputs */

const en_settings_email_same = /** @type {(inputs: Settings_Email_SameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`That’s already your email address.`)
};

const es_settings_email_same = /** @type {(inputs: Settings_Email_SameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ese ya es tu correo electrónico.`)
};

const de_settings_email_same = /** @type {(inputs: Settings_Email_SameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das ist bereits deine E-Mail-Adresse.`)
};

const fr_settings_email_same = /** @type {(inputs: Settings_Email_SameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`C’est déjà votre adresse e-mail.`)
};

const it_settings_email_same = /** @type {(inputs: Settings_Email_SameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questo è già il tuo indirizzo email.`)
};

const nl_settings_email_same = /** @type {(inputs: Settings_Email_SameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dat is al je e-mailadres.`)
};

const pl_settings_email_same = /** @type {(inputs: Settings_Email_SameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`To już jest twój adres e-mail.`)
};

const pt_settings_email_same = /** @type {(inputs: Settings_Email_SameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esse já é o seu endereço de e-mail.`)
};

const ru_settings_email_same = /** @type {(inputs: Settings_Email_SameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Это уже ваш адрес почты.`)
};

const sv_settings_email_same = /** @type {(inputs: Settings_Email_SameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det är redan din e-postadress.`)
};

const tr_settings_email_same = /** @type {(inputs: Settings_Email_SameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu zaten e-posta adresin.`)
};

const zh_settings_email_same = /** @type {(inputs: Settings_Email_SameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`这已经是你的邮箱地址。`)
};

const ja_settings_email_same = /** @type {(inputs: Settings_Email_SameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すでにこのメールアドレスを使っています。`)
};

/**
* | output |
* | --- |
* | "That’s already your email address." |
*
* @param {Settings_Email_SameInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_email_same = /** @type {((inputs?: Settings_Email_SameInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Email_SameInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_email_same(inputs)
	if (locale === "de") return de_settings_email_same(inputs)
	if (locale === "fr") return fr_settings_email_same(inputs)
	if (locale === "it") return it_settings_email_same(inputs)
	if (locale === "nl") return nl_settings_email_same(inputs)
	if (locale === "pl") return pl_settings_email_same(inputs)
	if (locale === "pt") return pt_settings_email_same(inputs)
	if (locale === "ru") return ru_settings_email_same(inputs)
	if (locale === "sv") return sv_settings_email_same(inputs)
	if (locale === "tr") return tr_settings_email_same(inputs)
	if (locale === "zh") return zh_settings_email_same(inputs)
	if (locale === "ja") return ja_settings_email_same(inputs)
	return en_settings_email_same(inputs)
});
