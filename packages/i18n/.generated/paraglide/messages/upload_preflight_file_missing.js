/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Preflight_File_MissingInputs */

const en_upload_preflight_file_missing = /** @type {(inputs: Upload_Preflight_File_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upload the file.`)
};

const es_upload_preflight_file_missing = /** @type {(inputs: Upload_Preflight_File_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sube el archivo.`)
};

const de_upload_preflight_file_missing = /** @type {(inputs: Upload_Preflight_File_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lade die Datei hoch.`)
};

const fr_upload_preflight_file_missing = /** @type {(inputs: Upload_Preflight_File_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Envoyez le fichier.`)
};

const it_upload_preflight_file_missing = /** @type {(inputs: Upload_Preflight_File_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Carica il file.`)
};

const nl_upload_preflight_file_missing = /** @type {(inputs: Upload_Preflight_File_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upload het bestand.`)
};

const pl_upload_preflight_file_missing = /** @type {(inputs: Upload_Preflight_File_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyślij plik.`)
};

const pt_upload_preflight_file_missing = /** @type {(inputs: Upload_Preflight_File_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Envie o arquivo.`)
};

const ru_upload_preflight_file_missing = /** @type {(inputs: Upload_Preflight_File_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузите файл.`)
};

const sv_upload_preflight_file_missing = /** @type {(inputs: Upload_Preflight_File_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ladda upp filen.`)
};

const tr_upload_preflight_file_missing = /** @type {(inputs: Upload_Preflight_File_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dosyayı yükle.`)
};

const zh_upload_preflight_file_missing = /** @type {(inputs: Upload_Preflight_File_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请上传文件。`)
};

const ja_upload_preflight_file_missing = /** @type {(inputs: Upload_Preflight_File_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ファイルをアップロードしてください。`)
};

/**
* | output |
* | --- |
* | "Upload the file." |
*
* @param {Upload_Preflight_File_MissingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_preflight_file_missing = /** @type {((inputs?: Upload_Preflight_File_MissingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Preflight_File_MissingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_preflight_file_missing(inputs)
	if (locale === "de") return de_upload_preflight_file_missing(inputs)
	if (locale === "fr") return fr_upload_preflight_file_missing(inputs)
	if (locale === "it") return it_upload_preflight_file_missing(inputs)
	if (locale === "nl") return nl_upload_preflight_file_missing(inputs)
	if (locale === "pl") return pl_upload_preflight_file_missing(inputs)
	if (locale === "pt") return pt_upload_preflight_file_missing(inputs)
	if (locale === "ru") return ru_upload_preflight_file_missing(inputs)
	if (locale === "sv") return sv_upload_preflight_file_missing(inputs)
	if (locale === "tr") return tr_upload_preflight_file_missing(inputs)
	if (locale === "zh") return zh_upload_preflight_file_missing(inputs)
	if (locale === "ja") return ja_upload_preflight_file_missing(inputs)
	return en_upload_preflight_file_missing(inputs)
});
