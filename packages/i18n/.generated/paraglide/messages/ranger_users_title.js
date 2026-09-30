/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Users_TitleInputs */

const en_ranger_users_title = /** @type {(inputs: Ranger_Users_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Users`)
};

const es_ranger_users_title = /** @type {(inputs: Ranger_Users_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuarios`)
};

const de_ranger_users_title = /** @type {(inputs: Ranger_Users_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Benutzer`)
};

const fr_ranger_users_title = /** @type {(inputs: Ranger_Users_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utilisateurs`)
};

const it_ranger_users_title = /** @type {(inputs: Ranger_Users_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utenti`)
};

const nl_ranger_users_title = /** @type {(inputs: Ranger_Users_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gebruikers`)
};

const pl_ranger_users_title = /** @type {(inputs: Ranger_Users_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Użytkownicy`)
};

const pt_ranger_users_title = /** @type {(inputs: Ranger_Users_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuários`)
};

const ru_ranger_users_title = /** @type {(inputs: Ranger_Users_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пользователи`)
};

const sv_ranger_users_title = /** @type {(inputs: Ranger_Users_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Användare`)
};

const tr_ranger_users_title = /** @type {(inputs: Ranger_Users_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kullanıcılar`)
};

const zh_ranger_users_title = /** @type {(inputs: Ranger_Users_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`用户`)
};

const ja_ranger_users_title = /** @type {(inputs: Ranger_Users_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ユーザー`)
};

/**
* | output |
* | --- |
* | "Users" |
*
* @param {Ranger_Users_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_users_title = /** @type {((inputs?: Ranger_Users_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Users_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_users_title(inputs)
	if (locale === "de") return de_ranger_users_title(inputs)
	if (locale === "fr") return fr_ranger_users_title(inputs)
	if (locale === "it") return it_ranger_users_title(inputs)
	if (locale === "nl") return nl_ranger_users_title(inputs)
	if (locale === "pl") return pl_ranger_users_title(inputs)
	if (locale === "pt") return pt_ranger_users_title(inputs)
	if (locale === "ru") return ru_ranger_users_title(inputs)
	if (locale === "sv") return sv_ranger_users_title(inputs)
	if (locale === "tr") return tr_ranger_users_title(inputs)
	if (locale === "zh") return zh_ranger_users_title(inputs)
	if (locale === "ja") return ja_ranger_users_title(inputs)
	return en_ranger_users_title(inputs)
});
