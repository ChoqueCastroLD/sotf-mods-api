/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Flag_File_Too_LargeInputs */

const en_upload_flag_file_too_large = /** @type {(inputs: Upload_Flag_File_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The file is too large.`)
};

const es_upload_flag_file_too_large = /** @type {(inputs: Upload_Flag_File_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El archivo es demasiado grande.`)
};

const de_upload_flag_file_too_large = /** @type {(inputs: Upload_Flag_File_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Datei ist zu groß.`)
};

const fr_upload_flag_file_too_large = /** @type {(inputs: Upload_Flag_File_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le fichier est trop volumineux.`)
};

const it_upload_flag_file_too_large = /** @type {(inputs: Upload_Flag_File_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il file è troppo grande.`)
};

const nl_upload_flag_file_too_large = /** @type {(inputs: Upload_Flag_File_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het bestand is te groot.`)
};

const pl_upload_flag_file_too_large = /** @type {(inputs: Upload_Flag_File_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plik jest za duży.`)
};

const pt_upload_flag_file_too_large = /** @type {(inputs: Upload_Flag_File_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O arquivo é grande demais.`)
};

const ru_upload_flag_file_too_large = /** @type {(inputs: Upload_Flag_File_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Файл слишком большой.`)
};

const sv_upload_flag_file_too_large = /** @type {(inputs: Upload_Flag_File_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filen är för stor.`)
};

const tr_upload_flag_file_too_large = /** @type {(inputs: Upload_Flag_File_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dosya çok büyük.`)
};

const zh_upload_flag_file_too_large = /** @type {(inputs: Upload_Flag_File_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文件过大。`)
};

const ja_upload_flag_file_too_large = /** @type {(inputs: Upload_Flag_File_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ファイルが大きすぎます。`)
};

/**
* | output |
* | --- |
* | "The file is too large." |
*
* @param {Upload_Flag_File_Too_LargeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_flag_file_too_large = /** @type {((inputs?: Upload_Flag_File_Too_LargeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Flag_File_Too_LargeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_flag_file_too_large(inputs)
	if (locale === "de") return de_upload_flag_file_too_large(inputs)
	if (locale === "fr") return fr_upload_flag_file_too_large(inputs)
	if (locale === "it") return it_upload_flag_file_too_large(inputs)
	if (locale === "nl") return nl_upload_flag_file_too_large(inputs)
	if (locale === "pl") return pl_upload_flag_file_too_large(inputs)
	if (locale === "pt") return pt_upload_flag_file_too_large(inputs)
	if (locale === "ru") return ru_upload_flag_file_too_large(inputs)
	if (locale === "sv") return sv_upload_flag_file_too_large(inputs)
	if (locale === "tr") return tr_upload_flag_file_too_large(inputs)
	if (locale === "zh") return zh_upload_flag_file_too_large(inputs)
	if (locale === "ja") return ja_upload_flag_file_too_large(inputs)
	return en_upload_flag_file_too_large(inputs)
});
