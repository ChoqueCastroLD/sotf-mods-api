/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Shell_Cmdk_Group_UsersInputs */

const en_shell_cmdk_group_users = /** @type {(inputs: Shell_Cmdk_Group_UsersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Users`)
};

const es_shell_cmdk_group_users = /** @type {(inputs: Shell_Cmdk_Group_UsersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuarios`)
};

const de_shell_cmdk_group_users = /** @type {(inputs: Shell_Cmdk_Group_UsersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nutzer`)
};

const fr_shell_cmdk_group_users = /** @type {(inputs: Shell_Cmdk_Group_UsersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utilisateurs`)
};

const it_shell_cmdk_group_users = /** @type {(inputs: Shell_Cmdk_Group_UsersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utenti`)
};

const nl_shell_cmdk_group_users = /** @type {(inputs: Shell_Cmdk_Group_UsersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gebruikers`)
};

const pl_shell_cmdk_group_users = /** @type {(inputs: Shell_Cmdk_Group_UsersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Użytkownicy`)
};

const pt_shell_cmdk_group_users = /** @type {(inputs: Shell_Cmdk_Group_UsersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuários`)
};

const ru_shell_cmdk_group_users = /** @type {(inputs: Shell_Cmdk_Group_UsersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пользователи`)
};

const sv_shell_cmdk_group_users = /** @type {(inputs: Shell_Cmdk_Group_UsersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Användare`)
};

const tr_shell_cmdk_group_users = /** @type {(inputs: Shell_Cmdk_Group_UsersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kullanıcılar`)
};

const zh_shell_cmdk_group_users = /** @type {(inputs: Shell_Cmdk_Group_UsersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`用户`)
};

const ja_shell_cmdk_group_users = /** @type {(inputs: Shell_Cmdk_Group_UsersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ユーザー`)
};

/**
* | output |
* | --- |
* | "Users" |
*
* @param {Shell_Cmdk_Group_UsersInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const shell_cmdk_group_users = /** @type {((inputs?: Shell_Cmdk_Group_UsersInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_Cmdk_Group_UsersInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_shell_cmdk_group_users(inputs)
	if (locale === "de") return de_shell_cmdk_group_users(inputs)
	if (locale === "fr") return fr_shell_cmdk_group_users(inputs)
	if (locale === "it") return it_shell_cmdk_group_users(inputs)
	if (locale === "nl") return nl_shell_cmdk_group_users(inputs)
	if (locale === "pl") return pl_shell_cmdk_group_users(inputs)
	if (locale === "pt") return pt_shell_cmdk_group_users(inputs)
	if (locale === "ru") return ru_shell_cmdk_group_users(inputs)
	if (locale === "sv") return sv_shell_cmdk_group_users(inputs)
	if (locale === "tr") return tr_shell_cmdk_group_users(inputs)
	if (locale === "zh") return zh_shell_cmdk_group_users(inputs)
	if (locale === "ja") return ja_shell_cmdk_group_users(inputs)
	return en_shell_cmdk_group_users(inputs)
});
