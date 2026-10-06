/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Shell_Cmdk_Go_LoginInputs */

const en_shell_cmdk_go_login = /** @type {(inputs: Shell_Cmdk_Go_LoginInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log in`)
};

const es_shell_cmdk_go_login = /** @type {(inputs: Shell_Cmdk_Go_LoginInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Iniciar sesión`)
};

const de_shell_cmdk_go_login = /** @type {(inputs: Shell_Cmdk_Go_LoginInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anmelden`)
};

const fr_shell_cmdk_go_login = /** @type {(inputs: Shell_Cmdk_Go_LoginInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connexion`)
};

const it_shell_cmdk_go_login = /** @type {(inputs: Shell_Cmdk_Go_LoginInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accedi`)
};

const nl_shell_cmdk_go_login = /** @type {(inputs: Shell_Cmdk_Go_LoginInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inloggen`)
};

const pl_shell_cmdk_go_login = /** @type {(inputs: Shell_Cmdk_Go_LoginInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaloguj się`)
};

const pt_shell_cmdk_go_login = /** @type {(inputs: Shell_Cmdk_Go_LoginInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entrar`)
};

const ru_shell_cmdk_go_login = /** @type {(inputs: Shell_Cmdk_Go_LoginInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Войти`)
};

const sv_shell_cmdk_go_login = /** @type {(inputs: Shell_Cmdk_Go_LoginInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logga in`)
};

const tr_shell_cmdk_go_login = /** @type {(inputs: Shell_Cmdk_Go_LoginInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Giriş yap`)
};

const zh_shell_cmdk_go_login = /** @type {(inputs: Shell_Cmdk_Go_LoginInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`登录`)
};

const ja_shell_cmdk_go_login = /** @type {(inputs: Shell_Cmdk_Go_LoginInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ログイン`)
};

/**
* | output |
* | --- |
* | "Log in" |
*
* @param {Shell_Cmdk_Go_LoginInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const shell_cmdk_go_login = /** @type {((inputs?: Shell_Cmdk_Go_LoginInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_Cmdk_Go_LoginInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_shell_cmdk_go_login(inputs)
	if (locale === "de") return de_shell_cmdk_go_login(inputs)
	if (locale === "fr") return fr_shell_cmdk_go_login(inputs)
	if (locale === "it") return it_shell_cmdk_go_login(inputs)
	if (locale === "nl") return nl_shell_cmdk_go_login(inputs)
	if (locale === "pl") return pl_shell_cmdk_go_login(inputs)
	if (locale === "pt") return pt_shell_cmdk_go_login(inputs)
	if (locale === "ru") return ru_shell_cmdk_go_login(inputs)
	if (locale === "sv") return sv_shell_cmdk_go_login(inputs)
	if (locale === "tr") return tr_shell_cmdk_go_login(inputs)
	if (locale === "zh") return zh_shell_cmdk_go_login(inputs)
	if (locale === "ja") return ja_shell_cmdk_go_login(inputs)
	return en_shell_cmdk_go_login(inputs)
});
