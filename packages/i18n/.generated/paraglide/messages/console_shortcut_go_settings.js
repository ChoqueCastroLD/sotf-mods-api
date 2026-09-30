/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Shortcut_Go_SettingsInputs */

const en_console_shortcut_go_settings = /** @type {(inputs: Console_Shortcut_Go_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Go to Settings`)
};

const es_console_shortcut_go_settings = /** @type {(inputs: Console_Shortcut_Go_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ir a Ajustes`)
};

const de_console_shortcut_go_settings = /** @type {(inputs: Console_Shortcut_Go_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zu den Einstellungen`)
};

const fr_console_shortcut_go_settings = /** @type {(inputs: Console_Shortcut_Go_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aller aux paramètres`)
};

const it_console_shortcut_go_settings = /** @type {(inputs: Console_Shortcut_Go_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vai alle impostazioni`)
};

const nl_console_shortcut_go_settings = /** @type {(inputs: Console_Shortcut_Go_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Naar Instellingen`)
};

const pl_console_shortcut_go_settings = /** @type {(inputs: Console_Shortcut_Go_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przejdź do ustawień`)
};

const pt_console_shortcut_go_settings = /** @type {(inputs: Console_Shortcut_Go_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ir para Configurações`)
};

const ru_console_shortcut_go_settings = /** @type {(inputs: Console_Shortcut_Go_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Перейти в настройки`)
};

const sv_console_shortcut_go_settings = /** @type {(inputs: Console_Shortcut_Go_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gå till Inställningar`)
};

const tr_console_shortcut_go_settings = /** @type {(inputs: Console_Shortcut_Go_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ayarlara git`)
};

const zh_console_shortcut_go_settings = /** @type {(inputs: Console_Shortcut_Go_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`前往设置`)
};

const ja_console_shortcut_go_settings = /** @type {(inputs: Console_Shortcut_Go_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`設定へ移動`)
};

/**
* | output |
* | --- |
* | "Go to Settings" |
*
* @param {Console_Shortcut_Go_SettingsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_shortcut_go_settings = /** @type {((inputs?: Console_Shortcut_Go_SettingsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Shortcut_Go_SettingsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_shortcut_go_settings(inputs)
	if (locale === "de") return de_console_shortcut_go_settings(inputs)
	if (locale === "fr") return fr_console_shortcut_go_settings(inputs)
	if (locale === "it") return it_console_shortcut_go_settings(inputs)
	if (locale === "nl") return nl_console_shortcut_go_settings(inputs)
	if (locale === "pl") return pl_console_shortcut_go_settings(inputs)
	if (locale === "pt") return pt_console_shortcut_go_settings(inputs)
	if (locale === "ru") return ru_console_shortcut_go_settings(inputs)
	if (locale === "sv") return sv_console_shortcut_go_settings(inputs)
	if (locale === "tr") return tr_console_shortcut_go_settings(inputs)
	if (locale === "zh") return zh_console_shortcut_go_settings(inputs)
	if (locale === "ja") return ja_console_shortcut_go_settings(inputs)
	return en_console_shortcut_go_settings(inputs)
});
