/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_About_SavedInputs */

const en_settings_about_saved = /** @type {(inputs: Settings_About_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profile saved`)
};

const es_settings_about_saved = /** @type {(inputs: Settings_About_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Perfil guardado`)
};

const de_settings_about_saved = /** @type {(inputs: Settings_About_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profil gespeichert`)
};

const fr_settings_about_saved = /** @type {(inputs: Settings_About_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profil enregistré`)
};

const it_settings_about_saved = /** @type {(inputs: Settings_About_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profilo salvato`)
};

const nl_settings_about_saved = /** @type {(inputs: Settings_About_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profiel opgeslagen`)
};

const pl_settings_about_saved = /** @type {(inputs: Settings_About_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zapisano profil`)
};

const pt_settings_about_saved = /** @type {(inputs: Settings_About_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Perfil salvo`)
};

const ru_settings_about_saved = /** @type {(inputs: Settings_About_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Профиль сохранён`)
};

const sv_settings_about_saved = /** @type {(inputs: Settings_About_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profilen sparad`)
};

const tr_settings_about_saved = /** @type {(inputs: Settings_About_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profil kaydedildi`)
};

const zh_settings_about_saved = /** @type {(inputs: Settings_About_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`个人资料已保存`)
};

const ja_settings_about_saved = /** @type {(inputs: Settings_About_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プロフィールを保存しました`)
};

/**
* | output |
* | --- |
* | "Profile saved" |
*
* @param {Settings_About_SavedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_about_saved = /** @type {((inputs?: Settings_About_SavedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_About_SavedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_about_saved(inputs)
	if (locale === "de") return de_settings_about_saved(inputs)
	if (locale === "fr") return fr_settings_about_saved(inputs)
	if (locale === "it") return it_settings_about_saved(inputs)
	if (locale === "nl") return nl_settings_about_saved(inputs)
	if (locale === "pl") return pl_settings_about_saved(inputs)
	if (locale === "pt") return pt_settings_about_saved(inputs)
	if (locale === "ru") return ru_settings_about_saved(inputs)
	if (locale === "sv") return sv_settings_about_saved(inputs)
	if (locale === "tr") return tr_settings_about_saved(inputs)
	if (locale === "zh") return zh_settings_about_saved(inputs)
	if (locale === "ja") return ja_settings_about_saved(inputs)
	return en_settings_about_saved(inputs)
});
