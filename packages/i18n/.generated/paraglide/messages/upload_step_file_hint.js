/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Step_File_HintInputs */

const en_upload_step_file_hint = /** @type {(inputs: Upload_Step_File_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod .zip file`)
};

const es_upload_step_file_hint = /** @type {(inputs: Upload_Step_File_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archivo .zip del mod`)
};

const de_upload_step_file_hint = /** @type {(inputs: Upload_Step_File_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod-.zip-Datei`)
};

const fr_upload_step_file_hint = /** @type {(inputs: Upload_Step_File_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fichier .zip du mod`)
};

const it_upload_step_file_hint = /** @type {(inputs: Upload_Step_File_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`File .zip della mod`)
};

const nl_upload_step_file_hint = /** @type {(inputs: Upload_Step_File_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`.zip-bestand van de mod`)
};

const pl_upload_step_file_hint = /** @type {(inputs: Upload_Step_File_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plik .zip moda`)
};

const pt_upload_step_file_hint = /** @type {(inputs: Upload_Step_File_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arquivo .zip do mod`)
};

const ru_upload_step_file_hint = /** @type {(inputs: Upload_Step_File_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Файл .zip мода`)
};

const sv_upload_step_file_hint = /** @type {(inputs: Upload_Step_File_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`.zip-fil för modden`)
};

const tr_upload_step_file_hint = /** @type {(inputs: Upload_Step_File_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modun .zip dosyası`)
};

const zh_upload_step_file_hint = /** @type {(inputs: Upload_Step_File_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模组 .zip 文件`)
};

const ja_upload_step_file_hint = /** @type {(inputs: Upload_Step_File_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MODの .zip ファイル`)
};

/**
* | output |
* | --- |
* | "Mod .zip file" |
*
* @param {Upload_Step_File_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_step_file_hint = /** @type {((inputs?: Upload_Step_File_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Step_File_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_step_file_hint(inputs)
	if (locale === "de") return de_upload_step_file_hint(inputs)
	if (locale === "fr") return fr_upload_step_file_hint(inputs)
	if (locale === "it") return it_upload_step_file_hint(inputs)
	if (locale === "nl") return nl_upload_step_file_hint(inputs)
	if (locale === "pl") return pl_upload_step_file_hint(inputs)
	if (locale === "pt") return pt_upload_step_file_hint(inputs)
	if (locale === "ru") return ru_upload_step_file_hint(inputs)
	if (locale === "sv") return sv_upload_step_file_hint(inputs)
	if (locale === "tr") return tr_upload_step_file_hint(inputs)
	if (locale === "zh") return zh_upload_step_file_hint(inputs)
	if (locale === "ja") return ja_upload_step_file_hint(inputs)
	return en_upload_step_file_hint(inputs)
});
