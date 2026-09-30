/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Nav_PreferencesInputs */

const en_console_nav_preferences = /** @type {(inputs: Console_Nav_PreferencesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preferences`)
};

const es_console_nav_preferences = /** @type {(inputs: Console_Nav_PreferencesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preferencias`)
};

const de_console_nav_preferences = /** @type {(inputs: Console_Nav_PreferencesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Präferenzen`)
};

const fr_console_nav_preferences = /** @type {(inputs: Console_Nav_PreferencesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Préférences`)
};

const it_console_nav_preferences = /** @type {(inputs: Console_Nav_PreferencesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preferenze`)
};

const nl_console_nav_preferences = /** @type {(inputs: Console_Nav_PreferencesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voorkeuren`)
};

const pl_console_nav_preferences = /** @type {(inputs: Console_Nav_PreferencesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preferencje`)
};

const pt_console_nav_preferences = /** @type {(inputs: Console_Nav_PreferencesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preferências`)
};

const ru_console_nav_preferences = /** @type {(inputs: Console_Nav_PreferencesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Предпочтения`)
};

const sv_console_nav_preferences = /** @type {(inputs: Console_Nav_PreferencesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preferenser`)
};

const tr_console_nav_preferences = /** @type {(inputs: Console_Nav_PreferencesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tercihler`)
};

const zh_console_nav_preferences = /** @type {(inputs: Console_Nav_PreferencesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`偏好`)
};

const ja_console_nav_preferences = /** @type {(inputs: Console_Nav_PreferencesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`表示と操作`)
};

/**
* | output |
* | --- |
* | "Preferences" |
*
* @param {Console_Nav_PreferencesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_nav_preferences = /** @type {((inputs?: Console_Nav_PreferencesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Nav_PreferencesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_nav_preferences(inputs)
	if (locale === "de") return de_console_nav_preferences(inputs)
	if (locale === "fr") return fr_console_nav_preferences(inputs)
	if (locale === "it") return it_console_nav_preferences(inputs)
	if (locale === "nl") return nl_console_nav_preferences(inputs)
	if (locale === "pl") return pl_console_nav_preferences(inputs)
	if (locale === "pt") return pt_console_nav_preferences(inputs)
	if (locale === "ru") return ru_console_nav_preferences(inputs)
	if (locale === "sv") return sv_console_nav_preferences(inputs)
	if (locale === "tr") return tr_console_nav_preferences(inputs)
	if (locale === "zh") return zh_console_nav_preferences(inputs)
	if (locale === "ja") return ja_console_nav_preferences(inputs)
	return en_console_nav_preferences(inputs)
});
