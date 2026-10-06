/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ category: NonNullable<unknown> }} Explore_Category_Intro_Builds_GenericInputs */

const en_explore_category_intro_builds_generic = /** @type {(inputs: Explore_Category_Intro_Builds_GenericInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`BuildShare builds in the ${i?.category} category for Sons of the Forest, ready to place.`)
};

const es_explore_category_intro_builds_generic = /** @type {(inputs: Explore_Category_Intro_Builds_GenericInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Builds de BuildShare para Sons of the Forest de la categoría ${i?.category}, listas para colocar.`)
};

const de_explore_category_intro_builds_generic = /** @type {(inputs: Explore_Category_Intro_Builds_GenericInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`BuildShare-Builds für Sons of the Forest in der Kategorie ${i?.category}, bereit zum Platzieren.`)
};

const fr_explore_category_intro_builds_generic = /** @type {(inputs: Explore_Category_Intro_Builds_GenericInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Builds BuildShare pour Sons of the Forest dans la catégorie ${i?.category}, prêtes à poser.`)
};

const it_explore_category_intro_builds_generic = /** @type {(inputs: Explore_Category_Intro_Builds_GenericInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Build BuildShare per Sons of the Forest della categoria ${i?.category}, pronte da piazzare.`)
};

const nl_explore_category_intro_builds_generic = /** @type {(inputs: Explore_Category_Intro_Builds_GenericInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`BuildShare-builds voor Sons of the Forest in de categorie ${i?.category}, klaar om te plaatsen.`)
};

const pl_explore_category_intro_builds_generic = /** @type {(inputs: Explore_Category_Intro_Builds_GenericInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Buildy BuildShare do Sons of the Forest z kategorii ${i?.category}, gotowe do postawienia.`)
};

const pt_explore_category_intro_builds_generic = /** @type {(inputs: Explore_Category_Intro_Builds_GenericInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Builds do BuildShare para Sons of the Forest da categoria ${i?.category}, prontas para posicionar.`)
};

const ru_explore_category_intro_builds_generic = /** @type {(inputs: Explore_Category_Intro_Builds_GenericInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Постройки BuildShare для Sons of the Forest в категории ${i?.category}, готовые к установке.`)
};

const sv_explore_category_intro_builds_generic = /** @type {(inputs: Explore_Category_Intro_Builds_GenericInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`BuildShare-byggen till Sons of the Forest i kategorin ${i?.category}, redo att placeras.`)
};

const tr_explore_category_intro_builds_generic = /** @type {(inputs: Explore_Category_Intro_Builds_GenericInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.category} kategorisindeki Sons of the Forest için BuildShare yapıları, yerleştirmeye hazır.`)
};

const zh_explore_category_intro_builds_generic = /** @type {(inputs: Explore_Category_Intro_Builds_GenericInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.category}分类下适用于 Sons of the Forest 的 BuildShare 建筑，可直接放置。`)
};

const ja_explore_category_intro_builds_generic = /** @type {(inputs: Explore_Category_Intro_Builds_GenericInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.category}カテゴリの Sons of the Forest 向け BuildShare 建築。すぐに配置できます。`)
};

/**
* | output |
* | --- |
* | "BuildShare builds in the {category} category for Sons of the Forest, ready to place." |
*
* @param {Explore_Category_Intro_Builds_GenericInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_category_intro_builds_generic = /** @type {((inputs: Explore_Category_Intro_Builds_GenericInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Category_Intro_Builds_GenericInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_category_intro_builds_generic(inputs)
	if (locale === "de") return de_explore_category_intro_builds_generic(inputs)
	if (locale === "fr") return fr_explore_category_intro_builds_generic(inputs)
	if (locale === "it") return it_explore_category_intro_builds_generic(inputs)
	if (locale === "nl") return nl_explore_category_intro_builds_generic(inputs)
	if (locale === "pl") return pl_explore_category_intro_builds_generic(inputs)
	if (locale === "pt") return pt_explore_category_intro_builds_generic(inputs)
	if (locale === "ru") return ru_explore_category_intro_builds_generic(inputs)
	if (locale === "sv") return sv_explore_category_intro_builds_generic(inputs)
	if (locale === "tr") return tr_explore_category_intro_builds_generic(inputs)
	if (locale === "zh") return zh_explore_category_intro_builds_generic(inputs)
	if (locale === "ja") return ja_explore_category_intro_builds_generic(inputs)
	return en_explore_category_intro_builds_generic(inputs)
});
