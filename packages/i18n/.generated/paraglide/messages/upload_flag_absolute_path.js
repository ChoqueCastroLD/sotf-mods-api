/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Flag_Absolute_PathInputs */

const en_upload_flag_absolute_path = /** @type {(inputs: Upload_Flag_Absolute_PathInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A file uses an absolute path.`)
};

const es_upload_flag_absolute_path = /** @type {(inputs: Upload_Flag_Absolute_PathInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un archivo usa una ruta absoluta.`)
};

const de_upload_flag_absolute_path = /** @type {(inputs: Upload_Flag_Absolute_PathInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eine Datei nutzt einen absoluten Pfad.`)
};

const fr_upload_flag_absolute_path = /** @type {(inputs: Upload_Flag_Absolute_PathInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un fichier utilise un chemin absolu.`)
};

const it_upload_flag_absolute_path = /** @type {(inputs: Upload_Flag_Absolute_PathInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un file usa un percorso assoluto.`)
};

const nl_upload_flag_absolute_path = /** @type {(inputs: Upload_Flag_Absolute_PathInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een bestand gebruikt een absoluut pad.`)
};

const pl_upload_flag_absolute_path = /** @type {(inputs: Upload_Flag_Absolute_PathInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plik używa ścieżki bezwzględnej.`)
};

const pt_upload_flag_absolute_path = /** @type {(inputs: Upload_Flag_Absolute_PathInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Um arquivo usa um caminho absoluto.`)
};

const ru_upload_flag_absolute_path = /** @type {(inputs: Upload_Flag_Absolute_PathInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Файл использует абсолютный путь.`)
};

const sv_upload_flag_absolute_path = /** @type {(inputs: Upload_Flag_Absolute_PathInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En fil använder en absolut sökväg.`)
};

const tr_upload_flag_absolute_path = /** @type {(inputs: Upload_Flag_Absolute_PathInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir dosya mutlak yol kullanıyor.`)
};

const zh_upload_flag_absolute_path = /** @type {(inputs: Upload_Flag_Absolute_PathInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`有文件使用了绝对路径。`)
};

const ja_upload_flag_absolute_path = /** @type {(inputs: Upload_Flag_Absolute_PathInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`絶対パスを使っているファイルがあります。`)
};

/**
* | output |
* | --- |
* | "A file uses an absolute path." |
*
* @param {Upload_Flag_Absolute_PathInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_flag_absolute_path = /** @type {((inputs?: Upload_Flag_Absolute_PathInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Flag_Absolute_PathInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_flag_absolute_path(inputs)
	if (locale === "de") return de_upload_flag_absolute_path(inputs)
	if (locale === "fr") return fr_upload_flag_absolute_path(inputs)
	if (locale === "it") return it_upload_flag_absolute_path(inputs)
	if (locale === "nl") return nl_upload_flag_absolute_path(inputs)
	if (locale === "pl") return pl_upload_flag_absolute_path(inputs)
	if (locale === "pt") return pt_upload_flag_absolute_path(inputs)
	if (locale === "ru") return ru_upload_flag_absolute_path(inputs)
	if (locale === "sv") return sv_upload_flag_absolute_path(inputs)
	if (locale === "tr") return tr_upload_flag_absolute_path(inputs)
	if (locale === "zh") return zh_upload_flag_absolute_path(inputs)
	if (locale === "ja") return ja_upload_flag_absolute_path(inputs)
	return en_upload_flag_absolute_path(inputs)
});
