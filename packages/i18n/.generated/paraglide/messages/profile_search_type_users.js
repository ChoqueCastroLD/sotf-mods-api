/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Search_Type_UsersInputs */

const en_profile_search_type_users = /** @type {(inputs: Profile_Search_Type_UsersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Users`)
};

const es_profile_search_type_users = /** @type {(inputs: Profile_Search_Type_UsersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuarios`)
};

const de_profile_search_type_users = /** @type {(inputs: Profile_Search_Type_UsersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nutzer`)
};

const fr_profile_search_type_users = /** @type {(inputs: Profile_Search_Type_UsersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utilisateurs`)
};

const it_profile_search_type_users = /** @type {(inputs: Profile_Search_Type_UsersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utenti`)
};

const nl_profile_search_type_users = /** @type {(inputs: Profile_Search_Type_UsersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gebruikers`)
};

const pl_profile_search_type_users = /** @type {(inputs: Profile_Search_Type_UsersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Użytkownicy`)
};

const pt_profile_search_type_users = /** @type {(inputs: Profile_Search_Type_UsersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuários`)
};

const ru_profile_search_type_users = /** @type {(inputs: Profile_Search_Type_UsersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пользователи`)
};

const sv_profile_search_type_users = /** @type {(inputs: Profile_Search_Type_UsersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Användare`)
};

const tr_profile_search_type_users = /** @type {(inputs: Profile_Search_Type_UsersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kullanıcılar`)
};

const zh_profile_search_type_users = /** @type {(inputs: Profile_Search_Type_UsersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`用户`)
};

const ja_profile_search_type_users = /** @type {(inputs: Profile_Search_Type_UsersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ユーザー`)
};

/**
* | output |
* | --- |
* | "Users" |
*
* @param {Profile_Search_Type_UsersInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_search_type_users = /** @type {((inputs?: Profile_Search_Type_UsersInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Search_Type_UsersInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_search_type_users(inputs)
	if (locale === "de") return de_profile_search_type_users(inputs)
	if (locale === "fr") return fr_profile_search_type_users(inputs)
	if (locale === "it") return it_profile_search_type_users(inputs)
	if (locale === "nl") return nl_profile_search_type_users(inputs)
	if (locale === "pl") return pl_profile_search_type_users(inputs)
	if (locale === "pt") return pt_profile_search_type_users(inputs)
	if (locale === "ru") return ru_profile_search_type_users(inputs)
	if (locale === "sv") return sv_profile_search_type_users(inputs)
	if (locale === "tr") return tr_profile_search_type_users(inputs)
	if (locale === "zh") return zh_profile_search_type_users(inputs)
	if (locale === "ja") return ja_profile_search_type_users(inputs)
	return en_profile_search_type_users(inputs)
});
