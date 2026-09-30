/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_ReadoutInputs */

const en_settings_readout = /** @type {(inputs: Settings_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Camp settings`)
};

const es_settings_readout = /** @type {(inputs: Settings_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajustes del campamento`)
};

const de_settings_readout = /** @type {(inputs: Settings_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lagereinstellungen`)
};

const fr_settings_readout = /** @type {(inputs: Settings_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Réglages du camp`)
};

const it_settings_readout = /** @type {(inputs: Settings_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impostazioni del campo`)
};

const nl_settings_readout = /** @type {(inputs: Settings_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kampinstellingen`)
};

const pl_settings_readout = /** @type {(inputs: Settings_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ustawienia obozu`)
};

const pt_settings_readout = /** @type {(inputs: Settings_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configurações do acampamento`)
};

const ru_settings_readout = /** @type {(inputs: Settings_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Настройки лагеря`)
};

const sv_settings_readout = /** @type {(inputs: Settings_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lägerinställningar`)
};

const tr_settings_readout = /** @type {(inputs: Settings_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kamp ayarları`)
};

const zh_settings_readout = /** @type {(inputs: Settings_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`营地设置`)
};

const ja_settings_readout = /** @type {(inputs: Settings_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キャンプの設定`)
};

/**
* | output |
* | --- |
* | "Camp settings" |
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
