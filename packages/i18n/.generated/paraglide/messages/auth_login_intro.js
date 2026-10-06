/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Login_IntroInputs */

const en_auth_login_intro = /** @type {(inputs: Auth_Login_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sign in to your account.`)
};

const es_auth_login_intro = /** @type {(inputs: Auth_Login_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inicia sesión en tu cuenta.`)
};

const de_auth_login_intro = /** @type {(inputs: Auth_Login_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Melde dich bei deinem Konto an.`)
};

const fr_auth_login_intro = /** @type {(inputs: Auth_Login_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connectez-vous à votre compte.`)
};

const it_auth_login_intro = /** @type {(inputs: Auth_Login_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accedi al tuo account.`)
};

const nl_auth_login_intro = /** @type {(inputs: Auth_Login_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log in op je account.`)
};

const pl_auth_login_intro = /** @type {(inputs: Auth_Login_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaloguj się na swoje konto.`)
};

const pt_auth_login_intro = /** @type {(inputs: Auth_Login_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entre na sua conta.`)
};

const ru_auth_login_intro = /** @type {(inputs: Auth_Login_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Войдите в свой аккаунт.`)
};

const sv_auth_login_intro = /** @type {(inputs: Auth_Login_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logga in på ditt konto.`)
};

const tr_auth_login_intro = /** @type {(inputs: Auth_Login_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hesabına giriş yap.`)
};

const zh_auth_login_intro = /** @type {(inputs: Auth_Login_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`登录你的账号。`)
};

const ja_auth_login_intro = /** @type {(inputs: Auth_Login_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アカウントにログインしてください。`)
};

/**
* | output |
* | --- |
* | "Sign in to your account." |
*
* @param {Auth_Login_IntroInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_login_intro = /** @type {((inputs?: Auth_Login_IntroInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Login_IntroInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_login_intro(inputs)
	if (locale === "de") return de_auth_login_intro(inputs)
	if (locale === "fr") return fr_auth_login_intro(inputs)
	if (locale === "it") return it_auth_login_intro(inputs)
	if (locale === "nl") return nl_auth_login_intro(inputs)
	if (locale === "pl") return pl_auth_login_intro(inputs)
	if (locale === "pt") return pt_auth_login_intro(inputs)
	if (locale === "ru") return ru_auth_login_intro(inputs)
	if (locale === "sv") return sv_auth_login_intro(inputs)
	if (locale === "tr") return tr_auth_login_intro(inputs)
	if (locale === "zh") return zh_auth_login_intro(inputs)
	if (locale === "ja") return ja_auth_login_intro(inputs)
	return en_auth_login_intro(inputs)
});
