/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Shell_Nav_LogoutInputs */

const en_shell_nav_logout = /** @type {(inputs: Shell_Nav_LogoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log out`)
};

const es_shell_nav_logout = /** @type {(inputs: Shell_Nav_LogoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerrar sesión`)
};

const de_shell_nav_logout = /** @type {(inputs: Shell_Nav_LogoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abmelden`)
};

const fr_shell_nav_logout = /** @type {(inputs: Shell_Nav_LogoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Déconnexion`)
};

const it_shell_nav_logout = /** @type {(inputs: Shell_Nav_LogoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esci`)
};

const nl_shell_nav_logout = /** @type {(inputs: Shell_Nav_LogoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uitloggen`)
};

const pl_shell_nav_logout = /** @type {(inputs: Shell_Nav_LogoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyloguj się`)
};

const pt_shell_nav_logout = /** @type {(inputs: Shell_Nav_LogoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sair`)
};

const ru_shell_nav_logout = /** @type {(inputs: Shell_Nav_LogoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выйти`)
};

const sv_shell_nav_logout = /** @type {(inputs: Shell_Nav_LogoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logga ut`)
};

const tr_shell_nav_logout = /** @type {(inputs: Shell_Nav_LogoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çıkış yap`)
};

const zh_shell_nav_logout = /** @type {(inputs: Shell_Nav_LogoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`退出登录`)
};

const ja_shell_nav_logout = /** @type {(inputs: Shell_Nav_LogoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ログアウト`)
};

/**
* | output |
* | --- |
* | "Log out" |
*
* @param {Shell_Nav_LogoutInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const shell_nav_logout = /** @type {((inputs?: Shell_Nav_LogoutInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_Nav_LogoutInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_shell_nav_logout(inputs)
	if (locale === "de") return de_shell_nav_logout(inputs)
	if (locale === "fr") return fr_shell_nav_logout(inputs)
	if (locale === "it") return it_shell_nav_logout(inputs)
	if (locale === "nl") return nl_shell_nav_logout(inputs)
	if (locale === "pl") return pl_shell_nav_logout(inputs)
	if (locale === "pt") return pt_shell_nav_logout(inputs)
	if (locale === "ru") return ru_shell_nav_logout(inputs)
	if (locale === "sv") return sv_shell_nav_logout(inputs)
	if (locale === "tr") return tr_shell_nav_logout(inputs)
	if (locale === "zh") return zh_shell_nav_logout(inputs)
	if (locale === "ja") return ja_shell_nav_logout(inputs)
	return en_shell_nav_logout(inputs)
});
