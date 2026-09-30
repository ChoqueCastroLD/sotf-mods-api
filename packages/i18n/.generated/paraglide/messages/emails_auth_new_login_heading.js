/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Auth_New_Login_HeadingInputs */

const en_emails_auth_new_login_heading = /** @type {(inputs: Emails_Auth_New_Login_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New sign-in`)
};

const es_emails_auth_new_login_heading = /** @type {(inputs: Emails_Auth_New_Login_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuevo inicio de sesión`)
};

const de_emails_auth_new_login_heading = /** @type {(inputs: Emails_Auth_New_Login_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neue Anmeldung`)
};

const fr_emails_auth_new_login_heading = /** @type {(inputs: Emails_Auth_New_Login_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nouvelle connexion`)
};

const it_emails_auth_new_login_heading = /** @type {(inputs: Emails_Auth_New_Login_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuovo accesso`)
};

const nl_emails_auth_new_login_heading = /** @type {(inputs: Emails_Auth_New_Login_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuwe aanmelding`)
};

const pl_emails_auth_new_login_heading = /** @type {(inputs: Emails_Auth_New_Login_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nowe logowanie`)
};

const pt_emails_auth_new_login_heading = /** @type {(inputs: Emails_Auth_New_Login_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Novo início de sessão`)
};

const ru_emails_auth_new_login_heading = /** @type {(inputs: Emails_Auth_New_Login_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новый вход`)
};

const sv_emails_auth_new_login_heading = /** @type {(inputs: Emails_Auth_New_Login_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ny inloggning`)
};

const tr_emails_auth_new_login_heading = /** @type {(inputs: Emails_Auth_New_Login_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni giriş`)
};

const zh_emails_auth_new_login_heading = /** @type {(inputs: Emails_Auth_New_Login_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新的登录`)
};

const ja_emails_auth_new_login_heading = /** @type {(inputs: Emails_Auth_New_Login_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しいログイン`)
};

/**
* | output |
* | --- |
* | "New sign-in" |
*
* @param {Emails_Auth_New_Login_HeadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_new_login_heading = /** @type {((inputs?: Emails_Auth_New_Login_HeadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_New_Login_HeadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_new_login_heading(inputs)
	if (locale === "de") return de_emails_auth_new_login_heading(inputs)
	if (locale === "fr") return fr_emails_auth_new_login_heading(inputs)
	if (locale === "it") return it_emails_auth_new_login_heading(inputs)
	if (locale === "nl") return nl_emails_auth_new_login_heading(inputs)
	if (locale === "pl") return pl_emails_auth_new_login_heading(inputs)
	if (locale === "pt") return pt_emails_auth_new_login_heading(inputs)
	if (locale === "ru") return ru_emails_auth_new_login_heading(inputs)
	if (locale === "sv") return sv_emails_auth_new_login_heading(inputs)
	if (locale === "tr") return tr_emails_auth_new_login_heading(inputs)
	if (locale === "zh") return zh_emails_auth_new_login_heading(inputs)
	if (locale === "ja") return ja_emails_auth_new_login_heading(inputs)
	return en_emails_auth_new_login_heading(inputs)
});
