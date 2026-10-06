/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Theme_NightInputs */

const en_settings_theme_night = /** @type {(inputs: Settings_Theme_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dark`)
};

const es_settings_theme_night = /** @type {(inputs: Settings_Theme_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oscuro`)
};

const de_settings_theme_night = /** @type {(inputs: Settings_Theme_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dunkel`)
};

const fr_settings_theme_night = /** @type {(inputs: Settings_Theme_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sombre`)
};

const it_settings_theme_night = /** @type {(inputs: Settings_Theme_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scuro`)
};

const nl_settings_theme_night = /** @type {(inputs: Settings_Theme_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Donker`)
};

const pl_settings_theme_night = /** @type {(inputs: Settings_Theme_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ciemny`)
};

const pt_settings_theme_night = /** @type {(inputs: Settings_Theme_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escuro`)
};

const ru_settings_theme_night = /** @type {(inputs: Settings_Theme_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Тёмная`)
};

const sv_settings_theme_night = /** @type {(inputs: Settings_Theme_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mörkt`)
};

const tr_settings_theme_night = /** @type {(inputs: Settings_Theme_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Koyu`)
};

const zh_settings_theme_night = /** @type {(inputs: Settings_Theme_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`深色`)
};

const ja_settings_theme_night = /** @type {(inputs: Settings_Theme_NightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダーク`)
};

/**
* | output |
* | --- |
* | "Dark" |
*
* @param {Settings_Theme_NightInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_theme_night = /** @type {((inputs?: Settings_Theme_NightInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Theme_NightInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_theme_night(inputs)
	if (locale === "de") return de_settings_theme_night(inputs)
	if (locale === "fr") return fr_settings_theme_night(inputs)
	if (locale === "it") return it_settings_theme_night(inputs)
	if (locale === "nl") return nl_settings_theme_night(inputs)
	if (locale === "pl") return pl_settings_theme_night(inputs)
	if (locale === "pt") return pt_settings_theme_night(inputs)
	if (locale === "ru") return ru_settings_theme_night(inputs)
	if (locale === "sv") return sv_settings_theme_night(inputs)
	if (locale === "tr") return tr_settings_theme_night(inputs)
	if (locale === "zh") return zh_settings_theme_night(inputs)
	if (locale === "ja") return ja_settings_theme_night(inputs)
	return en_settings_theme_night(inputs)
});
