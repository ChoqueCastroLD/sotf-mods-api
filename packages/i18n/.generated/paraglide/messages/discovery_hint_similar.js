/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Discovery_Hint_SimilarInputs */

const en_discovery_hint_similar = /** @type {(inputs: Discovery_Hint_SimilarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods with matching tags and category.`)
};

const es_discovery_hint_similar = /** @type {(inputs: Discovery_Hint_SimilarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods con etiquetas y categoría parecidas.`)
};

const de_discovery_hint_similar = /** @type {(inputs: Discovery_Hint_SimilarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods mit passenden Tags und Kategorie.`)
};

const fr_discovery_hint_similar = /** @type {(inputs: Discovery_Hint_SimilarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Des mods aux tags et à la catégorie proches.`)
};

const it_discovery_hint_similar = /** @type {(inputs: Discovery_Hint_SimilarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod con tag e categoria simili.`)
};

const nl_discovery_hint_similar = /** @type {(inputs: Discovery_Hint_SimilarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods met overeenkomstige tags en categorie.`)
};

const pl_discovery_hint_similar = /** @type {(inputs: Discovery_Hint_SimilarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mody o zbliżonych tagach i kategorii.`)
};

const pt_discovery_hint_similar = /** @type {(inputs: Discovery_Hint_SimilarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods com etiquetas e categoria parecidas.`)
};

const ru_discovery_hint_similar = /** @type {(inputs: Discovery_Hint_SimilarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Моды с похожими тегами и категорией.`)
};

const sv_discovery_hint_similar = /** @type {(inputs: Discovery_Hint_SimilarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moddar med liknande taggar och kategori.`)
};

const tr_discovery_hint_similar = /** @type {(inputs: Discovery_Hint_SimilarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Benzer etiket ve kategoriye sahip modlar.`)
};

const zh_discovery_hint_similar = /** @type {(inputs: Discovery_Hint_SimilarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`标签和分类相近的模组。`)
};

const ja_discovery_hint_similar = /** @type {(inputs: Discovery_Hint_SimilarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`タグとカテゴリが近いMod。`)
};

/**
* | output |
* | --- |
* | "Mods with matching tags and category." |
*
* @param {Discovery_Hint_SimilarInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const discovery_hint_similar = /** @type {((inputs?: Discovery_Hint_SimilarInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Discovery_Hint_SimilarInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_discovery_hint_similar(inputs)
	if (locale === "de") return de_discovery_hint_similar(inputs)
	if (locale === "fr") return fr_discovery_hint_similar(inputs)
	if (locale === "it") return it_discovery_hint_similar(inputs)
	if (locale === "nl") return nl_discovery_hint_similar(inputs)
	if (locale === "pl") return pl_discovery_hint_similar(inputs)
	if (locale === "pt") return pt_discovery_hint_similar(inputs)
	if (locale === "ru") return ru_discovery_hint_similar(inputs)
	if (locale === "sv") return sv_discovery_hint_similar(inputs)
	if (locale === "tr") return tr_discovery_hint_similar(inputs)
	if (locale === "zh") return zh_discovery_hint_similar(inputs)
	if (locale === "ja") return ja_discovery_hint_similar(inputs)
	return en_discovery_hint_similar(inputs)
});
