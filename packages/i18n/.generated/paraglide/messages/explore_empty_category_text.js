/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Empty_Category_TextInputs */

const en_explore_empty_category_text = /** @type {(inputs: Explore_Empty_Category_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No mods in this category yet. Browse all mods or be the first to publish one.`)
};

const es_explore_empty_category_text = /** @type {(inputs: Explore_Empty_Category_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todavía no hay mods en esta categoría. Explora todos los mods o sé el primero en publicar uno.`)
};

const de_explore_empty_category_text = /** @type {(inputs: Explore_Empty_Category_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In dieser Kategorie gibt es noch keine Mods. Sieh dir alle Mods an oder veröffentliche als Erster eine.`)
};

const fr_explore_empty_category_text = /** @type {(inputs: Explore_Empty_Category_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pas encore de mods dans cette catégorie. Parcourez tous les mods ou publiez le premier.`)
};

const it_explore_empty_category_text = /** @type {(inputs: Explore_Empty_Category_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ancora nessuna mod in questa categoria. Sfoglia tutte le mod o pubblica la prima.`)
};

const nl_explore_empty_category_text = /** @type {(inputs: Explore_Empty_Category_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog geen mods in deze categorie. Bekijk alle mods of publiceer als eerste een mod.`)
};

const pl_explore_empty_category_text = /** @type {(inputs: Explore_Empty_Category_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`W tej kategorii nie ma jeszcze modów. Przejrzyj wszystkie mody albo opublikuj pierwszy.`)
};

const pt_explore_empty_category_text = /** @type {(inputs: Explore_Empty_Category_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ainda não há mods nesta categoria. Veja todos os mods ou seja o primeiro a publicar um.`)
};

const ru_explore_empty_category_text = /** @type {(inputs: Explore_Empty_Category_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`В этой категории пока нет модов. Посмотрите все моды или опубликуйте первый.`)
};

const sv_explore_empty_category_text = /** @type {(inputs: Explore_Empty_Category_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga moddar i den här kategorin än. Bläddra bland alla moddar eller bli först med att publicera en.`)
};

const tr_explore_empty_category_text = /** @type {(inputs: Explore_Empty_Category_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu kategoride henüz mod yok. Tüm modlara göz at ya da ilkini sen yayımla.`)
};

const zh_explore_empty_category_text = /** @type {(inputs: Explore_Empty_Category_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此分类暂无模组。浏览全部模组，或成为第一个发布的人。`)
};

const ja_explore_empty_category_text = /** @type {(inputs: Explore_Empty_Category_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このカテゴリにはまだ MOD がありません。すべての MOD を見るか、最初のひとつを公開しましょう。`)
};

/**
* | output |
* | --- |
* | "No mods in this category yet. Browse all mods or be the first to publish one." |
*
* @param {Explore_Empty_Category_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_empty_category_text = /** @type {((inputs?: Explore_Empty_Category_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Empty_Category_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_empty_category_text(inputs)
	if (locale === "de") return de_explore_empty_category_text(inputs)
	if (locale === "fr") return fr_explore_empty_category_text(inputs)
	if (locale === "it") return it_explore_empty_category_text(inputs)
	if (locale === "nl") return nl_explore_empty_category_text(inputs)
	if (locale === "pl") return pl_explore_empty_category_text(inputs)
	if (locale === "pt") return pt_explore_empty_category_text(inputs)
	if (locale === "ru") return ru_explore_empty_category_text(inputs)
	if (locale === "sv") return sv_explore_empty_category_text(inputs)
	if (locale === "tr") return tr_explore_empty_category_text(inputs)
	if (locale === "zh") return zh_explore_empty_category_text(inputs)
	if (locale === "ja") return ja_explore_empty_category_text(inputs)
	return en_explore_empty_category_text(inputs)
});
