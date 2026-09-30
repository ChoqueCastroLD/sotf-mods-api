/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Export_TitleInputs */

const en_settings_export_title = /** @type {(inputs: Settings_Export_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Export your data`)
};

const es_settings_export_title = /** @type {(inputs: Settings_Export_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Exporta tus datos`)
};

const de_settings_export_title = /** @type {(inputs: Settings_Export_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deine Daten exportieren`)
};

const fr_settings_export_title = /** @type {(inputs: Settings_Export_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Exporter vos données`)
};

const it_settings_export_title = /** @type {(inputs: Settings_Export_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esporta i tuoi dati`)
};

const nl_settings_export_title = /** @type {(inputs: Settings_Export_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je gegevens exporteren`)
};

const pl_settings_export_title = /** @type {(inputs: Settings_Export_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyeksportuj swoje dane`)
};

const pt_settings_export_title = /** @type {(inputs: Settings_Export_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Exportar seus dados`)
};

const ru_settings_export_title = /** @type {(inputs: Settings_Export_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Экспорт данных`)
};

const sv_settings_export_title = /** @type {(inputs: Settings_Export_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Exportera dina data`)
};

const tr_settings_export_title = /** @type {(inputs: Settings_Export_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verilerini dışa aktar`)
};

const zh_settings_export_title = /** @type {(inputs: Settings_Export_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`导出你的数据`)
};

const ja_settings_export_title = /** @type {(inputs: Settings_Export_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`データをエクスポート`)
};

/**
* | output |
* | --- |
* | "Export your data" |
*
* @param {Settings_Export_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_export_title = /** @type {((inputs?: Settings_Export_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Export_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_export_title(inputs)
	if (locale === "de") return de_settings_export_title(inputs)
	if (locale === "fr") return fr_settings_export_title(inputs)
	if (locale === "it") return it_settings_export_title(inputs)
	if (locale === "nl") return nl_settings_export_title(inputs)
	if (locale === "pl") return pl_settings_export_title(inputs)
	if (locale === "pt") return pt_settings_export_title(inputs)
	if (locale === "ru") return ru_settings_export_title(inputs)
	if (locale === "sv") return sv_settings_export_title(inputs)
	if (locale === "tr") return tr_settings_export_title(inputs)
	if (locale === "zh") return zh_settings_export_title(inputs)
	if (locale === "ja") return ja_settings_export_title(inputs)
	return en_settings_export_title(inputs)
});
