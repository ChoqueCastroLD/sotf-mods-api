/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Tax_Categories_HintInputs */

const en_admin_tax_categories_hint = /** @type {(inputs: Admin_Tax_Categories_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categories are never deleted: retire one once its mods have moved, and add its slug to the successor’s legacy slugs so old links keep working.`)
};

const es_admin_tax_categories_hint = /** @type {(inputs: Admin_Tax_Categories_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Las categorías nunca se eliminan: retira una cuando sus mods se hayan movido y añade su slug a los slugs antiguos de la sucesora para que los enlaces viejos sigan funcionando.`)
};

const de_admin_tax_categories_hint = /** @type {(inputs: Admin_Tax_Categories_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategorien werden nie gelöscht: Lege eine still, sobald ihre Mods umgezogen sind, und trage ihren Slug bei den alten Slugs der Nachfolgerin ein, damit alte Links weiter funktionieren.`)
};

const fr_admin_tax_categories_hint = /** @type {(inputs: Admin_Tax_Categories_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les catégories ne sont jamais supprimées : retirez-en une une fois ses mods déplacés, et ajoutez son slug aux anciens slugs de la remplaçante pour que les vieux liens fonctionnent encore.`)
};

const it_admin_tax_categories_hint = /** @type {(inputs: Admin_Tax_Categories_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le categorie non si eliminano mai: ritirane una quando le sue mod sono state spostate e aggiungi il suo slug ai vecchi slug della sostituta, così i vecchi link continuano a funzionare.`)
};

const nl_admin_tax_categories_hint = /** @type {(inputs: Admin_Tax_Categories_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categorieën worden nooit verwijderd: trek er een in zodra de mods verhuisd zijn en zet de slug bij de oude slugs van de opvolger, zodat oude links blijven werken.`)
};

const pl_admin_tax_categories_hint = /** @type {(inputs: Admin_Tax_Categories_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategorii nigdy się nie usuwa: wycofaj kategorię, gdy jej mody zostaną przeniesione, i dodaj jej slug do starych slugów następczyni, żeby stare linki dalej działały.`)
};

const pt_admin_tax_categories_hint = /** @type {(inputs: Admin_Tax_Categories_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categorias nunca são excluídas: aposente uma quando seus mods tiverem sido movidos e adicione o slug dela aos slugs antigos da sucessora para que links antigos continuem funcionando.`)
};

const ru_admin_tax_categories_hint = /** @type {(inputs: Admin_Tax_Categories_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Категории никогда не удаляются: выведите категорию из обращения, когда её моды перенесены, и добавьте её слаг в старые слаги преемницы, чтобы старые ссылки продолжали работать.`)
};

const sv_admin_tax_categories_hint = /** @type {(inputs: Admin_Tax_Categories_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategorier tas aldrig bort: pensionera en när dess moddar har flyttats, och lägg till dess slug bland efterföljarens gamla sluggar så att gamla länkar fortsätter fungera.`)
};

const tr_admin_tax_categories_hint = /** @type {(inputs: Admin_Tax_Categories_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategoriler asla silinmez: modları taşındıktan sonra bir kategoriyi emekliye ayır ve slug’ını halefinin eski slug’larına ekle ki eski bağlantılar çalışmaya devam etsin.`)
};

const zh_admin_tax_categories_hint = /** @type {(inputs: Admin_Tax_Categories_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`分类永远不会被删除：在其模组迁移完成后停用它，并把它的 slug 加入继任分类的旧 slug，让旧链接继续可用。`)
};

const ja_admin_tax_categories_hint = /** @type {(inputs: Admin_Tax_Categories_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`カテゴリーは削除されません。MOD の移動が済んだら引退させ、そのスラッグを後継カテゴリーの旧スラッグに加えて古いリンクが使えるようにしてください。`)
};

/**
* | output |
* | --- |
* | "Categories are never deleted: retire one once its mods have moved, and add its slug to the successor’s legacy slugs so old links keep working." |
*
* @param {Admin_Tax_Categories_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tax_categories_hint = /** @type {((inputs?: Admin_Tax_Categories_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tax_Categories_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tax_categories_hint(inputs)
	if (locale === "de") return de_admin_tax_categories_hint(inputs)
	if (locale === "fr") return fr_admin_tax_categories_hint(inputs)
	if (locale === "it") return it_admin_tax_categories_hint(inputs)
	if (locale === "nl") return nl_admin_tax_categories_hint(inputs)
	if (locale === "pl") return pl_admin_tax_categories_hint(inputs)
	if (locale === "pt") return pt_admin_tax_categories_hint(inputs)
	if (locale === "ru") return ru_admin_tax_categories_hint(inputs)
	if (locale === "sv") return sv_admin_tax_categories_hint(inputs)
	if (locale === "tr") return tr_admin_tax_categories_hint(inputs)
	if (locale === "zh") return zh_admin_tax_categories_hint(inputs)
	if (locale === "ja") return ja_admin_tax_categories_hint(inputs)
	return en_admin_tax_categories_hint(inputs)
});
