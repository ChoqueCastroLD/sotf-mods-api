/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Export_DownloadInputs */

const en_settings_export_download = /** @type {(inputs: Settings_Export_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download ZIP`)
};

const es_settings_export_download = /** @type {(inputs: Settings_Export_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descargar ZIP`)
};

const de_settings_export_download = /** @type {(inputs: Settings_Export_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ZIP herunterladen`)
};

const fr_settings_export_download = /** @type {(inputs: Settings_Export_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Télécharger le ZIP`)
};

const it_settings_export_download = /** @type {(inputs: Settings_Export_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scarica lo ZIP`)
};

const nl_settings_export_download = /** @type {(inputs: Settings_Export_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ZIP downloaden`)
};

const pl_settings_export_download = /** @type {(inputs: Settings_Export_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobierz ZIP`)
};

const pt_settings_export_download = /** @type {(inputs: Settings_Export_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Baixar ZIP`)
};

const ru_settings_export_download = /** @type {(inputs: Settings_Export_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скачать ZIP`)
};

const sv_settings_export_download = /** @type {(inputs: Settings_Export_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ladda ned ZIP`)
};

const tr_settings_export_download = /** @type {(inputs: Settings_Export_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ZIP’i indir`)
};

const zh_settings_export_download = /** @type {(inputs: Settings_Export_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载 ZIP`)
};

const ja_settings_export_download = /** @type {(inputs: Settings_Export_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ZIP をダウンロード`)
};

/**
* | output |
* | --- |
* | "Download ZIP" |
*
* @param {Settings_Export_DownloadInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_export_download = /** @type {((inputs?: Settings_Export_DownloadInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Export_DownloadInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_export_download(inputs)
	if (locale === "de") return de_settings_export_download(inputs)
	if (locale === "fr") return fr_settings_export_download(inputs)
	if (locale === "it") return it_settings_export_download(inputs)
	if (locale === "nl") return nl_settings_export_download(inputs)
	if (locale === "pl") return pl_settings_export_download(inputs)
	if (locale === "pt") return pt_settings_export_download(inputs)
	if (locale === "ru") return ru_settings_export_download(inputs)
	if (locale === "sv") return sv_settings_export_download(inputs)
	if (locale === "tr") return tr_settings_export_download(inputs)
	if (locale === "zh") return zh_settings_export_download(inputs)
	if (locale === "ja") return ja_settings_export_download(inputs)
	return en_settings_export_download(inputs)
});
