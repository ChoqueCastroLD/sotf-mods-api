/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Preferences_TitleInputs */

const en_settings_preferences_title = /** @type {(inputs: Settings_Preferences_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preferences`)
};

const es_settings_preferences_title = /** @type {(inputs: Settings_Preferences_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preferencias`)
};

const de_settings_preferences_title = /** @type {(inputs: Settings_Preferences_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Präferenzen`)
};

const fr_settings_preferences_title = /** @type {(inputs: Settings_Preferences_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Préférences`)
};

const it_settings_preferences_title = /** @type {(inputs: Settings_Preferences_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preferenze`)
};

const nl_settings_preferences_title = /** @type {(inputs: Settings_Preferences_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voorkeuren`)
};

const pl_settings_preferences_title = /** @type {(inputs: Settings_Preferences_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preferencje`)
};

const pt_settings_preferences_title = /** @type {(inputs: Settings_Preferences_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preferências`)
};

const ru_settings_preferences_title = /** @type {(inputs: Settings_Preferences_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Предпочтения`)
};

const sv_settings_preferences_title = /** @type {(inputs: Settings_Preferences_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preferenser`)
};

const tr_settings_preferences_title = /** @type {(inputs: Settings_Preferences_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tercihler`)
};

const zh_settings_preferences_title = /** @type {(inputs: Settings_Preferences_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`偏好`)
};

const ja_settings_preferences_title = /** @type {(inputs: Settings_Preferences_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`環境設定`)
};

/**
* | output |
* | --- |
* | "Preferences" |
*
* @param {Settings_Preferences_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_preferences_title = /** @type {((inputs?: Settings_Preferences_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Preferences_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_preferences_title(inputs)
	if (locale === "de") return de_settings_preferences_title(inputs)
	if (locale === "fr") return fr_settings_preferences_title(inputs)
	if (locale === "it") return it_settings_preferences_title(inputs)
	if (locale === "nl") return nl_settings_preferences_title(inputs)
	if (locale === "pl") return pl_settings_preferences_title(inputs)
	if (locale === "pt") return pt_settings_preferences_title(inputs)
	if (locale === "ru") return ru_settings_preferences_title(inputs)
	if (locale === "sv") return sv_settings_preferences_title(inputs)
	if (locale === "tr") return tr_settings_preferences_title(inputs)
	if (locale === "zh") return zh_settings_preferences_title(inputs)
	if (locale === "ja") return ja_settings_preferences_title(inputs)
	return en_settings_preferences_title(inputs)
});
