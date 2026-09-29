/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Search_PlaceholderInputs */

const en_common_search_placeholder = /** @type {(inputs: Common_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search mods, builds, creators…`)
};

const es_common_search_placeholder = /** @type {(inputs: Common_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Busca mods, builds, creadores…`)
};

const de_common_search_placeholder = /** @type {(inputs: Common_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods, Builds, Creator suchen …`)
};

const fr_common_search_placeholder = /** @type {(inputs: Common_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rechercher des mods, builds, créateurs…`)
};

const it_common_search_placeholder = /** @type {(inputs: Common_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerca mod, build, creatori…`)
};

const nl_common_search_placeholder = /** @type {(inputs: Common_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zoek mods, builds, makers…`)
};

const pl_common_search_placeholder = /** @type {(inputs: Common_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szukaj modów, buildów, twórców…`)
};

const pt_common_search_placeholder = /** @type {(inputs: Common_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pesquise mods, builds, criadores…`)
};

const ru_common_search_placeholder = /** @type {(inputs: Common_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ищите моды, постройки, авторов…`)
};

const sv_common_search_placeholder = /** @type {(inputs: Common_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sök moddar, byggen, skapare…`)
};

const tr_common_search_placeholder = /** @type {(inputs: Common_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod, yapı, üretici ara…`)
};

const zh_common_search_placeholder = /** @type {(inputs: Common_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索模组、建筑、创作者…`)
};

const ja_common_search_placeholder = /** @type {(inputs: Common_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD、建築、クリエイターを検索…`)
};

/**
* | output |
* | --- |
* | "Search mods, builds, creators…" |
*
* @param {Common_Search_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_search_placeholder = /** @type {((inputs?: Common_Search_PlaceholderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Search_PlaceholderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_search_placeholder(inputs)
	if (locale === "de") return de_common_search_placeholder(inputs)
	if (locale === "fr") return fr_common_search_placeholder(inputs)
	if (locale === "it") return it_common_search_placeholder(inputs)
	if (locale === "nl") return nl_common_search_placeholder(inputs)
	if (locale === "pl") return pl_common_search_placeholder(inputs)
	if (locale === "pt") return pt_common_search_placeholder(inputs)
	if (locale === "ru") return ru_common_search_placeholder(inputs)
	if (locale === "sv") return sv_common_search_placeholder(inputs)
	if (locale === "tr") return tr_common_search_placeholder(inputs)
	if (locale === "zh") return zh_common_search_placeholder(inputs)
	if (locale === "ja") return ja_common_search_placeholder(inputs)
	return en_common_search_placeholder(inputs)
});
