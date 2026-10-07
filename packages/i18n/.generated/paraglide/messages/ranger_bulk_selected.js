/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Ranger_Bulk_SelectedInputs */

const en_ranger_bulk_selected = /** @type {(inputs: Ranger_Bulk_SelectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Selected: ${i?.count}`)
};

const es_ranger_bulk_selected = /** @type {(inputs: Ranger_Bulk_SelectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Seleccionados: ${i?.count}`)
};

const de_ranger_bulk_selected = /** @type {(inputs: Ranger_Bulk_SelectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ausgewählt: ${i?.count}`)
};

const fr_ranger_bulk_selected = /** @type {(inputs: Ranger_Bulk_SelectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sélectionnés : ${i?.count}`)
};

const it_ranger_bulk_selected = /** @type {(inputs: Ranger_Bulk_SelectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Selezionati: ${i?.count}`)
};

const nl_ranger_bulk_selected = /** @type {(inputs: Ranger_Bulk_SelectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Geselecteerd: ${i?.count}`)
};

const pl_ranger_bulk_selected = /** @type {(inputs: Ranger_Bulk_SelectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zaznaczono: ${i?.count}`)
};

const pt_ranger_bulk_selected = /** @type {(inputs: Ranger_Bulk_SelectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Selecionados: ${i?.count}`)
};

const ru_ranger_bulk_selected = /** @type {(inputs: Ranger_Bulk_SelectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Выбрано: ${i?.count}`)
};

const sv_ranger_bulk_selected = /** @type {(inputs: Ranger_Bulk_SelectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Markerade: ${i?.count}`)
};

const tr_ranger_bulk_selected = /** @type {(inputs: Ranger_Bulk_SelectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Seçilen: ${i?.count}`)
};

const zh_ranger_bulk_selected = /** @type {(inputs: Ranger_Bulk_SelectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已选择：${i?.count}`)
};

const ja_ranger_bulk_selected = /** @type {(inputs: Ranger_Bulk_SelectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`選択中: ${i?.count}`)
};

/**
* | output |
* | --- |
* | "Selected: {count}" |
*
* @param {Ranger_Bulk_SelectedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_bulk_selected = /** @type {((inputs: Ranger_Bulk_SelectedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Bulk_SelectedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_bulk_selected(inputs)
	if (locale === "de") return de_ranger_bulk_selected(inputs)
	if (locale === "fr") return fr_ranger_bulk_selected(inputs)
	if (locale === "it") return it_ranger_bulk_selected(inputs)
	if (locale === "nl") return nl_ranger_bulk_selected(inputs)
	if (locale === "pl") return pl_ranger_bulk_selected(inputs)
	if (locale === "pt") return pt_ranger_bulk_selected(inputs)
	if (locale === "ru") return ru_ranger_bulk_selected(inputs)
	if (locale === "sv") return sv_ranger_bulk_selected(inputs)
	if (locale === "tr") return tr_ranger_bulk_selected(inputs)
	if (locale === "zh") return zh_ranger_bulk_selected(inputs)
	if (locale === "ja") return ja_ranger_bulk_selected(inputs)
	return en_ranger_bulk_selected(inputs)
});
