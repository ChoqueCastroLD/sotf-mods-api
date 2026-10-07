/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Error_File_RequiredInputs */

const en_upload_error_file_required = /** @type {(inputs: Upload_Error_File_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choose a .zip file to continue.`)
};

const es_upload_error_file_required = /** @type {(inputs: Upload_Error_File_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elige un archivo .zip para continuar.`)
};

const de_upload_error_file_required = /** @type {(inputs: Upload_Error_File_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wähle eine .zip-Datei, um fortzufahren.`)
};

const fr_upload_error_file_required = /** @type {(inputs: Upload_Error_File_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choisissez un fichier .zip pour continuer.`)
};

const it_upload_error_file_required = /** @type {(inputs: Upload_Error_File_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scegli un file .zip per continuare.`)
};

const nl_upload_error_file_required = /** @type {(inputs: Upload_Error_File_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kies een .zip-bestand om door te gaan.`)
};

const pl_upload_error_file_required = /** @type {(inputs: Upload_Error_File_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wybierz plik .zip, aby kontynuować.`)
};

const pt_upload_error_file_required = /** @type {(inputs: Upload_Error_File_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escolha um arquivo .zip para continuar.`)
};

const ru_upload_error_file_required = /** @type {(inputs: Upload_Error_File_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выберите файл .zip, чтобы продолжить.`)
};

const sv_upload_error_file_required = /** @type {(inputs: Upload_Error_File_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Välj en .zip-fil för att fortsätta.`)
};

const tr_upload_error_file_required = /** @type {(inputs: Upload_Error_File_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Devam etmek için bir .zip dosyası seç.`)
};

const zh_upload_error_file_required = /** @type {(inputs: Upload_Error_File_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请选择一个 .zip 文件后继续。`)
};

const ja_upload_error_file_required = /** @type {(inputs: Upload_Error_File_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`続けるには .zip ファイルを選んでください。`)
};

/**
* | output |
* | --- |
* | "Choose a .zip file to continue." |
*
* @param {Upload_Error_File_RequiredInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_error_file_required = /** @type {((inputs?: Upload_Error_File_RequiredInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Error_File_RequiredInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_error_file_required(inputs)
	if (locale === "de") return de_upload_error_file_required(inputs)
	if (locale === "fr") return fr_upload_error_file_required(inputs)
	if (locale === "it") return it_upload_error_file_required(inputs)
	if (locale === "nl") return nl_upload_error_file_required(inputs)
	if (locale === "pl") return pl_upload_error_file_required(inputs)
	if (locale === "pt") return pt_upload_error_file_required(inputs)
	if (locale === "ru") return ru_upload_error_file_required(inputs)
	if (locale === "sv") return sv_upload_error_file_required(inputs)
	if (locale === "tr") return tr_upload_error_file_required(inputs)
	if (locale === "zh") return zh_upload_error_file_required(inputs)
	if (locale === "ja") return ja_upload_error_file_required(inputs)
	return en_upload_error_file_required(inputs)
});
