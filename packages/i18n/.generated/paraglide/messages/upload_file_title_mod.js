/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_File_Title_ModInputs */

const en_upload_file_title_mod = /** @type {(inputs: Upload_File_Title_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your mod file`)
};

const es_upload_file_title_mod = /** @type {(inputs: Upload_File_Title_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El archivo de tu mod`)
};

const de_upload_file_title_mod = /** @type {(inputs: Upload_File_Title_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deine Mod-Datei`)
};

const fr_upload_file_title_mod = /** @type {(inputs: Upload_File_Title_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le fichier de votre mod`)
};

const it_upload_file_title_mod = /** @type {(inputs: Upload_File_Title_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il file della tua mod`)
};

const nl_upload_file_title_mod = /** @type {(inputs: Upload_File_Title_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je modbestand`)
};

const pl_upload_file_title_mod = /** @type {(inputs: Upload_File_Title_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plik twojego moda`)
};

const pt_upload_file_title_mod = /** @type {(inputs: Upload_File_Title_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O arquivo do seu mod`)
};

const ru_upload_file_title_mod = /** @type {(inputs: Upload_File_Title_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Файл вашего мода`)
};

const sv_upload_file_title_mod = /** @type {(inputs: Upload_File_Title_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Din moddfil`)
};

const tr_upload_file_title_mod = /** @type {(inputs: Upload_File_Title_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod dosyan`)
};

const zh_upload_file_title_mod = /** @type {(inputs: Upload_File_Title_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的模组文件`)
};

const ja_upload_file_title_mod = /** @type {(inputs: Upload_File_Title_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MODのファイル`)
};

/**
* | output |
* | --- |
* | "Your mod file" |
*
* @param {Upload_File_Title_ModInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_file_title_mod = /** @type {((inputs?: Upload_File_Title_ModInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_File_Title_ModInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_file_title_mod(inputs)
	if (locale === "de") return de_upload_file_title_mod(inputs)
	if (locale === "fr") return fr_upload_file_title_mod(inputs)
	if (locale === "it") return it_upload_file_title_mod(inputs)
	if (locale === "nl") return nl_upload_file_title_mod(inputs)
	if (locale === "pl") return pl_upload_file_title_mod(inputs)
	if (locale === "pt") return pt_upload_file_title_mod(inputs)
	if (locale === "ru") return ru_upload_file_title_mod(inputs)
	if (locale === "sv") return sv_upload_file_title_mod(inputs)
	if (locale === "tr") return tr_upload_file_title_mod(inputs)
	if (locale === "zh") return zh_upload_file_title_mod(inputs)
	if (locale === "ja") return ja_upload_file_title_mod(inputs)
	return en_upload_file_title_mod(inputs)
});
