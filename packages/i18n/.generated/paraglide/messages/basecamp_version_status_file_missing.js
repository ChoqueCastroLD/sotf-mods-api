/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Version_Status_File_MissingInputs */

const en_basecamp_version_status_file_missing = /** @type {(inputs: Basecamp_Version_Status_File_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`File missing`)
};

const es_basecamp_version_status_file_missing = /** @type {(inputs: Basecamp_Version_Status_File_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Falta el archivo`)
};

const de_basecamp_version_status_file_missing = /** @type {(inputs: Basecamp_Version_Status_File_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Datei fehlt`)
};

const fr_basecamp_version_status_file_missing = /** @type {(inputs: Basecamp_Version_Status_File_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fichier manquant`)
};

const it_basecamp_version_status_file_missing = /** @type {(inputs: Basecamp_Version_Status_File_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`File mancante`)
};

const nl_basecamp_version_status_file_missing = /** @type {(inputs: Basecamp_Version_Status_File_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bestand ontbreekt`)
};

const pl_basecamp_version_status_file_missing = /** @type {(inputs: Basecamp_Version_Status_File_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak pliku`)
};

const pt_basecamp_version_status_file_missing = /** @type {(inputs: Basecamp_Version_Status_File_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arquivo ausente`)
};

const ru_basecamp_version_status_file_missing = /** @type {(inputs: Basecamp_Version_Status_File_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Файл отсутствует`)
};

const sv_basecamp_version_status_file_missing = /** @type {(inputs: Basecamp_Version_Status_File_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filen saknas`)
};

const tr_basecamp_version_status_file_missing = /** @type {(inputs: Basecamp_Version_Status_File_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dosya eksik`)
};

const zh_basecamp_version_status_file_missing = /** @type {(inputs: Basecamp_Version_Status_File_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文件缺失`)
};

const ja_basecamp_version_status_file_missing = /** @type {(inputs: Basecamp_Version_Status_File_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ファイルなし`)
};

/**
* | output |
* | --- |
* | "File missing" |
*
* @param {Basecamp_Version_Status_File_MissingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_version_status_file_missing = /** @type {((inputs?: Basecamp_Version_Status_File_MissingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Version_Status_File_MissingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_version_status_file_missing(inputs)
	if (locale === "de") return de_basecamp_version_status_file_missing(inputs)
	if (locale === "fr") return fr_basecamp_version_status_file_missing(inputs)
	if (locale === "it") return it_basecamp_version_status_file_missing(inputs)
	if (locale === "nl") return nl_basecamp_version_status_file_missing(inputs)
	if (locale === "pl") return pl_basecamp_version_status_file_missing(inputs)
	if (locale === "pt") return pt_basecamp_version_status_file_missing(inputs)
	if (locale === "ru") return ru_basecamp_version_status_file_missing(inputs)
	if (locale === "sv") return sv_basecamp_version_status_file_missing(inputs)
	if (locale === "tr") return tr_basecamp_version_status_file_missing(inputs)
	if (locale === "zh") return zh_basecamp_version_status_file_missing(inputs)
	if (locale === "ja") return ja_basecamp_version_status_file_missing(inputs)
	return en_basecamp_version_status_file_missing(inputs)
});
