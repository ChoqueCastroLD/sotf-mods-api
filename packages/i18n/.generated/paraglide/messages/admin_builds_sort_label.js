/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Builds_Sort_LabelInputs */

const en_admin_builds_sort_label = /** @type {(inputs: Admin_Builds_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Label A to Z`)
};

const es_admin_builds_sort_label = /** @type {(inputs: Admin_Builds_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build de A a Z`)
};

const de_admin_builds_sort_label = /** @type {(inputs: Admin_Builds_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Name A bis Z`)
};

const fr_admin_builds_sort_label = /** @type {(inputs: Admin_Builds_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build de A à Z`)
};

const it_admin_builds_sort_label = /** @type {(inputs: Admin_Builds_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nome dalla A alla Z`)
};

const nl_admin_builds_sort_label = /** @type {(inputs: Admin_Builds_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build A tot Z`)
};

const pl_admin_builds_sort_label = /** @type {(inputs: Admin_Builds_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nazwa od A do Z`)
};

const pt_admin_builds_sort_label = /** @type {(inputs: Admin_Builds_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build de A a Z`)
};

const ru_admin_builds_sort_label = /** @type {(inputs: Admin_Builds_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Название от А до Я`)
};

const sv_admin_builds_sort_label = /** @type {(inputs: Admin_Builds_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Namn A till Ö`)
};

const tr_admin_builds_sort_label = /** @type {(inputs: Admin_Builds_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ad A’dan Z’ye`)
};

const zh_admin_builds_sort_label = /** @type {(inputs: Admin_Builds_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`版本名 A 到 Z`)
};

const ja_admin_builds_sort_label = /** @type {(inputs: Admin_Builds_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ビルド名（昇順）`)
};

/**
* | output |
* | --- |
* | "Label A to Z" |
*
* @param {Admin_Builds_Sort_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_sort_label = /** @type {((inputs?: Admin_Builds_Sort_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Sort_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_sort_label(inputs)
	if (locale === "de") return de_admin_builds_sort_label(inputs)
	if (locale === "fr") return fr_admin_builds_sort_label(inputs)
	if (locale === "it") return it_admin_builds_sort_label(inputs)
	if (locale === "nl") return nl_admin_builds_sort_label(inputs)
	if (locale === "pl") return pl_admin_builds_sort_label(inputs)
	if (locale === "pt") return pt_admin_builds_sort_label(inputs)
	if (locale === "ru") return ru_admin_builds_sort_label(inputs)
	if (locale === "sv") return sv_admin_builds_sort_label(inputs)
	if (locale === "tr") return tr_admin_builds_sort_label(inputs)
	if (locale === "zh") return zh_admin_builds_sort_label(inputs)
	if (locale === "ja") return ja_admin_builds_sort_label(inputs)
	return en_admin_builds_sort_label(inputs)
});
