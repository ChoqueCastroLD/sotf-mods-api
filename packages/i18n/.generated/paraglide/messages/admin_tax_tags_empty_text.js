/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Tax_Tags_Empty_TextInputs */

const en_admin_tax_tags_empty_text = /** @type {(inputs: Admin_Tax_Tags_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create curated tags to describe mods beyond their category.`)
};

const es_admin_tax_tags_empty_text = /** @type {(inputs: Admin_Tax_Tags_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crea etiquetas curadas para describir los mods más allá de su categoría.`)
};

const de_admin_tax_tags_empty_text = /** @type {(inputs: Admin_Tax_Tags_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lege kuratierte Tags an, um Mods über ihre Kategorie hinaus zu beschreiben.`)
};

const fr_admin_tax_tags_empty_text = /** @type {(inputs: Admin_Tax_Tags_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créez des tags sélectionnés pour décrire les mods au-delà de leur catégorie.`)
};

const it_admin_tax_tags_empty_text = /** @type {(inputs: Admin_Tax_Tags_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crea tag curati per descrivere le mod oltre alla loro categoria.`)
};

const nl_admin_tax_tags_empty_text = /** @type {(inputs: Admin_Tax_Tags_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Maak geselecteerde tags om mods te beschrijven naast hun categorie.`)
};

const pl_admin_tax_tags_empty_text = /** @type {(inputs: Admin_Tax_Tags_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utwórz wybrane tagi, aby opisywać mody szerzej niż ich kategoria.`)
};

const pt_admin_tax_tags_empty_text = /** @type {(inputs: Admin_Tax_Tags_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crie tags selecionadas para descrever os mods além da categoria.`)
};

const ru_admin_tax_tags_empty_text = /** @type {(inputs: Admin_Tax_Tags_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Создайте отобранные теги, чтобы описывать моды не только категорией.`)
};

const sv_admin_tax_tags_empty_text = /** @type {(inputs: Admin_Tax_Tags_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skapa utvalda taggar för att beskriva moddar utöver deras kategori.`)
};

const tr_admin_tax_tags_empty_text = /** @type {(inputs: Admin_Tax_Tags_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modları kategorilerinin ötesinde tanımlamak için seçilmiş etiketler oluştur.`)
};

const zh_admin_tax_tags_empty_text = /** @type {(inputs: Admin_Tax_Tags_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创建精选标签，在分类之外描述模组。`)
};

const ja_admin_tax_tags_empty_text = /** @type {(inputs: Admin_Tax_Tags_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`カテゴリー以外の観点で MOD を表す厳選タグを作成しましょう。`)
};

/**
* | output |
* | --- |
* | "Create curated tags to describe mods beyond their category." |
*
* @param {Admin_Tax_Tags_Empty_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tax_tags_empty_text = /** @type {((inputs?: Admin_Tax_Tags_Empty_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tax_Tags_Empty_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tax_tags_empty_text(inputs)
	if (locale === "de") return de_admin_tax_tags_empty_text(inputs)
	if (locale === "fr") return fr_admin_tax_tags_empty_text(inputs)
	if (locale === "it") return it_admin_tax_tags_empty_text(inputs)
	if (locale === "nl") return nl_admin_tax_tags_empty_text(inputs)
	if (locale === "pl") return pl_admin_tax_tags_empty_text(inputs)
	if (locale === "pt") return pt_admin_tax_tags_empty_text(inputs)
	if (locale === "ru") return ru_admin_tax_tags_empty_text(inputs)
	if (locale === "sv") return sv_admin_tax_tags_empty_text(inputs)
	if (locale === "tr") return tr_admin_tax_tags_empty_text(inputs)
	if (locale === "zh") return zh_admin_tax_tags_empty_text(inputs)
	if (locale === "ja") return ja_admin_tax_tags_empty_text(inputs)
	return en_admin_tax_tags_empty_text(inputs)
});
