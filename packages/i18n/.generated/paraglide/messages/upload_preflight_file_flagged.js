/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Preflight_File_FlaggedInputs */

const en_upload_preflight_file_flagged = /** @type {(inputs: Upload_Preflight_File_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The file needs a moderator’s review before it goes live.`)
};

const es_upload_preflight_file_flagged = /** @type {(inputs: Upload_Preflight_File_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El archivo necesita la revisión de un moderador antes de publicarse.`)
};

const de_upload_preflight_file_flagged = /** @type {(inputs: Upload_Preflight_File_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Datei muss von einem Moderator geprüft werden, bevor sie online geht.`)
};

const fr_upload_preflight_file_flagged = /** @type {(inputs: Upload_Preflight_File_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le fichier doit être examiné par un modérateur avant publication.`)
};

const it_upload_preflight_file_flagged = /** @type {(inputs: Upload_Preflight_File_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il file deve essere esaminato da un moderatore prima della pubblicazione.`)
};

const nl_upload_preflight_file_flagged = /** @type {(inputs: Upload_Preflight_File_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een moderator moet het bestand controleren voordat het live gaat.`)
};

const pl_upload_preflight_file_flagged = /** @type {(inputs: Upload_Preflight_File_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przed publikacją plik musi przejrzeć moderator.`)
};

const pt_upload_preflight_file_flagged = /** @type {(inputs: Upload_Preflight_File_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O arquivo precisa da revisão de um moderador antes de ser publicado.`)
};

const ru_upload_preflight_file_flagged = /** @type {(inputs: Upload_Preflight_File_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Перед публикацией файл должен проверить модератор.`)
};

const sv_upload_preflight_file_flagged = /** @type {(inputs: Upload_Preflight_File_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filen måste granskas av en moderator innan den publiceras.`)
};

const tr_upload_preflight_file_flagged = /** @type {(inputs: Upload_Preflight_File_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dosyanın yayına girmeden önce bir moderatör tarafından incelenmesi gerekiyor.`)
};

const zh_upload_preflight_file_flagged = /** @type {(inputs: Upload_Preflight_File_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文件需要版主审核后才能发布。`)
};

const ja_upload_preflight_file_flagged = /** @type {(inputs: Upload_Preflight_File_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公開前にモデレーターによるファイルの確認が必要です。`)
};

/**
* | output |
* | --- |
* | "The file needs a moderator’s review before it goes live." |
*
* @param {Upload_Preflight_File_FlaggedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_preflight_file_flagged = /** @type {((inputs?: Upload_Preflight_File_FlaggedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Preflight_File_FlaggedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_preflight_file_flagged(inputs)
	if (locale === "de") return de_upload_preflight_file_flagged(inputs)
	if (locale === "fr") return fr_upload_preflight_file_flagged(inputs)
	if (locale === "it") return it_upload_preflight_file_flagged(inputs)
	if (locale === "nl") return nl_upload_preflight_file_flagged(inputs)
	if (locale === "pl") return pl_upload_preflight_file_flagged(inputs)
	if (locale === "pt") return pt_upload_preflight_file_flagged(inputs)
	if (locale === "ru") return ru_upload_preflight_file_flagged(inputs)
	if (locale === "sv") return sv_upload_preflight_file_flagged(inputs)
	if (locale === "tr") return tr_upload_preflight_file_flagged(inputs)
	if (locale === "zh") return zh_upload_preflight_file_flagged(inputs)
	if (locale === "ja") return ja_upload_preflight_file_flagged(inputs)
	return en_upload_preflight_file_flagged(inputs)
});
