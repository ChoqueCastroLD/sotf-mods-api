/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Auth_Reset_BodyInputs */

const en_emails_auth_reset_body = /** @type {(inputs: Emails_Auth_Reset_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A password reset was requested for your account.`)
};

const es_emails_auth_reset_body = /** @type {(inputs: Emails_Auth_Reset_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se ha solicitado restablecer la contraseña de tu cuenta.`)
};

const de_emails_auth_reset_body = /** @type {(inputs: Emails_Auth_Reset_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Für dein Konto wurde ein Zurücksetzen des Passworts angefordert.`)
};

const fr_emails_auth_reset_body = /** @type {(inputs: Emails_Auth_Reset_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La réinitialisation du mot de passe de votre compte a été demandée.`)
};

const it_emails_auth_reset_body = /** @type {(inputs: Emails_Auth_Reset_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`È stato richiesto di reimpostare la password del tuo account.`)
};

const nl_emails_auth_reset_body = /** @type {(inputs: Emails_Auth_Reset_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Er is gevraagd om het wachtwoord van je account opnieuw in te stellen.`)
};

const pl_emails_auth_reset_body = /** @type {(inputs: Emails_Auth_Reset_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Poproszono o zresetowanie hasła do Twojego konta.`)
};

const pt_emails_auth_reset_body = /** @type {(inputs: Emails_Auth_Reset_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Foi solicitada a redefinição da senha da sua conta.`)
};

const ru_emails_auth_reset_body = /** @type {(inputs: Emails_Auth_Reset_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Для вашего аккаунта запрошен сброс пароля.`)
};

const sv_emails_auth_reset_body = /** @type {(inputs: Emails_Auth_Reset_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det har begärts att lösenordet för ditt konto ska återställas.`)
};

const tr_emails_auth_reset_body = /** @type {(inputs: Emails_Auth_Reset_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hesabının şifresinin sıfırlanması istendi.`)
};

const zh_emails_auth_reset_body = /** @type {(inputs: Emails_Auth_Reset_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`有人申请重置你账号的密码。`)
};

const ja_emails_auth_reset_body = /** @type {(inputs: Emails_Auth_Reset_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`あなたのアカウントのパスワード再設定がリクエストされました。`)
};

/**
* | output |
* | --- |
* | "A password reset was requested for your account." |
*
* @param {Emails_Auth_Reset_BodyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_reset_body = /** @type {((inputs?: Emails_Auth_Reset_BodyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Reset_BodyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_reset_body(inputs)
	if (locale === "de") return de_emails_auth_reset_body(inputs)
	if (locale === "fr") return fr_emails_auth_reset_body(inputs)
	if (locale === "it") return it_emails_auth_reset_body(inputs)
	if (locale === "nl") return nl_emails_auth_reset_body(inputs)
	if (locale === "pl") return pl_emails_auth_reset_body(inputs)
	if (locale === "pt") return pt_emails_auth_reset_body(inputs)
	if (locale === "ru") return ru_emails_auth_reset_body(inputs)
	if (locale === "sv") return sv_emails_auth_reset_body(inputs)
	if (locale === "tr") return tr_emails_auth_reset_body(inputs)
	if (locale === "zh") return zh_emails_auth_reset_body(inputs)
	if (locale === "ja") return ja_emails_auth_reset_body(inputs)
	return en_emails_auth_reset_body(inputs)
});
