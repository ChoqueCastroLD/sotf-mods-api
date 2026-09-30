/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Builds_Col_LabelInputs */

const en_admin_builds_col_label = /** @type {(inputs: Admin_Builds_Col_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build`)
};

const es_admin_builds_col_label = /** @type {(inputs: Admin_Builds_Col_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build`)
};

const de_admin_builds_col_label = /** @type {(inputs: Admin_Builds_Col_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build`)
};

const fr_admin_builds_col_label = /** @type {(inputs: Admin_Builds_Col_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build`)
};

const it_admin_builds_col_label = /** @type {(inputs: Admin_Builds_Col_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build`)
};

const nl_admin_builds_col_label = /** @type {(inputs: Admin_Builds_Col_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build`)
};

const pl_admin_builds_col_label = /** @type {(inputs: Admin_Builds_Col_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build`)
};

const pt_admin_builds_col_label = /** @type {(inputs: Admin_Builds_Col_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build`)
};

const ru_admin_builds_col_label = /** @type {(inputs: Admin_Builds_Col_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сборка`)
};

const sv_admin_builds_col_label = /** @type {(inputs: Admin_Builds_Col_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bygge`)
};

const tr_admin_builds_col_label = /** @type {(inputs: Admin_Builds_Col_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sürüm`)
};

const zh_admin_builds_col_label = /** @type {(inputs: Admin_Builds_Col_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`版本`)
};

const ja_admin_builds_col_label = /** @type {(inputs: Admin_Builds_Col_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ビルド`)
};

/**
* | output |
* | --- |
* | "Build" |
*
* @param {Admin_Builds_Col_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_col_label = /** @type {((inputs?: Admin_Builds_Col_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Col_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_col_label(inputs)
	if (locale === "de") return de_admin_builds_col_label(inputs)
	if (locale === "fr") return fr_admin_builds_col_label(inputs)
	if (locale === "it") return it_admin_builds_col_label(inputs)
	if (locale === "nl") return nl_admin_builds_col_label(inputs)
	if (locale === "pl") return pl_admin_builds_col_label(inputs)
	if (locale === "pt") return pt_admin_builds_col_label(inputs)
	if (locale === "ru") return ru_admin_builds_col_label(inputs)
	if (locale === "sv") return sv_admin_builds_col_label(inputs)
	if (locale === "tr") return tr_admin_builds_col_label(inputs)
	if (locale === "zh") return zh_admin_builds_col_label(inputs)
	if (locale === "ja") return ja_admin_builds_col_label(inputs)
	return en_admin_builds_col_label(inputs)
});
