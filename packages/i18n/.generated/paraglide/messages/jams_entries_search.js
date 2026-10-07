/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Entries_SearchInputs */

const en_jams_entries_search = /** @type {(inputs: Jams_Entries_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search by mod or author`)
};

const es_jams_entries_search = /** @type {(inputs: Jams_Entries_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscar por mod o autor`)
};

const de_jams_entries_search = /** @type {(inputs: Jams_Entries_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nach Mod oder Autor suchen`)
};

const fr_jams_entries_search = /** @type {(inputs: Jams_Entries_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rechercher par mod ou auteur`)
};

const it_jams_entries_search = /** @type {(inputs: Jams_Entries_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerca per mod o autore`)
};

const nl_jams_entries_search = /** @type {(inputs: Jams_Entries_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zoeken op mod of maker`)
};

const pl_jams_entries_search = /** @type {(inputs: Jams_Entries_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szukaj po modzie lub autorze`)
};

const pt_jams_entries_search = /** @type {(inputs: Jams_Entries_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscar por mod ou autor`)
};

const ru_jams_entries_search = /** @type {(inputs: Jams_Entries_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Поиск по моду или автору`)
};

const sv_jams_entries_search = /** @type {(inputs: Jams_Entries_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sök på mod eller skapare`)
};

const tr_jams_entries_search = /** @type {(inputs: Jams_Entries_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod veya yazara göre ara`)
};

const zh_jams_entries_search = /** @type {(inputs: Jams_Entries_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`按 Mod 或作者搜索`)
};

const ja_jams_entries_search = /** @type {(inputs: Jams_Entries_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod または作者で検索`)
};

/**
* | output |
* | --- |
* | "Search by mod or author" |
*
* @param {Jams_Entries_SearchInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_entries_search = /** @type {((inputs?: Jams_Entries_SearchInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Entries_SearchInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_entries_search(inputs)
	if (locale === "de") return de_jams_entries_search(inputs)
	if (locale === "fr") return fr_jams_entries_search(inputs)
	if (locale === "it") return it_jams_entries_search(inputs)
	if (locale === "nl") return nl_jams_entries_search(inputs)
	if (locale === "pl") return pl_jams_entries_search(inputs)
	if (locale === "pt") return pt_jams_entries_search(inputs)
	if (locale === "ru") return ru_jams_entries_search(inputs)
	if (locale === "sv") return sv_jams_entries_search(inputs)
	if (locale === "tr") return tr_jams_entries_search(inputs)
	if (locale === "zh") return zh_jams_entries_search(inputs)
	if (locale === "ja") return ja_jams_entries_search(inputs)
	return en_jams_entries_search(inputs)
});
