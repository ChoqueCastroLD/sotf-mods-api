/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Avatar_SavedInputs */

const en_settings_avatar_saved = /** @type {(inputs: Settings_Avatar_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New photo saved`)
};

const es_settings_avatar_saved = /** @type {(inputs: Settings_Avatar_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Foto nueva guardada`)
};

const de_settings_avatar_saved = /** @type {(inputs: Settings_Avatar_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neues Foto gespeichert`)
};

const fr_settings_avatar_saved = /** @type {(inputs: Settings_Avatar_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nouvelle photo enregistrée`)
};

const it_settings_avatar_saved = /** @type {(inputs: Settings_Avatar_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuova foto salvata`)
};

const nl_settings_avatar_saved = /** @type {(inputs: Settings_Avatar_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuwe foto opgeslagen`)
};

const pl_settings_avatar_saved = /** @type {(inputs: Settings_Avatar_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zapisano nowe zdjęcie`)
};

const pt_settings_avatar_saved = /** @type {(inputs: Settings_Avatar_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nova foto salva`)
};

const ru_settings_avatar_saved = /** @type {(inputs: Settings_Avatar_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новое фото сохранено`)
};

const sv_settings_avatar_saved = /** @type {(inputs: Settings_Avatar_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nytt foto sparat`)
};

const tr_settings_avatar_saved = /** @type {(inputs: Settings_Avatar_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni fotoğraf kaydedildi`)
};

const zh_settings_avatar_saved = /** @type {(inputs: Settings_Avatar_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新照片已保存`)
};

const ja_settings_avatar_saved = /** @type {(inputs: Settings_Avatar_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しい写真を保存しました`)
};

/**
* | output |
* | --- |
* | "New photo saved" |
*
* @param {Settings_Avatar_SavedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_avatar_saved = /** @type {((inputs?: Settings_Avatar_SavedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Avatar_SavedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_avatar_saved(inputs)
	if (locale === "de") return de_settings_avatar_saved(inputs)
	if (locale === "fr") return fr_settings_avatar_saved(inputs)
	if (locale === "it") return it_settings_avatar_saved(inputs)
	if (locale === "nl") return nl_settings_avatar_saved(inputs)
	if (locale === "pl") return pl_settings_avatar_saved(inputs)
	if (locale === "pt") return pt_settings_avatar_saved(inputs)
	if (locale === "ru") return ru_settings_avatar_saved(inputs)
	if (locale === "sv") return sv_settings_avatar_saved(inputs)
	if (locale === "tr") return tr_settings_avatar_saved(inputs)
	if (locale === "zh") return zh_settings_avatar_saved(inputs)
	if (locale === "ja") return ja_settings_avatar_saved(inputs)
	return en_settings_avatar_saved(inputs)
});
