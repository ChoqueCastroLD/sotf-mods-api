/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Export_FailedInputs */

const en_settings_export_failed = /** @type {(inputs: Settings_Export_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn’t start the export`)
};

const es_settings_export_failed = /** @type {(inputs: Settings_Export_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se ha podido iniciar la exportación`)
};

const de_settings_export_failed = /** @type {(inputs: Settings_Export_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der Export konnte nicht gestartet werden`)
};

const fr_settings_export_failed = /** @type {(inputs: Settings_Export_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de lancer l’export`)
};

const it_settings_export_failed = /** @type {(inputs: Settings_Export_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile avviare l’esportazione`)
};

const nl_settings_export_failed = /** @type {(inputs: Settings_Export_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De export kon niet worden gestart`)
};

const pl_settings_export_failed = /** @type {(inputs: Settings_Export_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się rozpocząć eksportu`)
};

const pt_settings_export_failed = /** @type {(inputs: Settings_Export_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível iniciar a exportação`)
};

const ru_settings_export_failed = /** @type {(inputs: Settings_Export_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось запустить экспорт`)
};

const sv_settings_export_failed = /** @type {(inputs: Settings_Export_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det gick inte att starta exporten`)
};

const tr_settings_export_failed = /** @type {(inputs: Settings_Export_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dışa aktarım başlatılamadı`)
};

const zh_settings_export_failed = /** @type {(inputs: Settings_Export_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法开始导出`)
};

const ja_settings_export_failed = /** @type {(inputs: Settings_Export_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`エクスポートを開始できませんでした`)
};

/**
* | output |
* | --- |
* | "Couldn’t start the export" |
*
* @param {Settings_Export_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_export_failed = /** @type {((inputs?: Settings_Export_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Export_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_export_failed(inputs)
	if (locale === "de") return de_settings_export_failed(inputs)
	if (locale === "fr") return fr_settings_export_failed(inputs)
	if (locale === "it") return it_settings_export_failed(inputs)
	if (locale === "nl") return nl_settings_export_failed(inputs)
	if (locale === "pl") return pl_settings_export_failed(inputs)
	if (locale === "pt") return pt_settings_export_failed(inputs)
	if (locale === "ru") return ru_settings_export_failed(inputs)
	if (locale === "sv") return sv_settings_export_failed(inputs)
	if (locale === "tr") return tr_settings_export_failed(inputs)
	if (locale === "zh") return zh_settings_export_failed(inputs)
	if (locale === "ja") return ja_settings_export_failed(inputs)
	return en_settings_export_failed(inputs)
});
