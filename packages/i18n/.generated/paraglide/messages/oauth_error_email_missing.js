/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Oauth_Error_Email_MissingInputs */

const en_oauth_error_email_missing = /** @type {(inputs: Oauth_Error_Email_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord didn’t share an email address for your account.`)
};

const es_oauth_error_email_missing = /** @type {(inputs: Oauth_Error_Email_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord no compartió una dirección de correo de tu cuenta.`)
};

const de_oauth_error_email_missing = /** @type {(inputs: Oauth_Error_Email_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord hat keine E-Mail-Adresse für dein Konto weitergegeben.`)
};

const fr_oauth_error_email_missing = /** @type {(inputs: Oauth_Error_Email_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord n’a fourni aucune adresse e-mail pour votre compte.`)
};

const it_oauth_error_email_missing = /** @type {(inputs: Oauth_Error_Email_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord non ha condiviso un indirizzo email per il tuo account.`)
};

const nl_oauth_error_email_missing = /** @type {(inputs: Oauth_Error_Email_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord heeft geen e-mailadres voor je account gedeeld.`)
};

const pl_oauth_error_email_missing = /** @type {(inputs: Oauth_Error_Email_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord nie udostępnił adresu e-mail Twojego konta.`)
};

const pt_oauth_error_email_missing = /** @type {(inputs: Oauth_Error_Email_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O Discord não compartilhou um endereço de e-mail da sua conta.`)
};

const ru_oauth_error_email_missing = /** @type {(inputs: Oauth_Error_Email_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord не передал адрес электронной почты вашей учётной записи.`)
};

const sv_oauth_error_email_missing = /** @type {(inputs: Oauth_Error_Email_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord delade ingen e-postadress för ditt konto.`)
};

const tr_oauth_error_email_missing = /** @type {(inputs: Oauth_Error_Email_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord hesabın için bir e-posta adresi paylaşmadı.`)
};

const zh_oauth_error_email_missing = /** @type {(inputs: Oauth_Error_Email_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord 没有提供你账号的邮箱地址。`)
};

const ja_oauth_error_email_missing = /** @type {(inputs: Oauth_Error_Email_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord からアカウントのメールアドレスが共有されませんでした。`)
};

/**
* | output |
* | --- |
* | "Discord didn’t share an email address for your account." |
*
* @param {Oauth_Error_Email_MissingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const oauth_error_email_missing = /** @type {((inputs?: Oauth_Error_Email_MissingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Oauth_Error_Email_MissingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_oauth_error_email_missing(inputs)
	if (locale === "de") return de_oauth_error_email_missing(inputs)
	if (locale === "fr") return fr_oauth_error_email_missing(inputs)
	if (locale === "it") return it_oauth_error_email_missing(inputs)
	if (locale === "nl") return nl_oauth_error_email_missing(inputs)
	if (locale === "pl") return pl_oauth_error_email_missing(inputs)
	if (locale === "pt") return pt_oauth_error_email_missing(inputs)
	if (locale === "ru") return ru_oauth_error_email_missing(inputs)
	if (locale === "sv") return sv_oauth_error_email_missing(inputs)
	if (locale === "tr") return tr_oauth_error_email_missing(inputs)
	if (locale === "zh") return zh_oauth_error_email_missing(inputs)
	if (locale === "ja") return ja_oauth_error_email_missing(inputs)
	return en_oauth_error_email_missing(inputs)
});
