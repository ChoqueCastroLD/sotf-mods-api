/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Settings_TitleInputs */

const en_admin_settings_title = /** @type {(inputs: Admin_Settings_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Site settings`)
};

const es_admin_settings_title = /** @type {(inputs: Admin_Settings_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajustes del sitio`)
};

const de_admin_settings_title = /** @type {(inputs: Admin_Settings_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Website-Einstellungen`)
};

const fr_admin_settings_title = /** @type {(inputs: Admin_Settings_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Réglages du site`)
};

const it_admin_settings_title = /** @type {(inputs: Admin_Settings_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impostazioni del sito`)
};

const nl_admin_settings_title = /** @type {(inputs: Admin_Settings_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Site-instellingen`)
};

const pl_admin_settings_title = /** @type {(inputs: Admin_Settings_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ustawienia strony`)
};

const pt_admin_settings_title = /** @type {(inputs: Admin_Settings_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configurações do site`)
};

const ru_admin_settings_title = /** @type {(inputs: Admin_Settings_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Настройки сайта`)
};

const sv_admin_settings_title = /** @type {(inputs: Admin_Settings_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sajtinställningar`)
};

const tr_admin_settings_title = /** @type {(inputs: Admin_Settings_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Site ayarları`)
};

const zh_admin_settings_title = /** @type {(inputs: Admin_Settings_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`网站设置`)
};

const ja_admin_settings_title = /** @type {(inputs: Admin_Settings_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`サイト設定`)
};

/**
* | output |
* | --- |
* | "Site settings" |
*
* @param {Admin_Settings_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_settings_title = /** @type {((inputs?: Admin_Settings_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Settings_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_settings_title(inputs)
	if (locale === "de") return de_admin_settings_title(inputs)
	if (locale === "fr") return fr_admin_settings_title(inputs)
	if (locale === "it") return it_admin_settings_title(inputs)
	if (locale === "nl") return nl_admin_settings_title(inputs)
	if (locale === "pl") return pl_admin_settings_title(inputs)
	if (locale === "pt") return pt_admin_settings_title(inputs)
	if (locale === "ru") return ru_admin_settings_title(inputs)
	if (locale === "sv") return sv_admin_settings_title(inputs)
	if (locale === "tr") return tr_admin_settings_title(inputs)
	if (locale === "zh") return zh_admin_settings_title(inputs)
	if (locale === "ja") return ja_admin_settings_title(inputs)
	return en_admin_settings_title(inputs)
});
