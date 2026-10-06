/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Shell_Nav_SearchInputs */

const en_shell_nav_search = /** @type {(inputs: Shell_Nav_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search`)
};

const es_shell_nav_search = /** @type {(inputs: Shell_Nav_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscar`)
};

const de_shell_nav_search = /** @type {(inputs: Shell_Nav_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suche`)
};

const fr_shell_nav_search = /** @type {(inputs: Shell_Nav_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recherche`)
};

const it_shell_nav_search = /** @type {(inputs: Shell_Nav_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerca`)
};

const nl_shell_nav_search = /** @type {(inputs: Shell_Nav_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zoeken`)
};

const pl_shell_nav_search = /** @type {(inputs: Shell_Nav_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szukaj`)
};

const pt_shell_nav_search = /** @type {(inputs: Shell_Nav_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscar`)
};

const ru_shell_nav_search = /** @type {(inputs: Shell_Nav_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Поиск`)
};

const sv_shell_nav_search = /** @type {(inputs: Shell_Nav_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sök`)
};

const tr_shell_nav_search = /** @type {(inputs: Shell_Nav_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ara`)
};

const zh_shell_nav_search = /** @type {(inputs: Shell_Nav_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索`)
};

const ja_shell_nav_search = /** @type {(inputs: Shell_Nav_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`検索`)
};

/**
* | output |
* | --- |
* | "Search" |
*
* @param {Shell_Nav_SearchInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const shell_nav_search = /** @type {((inputs?: Shell_Nav_SearchInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_Nav_SearchInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_shell_nav_search(inputs)
	if (locale === "de") return de_shell_nav_search(inputs)
	if (locale === "fr") return fr_shell_nav_search(inputs)
	if (locale === "it") return it_shell_nav_search(inputs)
	if (locale === "nl") return nl_shell_nav_search(inputs)
	if (locale === "pl") return pl_shell_nav_search(inputs)
	if (locale === "pt") return pt_shell_nav_search(inputs)
	if (locale === "ru") return ru_shell_nav_search(inputs)
	if (locale === "sv") return sv_shell_nav_search(inputs)
	if (locale === "tr") return tr_shell_nav_search(inputs)
	if (locale === "zh") return zh_shell_nav_search(inputs)
	if (locale === "ja") return ja_shell_nav_search(inputs)
	return en_shell_nav_search(inputs)
});
