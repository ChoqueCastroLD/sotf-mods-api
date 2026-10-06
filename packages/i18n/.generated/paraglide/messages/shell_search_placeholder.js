/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Shell_Search_PlaceholderInputs */

const en_shell_search_placeholder = /** @type {(inputs: Shell_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search mods, builds, users`)
};

const es_shell_search_placeholder = /** @type {(inputs: Shell_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscar mods, builds, usuarios`)
};

const de_shell_search_placeholder = /** @type {(inputs: Shell_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods, Builds, Nutzer suchen`)
};

const fr_shell_search_placeholder = /** @type {(inputs: Shell_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rechercher mods, builds, utilisateurs`)
};

const it_shell_search_placeholder = /** @type {(inputs: Shell_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerca mod, build, utenti`)
};

const nl_shell_search_placeholder = /** @type {(inputs: Shell_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zoek mods, builds, gebruikers`)
};

const pl_shell_search_placeholder = /** @type {(inputs: Shell_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szukaj modów, buildów, użytkowników`)
};

const pt_shell_search_placeholder = /** @type {(inputs: Shell_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscar mods, builds, usuários`)
};

const ru_shell_search_placeholder = /** @type {(inputs: Shell_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Поиск модов, построек, пользователей`)
};

const sv_shell_search_placeholder = /** @type {(inputs: Shell_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sök moddar, byggen, användare`)
};

const tr_shell_search_placeholder = /** @type {(inputs: Shell_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod, yapı, kullanıcı ara`)
};

const zh_shell_search_placeholder = /** @type {(inputs: Shell_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索模组、建筑、用户`)
};

const ja_shell_search_placeholder = /** @type {(inputs: Shell_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD、建築、ユーザーを検索`)
};

/**
* | output |
* | --- |
* | "Search mods, builds, users" |
*
* @param {Shell_Search_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const shell_search_placeholder = /** @type {((inputs?: Shell_Search_PlaceholderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_Search_PlaceholderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_shell_search_placeholder(inputs)
	if (locale === "de") return de_shell_search_placeholder(inputs)
	if (locale === "fr") return fr_shell_search_placeholder(inputs)
	if (locale === "it") return it_shell_search_placeholder(inputs)
	if (locale === "nl") return nl_shell_search_placeholder(inputs)
	if (locale === "pl") return pl_shell_search_placeholder(inputs)
	if (locale === "pt") return pt_shell_search_placeholder(inputs)
	if (locale === "ru") return ru_shell_search_placeholder(inputs)
	if (locale === "sv") return sv_shell_search_placeholder(inputs)
	if (locale === "tr") return tr_shell_search_placeholder(inputs)
	if (locale === "zh") return zh_shell_search_placeholder(inputs)
	if (locale === "ja") return ja_shell_search_placeholder(inputs)
	return en_shell_search_placeholder(inputs)
});
