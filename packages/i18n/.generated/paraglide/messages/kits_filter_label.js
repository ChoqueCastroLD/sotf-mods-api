/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Filter_LabelInputs */

const en_kits_filter_label = /** @type {(inputs: Kits_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filter kits`)
};

const es_kits_filter_label = /** @type {(inputs: Kits_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtrar kits`)
};

const de_kits_filter_label = /** @type {(inputs: Kits_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits filtern`)
};

const fr_kits_filter_label = /** @type {(inputs: Kits_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtrer les kits`)
};

const it_kits_filter_label = /** @type {(inputs: Kits_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtra i kit`)
};

const nl_kits_filter_label = /** @type {(inputs: Kits_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits filteren`)
};

const pl_kits_filter_label = /** @type {(inputs: Kits_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtruj zestawy`)
};

const pt_kits_filter_label = /** @type {(inputs: Kits_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtrar kits`)
};

const ru_kits_filter_label = /** @type {(inputs: Kits_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Фильтр наборов`)
};

const sv_kits_filter_label = /** @type {(inputs: Kits_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtrera kit`)
};

const tr_kits_filter_label = /** @type {(inputs: Kits_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kitleri filtrele`)
};

const zh_kits_filter_label = /** @type {(inputs: Kits_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`筛选套装`)
};

const ja_kits_filter_label = /** @type {(inputs: Kits_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キットを絞り込む`)
};

/**
* | output |
* | --- |
* | "Filter kits" |
*
* @param {Kits_Filter_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_filter_label = /** @type {((inputs?: Kits_Filter_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Filter_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_filter_label(inputs)
	if (locale === "de") return de_kits_filter_label(inputs)
	if (locale === "fr") return fr_kits_filter_label(inputs)
	if (locale === "it") return it_kits_filter_label(inputs)
	if (locale === "nl") return nl_kits_filter_label(inputs)
	if (locale === "pl") return pl_kits_filter_label(inputs)
	if (locale === "pt") return pt_kits_filter_label(inputs)
	if (locale === "ru") return ru_kits_filter_label(inputs)
	if (locale === "sv") return sv_kits_filter_label(inputs)
	if (locale === "tr") return tr_kits_filter_label(inputs)
	if (locale === "zh") return zh_kits_filter_label(inputs)
	if (locale === "ja") return ja_kits_filter_label(inputs)
	return en_kits_filter_label(inputs)
});
