/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Step_FileInputs */

const en_upload_step_file = /** @type {(inputs: Upload_Step_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`File`)
};

const es_upload_step_file = /** @type {(inputs: Upload_Step_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archivo`)
};

const de_upload_step_file = /** @type {(inputs: Upload_Step_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Datei`)
};

const fr_upload_step_file = /** @type {(inputs: Upload_Step_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fichier`)
};

const it_upload_step_file = /** @type {(inputs: Upload_Step_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`File`)
};

const nl_upload_step_file = /** @type {(inputs: Upload_Step_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bestand`)
};

const pl_upload_step_file = /** @type {(inputs: Upload_Step_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plik`)
};

const pt_upload_step_file = /** @type {(inputs: Upload_Step_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arquivo`)
};

const ru_upload_step_file = /** @type {(inputs: Upload_Step_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Файл`)
};

const sv_upload_step_file = /** @type {(inputs: Upload_Step_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fil`)
};

const tr_upload_step_file = /** @type {(inputs: Upload_Step_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dosya`)
};

const zh_upload_step_file = /** @type {(inputs: Upload_Step_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文件`)
};

const ja_upload_step_file = /** @type {(inputs: Upload_Step_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ファイル`)
};

/**
* | output |
* | --- |
* | "File" |
*
* @param {Upload_Step_FileInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_step_file = /** @type {((inputs?: Upload_Step_FileInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Step_FileInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_step_file(inputs)
	if (locale === "de") return de_upload_step_file(inputs)
	if (locale === "fr") return fr_upload_step_file(inputs)
	if (locale === "it") return it_upload_step_file(inputs)
	if (locale === "nl") return nl_upload_step_file(inputs)
	if (locale === "pl") return pl_upload_step_file(inputs)
	if (locale === "pt") return pt_upload_step_file(inputs)
	if (locale === "ru") return ru_upload_step_file(inputs)
	if (locale === "sv") return sv_upload_step_file(inputs)
	if (locale === "tr") return tr_upload_step_file(inputs)
	if (locale === "zh") return zh_upload_step_file(inputs)
	if (locale === "ja") return ja_upload_step_file(inputs)
	return en_upload_step_file(inputs)
});
