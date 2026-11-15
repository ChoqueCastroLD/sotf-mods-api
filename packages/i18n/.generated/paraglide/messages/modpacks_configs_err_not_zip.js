/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Configs_Err_Not_ZipInputs */

const en_modpacks_configs_err_not_zip = /** @type {(inputs: Modpacks_Configs_Err_Not_ZipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This is not a zip file.`)
};

const es_modpacks_configs_err_not_zip = /** @type {(inputs: Modpacks_Configs_Err_Not_ZipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No es un archivo zip.`)
};

const de_modpacks_configs_err_not_zip = /** @type {(inputs: Modpacks_Configs_Err_Not_ZipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das ist keine Zip-Datei.`)
};

const fr_modpacks_configs_err_not_zip = /** @type {(inputs: Modpacks_Configs_Err_Not_ZipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce n’est pas un fichier zip.`)
};

const it_modpacks_configs_err_not_zip = /** @type {(inputs: Modpacks_Configs_Err_Not_ZipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non è un file zip.`)
};

const nl_modpacks_configs_err_not_zip = /** @type {(inputs: Modpacks_Configs_Err_Not_ZipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dit is geen zip-bestand.`)
};

const pl_modpacks_configs_err_not_zip = /** @type {(inputs: Modpacks_Configs_Err_Not_ZipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`To nie jest plik zip.`)
};

const pt_modpacks_configs_err_not_zip = /** @type {(inputs: Modpacks_Configs_Err_Not_ZipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não é um arquivo zip.`)
};

const ru_modpacks_configs_err_not_zip = /** @type {(inputs: Modpacks_Configs_Err_Not_ZipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Это не zip-файл.`)
};

const sv_modpacks_configs_err_not_zip = /** @type {(inputs: Modpacks_Configs_Err_Not_ZipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det här är ingen zip-fil.`)
};

const tr_modpacks_configs_err_not_zip = /** @type {(inputs: Modpacks_Configs_Err_Not_ZipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu bir zip dosyası değil.`)
};

const zh_modpacks_configs_err_not_zip = /** @type {(inputs: Modpacks_Configs_Err_Not_ZipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`这不是 zip 文件。`)
};

const ja_modpacks_configs_err_not_zip = /** @type {(inputs: Modpacks_Configs_Err_Not_ZipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`zip ファイルではありません。`)
};

/**
* | output |
* | --- |
* | "This is not a zip file." |
*
* @param {Modpacks_Configs_Err_Not_ZipInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_configs_err_not_zip = /** @type {((inputs?: Modpacks_Configs_Err_Not_ZipInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Configs_Err_Not_ZipInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_configs_err_not_zip(inputs)
	if (locale === "de") return de_modpacks_configs_err_not_zip(inputs)
	if (locale === "fr") return fr_modpacks_configs_err_not_zip(inputs)
	if (locale === "it") return it_modpacks_configs_err_not_zip(inputs)
	if (locale === "nl") return nl_modpacks_configs_err_not_zip(inputs)
	if (locale === "pl") return pl_modpacks_configs_err_not_zip(inputs)
	if (locale === "pt") return pt_modpacks_configs_err_not_zip(inputs)
	if (locale === "ru") return ru_modpacks_configs_err_not_zip(inputs)
	if (locale === "sv") return sv_modpacks_configs_err_not_zip(inputs)
	if (locale === "tr") return tr_modpacks_configs_err_not_zip(inputs)
	if (locale === "zh") return zh_modpacks_configs_err_not_zip(inputs)
	if (locale === "ja") return ja_modpacks_configs_err_not_zip(inputs)
	return en_modpacks_configs_err_not_zip(inputs)
});
