/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Kelvin_Config_TitleInputs */

const en_admin_kelvin_config_title = /** @type {(inputs: Admin_Kelvin_Config_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configuration`)
};

const es_admin_kelvin_config_title = /** @type {(inputs: Admin_Kelvin_Config_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configuración`)
};

const de_admin_kelvin_config_title = /** @type {(inputs: Admin_Kelvin_Config_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konfiguration`)
};

const fr_admin_kelvin_config_title = /** @type {(inputs: Admin_Kelvin_Config_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configuration`)
};

const it_admin_kelvin_config_title = /** @type {(inputs: Admin_Kelvin_Config_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configurazione`)
};

const nl_admin_kelvin_config_title = /** @type {(inputs: Admin_Kelvin_Config_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configuratie`)
};

const pl_admin_kelvin_config_title = /** @type {(inputs: Admin_Kelvin_Config_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konfiguracja`)
};

const pt_admin_kelvin_config_title = /** @type {(inputs: Admin_Kelvin_Config_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configuração`)
};

const ru_admin_kelvin_config_title = /** @type {(inputs: Admin_Kelvin_Config_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Настройки`)
};

const sv_admin_kelvin_config_title = /** @type {(inputs: Admin_Kelvin_Config_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konfiguration`)
};

const tr_admin_kelvin_config_title = /** @type {(inputs: Admin_Kelvin_Config_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapılandırma`)
};

const zh_admin_kelvin_config_title = /** @type {(inputs: Admin_Kelvin_Config_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`配置`)
};

const ja_admin_kelvin_config_title = /** @type {(inputs: Admin_Kelvin_Config_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`設定`)
};

/**
* | output |
* | --- |
* | "Configuration" |
*
* @param {Admin_Kelvin_Config_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_kelvin_config_title = /** @type {((inputs?: Admin_Kelvin_Config_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Kelvin_Config_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_kelvin_config_title(inputs)
	if (locale === "de") return de_admin_kelvin_config_title(inputs)
	if (locale === "fr") return fr_admin_kelvin_config_title(inputs)
	if (locale === "it") return it_admin_kelvin_config_title(inputs)
	if (locale === "nl") return nl_admin_kelvin_config_title(inputs)
	if (locale === "pl") return pl_admin_kelvin_config_title(inputs)
	if (locale === "pt") return pt_admin_kelvin_config_title(inputs)
	if (locale === "ru") return ru_admin_kelvin_config_title(inputs)
	if (locale === "sv") return sv_admin_kelvin_config_title(inputs)
	if (locale === "tr") return tr_admin_kelvin_config_title(inputs)
	if (locale === "zh") return zh_admin_kelvin_config_title(inputs)
	if (locale === "ja") return ja_admin_kelvin_config_title(inputs)
	return en_admin_kelvin_config_title(inputs)
});
