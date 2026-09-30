/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Settings_DefaultInputs */

const en_admin_settings_default = /** @type {(inputs: Admin_Settings_DefaultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Using the built-in defaults`)
};

const es_admin_settings_default = /** @type {(inputs: Admin_Settings_DefaultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Con los valores predeterminados`)
};

const de_admin_settings_default = /** @type {(inputs: Admin_Settings_DefaultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Es gelten die Standardwerte`)
};

const fr_admin_settings_default = /** @type {(inputs: Admin_Settings_DefaultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Valeurs par défaut utilisées`)
};

const it_admin_settings_default = /** @type {(inputs: Admin_Settings_DefaultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Valori predefiniti in uso`)
};

const nl_admin_settings_default = /** @type {(inputs: Admin_Settings_DefaultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Standaardwaarden in gebruik`)
};

const pl_admin_settings_default = /** @type {(inputs: Admin_Settings_DefaultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Używane są wartości domyślne`)
};

const pt_admin_settings_default = /** @type {(inputs: Admin_Settings_DefaultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usando os valores padrão`)
};

const ru_admin_settings_default = /** @type {(inputs: Admin_Settings_DefaultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Используются значения по умолчанию`)
};

const sv_admin_settings_default = /** @type {(inputs: Admin_Settings_DefaultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Standardvärdena används`)
};

const tr_admin_settings_default = /** @type {(inputs: Admin_Settings_DefaultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Varsayılan değerler kullanılıyor`)
};

const zh_admin_settings_default = /** @type {(inputs: Admin_Settings_DefaultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在使用默认值`)
};

const ja_admin_settings_default = /** @type {(inputs: Admin_Settings_DefaultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`既定値を使用中`)
};

/**
* | output |
* | --- |
* | "Using the built-in defaults" |
*
* @param {Admin_Settings_DefaultInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_settings_default = /** @type {((inputs?: Admin_Settings_DefaultInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Settings_DefaultInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_settings_default(inputs)
	if (locale === "de") return de_admin_settings_default(inputs)
	if (locale === "fr") return fr_admin_settings_default(inputs)
	if (locale === "it") return it_admin_settings_default(inputs)
	if (locale === "nl") return nl_admin_settings_default(inputs)
	if (locale === "pl") return pl_admin_settings_default(inputs)
	if (locale === "pt") return pt_admin_settings_default(inputs)
	if (locale === "ru") return ru_admin_settings_default(inputs)
	if (locale === "sv") return sv_admin_settings_default(inputs)
	if (locale === "tr") return tr_admin_settings_default(inputs)
	if (locale === "zh") return zh_admin_settings_default(inputs)
	if (locale === "ja") return ja_admin_settings_default(inputs)
	return en_admin_settings_default(inputs)
});
