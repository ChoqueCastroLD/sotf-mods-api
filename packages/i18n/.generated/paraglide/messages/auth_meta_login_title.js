/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Meta_Login_TitleInputs */

const en_auth_meta_login_title = /** @type {(inputs: Auth_Meta_Login_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sign in`)
};

const es_auth_meta_login_title = /** @type {(inputs: Auth_Meta_Login_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Iniciar sesión`)
};

const de_auth_meta_login_title = /** @type {(inputs: Auth_Meta_Login_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anmelden`)
};

const fr_auth_meta_login_title = /** @type {(inputs: Auth_Meta_Login_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se connecter`)
};

const it_auth_meta_login_title = /** @type {(inputs: Auth_Meta_Login_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accedi`)
};

const nl_auth_meta_login_title = /** @type {(inputs: Auth_Meta_Login_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inloggen`)
};

const pl_auth_meta_login_title = /** @type {(inputs: Auth_Meta_Login_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaloguj się`)
};

const pt_auth_meta_login_title = /** @type {(inputs: Auth_Meta_Login_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entrar`)
};

const ru_auth_meta_login_title = /** @type {(inputs: Auth_Meta_Login_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вход`)
};

const sv_auth_meta_login_title = /** @type {(inputs: Auth_Meta_Login_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logga in`)
};

const tr_auth_meta_login_title = /** @type {(inputs: Auth_Meta_Login_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Giriş yap`)
};

const zh_auth_meta_login_title = /** @type {(inputs: Auth_Meta_Login_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`登录`)
};

const ja_auth_meta_login_title = /** @type {(inputs: Auth_Meta_Login_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ログイン`)
};

/**
* | output |
* | --- |
* | "Sign in" |
*
* @param {Auth_Meta_Login_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_meta_login_title = /** @type {((inputs?: Auth_Meta_Login_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Meta_Login_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_meta_login_title(inputs)
	if (locale === "de") return de_auth_meta_login_title(inputs)
	if (locale === "fr") return fr_auth_meta_login_title(inputs)
	if (locale === "it") return it_auth_meta_login_title(inputs)
	if (locale === "nl") return nl_auth_meta_login_title(inputs)
	if (locale === "pl") return pl_auth_meta_login_title(inputs)
	if (locale === "pt") return pt_auth_meta_login_title(inputs)
	if (locale === "ru") return ru_auth_meta_login_title(inputs)
	if (locale === "sv") return sv_auth_meta_login_title(inputs)
	if (locale === "tr") return tr_auth_meta_login_title(inputs)
	if (locale === "zh") return zh_auth_meta_login_title(inputs)
	if (locale === "ja") return ja_auth_meta_login_title(inputs)
	return en_auth_meta_login_title(inputs)
});
