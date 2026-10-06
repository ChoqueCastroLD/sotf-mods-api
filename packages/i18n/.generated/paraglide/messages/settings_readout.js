/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_ReadoutInputs */

const en_settings_readout = /** @type {(inputs: Settings_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Account settings`)
};

const es_settings_readout = /** @type {(inputs: Settings_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajustes de la cuenta`)
};

const de_settings_readout = /** @type {(inputs: Settings_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kontoeinstellungen`)
};

const fr_settings_readout = /** @type {(inputs: Settings_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Réglages du compte`)
};

const it_settings_readout = /** @type {(inputs: Settings_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impostazioni dell’account`)
};

const nl_settings_readout = /** @type {(inputs: Settings_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accountinstellingen`)
};

const pl_settings_readout = /** @type {(inputs: Settings_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ustawienia konta`)
};

const pt_settings_readout = /** @type {(inputs: Settings_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configurações da conta`)
};

const ru_settings_readout = /** @type {(inputs: Settings_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Настройки аккаунта`)
};

const sv_settings_readout = /** @type {(inputs: Settings_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kontoinställningar`)
};

const tr_settings_readout = /** @type {(inputs: Settings_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hesap ayarları`)
};

const zh_settings_readout = /** @type {(inputs: Settings_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`账号设置`)
};

const ja_settings_readout = /** @type {(inputs: Settings_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アカウント設定`)
};

/**
* | output |
* | --- |
* | "Account settings" |
*
* @param {Settings_ReadoutInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_readout = /** @type {((inputs?: Settings_ReadoutInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_ReadoutInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_readout(inputs)
	if (locale === "de") return de_settings_readout(inputs)
	if (locale === "fr") return fr_settings_readout(inputs)
	if (locale === "it") return it_settings_readout(inputs)
	if (locale === "nl") return nl_settings_readout(inputs)
	if (locale === "pl") return pl_settings_readout(inputs)
	if (locale === "pt") return pt_settings_readout(inputs)
	if (locale === "ru") return ru_settings_readout(inputs)
	if (locale === "sv") return sv_settings_readout(inputs)
	if (locale === "tr") return tr_settings_readout(inputs)
	if (locale === "zh") return zh_settings_readout(inputs)
	if (locale === "ja") return ja_settings_readout(inputs)
	return en_settings_readout(inputs)
});
