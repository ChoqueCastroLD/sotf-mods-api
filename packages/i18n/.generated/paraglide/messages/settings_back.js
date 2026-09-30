/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_BackInputs */

const en_settings_back = /** @type {(inputs: Settings_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Settings`)
};

const es_settings_back = /** @type {(inputs: Settings_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajustes`)
};

const de_settings_back = /** @type {(inputs: Settings_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Einstellungen`)
};

const fr_settings_back = /** @type {(inputs: Settings_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paramètres`)
};

const it_settings_back = /** @type {(inputs: Settings_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impostazioni`)
};

const nl_settings_back = /** @type {(inputs: Settings_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instellingen`)
};

const pl_settings_back = /** @type {(inputs: Settings_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ustawienia`)
};

const pt_settings_back = /** @type {(inputs: Settings_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configurações`)
};

const ru_settings_back = /** @type {(inputs: Settings_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Настройки`)
};

const sv_settings_back = /** @type {(inputs: Settings_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inställningar`)
};

const tr_settings_back = /** @type {(inputs: Settings_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ayarlar`)
};

const zh_settings_back = /** @type {(inputs: Settings_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`设置`)
};

const ja_settings_back = /** @type {(inputs: Settings_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`設定`)
};

/**
* | output |
* | --- |
* | "Settings" |
*
* @param {Settings_BackInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_back = /** @type {((inputs?: Settings_BackInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_BackInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_back(inputs)
	if (locale === "de") return de_settings_back(inputs)
	if (locale === "fr") return fr_settings_back(inputs)
	if (locale === "it") return it_settings_back(inputs)
	if (locale === "nl") return nl_settings_back(inputs)
	if (locale === "pl") return pl_settings_back(inputs)
	if (locale === "pt") return pt_settings_back(inputs)
	if (locale === "ru") return ru_settings_back(inputs)
	if (locale === "sv") return sv_settings_back(inputs)
	if (locale === "tr") return tr_settings_back(inputs)
	if (locale === "zh") return zh_settings_back(inputs)
	if (locale === "ja") return ja_settings_back(inputs)
	return en_settings_back(inputs)
});
