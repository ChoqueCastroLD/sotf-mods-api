/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_ThemeInputs */

const en_settings_theme = /** @type {(inputs: Settings_ThemeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Theme`)
};

const es_settings_theme = /** @type {(inputs: Settings_ThemeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tema`)
};

const de_settings_theme = /** @type {(inputs: Settings_ThemeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Design`)
};

const fr_settings_theme = /** @type {(inputs: Settings_ThemeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Thème`)
};

const it_settings_theme = /** @type {(inputs: Settings_ThemeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tema`)
};

const nl_settings_theme = /** @type {(inputs: Settings_ThemeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Thema`)
};

const pl_settings_theme = /** @type {(inputs: Settings_ThemeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Motyw`)
};

const pt_settings_theme = /** @type {(inputs: Settings_ThemeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tema`)
};

const ru_settings_theme = /** @type {(inputs: Settings_ThemeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Тема`)
};

const sv_settings_theme = /** @type {(inputs: Settings_ThemeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tema`)
};

const tr_settings_theme = /** @type {(inputs: Settings_ThemeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tema`)
};

const zh_settings_theme = /** @type {(inputs: Settings_ThemeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`主题`)
};

const ja_settings_theme = /** @type {(inputs: Settings_ThemeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`テーマ`)
};

/**
* | output |
* | --- |
* | "Theme" |
*
* @param {Settings_ThemeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_theme = /** @type {((inputs?: Settings_ThemeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_ThemeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_theme(inputs)
	if (locale === "de") return de_settings_theme(inputs)
	if (locale === "fr") return fr_settings_theme(inputs)
	if (locale === "it") return it_settings_theme(inputs)
	if (locale === "nl") return nl_settings_theme(inputs)
	if (locale === "pl") return pl_settings_theme(inputs)
	if (locale === "pt") return pt_settings_theme(inputs)
	if (locale === "ru") return ru_settings_theme(inputs)
	if (locale === "sv") return sv_settings_theme(inputs)
	if (locale === "tr") return tr_settings_theme(inputs)
	if (locale === "zh") return zh_settings_theme(inputs)
	if (locale === "ja") return ja_settings_theme(inputs)
	return en_settings_theme(inputs)
});
