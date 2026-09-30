/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Sort_LabelInputs */

const en_ui_domain_sort_label = /** @type {(inputs: Ui_Domain_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sort:`)
};

const es_ui_domain_sort_label = /** @type {(inputs: Ui_Domain_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ordenar:`)
};

const de_ui_domain_sort_label = /** @type {(inputs: Ui_Domain_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sortieren:`)
};

const fr_ui_domain_sort_label = /** @type {(inputs: Ui_Domain_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trier :`)
};

const it_ui_domain_sort_label = /** @type {(inputs: Ui_Domain_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ordina:`)
};

const nl_ui_domain_sort_label = /** @type {(inputs: Ui_Domain_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sorteren:`)
};

const pl_ui_domain_sort_label = /** @type {(inputs: Ui_Domain_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sortuj:`)
};

const pt_ui_domain_sort_label = /** @type {(inputs: Ui_Domain_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ordenar:`)
};

const ru_ui_domain_sort_label = /** @type {(inputs: Ui_Domain_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сортировка:`)
};

const sv_ui_domain_sort_label = /** @type {(inputs: Ui_Domain_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sortera:`)
};

const tr_ui_domain_sort_label = /** @type {(inputs: Ui_Domain_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sırala:`)
};

const zh_ui_domain_sort_label = /** @type {(inputs: Ui_Domain_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`排序：`)
};

const ja_ui_domain_sort_label = /** @type {(inputs: Ui_Domain_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`並べ替え：`)
};

/**
* | output |
* | --- |
* | "Sort:" |
*
* @param {Ui_Domain_Sort_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_sort_label = /** @type {((inputs?: Ui_Domain_Sort_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Sort_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_sort_label(inputs)
	if (locale === "de") return de_ui_domain_sort_label(inputs)
	if (locale === "fr") return fr_ui_domain_sort_label(inputs)
	if (locale === "it") return it_ui_domain_sort_label(inputs)
	if (locale === "nl") return nl_ui_domain_sort_label(inputs)
	if (locale === "pl") return pl_ui_domain_sort_label(inputs)
	if (locale === "pt") return pt_ui_domain_sort_label(inputs)
	if (locale === "ru") return ru_ui_domain_sort_label(inputs)
	if (locale === "sv") return sv_ui_domain_sort_label(inputs)
	if (locale === "tr") return tr_ui_domain_sort_label(inputs)
	if (locale === "zh") return zh_ui_domain_sort_label(inputs)
	if (locale === "ja") return ja_ui_domain_sort_label(inputs)
	return en_ui_domain_sort_label(inputs)
});
