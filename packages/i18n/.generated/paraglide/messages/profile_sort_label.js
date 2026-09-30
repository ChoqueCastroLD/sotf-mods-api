/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Sort_LabelInputs */

const en_profile_sort_label = /** @type {(inputs: Profile_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sort`)
};

const es_profile_sort_label = /** @type {(inputs: Profile_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ordenar`)
};

const de_profile_sort_label = /** @type {(inputs: Profile_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sortieren`)
};

const fr_profile_sort_label = /** @type {(inputs: Profile_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trier`)
};

const it_profile_sort_label = /** @type {(inputs: Profile_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ordina`)
};

const nl_profile_sort_label = /** @type {(inputs: Profile_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sorteren`)
};

const pl_profile_sort_label = /** @type {(inputs: Profile_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sortuj`)
};

const pt_profile_sort_label = /** @type {(inputs: Profile_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ordenar`)
};

const ru_profile_sort_label = /** @type {(inputs: Profile_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сортировка`)
};

const sv_profile_sort_label = /** @type {(inputs: Profile_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sortera`)
};

const tr_profile_sort_label = /** @type {(inputs: Profile_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sırala`)
};

const zh_profile_sort_label = /** @type {(inputs: Profile_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`排序`)
};

const ja_profile_sort_label = /** @type {(inputs: Profile_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`並べ替え`)
};

/**
* | output |
* | --- |
* | "Sort" |
*
* @param {Profile_Sort_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_sort_label = /** @type {((inputs?: Profile_Sort_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Sort_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_sort_label(inputs)
	if (locale === "de") return de_profile_sort_label(inputs)
	if (locale === "fr") return fr_profile_sort_label(inputs)
	if (locale === "it") return it_profile_sort_label(inputs)
	if (locale === "nl") return nl_profile_sort_label(inputs)
	if (locale === "pl") return pl_profile_sort_label(inputs)
	if (locale === "pt") return pt_profile_sort_label(inputs)
	if (locale === "ru") return ru_profile_sort_label(inputs)
	if (locale === "sv") return sv_profile_sort_label(inputs)
	if (locale === "tr") return tr_profile_sort_label(inputs)
	if (locale === "zh") return zh_profile_sort_label(inputs)
	if (locale === "ja") return ja_profile_sort_label(inputs)
	return en_profile_sort_label(inputs)
});
