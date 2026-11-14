/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Sort_NewInputs */

const en_modpacks_sort_new = /** @type {(inputs: Modpacks_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Newest`)
};

const es_modpacks_sort_new = /** @type {(inputs: Modpacks_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Más recientes`)
};

const de_modpacks_sort_new = /** @type {(inputs: Modpacks_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neueste`)
};

const fr_modpacks_sort_new = /** @type {(inputs: Modpacks_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les plus récents`)
};

const it_modpacks_sort_new = /** @type {(inputs: Modpacks_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Più recenti`)
};

const nl_modpacks_sort_new = /** @type {(inputs: Modpacks_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuwste`)
};

const pl_modpacks_sort_new = /** @type {(inputs: Modpacks_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najnowsze`)
};

const pt_modpacks_sort_new = /** @type {(inputs: Modpacks_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mais recentes`)
};

const ru_modpacks_sort_new = /** @type {(inputs: Modpacks_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новые`)
};

const sv_modpacks_sort_new = /** @type {(inputs: Modpacks_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nyaste`)
};

const tr_modpacks_sort_new = /** @type {(inputs: Modpacks_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En yeni`)
};

const zh_modpacks_sort_new = /** @type {(inputs: Modpacks_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最新`)
};

const ja_modpacks_sort_new = /** @type {(inputs: Modpacks_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新着順`)
};

/**
* | output |
* | --- |
* | "Newest" |
*
* @param {Modpacks_Sort_NewInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_sort_new = /** @type {((inputs?: Modpacks_Sort_NewInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Sort_NewInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_sort_new(inputs)
	if (locale === "de") return de_modpacks_sort_new(inputs)
	if (locale === "fr") return fr_modpacks_sort_new(inputs)
	if (locale === "it") return it_modpacks_sort_new(inputs)
	if (locale === "nl") return nl_modpacks_sort_new(inputs)
	if (locale === "pl") return pl_modpacks_sort_new(inputs)
	if (locale === "pt") return pt_modpacks_sort_new(inputs)
	if (locale === "ru") return ru_modpacks_sort_new(inputs)
	if (locale === "sv") return sv_modpacks_sort_new(inputs)
	if (locale === "tr") return tr_modpacks_sort_new(inputs)
	if (locale === "zh") return zh_modpacks_sort_new(inputs)
	if (locale === "ja") return ja_modpacks_sort_new(inputs)
	return en_modpacks_sort_new(inputs)
});
