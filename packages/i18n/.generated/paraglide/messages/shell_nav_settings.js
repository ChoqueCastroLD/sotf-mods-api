/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Shell_Nav_SettingsInputs */

const en_shell_nav_settings = /** @type {(inputs: Shell_Nav_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Settings`)
};

const es_shell_nav_settings = /** @type {(inputs: Shell_Nav_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajustes`)
};

const de_shell_nav_settings = /** @type {(inputs: Shell_Nav_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Einstellungen`)
};

const fr_shell_nav_settings = /** @type {(inputs: Shell_Nav_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paramètres`)
};

const it_shell_nav_settings = /** @type {(inputs: Shell_Nav_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impostazioni`)
};

const nl_shell_nav_settings = /** @type {(inputs: Shell_Nav_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instellingen`)
};

const pl_shell_nav_settings = /** @type {(inputs: Shell_Nav_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ustawienia`)
};

const pt_shell_nav_settings = /** @type {(inputs: Shell_Nav_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configurações`)
};

const ru_shell_nav_settings = /** @type {(inputs: Shell_Nav_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Настройки`)
};

const sv_shell_nav_settings = /** @type {(inputs: Shell_Nav_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inställningar`)
};

const tr_shell_nav_settings = /** @type {(inputs: Shell_Nav_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ayarlar`)
};

const zh_shell_nav_settings = /** @type {(inputs: Shell_Nav_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`设置`)
};

const ja_shell_nav_settings = /** @type {(inputs: Shell_Nav_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`設定`)
};

/**
* | output |
* | --- |
* | "Settings" |
*
* @param {Shell_Nav_SettingsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const shell_nav_settings = /** @type {((inputs?: Shell_Nav_SettingsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_Nav_SettingsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_shell_nav_settings(inputs)
	if (locale === "de") return de_shell_nav_settings(inputs)
	if (locale === "fr") return fr_shell_nav_settings(inputs)
	if (locale === "it") return it_shell_nav_settings(inputs)
	if (locale === "nl") return nl_shell_nav_settings(inputs)
	if (locale === "pl") return pl_shell_nav_settings(inputs)
	if (locale === "pt") return pt_shell_nav_settings(inputs)
	if (locale === "ru") return ru_shell_nav_settings(inputs)
	if (locale === "sv") return sv_shell_nav_settings(inputs)
	if (locale === "tr") return tr_shell_nav_settings(inputs)
	if (locale === "zh") return zh_shell_nav_settings(inputs)
	if (locale === "ja") return ja_shell_nav_settings(inputs)
	return en_shell_nav_settings(inputs)
});
