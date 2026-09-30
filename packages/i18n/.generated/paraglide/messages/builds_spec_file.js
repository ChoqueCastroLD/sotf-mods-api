/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Spec_FileInputs */

const en_builds_spec_file = /** @type {(inputs: Builds_Spec_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`File`)
};

const es_builds_spec_file = /** @type {(inputs: Builds_Spec_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archivo`)
};

const de_builds_spec_file = /** @type {(inputs: Builds_Spec_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Datei`)
};

const fr_builds_spec_file = /** @type {(inputs: Builds_Spec_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fichier`)
};

const it_builds_spec_file = /** @type {(inputs: Builds_Spec_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`File`)
};

const nl_builds_spec_file = /** @type {(inputs: Builds_Spec_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bestand`)
};

const pl_builds_spec_file = /** @type {(inputs: Builds_Spec_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plik`)
};

const pt_builds_spec_file = /** @type {(inputs: Builds_Spec_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arquivo`)
};

const ru_builds_spec_file = /** @type {(inputs: Builds_Spec_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Файл`)
};

const sv_builds_spec_file = /** @type {(inputs: Builds_Spec_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fil`)
};

const tr_builds_spec_file = /** @type {(inputs: Builds_Spec_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dosya`)
};

const zh_builds_spec_file = /** @type {(inputs: Builds_Spec_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文件`)
};

const ja_builds_spec_file = /** @type {(inputs: Builds_Spec_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ファイル`)
};

/**
* | output |
* | --- |
* | "File" |
*
* @param {Builds_Spec_FileInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_spec_file = /** @type {((inputs?: Builds_Spec_FileInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Spec_FileInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_spec_file(inputs)
	if (locale === "de") return de_builds_spec_file(inputs)
	if (locale === "fr") return fr_builds_spec_file(inputs)
	if (locale === "it") return it_builds_spec_file(inputs)
	if (locale === "nl") return nl_builds_spec_file(inputs)
	if (locale === "pl") return pl_builds_spec_file(inputs)
	if (locale === "pt") return pt_builds_spec_file(inputs)
	if (locale === "ru") return ru_builds_spec_file(inputs)
	if (locale === "sv") return sv_builds_spec_file(inputs)
	if (locale === "tr") return tr_builds_spec_file(inputs)
	if (locale === "zh") return zh_builds_spec_file(inputs)
	if (locale === "ja") return ja_builds_spec_file(inputs)
	return en_builds_spec_file(inputs)
});
