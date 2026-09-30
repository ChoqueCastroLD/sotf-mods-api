/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Search_Empty_HintInputs */

const en_explore_search_empty_hint = /** @type {(inputs: Explore_Search_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Check the spelling, try fewer words or the mod’s manifest ID, or browse by category.`)
};

const es_explore_search_empty_hint = /** @type {(inputs: Explore_Search_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revisa la ortografía, prueba con menos palabras o con el ID del manifiesto del mod, o explora por categoría.`)
};

const de_explore_search_empty_hint = /** @type {(inputs: Explore_Search_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prüfe die Schreibweise, versuch es mit weniger Wörtern oder der Manifest-ID der Mod, oder stöbere nach Kategorie.`)
};

const fr_explore_search_empty_hint = /** @type {(inputs: Explore_Search_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vérifiez l’orthographe, essayez moins de mots ou l’identifiant de manifeste du mod, ou parcourez les catégories.`)
};

const it_explore_search_empty_hint = /** @type {(inputs: Explore_Search_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Controlla l’ortografia, prova con meno parole o con l’ID del manifest della mod, oppure sfoglia per categoria.`)
};

const nl_explore_search_empty_hint = /** @type {(inputs: Explore_Search_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Controleer de spelling, probeer minder woorden of het manifest-ID van de mod, of blader per categorie.`)
};

const pl_explore_search_empty_hint = /** @type {(inputs: Explore_Search_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sprawdź pisownię, spróbuj mniejszej liczby słów lub ID manifestu moda albo przeglądaj według kategorii.`)
};

const pt_explore_search_empty_hint = /** @type {(inputs: Explore_Search_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confira a ortografia, tente menos palavras ou o ID do manifesto do mod, ou navegue por categoria.`)
};

const ru_explore_search_empty_hint = /** @type {(inputs: Explore_Search_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Проверьте написание, попробуйте меньше слов или ID манифеста мода либо посмотрите категории.`)
};

const sv_explore_search_empty_hint = /** @type {(inputs: Explore_Search_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kontrollera stavningen, prova färre ord eller moddens manifest-ID, eller bläddra per kategori.`)
};

const tr_explore_search_empty_hint = /** @type {(inputs: Explore_Search_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yazımı kontrol et, daha az kelime ya da modun manifest kimliğini dene veya kategorilere göz at.`)
};

const zh_explore_search_empty_hint = /** @type {(inputs: Explore_Search_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`检查拼写，减少关键词或尝试模组的清单 ID，也可以按分类浏览。`)
};

const ja_explore_search_empty_hint = /** @type {(inputs: Explore_Search_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`つづりを確認するか、言葉を減らすか、MOD のマニフェスト ID を試してください。カテゴリから探すこともできます。`)
};

/**
* | output |
* | --- |
* | "Check the spelling, try fewer words or the mod’s manifest ID, or browse by category." |
*
* @param {Explore_Search_Empty_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_search_empty_hint = /** @type {((inputs?: Explore_Search_Empty_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Search_Empty_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_search_empty_hint(inputs)
	if (locale === "de") return de_explore_search_empty_hint(inputs)
	if (locale === "fr") return fr_explore_search_empty_hint(inputs)
	if (locale === "it") return it_explore_search_empty_hint(inputs)
	if (locale === "nl") return nl_explore_search_empty_hint(inputs)
	if (locale === "pl") return pl_explore_search_empty_hint(inputs)
	if (locale === "pt") return pt_explore_search_empty_hint(inputs)
	if (locale === "ru") return ru_explore_search_empty_hint(inputs)
	if (locale === "sv") return sv_explore_search_empty_hint(inputs)
	if (locale === "tr") return tr_explore_search_empty_hint(inputs)
	if (locale === "zh") return zh_explore_search_empty_hint(inputs)
	if (locale === "ja") return ja_explore_search_empty_hint(inputs)
	return en_explore_search_empty_hint(inputs)
});
