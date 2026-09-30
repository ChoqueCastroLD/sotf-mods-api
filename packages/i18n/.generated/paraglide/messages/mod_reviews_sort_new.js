/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Reviews_Sort_NewInputs */

const en_mod_reviews_sort_new = /** @type {(inputs: Mod_Reviews_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Most recent`)
};

const es_mod_reviews_sort_new = /** @type {(inputs: Mod_Reviews_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Más recientes`)
};

const de_mod_reviews_sort_new = /** @type {(inputs: Mod_Reviews_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neueste`)
};

const fr_mod_reviews_sort_new = /** @type {(inputs: Mod_Reviews_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les plus récents`)
};

const it_mod_reviews_sort_new = /** @type {(inputs: Mod_Reviews_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Più recenti`)
};

const nl_mod_reviews_sort_new = /** @type {(inputs: Mod_Reviews_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuwst`)
};

const pl_mod_reviews_sort_new = /** @type {(inputs: Mod_Reviews_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najnowsze`)
};

const pt_mod_reviews_sort_new = /** @type {(inputs: Mod_Reviews_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mais recentes`)
};

const ru_mod_reviews_sort_new = /** @type {(inputs: Mod_Reviews_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новые`)
};

const sv_mod_reviews_sort_new = /** @type {(inputs: Mod_Reviews_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Senaste`)
};

const tr_mod_reviews_sort_new = /** @type {(inputs: Mod_Reviews_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En yeni`)
};

const zh_mod_reviews_sort_new = /** @type {(inputs: Mod_Reviews_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最新`)
};

const ja_mod_reviews_sort_new = /** @type {(inputs: Mod_Reviews_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しい順`)
};

/**
* | output |
* | --- |
* | "Most recent" |
*
* @param {Mod_Reviews_Sort_NewInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_reviews_sort_new = /** @type {((inputs?: Mod_Reviews_Sort_NewInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Reviews_Sort_NewInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_reviews_sort_new(inputs)
	if (locale === "de") return de_mod_reviews_sort_new(inputs)
	if (locale === "fr") return fr_mod_reviews_sort_new(inputs)
	if (locale === "it") return it_mod_reviews_sort_new(inputs)
	if (locale === "nl") return nl_mod_reviews_sort_new(inputs)
	if (locale === "pl") return pl_mod_reviews_sort_new(inputs)
	if (locale === "pt") return pt_mod_reviews_sort_new(inputs)
	if (locale === "ru") return ru_mod_reviews_sort_new(inputs)
	if (locale === "sv") return sv_mod_reviews_sort_new(inputs)
	if (locale === "tr") return tr_mod_reviews_sort_new(inputs)
	if (locale === "zh") return zh_mod_reviews_sort_new(inputs)
	if (locale === "ja") return ja_mod_reviews_sort_new(inputs)
	return en_mod_reviews_sort_new(inputs)
});
