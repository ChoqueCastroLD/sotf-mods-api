/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Auth_Reset_BodyInputs */

const en_emails_auth_reset_body = /** @type {(inputs: Emails_Auth_Reset_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Someone, hopefully you, asked to reset the password of your account.`)
};

const es_emails_auth_reset_body = /** @type {(inputs: Emails_Auth_Reset_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alguien, esperamos que tú, ha pedido restablecer la contraseña de tu cuenta.`)
};

const de_emails_auth_reset_body = /** @type {(inputs: Emails_Auth_Reset_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jemand, hoffentlich du, hat angefordert, das Passwort deines Kontos zurückzusetzen.`)
};

const fr_emails_auth_reset_body = /** @type {(inputs: Emails_Auth_Reset_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quelqu’un, vous espérons-le, a demandé à réinitialiser le mot de passe de votre compte.`)
};

const it_emails_auth_reset_body = /** @type {(inputs: Emails_Auth_Reset_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualcuno, speriamo tu, ha chiesto di reimpostare la password del tuo account.`)
};

const nl_emails_auth_reset_body = /** @type {(inputs: Emails_Auth_Reset_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Iemand, hopelijk jij, heeft gevraagd het wachtwoord van je account opnieuw in te stellen.`)
};

const pl_emails_auth_reset_body = /** @type {(inputs: Emails_Auth_Reset_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ktoś, mamy nadzieję, że Ty, poprosił o zresetowanie hasła do Twojego konta.`)
};

const pt_emails_auth_reset_body = /** @type {(inputs: Emails_Auth_Reset_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alguém, esperamos que você, pediu para redefinir a senha da sua conta.`)
};

const ru_emails_auth_reset_body = /** @type {(inputs: Emails_Auth_Reset_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Кто-то (надеемся, вы) запросил сброс пароля вашего аккаунта.`)
};

const sv_emails_auth_reset_body = /** @type {(inputs: Emails_Auth_Reset_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Någon, förhoppningsvis du, har bett om att återställa lösenordet för ditt konto.`)
};

const tr_emails_auth_reset_body = /** @type {(inputs: Emails_Auth_Reset_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Birisi, umarız sen, hesabının şifresini sıfırlamak istedi.`)
};

const zh_emails_auth_reset_body = /** @type {(inputs: Emails_Auth_Reset_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`有人（希望是你）申请重置你账号的密码。`)
};

const ja_emails_auth_reset_body = /** @type {(inputs: Emails_Auth_Reset_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`あなたのアカウントのパスワード再設定がリクエストされました。`)
};

/**
* | output |
* | --- |
* | "Someone, hopefully you, asked to reset the password of your account." |
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
