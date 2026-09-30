/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Recat_Bulk_LabelInputs */

const en_admin_recat_bulk_label = /** @type {(inputs: Admin_Recat_Bulk_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Selected rows`)
};

const es_admin_recat_bulk_label = /** @type {(inputs: Admin_Recat_Bulk_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filas seleccionadas`)
};

const de_admin_recat_bulk_label = /** @type {(inputs: Admin_Recat_Bulk_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ausgewählte Zeilen`)
};

const fr_admin_recat_bulk_label = /** @type {(inputs: Admin_Recat_Bulk_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lignes sélectionnées`)
};

const it_admin_recat_bulk_label = /** @type {(inputs: Admin_Recat_Bulk_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Righe selezionate`)
};

const nl_admin_recat_bulk_label = /** @type {(inputs: Admin_Recat_Bulk_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geselecteerde rijen`)
};

const pl_admin_recat_bulk_label = /** @type {(inputs: Admin_Recat_Bulk_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaznaczone wiersze`)
};

const pt_admin_recat_bulk_label = /** @type {(inputs: Admin_Recat_Bulk_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Linhas selecionadas`)
};

const ru_admin_recat_bulk_label = /** @type {(inputs: Admin_Recat_Bulk_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выбранные строки`)
};

const sv_admin_recat_bulk_label = /** @type {(inputs: Admin_Recat_Bulk_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markerade rader`)
};

const tr_admin_recat_bulk_label = /** @type {(inputs: Admin_Recat_Bulk_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seçili satırlar`)
};

const zh_admin_recat_bulk_label = /** @type {(inputs: Admin_Recat_Bulk_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已选的行`)
};

const ja_admin_recat_bulk_label = /** @type {(inputs: Admin_Recat_Bulk_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`選択中の行`)
};

/**
* | output |
* | --- |
* | "Selected rows" |
*
* @param {Admin_Recat_Bulk_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_bulk_label = /** @type {((inputs?: Admin_Recat_Bulk_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Bulk_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_bulk_label(inputs)
	if (locale === "de") return de_admin_recat_bulk_label(inputs)
	if (locale === "fr") return fr_admin_recat_bulk_label(inputs)
	if (locale === "it") return it_admin_recat_bulk_label(inputs)
	if (locale === "nl") return nl_admin_recat_bulk_label(inputs)
	if (locale === "pl") return pl_admin_recat_bulk_label(inputs)
	if (locale === "pt") return pt_admin_recat_bulk_label(inputs)
	if (locale === "ru") return ru_admin_recat_bulk_label(inputs)
	if (locale === "sv") return sv_admin_recat_bulk_label(inputs)
	if (locale === "tr") return tr_admin_recat_bulk_label(inputs)
	if (locale === "zh") return zh_admin_recat_bulk_label(inputs)
	if (locale === "ja") return ja_admin_recat_bulk_label(inputs)
	return en_admin_recat_bulk_label(inputs)
});
