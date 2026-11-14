/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Shot_SettingsInputs */

const en_manager_shot_settings = /** @type {(inputs: Manager_Shot_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Settings and RedLoader`)
};

const es_manager_shot_settings = /** @type {(inputs: Manager_Shot_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajustes y RedLoader`)
};

const de_manager_shot_settings = /** @type {(inputs: Manager_Shot_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Einstellungen und RedLoader`)
};

const fr_manager_shot_settings = /** @type {(inputs: Manager_Shot_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paramètres et RedLoader`)
};

const it_manager_shot_settings = /** @type {(inputs: Manager_Shot_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impostazioni e RedLoader`)
};

const nl_manager_shot_settings = /** @type {(inputs: Manager_Shot_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instellingen en RedLoader`)
};

const pl_manager_shot_settings = /** @type {(inputs: Manager_Shot_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ustawienia i RedLoader`)
};

const pt_manager_shot_settings = /** @type {(inputs: Manager_Shot_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configurações e RedLoader`)
};

const ru_manager_shot_settings = /** @type {(inputs: Manager_Shot_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Настройки и RedLoader`)
};

const sv_manager_shot_settings = /** @type {(inputs: Manager_Shot_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inställningar och RedLoader`)
};

const tr_manager_shot_settings = /** @type {(inputs: Manager_Shot_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ayarlar ve RedLoader`)
};

const zh_manager_shot_settings = /** @type {(inputs: Manager_Shot_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`设置和 RedLoader`)
};

const ja_manager_shot_settings = /** @type {(inputs: Manager_Shot_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`設定と RedLoader`)
};

/**
* | output |
* | --- |
* | "Settings and RedLoader" |
*
* @param {Manager_Shot_SettingsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_shot_settings = /** @type {((inputs?: Manager_Shot_SettingsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Shot_SettingsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_shot_settings(inputs)
	if (locale === "de") return de_manager_shot_settings(inputs)
	if (locale === "fr") return fr_manager_shot_settings(inputs)
	if (locale === "it") return it_manager_shot_settings(inputs)
	if (locale === "nl") return nl_manager_shot_settings(inputs)
	if (locale === "pl") return pl_manager_shot_settings(inputs)
	if (locale === "pt") return pt_manager_shot_settings(inputs)
	if (locale === "ru") return ru_manager_shot_settings(inputs)
	if (locale === "sv") return sv_manager_shot_settings(inputs)
	if (locale === "tr") return tr_manager_shot_settings(inputs)
	if (locale === "zh") return zh_manager_shot_settings(inputs)
	if (locale === "ja") return ja_manager_shot_settings(inputs)
	return en_manager_shot_settings(inputs)
});
