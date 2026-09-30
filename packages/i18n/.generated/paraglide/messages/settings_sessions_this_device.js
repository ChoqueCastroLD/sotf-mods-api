/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Sessions_This_DeviceInputs */

const en_settings_sessions_this_device = /** @type {(inputs: Settings_Sessions_This_DeviceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This device`)
};

const es_settings_sessions_this_device = /** @type {(inputs: Settings_Sessions_This_DeviceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este dispositivo`)
};

const de_settings_sessions_this_device = /** @type {(inputs: Settings_Sessions_This_DeviceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieses Gerät`)
};

const fr_settings_sessions_this_device = /** @type {(inputs: Settings_Sessions_This_DeviceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cet appareil`)
};

const it_settings_sessions_this_device = /** @type {(inputs: Settings_Sessions_This_DeviceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questo dispositivo`)
};

const nl_settings_sessions_this_device = /** @type {(inputs: Settings_Sessions_This_DeviceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dit apparaat`)
};

const pl_settings_sessions_this_device = /** @type {(inputs: Settings_Sessions_This_DeviceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`To urządzenie`)
};

const pt_settings_sessions_this_device = /** @type {(inputs: Settings_Sessions_This_DeviceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este dispositivo`)
};

const ru_settings_sessions_this_device = /** @type {(inputs: Settings_Sessions_This_DeviceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Это устройство`)
};

const sv_settings_sessions_this_device = /** @type {(inputs: Settings_Sessions_This_DeviceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den här enheten`)
};

const tr_settings_sessions_this_device = /** @type {(inputs: Settings_Sessions_This_DeviceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu cihaz`)
};

const zh_settings_sessions_this_device = /** @type {(inputs: Settings_Sessions_This_DeviceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`当前设备`)
};

const ja_settings_sessions_this_device = /** @type {(inputs: Settings_Sessions_This_DeviceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このデバイス`)
};

/**
* | output |
* | --- |
* | "This device" |
*
* @param {Settings_Sessions_This_DeviceInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_sessions_this_device = /** @type {((inputs?: Settings_Sessions_This_DeviceInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Sessions_This_DeviceInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_sessions_this_device(inputs)
	if (locale === "de") return de_settings_sessions_this_device(inputs)
	if (locale === "fr") return fr_settings_sessions_this_device(inputs)
	if (locale === "it") return it_settings_sessions_this_device(inputs)
	if (locale === "nl") return nl_settings_sessions_this_device(inputs)
	if (locale === "pl") return pl_settings_sessions_this_device(inputs)
	if (locale === "pt") return pt_settings_sessions_this_device(inputs)
	if (locale === "ru") return ru_settings_sessions_this_device(inputs)
	if (locale === "sv") return sv_settings_sessions_this_device(inputs)
	if (locale === "tr") return tr_settings_sessions_this_device(inputs)
	if (locale === "zh") return zh_settings_sessions_this_device(inputs)
	if (locale === "ja") return ja_settings_sessions_this_device(inputs)
	return en_settings_sessions_this_device(inputs)
});
