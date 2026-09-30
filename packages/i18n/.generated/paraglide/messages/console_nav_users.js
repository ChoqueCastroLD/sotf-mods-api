/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Nav_UsersInputs */

const en_console_nav_users = /** @type {(inputs: Console_Nav_UsersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Users`)
};

const es_console_nav_users = /** @type {(inputs: Console_Nav_UsersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuarios`)
};

const de_console_nav_users = /** @type {(inputs: Console_Nav_UsersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nutzer`)
};

const fr_console_nav_users = /** @type {(inputs: Console_Nav_UsersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utilisateurs`)
};

const it_console_nav_users = /** @type {(inputs: Console_Nav_UsersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utenti`)
};

const nl_console_nav_users = /** @type {(inputs: Console_Nav_UsersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gebruikers`)
};

const pl_console_nav_users = /** @type {(inputs: Console_Nav_UsersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Użytkownicy`)
};

const pt_console_nav_users = /** @type {(inputs: Console_Nav_UsersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuários`)
};

const ru_console_nav_users = /** @type {(inputs: Console_Nav_UsersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пользователи`)
};

const sv_console_nav_users = /** @type {(inputs: Console_Nav_UsersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Användare`)
};

const tr_console_nav_users = /** @type {(inputs: Console_Nav_UsersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kullanıcılar`)
};

const zh_console_nav_users = /** @type {(inputs: Console_Nav_UsersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`用户`)
};

const ja_console_nav_users = /** @type {(inputs: Console_Nav_UsersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ユーザー`)
};

/**
* | output |
* | --- |
* | "Users" |
*
* @param {Console_Nav_UsersInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_nav_users = /** @type {((inputs?: Console_Nav_UsersInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Nav_UsersInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_nav_users(inputs)
	if (locale === "de") return de_console_nav_users(inputs)
	if (locale === "fr") return fr_console_nav_users(inputs)
	if (locale === "it") return it_console_nav_users(inputs)
	if (locale === "nl") return nl_console_nav_users(inputs)
	if (locale === "pl") return pl_console_nav_users(inputs)
	if (locale === "pt") return pt_console_nav_users(inputs)
	if (locale === "ru") return ru_console_nav_users(inputs)
	if (locale === "sv") return sv_console_nav_users(inputs)
	if (locale === "tr") return tr_console_nav_users(inputs)
	if (locale === "zh") return zh_console_nav_users(inputs)
	if (locale === "ja") return ja_console_nav_users(inputs)
	return en_console_nav_users(inputs)
});
