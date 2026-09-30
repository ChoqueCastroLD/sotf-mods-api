/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Template_Wrong_CategoryInputs */

const en_ranger_template_wrong_category = /** @type {(inputs: Ranger_Template_Wrong_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Please move the mod to the category that matches what it does.`)
};

const es_ranger_template_wrong_category = /** @type {(inputs: Ranger_Template_Wrong_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mueve el mod a la categoría que corresponde a lo que hace.`)
};

const de_ranger_template_wrong_category = /** @type {(inputs: Ranger_Template_Wrong_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verschiebe den Mod bitte in die Kategorie, die zu seiner Funktion passt.`)
};

const fr_ranger_template_wrong_category = /** @type {(inputs: Ranger_Template_Wrong_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Déplacez le mod dans la catégorie qui correspond à ce qu’il fait.`)
};

const it_ranger_template_wrong_category = /** @type {(inputs: Ranger_Template_Wrong_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sposta la mod nella categoria che corrisponde a ciò che fa.`)
};

const nl_ranger_template_wrong_category = /** @type {(inputs: Ranger_Template_Wrong_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zet de mod in de categorie die past bij wat hij doet.`)
};

const pl_ranger_template_wrong_category = /** @type {(inputs: Ranger_Template_Wrong_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przenieś mod do kategorii, która pasuje do tego, co robi.`)
};

const pt_ranger_template_wrong_category = /** @type {(inputs: Ranger_Template_Wrong_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mova o mod para a categoria que corresponde ao que ele faz.`)
};

const ru_ranger_template_wrong_category = /** @type {(inputs: Ranger_Template_Wrong_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Перенесите мод в категорию, соответствующую тому, что он делает.`)
};

const sv_ranger_template_wrong_category = /** @type {(inputs: Ranger_Template_Wrong_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Flytta modden till den kategori som passar det den gör.`)
};

const tr_ranger_template_wrong_category = /** @type {(inputs: Ranger_Template_Wrong_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lütfen modu yaptığı işe uyan kategoriye taşıyın.`)
};

const zh_ranger_template_wrong_category = /** @type {(inputs: Ranger_Template_Wrong_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请把模组移到与其功能相符的分类。`)
};

const ja_ranger_template_wrong_category = /** @type {(inputs: Ranger_Template_Wrong_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MODの内容に合ったカテゴリーに移動してください。`)
};

/**
* | output |
* | --- |
* | "Please move the mod to the category that matches what it does." |
*
* @param {Ranger_Template_Wrong_CategoryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_template_wrong_category = /** @type {((inputs?: Ranger_Template_Wrong_CategoryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Template_Wrong_CategoryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_template_wrong_category(inputs)
	if (locale === "de") return de_ranger_template_wrong_category(inputs)
	if (locale === "fr") return fr_ranger_template_wrong_category(inputs)
	if (locale === "it") return it_ranger_template_wrong_category(inputs)
	if (locale === "nl") return nl_ranger_template_wrong_category(inputs)
	if (locale === "pl") return pl_ranger_template_wrong_category(inputs)
	if (locale === "pt") return pt_ranger_template_wrong_category(inputs)
	if (locale === "ru") return ru_ranger_template_wrong_category(inputs)
	if (locale === "sv") return sv_ranger_template_wrong_category(inputs)
	if (locale === "tr") return tr_ranger_template_wrong_category(inputs)
	if (locale === "zh") return zh_ranger_template_wrong_category(inputs)
	if (locale === "ja") return ja_ranger_template_wrong_category(inputs)
	return en_ranger_template_wrong_category(inputs)
});
