/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Configs_Err_File_Too_BigInputs */

const en_modpacks_configs_err_file_too_big = /** @type {(inputs: Modpacks_Configs_Err_File_Too_BigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A file is larger than 256 KB.`)
};

const es_modpacks_configs_err_file_too_big = /** @type {(inputs: Modpacks_Configs_Err_File_Too_BigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un archivo pesa más de 256 KB.`)
};

const de_modpacks_configs_err_file_too_big = /** @type {(inputs: Modpacks_Configs_Err_File_Too_BigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eine Datei ist größer als 256 KB.`)
};

const fr_modpacks_configs_err_file_too_big = /** @type {(inputs: Modpacks_Configs_Err_File_Too_BigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un fichier dépasse 256 Ko.`)
};

const it_modpacks_configs_err_file_too_big = /** @type {(inputs: Modpacks_Configs_Err_File_Too_BigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un file supera 256 KB.`)
};

const nl_modpacks_configs_err_file_too_big = /** @type {(inputs: Modpacks_Configs_Err_File_Too_BigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een bestand is groter dan 256 KB.`)
};

const pl_modpacks_configs_err_file_too_big = /** @type {(inputs: Modpacks_Configs_Err_File_Too_BigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plik jest większy niż 256 KB.`)
};

const pt_modpacks_configs_err_file_too_big = /** @type {(inputs: Modpacks_Configs_Err_File_Too_BigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Um arquivo tem mais de 256 KB.`)
};

const ru_modpacks_configs_err_file_too_big = /** @type {(inputs: Modpacks_Configs_Err_File_Too_BigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Файл больше 256 КБ.`)
};

const sv_modpacks_configs_err_file_too_big = /** @type {(inputs: Modpacks_Configs_Err_File_Too_BigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En fil är större än 256 kB.`)
};

const tr_modpacks_configs_err_file_too_big = /** @type {(inputs: Modpacks_Configs_Err_File_Too_BigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir dosya 256 KB'tan büyük.`)
};

const zh_modpacks_configs_err_file_too_big = /** @type {(inputs: Modpacks_Configs_Err_File_Too_BigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`有文件超过 256 KB。`)
};

const ja_modpacks_configs_err_file_too_big = /** @type {(inputs: Modpacks_Configs_Err_File_Too_BigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`256 KB を超えるファイルがあります。`)
};

/**
* | output |
* | --- |
* | "A file is larger than 256 KB." |
*
* @param {Modpacks_Configs_Err_File_Too_BigInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_configs_err_file_too_big = /** @type {((inputs?: Modpacks_Configs_Err_File_Too_BigInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Configs_Err_File_Too_BigInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_configs_err_file_too_big(inputs)
	if (locale === "de") return de_modpacks_configs_err_file_too_big(inputs)
	if (locale === "fr") return fr_modpacks_configs_err_file_too_big(inputs)
	if (locale === "it") return it_modpacks_configs_err_file_too_big(inputs)
	if (locale === "nl") return nl_modpacks_configs_err_file_too_big(inputs)
	if (locale === "pl") return pl_modpacks_configs_err_file_too_big(inputs)
	if (locale === "pt") return pt_modpacks_configs_err_file_too_big(inputs)
	if (locale === "ru") return ru_modpacks_configs_err_file_too_big(inputs)
	if (locale === "sv") return sv_modpacks_configs_err_file_too_big(inputs)
	if (locale === "tr") return tr_modpacks_configs_err_file_too_big(inputs)
	if (locale === "zh") return zh_modpacks_configs_err_file_too_big(inputs)
	if (locale === "ja") return ja_modpacks_configs_err_file_too_big(inputs)
	return en_modpacks_configs_err_file_too_big(inputs)
});
