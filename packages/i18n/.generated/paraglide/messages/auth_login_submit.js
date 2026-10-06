/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Login_SubmitInputs */

const en_auth_login_submit = /** @type {(inputs: Auth_Login_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log in`)
};

const es_auth_login_submit = /** @type {(inputs: Auth_Login_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Iniciar sesión`)
};

const de_auth_login_submit = /** @type {(inputs: Auth_Login_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anmelden`)
};

const fr_auth_login_submit = /** @type {(inputs: Auth_Login_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se connecter`)
};

const it_auth_login_submit = /** @type {(inputs: Auth_Login_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accedi`)
};

const nl_auth_login_submit = /** @type {(inputs: Auth_Login_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inloggen`)
};

const pl_auth_login_submit = /** @type {(inputs: Auth_Login_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaloguj się`)
};

const pt_auth_login_submit = /** @type {(inputs: Auth_Login_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entrar`)
};

const ru_auth_login_submit = /** @type {(inputs: Auth_Login_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Войти`)
};

const sv_auth_login_submit = /** @type {(inputs: Auth_Login_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logga in`)
};

const tr_auth_login_submit = /** @type {(inputs: Auth_Login_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Giriş yap`)
};

const zh_auth_login_submit = /** @type {(inputs: Auth_Login_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`登录`)
};

const ja_auth_login_submit = /** @type {(inputs: Auth_Login_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ログイン`)
};

/**
* | output |
* | --- |
* | "Log in" |
*
* @param {Auth_Login_SubmitInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_login_submit = /** @type {((inputs?: Auth_Login_SubmitInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Login_SubmitInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_login_submit(inputs)
	if (locale === "de") return de_auth_login_submit(inputs)
	if (locale === "fr") return fr_auth_login_submit(inputs)
	if (locale === "it") return it_auth_login_submit(inputs)
	if (locale === "nl") return nl_auth_login_submit(inputs)
	if (locale === "pl") return pl_auth_login_submit(inputs)
	if (locale === "pt") return pt_auth_login_submit(inputs)
	if (locale === "ru") return ru_auth_login_submit(inputs)
	if (locale === "sv") return sv_auth_login_submit(inputs)
	if (locale === "tr") return tr_auth_login_submit(inputs)
	if (locale === "zh") return zh_auth_login_submit(inputs)
	if (locale === "ja") return ja_auth_login_submit(inputs)
	return en_auth_login_submit(inputs)
});
