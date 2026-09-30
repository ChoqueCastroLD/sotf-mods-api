/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Go_LoginInputs */

const en_cmdk_go_login = /** @type {(inputs: Cmdk_Go_LoginInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sign in`)
};

const es_cmdk_go_login = /** @type {(inputs: Cmdk_Go_LoginInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Iniciar sesión`)
};

const de_cmdk_go_login = /** @type {(inputs: Cmdk_Go_LoginInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anmelden`)
};

const fr_cmdk_go_login = /** @type {(inputs: Cmdk_Go_LoginInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se connecter`)
};

const it_cmdk_go_login = /** @type {(inputs: Cmdk_Go_LoginInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accedi`)
};

const nl_cmdk_go_login = /** @type {(inputs: Cmdk_Go_LoginInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inloggen`)
};

const pl_cmdk_go_login = /** @type {(inputs: Cmdk_Go_LoginInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaloguj się`)
};

const pt_cmdk_go_login = /** @type {(inputs: Cmdk_Go_LoginInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Iniciar sessão`)
};

const ru_cmdk_go_login = /** @type {(inputs: Cmdk_Go_LoginInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Войти`)
};

const sv_cmdk_go_login = /** @type {(inputs: Cmdk_Go_LoginInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logga in`)
};

const tr_cmdk_go_login = /** @type {(inputs: Cmdk_Go_LoginInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Giriş yap`)
};

const zh_cmdk_go_login = /** @type {(inputs: Cmdk_Go_LoginInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`登录`)
};

const ja_cmdk_go_login = /** @type {(inputs: Cmdk_Go_LoginInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ログイン`)
};

/**
* | output |
* | --- |
* | "Sign in" |
*
* @param {Cmdk_Go_LoginInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_go_login = /** @type {((inputs?: Cmdk_Go_LoginInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Go_LoginInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_go_login(inputs)
	if (locale === "de") return de_cmdk_go_login(inputs)
	if (locale === "fr") return fr_cmdk_go_login(inputs)
	if (locale === "it") return it_cmdk_go_login(inputs)
	if (locale === "nl") return nl_cmdk_go_login(inputs)
	if (locale === "pl") return pl_cmdk_go_login(inputs)
	if (locale === "pt") return pt_cmdk_go_login(inputs)
	if (locale === "ru") return ru_cmdk_go_login(inputs)
	if (locale === "sv") return sv_cmdk_go_login(inputs)
	if (locale === "tr") return tr_cmdk_go_login(inputs)
	if (locale === "zh") return zh_cmdk_go_login(inputs)
	if (locale === "ja") return ja_cmdk_go_login(inputs)
	return en_cmdk_go_login(inputs)
});
