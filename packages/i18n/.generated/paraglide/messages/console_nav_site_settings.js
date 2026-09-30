/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Nav_Site_SettingsInputs */

const en_console_nav_site_settings = /** @type {(inputs: Console_Nav_Site_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Site settings`)
};

const es_console_nav_site_settings = /** @type {(inputs: Console_Nav_Site_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajustes del sitio`)
};

const de_console_nav_site_settings = /** @type {(inputs: Console_Nav_Site_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Website-Einstellungen`)
};

const fr_console_nav_site_settings = /** @type {(inputs: Console_Nav_Site_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paramètres du site`)
};

const it_console_nav_site_settings = /** @type {(inputs: Console_Nav_Site_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impostazioni del sito`)
};

const nl_console_nav_site_settings = /** @type {(inputs: Console_Nav_Site_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Site-instellingen`)
};

const pl_console_nav_site_settings = /** @type {(inputs: Console_Nav_Site_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ustawienia strony`)
};

const pt_console_nav_site_settings = /** @type {(inputs: Console_Nav_Site_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configurações do site`)
};

const ru_console_nav_site_settings = /** @type {(inputs: Console_Nav_Site_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Настройки сайта`)
};

const sv_console_nav_site_settings = /** @type {(inputs: Console_Nav_Site_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Webbplatsinställningar`)
};

const tr_console_nav_site_settings = /** @type {(inputs: Console_Nav_Site_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Site ayarları`)
};

const zh_console_nav_site_settings = /** @type {(inputs: Console_Nav_Site_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`站点设置`)
};

const ja_console_nav_site_settings = /** @type {(inputs: Console_Nav_Site_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`サイト設定`)
};

/**
* | output |
* | --- |
* | "Site settings" |
*
* @param {Console_Nav_Site_SettingsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_nav_site_settings = /** @type {((inputs?: Console_Nav_Site_SettingsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Nav_Site_SettingsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_nav_site_settings(inputs)
	if (locale === "de") return de_console_nav_site_settings(inputs)
	if (locale === "fr") return fr_console_nav_site_settings(inputs)
	if (locale === "it") return it_console_nav_site_settings(inputs)
	if (locale === "nl") return nl_console_nav_site_settings(inputs)
	if (locale === "pl") return pl_console_nav_site_settings(inputs)
	if (locale === "pt") return pt_console_nav_site_settings(inputs)
	if (locale === "ru") return ru_console_nav_site_settings(inputs)
	if (locale === "sv") return sv_console_nav_site_settings(inputs)
	if (locale === "tr") return tr_console_nav_site_settings(inputs)
	if (locale === "zh") return zh_console_nav_site_settings(inputs)
	if (locale === "ja") return ja_console_nav_site_settings(inputs)
	return en_console_nav_site_settings(inputs)
});
