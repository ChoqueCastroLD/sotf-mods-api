/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Shell_Cmdk_Kind_UserInputs */

const en_shell_cmdk_kind_user = /** @type {(inputs: Shell_Cmdk_Kind_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`User`)
};

const es_shell_cmdk_kind_user = /** @type {(inputs: Shell_Cmdk_Kind_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuario`)
};

const de_shell_cmdk_kind_user = /** @type {(inputs: Shell_Cmdk_Kind_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nutzer`)
};

const fr_shell_cmdk_kind_user = /** @type {(inputs: Shell_Cmdk_Kind_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utilisateur`)
};

const it_shell_cmdk_kind_user = /** @type {(inputs: Shell_Cmdk_Kind_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utente`)
};

const nl_shell_cmdk_kind_user = /** @type {(inputs: Shell_Cmdk_Kind_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gebruiker`)
};

const pl_shell_cmdk_kind_user = /** @type {(inputs: Shell_Cmdk_Kind_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Użytkownik`)
};

const pt_shell_cmdk_kind_user = /** @type {(inputs: Shell_Cmdk_Kind_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuário`)
};

const ru_shell_cmdk_kind_user = /** @type {(inputs: Shell_Cmdk_Kind_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пользователь`)
};

const sv_shell_cmdk_kind_user = /** @type {(inputs: Shell_Cmdk_Kind_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Användare`)
};

const tr_shell_cmdk_kind_user = /** @type {(inputs: Shell_Cmdk_Kind_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kullanıcı`)
};

const zh_shell_cmdk_kind_user = /** @type {(inputs: Shell_Cmdk_Kind_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`用户`)
};

const ja_shell_cmdk_kind_user = /** @type {(inputs: Shell_Cmdk_Kind_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ユーザー`)
};

/**
* | output |
* | --- |
* | "User" |
*
* @param {Shell_Cmdk_Kind_UserInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const shell_cmdk_kind_user = /** @type {((inputs?: Shell_Cmdk_Kind_UserInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_Cmdk_Kind_UserInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_shell_cmdk_kind_user(inputs)
	if (locale === "de") return de_shell_cmdk_kind_user(inputs)
	if (locale === "fr") return fr_shell_cmdk_kind_user(inputs)
	if (locale === "it") return it_shell_cmdk_kind_user(inputs)
	if (locale === "nl") return nl_shell_cmdk_kind_user(inputs)
	if (locale === "pl") return pl_shell_cmdk_kind_user(inputs)
	if (locale === "pt") return pt_shell_cmdk_kind_user(inputs)
	if (locale === "ru") return ru_shell_cmdk_kind_user(inputs)
	if (locale === "sv") return sv_shell_cmdk_kind_user(inputs)
	if (locale === "tr") return tr_shell_cmdk_kind_user(inputs)
	if (locale === "zh") return zh_shell_cmdk_kind_user(inputs)
	if (locale === "ja") return ja_shell_cmdk_kind_user(inputs)
	return en_shell_cmdk_kind_user(inputs)
});
