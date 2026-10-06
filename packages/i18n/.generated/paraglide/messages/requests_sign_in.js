/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_Sign_InInputs */

const en_requests_sign_in = /** @type {(inputs: Requests_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log in`)
};

const es_requests_sign_in = /** @type {(inputs: Requests_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Iniciar sesión`)
};

const de_requests_sign_in = /** @type {(inputs: Requests_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anmelden`)
};

const fr_requests_sign_in = /** @type {(inputs: Requests_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se connecter`)
};

const it_requests_sign_in = /** @type {(inputs: Requests_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accedi`)
};

const nl_requests_sign_in = /** @type {(inputs: Requests_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inloggen`)
};

const pl_requests_sign_in = /** @type {(inputs: Requests_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaloguj się`)
};

const pt_requests_sign_in = /** @type {(inputs: Requests_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entrar`)
};

const ru_requests_sign_in = /** @type {(inputs: Requests_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Войти`)
};

const sv_requests_sign_in = /** @type {(inputs: Requests_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logga in`)
};

const tr_requests_sign_in = /** @type {(inputs: Requests_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Giriş yap`)
};

const zh_requests_sign_in = /** @type {(inputs: Requests_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`登录`)
};

const ja_requests_sign_in = /** @type {(inputs: Requests_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ログイン`)
};

/**
* | output |
* | --- |
* | "Log in" |
*
* @param {Requests_Sign_InInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_sign_in = /** @type {((inputs?: Requests_Sign_InInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Sign_InInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_sign_in(inputs)
	if (locale === "de") return de_requests_sign_in(inputs)
	if (locale === "fr") return fr_requests_sign_in(inputs)
	if (locale === "it") return it_requests_sign_in(inputs)
	if (locale === "nl") return nl_requests_sign_in(inputs)
	if (locale === "pl") return pl_requests_sign_in(inputs)
	if (locale === "pt") return pt_requests_sign_in(inputs)
	if (locale === "ru") return ru_requests_sign_in(inputs)
	if (locale === "sv") return sv_requests_sign_in(inputs)
	if (locale === "tr") return tr_requests_sign_in(inputs)
	if (locale === "zh") return zh_requests_sign_in(inputs)
	if (locale === "ja") return ja_requests_sign_in(inputs)
	return en_requests_sign_in(inputs)
});
