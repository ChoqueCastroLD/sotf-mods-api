/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Sort_NewInputs */

const en_profile_sort_new = /** @type {(inputs: Profile_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Newest`)
};

const es_profile_sort_new = /** @type {(inputs: Profile_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Más nuevos`)
};

const de_profile_sort_new = /** @type {(inputs: Profile_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neueste`)
};

const fr_profile_sort_new = /** @type {(inputs: Profile_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les plus récents`)
};

const it_profile_sort_new = /** @type {(inputs: Profile_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Più recenti`)
};

const nl_profile_sort_new = /** @type {(inputs: Profile_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuwste`)
};

const pl_profile_sort_new = /** @type {(inputs: Profile_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najnowsze`)
};

const pt_profile_sort_new = /** @type {(inputs: Profile_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mais novos`)
};

const ru_profile_sort_new = /** @type {(inputs: Profile_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новые`)
};

const sv_profile_sort_new = /** @type {(inputs: Profile_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nyaste`)
};

const tr_profile_sort_new = /** @type {(inputs: Profile_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En yeni`)
};

const zh_profile_sort_new = /** @type {(inputs: Profile_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最新`)
};

const ja_profile_sort_new = /** @type {(inputs: Profile_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新着順`)
};

/**
* | output |
* | --- |
* | "Newest" |
*
* @param {Profile_Sort_NewInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_sort_new = /** @type {((inputs?: Profile_Sort_NewInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Sort_NewInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_sort_new(inputs)
	if (locale === "de") return de_profile_sort_new(inputs)
	if (locale === "fr") return fr_profile_sort_new(inputs)
	if (locale === "it") return it_profile_sort_new(inputs)
	if (locale === "nl") return nl_profile_sort_new(inputs)
	if (locale === "pl") return pl_profile_sort_new(inputs)
	if (locale === "pt") return pt_profile_sort_new(inputs)
	if (locale === "ru") return ru_profile_sort_new(inputs)
	if (locale === "sv") return sv_profile_sort_new(inputs)
	if (locale === "tr") return tr_profile_sort_new(inputs)
	if (locale === "zh") return zh_profile_sort_new(inputs)
	if (locale === "ja") return ja_profile_sort_new(inputs)
	return en_profile_sort_new(inputs)
});
