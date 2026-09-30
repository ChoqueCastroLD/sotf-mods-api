/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Export_PreparingInputs */

const en_settings_export_preparing = /** @type {(inputs: Settings_Export_PreparingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preparing your export…`)
};

const es_settings_export_preparing = /** @type {(inputs: Settings_Export_PreparingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preparando tu exportación…`)
};

const de_settings_export_preparing = /** @type {(inputs: Settings_Export_PreparingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dein Export wird vorbereitet…`)
};

const fr_settings_export_preparing = /** @type {(inputs: Settings_Export_PreparingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Préparation de votre export…`)
};

const it_settings_export_preparing = /** @type {(inputs: Settings_Export_PreparingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preparazione dell’esportazione…`)
};

const nl_settings_export_preparing = /** @type {(inputs: Settings_Export_PreparingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je export wordt voorbereid…`)
};

const pl_settings_export_preparing = /** @type {(inputs: Settings_Export_PreparingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przygotowywanie eksportu…`)
};

const pt_settings_export_preparing = /** @type {(inputs: Settings_Export_PreparingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preparando sua exportação…`)
};

const ru_settings_export_preparing = /** @type {(inputs: Settings_Export_PreparingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Готовим ваш экспорт…`)
};

const sv_settings_export_preparing = /** @type {(inputs: Settings_Export_PreparingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Förbereder din export…`)
};

const tr_settings_export_preparing = /** @type {(inputs: Settings_Export_PreparingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dışa aktarımın hazırlanıyor…`)
};

const zh_settings_export_preparing = /** @type {(inputs: Settings_Export_PreparingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在准备你的导出…`)
};

const ja_settings_export_preparing = /** @type {(inputs: Settings_Export_PreparingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`エクスポートを準備中…`)
};

/**
* | output |
* | --- |
* | "Preparing your export…" |
*
* @param {Settings_Export_PreparingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_export_preparing = /** @type {((inputs?: Settings_Export_PreparingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Export_PreparingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_export_preparing(inputs)
	if (locale === "de") return de_settings_export_preparing(inputs)
	if (locale === "fr") return fr_settings_export_preparing(inputs)
	if (locale === "it") return it_settings_export_preparing(inputs)
	if (locale === "nl") return nl_settings_export_preparing(inputs)
	if (locale === "pl") return pl_settings_export_preparing(inputs)
	if (locale === "pt") return pt_settings_export_preparing(inputs)
	if (locale === "ru") return ru_settings_export_preparing(inputs)
	if (locale === "sv") return sv_settings_export_preparing(inputs)
	if (locale === "tr") return tr_settings_export_preparing(inputs)
	if (locale === "zh") return zh_settings_export_preparing(inputs)
	if (locale === "ja") return ja_settings_export_preparing(inputs)
	return en_settings_export_preparing(inputs)
});
