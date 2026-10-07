/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Error_File_Required_BuildInputs */

const en_upload_error_file_required_build = /** @type {(inputs: Upload_Error_File_Required_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choose a build .json file to continue.`)
};

const es_upload_error_file_required_build = /** @type {(inputs: Upload_Error_File_Required_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elige el archivo .json de la build para continuar.`)
};

const de_upload_error_file_required_build = /** @type {(inputs: Upload_Error_File_Required_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wähle eine Build-.json-Datei, um fortzufahren.`)
};

const fr_upload_error_file_required_build = /** @type {(inputs: Upload_Error_File_Required_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choisissez le fichier .json du build pour continuer.`)
};

const it_upload_error_file_required_build = /** @type {(inputs: Upload_Error_File_Required_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scegli il file .json della build per continuare.`)
};

const nl_upload_error_file_required_build = /** @type {(inputs: Upload_Error_File_Required_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kies het .json-bestand van de build om door te gaan.`)
};

const pl_upload_error_file_required_build = /** @type {(inputs: Upload_Error_File_Required_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wybierz plik .json builda, aby kontynuować.`)
};

const pt_upload_error_file_required_build = /** @type {(inputs: Upload_Error_File_Required_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escolha o arquivo .json da build para continuar.`)
};

const ru_upload_error_file_required_build = /** @type {(inputs: Upload_Error_File_Required_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выберите файл .json сборки, чтобы продолжить.`)
};

const sv_upload_error_file_required_build = /** @type {(inputs: Upload_Error_File_Required_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Välj byggets .json-fil för att fortsätta.`)
};

const tr_upload_error_file_required_build = /** @type {(inputs: Upload_Error_File_Required_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Devam etmek için yapının .json dosyasını seç.`)
};

const zh_upload_error_file_required_build = /** @type {(inputs: Upload_Error_File_Required_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请选择建筑的 .json 文件后继续。`)
};

const ja_upload_error_file_required_build = /** @type {(inputs: Upload_Error_File_Required_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`続けるには建築の .json ファイルを選んでください。`)
};

/**
* | output |
* | --- |
* | "Choose a build .json file to continue." |
*
* @param {Upload_Error_File_Required_BuildInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_error_file_required_build = /** @type {((inputs?: Upload_Error_File_Required_BuildInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Error_File_Required_BuildInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_error_file_required_build(inputs)
	if (locale === "de") return de_upload_error_file_required_build(inputs)
	if (locale === "fr") return fr_upload_error_file_required_build(inputs)
	if (locale === "it") return it_upload_error_file_required_build(inputs)
	if (locale === "nl") return nl_upload_error_file_required_build(inputs)
	if (locale === "pl") return pl_upload_error_file_required_build(inputs)
	if (locale === "pt") return pt_upload_error_file_required_build(inputs)
	if (locale === "ru") return ru_upload_error_file_required_build(inputs)
	if (locale === "sv") return sv_upload_error_file_required_build(inputs)
	if (locale === "tr") return tr_upload_error_file_required_build(inputs)
	if (locale === "zh") return zh_upload_error_file_required_build(inputs)
	if (locale === "ja") return ja_upload_error_file_required_build(inputs)
	return en_upload_error_file_required_build(inputs)
});
