/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Defaults_SavedInputs */

const en_settings_defaults_saved = /** @type {(inputs: Settings_Defaults_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Defaults saved`)
};

const es_settings_defaults_saved = /** @type {(inputs: Settings_Defaults_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Valores guardados`)
};

const de_settings_defaults_saved = /** @type {(inputs: Settings_Defaults_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Standards gespeichert`)
};

const fr_settings_defaults_saved = /** @type {(inputs: Settings_Defaults_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Valeurs enregistrées`)
};

const it_settings_defaults_saved = /** @type {(inputs: Settings_Defaults_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impostazioni salvate`)
};

const nl_settings_defaults_saved = /** @type {(inputs: Settings_Defaults_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Standaardwaarden opgeslagen`)
};

const pl_settings_defaults_saved = /** @type {(inputs: Settings_Defaults_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zapisano ustawienia domyślne`)
};

const pt_settings_defaults_saved = /** @type {(inputs: Settings_Defaults_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Padrões salvos`)
};

const ru_settings_defaults_saved = /** @type {(inputs: Settings_Defaults_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Настройки по умолчанию сохранены`)
};

const sv_settings_defaults_saved = /** @type {(inputs: Settings_Defaults_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Standardvalen sparade`)
};

const tr_settings_defaults_saved = /** @type {(inputs: Settings_Defaults_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Varsayılanlar kaydedildi`)
};

const zh_settings_defaults_saved = /** @type {(inputs: Settings_Defaults_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`默认设置已保存`)
};

const ja_settings_defaults_saved = /** @type {(inputs: Settings_Defaults_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`既定値を保存しました`)
};

/**
* | output |
* | --- |
* | "Defaults saved" |
*
* @param {Settings_Defaults_SavedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_defaults_saved = /** @type {((inputs?: Settings_Defaults_SavedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Defaults_SavedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_defaults_saved(inputs)
	if (locale === "de") return de_settings_defaults_saved(inputs)
	if (locale === "fr") return fr_settings_defaults_saved(inputs)
	if (locale === "it") return it_settings_defaults_saved(inputs)
	if (locale === "nl") return nl_settings_defaults_saved(inputs)
	if (locale === "pl") return pl_settings_defaults_saved(inputs)
	if (locale === "pt") return pt_settings_defaults_saved(inputs)
	if (locale === "ru") return ru_settings_defaults_saved(inputs)
	if (locale === "sv") return sv_settings_defaults_saved(inputs)
	if (locale === "tr") return tr_settings_defaults_saved(inputs)
	if (locale === "zh") return zh_settings_defaults_saved(inputs)
	if (locale === "ja") return ja_settings_defaults_saved(inputs)
	return en_settings_defaults_saved(inputs)
});
