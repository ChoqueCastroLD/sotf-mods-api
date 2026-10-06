/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Stats_UsersInputs */

const en_landing_stats_users = /** @type {(inputs: Landing_Stats_UsersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Users`)
};

const es_landing_stats_users = /** @type {(inputs: Landing_Stats_UsersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuarios`)
};

const de_landing_stats_users = /** @type {(inputs: Landing_Stats_UsersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nutzer`)
};

const fr_landing_stats_users = /** @type {(inputs: Landing_Stats_UsersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utilisateurs`)
};

const it_landing_stats_users = /** @type {(inputs: Landing_Stats_UsersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utenti`)
};

const nl_landing_stats_users = /** @type {(inputs: Landing_Stats_UsersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gebruikers`)
};

const pl_landing_stats_users = /** @type {(inputs: Landing_Stats_UsersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Użytkownicy`)
};

const pt_landing_stats_users = /** @type {(inputs: Landing_Stats_UsersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuários`)
};

const ru_landing_stats_users = /** @type {(inputs: Landing_Stats_UsersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пользователи`)
};

const sv_landing_stats_users = /** @type {(inputs: Landing_Stats_UsersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Användare`)
};

const tr_landing_stats_users = /** @type {(inputs: Landing_Stats_UsersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kullanıcılar`)
};

const zh_landing_stats_users = /** @type {(inputs: Landing_Stats_UsersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`用户`)
};

const ja_landing_stats_users = /** @type {(inputs: Landing_Stats_UsersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ユーザー`)
};

/**
* | output |
* | --- |
* | "Users" |
*
* @param {Landing_Stats_UsersInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_stats_users = /** @type {((inputs?: Landing_Stats_UsersInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Stats_UsersInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_stats_users(inputs)
	if (locale === "de") return de_landing_stats_users(inputs)
	if (locale === "fr") return fr_landing_stats_users(inputs)
	if (locale === "it") return it_landing_stats_users(inputs)
	if (locale === "nl") return nl_landing_stats_users(inputs)
	if (locale === "pl") return pl_landing_stats_users(inputs)
	if (locale === "pt") return pt_landing_stats_users(inputs)
	if (locale === "ru") return ru_landing_stats_users(inputs)
	if (locale === "sv") return sv_landing_stats_users(inputs)
	if (locale === "tr") return tr_landing_stats_users(inputs)
	if (locale === "zh") return zh_landing_stats_users(inputs)
	if (locale === "ja") return ja_landing_stats_users(inputs)
	return en_landing_stats_users(inputs)
});
