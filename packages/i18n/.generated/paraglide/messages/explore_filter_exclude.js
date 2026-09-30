/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ label: NonNullable<unknown> }} Explore_Filter_ExcludeInputs */

const en_explore_filter_exclude = /** @type {(inputs: Explore_Filter_ExcludeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Exclude ${i?.label}`)
};

const es_explore_filter_exclude = /** @type {(inputs: Explore_Filter_ExcludeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Excluir ${i?.label}`)
};

const de_explore_filter_exclude = /** @type {(inputs: Explore_Filter_ExcludeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} ausschließen`)
};

const fr_explore_filter_exclude = /** @type {(inputs: Explore_Filter_ExcludeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Exclure ${i?.label}`)
};

const it_explore_filter_exclude = /** @type {(inputs: Explore_Filter_ExcludeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Escludi ${i?.label}`)
};

const nl_explore_filter_exclude = /** @type {(inputs: Explore_Filter_ExcludeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} uitsluiten`)
};

const pl_explore_filter_exclude = /** @type {(inputs: Explore_Filter_ExcludeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wyklucz: ${i?.label}`)
};

const pt_explore_filter_exclude = /** @type {(inputs: Explore_Filter_ExcludeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Excluir ${i?.label}`)
};

const ru_explore_filter_exclude = /** @type {(inputs: Explore_Filter_ExcludeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Исключить: ${i?.label}`)
};

const sv_explore_filter_exclude = /** @type {(inputs: Explore_Filter_ExcludeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Uteslut ${i?.label}`)
};

const tr_explore_filter_exclude = /** @type {(inputs: Explore_Filter_ExcludeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} hariç tut`)
};

const zh_explore_filter_exclude = /** @type {(inputs: Explore_Filter_ExcludeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`排除 ${i?.label}`)
};

const ja_explore_filter_exclude = /** @type {(inputs: Explore_Filter_ExcludeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} を除外`)
};

/**
* | output |
* | --- |
* | "Exclude {label}" |
*
* @param {Explore_Filter_ExcludeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_filter_exclude = /** @type {((inputs: Explore_Filter_ExcludeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Filter_ExcludeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_filter_exclude(inputs)
	if (locale === "de") return de_explore_filter_exclude(inputs)
	if (locale === "fr") return fr_explore_filter_exclude(inputs)
	if (locale === "it") return it_explore_filter_exclude(inputs)
	if (locale === "nl") return nl_explore_filter_exclude(inputs)
	if (locale === "pl") return pl_explore_filter_exclude(inputs)
	if (locale === "pt") return pt_explore_filter_exclude(inputs)
	if (locale === "ru") return ru_explore_filter_exclude(inputs)
	if (locale === "sv") return sv_explore_filter_exclude(inputs)
	if (locale === "tr") return tr_explore_filter_exclude(inputs)
	if (locale === "zh") return zh_explore_filter_exclude(inputs)
	if (locale === "ja") return ja_explore_filter_exclude(inputs)
	return en_explore_filter_exclude(inputs)
});
