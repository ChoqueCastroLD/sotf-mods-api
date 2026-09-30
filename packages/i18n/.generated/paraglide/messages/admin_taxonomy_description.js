/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Taxonomy_DescriptionInputs */

const en_admin_taxonomy_description = /** @type {(inputs: Admin_Taxonomy_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The taxonomy of mods and builds: names in every language, order, legacy slugs and the curated tags.`)
};

const es_admin_taxonomy_description = /** @type {(inputs: Admin_Taxonomy_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La taxonomía de mods y builds: nombres en cada idioma, orden, slugs antiguos y las etiquetas curadas.`)
};

const de_admin_taxonomy_description = /** @type {(inputs: Admin_Taxonomy_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Taxonomie von Mods und Builds: Namen in jeder Sprache, Reihenfolge, alte Slugs und die kuratierten Tags.`)
};

const fr_admin_taxonomy_description = /** @type {(inputs: Admin_Taxonomy_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La taxonomie des mods et des builds : noms dans chaque langue, ordre, anciens slugs et tags sélectionnés.`)
};

const it_admin_taxonomy_description = /** @type {(inputs: Admin_Taxonomy_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La tassonomia di mod e build: nomi in ogni lingua, ordine, vecchi slug e tag curati.`)
};

const nl_admin_taxonomy_description = /** @type {(inputs: Admin_Taxonomy_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De taxonomie van mods en builds: namen in elke taal, volgorde, oude slugs en de geselecteerde tags.`)
};

const pl_admin_taxonomy_description = /** @type {(inputs: Admin_Taxonomy_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taksonomia modów i buildów: nazwy w każdym języku, kolejność, stare slugi i wybrane tagi.`)
};

const pt_admin_taxonomy_description = /** @type {(inputs: Admin_Taxonomy_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A taxonomia de mods e builds: nomes em cada idioma, ordem, slugs antigos e as tags selecionadas.`)
};

const ru_admin_taxonomy_description = /** @type {(inputs: Admin_Taxonomy_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Таксономия модов и билдов: названия на всех языках, порядок, старые слаги и отобранные теги.`)
};

const sv_admin_taxonomy_description = /** @type {(inputs: Admin_Taxonomy_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taxonomin för moddar och byggen: namn på alla språk, ordning, gamla sluggar och de utvalda taggarna.`)
};

const tr_admin_taxonomy_description = /** @type {(inputs: Admin_Taxonomy_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modların ve yapıların sınıflandırması: her dilde adlar, sıra, eski slug’lar ve seçilmiş etiketler.`)
};

const zh_admin_taxonomy_description = /** @type {(inputs: Admin_Taxonomy_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模组和建筑的分类体系：各语言名称、排序、旧 slug 以及精选标签。`)
};

const ja_admin_taxonomy_description = /** @type {(inputs: Admin_Taxonomy_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD と建築データの分類：各言語の名前、並び順、旧スラッグ、厳選タグ。`)
};

/**
* | output |
* | --- |
* | "The taxonomy of mods and builds: names in every language, order, legacy slugs and the curated tags." |
*
* @param {Admin_Taxonomy_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_taxonomy_description = /** @type {((inputs?: Admin_Taxonomy_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Taxonomy_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_taxonomy_description(inputs)
	if (locale === "de") return de_admin_taxonomy_description(inputs)
	if (locale === "fr") return fr_admin_taxonomy_description(inputs)
	if (locale === "it") return it_admin_taxonomy_description(inputs)
	if (locale === "nl") return nl_admin_taxonomy_description(inputs)
	if (locale === "pl") return pl_admin_taxonomy_description(inputs)
	if (locale === "pt") return pt_admin_taxonomy_description(inputs)
	if (locale === "ru") return ru_admin_taxonomy_description(inputs)
	if (locale === "sv") return sv_admin_taxonomy_description(inputs)
	if (locale === "tr") return tr_admin_taxonomy_description(inputs)
	if (locale === "zh") return zh_admin_taxonomy_description(inputs)
	if (locale === "ja") return ja_admin_taxonomy_description(inputs)
	return en_admin_taxonomy_description(inputs)
});
