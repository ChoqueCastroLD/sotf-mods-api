/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Auth_New_Login_SubjectInputs */

const en_emails_auth_new_login_subject = /** @type {(inputs: Emails_Auth_New_Login_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New login to your SOTF Mods account`)
};

const es_emails_auth_new_login_subject = /** @type {(inputs: Emails_Auth_New_Login_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuevo inicio de sesión en tu cuenta de SOTF Mods`)
};

const de_emails_auth_new_login_subject = /** @type {(inputs: Emails_Auth_New_Login_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neue Anmeldung bei deinem SOTF-Mods-Konto`)
};

const fr_emails_auth_new_login_subject = /** @type {(inputs: Emails_Auth_New_Login_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nouvelle connexion à votre compte SOTF Mods`)
};

const it_emails_auth_new_login_subject = /** @type {(inputs: Emails_Auth_New_Login_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuovo accesso al tuo account SOTF Mods`)
};

const nl_emails_auth_new_login_subject = /** @type {(inputs: Emails_Auth_New_Login_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuwe aanmelding bij je SOTF Mods-account`)
};

const pl_emails_auth_new_login_subject = /** @type {(inputs: Emails_Auth_New_Login_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nowe logowanie na Twoje konto SOTF Mods`)
};

const pt_emails_auth_new_login_subject = /** @type {(inputs: Emails_Auth_New_Login_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Novo login na sua conta SOTF Mods`)
};

const ru_emails_auth_new_login_subject = /** @type {(inputs: Emails_Auth_New_Login_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новый вход в ваш аккаунт SOTF Mods`)
};

const sv_emails_auth_new_login_subject = /** @type {(inputs: Emails_Auth_New_Login_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ny inloggning på ditt SOTF Mods-konto`)
};

const tr_emails_auth_new_login_subject = /** @type {(inputs: Emails_Auth_New_Login_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods hesabına yeni bir giriş yapıldı`)
};

const zh_emails_auth_new_login_subject = /** @type {(inputs: Emails_Auth_New_Login_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的 SOTF Mods 账号有新的登录`)
};

const ja_emails_auth_new_login_subject = /** @type {(inputs: Emails_Auth_New_Login_SubjectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods アカウントへの新しいログイン`)
};

/**
* | output |
* | --- |
* | "New login to your SOTF Mods account" |
*
* @param {Emails_Auth_New_Login_SubjectInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_new_login_subject = /** @type {((inputs?: Emails_Auth_New_Login_SubjectInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_New_Login_SubjectInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_new_login_subject(inputs)
	if (locale === "de") return de_emails_auth_new_login_subject(inputs)
	if (locale === "fr") return fr_emails_auth_new_login_subject(inputs)
	if (locale === "it") return it_emails_auth_new_login_subject(inputs)
	if (locale === "nl") return nl_emails_auth_new_login_subject(inputs)
	if (locale === "pl") return pl_emails_auth_new_login_subject(inputs)
	if (locale === "pt") return pt_emails_auth_new_login_subject(inputs)
	if (locale === "ru") return ru_emails_auth_new_login_subject(inputs)
	if (locale === "sv") return sv_emails_auth_new_login_subject(inputs)
	if (locale === "tr") return tr_emails_auth_new_login_subject(inputs)
	if (locale === "zh") return zh_emails_auth_new_login_subject(inputs)
	if (locale === "ja") return ja_emails_auth_new_login_subject(inputs)
	return en_emails_auth_new_login_subject(inputs)
});
