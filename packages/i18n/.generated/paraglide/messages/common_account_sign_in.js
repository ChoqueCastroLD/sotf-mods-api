/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Account_Sign_InInputs */

const en_common_account_sign_in = /** @type {(inputs: Common_Account_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sign in`)
};

const es_common_account_sign_in = /** @type {(inputs: Common_Account_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Iniciar sesión`)
};

const de_common_account_sign_in = /** @type {(inputs: Common_Account_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anmelden`)
};

const fr_common_account_sign_in = /** @type {(inputs: Common_Account_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se connecter`)
};

const it_common_account_sign_in = /** @type {(inputs: Common_Account_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accedi`)
};

const nl_common_account_sign_in = /** @type {(inputs: Common_Account_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inloggen`)
};

const pl_common_account_sign_in = /** @type {(inputs: Common_Account_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaloguj się`)
};

const pt_common_account_sign_in = /** @type {(inputs: Common_Account_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entrar`)
};

const ru_common_account_sign_in = /** @type {(inputs: Common_Account_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Войти`)
};

const sv_common_account_sign_in = /** @type {(inputs: Common_Account_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logga in`)
};

const tr_common_account_sign_in = /** @type {(inputs: Common_Account_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Giriş yap`)
};

const zh_common_account_sign_in = /** @type {(inputs: Common_Account_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`登录`)
};

const ja_common_account_sign_in = /** @type {(inputs: Common_Account_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ログイン`)
};

/**
* | output |
* | --- |
* | "Sign in" |
*
* @param {Common_Account_Sign_InInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_account_sign_in = /** @type {((inputs?: Common_Account_Sign_InInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Account_Sign_InInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_account_sign_in(inputs)
	if (locale === "de") return de_common_account_sign_in(inputs)
	if (locale === "fr") return fr_common_account_sign_in(inputs)
	if (locale === "it") return it_common_account_sign_in(inputs)
	if (locale === "nl") return nl_common_account_sign_in(inputs)
	if (locale === "pl") return pl_common_account_sign_in(inputs)
	if (locale === "pt") return pt_common_account_sign_in(inputs)
	if (locale === "ru") return ru_common_account_sign_in(inputs)
	if (locale === "sv") return sv_common_account_sign_in(inputs)
	if (locale === "tr") return tr_common_account_sign_in(inputs)
	if (locale === "zh") return zh_common_account_sign_in(inputs)
	if (locale === "ja") return ja_common_account_sign_in(inputs)
	return en_common_account_sign_in(inputs)
});
