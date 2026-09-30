/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Builds_Field_LabelInputs */

const en_admin_builds_field_label = /** @type {(inputs: Admin_Builds_Field_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Label`)
};

const es_admin_builds_field_label = /** @type {(inputs: Admin_Builds_Field_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etiqueta`)
};

const de_admin_builds_field_label = /** @type {(inputs: Admin_Builds_Field_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bezeichnung`)
};

const fr_admin_builds_field_label = /** @type {(inputs: Admin_Builds_Field_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Libellé`)
};

const it_admin_builds_field_label = /** @type {(inputs: Admin_Builds_Field_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etichetta`)
};

const nl_admin_builds_field_label = /** @type {(inputs: Admin_Builds_Field_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Label`)
};

const pl_admin_builds_field_label = /** @type {(inputs: Admin_Builds_Field_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etykieta`)
};

const pt_admin_builds_field_label = /** @type {(inputs: Admin_Builds_Field_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rótulo`)
};

const ru_admin_builds_field_label = /** @type {(inputs: Admin_Builds_Field_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Название`)
};

const sv_admin_builds_field_label = /** @type {(inputs: Admin_Builds_Field_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etikett`)
};

const tr_admin_builds_field_label = /** @type {(inputs: Admin_Builds_Field_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etiket`)
};

const zh_admin_builds_field_label = /** @type {(inputs: Admin_Builds_Field_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`标签`)
};

const ja_admin_builds_field_label = /** @type {(inputs: Admin_Builds_Field_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ラベル`)
};

/**
* | output |
* | --- |
* | "Label" |
*
* @param {Admin_Builds_Field_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_field_label = /** @type {((inputs?: Admin_Builds_Field_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Field_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_field_label(inputs)
	if (locale === "de") return de_admin_builds_field_label(inputs)
	if (locale === "fr") return fr_admin_builds_field_label(inputs)
	if (locale === "it") return it_admin_builds_field_label(inputs)
	if (locale === "nl") return nl_admin_builds_field_label(inputs)
	if (locale === "pl") return pl_admin_builds_field_label(inputs)
	if (locale === "pt") return pt_admin_builds_field_label(inputs)
	if (locale === "ru") return ru_admin_builds_field_label(inputs)
	if (locale === "sv") return sv_admin_builds_field_label(inputs)
	if (locale === "tr") return tr_admin_builds_field_label(inputs)
	if (locale === "zh") return zh_admin_builds_field_label(inputs)
	if (locale === "ja") return ja_admin_builds_field_label(inputs)
	return en_admin_builds_field_label(inputs)
});
