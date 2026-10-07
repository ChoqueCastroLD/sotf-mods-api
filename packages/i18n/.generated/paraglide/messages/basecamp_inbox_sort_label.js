/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Inbox_Sort_LabelInputs */

const en_basecamp_inbox_sort_label = /** @type {(inputs: Basecamp_Inbox_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Order`)
};

const es_basecamp_inbox_sort_label = /** @type {(inputs: Basecamp_Inbox_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Orden`)
};

const de_basecamp_inbox_sort_label = /** @type {(inputs: Basecamp_Inbox_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reihenfolge`)
};

const fr_basecamp_inbox_sort_label = /** @type {(inputs: Basecamp_Inbox_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ordre`)
};

const it_basecamp_inbox_sort_label = /** @type {(inputs: Basecamp_Inbox_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ordine`)
};

const nl_basecamp_inbox_sort_label = /** @type {(inputs: Basecamp_Inbox_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volgorde`)
};

const pl_basecamp_inbox_sort_label = /** @type {(inputs: Basecamp_Inbox_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kolejność`)
};

const pt_basecamp_inbox_sort_label = /** @type {(inputs: Basecamp_Inbox_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ordem`)
};

const ru_basecamp_inbox_sort_label = /** @type {(inputs: Basecamp_Inbox_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Порядок`)
};

const sv_basecamp_inbox_sort_label = /** @type {(inputs: Basecamp_Inbox_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ordning`)
};

const tr_basecamp_inbox_sort_label = /** @type {(inputs: Basecamp_Inbox_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sıralama`)
};

const zh_basecamp_inbox_sort_label = /** @type {(inputs: Basecamp_Inbox_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`顺序`)
};

const ja_basecamp_inbox_sort_label = /** @type {(inputs: Basecamp_Inbox_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`並び順`)
};

/**
* | output |
* | --- |
* | "Order" |
*
* @param {Basecamp_Inbox_Sort_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_inbox_sort_label = /** @type {((inputs?: Basecamp_Inbox_Sort_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Inbox_Sort_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_inbox_sort_label(inputs)
	if (locale === "de") return de_basecamp_inbox_sort_label(inputs)
	if (locale === "fr") return fr_basecamp_inbox_sort_label(inputs)
	if (locale === "it") return it_basecamp_inbox_sort_label(inputs)
	if (locale === "nl") return nl_basecamp_inbox_sort_label(inputs)
	if (locale === "pl") return pl_basecamp_inbox_sort_label(inputs)
	if (locale === "pt") return pt_basecamp_inbox_sort_label(inputs)
	if (locale === "ru") return ru_basecamp_inbox_sort_label(inputs)
	if (locale === "sv") return sv_basecamp_inbox_sort_label(inputs)
	if (locale === "tr") return tr_basecamp_inbox_sort_label(inputs)
	if (locale === "zh") return zh_basecamp_inbox_sort_label(inputs)
	if (locale === "ja") return ja_basecamp_inbox_sort_label(inputs)
	return en_basecamp_inbox_sort_label(inputs)
});
