/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ device: NonNullable<unknown> }} Emails_Auth_New_Login_DeviceInputs */

const en_emails_auth_new_login_device = /** @type {(inputs: Emails_Auth_New_Login_DeviceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Device: ${i?.device}`)
};

const es_emails_auth_new_login_device = /** @type {(inputs: Emails_Auth_New_Login_DeviceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dispositivo: ${i?.device}`)
};

const de_emails_auth_new_login_device = /** @type {(inputs: Emails_Auth_New_Login_DeviceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Gerät: ${i?.device}`)
};

const fr_emails_auth_new_login_device = /** @type {(inputs: Emails_Auth_New_Login_DeviceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Appareil : ${i?.device}`)
};

const it_emails_auth_new_login_device = /** @type {(inputs: Emails_Auth_New_Login_DeviceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dispositivo: ${i?.device}`)
};

const nl_emails_auth_new_login_device = /** @type {(inputs: Emails_Auth_New_Login_DeviceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Apparaat: ${i?.device}`)
};

const pl_emails_auth_new_login_device = /** @type {(inputs: Emails_Auth_New_Login_DeviceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Urządzenie: ${i?.device}`)
};

const pt_emails_auth_new_login_device = /** @type {(inputs: Emails_Auth_New_Login_DeviceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dispositivo: ${i?.device}`)
};

const ru_emails_auth_new_login_device = /** @type {(inputs: Emails_Auth_New_Login_DeviceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Устройство: ${i?.device}`)
};

const sv_emails_auth_new_login_device = /** @type {(inputs: Emails_Auth_New_Login_DeviceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Enhet: ${i?.device}`)
};

const tr_emails_auth_new_login_device = /** @type {(inputs: Emails_Auth_New_Login_DeviceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Cihaz: ${i?.device}`)
};

const zh_emails_auth_new_login_device = /** @type {(inputs: Emails_Auth_New_Login_DeviceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`设备：${i?.device}`)
};

const ja_emails_auth_new_login_device = /** @type {(inputs: Emails_Auth_New_Login_DeviceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`端末：${i?.device}`)
};

/**
* | output |
* | --- |
* | "Device: {device}" |
*
* @param {Emails_Auth_New_Login_DeviceInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_new_login_device = /** @type {((inputs: Emails_Auth_New_Login_DeviceInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_New_Login_DeviceInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_new_login_device(inputs)
	if (locale === "de") return de_emails_auth_new_login_device(inputs)
	if (locale === "fr") return fr_emails_auth_new_login_device(inputs)
	if (locale === "it") return it_emails_auth_new_login_device(inputs)
	if (locale === "nl") return nl_emails_auth_new_login_device(inputs)
	if (locale === "pl") return pl_emails_auth_new_login_device(inputs)
	if (locale === "pt") return pt_emails_auth_new_login_device(inputs)
	if (locale === "ru") return ru_emails_auth_new_login_device(inputs)
	if (locale === "sv") return sv_emails_auth_new_login_device(inputs)
	if (locale === "tr") return tr_emails_auth_new_login_device(inputs)
	if (locale === "zh") return zh_emails_auth_new_login_device(inputs)
	if (locale === "ja") return ja_emails_auth_new_login_device(inputs)
	return en_emails_auth_new_login_device(inputs)
});
