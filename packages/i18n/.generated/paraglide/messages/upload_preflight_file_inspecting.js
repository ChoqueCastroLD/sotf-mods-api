/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Preflight_File_InspectingInputs */

const en_upload_preflight_file_inspecting = /** @type {(inputs: Upload_Preflight_File_InspectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The file is still being checked.`)
};

const es_upload_preflight_file_inspecting = /** @type {(inputs: Upload_Preflight_File_InspectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El archivo aún se está comprobando.`)
};

const de_upload_preflight_file_inspecting = /** @type {(inputs: Upload_Preflight_File_InspectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Datei wird noch geprüft.`)
};

const fr_upload_preflight_file_inspecting = /** @type {(inputs: Upload_Preflight_File_InspectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le fichier est encore en cours de vérification.`)
};

const it_upload_preflight_file_inspecting = /** @type {(inputs: Upload_Preflight_File_InspectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il file è ancora in fase di controllo.`)
};

const nl_upload_preflight_file_inspecting = /** @type {(inputs: Upload_Preflight_File_InspectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het bestand wordt nog gecontroleerd.`)
};

const pl_upload_preflight_file_inspecting = /** @type {(inputs: Upload_Preflight_File_InspectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plik jest jeszcze sprawdzany.`)
};

const pt_upload_preflight_file_inspecting = /** @type {(inputs: Upload_Preflight_File_InspectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O arquivo ainda está sendo verificado.`)
};

const ru_upload_preflight_file_inspecting = /** @type {(inputs: Upload_Preflight_File_InspectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Файл ещё проверяется.`)
};

const sv_upload_preflight_file_inspecting = /** @type {(inputs: Upload_Preflight_File_InspectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filen kontrolleras fortfarande.`)
};

const tr_upload_preflight_file_inspecting = /** @type {(inputs: Upload_Preflight_File_InspectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dosya hâlâ kontrol ediliyor.`)
};

const zh_upload_preflight_file_inspecting = /** @type {(inputs: Upload_Preflight_File_InspectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文件仍在检查中。`)
};

const ja_upload_preflight_file_inspecting = /** @type {(inputs: Upload_Preflight_File_InspectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ファイルを確認中です。`)
};

/**
* | output |
* | --- |
* | "The file is still being checked." |
*
* @param {Upload_Preflight_File_InspectingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_preflight_file_inspecting = /** @type {((inputs?: Upload_Preflight_File_InspectingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Preflight_File_InspectingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_preflight_file_inspecting(inputs)
	if (locale === "de") return de_upload_preflight_file_inspecting(inputs)
	if (locale === "fr") return fr_upload_preflight_file_inspecting(inputs)
	if (locale === "it") return it_upload_preflight_file_inspecting(inputs)
	if (locale === "nl") return nl_upload_preflight_file_inspecting(inputs)
	if (locale === "pl") return pl_upload_preflight_file_inspecting(inputs)
	if (locale === "pt") return pt_upload_preflight_file_inspecting(inputs)
	if (locale === "ru") return ru_upload_preflight_file_inspecting(inputs)
	if (locale === "sv") return sv_upload_preflight_file_inspecting(inputs)
	if (locale === "tr") return tr_upload_preflight_file_inspecting(inputs)
	if (locale === "zh") return zh_upload_preflight_file_inspecting(inputs)
	if (locale === "ja") return ja_upload_preflight_file_inspecting(inputs)
	return en_upload_preflight_file_inspecting(inputs)
});
