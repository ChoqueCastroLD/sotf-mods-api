/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Shot_SettingsInputs */

const en_manager_shot_settings = /** @type {(inputs: Manager_Shot_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The settings with the RedLoader options`)
};

const es_manager_shot_settings = /** @type {(inputs: Manager_Shot_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los ajustes con las opciones de RedLoader`)
};

const de_manager_shot_settings = /** @type {(inputs: Manager_Shot_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Einstellungen mit den RedLoader-Optionen`)
};

const fr_manager_shot_settings = /** @type {(inputs: Manager_Shot_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les paramètres avec les options de RedLoader`)
};

const it_manager_shot_settings = /** @type {(inputs: Manager_Shot_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le impostazioni con le opzioni di RedLoader`)
};

const nl_manager_shot_settings = /** @type {(inputs: Manager_Shot_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De instellingen met de RedLoader-opties`)
};

const pl_manager_shot_settings = /** @type {(inputs: Manager_Shot_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ustawienia z opcjami RedLoadera`)
};

const pt_manager_shot_settings = /** @type {(inputs: Manager_Shot_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`As configurações com as opções do RedLoader`)
};

const ru_manager_shot_settings = /** @type {(inputs: Manager_Shot_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Настройки с параметрами RedLoader`)
};

const sv_manager_shot_settings = /** @type {(inputs: Manager_Shot_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inställningarna med RedLoader-alternativen`)
};

const tr_manager_shot_settings = /** @type {(inputs: Manager_Shot_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader seçenekleriyle ayarlar`)
};

const zh_manager_shot_settings = /** @type {(inputs: Manager_Shot_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`设置中的 RedLoader 选项`)
};

const ja_manager_shot_settings = /** @type {(inputs: Manager_Shot_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader のオプションがある設定画面`)
};

/**
* | output |
* | --- |
* | "The settings with the RedLoader options" |
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
