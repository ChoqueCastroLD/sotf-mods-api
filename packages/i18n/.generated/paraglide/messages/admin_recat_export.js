/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Recat_ExportInputs */

const en_admin_recat_export = /** @type {(inputs: Admin_Recat_ExportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Export CSV`)
};

const es_admin_recat_export = /** @type {(inputs: Admin_Recat_ExportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Exportar CSV`)
};

const de_admin_recat_export = /** @type {(inputs: Admin_Recat_ExportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`CSV exportieren`)
};

const fr_admin_recat_export = /** @type {(inputs: Admin_Recat_ExportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Exporter en CSV`)
};

const it_admin_recat_export = /** @type {(inputs: Admin_Recat_ExportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esporta CSV`)
};

const nl_admin_recat_export = /** @type {(inputs: Admin_Recat_ExportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`CSV exporteren`)
};

const pl_admin_recat_export = /** @type {(inputs: Admin_Recat_ExportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eksportuj CSV`)
};

const pt_admin_recat_export = /** @type {(inputs: Admin_Recat_ExportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Exportar CSV`)
};

const ru_admin_recat_export = /** @type {(inputs: Admin_Recat_ExportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Экспорт CSV`)
};

const sv_admin_recat_export = /** @type {(inputs: Admin_Recat_ExportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Exportera CSV`)
};

const tr_admin_recat_export = /** @type {(inputs: Admin_Recat_ExportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`CSV dışa aktar`)
};

const zh_admin_recat_export = /** @type {(inputs: Admin_Recat_ExportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`导出 CSV`)
};

const ja_admin_recat_export = /** @type {(inputs: Admin_Recat_ExportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`CSV をエクスポート`)
};

/**
* | output |
* | --- |
* | "Export CSV" |
*
* @param {Admin_Recat_ExportInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_export = /** @type {((inputs?: Admin_Recat_ExportInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_ExportInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_export(inputs)
	if (locale === "de") return de_admin_recat_export(inputs)
	if (locale === "fr") return fr_admin_recat_export(inputs)
	if (locale === "it") return it_admin_recat_export(inputs)
	if (locale === "nl") return nl_admin_recat_export(inputs)
	if (locale === "pl") return pl_admin_recat_export(inputs)
	if (locale === "pt") return pt_admin_recat_export(inputs)
	if (locale === "ru") return ru_admin_recat_export(inputs)
	if (locale === "sv") return sv_admin_recat_export(inputs)
	if (locale === "tr") return tr_admin_recat_export(inputs)
	if (locale === "zh") return zh_admin_recat_export(inputs)
	if (locale === "ja") return ja_admin_recat_export(inputs)
	return en_admin_recat_export(inputs)
});
