/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Recat_DescriptionInputs */

const en_admin_recat_description = /** @type {(inputs: Admin_Recat_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Move mods into the new categories. Suggestions come from keyword rules and the imported CSV; nothing changes until you apply.`)
};

const es_admin_recat_description = /** @type {(inputs: Admin_Recat_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mueve los mods a las categorías nuevas. Las sugerencias salen de reglas por palabras clave y del CSV importado; nada cambia hasta que aplicas.`)
};

const de_admin_recat_description = /** @type {(inputs: Admin_Recat_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verschiebe Mods in die neuen Kategorien. Vorschläge kommen aus Schlagwortregeln und der importierten CSV; nichts ändert sich, bevor du anwendest.`)
};

const fr_admin_recat_description = /** @type {(inputs: Admin_Recat_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Déplacez les mods vers les nouvelles catégories. Les suggestions viennent de règles par mots-clés et du CSV importé ; rien ne change avant que vous appliquiez.`)
};

const it_admin_recat_description = /** @type {(inputs: Admin_Recat_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sposta le mod nelle nuove categorie. I suggerimenti vengono da regole per parole chiave e dal CSV importato; nulla cambia finché non applichi.`)
};

const nl_admin_recat_description = /** @type {(inputs: Admin_Recat_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verplaats mods naar de nieuwe categorieën. Suggesties komen uit trefwoordregels en de geïmporteerde CSV; er verandert niets tot je toepast.`)
};

const pl_admin_recat_description = /** @type {(inputs: Admin_Recat_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przenieś mody do nowych kategorii. Sugestie pochodzą z reguł słów kluczowych i zaimportowanego pliku CSV; nic się nie zmieni, dopóki ich nie zastosujesz.`)
};

const pt_admin_recat_description = /** @type {(inputs: Admin_Recat_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mova os mods para as novas categorias. As sugestões vêm de regras por palavras-chave e do CSV importado; nada muda até você aplicar.`)
};

const ru_admin_recat_description = /** @type {(inputs: Admin_Recat_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Перенесите моды в новые категории. Предложения берутся из правил по ключевым словам и из импортированного CSV; ничего не меняется, пока вы не примените.`)
};

const sv_admin_recat_description = /** @type {(inputs: Admin_Recat_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Flytta moddar till de nya kategorierna. Förslagen kommer från nyckelordsregler och den importerade CSV-filen; inget ändras förrän du tillämpar.`)
};

const tr_admin_recat_description = /** @type {(inputs: Admin_Recat_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modları yeni kategorilere taşı. Öneriler anahtar kelime kurallarından ve içe aktarılan CSV’den gelir; sen uygulamadıkça hiçbir şey değişmez.`)
};

const zh_admin_recat_description = /** @type {(inputs: Admin_Recat_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`把模组移到新的分类。建议来自关键词规则和导入的 CSV；在你应用之前什么都不会改变。`)
};

const ja_admin_recat_description = /** @type {(inputs: Admin_Recat_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD を新しいカテゴリーに移します。候補はキーワードルールとインポートした CSV から作られ、適用するまで何も変わりません。`)
};

/**
* | output |
* | --- |
* | "Move mods into the new categories. Suggestions come from keyword rules and the imported CSV; nothing changes until you apply." |
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
