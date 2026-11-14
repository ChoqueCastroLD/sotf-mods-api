/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Import_Too_BigInputs */

const en_modpacks_import_too_big = /** @type {(inputs: Modpacks_Import_Too_BigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The file is larger than 256 KB.`)
};

const es_modpacks_import_too_big = /** @type {(inputs: Modpacks_Import_Too_BigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El archivo pesa más de 256 KB.`)
};

const de_modpacks_import_too_big = /** @type {(inputs: Modpacks_Import_Too_BigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Datei ist größer als 256 KB.`)
};

const fr_modpacks_import_too_big = /** @type {(inputs: Modpacks_Import_Too_BigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le fichier dépasse 256 Ko.`)
};

const it_modpacks_import_too_big = /** @type {(inputs: Modpacks_Import_Too_BigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il file supera i 256 KB.`)
};

const nl_modpacks_import_too_big = /** @type {(inputs: Modpacks_Import_Too_BigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het bestand is groter dan 256 KB.`)
};

const pl_modpacks_import_too_big = /** @type {(inputs: Modpacks_Import_Too_BigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plik jest większy niż 256 KB.`)
};

const pt_modpacks_import_too_big = /** @type {(inputs: Modpacks_Import_Too_BigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O arquivo tem mais de 256 KB.`)
};

const ru_modpacks_import_too_big = /** @type {(inputs: Modpacks_Import_Too_BigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Файл больше 256 КБ.`)
};

const sv_modpacks_import_too_big = /** @type {(inputs: Modpacks_Import_Too_BigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filen är större än 256 KB.`)
};

const tr_modpacks_import_too_big = /** @type {(inputs: Modpacks_Import_Too_BigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dosya 256 KB'tan büyük.`)
};

const zh_modpacks_import_too_big = /** @type {(inputs: Modpacks_Import_Too_BigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文件超过 256 KB。`)
};

const ja_modpacks_import_too_big = /** @type {(inputs: Modpacks_Import_Too_BigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ファイルが 256 KB を超えています。`)
};

/**
* | output |
* | --- |
* | "The file is larger than 256 KB." |
*
* @param {Modpacks_Import_Too_BigInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_import_too_big = /** @type {((inputs?: Modpacks_Import_Too_BigInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Import_Too_BigInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_import_too_big(inputs)
	if (locale === "de") return de_modpacks_import_too_big(inputs)
	if (locale === "fr") return fr_modpacks_import_too_big(inputs)
	if (locale === "it") return it_modpacks_import_too_big(inputs)
	if (locale === "nl") return nl_modpacks_import_too_big(inputs)
	if (locale === "pl") return pl_modpacks_import_too_big(inputs)
	if (locale === "pt") return pt_modpacks_import_too_big(inputs)
	if (locale === "ru") return ru_modpacks_import_too_big(inputs)
	if (locale === "sv") return sv_modpacks_import_too_big(inputs)
	if (locale === "tr") return tr_modpacks_import_too_big(inputs)
	if (locale === "zh") return zh_modpacks_import_too_big(inputs)
	if (locale === "ja") return ja_modpacks_import_too_big(inputs)
	return en_modpacks_import_too_big(inputs)
});
