/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Users_Search_LabelInputs */

const en_ranger_users_search_label = /** @type {(inputs: Ranger_Users_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search users`)
};

const es_ranger_users_search_label = /** @type {(inputs: Ranger_Users_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscar usuarios`)
};

const de_ranger_users_search_label = /** @type {(inputs: Ranger_Users_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Benutzer suchen`)
};

const fr_ranger_users_search_label = /** @type {(inputs: Ranger_Users_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rechercher des utilisateurs`)
};

const it_ranger_users_search_label = /** @type {(inputs: Ranger_Users_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerca utenti`)
};

const nl_ranger_users_search_label = /** @type {(inputs: Ranger_Users_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gebruikers zoeken`)
};

const pl_ranger_users_search_label = /** @type {(inputs: Ranger_Users_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szukaj użytkowników`)
};

const pt_ranger_users_search_label = /** @type {(inputs: Ranger_Users_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscar usuários`)
};

const ru_ranger_users_search_label = /** @type {(inputs: Ranger_Users_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Поиск пользователей`)
};

const sv_ranger_users_search_label = /** @type {(inputs: Ranger_Users_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sök användare`)
};

const tr_ranger_users_search_label = /** @type {(inputs: Ranger_Users_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kullanıcı ara`)
};

const zh_ranger_users_search_label = /** @type {(inputs: Ranger_Users_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索用户`)
};

const ja_ranger_users_search_label = /** @type {(inputs: Ranger_Users_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ユーザーを検索`)
};

/**
* | output |
* | --- |
* | "Search users" |
*
* @param {Ranger_Users_Search_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_users_search_label = /** @type {((inputs?: Ranger_Users_Search_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Users_Search_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_users_search_label(inputs)
	if (locale === "de") return de_ranger_users_search_label(inputs)
	if (locale === "fr") return fr_ranger_users_search_label(inputs)
	if (locale === "it") return it_ranger_users_search_label(inputs)
	if (locale === "nl") return nl_ranger_users_search_label(inputs)
	if (locale === "pl") return pl_ranger_users_search_label(inputs)
	if (locale === "pt") return pt_ranger_users_search_label(inputs)
	if (locale === "ru") return ru_ranger_users_search_label(inputs)
	if (locale === "sv") return sv_ranger_users_search_label(inputs)
	if (locale === "tr") return tr_ranger_users_search_label(inputs)
	if (locale === "zh") return zh_ranger_users_search_label(inputs)
	if (locale === "ja") return ja_ranger_users_search_label(inputs)
	return en_ranger_users_search_label(inputs)
});
