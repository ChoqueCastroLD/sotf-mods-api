/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Preflight_File_FailedInputs */

const en_upload_preflight_file_failed = /** @type {(inputs: Upload_Preflight_File_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The file failed the automatic checks.`)
};

const es_upload_preflight_file_failed = /** @type {(inputs: Upload_Preflight_File_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El archivo no superó las comprobaciones automáticas.`)
};

const de_upload_preflight_file_failed = /** @type {(inputs: Upload_Preflight_File_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Datei hat die automatischen Checks nicht bestanden.`)
};

const fr_upload_preflight_file_failed = /** @type {(inputs: Upload_Preflight_File_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le fichier n’a pas passé les vérifications automatiques.`)
};

const it_upload_preflight_file_failed = /** @type {(inputs: Upload_Preflight_File_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il file non ha superato i controlli automatici.`)
};

const nl_upload_preflight_file_failed = /** @type {(inputs: Upload_Preflight_File_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het bestand haalde de automatische checks niet.`)
};

const pl_upload_preflight_file_failed = /** @type {(inputs: Upload_Preflight_File_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plik nie przeszedł automatycznych kontroli.`)
};

const pt_upload_preflight_file_failed = /** @type {(inputs: Upload_Preflight_File_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O arquivo não passou nas verificações automáticas.`)
};

const ru_upload_preflight_file_failed = /** @type {(inputs: Upload_Preflight_File_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Файл не прошёл автоматические проверки.`)
};

const sv_upload_preflight_file_failed = /** @type {(inputs: Upload_Preflight_File_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filen klarade inte de automatiska kontrollerna.`)
};

const tr_upload_preflight_file_failed = /** @type {(inputs: Upload_Preflight_File_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dosya otomatik kontrollerden geçemedi.`)
};

const zh_upload_preflight_file_failed = /** @type {(inputs: Upload_Preflight_File_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文件未通过自动检查。`)
};

const ja_upload_preflight_file_failed = /** @type {(inputs: Upload_Preflight_File_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ファイルが自動チェックに通りませんでした。`)
};

/**
* | output |
* | --- |
* | "The file failed the automatic checks." |
*
* @param {Upload_Preflight_File_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_preflight_file_failed = /** @type {((inputs?: Upload_Preflight_File_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Preflight_File_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_preflight_file_failed(inputs)
	if (locale === "de") return de_upload_preflight_file_failed(inputs)
	if (locale === "fr") return fr_upload_preflight_file_failed(inputs)
	if (locale === "it") return it_upload_preflight_file_failed(inputs)
	if (locale === "nl") return nl_upload_preflight_file_failed(inputs)
	if (locale === "pl") return pl_upload_preflight_file_failed(inputs)
	if (locale === "pt") return pt_upload_preflight_file_failed(inputs)
	if (locale === "ru") return ru_upload_preflight_file_failed(inputs)
	if (locale === "sv") return sv_upload_preflight_file_failed(inputs)
	if (locale === "tr") return tr_upload_preflight_file_failed(inputs)
	if (locale === "zh") return zh_upload_preflight_file_failed(inputs)
	if (locale === "ja") return ja_upload_preflight_file_failed(inputs)
	return en_upload_preflight_file_failed(inputs)
});
