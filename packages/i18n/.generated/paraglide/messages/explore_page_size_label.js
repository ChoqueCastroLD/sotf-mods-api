/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Page_Size_LabelInputs */

const en_explore_page_size_label = /** @type {(inputs: Explore_Page_Size_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Per page`)
};

const es_explore_page_size_label = /** @type {(inputs: Explore_Page_Size_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Por página`)
};

const de_explore_page_size_label = /** @type {(inputs: Explore_Page_Size_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pro Seite`)
};

const fr_explore_page_size_label = /** @type {(inputs: Explore_Page_Size_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Par page`)
};

const it_explore_page_size_label = /** @type {(inputs: Explore_Page_Size_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Per pagina`)
};

const nl_explore_page_size_label = /** @type {(inputs: Explore_Page_Size_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Per pagina`)
};

const pl_explore_page_size_label = /** @type {(inputs: Explore_Page_Size_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Na stronę`)
};

const pt_explore_page_size_label = /** @type {(inputs: Explore_Page_Size_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Por página`)
};

const ru_explore_page_size_label = /** @type {(inputs: Explore_Page_Size_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`На странице`)
};

const sv_explore_page_size_label = /** @type {(inputs: Explore_Page_Size_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Per sida`)
};

const tr_explore_page_size_label = /** @type {(inputs: Explore_Page_Size_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sayfa başına`)
};

const zh_explore_page_size_label = /** @type {(inputs: Explore_Page_Size_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`每页显示`)
};

const ja_explore_page_size_label = /** @type {(inputs: Explore_Page_Size_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`表示件数`)
};

/**
* | output |
* | --- |
* | "Per page" |
*
* @param {Explore_Page_Size_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_page_size_label = /** @type {((inputs?: Explore_Page_Size_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Page_Size_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_page_size_label(inputs)
	if (locale === "de") return de_explore_page_size_label(inputs)
	if (locale === "fr") return fr_explore_page_size_label(inputs)
	if (locale === "it") return it_explore_page_size_label(inputs)
	if (locale === "nl") return nl_explore_page_size_label(inputs)
	if (locale === "pl") return pl_explore_page_size_label(inputs)
	if (locale === "pt") return pt_explore_page_size_label(inputs)
	if (locale === "ru") return ru_explore_page_size_label(inputs)
	if (locale === "sv") return sv_explore_page_size_label(inputs)
	if (locale === "tr") return tr_explore_page_size_label(inputs)
	if (locale === "zh") return zh_explore_page_size_label(inputs)
	if (locale === "ja") return ja_explore_page_size_label(inputs)
	return en_explore_page_size_label(inputs)
});
