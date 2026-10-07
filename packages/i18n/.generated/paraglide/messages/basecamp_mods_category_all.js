/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Mods_Category_AllInputs */

const en_basecamp_mods_category_all = /** @type {(inputs: Basecamp_Mods_Category_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All categories`)
};

const es_basecamp_mods_category_all = /** @type {(inputs: Basecamp_Mods_Category_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todas las categorías`)
};

const de_basecamp_mods_category_all = /** @type {(inputs: Basecamp_Mods_Category_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle Kategorien`)
};

const fr_basecamp_mods_category_all = /** @type {(inputs: Basecamp_Mods_Category_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toutes les catégories`)
};

const it_basecamp_mods_category_all = /** @type {(inputs: Basecamp_Mods_Category_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutte le categorie`)
};

const nl_basecamp_mods_category_all = /** @type {(inputs: Basecamp_Mods_Category_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle categorieën`)
};

const pl_basecamp_mods_category_all = /** @type {(inputs: Basecamp_Mods_Category_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszystkie kategorie`)
};

const pt_basecamp_mods_category_all = /** @type {(inputs: Basecamp_Mods_Category_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todas as categorias`)
};

const ru_basecamp_mods_category_all = /** @type {(inputs: Basecamp_Mods_Category_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Все категории`)
};

const sv_basecamp_mods_category_all = /** @type {(inputs: Basecamp_Mods_Category_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla kategorier`)
};

const tr_basecamp_mods_category_all = /** @type {(inputs: Basecamp_Mods_Category_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tüm kategoriler`)
};

const zh_basecamp_mods_category_all = /** @type {(inputs: Basecamp_Mods_Category_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`全部分类`)
};

const ja_basecamp_mods_category_all = /** @type {(inputs: Basecamp_Mods_Category_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべてのカテゴリ`)
};

/**
* | output |
* | --- |
* | "All categories" |
*
* @param {Basecamp_Mods_Category_AllInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_mods_category_all = /** @type {((inputs?: Basecamp_Mods_Category_AllInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Mods_Category_AllInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_mods_category_all(inputs)
	if (locale === "de") return de_basecamp_mods_category_all(inputs)
	if (locale === "fr") return fr_basecamp_mods_category_all(inputs)
	if (locale === "it") return it_basecamp_mods_category_all(inputs)
	if (locale === "nl") return nl_basecamp_mods_category_all(inputs)
	if (locale === "pl") return pl_basecamp_mods_category_all(inputs)
	if (locale === "pt") return pt_basecamp_mods_category_all(inputs)
	if (locale === "ru") return ru_basecamp_mods_category_all(inputs)
	if (locale === "sv") return sv_basecamp_mods_category_all(inputs)
	if (locale === "tr") return tr_basecamp_mods_category_all(inputs)
	if (locale === "zh") return zh_basecamp_mods_category_all(inputs)
	if (locale === "ja") return ja_basecamp_mods_category_all(inputs)
	return en_basecamp_mods_category_all(inputs)
});
