/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_Col_SignalInputs */

const en_settings_notif_col_signal = /** @type {(inputs: Settings_Notif_Col_SignalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signal`)
};

const es_settings_notif_col_signal = /** @type {(inputs: Settings_Notif_Col_SignalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Señal`)
};

const de_settings_notif_col_signal = /** @type {(inputs: Settings_Notif_Col_SignalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signal`)
};

const fr_settings_notif_col_signal = /** @type {(inputs: Settings_Notif_Col_SignalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signal`)
};

const it_settings_notif_col_signal = /** @type {(inputs: Settings_Notif_Col_SignalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segnale`)
};

const nl_settings_notif_col_signal = /** @type {(inputs: Settings_Notif_Col_SignalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signaal`)
};

const pl_settings_notif_col_signal = /** @type {(inputs: Settings_Notif_Col_SignalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sygnał`)
};

const pt_settings_notif_col_signal = /** @type {(inputs: Settings_Notif_Col_SignalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sinal`)
};

const ru_settings_notif_col_signal = /** @type {(inputs: Settings_Notif_Col_SignalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сигнал`)
};

const sv_settings_notif_col_signal = /** @type {(inputs: Settings_Notif_Col_SignalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signal`)
};

const tr_settings_notif_col_signal = /** @type {(inputs: Settings_Notif_Col_SignalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sinyal`)
};

const zh_settings_notif_col_signal = /** @type {(inputs: Settings_Notif_Col_SignalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`信号`)
};

const ja_settings_notif_col_signal = /** @type {(inputs: Settings_Notif_Col_SignalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`シグナル`)
};

/**
* | output |
* | --- |
* | "Signal" |
*
* @param {Settings_Notif_Col_SignalInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_col_signal = /** @type {((inputs?: Settings_Notif_Col_SignalInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_Col_SignalInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_col_signal(inputs)
	if (locale === "de") return de_settings_notif_col_signal(inputs)
	if (locale === "fr") return fr_settings_notif_col_signal(inputs)
	if (locale === "it") return it_settings_notif_col_signal(inputs)
	if (locale === "nl") return nl_settings_notif_col_signal(inputs)
	if (locale === "pl") return pl_settings_notif_col_signal(inputs)
	if (locale === "pt") return pt_settings_notif_col_signal(inputs)
	if (locale === "ru") return ru_settings_notif_col_signal(inputs)
	if (locale === "sv") return sv_settings_notif_col_signal(inputs)
	if (locale === "tr") return tr_settings_notif_col_signal(inputs)
	if (locale === "zh") return zh_settings_notif_col_signal(inputs)
	if (locale === "ja") return ja_settings_notif_col_signal(inputs)
	return en_settings_notif_col_signal(inputs)
});
