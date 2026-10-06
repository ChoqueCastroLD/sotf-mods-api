/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ category: NonNullable<unknown> }} Explore_Category_Intro_GenericInputs */

const en_explore_category_intro_generic = /** @type {(inputs: Explore_Category_Intro_GenericInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sons of the Forest mods in the ${i?.category} category, with ratings and direct downloads.`)
};

const es_explore_category_intro_generic = /** @type {(inputs: Explore_Category_Intro_GenericInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mods de Sons of the Forest de la categoría ${i?.category}, con valoraciones y descarga directa.`)
};

const de_explore_category_intro_generic = /** @type {(inputs: Explore_Category_Intro_GenericInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sons-of-the-Forest-Mods der Kategorie ${i?.category}, mit Bewertungen und Direkt-Download.`)
};

const fr_explore_category_intro_generic = /** @type {(inputs: Explore_Category_Intro_GenericInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mods Sons of the Forest de la catégorie ${i?.category}, avec notes et téléchargement direct.`)
};

const it_explore_category_intro_generic = /** @type {(inputs: Explore_Category_Intro_GenericInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mod di Sons of the Forest della categoria ${i?.category}, con valutazioni e download diretto.`)
};

const nl_explore_category_intro_generic = /** @type {(inputs: Explore_Category_Intro_GenericInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sons of the Forest-mods in de categorie ${i?.category}, met beoordelingen en directe download.`)
};

const pl_explore_category_intro_generic = /** @type {(inputs: Explore_Category_Intro_GenericInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mody do Sons of the Forest z kategorii ${i?.category}, z ocenami i bezpośrednim pobieraniem.`)
};

const pt_explore_category_intro_generic = /** @type {(inputs: Explore_Category_Intro_GenericInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mods de Sons of the Forest da categoria ${i?.category}, com avaliações e download direto.`)
};

const ru_explore_category_intro_generic = /** @type {(inputs: Explore_Category_Intro_GenericInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Моды для Sons of the Forest в категории ${i?.category}: оценки и прямые загрузки.`)
};

const sv_explore_category_intro_generic = /** @type {(inputs: Explore_Category_Intro_GenericInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Moddar till Sons of the Forest i kategorin ${i?.category}, med betyg och direkt nedladdning.`)
};

const tr_explore_category_intro_generic = /** @type {(inputs: Explore_Category_Intro_GenericInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.category} kategorisindeki Sons of the Forest modları; puanlar ve doğrudan indirme ile.`)
};

const zh_explore_category_intro_generic = /** @type {(inputs: Explore_Category_Intro_GenericInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.category}分类下的 Sons of the Forest 模组，附评分和直接下载。`)
};

const ja_explore_category_intro_generic = /** @type {(inputs: Explore_Category_Intro_GenericInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.category}カテゴリの Sons of the Forest MOD。評価と直接ダウンロード付き。`)
};

/**
* | output |
* | --- |
* | "Sons of the Forest mods in the {category} category, with ratings and direct downloads." |
*
* @param {Explore_Category_Intro_GenericInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_category_intro_generic = /** @type {((inputs: Explore_Category_Intro_GenericInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Category_Intro_GenericInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_category_intro_generic(inputs)
	if (locale === "de") return de_explore_category_intro_generic(inputs)
	if (locale === "fr") return fr_explore_category_intro_generic(inputs)
	if (locale === "it") return it_explore_category_intro_generic(inputs)
	if (locale === "nl") return nl_explore_category_intro_generic(inputs)
	if (locale === "pl") return pl_explore_category_intro_generic(inputs)
	if (locale === "pt") return pt_explore_category_intro_generic(inputs)
	if (locale === "ru") return ru_explore_category_intro_generic(inputs)
	if (locale === "sv") return sv_explore_category_intro_generic(inputs)
	if (locale === "tr") return tr_explore_category_intro_generic(inputs)
	if (locale === "zh") return zh_explore_category_intro_generic(inputs)
	if (locale === "ja") return ja_explore_category_intro_generic(inputs)
	return en_explore_category_intro_generic(inputs)
});
