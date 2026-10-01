/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Err_File_TypeInputs */

const en_logs_err_file_type = /** @type {(inputs: Logs_Err_File_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use a .log or .txt file, or a .gz or .zip that contains one.`)
};

const es_logs_err_file_type = /** @type {(inputs: Logs_Err_File_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usa un archivo .log o .txt, o un .gz o .zip que contenga uno.`)
};

const de_logs_err_file_type = /** @type {(inputs: Logs_Err_File_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verwende eine .log- oder .txt-Datei oder eine .gz- oder .zip-Datei, die eine enthält.`)
};

const fr_logs_err_file_type = /** @type {(inputs: Logs_Err_File_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utilisez un fichier .log ou .txt, ou un .gz ou .zip qui en contient un.`)
};

const it_logs_err_file_type = /** @type {(inputs: Logs_Err_File_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usa un file .log o .txt, oppure un .gz o .zip che ne contenga uno.`)
};

const nl_logs_err_file_type = /** @type {(inputs: Logs_Err_File_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gebruik een .log- of .txt-bestand, of een .gz of .zip waar er een in zit.`)
};

const pl_logs_err_file_type = /** @type {(inputs: Logs_Err_File_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Użyj pliku .log lub .txt albo archiwum .gz lub .zip, które go zawiera.`)
};

const pt_logs_err_file_type = /** @type {(inputs: Logs_Err_File_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use um ficheiro .log ou .txt, ou um .gz ou .zip que contenha um.`)
};

const ru_logs_err_file_type = /** @type {(inputs: Logs_Err_File_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Используйте файл .log или .txt либо .gz или .zip, в котором он лежит.`)
};

const sv_logs_err_file_type = /** @type {(inputs: Logs_Err_File_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Använd en .log- eller .txt-fil, eller en .gz eller .zip som innehåller en.`)
};

const tr_logs_err_file_type = /** @type {(inputs: Logs_Err_File_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir .log veya .txt dosyası ya da içinde biri bulunan bir .gz veya .zip kullanın.`)
};

const zh_logs_err_file_type = /** @type {(inputs: Logs_Err_File_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请使用 .log 或 .txt 文件，或包含它的 .gz 或 .zip。`)
};

const ja_logs_err_file_type = /** @type {(inputs: Logs_Err_File_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`.log または .txt ファイル、あるいはそれを含む .gz または .zip を使用してください。`)
};

/**
* | output |
* | --- |
* | "Use a .log or .txt file, or a .gz or .zip that contains one." |
*
* @param {Logs_Err_File_TypeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_err_file_type = /** @type {((inputs?: Logs_Err_File_TypeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Err_File_TypeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_err_file_type(inputs)
	if (locale === "de") return de_logs_err_file_type(inputs)
	if (locale === "fr") return fr_logs_err_file_type(inputs)
	if (locale === "it") return it_logs_err_file_type(inputs)
	if (locale === "nl") return nl_logs_err_file_type(inputs)
	if (locale === "pl") return pl_logs_err_file_type(inputs)
	if (locale === "pt") return pt_logs_err_file_type(inputs)
	if (locale === "ru") return ru_logs_err_file_type(inputs)
	if (locale === "sv") return sv_logs_err_file_type(inputs)
	if (locale === "tr") return tr_logs_err_file_type(inputs)
	if (locale === "zh") return zh_logs_err_file_type(inputs)
	if (locale === "ja") return ja_logs_err_file_type(inputs)
	return en_logs_err_file_type(inputs)
});
