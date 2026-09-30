/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Rum_No_RowsInputs */

const en_admin_rum_no_rows = /** @type {(inputs: Admin_Rum_No_RowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No data for this country.`)
};

const es_admin_rum_no_rows = /** @type {(inputs: Admin_Rum_No_RowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No hay datos de este país.`)
};

const de_admin_rum_no_rows = /** @type {(inputs: Admin_Rum_No_RowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine Daten für dieses Land.`)
};

const fr_admin_rum_no_rows = /** @type {(inputs: Admin_Rum_No_RowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune donnée pour ce pays.`)
};

const it_admin_rum_no_rows = /** @type {(inputs: Admin_Rum_No_RowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessun dato per questo paese.`)
};

const nl_admin_rum_no_rows = /** @type {(inputs: Admin_Rum_No_RowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen gegevens voor dit land.`)
};

const pl_admin_rum_no_rows = /** @type {(inputs: Admin_Rum_No_RowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak danych dla tego kraju.`)
};

const pt_admin_rum_no_rows = /** @type {(inputs: Admin_Rum_No_RowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sem dados para este país.`)
};

const ru_admin_rum_no_rows = /** @type {(inputs: Admin_Rum_No_RowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`По этой стране данных нет.`)
};

const sv_admin_rum_no_rows = /** @type {(inputs: Admin_Rum_No_RowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingen data för det här landet.`)
};

const tr_admin_rum_no_rows = /** @type {(inputs: Admin_Rum_No_RowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu ülke için veri yok.`)
};

const zh_admin_rum_no_rows = /** @type {(inputs: Admin_Rum_No_RowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`该国家/地区没有数据。`)
};

const ja_admin_rum_no_rows = /** @type {(inputs: Admin_Rum_No_RowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この国・地域のデータはありません。`)
};

/**
* | output |
* | --- |
* | "No data for this country." |
*
* @param {Admin_Rum_No_RowsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_rum_no_rows = /** @type {((inputs?: Admin_Rum_No_RowsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Rum_No_RowsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_rum_no_rows(inputs)
	if (locale === "de") return de_admin_rum_no_rows(inputs)
	if (locale === "fr") return fr_admin_rum_no_rows(inputs)
	if (locale === "it") return it_admin_rum_no_rows(inputs)
	if (locale === "nl") return nl_admin_rum_no_rows(inputs)
	if (locale === "pl") return pl_admin_rum_no_rows(inputs)
	if (locale === "pt") return pt_admin_rum_no_rows(inputs)
	if (locale === "ru") return ru_admin_rum_no_rows(inputs)
	if (locale === "sv") return sv_admin_rum_no_rows(inputs)
	if (locale === "tr") return tr_admin_rum_no_rows(inputs)
	if (locale === "zh") return zh_admin_rum_no_rows(inputs)
	if (locale === "ja") return ja_admin_rum_no_rows(inputs)
	return en_admin_rum_no_rows(inputs)
});
