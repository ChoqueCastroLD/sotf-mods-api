/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Language_SavedInputs */

const en_settings_language_saved = /** @type {(inputs: Settings_Language_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Language saved`)
};

const es_settings_language_saved = /** @type {(inputs: Settings_Language_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Idioma guardado`)
};

const de_settings_language_saved = /** @type {(inputs: Settings_Language_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sprache gespeichert`)
};

const fr_settings_language_saved = /** @type {(inputs: Settings_Language_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Langue enregistrée`)
};

const it_settings_language_saved = /** @type {(inputs: Settings_Language_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lingua salvata`)
};

const nl_settings_language_saved = /** @type {(inputs: Settings_Language_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taal opgeslagen`)
};

const pl_settings_language_saved = /** @type {(inputs: Settings_Language_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zapisano język`)
};

const pt_settings_language_saved = /** @type {(inputs: Settings_Language_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Idioma salvo`)
};

const ru_settings_language_saved = /** @type {(inputs: Settings_Language_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Язык сохранён`)
};

const sv_settings_language_saved = /** @type {(inputs: Settings_Language_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Språket sparat`)
};

const tr_settings_language_saved = /** @type {(inputs: Settings_Language_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dil kaydedildi`)
};

const zh_settings_language_saved = /** @type {(inputs: Settings_Language_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`语言已保存`)
};

const ja_settings_language_saved = /** @type {(inputs: Settings_Language_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`言語を保存しました`)
};

/**
* | output |
* | --- |
* | "Language saved" |
*
* @param {Settings_Language_SavedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_language_saved = /** @type {((inputs?: Settings_Language_SavedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Language_SavedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_language_saved(inputs)
	if (locale === "de") return de_settings_language_saved(inputs)
	if (locale === "fr") return fr_settings_language_saved(inputs)
	if (locale === "it") return it_settings_language_saved(inputs)
	if (locale === "nl") return nl_settings_language_saved(inputs)
	if (locale === "pl") return pl_settings_language_saved(inputs)
	if (locale === "pt") return pt_settings_language_saved(inputs)
	if (locale === "ru") return ru_settings_language_saved(inputs)
	if (locale === "sv") return sv_settings_language_saved(inputs)
	if (locale === "tr") return tr_settings_language_saved(inputs)
	if (locale === "zh") return zh_settings_language_saved(inputs)
	if (locale === "ja") return ja_settings_language_saved(inputs)
	return en_settings_language_saved(inputs)
});
