/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ label: NonNullable<unknown> }} Admin_Builds_Edit_TitleInputs */

const en_admin_builds_edit_title = /** @type {(inputs: Admin_Builds_Edit_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Edit ${i?.label}`)
};

const es_admin_builds_edit_title = /** @type {(inputs: Admin_Builds_Edit_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Editar ${i?.label}`)
};

const de_admin_builds_edit_title = /** @type {(inputs: Admin_Builds_Edit_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} bearbeiten`)
};

const fr_admin_builds_edit_title = /** @type {(inputs: Admin_Builds_Edit_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Modifier ${i?.label}`)
};

const it_admin_builds_edit_title = /** @type {(inputs: Admin_Builds_Edit_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Modifica ${i?.label}`)
};

const nl_admin_builds_edit_title = /** @type {(inputs: Admin_Builds_Edit_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} bewerken`)
};

const pl_admin_builds_edit_title = /** @type {(inputs: Admin_Builds_Edit_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Edytuj ${i?.label}`)
};

const pt_admin_builds_edit_title = /** @type {(inputs: Admin_Builds_Edit_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Editar ${i?.label}`)
};

const ru_admin_builds_edit_title = /** @type {(inputs: Admin_Builds_Edit_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Изменить ${i?.label}`)
};

const sv_admin_builds_edit_title = /** @type {(inputs: Admin_Builds_Edit_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Redigera ${i?.label}`)
};

const tr_admin_builds_edit_title = /** @type {(inputs: Admin_Builds_Edit_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} düzenle`)
};

const zh_admin_builds_edit_title = /** @type {(inputs: Admin_Builds_Edit_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`编辑 ${i?.label}`)
};

const ja_admin_builds_edit_title = /** @type {(inputs: Admin_Builds_Edit_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} を編集`)
};

/**
* | output |
* | --- |
* | "Edit {label}" |
*
* @param {Admin_Builds_Edit_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_edit_title = /** @type {((inputs: Admin_Builds_Edit_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Edit_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_edit_title(inputs)
	if (locale === "de") return de_admin_builds_edit_title(inputs)
	if (locale === "fr") return fr_admin_builds_edit_title(inputs)
	if (locale === "it") return it_admin_builds_edit_title(inputs)
	if (locale === "nl") return nl_admin_builds_edit_title(inputs)
	if (locale === "pl") return pl_admin_builds_edit_title(inputs)
	if (locale === "pt") return pt_admin_builds_edit_title(inputs)
	if (locale === "ru") return ru_admin_builds_edit_title(inputs)
	if (locale === "sv") return sv_admin_builds_edit_title(inputs)
	if (locale === "tr") return tr_admin_builds_edit_title(inputs)
	if (locale === "zh") return zh_admin_builds_edit_title(inputs)
	if (locale === "ja") return ja_admin_builds_edit_title(inputs)
	return en_admin_builds_edit_title(inputs)
});
