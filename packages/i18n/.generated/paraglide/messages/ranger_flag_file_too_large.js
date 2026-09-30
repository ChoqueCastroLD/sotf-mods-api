/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Flag_File_Too_LargeInputs */

const en_ranger_flag_file_too_large = /** @type {(inputs: Ranger_Flag_File_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`File too large`)
};

const es_ranger_flag_file_too_large = /** @type {(inputs: Ranger_Flag_File_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archivo demasiado grande`)
};

const de_ranger_flag_file_too_large = /** @type {(inputs: Ranger_Flag_File_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Datei zu groß`)
};

const fr_ranger_flag_file_too_large = /** @type {(inputs: Ranger_Flag_File_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fichier trop volumineux`)
};

const it_ranger_flag_file_too_large = /** @type {(inputs: Ranger_Flag_File_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`File troppo grande`)
};

const nl_ranger_flag_file_too_large = /** @type {(inputs: Ranger_Flag_File_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bestand te groot`)
};

const pl_ranger_flag_file_too_large = /** @type {(inputs: Ranger_Flag_File_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plik za duży`)
};

const pt_ranger_flag_file_too_large = /** @type {(inputs: Ranger_Flag_File_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arquivo grande demais`)
};

const ru_ranger_flag_file_too_large = /** @type {(inputs: Ranger_Flag_File_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Файл слишком большой`)
};

const sv_ranger_flag_file_too_large = /** @type {(inputs: Ranger_Flag_File_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filen är för stor`)
};

const tr_ranger_flag_file_too_large = /** @type {(inputs: Ranger_Flag_File_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dosya çok büyük`)
};

const zh_ranger_flag_file_too_large = /** @type {(inputs: Ranger_Flag_File_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文件过大`)
};

const ja_ranger_flag_file_too_large = /** @type {(inputs: Ranger_Flag_File_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ファイルが大きすぎます`)
};

/**
* | output |
* | --- |
* | "File too large" |
*
* @param {Ranger_Flag_File_Too_LargeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_flag_file_too_large = /** @type {((inputs?: Ranger_Flag_File_Too_LargeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Flag_File_Too_LargeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_flag_file_too_large(inputs)
	if (locale === "de") return de_ranger_flag_file_too_large(inputs)
	if (locale === "fr") return fr_ranger_flag_file_too_large(inputs)
	if (locale === "it") return it_ranger_flag_file_too_large(inputs)
	if (locale === "nl") return nl_ranger_flag_file_too_large(inputs)
	if (locale === "pl") return pl_ranger_flag_file_too_large(inputs)
	if (locale === "pt") return pt_ranger_flag_file_too_large(inputs)
	if (locale === "ru") return ru_ranger_flag_file_too_large(inputs)
	if (locale === "sv") return sv_ranger_flag_file_too_large(inputs)
	if (locale === "tr") return tr_ranger_flag_file_too_large(inputs)
	if (locale === "zh") return zh_ranger_flag_file_too_large(inputs)
	if (locale === "ja") return ja_ranger_flag_file_too_large(inputs)
	return en_ranger_flag_file_too_large(inputs)
});
