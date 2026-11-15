/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Configs_Err_BinaryInputs */

const en_modpacks_configs_err_binary = /** @type {(inputs: Modpacks_Configs_Err_BinaryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A file is not a text file.`)
};

const es_modpacks_configs_err_binary = /** @type {(inputs: Modpacks_Configs_Err_BinaryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un archivo no es de texto.`)
};

const de_modpacks_configs_err_binary = /** @type {(inputs: Modpacks_Configs_Err_BinaryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eine Datei ist keine Textdatei.`)
};

const fr_modpacks_configs_err_binary = /** @type {(inputs: Modpacks_Configs_Err_BinaryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un fichier n’est pas un fichier texte.`)
};

const it_modpacks_configs_err_binary = /** @type {(inputs: Modpacks_Configs_Err_BinaryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un file non è un file di testo.`)
};

const nl_modpacks_configs_err_binary = /** @type {(inputs: Modpacks_Configs_Err_BinaryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een bestand is geen tekstbestand.`)
};

const pl_modpacks_configs_err_binary = /** @type {(inputs: Modpacks_Configs_Err_BinaryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plik nie jest plikiem tekstowym.`)
};

const pt_modpacks_configs_err_binary = /** @type {(inputs: Modpacks_Configs_Err_BinaryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Um arquivo não é de texto.`)
};

const ru_modpacks_configs_err_binary = /** @type {(inputs: Modpacks_Configs_Err_BinaryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Файл не текстовый.`)
};

const sv_modpacks_configs_err_binary = /** @type {(inputs: Modpacks_Configs_Err_BinaryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En fil är inte en textfil.`)
};

const tr_modpacks_configs_err_binary = /** @type {(inputs: Modpacks_Configs_Err_BinaryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir dosya metin dosyası değil.`)
};

const zh_modpacks_configs_err_binary = /** @type {(inputs: Modpacks_Configs_Err_BinaryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`有文件不是文本文件。`)
};

const ja_modpacks_configs_err_binary = /** @type {(inputs: Modpacks_Configs_Err_BinaryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`テキストではないファイルがあります。`)
};

/**
* | output |
* | --- |
* | "A file is not a text file." |
*
* @param {Modpacks_Configs_Err_BinaryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_configs_err_binary = /** @type {((inputs?: Modpacks_Configs_Err_BinaryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Configs_Err_BinaryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_configs_err_binary(inputs)
	if (locale === "de") return de_modpacks_configs_err_binary(inputs)
	if (locale === "fr") return fr_modpacks_configs_err_binary(inputs)
	if (locale === "it") return it_modpacks_configs_err_binary(inputs)
	if (locale === "nl") return nl_modpacks_configs_err_binary(inputs)
	if (locale === "pl") return pl_modpacks_configs_err_binary(inputs)
	if (locale === "pt") return pt_modpacks_configs_err_binary(inputs)
	if (locale === "ru") return ru_modpacks_configs_err_binary(inputs)
	if (locale === "sv") return sv_modpacks_configs_err_binary(inputs)
	if (locale === "tr") return tr_modpacks_configs_err_binary(inputs)
	if (locale === "zh") return zh_modpacks_configs_err_binary(inputs)
	if (locale === "ja") return ja_modpacks_configs_err_binary(inputs)
	return en_modpacks_configs_err_binary(inputs)
});
