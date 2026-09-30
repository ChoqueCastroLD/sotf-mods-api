/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Avatar_ChangeInputs */

const en_settings_avatar_change = /** @type {(inputs: Settings_Avatar_ChangeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Change photo`)
};

const es_settings_avatar_change = /** @type {(inputs: Settings_Avatar_ChangeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cambiar foto`)
};

const de_settings_avatar_change = /** @type {(inputs: Settings_Avatar_ChangeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Foto ändern`)
};

const fr_settings_avatar_change = /** @type {(inputs: Settings_Avatar_ChangeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Changer de photo`)
};

const it_settings_avatar_change = /** @type {(inputs: Settings_Avatar_ChangeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cambia foto`)
};

const nl_settings_avatar_change = /** @type {(inputs: Settings_Avatar_ChangeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Foto wijzigen`)
};

const pl_settings_avatar_change = /** @type {(inputs: Settings_Avatar_ChangeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zmień zdjęcie`)
};

const pt_settings_avatar_change = /** @type {(inputs: Settings_Avatar_ChangeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trocar foto`)
};

const ru_settings_avatar_change = /** @type {(inputs: Settings_Avatar_ChangeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сменить фото`)
};

const sv_settings_avatar_change = /** @type {(inputs: Settings_Avatar_ChangeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Byt foto`)
};

const tr_settings_avatar_change = /** @type {(inputs: Settings_Avatar_ChangeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fotoğrafı değiştir`)
};

const zh_settings_avatar_change = /** @type {(inputs: Settings_Avatar_ChangeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更换照片`)
};

const ja_settings_avatar_change = /** @type {(inputs: Settings_Avatar_ChangeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`写真を変更`)
};

/**
* | output |
* | --- |
* | "Change photo" |
*
* @param {Settings_Avatar_ChangeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_avatar_change = /** @type {((inputs?: Settings_Avatar_ChangeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Avatar_ChangeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_avatar_change(inputs)
	if (locale === "de") return de_settings_avatar_change(inputs)
	if (locale === "fr") return fr_settings_avatar_change(inputs)
	if (locale === "it") return it_settings_avatar_change(inputs)
	if (locale === "nl") return nl_settings_avatar_change(inputs)
	if (locale === "pl") return pl_settings_avatar_change(inputs)
	if (locale === "pt") return pt_settings_avatar_change(inputs)
	if (locale === "ru") return ru_settings_avatar_change(inputs)
	if (locale === "sv") return sv_settings_avatar_change(inputs)
	if (locale === "tr") return tr_settings_avatar_change(inputs)
	if (locale === "zh") return zh_settings_avatar_change(inputs)
	if (locale === "ja") return ja_settings_avatar_change(inputs)
	return en_settings_avatar_change(inputs)
});
