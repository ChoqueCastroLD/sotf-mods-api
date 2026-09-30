/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Export_RequestedInputs */

const en_settings_export_requested = /** @type {(inputs: Settings_Export_RequestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We’re preparing your export`)
};

const es_settings_export_requested = /** @type {(inputs: Settings_Export_RequestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Estamos preparando tu exportación`)
};

const de_settings_export_requested = /** @type {(inputs: Settings_Export_RequestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wir bereiten deinen Export vor`)
};

const fr_settings_export_requested = /** @type {(inputs: Settings_Export_RequestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nous préparons votre export`)
};

const it_settings_export_requested = /** @type {(inputs: Settings_Export_RequestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stiamo preparando la tua esportazione`)
};

const nl_settings_export_requested = /** @type {(inputs: Settings_Export_RequestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We bereiden je export voor`)
};

const pl_settings_export_requested = /** @type {(inputs: Settings_Export_RequestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przygotowujemy twój eksport`)
};

const pt_settings_export_requested = /** @type {(inputs: Settings_Export_RequestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Estamos preparando sua exportação`)
};

const ru_settings_export_requested = /** @type {(inputs: Settings_Export_RequestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Мы готовим ваш экспорт`)
};

const sv_settings_export_requested = /** @type {(inputs: Settings_Export_RequestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vi förbereder din export`)
};

const tr_settings_export_requested = /** @type {(inputs: Settings_Export_RequestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dışa aktarımını hazırlıyoruz`)
};

const zh_settings_export_requested = /** @type {(inputs: Settings_Export_RequestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`我们正在准备你的导出`)
};

const ja_settings_export_requested = /** @type {(inputs: Settings_Export_RequestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`エクスポートを準備しています`)
};

/**
* | output |
* | --- |
* | "We’re preparing your export" |
*
* @param {Settings_Export_RequestedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_export_requested = /** @type {((inputs?: Settings_Export_RequestedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Export_RequestedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_export_requested(inputs)
	if (locale === "de") return de_settings_export_requested(inputs)
	if (locale === "fr") return fr_settings_export_requested(inputs)
	if (locale === "it") return it_settings_export_requested(inputs)
	if (locale === "nl") return nl_settings_export_requested(inputs)
	if (locale === "pl") return pl_settings_export_requested(inputs)
	if (locale === "pt") return pt_settings_export_requested(inputs)
	if (locale === "ru") return ru_settings_export_requested(inputs)
	if (locale === "sv") return sv_settings_export_requested(inputs)
	if (locale === "tr") return tr_settings_export_requested(inputs)
	if (locale === "zh") return zh_settings_export_requested(inputs)
	if (locale === "ja") return ja_settings_export_requested(inputs)
	return en_settings_export_requested(inputs)
});
