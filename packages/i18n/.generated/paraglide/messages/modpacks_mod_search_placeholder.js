/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Mod_Search_PlaceholderInputs */

const en_modpacks_mod_search_placeholder = /** @type {(inputs: Modpacks_Mod_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search mods to add`)
};

const es_modpacks_mod_search_placeholder = /** @type {(inputs: Modpacks_Mod_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscar mods para añadir`)
};

const de_modpacks_mod_search_placeholder = /** @type {(inputs: Modpacks_Mod_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods zum Hinzufügen suchen`)
};

const fr_modpacks_mod_search_placeholder = /** @type {(inputs: Modpacks_Mod_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rechercher des mods à ajouter`)
};

const it_modpacks_mod_search_placeholder = /** @type {(inputs: Modpacks_Mod_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerca mod da aggiungere`)
};

const nl_modpacks_mod_search_placeholder = /** @type {(inputs: Modpacks_Mod_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods zoeken om toe te voegen`)
};

const pl_modpacks_mod_search_placeholder = /** @type {(inputs: Modpacks_Mod_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szukaj modów do dodania`)
};

const pt_modpacks_mod_search_placeholder = /** @type {(inputs: Modpacks_Mod_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pesquisar mods para adicionar`)
};

const ru_modpacks_mod_search_placeholder = /** @type {(inputs: Modpacks_Mod_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Найти моды для добавления`)
};

const sv_modpacks_mod_search_placeholder = /** @type {(inputs: Modpacks_Mod_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sök moddar att lägga till`)
};

const tr_modpacks_mod_search_placeholder = /** @type {(inputs: Modpacks_Mod_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eklenecek modları ara`)
};

const zh_modpacks_mod_search_placeholder = /** @type {(inputs: Modpacks_Mod_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索要添加的模组`)
};

const ja_modpacks_mod_search_placeholder = /** @type {(inputs: Modpacks_Mod_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`追加する Mod を検索`)
};

/**
* | output |
* | --- |
* | "Search mods to add" |
*
* @param {Modpacks_Mod_Search_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_mod_search_placeholder = /** @type {((inputs?: Modpacks_Mod_Search_PlaceholderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Mod_Search_PlaceholderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_mod_search_placeholder(inputs)
	if (locale === "de") return de_modpacks_mod_search_placeholder(inputs)
	if (locale === "fr") return fr_modpacks_mod_search_placeholder(inputs)
	if (locale === "it") return it_modpacks_mod_search_placeholder(inputs)
	if (locale === "nl") return nl_modpacks_mod_search_placeholder(inputs)
	if (locale === "pl") return pl_modpacks_mod_search_placeholder(inputs)
	if (locale === "pt") return pt_modpacks_mod_search_placeholder(inputs)
	if (locale === "ru") return ru_modpacks_mod_search_placeholder(inputs)
	if (locale === "sv") return sv_modpacks_mod_search_placeholder(inputs)
	if (locale === "tr") return tr_modpacks_mod_search_placeholder(inputs)
	if (locale === "zh") return zh_modpacks_mod_search_placeholder(inputs)
	if (locale === "ja") return ja_modpacks_mod_search_placeholder(inputs)
	return en_modpacks_mod_search_placeholder(inputs)
});
