/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Recat_DescriptionInputs */

const en_admin_recat_description = /** @type {(inputs: Admin_Recat_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Move mods into the v2 categories. Suggestions come from keyword rules and the imported CSV; nothing changes until you apply.`)
};

const es_admin_recat_description = /** @type {(inputs: Admin_Recat_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mueve los mods a las categorías de v2. Las sugerencias salen de reglas por palabras clave y del CSV importado; nada cambia hasta que aplicas.`)
};

const de_admin_recat_description = /** @type {(inputs: Admin_Recat_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verschiebe Mods in die v2-Kategorien. Vorschläge kommen aus Schlagwortregeln und der importierten CSV; nichts ändert sich, bevor du anwendest.`)
};

const fr_admin_recat_description = /** @type {(inputs: Admin_Recat_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Déplacez les mods vers les catégories v2. Les suggestions viennent de règles par mots-clés et du CSV importé ; rien ne change avant que vous appliquiez.`)
};

const it_admin_recat_description = /** @type {(inputs: Admin_Recat_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sposta le mod nelle categorie v2. I suggerimenti vengono da regole per parole chiave e dal CSV importato; nulla cambia finché non applichi.`)
};

const nl_admin_recat_description = /** @type {(inputs: Admin_Recat_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verplaats mods naar de v2-categorieën. Suggesties komen uit trefwoordregels en de geïmporteerde CSV; er verandert niets tot je toepast.`)
};

const pl_admin_recat_description = /** @type {(inputs: Admin_Recat_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przenieś mody do kategorii v2. Sugestie pochodzą z reguł słów kluczowych i zaimportowanego pliku CSV; nic się nie zmieni, dopóki ich nie zastosujesz.`)
};

const pt_admin_recat_description = /** @type {(inputs: Admin_Recat_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mova os mods para as categorias da v2. As sugestões vêm de regras por palavras-chave e do CSV importado; nada muda até você aplicar.`)
};

const ru_admin_recat_description = /** @type {(inputs: Admin_Recat_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Перенесите моды в категории v2. Предложения берутся из правил по ключевым словам и из импортированного CSV; ничего не меняется, пока вы не примените.`)
};

const sv_admin_recat_description = /** @type {(inputs: Admin_Recat_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Flytta moddar till v2-kategorierna. Förslagen kommer från nyckelordsregler och den importerade CSV-filen; inget ändras förrän du tillämpar.`)
};

const tr_admin_recat_description = /** @type {(inputs: Admin_Recat_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modları v2 kategorilerine taşı. Öneriler anahtar kelime kurallarından ve içe aktarılan CSV’den gelir; sen uygulamadıkça hiçbir şey değişmez.`)
};

const zh_admin_recat_description = /** @type {(inputs: Admin_Recat_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`把模组移到 v2 分类。建议来自关键词规则和导入的 CSV；在你应用之前什么都不会改变。`)
};

const ja_admin_recat_description = /** @type {(inputs: Admin_Recat_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD を v2 のカテゴリーに移します。候補はキーワードルールとインポートした CSV から作られ、適用するまで何も変わりません。`)
};

/**
* | output |
* | --- |
* | "Move mods into the v2 categories. Suggestions come from keyword rules and the imported CSV; nothing changes until you apply." |
*
* @param {Admin_Recat_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_description = /** @type {((inputs?: Admin_Recat_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_description(inputs)
	if (locale === "de") return de_admin_recat_description(inputs)
	if (locale === "fr") return fr_admin_recat_description(inputs)
	if (locale === "it") return it_admin_recat_description(inputs)
	if (locale === "nl") return nl_admin_recat_description(inputs)
	if (locale === "pl") return pl_admin_recat_description(inputs)
	if (locale === "pt") return pt_admin_recat_description(inputs)
	if (locale === "ru") return ru_admin_recat_description(inputs)
	if (locale === "sv") return sv_admin_recat_description(inputs)
	if (locale === "tr") return tr_admin_recat_description(inputs)
	if (locale === "zh") return zh_admin_recat_description(inputs)
	if (locale === "ja") return ja_admin_recat_description(inputs)
	return en_admin_recat_description(inputs)
});
