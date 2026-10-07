/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ title: NonNullable<unknown> }} Ranger_Bulk_Select_RowInputs */

const en_ranger_bulk_select_row = /** @type {(inputs: Ranger_Bulk_Select_RowInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Select ${i?.title}`)
};

const es_ranger_bulk_select_row = /** @type {(inputs: Ranger_Bulk_Select_RowInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Seleccionar ${i?.title}`)
};

const de_ranger_bulk_select_row = /** @type {(inputs: Ranger_Bulk_Select_RowInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title} auswählen`)
};

const fr_ranger_bulk_select_row = /** @type {(inputs: Ranger_Bulk_Select_RowInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sélectionner ${i?.title}`)
};

const it_ranger_bulk_select_row = /** @type {(inputs: Ranger_Bulk_Select_RowInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Seleziona ${i?.title}`)
};

const nl_ranger_bulk_select_row = /** @type {(inputs: Ranger_Bulk_Select_RowInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title} selecteren`)
};

const pl_ranger_bulk_select_row = /** @type {(inputs: Ranger_Bulk_Select_RowInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zaznacz ${i?.title}`)
};

const pt_ranger_bulk_select_row = /** @type {(inputs: Ranger_Bulk_Select_RowInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Selecionar ${i?.title}`)
};

const ru_ranger_bulk_select_row = /** @type {(inputs: Ranger_Bulk_Select_RowInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Выбрать «${i?.title}»`)
};

const sv_ranger_bulk_select_row = /** @type {(inputs: Ranger_Bulk_Select_RowInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Markera ${i?.title}`)
};

const tr_ranger_bulk_select_row = /** @type {(inputs: Ranger_Bulk_Select_RowInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title} öğesini seç`)
};

const zh_ranger_bulk_select_row = /** @type {(inputs: Ranger_Bulk_Select_RowInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`选择 ${i?.title}`)
};

const ja_ranger_bulk_select_row = /** @type {(inputs: Ranger_Bulk_Select_RowInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title} を選択`)
};

/**
* | output |
* | --- |
* | "Select {title}" |
*
* @param {Ranger_Bulk_Select_RowInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_bulk_select_row = /** @type {((inputs: Ranger_Bulk_Select_RowInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Bulk_Select_RowInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_bulk_select_row(inputs)
	if (locale === "de") return de_ranger_bulk_select_row(inputs)
	if (locale === "fr") return fr_ranger_bulk_select_row(inputs)
	if (locale === "it") return it_ranger_bulk_select_row(inputs)
	if (locale === "nl") return nl_ranger_bulk_select_row(inputs)
	if (locale === "pl") return pl_ranger_bulk_select_row(inputs)
	if (locale === "pt") return pt_ranger_bulk_select_row(inputs)
	if (locale === "ru") return ru_ranger_bulk_select_row(inputs)
	if (locale === "sv") return sv_ranger_bulk_select_row(inputs)
	if (locale === "tr") return tr_ranger_bulk_select_row(inputs)
	if (locale === "zh") return zh_ranger_bulk_select_row(inputs)
	if (locale === "ja") return ja_ranger_bulk_select_row(inputs)
	return en_ranger_bulk_select_row(inputs)
});
