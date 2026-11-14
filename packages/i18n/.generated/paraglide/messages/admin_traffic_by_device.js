/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Traffic_By_DeviceInputs */

const en_admin_traffic_by_device = /** @type {(inputs: Admin_Traffic_By_DeviceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Device`)
};

const es_admin_traffic_by_device = /** @type {(inputs: Admin_Traffic_By_DeviceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dispositivo`)
};

const de_admin_traffic_by_device = /** @type {(inputs: Admin_Traffic_By_DeviceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gerät`)
};

const fr_admin_traffic_by_device = /** @type {(inputs: Admin_Traffic_By_DeviceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Appareil`)
};

const it_admin_traffic_by_device = /** @type {(inputs: Admin_Traffic_By_DeviceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dispositivo`)
};

const nl_admin_traffic_by_device = /** @type {(inputs: Admin_Traffic_By_DeviceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apparaat`)
};

const pl_admin_traffic_by_device = /** @type {(inputs: Admin_Traffic_By_DeviceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Urządzenie`)
};

const pt_admin_traffic_by_device = /** @type {(inputs: Admin_Traffic_By_DeviceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dispositivo`)
};

const ru_admin_traffic_by_device = /** @type {(inputs: Admin_Traffic_By_DeviceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Устройство`)
};

const sv_admin_traffic_by_device = /** @type {(inputs: Admin_Traffic_By_DeviceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enhet`)
};

const tr_admin_traffic_by_device = /** @type {(inputs: Admin_Traffic_By_DeviceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cihaz`)
};

const zh_admin_traffic_by_device = /** @type {(inputs: Admin_Traffic_By_DeviceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`设备`)
};

const ja_admin_traffic_by_device = /** @type {(inputs: Admin_Traffic_By_DeviceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`デバイス`)
};

/**
* | output |
* | --- |
* | "Device" |
*
* @param {Admin_Traffic_By_DeviceInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_traffic_by_device = /** @type {((inputs?: Admin_Traffic_By_DeviceInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Traffic_By_DeviceInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_traffic_by_device(inputs)
	if (locale === "de") return de_admin_traffic_by_device(inputs)
	if (locale === "fr") return fr_admin_traffic_by_device(inputs)
	if (locale === "it") return it_admin_traffic_by_device(inputs)
	if (locale === "nl") return nl_admin_traffic_by_device(inputs)
	if (locale === "pl") return pl_admin_traffic_by_device(inputs)
	if (locale === "pt") return pt_admin_traffic_by_device(inputs)
	if (locale === "ru") return ru_admin_traffic_by_device(inputs)
	if (locale === "sv") return sv_admin_traffic_by_device(inputs)
	if (locale === "tr") return tr_admin_traffic_by_device(inputs)
	if (locale === "zh") return zh_admin_traffic_by_device(inputs)
	if (locale === "ja") return ja_admin_traffic_by_device(inputs)
	return en_admin_traffic_by_device(inputs)
});
