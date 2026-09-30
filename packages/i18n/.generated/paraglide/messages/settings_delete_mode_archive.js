/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Delete_Mode_ArchiveInputs */

const en_settings_delete_mode_archive = /** @type {(inputs: Settings_Delete_Mode_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archive them`)
};

const es_settings_delete_mode_archive = /** @type {(inputs: Settings_Delete_Mode_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archivarlos`)
};

const de_settings_delete_mode_archive = /** @type {(inputs: Settings_Delete_Mode_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archivieren`)
};

const fr_settings_delete_mode_archive = /** @type {(inputs: Settings_Delete_Mode_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les archiver`)
};

const it_settings_delete_mode_archive = /** @type {(inputs: Settings_Delete_Mode_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archiviarle`)
};

const nl_settings_delete_mode_archive = /** @type {(inputs: Settings_Delete_Mode_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archiveren`)
};

const pl_settings_delete_mode_archive = /** @type {(inputs: Settings_Delete_Mode_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zarchiwizuj je`)
};

const pt_settings_delete_mode_archive = /** @type {(inputs: Settings_Delete_Mode_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arquivá-los`)
};

const ru_settings_delete_mode_archive = /** @type {(inputs: Settings_Delete_Mode_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отправить в архив`)
};

const sv_settings_delete_mode_archive = /** @type {(inputs: Settings_Delete_Mode_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arkivera dem`)
};

const tr_settings_delete_mode_archive = /** @type {(inputs: Settings_Delete_Mode_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arşivle`)
};

const zh_settings_delete_mode_archive = /** @type {(inputs: Settings_Delete_Mode_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`归档`)
};

const ja_settings_delete_mode_archive = /** @type {(inputs: Settings_Delete_Mode_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アーカイブする`)
};

/**
* | output |
* | --- |
* | "Archive them" |
*
* @param {Settings_Delete_Mode_ArchiveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_delete_mode_archive = /** @type {((inputs?: Settings_Delete_Mode_ArchiveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Delete_Mode_ArchiveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_delete_mode_archive(inputs)
	if (locale === "de") return de_settings_delete_mode_archive(inputs)
	if (locale === "fr") return fr_settings_delete_mode_archive(inputs)
	if (locale === "it") return it_settings_delete_mode_archive(inputs)
	if (locale === "nl") return nl_settings_delete_mode_archive(inputs)
	if (locale === "pl") return pl_settings_delete_mode_archive(inputs)
	if (locale === "pt") return pt_settings_delete_mode_archive(inputs)
	if (locale === "ru") return ru_settings_delete_mode_archive(inputs)
	if (locale === "sv") return sv_settings_delete_mode_archive(inputs)
	if (locale === "tr") return tr_settings_delete_mode_archive(inputs)
	if (locale === "zh") return zh_settings_delete_mode_archive(inputs)
	if (locale === "ja") return ja_settings_delete_mode_archive(inputs)
	return en_settings_delete_mode_archive(inputs)
});
