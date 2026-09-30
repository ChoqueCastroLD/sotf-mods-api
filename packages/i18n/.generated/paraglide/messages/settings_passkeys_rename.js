/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Passkeys_RenameInputs */

const en_settings_passkeys_rename = /** @type {(inputs: Settings_Passkeys_RenameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rename`)
};

const es_settings_passkeys_rename = /** @type {(inputs: Settings_Passkeys_RenameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Renombrar`)
};

const de_settings_passkeys_rename = /** @type {(inputs: Settings_Passkeys_RenameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Umbenennen`)
};

const fr_settings_passkeys_rename = /** @type {(inputs: Settings_Passkeys_RenameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Renommer`)
};

const it_settings_passkeys_rename = /** @type {(inputs: Settings_Passkeys_RenameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rinomina`)
};

const nl_settings_passkeys_rename = /** @type {(inputs: Settings_Passkeys_RenameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hernoemen`)
};

const pl_settings_passkeys_rename = /** @type {(inputs: Settings_Passkeys_RenameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zmień nazwę`)
};

const pt_settings_passkeys_rename = /** @type {(inputs: Settings_Passkeys_RenameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Renomear`)
};

const ru_settings_passkeys_rename = /** @type {(inputs: Settings_Passkeys_RenameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Переименовать`)
};

const sv_settings_passkeys_rename = /** @type {(inputs: Settings_Passkeys_RenameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Byt namn`)
};

const tr_settings_passkeys_rename = /** @type {(inputs: Settings_Passkeys_RenameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeniden adlandır`)
};

const zh_settings_passkeys_rename = /** @type {(inputs: Settings_Passkeys_RenameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重命名`)
};

const ja_settings_passkeys_rename = /** @type {(inputs: Settings_Passkeys_RenameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`名前を変更`)
};

/**
* | output |
* | --- |
* | "Rename" |
*
* @param {Settings_Passkeys_RenameInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_passkeys_rename = /** @type {((inputs?: Settings_Passkeys_RenameInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Passkeys_RenameInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_passkeys_rename(inputs)
	if (locale === "de") return de_settings_passkeys_rename(inputs)
	if (locale === "fr") return fr_settings_passkeys_rename(inputs)
	if (locale === "it") return it_settings_passkeys_rename(inputs)
	if (locale === "nl") return nl_settings_passkeys_rename(inputs)
	if (locale === "pl") return pl_settings_passkeys_rename(inputs)
	if (locale === "pt") return pt_settings_passkeys_rename(inputs)
	if (locale === "ru") return ru_settings_passkeys_rename(inputs)
	if (locale === "sv") return sv_settings_passkeys_rename(inputs)
	if (locale === "tr") return tr_settings_passkeys_rename(inputs)
	if (locale === "zh") return zh_settings_passkeys_rename(inputs)
	if (locale === "ja") return ja_settings_passkeys_rename(inputs)
	return en_settings_passkeys_rename(inputs)
});
