/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Reviews_Sort_LabelInputs */

const en_mod_reviews_sort_label = /** @type {(inputs: Mod_Reviews_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sort reviews`)
};

const es_mod_reviews_sort_label = /** @type {(inputs: Mod_Reviews_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ordenar reseñas`)
};

const de_mod_reviews_sort_label = /** @type {(inputs: Mod_Reviews_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bewertungen sortieren`)
};

const fr_mod_reviews_sort_label = /** @type {(inputs: Mod_Reviews_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trier les avis`)
};

const it_mod_reviews_sort_label = /** @type {(inputs: Mod_Reviews_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ordina le recensioni`)
};

const nl_mod_reviews_sort_label = /** @type {(inputs: Mod_Reviews_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reviews sorteren`)
};

const pl_mod_reviews_sort_label = /** @type {(inputs: Mod_Reviews_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sortuj recenzje`)
};

const pt_mod_reviews_sort_label = /** @type {(inputs: Mod_Reviews_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ordenar avaliações`)
};

const ru_mod_reviews_sort_label = /** @type {(inputs: Mod_Reviews_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сортировка отзывов`)
};

const sv_mod_reviews_sort_label = /** @type {(inputs: Mod_Reviews_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sortera recensioner`)
};

const tr_mod_reviews_sort_label = /** @type {(inputs: Mod_Reviews_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İncelemeleri sırala`)
};

const zh_mod_reviews_sort_label = /** @type {(inputs: Mod_Reviews_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`评价排序`)
};

const ja_mod_reviews_sort_label = /** @type {(inputs: Mod_Reviews_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レビューの並べ替え`)
};

/**
* | output |
* | --- |
* | "Sort reviews" |
*
* @param {Mod_Reviews_Sort_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_reviews_sort_label = /** @type {((inputs?: Mod_Reviews_Sort_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Reviews_Sort_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_reviews_sort_label(inputs)
	if (locale === "de") return de_mod_reviews_sort_label(inputs)
	if (locale === "fr") return fr_mod_reviews_sort_label(inputs)
	if (locale === "it") return it_mod_reviews_sort_label(inputs)
	if (locale === "nl") return nl_mod_reviews_sort_label(inputs)
	if (locale === "pl") return pl_mod_reviews_sort_label(inputs)
	if (locale === "pt") return pt_mod_reviews_sort_label(inputs)
	if (locale === "ru") return ru_mod_reviews_sort_label(inputs)
	if (locale === "sv") return sv_mod_reviews_sort_label(inputs)
	if (locale === "tr") return tr_mod_reviews_sort_label(inputs)
	if (locale === "zh") return zh_mod_reviews_sort_label(inputs)
	if (locale === "ja") return ja_mod_reviews_sort_label(inputs)
	return en_mod_reviews_sort_label(inputs)
});
