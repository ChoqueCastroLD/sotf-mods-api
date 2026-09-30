/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ loader: NonNullable<unknown>, build: NonNullable<unknown> }} Admin_Eco_Cell_LabelInputs */

const en_admin_eco_cell_label = /** @type {(inputs: Admin_Eco_Cell_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.loader} on ${i?.build}`)
};

const es_admin_eco_cell_label = /** @type {(inputs: Admin_Eco_Cell_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.loader} en ${i?.build}`)
};

const de_admin_eco_cell_label = /** @type {(inputs: Admin_Eco_Cell_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.loader} auf ${i?.build}`)
};

const fr_admin_eco_cell_label = /** @type {(inputs: Admin_Eco_Cell_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.loader} sur ${i?.build}`)
};

const it_admin_eco_cell_label = /** @type {(inputs: Admin_Eco_Cell_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.loader} su ${i?.build}`)
};

const nl_admin_eco_cell_label = /** @type {(inputs: Admin_Eco_Cell_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.loader} op ${i?.build}`)
};

const pl_admin_eco_cell_label = /** @type {(inputs: Admin_Eco_Cell_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.loader} na ${i?.build}`)
};

const pt_admin_eco_cell_label = /** @type {(inputs: Admin_Eco_Cell_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.loader} no ${i?.build}`)
};

const ru_admin_eco_cell_label = /** @type {(inputs: Admin_Eco_Cell_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.loader} на ${i?.build}`)
};

const sv_admin_eco_cell_label = /** @type {(inputs: Admin_Eco_Cell_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.loader} på ${i?.build}`)
};

const tr_admin_eco_cell_label = /** @type {(inputs: Admin_Eco_Cell_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.build} üzerinde ${i?.loader}`)
};

const zh_admin_eco_cell_label = /** @type {(inputs: Admin_Eco_Cell_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.loader} 在 ${i?.build} 上`)
};

const ja_admin_eco_cell_label = /** @type {(inputs: Admin_Eco_Cell_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.build} での ${i?.loader}`)
};

/**
* | output |
* | --- |
* | "{loader} on {build}" |
*
* @param {Admin_Eco_Cell_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_eco_cell_label = /** @type {((inputs: Admin_Eco_Cell_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Eco_Cell_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_eco_cell_label(inputs)
	if (locale === "de") return de_admin_eco_cell_label(inputs)
	if (locale === "fr") return fr_admin_eco_cell_label(inputs)
	if (locale === "it") return it_admin_eco_cell_label(inputs)
	if (locale === "nl") return nl_admin_eco_cell_label(inputs)
	if (locale === "pl") return pl_admin_eco_cell_label(inputs)
	if (locale === "pt") return pt_admin_eco_cell_label(inputs)
	if (locale === "ru") return ru_admin_eco_cell_label(inputs)
	if (locale === "sv") return sv_admin_eco_cell_label(inputs)
	if (locale === "tr") return tr_admin_eco_cell_label(inputs)
	if (locale === "zh") return zh_admin_eco_cell_label(inputs)
	if (locale === "ja") return ja_admin_eco_cell_label(inputs)
	return en_admin_eco_cell_label(inputs)
});
