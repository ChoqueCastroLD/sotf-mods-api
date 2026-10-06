/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Tax_Field_Hub_IntroInputs */

const en_admin_tax_field_hub_intro = /** @type {(inputs: Admin_Tax_Field_Hub_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Category page intro (Markdown, per language)`)
};

const es_admin_tax_field_hub_intro = /** @type {(inputs: Admin_Tax_Field_Hub_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Introducción de la página de categoría (Markdown, por idioma)`)
};

const de_admin_tax_field_hub_intro = /** @type {(inputs: Admin_Tax_Field_Hub_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Einleitung der Kategorieseite (Markdown, pro Sprache)`)
};

const fr_admin_tax_field_hub_intro = /** @type {(inputs: Admin_Tax_Field_Hub_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Introduction de la page de catégorie (Markdown, par langue)`)
};

const it_admin_tax_field_hub_intro = /** @type {(inputs: Admin_Tax_Field_Hub_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Introduzione della pagina della categoria (Markdown, per lingua)`)
};

const nl_admin_tax_field_hub_intro = /** @type {(inputs: Admin_Tax_Field_Hub_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Intro van de categoriepagina (Markdown, per taal)`)
};

const pl_admin_tax_field_hub_intro = /** @type {(inputs: Admin_Tax_Field_Hub_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wstęp strony kategorii (Markdown, dla każdego języka)`)
};

const pt_admin_tax_field_hub_intro = /** @type {(inputs: Admin_Tax_Field_Hub_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Introdução da página da categoria (Markdown, por idioma)`)
};

const ru_admin_tax_field_hub_intro = /** @type {(inputs: Admin_Tax_Field_Hub_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вступление страницы категории (Markdown, по языкам)`)
};

const sv_admin_tax_field_hub_intro = /** @type {(inputs: Admin_Tax_Field_Hub_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Intro för kategorisidan (Markdown, per språk)`)
};

const tr_admin_tax_field_hub_intro = /** @type {(inputs: Admin_Tax_Field_Hub_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategori sayfası girişi (Markdown, dile göre)`)
};

const zh_admin_tax_field_hub_intro = /** @type {(inputs: Admin_Tax_Field_Hub_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`分类页简介（Markdown，按语言）`)
};

const ja_admin_tax_field_hub_intro = /** @type {(inputs: Admin_Tax_Field_Hub_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`カテゴリーページの紹介文（Markdown、言語ごと）`)
};

/**
* | output |
* | --- |
* | "Category page intro (Markdown, per language)" |
*
* @param {Admin_Tax_Field_Hub_IntroInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tax_field_hub_intro = /** @type {((inputs?: Admin_Tax_Field_Hub_IntroInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tax_Field_Hub_IntroInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tax_field_hub_intro(inputs)
	if (locale === "de") return de_admin_tax_field_hub_intro(inputs)
	if (locale === "fr") return fr_admin_tax_field_hub_intro(inputs)
	if (locale === "it") return it_admin_tax_field_hub_intro(inputs)
	if (locale === "nl") return nl_admin_tax_field_hub_intro(inputs)
	if (locale === "pl") return pl_admin_tax_field_hub_intro(inputs)
	if (locale === "pt") return pt_admin_tax_field_hub_intro(inputs)
	if (locale === "ru") return ru_admin_tax_field_hub_intro(inputs)
	if (locale === "sv") return sv_admin_tax_field_hub_intro(inputs)
	if (locale === "tr") return tr_admin_tax_field_hub_intro(inputs)
	if (locale === "zh") return zh_admin_tax_field_hub_intro(inputs)
	if (locale === "ja") return ja_admin_tax_field_hub_intro(inputs)
	return en_admin_tax_field_hub_intro(inputs)
});
