/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Delete_Point_ExportInputs */

const en_settings_delete_point_export = /** @type {(inputs: Settings_Delete_Point_ExportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Export your data first if you want a copy.`)
};

const es_settings_delete_point_export = /** @type {(inputs: Settings_Delete_Point_ExportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Exporta antes tus datos si quieres una copia.`)
};

const de_settings_delete_point_export = /** @type {(inputs: Settings_Delete_Point_ExportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Exportiere vorher deine Daten, wenn du eine Kopie möchtest.`)
};

const fr_settings_delete_point_export = /** @type {(inputs: Settings_Delete_Point_ExportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Exportez d’abord vos données si vous voulez en garder une copie.`)
};

const it_settings_delete_point_export = /** @type {(inputs: Settings_Delete_Point_ExportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esporta prima i tuoi dati se vuoi una copia.`)
};

const nl_settings_delete_point_export = /** @type {(inputs: Settings_Delete_Point_ExportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Exporteer eerst je gegevens als je een kopie wilt.`)
};

const pl_settings_delete_point_export = /** @type {(inputs: Settings_Delete_Point_ExportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jeśli chcesz mieć kopię, najpierw wyeksportuj dane.`)
};

const pt_settings_delete_point_export = /** @type {(inputs: Settings_Delete_Point_ExportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Exporte seus dados antes se quiser uma cópia.`)
};

const ru_settings_delete_point_export = /** @type {(inputs: Settings_Delete_Point_ExportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Если нужна копия, сначала экспортируйте данные.`)
};

const sv_settings_delete_point_export = /** @type {(inputs: Settings_Delete_Point_ExportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Exportera dina data först om du vill ha en kopia.`)
};

const tr_settings_delete_point_export = /** @type {(inputs: Settings_Delete_Point_ExportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir kopya istiyorsan önce verilerini dışa aktar.`)
};

const zh_settings_delete_point_export = /** @type {(inputs: Settings_Delete_Point_ExportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`如需备份，请先导出你的数据。`)
};

const ja_settings_delete_point_export = /** @type {(inputs: Settings_Delete_Point_ExportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コピーが必要な場合は、先にデータをエクスポートしてください。`)
};

/**
* | output |
* | --- |
* | "Export your data first if you want a copy." |
*
* @param {Settings_Delete_Point_ExportInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_delete_point_export = /** @type {((inputs?: Settings_Delete_Point_ExportInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Delete_Point_ExportInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_delete_point_export(inputs)
	if (locale === "de") return de_settings_delete_point_export(inputs)
	if (locale === "fr") return fr_settings_delete_point_export(inputs)
	if (locale === "it") return it_settings_delete_point_export(inputs)
	if (locale === "nl") return nl_settings_delete_point_export(inputs)
	if (locale === "pl") return pl_settings_delete_point_export(inputs)
	if (locale === "pt") return pt_settings_delete_point_export(inputs)
	if (locale === "ru") return ru_settings_delete_point_export(inputs)
	if (locale === "sv") return sv_settings_delete_point_export(inputs)
	if (locale === "tr") return tr_settings_delete_point_export(inputs)
	if (locale === "zh") return zh_settings_delete_point_export(inputs)
	if (locale === "ja") return ja_settings_delete_point_export(inputs)
	return en_settings_delete_point_export(inputs)
});
