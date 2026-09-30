/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Appearance_SavedInputs */

const en_settings_appearance_saved = /** @type {(inputs: Settings_Appearance_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Appearance saved`)
};

const es_settings_appearance_saved = /** @type {(inputs: Settings_Appearance_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apariencia guardada`)
};

const de_settings_appearance_saved = /** @type {(inputs: Settings_Appearance_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Darstellung gespeichert`)
};

const fr_settings_appearance_saved = /** @type {(inputs: Settings_Appearance_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apparence enregistrée`)
};

const it_settings_appearance_saved = /** @type {(inputs: Settings_Appearance_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aspetto salvato`)
};

const nl_settings_appearance_saved = /** @type {(inputs: Settings_Appearance_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Weergave opgeslagen`)
};

const pl_settings_appearance_saved = /** @type {(inputs: Settings_Appearance_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zapisano wygląd`)
};

const pt_settings_appearance_saved = /** @type {(inputs: Settings_Appearance_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aparência salva`)
};

const ru_settings_appearance_saved = /** @type {(inputs: Settings_Appearance_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Внешний вид сохранён`)
};

const sv_settings_appearance_saved = /** @type {(inputs: Settings_Appearance_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utseendet sparat`)
};

const tr_settings_appearance_saved = /** @type {(inputs: Settings_Appearance_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Görünüm kaydedildi`)
};

const zh_settings_appearance_saved = /** @type {(inputs: Settings_Appearance_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`外观已保存`)
};

const ja_settings_appearance_saved = /** @type {(inputs: Settings_Appearance_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`外観を保存しました`)
};

/**
* | output |
* | --- |
* | "Appearance saved" |
*
* @param {Settings_Appearance_SavedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_appearance_saved = /** @type {((inputs?: Settings_Appearance_SavedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Appearance_SavedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_appearance_saved(inputs)
	if (locale === "de") return de_settings_appearance_saved(inputs)
	if (locale === "fr") return fr_settings_appearance_saved(inputs)
	if (locale === "it") return it_settings_appearance_saved(inputs)
	if (locale === "nl") return nl_settings_appearance_saved(inputs)
	if (locale === "pl") return pl_settings_appearance_saved(inputs)
	if (locale === "pt") return pt_settings_appearance_saved(inputs)
	if (locale === "ru") return ru_settings_appearance_saved(inputs)
	if (locale === "sv") return sv_settings_appearance_saved(inputs)
	if (locale === "tr") return tr_settings_appearance_saved(inputs)
	if (locale === "zh") return zh_settings_appearance_saved(inputs)
	if (locale === "ja") return ja_settings_appearance_saved(inputs)
	return en_settings_appearance_saved(inputs)
});
