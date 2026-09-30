/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Category_Intro_LibraryInputs */

const en_explore_category_intro_library = /** @type {(inputs: Explore_Category_Intro_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Shared code other mods depend on. Install them when a mod lists them as a requirement.`)
};

const es_explore_category_intro_library = /** @type {(inputs: Explore_Category_Intro_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Código compartido del que dependen otros mods. Instálalas cuando un mod las indique como requisito.`)
};

const de_explore_category_intro_library = /** @type {(inputs: Explore_Category_Intro_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gemeinsamer Code, auf den andere Mods angewiesen sind. Installiere ihn, wenn eine Mod ihn als Voraussetzung nennt.`)
};

const fr_explore_category_intro_library = /** @type {(inputs: Explore_Category_Intro_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du code partagé dont dépendent d’autres mods. Installez-le quand un mod l’indique comme prérequis.`)
};

const it_explore_category_intro_library = /** @type {(inputs: Explore_Category_Intro_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Codice condiviso da cui dipendono altre mod. Installale quando una mod le indica come requisito.`)
};

const nl_explore_category_intro_library = /** @type {(inputs: Explore_Category_Intro_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gedeelde code waar andere mods op leunen. Installeer ze wanneer een mod ze als vereiste noemt.`)
};

const pl_explore_category_intro_library = /** @type {(inputs: Explore_Category_Intro_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wspólny kod, od którego zależą inne mody. Zainstaluj go, gdy mod wymienia go jako wymaganie.`)
};

const pt_explore_category_intro_library = /** @type {(inputs: Explore_Category_Intro_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Código compartilhado do qual outros mods dependem. Instale quando um mod o listar como requisito.`)
};

const ru_explore_category_intro_library = /** @type {(inputs: Explore_Category_Intro_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Общий код, от которого зависят другие моды. Устанавливайте, когда мод указывает его в требованиях.`)
};

const sv_explore_category_intro_library = /** @type {(inputs: Explore_Category_Intro_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delad kod som andra moddar bygger på. Installera den när en modd anger den som krav.`)
};

const tr_explore_category_intro_library = /** @type {(inputs: Explore_Category_Intro_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diğer modların ihtiyaç duyduğu ortak kod. Bir mod gereksinim olarak belirttiğinde kur.`)
};

const zh_explore_category_intro_library = /** @type {(inputs: Explore_Category_Intro_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`其他模组所依赖的共享代码。当某个模组将其列为前置时再安装。`)
};

const ja_explore_category_intro_library = /** @type {(inputs: Explore_Category_Intro_LibraryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ほかの MOD が依存する共有コード。MOD の必須要件に挙げられているときに導入します。`)
};

/**
* | output |
* | --- |
* | "Shared code other mods depend on. Install them when a mod lists them as a requirement." |
*
* @param {Explore_Category_Intro_LibraryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_category_intro_library = /** @type {((inputs?: Explore_Category_Intro_LibraryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Category_Intro_LibraryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_category_intro_library(inputs)
	if (locale === "de") return de_explore_category_intro_library(inputs)
	if (locale === "fr") return fr_explore_category_intro_library(inputs)
	if (locale === "it") return it_explore_category_intro_library(inputs)
	if (locale === "nl") return nl_explore_category_intro_library(inputs)
	if (locale === "pl") return pl_explore_category_intro_library(inputs)
	if (locale === "pt") return pt_explore_category_intro_library(inputs)
	if (locale === "ru") return ru_explore_category_intro_library(inputs)
	if (locale === "sv") return sv_explore_category_intro_library(inputs)
	if (locale === "tr") return tr_explore_category_intro_library(inputs)
	if (locale === "zh") return zh_explore_category_intro_library(inputs)
	if (locale === "ja") return ja_explore_category_intro_library(inputs)
	return en_explore_category_intro_library(inputs)
});
