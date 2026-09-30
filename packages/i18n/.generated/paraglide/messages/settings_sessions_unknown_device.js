/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Sessions_Unknown_DeviceInputs */

const en_settings_sessions_unknown_device = /** @type {(inputs: Settings_Sessions_Unknown_DeviceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unknown device`)
};

const es_settings_sessions_unknown_device = /** @type {(inputs: Settings_Sessions_Unknown_DeviceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dispositivo desconocido`)
};

const de_settings_sessions_unknown_device = /** @type {(inputs: Settings_Sessions_Unknown_DeviceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unbekanntes Gerät`)
};

const fr_settings_sessions_unknown_device = /** @type {(inputs: Settings_Sessions_Unknown_DeviceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Appareil inconnu`)
};

const it_settings_sessions_unknown_device = /** @type {(inputs: Settings_Sessions_Unknown_DeviceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dispositivo sconosciuto`)
};

const nl_settings_sessions_unknown_device = /** @type {(inputs: Settings_Sessions_Unknown_DeviceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Onbekend apparaat`)
};

const pl_settings_sessions_unknown_device = /** @type {(inputs: Settings_Sessions_Unknown_DeviceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieznane urządzenie`)
};

const pt_settings_sessions_unknown_device = /** @type {(inputs: Settings_Sessions_Unknown_DeviceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dispositivo desconhecido`)
};

const ru_settings_sessions_unknown_device = /** @type {(inputs: Settings_Sessions_Unknown_DeviceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Неизвестное устройство`)
};

const sv_settings_sessions_unknown_device = /** @type {(inputs: Settings_Sessions_Unknown_DeviceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Okänd enhet`)
};

const tr_settings_sessions_unknown_device = /** @type {(inputs: Settings_Sessions_Unknown_DeviceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bilinmeyen cihaz`)
};

const zh_settings_sessions_unknown_device = /** @type {(inputs: Settings_Sessions_Unknown_DeviceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未知设备`)
};

const ja_settings_sessions_unknown_device = /** @type {(inputs: Settings_Sessions_Unknown_DeviceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不明なデバイス`)
};

/**
* | output |
* | --- |
* | "Unknown device" |
*
* @param {Settings_Sessions_Unknown_DeviceInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_sessions_unknown_device = /** @type {((inputs?: Settings_Sessions_Unknown_DeviceInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Sessions_Unknown_DeviceInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_sessions_unknown_device(inputs)
	if (locale === "de") return de_settings_sessions_unknown_device(inputs)
	if (locale === "fr") return fr_settings_sessions_unknown_device(inputs)
	if (locale === "it") return it_settings_sessions_unknown_device(inputs)
	if (locale === "nl") return nl_settings_sessions_unknown_device(inputs)
	if (locale === "pl") return pl_settings_sessions_unknown_device(inputs)
	if (locale === "pt") return pt_settings_sessions_unknown_device(inputs)
	if (locale === "ru") return ru_settings_sessions_unknown_device(inputs)
	if (locale === "sv") return sv_settings_sessions_unknown_device(inputs)
	if (locale === "tr") return tr_settings_sessions_unknown_device(inputs)
	if (locale === "zh") return zh_settings_sessions_unknown_device(inputs)
	if (locale === "ja") return ja_settings_sessions_unknown_device(inputs)
	return en_settings_sessions_unknown_device(inputs)
});
