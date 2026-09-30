/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Group_SettingsInputs */

const en_cmdk_group_settings = /** @type {(inputs: Cmdk_Group_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Settings`)
};

const es_cmdk_group_settings = /** @type {(inputs: Cmdk_Group_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajustes`)
};

const de_cmdk_group_settings = /** @type {(inputs: Cmdk_Group_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Einstellungen`)
};

const fr_cmdk_group_settings = /** @type {(inputs: Cmdk_Group_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Réglages`)
};

const it_cmdk_group_settings = /** @type {(inputs: Cmdk_Group_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impostazioni`)
};

const nl_cmdk_group_settings = /** @type {(inputs: Cmdk_Group_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instellingen`)
};

const pl_cmdk_group_settings = /** @type {(inputs: Cmdk_Group_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ustawienia`)
};

const pt_cmdk_group_settings = /** @type {(inputs: Cmdk_Group_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Definições`)
};

const ru_cmdk_group_settings = /** @type {(inputs: Cmdk_Group_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Настройки`)
};

const sv_cmdk_group_settings = /** @type {(inputs: Cmdk_Group_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inställningar`)
};

const tr_cmdk_group_settings = /** @type {(inputs: Cmdk_Group_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ayarlar`)
};

const zh_cmdk_group_settings = /** @type {(inputs: Cmdk_Group_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`设置`)
};

const ja_cmdk_group_settings = /** @type {(inputs: Cmdk_Group_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`設定`)
};

/**
* | output |
* | --- |
* | "Settings" |
*
* @param {Cmdk_Group_SettingsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_group_settings = /** @type {((inputs?: Cmdk_Group_SettingsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Group_SettingsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_group_settings(inputs)
	if (locale === "de") return de_cmdk_group_settings(inputs)
	if (locale === "fr") return fr_cmdk_group_settings(inputs)
	if (locale === "it") return it_cmdk_group_settings(inputs)
	if (locale === "nl") return nl_cmdk_group_settings(inputs)
	if (locale === "pl") return pl_cmdk_group_settings(inputs)
	if (locale === "pt") return pt_cmdk_group_settings(inputs)
	if (locale === "ru") return ru_cmdk_group_settings(inputs)
	if (locale === "sv") return sv_cmdk_group_settings(inputs)
	if (locale === "tr") return tr_cmdk_group_settings(inputs)
	if (locale === "zh") return zh_cmdk_group_settings(inputs)
	if (locale === "ja") return ja_cmdk_group_settings(inputs)
	return en_cmdk_group_settings(inputs)
});
