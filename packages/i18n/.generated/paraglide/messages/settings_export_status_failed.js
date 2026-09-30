/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Export_Status_FailedInputs */

const en_settings_export_status_failed = /** @type {(inputs: Settings_Export_Status_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The export failed. Please try again.`)
};

const es_settings_export_status_failed = /** @type {(inputs: Settings_Export_Status_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La exportación ha fallado. Inténtalo de nuevo.`)
};

const de_settings_export_status_failed = /** @type {(inputs: Settings_Export_Status_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der Export ist fehlgeschlagen. Bitte versuch es erneut.`)
};

const fr_settings_export_status_failed = /** @type {(inputs: Settings_Export_Status_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’export a échoué. Veuillez réessayer.`)
};

const it_settings_export_status_failed = /** @type {(inputs: Settings_Export_Status_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’esportazione non è riuscita. Riprova.`)
};

const nl_settings_export_status_failed = /** @type {(inputs: Settings_Export_Status_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De export is mislukt. Probeer het opnieuw.`)
};

const pl_settings_export_status_failed = /** @type {(inputs: Settings_Export_Status_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eksport się nie powiódł. Spróbuj ponownie.`)
};

const pt_settings_export_status_failed = /** @type {(inputs: Settings_Export_Status_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A exportação falhou. Tente de novo.`)
};

const ru_settings_export_status_failed = /** @type {(inputs: Settings_Export_Status_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Экспорт не удался. Попробуйте ещё раз.`)
};

const sv_settings_export_status_failed = /** @type {(inputs: Settings_Export_Status_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Exporten misslyckades. Försök igen.`)
};

const tr_settings_export_status_failed = /** @type {(inputs: Settings_Export_Status_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dışa aktarım başarısız oldu. Lütfen tekrar dene.`)
};

const zh_settings_export_status_failed = /** @type {(inputs: Settings_Export_Status_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`导出失败。请重试。`)
};

const ja_settings_export_status_failed = /** @type {(inputs: Settings_Export_Status_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`エクスポートに失敗しました。もう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "The export failed. Please try again." |
*
* @param {Settings_Export_Status_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_export_status_failed = /** @type {((inputs?: Settings_Export_Status_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Export_Status_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_export_status_failed(inputs)
	if (locale === "de") return de_settings_export_status_failed(inputs)
	if (locale === "fr") return fr_settings_export_status_failed(inputs)
	if (locale === "it") return it_settings_export_status_failed(inputs)
	if (locale === "nl") return nl_settings_export_status_failed(inputs)
	if (locale === "pl") return pl_settings_export_status_failed(inputs)
	if (locale === "pt") return pt_settings_export_status_failed(inputs)
	if (locale === "ru") return ru_settings_export_status_failed(inputs)
	if (locale === "sv") return sv_settings_export_status_failed(inputs)
	if (locale === "tr") return tr_settings_export_status_failed(inputs)
	if (locale === "zh") return zh_settings_export_status_failed(inputs)
	if (locale === "ja") return ja_settings_export_status_failed(inputs)
	return en_settings_export_status_failed(inputs)
});
