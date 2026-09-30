/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ category: NonNullable<unknown> }} Explore_Category_Intro_Builds_GenericInputs */

const en_explore_category_intro_builds_generic = /** @type {(inputs: Explore_Category_Intro_Builds_GenericInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sons of the Forest builds in the ${i?.category} category: BuildShare blueprints ready to place.`)
};

const es_explore_category_intro_builds_generic = /** @type {(inputs: Explore_Category_Intro_Builds_GenericInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Builds de Sons of the Forest de la categoría ${i?.category}: planos de BuildShare listos para colocar.`)
};

const de_explore_category_intro_builds_generic = /** @type {(inputs: Explore_Category_Intro_Builds_GenericInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sons-of-the-Forest-Builds der Kategorie ${i?.category}: BuildShare-Baupläne, bereit zum Platzieren.`)
};

const fr_explore_category_intro_builds_generic = /** @type {(inputs: Explore_Category_Intro_Builds_GenericInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Builds Sons of the Forest de la catégorie ${i?.category} : plans BuildShare prêts à poser.`)
};

const it_explore_category_intro_builds_generic = /** @type {(inputs: Explore_Category_Intro_Builds_GenericInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Build di Sons of the Forest della categoria ${i?.category}: progetti BuildShare pronti da piazzare.`)
};

const nl_explore_category_intro_builds_generic = /** @type {(inputs: Explore_Category_Intro_Builds_GenericInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sons of the Forest-builds in de categorie ${i?.category}: BuildShare-bouwtekeningen, klaar om te plaatsen.`)
};

const pl_explore_category_intro_builds_generic = /** @type {(inputs: Explore_Category_Intro_Builds_GenericInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Buildy do Sons of the Forest z kategorii ${i?.category}: plany BuildShare gotowe do postawienia.`)
};

const pt_explore_category_intro_builds_generic = /** @type {(inputs: Explore_Category_Intro_Builds_GenericInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Builds de Sons of the Forest da categoria ${i?.category}: plantas do BuildShare prontas para posicionar.`)
};

const ru_explore_category_intro_builds_generic = /** @type {(inputs: Explore_Category_Intro_Builds_GenericInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Постройки для Sons of the Forest в категории ${i?.category}: чертежи BuildShare, готовые к установке.`)
};

const sv_explore_category_intro_builds_generic = /** @type {(inputs: Explore_Category_Intro_Builds_GenericInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Byggen till Sons of the Forest i kategorin ${i?.category}: BuildShare-ritningar redo att placeras.`)
};

const tr_explore_category_intro_builds_generic = /** @type {(inputs: Explore_Category_Intro_Builds_GenericInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.category} kategorisindeki Sons of the Forest yapıları: yerleştirmeye hazır BuildShare planları.`)
};

const zh_explore_category_intro_builds_generic = /** @type {(inputs: Explore_Category_Intro_Builds_GenericInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.category}分类下的 Sons of the Forest 建筑：可直接放置的 BuildShare 蓝图。`)
};

const ja_explore_category_intro_builds_generic = /** @type {(inputs: Explore_Category_Intro_Builds_GenericInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.category}カテゴリの Sons of the Forest 建築。すぐに配置できる BuildShare 設計図。`)
};

/**
* | output |
* | --- |
* | "Sons of the Forest builds in the {category} category: BuildShare blueprints ready to place." |
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
