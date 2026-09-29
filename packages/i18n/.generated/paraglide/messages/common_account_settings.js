/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Account_SettingsInputs */

const en_common_account_settings = /** @type {(inputs: Common_Account_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Settings`)
};

const es_common_account_settings = /** @type {(inputs: Common_Account_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajustes`)
};

const de_common_account_settings = /** @type {(inputs: Common_Account_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Einstellungen`)
};

const fr_common_account_settings = /** @type {(inputs: Common_Account_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paramètres`)
};

const it_common_account_settings = /** @type {(inputs: Common_Account_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impostazioni`)
};

const nl_common_account_settings = /** @type {(inputs: Common_Account_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instellingen`)
};

const pl_common_account_settings = /** @type {(inputs: Common_Account_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ustawienia`)
};

const pt_common_account_settings = /** @type {(inputs: Common_Account_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configurações`)
};

const ru_common_account_settings = /** @type {(inputs: Common_Account_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Настройки`)
};

const sv_common_account_settings = /** @type {(inputs: Common_Account_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inställningar`)
};

const tr_common_account_settings = /** @type {(inputs: Common_Account_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ayarlar`)
};

const zh_common_account_settings = /** @type {(inputs: Common_Account_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`设置`)
};

const ja_common_account_settings = /** @type {(inputs: Common_Account_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`設定`)
};

/**
* | output |
* | --- |
* | "Settings" |
*
* @param {Common_Account_SettingsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_account_settings = /** @type {((inputs?: Common_Account_SettingsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Account_SettingsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_account_settings(inputs)
	if (locale === "de") return de_common_account_settings(inputs)
	if (locale === "fr") return fr_common_account_settings(inputs)
	if (locale === "it") return it_common_account_settings(inputs)
	if (locale === "nl") return nl_common_account_settings(inputs)
	if (locale === "pl") return pl_common_account_settings(inputs)
	if (locale === "pt") return pt_common_account_settings(inputs)
	if (locale === "ru") return ru_common_account_settings(inputs)
	if (locale === "sv") return sv_common_account_settings(inputs)
	if (locale === "tr") return tr_common_account_settings(inputs)
	if (locale === "zh") return zh_common_account_settings(inputs)
	if (locale === "ja") return ja_common_account_settings(inputs)
	return en_common_account_settings(inputs)
});
