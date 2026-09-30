/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Admin_Recat_SelectedInputs */

const en_admin_recat_selected = /** @type {(inputs: Admin_Recat_SelectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} selected`)
};

const es_admin_recat_selected = /** @type {(inputs: Admin_Recat_SelectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Seleccionadas: ${i?.count}`)
};

const de_admin_recat_selected = /** @type {(inputs: Admin_Recat_SelectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} ausgewählt`)
};

const fr_admin_recat_selected = /** @type {(inputs: Admin_Recat_SelectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sélection : ${i?.count}`)
};

const it_admin_recat_selected = /** @type {(inputs: Admin_Recat_SelectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Selezionate: ${i?.count}`)
};

const nl_admin_recat_selected = /** @type {(inputs: Admin_Recat_SelectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} geselecteerd`)
};

const pl_admin_recat_selected = /** @type {(inputs: Admin_Recat_SelectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zaznaczone: ${i?.count}`)
};

const pt_admin_recat_selected = /** @type {(inputs: Admin_Recat_SelectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Selecionadas: ${i?.count}`)
};

const ru_admin_recat_selected = /** @type {(inputs: Admin_Recat_SelectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Выбрано: ${i?.count}`)
};

const sv_admin_recat_selected = /** @type {(inputs: Admin_Recat_SelectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} markerade`)
};

const tr_admin_recat_selected = /** @type {(inputs: Admin_Recat_SelectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} seçili`)
};

const zh_admin_recat_selected = /** @type {(inputs: Admin_Recat_SelectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已选 ${i?.count} 行`)
};

const ja_admin_recat_selected = /** @type {(inputs: Admin_Recat_SelectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} 行選択中`)
};

/**
* | output |
* | --- |
* | "{count} selected" |
*
* @param {Admin_Recat_SelectedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_selected = /** @type {((inputs: Admin_Recat_SelectedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_SelectedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_selected(inputs)
	if (locale === "de") return de_admin_recat_selected(inputs)
	if (locale === "fr") return fr_admin_recat_selected(inputs)
	if (locale === "it") return it_admin_recat_selected(inputs)
	if (locale === "nl") return nl_admin_recat_selected(inputs)
	if (locale === "pl") return pl_admin_recat_selected(inputs)
	if (locale === "pt") return pt_admin_recat_selected(inputs)
	if (locale === "ru") return ru_admin_recat_selected(inputs)
	if (locale === "sv") return sv_admin_recat_selected(inputs)
	if (locale === "tr") return tr_admin_recat_selected(inputs)
	if (locale === "zh") return zh_admin_recat_selected(inputs)
	if (locale === "ja") return ja_admin_recat_selected(inputs)
	return en_admin_recat_selected(inputs)
});
