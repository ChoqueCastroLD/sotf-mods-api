/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Preflight_File_OkInputs */

const en_upload_preflight_file_ok = /** @type {(inputs: Upload_Preflight_File_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The file passed the automatic checks.`)
};

const es_upload_preflight_file_ok = /** @type {(inputs: Upload_Preflight_File_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El archivo superó las comprobaciones automáticas.`)
};

const de_upload_preflight_file_ok = /** @type {(inputs: Upload_Preflight_File_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Datei hat die automatischen Checks bestanden.`)
};

const fr_upload_preflight_file_ok = /** @type {(inputs: Upload_Preflight_File_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le fichier a passé les vérifications automatiques.`)
};

const it_upload_preflight_file_ok = /** @type {(inputs: Upload_Preflight_File_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il file ha superato i controlli automatici.`)
};

const nl_upload_preflight_file_ok = /** @type {(inputs: Upload_Preflight_File_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het bestand haalde de automatische checks.`)
};

const pl_upload_preflight_file_ok = /** @type {(inputs: Upload_Preflight_File_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plik przeszedł automatyczne kontrole.`)
};

const pt_upload_preflight_file_ok = /** @type {(inputs: Upload_Preflight_File_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O arquivo passou nas verificações automáticas.`)
};

const ru_upload_preflight_file_ok = /** @type {(inputs: Upload_Preflight_File_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Файл прошёл автоматические проверки.`)
};

const sv_upload_preflight_file_ok = /** @type {(inputs: Upload_Preflight_File_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filen klarade de automatiska kontrollerna.`)
};

const tr_upload_preflight_file_ok = /** @type {(inputs: Upload_Preflight_File_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dosya otomatik kontrollerden geçti.`)
};

const zh_upload_preflight_file_ok = /** @type {(inputs: Upload_Preflight_File_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文件通过了自动检查。`)
};

const ja_upload_preflight_file_ok = /** @type {(inputs: Upload_Preflight_File_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ファイルは自動チェックに通りました。`)
};

/**
* | output |
* | --- |
* | "The file passed the automatic checks." |
*
* @param {Upload_Preflight_File_OkInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_preflight_file_ok = /** @type {((inputs?: Upload_Preflight_File_OkInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Preflight_File_OkInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_preflight_file_ok(inputs)
	if (locale === "de") return de_upload_preflight_file_ok(inputs)
	if (locale === "fr") return fr_upload_preflight_file_ok(inputs)
	if (locale === "it") return it_upload_preflight_file_ok(inputs)
	if (locale === "nl") return nl_upload_preflight_file_ok(inputs)
	if (locale === "pl") return pl_upload_preflight_file_ok(inputs)
	if (locale === "pt") return pt_upload_preflight_file_ok(inputs)
	if (locale === "ru") return ru_upload_preflight_file_ok(inputs)
	if (locale === "sv") return sv_upload_preflight_file_ok(inputs)
	if (locale === "tr") return tr_upload_preflight_file_ok(inputs)
	if (locale === "zh") return zh_upload_preflight_file_ok(inputs)
	if (locale === "ja") return ja_upload_preflight_file_ok(inputs)
	return en_upload_preflight_file_ok(inputs)
});
