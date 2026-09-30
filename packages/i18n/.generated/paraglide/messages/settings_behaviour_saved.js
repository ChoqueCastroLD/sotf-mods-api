/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Behaviour_SavedInputs */

const en_settings_behaviour_saved = /** @type {(inputs: Settings_Behaviour_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preferences saved`)
};

const es_settings_behaviour_saved = /** @type {(inputs: Settings_Behaviour_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preferencias guardadas`)
};

const de_settings_behaviour_saved = /** @type {(inputs: Settings_Behaviour_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Präferenzen gespeichert`)
};

const fr_settings_behaviour_saved = /** @type {(inputs: Settings_Behaviour_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Préférences enregistrées`)
};

const it_settings_behaviour_saved = /** @type {(inputs: Settings_Behaviour_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preferenze salvate`)
};

const nl_settings_behaviour_saved = /** @type {(inputs: Settings_Behaviour_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voorkeuren opgeslagen`)
};

const pl_settings_behaviour_saved = /** @type {(inputs: Settings_Behaviour_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zapisano preferencje`)
};

const pt_settings_behaviour_saved = /** @type {(inputs: Settings_Behaviour_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preferências salvas`)
};

const ru_settings_behaviour_saved = /** @type {(inputs: Settings_Behaviour_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Предпочтения сохранены`)
};

const sv_settings_behaviour_saved = /** @type {(inputs: Settings_Behaviour_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preferenserna sparade`)
};

const tr_settings_behaviour_saved = /** @type {(inputs: Settings_Behaviour_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tercihler kaydedildi`)
};

const zh_settings_behaviour_saved = /** @type {(inputs: Settings_Behaviour_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`偏好已保存`)
};

const ja_settings_behaviour_saved = /** @type {(inputs: Settings_Behaviour_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`環境設定を保存しました`)
};

/**
* | output |
* | --- |
* | "Preferences saved" |
*
* @param {Settings_Behaviour_SavedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_behaviour_saved = /** @type {((inputs?: Settings_Behaviour_SavedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Behaviour_SavedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_behaviour_saved(inputs)
	if (locale === "de") return de_settings_behaviour_saved(inputs)
	if (locale === "fr") return fr_settings_behaviour_saved(inputs)
	if (locale === "it") return it_settings_behaviour_saved(inputs)
	if (locale === "nl") return nl_settings_behaviour_saved(inputs)
	if (locale === "pl") return pl_settings_behaviour_saved(inputs)
	if (locale === "pt") return pt_settings_behaviour_saved(inputs)
	if (locale === "ru") return ru_settings_behaviour_saved(inputs)
	if (locale === "sv") return sv_settings_behaviour_saved(inputs)
	if (locale === "tr") return tr_settings_behaviour_saved(inputs)
	if (locale === "zh") return zh_settings_behaviour_saved(inputs)
	if (locale === "ja") return ja_settings_behaviour_saved(inputs)
	return en_settings_behaviour_saved(inputs)
});
