/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Flag_Blueprint_InvalidInputs */

const en_upload_flag_blueprint_invalid = /** @type {(inputs: Upload_Flag_Blueprint_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This isn’t a valid BuildShare build file.`)
};

const es_upload_flag_blueprint_invalid = /** @type {(inputs: Upload_Flag_Blueprint_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No es un archivo de build válido de BuildShare.`)
};

const de_upload_flag_blueprint_invalid = /** @type {(inputs: Upload_Flag_Blueprint_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das ist keine gültige BuildShare-Build-Datei.`)
};

const fr_upload_flag_blueprint_invalid = /** @type {(inputs: Upload_Flag_Blueprint_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce n’est pas un fichier de build BuildShare valide.`)
};

const it_upload_flag_blueprint_invalid = /** @type {(inputs: Upload_Flag_Blueprint_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non è un file di build BuildShare valido.`)
};

const nl_upload_flag_blueprint_invalid = /** @type {(inputs: Upload_Flag_Blueprint_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dit is geen geldig BuildShare-buildbestand.`)
};

const pl_upload_flag_blueprint_invalid = /** @type {(inputs: Upload_Flag_Blueprint_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`To nie jest poprawny plik builda BuildShare.`)
};

const pt_upload_flag_blueprint_invalid = /** @type {(inputs: Upload_Flag_Blueprint_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este não é um arquivo de build válido do BuildShare.`)
};

const ru_upload_flag_blueprint_invalid = /** @type {(inputs: Upload_Flag_Blueprint_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Это не корректный файл постройки BuildShare.`)
};

const sv_upload_flag_blueprint_invalid = /** @type {(inputs: Upload_Flag_Blueprint_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det här är ingen giltig BuildShare-byggfil.`)
};

const tr_upload_flag_blueprint_invalid = /** @type {(inputs: Upload_Flag_Blueprint_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu geçerli bir BuildShare yapı dosyası değil.`)
};

const zh_upload_flag_blueprint_invalid = /** @type {(inputs: Upload_Flag_Blueprint_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`这不是有效的 BuildShare 建筑文件。`)
};

const ja_upload_flag_blueprint_invalid = /** @type {(inputs: Upload_Flag_Blueprint_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`有効なBuildShareの建築ファイルではありません。`)
};

/**
* | output |
* | --- |
* | "This isn’t a valid BuildShare build file." |
*
* @param {Upload_Flag_Blueprint_InvalidInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_flag_blueprint_invalid = /** @type {((inputs?: Upload_Flag_Blueprint_InvalidInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Flag_Blueprint_InvalidInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_flag_blueprint_invalid(inputs)
	if (locale === "de") return de_upload_flag_blueprint_invalid(inputs)
	if (locale === "fr") return fr_upload_flag_blueprint_invalid(inputs)
	if (locale === "it") return it_upload_flag_blueprint_invalid(inputs)
	if (locale === "nl") return nl_upload_flag_blueprint_invalid(inputs)
	if (locale === "pl") return pl_upload_flag_blueprint_invalid(inputs)
	if (locale === "pt") return pt_upload_flag_blueprint_invalid(inputs)
	if (locale === "ru") return ru_upload_flag_blueprint_invalid(inputs)
	if (locale === "sv") return sv_upload_flag_blueprint_invalid(inputs)
	if (locale === "tr") return tr_upload_flag_blueprint_invalid(inputs)
	if (locale === "zh") return zh_upload_flag_blueprint_invalid(inputs)
	if (locale === "ja") return ja_upload_flag_blueprint_invalid(inputs)
	return en_upload_flag_blueprint_invalid(inputs)
});
