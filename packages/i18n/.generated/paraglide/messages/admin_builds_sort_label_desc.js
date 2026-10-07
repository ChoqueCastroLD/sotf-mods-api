/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Builds_Sort_Label_DescInputs */

const en_admin_builds_sort_label_desc = /** @type {(inputs: Admin_Builds_Sort_Label_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Label Z to A`)
};

const es_admin_builds_sort_label_desc = /** @type {(inputs: Admin_Builds_Sort_Label_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build de Z a A`)
};

const de_admin_builds_sort_label_desc = /** @type {(inputs: Admin_Builds_Sort_Label_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Name Z bis A`)
};

const fr_admin_builds_sort_label_desc = /** @type {(inputs: Admin_Builds_Sort_Label_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build de Z à A`)
};

const it_admin_builds_sort_label_desc = /** @type {(inputs: Admin_Builds_Sort_Label_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nome dalla Z alla A`)
};

const nl_admin_builds_sort_label_desc = /** @type {(inputs: Admin_Builds_Sort_Label_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build Z tot A`)
};

const pl_admin_builds_sort_label_desc = /** @type {(inputs: Admin_Builds_Sort_Label_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nazwa od Z do A`)
};

const pt_admin_builds_sort_label_desc = /** @type {(inputs: Admin_Builds_Sort_Label_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build de Z a A`)
};

const ru_admin_builds_sort_label_desc = /** @type {(inputs: Admin_Builds_Sort_Label_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Название от Я до А`)
};

const sv_admin_builds_sort_label_desc = /** @type {(inputs: Admin_Builds_Sort_Label_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Namn Ö till A`)
};

const tr_admin_builds_sort_label_desc = /** @type {(inputs: Admin_Builds_Sort_Label_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ad Z’den A’ya`)
};

const zh_admin_builds_sort_label_desc = /** @type {(inputs: Admin_Builds_Sort_Label_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`版本名 Z 到 A`)
};

const ja_admin_builds_sort_label_desc = /** @type {(inputs: Admin_Builds_Sort_Label_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ビルド名（降順）`)
};

/**
* | output |
* | --- |
* | "Label Z to A" |
*
* @param {Admin_Builds_Sort_Label_DescInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_sort_label_desc = /** @type {((inputs?: Admin_Builds_Sort_Label_DescInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Sort_Label_DescInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_sort_label_desc(inputs)
	if (locale === "de") return de_admin_builds_sort_label_desc(inputs)
	if (locale === "fr") return fr_admin_builds_sort_label_desc(inputs)
	if (locale === "it") return it_admin_builds_sort_label_desc(inputs)
	if (locale === "nl") return nl_admin_builds_sort_label_desc(inputs)
	if (locale === "pl") return pl_admin_builds_sort_label_desc(inputs)
	if (locale === "pt") return pt_admin_builds_sort_label_desc(inputs)
	if (locale === "ru") return ru_admin_builds_sort_label_desc(inputs)
	if (locale === "sv") return sv_admin_builds_sort_label_desc(inputs)
	if (locale === "tr") return tr_admin_builds_sort_label_desc(inputs)
	if (locale === "zh") return zh_admin_builds_sort_label_desc(inputs)
	if (locale === "ja") return ja_admin_builds_sort_label_desc(inputs)
	return en_admin_builds_sort_label_desc(inputs)
});
