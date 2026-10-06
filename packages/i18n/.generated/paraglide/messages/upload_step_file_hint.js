/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Step_File_HintInputs */

const en_upload_step_file_hint = /** @type {(inputs: Upload_Step_File_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zip or build file`)
};

const es_upload_step_file_hint = /** @type {(inputs: Upload_Step_File_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zip o archivo de build`)
};

const de_upload_step_file_hint = /** @type {(inputs: Upload_Step_File_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zip oder Build-Datei`)
};

const fr_upload_step_file_hint = /** @type {(inputs: Upload_Step_File_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zip ou fichier de build`)
};

const it_upload_step_file_hint = /** @type {(inputs: Upload_Step_File_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zip o file della build`)
};

const nl_upload_step_file_hint = /** @type {(inputs: Upload_Step_File_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zip of buildbestand`)
};

const pl_upload_step_file_hint = /** @type {(inputs: Upload_Step_File_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zip lub plik builda`)
};

const pt_upload_step_file_hint = /** @type {(inputs: Upload_Step_File_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zip ou arquivo de build`)
};

const ru_upload_step_file_hint = /** @type {(inputs: Upload_Step_File_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zip или файл постройки`)
};

const sv_upload_step_file_hint = /** @type {(inputs: Upload_Step_File_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zip eller byggfil`)
};

const tr_upload_step_file_hint = /** @type {(inputs: Upload_Step_File_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zip ya da yapı dosyası`)
};

const zh_upload_step_file_hint = /** @type {(inputs: Upload_Step_File_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zip 或建筑文件`)
};

const ja_upload_step_file_hint = /** @type {(inputs: Upload_Step_File_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zip またはビルドファイル`)
};

/**
* | output |
* | --- |
* | "Zip or build file" |
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
