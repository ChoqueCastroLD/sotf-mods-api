/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Export_RequestInputs */

const en_settings_export_request = /** @type {(inputs: Settings_Export_RequestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prepare my export`)
};

const es_settings_export_request = /** @type {(inputs: Settings_Export_RequestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preparar mi exportación`)
};

const de_settings_export_request = /** @type {(inputs: Settings_Export_RequestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Export vorbereiten`)
};

const fr_settings_export_request = /** @type {(inputs: Settings_Export_RequestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Préparer mon export`)
};

const it_settings_export_request = /** @type {(inputs: Settings_Export_RequestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prepara l’esportazione`)
};

const nl_settings_export_request = /** @type {(inputs: Settings_Export_RequestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mijn export voorbereiden`)
};

const pl_settings_export_request = /** @type {(inputs: Settings_Export_RequestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przygotuj eksport`)
};

const pt_settings_export_request = /** @type {(inputs: Settings_Export_RequestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preparar minha exportação`)
};

const ru_settings_export_request = /** @type {(inputs: Settings_Export_RequestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подготовить экспорт`)
};

const sv_settings_export_request = /** @type {(inputs: Settings_Export_RequestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Förbered min export`)
};

const tr_settings_export_request = /** @type {(inputs: Settings_Export_RequestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dışa aktarımımı hazırla`)
};

const zh_settings_export_request = /** @type {(inputs: Settings_Export_RequestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`准备我的导出`)
};

const ja_settings_export_request = /** @type {(inputs: Settings_Export_RequestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`エクスポートを準備`)
};

/**
* | output |
* | --- |
* | "Prepare my export" |
*
* @param {Settings_Export_RequestInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_export_request = /** @type {((inputs?: Settings_Export_RequestInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Export_RequestInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_export_request(inputs)
	if (locale === "de") return de_settings_export_request(inputs)
	if (locale === "fr") return fr_settings_export_request(inputs)
	if (locale === "it") return it_settings_export_request(inputs)
	if (locale === "nl") return nl_settings_export_request(inputs)
	if (locale === "pl") return pl_settings_export_request(inputs)
	if (locale === "pt") return pt_settings_export_request(inputs)
	if (locale === "ru") return ru_settings_export_request(inputs)
	if (locale === "sv") return sv_settings_export_request(inputs)
	if (locale === "tr") return tr_settings_export_request(inputs)
	if (locale === "zh") return zh_settings_export_request(inputs)
	if (locale === "ja") return ja_settings_export_request(inputs)
	return en_settings_export_request(inputs)
});
