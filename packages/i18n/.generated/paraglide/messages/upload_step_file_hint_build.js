/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Step_File_Hint_BuildInputs */

const en_upload_step_file_hint_build = /** @type {(inputs: Upload_Step_File_Hint_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build .json file`)
};

const es_upload_step_file_hint_build = /** @type {(inputs: Upload_Step_File_Hint_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archivo .json de la build`)
};

const de_upload_step_file_hint_build = /** @type {(inputs: Upload_Step_File_Hint_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build-.json-Datei`)
};

const fr_upload_step_file_hint_build = /** @type {(inputs: Upload_Step_File_Hint_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fichier .json du build`)
};

const it_upload_step_file_hint_build = /** @type {(inputs: Upload_Step_File_Hint_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`File .json della build`)
};

const nl_upload_step_file_hint_build = /** @type {(inputs: Upload_Step_File_Hint_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`.json-bestand van de build`)
};

const pl_upload_step_file_hint_build = /** @type {(inputs: Upload_Step_File_Hint_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plik .json builda`)
};

const pt_upload_step_file_hint_build = /** @type {(inputs: Upload_Step_File_Hint_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arquivo .json da build`)
};

const ru_upload_step_file_hint_build = /** @type {(inputs: Upload_Step_File_Hint_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Файл .json постройки`)
};

const sv_upload_step_file_hint_build = /** @type {(inputs: Upload_Step_File_Hint_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Byggets .json-fil`)
};

const tr_upload_step_file_hint_build = /** @type {(inputs: Upload_Step_File_Hint_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapının .json dosyası`)
};

const zh_upload_step_file_hint_build = /** @type {(inputs: Upload_Step_File_Hint_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`建筑 .json 文件`)
};

const ja_upload_step_file_hint_build = /** @type {(inputs: Upload_Step_File_Hint_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`建築の .json ファイル`)
};

/**
* | output |
* | --- |
* | "Build .json file" |
*
* @param {Upload_Step_File_Hint_BuildInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_step_file_hint_build = /** @type {((inputs?: Upload_Step_File_Hint_BuildInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Step_File_Hint_BuildInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_step_file_hint_build(inputs)
	if (locale === "de") return de_upload_step_file_hint_build(inputs)
	if (locale === "fr") return fr_upload_step_file_hint_build(inputs)
	if (locale === "it") return it_upload_step_file_hint_build(inputs)
	if (locale === "nl") return nl_upload_step_file_hint_build(inputs)
	if (locale === "pl") return pl_upload_step_file_hint_build(inputs)
	if (locale === "pt") return pt_upload_step_file_hint_build(inputs)
	if (locale === "ru") return ru_upload_step_file_hint_build(inputs)
	if (locale === "sv") return sv_upload_step_file_hint_build(inputs)
	if (locale === "tr") return tr_upload_step_file_hint_build(inputs)
	if (locale === "zh") return zh_upload_step_file_hint_build(inputs)
	if (locale === "ja") return ja_upload_step_file_hint_build(inputs)
	return en_upload_step_file_hint_build(inputs)
});
