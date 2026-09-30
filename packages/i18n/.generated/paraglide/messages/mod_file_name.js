/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_File_NameInputs */

const en_mod_file_name = /** @type {(inputs: Mod_File_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`File`)
};

const es_mod_file_name = /** @type {(inputs: Mod_File_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archivo`)
};

const de_mod_file_name = /** @type {(inputs: Mod_File_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Datei`)
};

const fr_mod_file_name = /** @type {(inputs: Mod_File_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fichier`)
};

const it_mod_file_name = /** @type {(inputs: Mod_File_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`File`)
};

const nl_mod_file_name = /** @type {(inputs: Mod_File_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bestand`)
};

const pl_mod_file_name = /** @type {(inputs: Mod_File_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plik`)
};

const pt_mod_file_name = /** @type {(inputs: Mod_File_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arquivo`)
};

const ru_mod_file_name = /** @type {(inputs: Mod_File_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Файл`)
};

const sv_mod_file_name = /** @type {(inputs: Mod_File_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fil`)
};

const tr_mod_file_name = /** @type {(inputs: Mod_File_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dosya`)
};

const zh_mod_file_name = /** @type {(inputs: Mod_File_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文件`)
};

const ja_mod_file_name = /** @type {(inputs: Mod_File_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ファイル`)
};

/**
* | output |
* | --- |
* | "File" |
*
* @param {Mod_File_NameInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_file_name = /** @type {((inputs?: Mod_File_NameInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_File_NameInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_file_name(inputs)
	if (locale === "de") return de_mod_file_name(inputs)
	if (locale === "fr") return fr_mod_file_name(inputs)
	if (locale === "it") return it_mod_file_name(inputs)
	if (locale === "nl") return nl_mod_file_name(inputs)
	if (locale === "pl") return pl_mod_file_name(inputs)
	if (locale === "pt") return pt_mod_file_name(inputs)
	if (locale === "ru") return ru_mod_file_name(inputs)
	if (locale === "sv") return sv_mod_file_name(inputs)
	if (locale === "tr") return tr_mod_file_name(inputs)
	if (locale === "zh") return zh_mod_file_name(inputs)
	if (locale === "ja") return ja_mod_file_name(inputs)
	return en_mod_file_name(inputs)
});
