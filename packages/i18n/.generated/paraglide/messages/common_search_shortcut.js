/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ shortcut: NonNullable<unknown> }} Common_Search_ShortcutInputs */

const en_common_search_shortcut = /** @type {(inputs: Common_Search_ShortcutInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Press ${i?.shortcut} to search`)
};

const es_common_search_shortcut = /** @type {(inputs: Common_Search_ShortcutInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Pulsa ${i?.shortcut} para buscar`)
};

const de_common_search_shortcut = /** @type {(inputs: Common_Search_ShortcutInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Drücke ${i?.shortcut} zum Suchen`)
};

const fr_common_search_shortcut = /** @type {(inputs: Common_Search_ShortcutInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Appuyez sur ${i?.shortcut} pour rechercher`)
};

const it_common_search_shortcut = /** @type {(inputs: Common_Search_ShortcutInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Premi ${i?.shortcut} per cercare`)
};

const nl_common_search_shortcut = /** @type {(inputs: Common_Search_ShortcutInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Druk op ${i?.shortcut} om te zoeken`)
};

const pl_common_search_shortcut = /** @type {(inputs: Common_Search_ShortcutInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Naciśnij ${i?.shortcut}, aby szukać`)
};

const pt_common_search_shortcut = /** @type {(inputs: Common_Search_ShortcutInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Pressione ${i?.shortcut} para pesquisar`)
};

const ru_common_search_shortcut = /** @type {(inputs: Common_Search_ShortcutInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Нажмите ${i?.shortcut} для поиска`)
};

const sv_common_search_shortcut = /** @type {(inputs: Common_Search_ShortcutInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tryck på ${i?.shortcut} för att söka`)
};

const tr_common_search_shortcut = /** @type {(inputs: Common_Search_ShortcutInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Aramak için ${i?.shortcut} tuşlarına bas`)
};

const zh_common_search_shortcut = /** @type {(inputs: Common_Search_ShortcutInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`按 ${i?.shortcut} 搜索`)
};

const ja_common_search_shortcut = /** @type {(inputs: Common_Search_ShortcutInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.shortcut} で検索`)
};

/**
* | output |
* | --- |
* | "Press {shortcut} to search" |
*
* @param {Common_Search_ShortcutInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_search_shortcut = /** @type {((inputs: Common_Search_ShortcutInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Search_ShortcutInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_search_shortcut(inputs)
	if (locale === "de") return de_common_search_shortcut(inputs)
	if (locale === "fr") return fr_common_search_shortcut(inputs)
	if (locale === "it") return it_common_search_shortcut(inputs)
	if (locale === "nl") return nl_common_search_shortcut(inputs)
	if (locale === "pl") return pl_common_search_shortcut(inputs)
	if (locale === "pt") return pt_common_search_shortcut(inputs)
	if (locale === "ru") return ru_common_search_shortcut(inputs)
	if (locale === "sv") return sv_common_search_shortcut(inputs)
	if (locale === "tr") return tr_common_search_shortcut(inputs)
	if (locale === "zh") return zh_common_search_shortcut(inputs)
	if (locale === "ja") return ja_common_search_shortcut(inputs)
	return en_common_search_shortcut(inputs)
});
