/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Theme_DayInputs */

const en_settings_theme_day = /** @type {(inputs: Settings_Theme_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Light`)
};

const es_settings_theme_day = /** @type {(inputs: Settings_Theme_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Claro`)
};

const de_settings_theme_day = /** @type {(inputs: Settings_Theme_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hell`)
};

const fr_settings_theme_day = /** @type {(inputs: Settings_Theme_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clair`)
};

const it_settings_theme_day = /** @type {(inputs: Settings_Theme_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chiaro`)
};

const nl_settings_theme_day = /** @type {(inputs: Settings_Theme_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Licht`)
};

const pl_settings_theme_day = /** @type {(inputs: Settings_Theme_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jasny`)
};

const pt_settings_theme_day = /** @type {(inputs: Settings_Theme_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Claro`)
};

const ru_settings_theme_day = /** @type {(inputs: Settings_Theme_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Светлая`)
};

const sv_settings_theme_day = /** @type {(inputs: Settings_Theme_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ljust`)
};

const tr_settings_theme_day = /** @type {(inputs: Settings_Theme_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Açık`)
};

const zh_settings_theme_day = /** @type {(inputs: Settings_Theme_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`浅色`)
};

const ja_settings_theme_day = /** @type {(inputs: Settings_Theme_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ライト`)
};

/**
* | output |
* | --- |
* | "Light" |
*
* @param {Settings_Theme_DayInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_theme_day = /** @type {((inputs?: Settings_Theme_DayInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Theme_DayInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_theme_day(inputs)
	if (locale === "de") return de_settings_theme_day(inputs)
	if (locale === "fr") return fr_settings_theme_day(inputs)
	if (locale === "it") return it_settings_theme_day(inputs)
	if (locale === "nl") return nl_settings_theme_day(inputs)
	if (locale === "pl") return pl_settings_theme_day(inputs)
	if (locale === "pt") return pt_settings_theme_day(inputs)
	if (locale === "ru") return ru_settings_theme_day(inputs)
	if (locale === "sv") return sv_settings_theme_day(inputs)
	if (locale === "tr") return tr_settings_theme_day(inputs)
	if (locale === "zh") return zh_settings_theme_day(inputs)
	if (locale === "ja") return ja_settings_theme_day(inputs)
	return en_settings_theme_day(inputs)
});
