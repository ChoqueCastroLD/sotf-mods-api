/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Fact_SizeInputs */

const en_mod_fact_size = /** @type {(inputs: Mod_Fact_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`File size`)
};

const es_mod_fact_size = /** @type {(inputs: Mod_Fact_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tamaño`)
};

const de_mod_fact_size = /** @type {(inputs: Mod_Fact_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dateigröße`)
};

const fr_mod_fact_size = /** @type {(inputs: Mod_Fact_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taille du fichier`)
};

const it_mod_fact_size = /** @type {(inputs: Mod_Fact_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dimensione file`)
};

const nl_mod_fact_size = /** @type {(inputs: Mod_Fact_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bestandsgrootte`)
};

const pl_mod_fact_size = /** @type {(inputs: Mod_Fact_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rozmiar pliku`)
};

const pt_mod_fact_size = /** @type {(inputs: Mod_Fact_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tamanho do arquivo`)
};

const ru_mod_fact_size = /** @type {(inputs: Mod_Fact_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Размер файла`)
};

const sv_mod_fact_size = /** @type {(inputs: Mod_Fact_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filstorlek`)
};

const tr_mod_fact_size = /** @type {(inputs: Mod_Fact_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dosya boyutu`)
};

const zh_mod_fact_size = /** @type {(inputs: Mod_Fact_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文件大小`)
};

const ja_mod_fact_size = /** @type {(inputs: Mod_Fact_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ファイルサイズ`)
};

/**
* | output |
* | --- |
* | "File size" |
*
* @param {Mod_Fact_SizeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_fact_size = /** @type {((inputs?: Mod_Fact_SizeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Fact_SizeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_fact_size(inputs)
	if (locale === "de") return de_mod_fact_size(inputs)
	if (locale === "fr") return fr_mod_fact_size(inputs)
	if (locale === "it") return it_mod_fact_size(inputs)
	if (locale === "nl") return nl_mod_fact_size(inputs)
	if (locale === "pl") return pl_mod_fact_size(inputs)
	if (locale === "pt") return pt_mod_fact_size(inputs)
	if (locale === "ru") return ru_mod_fact_size(inputs)
	if (locale === "sv") return sv_mod_fact_size(inputs)
	if (locale === "tr") return tr_mod_fact_size(inputs)
	if (locale === "zh") return zh_mod_fact_size(inputs)
	if (locale === "ja") return ja_mod_fact_size(inputs)
	return en_mod_fact_size(inputs)
});
