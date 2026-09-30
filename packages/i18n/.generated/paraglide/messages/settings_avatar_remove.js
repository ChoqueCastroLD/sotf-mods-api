/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Avatar_RemoveInputs */

const en_settings_avatar_remove = /** @type {(inputs: Settings_Avatar_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remove photo`)
};

const es_settings_avatar_remove = /** @type {(inputs: Settings_Avatar_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quitar foto`)
};

const de_settings_avatar_remove = /** @type {(inputs: Settings_Avatar_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Foto entfernen`)
};

const fr_settings_avatar_remove = /** @type {(inputs: Settings_Avatar_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retirer la photo`)
};

const it_settings_avatar_remove = /** @type {(inputs: Settings_Avatar_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rimuovi foto`)
};

const nl_settings_avatar_remove = /** @type {(inputs: Settings_Avatar_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Foto verwijderen`)
};

const pl_settings_avatar_remove = /** @type {(inputs: Settings_Avatar_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuń zdjęcie`)
};

const pt_settings_avatar_remove = /** @type {(inputs: Settings_Avatar_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remover foto`)
};

const ru_settings_avatar_remove = /** @type {(inputs: Settings_Avatar_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Удалить фото`)
};

const sv_settings_avatar_remove = /** @type {(inputs: Settings_Avatar_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta bort foto`)
};

const tr_settings_avatar_remove = /** @type {(inputs: Settings_Avatar_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fotoğrafı kaldır`)
};

const zh_settings_avatar_remove = /** @type {(inputs: Settings_Avatar_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`移除照片`)
};

const ja_settings_avatar_remove = /** @type {(inputs: Settings_Avatar_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`写真を削除`)
};

/**
* | output |
* | --- |
* | "Remove photo" |
*
* @param {Settings_Avatar_RemoveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_avatar_remove = /** @type {((inputs?: Settings_Avatar_RemoveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Avatar_RemoveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_avatar_remove(inputs)
	if (locale === "de") return de_settings_avatar_remove(inputs)
	if (locale === "fr") return fr_settings_avatar_remove(inputs)
	if (locale === "it") return it_settings_avatar_remove(inputs)
	if (locale === "nl") return nl_settings_avatar_remove(inputs)
	if (locale === "pl") return pl_settings_avatar_remove(inputs)
	if (locale === "pt") return pt_settings_avatar_remove(inputs)
	if (locale === "ru") return ru_settings_avatar_remove(inputs)
	if (locale === "sv") return sv_settings_avatar_remove(inputs)
	if (locale === "tr") return tr_settings_avatar_remove(inputs)
	if (locale === "zh") return zh_settings_avatar_remove(inputs)
	if (locale === "ja") return ja_settings_avatar_remove(inputs)
	return en_settings_avatar_remove(inputs)
});
