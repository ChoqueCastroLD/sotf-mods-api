/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Export_AgainInputs */

const en_settings_export_again = /** @type {(inputs: Settings_Export_AgainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prepare a new export`)
};

const es_settings_export_again = /** @type {(inputs: Settings_Export_AgainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preparar una exportación nueva`)
};

const de_settings_export_again = /** @type {(inputs: Settings_Export_AgainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neuen Export vorbereiten`)
};

const fr_settings_export_again = /** @type {(inputs: Settings_Export_AgainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Préparer un nouvel export`)
};

const it_settings_export_again = /** @type {(inputs: Settings_Export_AgainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prepara una nuova esportazione`)
};

const nl_settings_export_again = /** @type {(inputs: Settings_Export_AgainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuwe export voorbereiden`)
};

const pl_settings_export_again = /** @type {(inputs: Settings_Export_AgainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przygotuj nowy eksport`)
};

const pt_settings_export_again = /** @type {(inputs: Settings_Export_AgainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preparar uma nova exportação`)
};

const ru_settings_export_again = /** @type {(inputs: Settings_Export_AgainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подготовить новый экспорт`)
};

const sv_settings_export_again = /** @type {(inputs: Settings_Export_AgainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Förbered en ny export`)
};

const tr_settings_export_again = /** @type {(inputs: Settings_Export_AgainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni bir dışa aktarım hazırla`)
};

const zh_settings_export_again = /** @type {(inputs: Settings_Export_AgainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`准备新的导出`)
};

const ja_settings_export_again = /** @type {(inputs: Settings_Export_AgainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しいエクスポートを準備`)
};

/**
* | output |
* | --- |
* | "Prepare a new export" |
*
* @param {Settings_Export_AgainInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_export_again = /** @type {((inputs?: Settings_Export_AgainInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Export_AgainInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_export_again(inputs)
	if (locale === "de") return de_settings_export_again(inputs)
	if (locale === "fr") return fr_settings_export_again(inputs)
	if (locale === "it") return it_settings_export_again(inputs)
	if (locale === "nl") return nl_settings_export_again(inputs)
	if (locale === "pl") return pl_settings_export_again(inputs)
	if (locale === "pt") return pt_settings_export_again(inputs)
	if (locale === "ru") return ru_settings_export_again(inputs)
	if (locale === "sv") return sv_settings_export_again(inputs)
	if (locale === "tr") return tr_settings_export_again(inputs)
	if (locale === "zh") return zh_settings_export_again(inputs)
	if (locale === "ja") return ja_settings_export_again(inputs)
	return en_settings_export_again(inputs)
});
