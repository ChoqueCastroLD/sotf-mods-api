/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_2fa_Status_OffInputs */

const en_settings_2fa_status_off = /** @type {(inputs: Settings_2fa_Status_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Off`)
};

const es_settings_2fa_status_off = /** @type {(inputs: Settings_2fa_Status_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desactivada`)
};

const de_settings_2fa_status_off = /** @type {(inputs: Settings_2fa_Status_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aus`)
};

const fr_settings_2fa_status_off = /** @type {(inputs: Settings_2fa_Status_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Désactivée`)
};

const it_settings_2fa_status_off = /** @type {(inputs: Settings_2fa_Status_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disattiva`)
};

const nl_settings_2fa_status_off = /** @type {(inputs: Settings_2fa_Status_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uit`)
};

const pl_settings_2fa_status_off = /** @type {(inputs: Settings_2fa_Status_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyłączona`)
};

const pt_settings_2fa_status_off = /** @type {(inputs: Settings_2fa_Status_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desativada`)
};

const ru_settings_2fa_status_off = /** @type {(inputs: Settings_2fa_Status_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выключена`)
};

const sv_settings_2fa_status_off = /** @type {(inputs: Settings_2fa_Status_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Av`)
};

const tr_settings_2fa_status_off = /** @type {(inputs: Settings_2fa_Status_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kapalı`)
};

const zh_settings_2fa_status_off = /** @type {(inputs: Settings_2fa_Status_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已关闭`)
};

const ja_settings_2fa_status_off = /** @type {(inputs: Settings_2fa_Status_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`オフ`)
};

/**
* | output |
* | --- |
* | "Off" |
*
* @param {Settings_2fa_Status_OffInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_2fa_status_off = /** @type {((inputs?: Settings_2fa_Status_OffInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_2fa_Status_OffInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_2fa_status_off(inputs)
	if (locale === "de") return de_settings_2fa_status_off(inputs)
	if (locale === "fr") return fr_settings_2fa_status_off(inputs)
	if (locale === "it") return it_settings_2fa_status_off(inputs)
	if (locale === "nl") return nl_settings_2fa_status_off(inputs)
	if (locale === "pl") return pl_settings_2fa_status_off(inputs)
	if (locale === "pt") return pt_settings_2fa_status_off(inputs)
	if (locale === "ru") return ru_settings_2fa_status_off(inputs)
	if (locale === "sv") return sv_settings_2fa_status_off(inputs)
	if (locale === "tr") return tr_settings_2fa_status_off(inputs)
	if (locale === "zh") return zh_settings_2fa_status_off(inputs)
	if (locale === "ja") return ja_settings_2fa_status_off(inputs)
	return en_settings_2fa_status_off(inputs)
});
