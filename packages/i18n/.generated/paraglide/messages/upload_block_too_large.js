/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ max: NonNullable<unknown> }} Upload_Block_Too_LargeInputs */

const en_upload_block_too_large = /** @type {(inputs: Upload_Block_Too_LargeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`The file is larger than ${i?.max}.`)
};

const es_upload_block_too_large = /** @type {(inputs: Upload_Block_Too_LargeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`El archivo pesa más de ${i?.max}.`)
};

const de_upload_block_too_large = /** @type {(inputs: Upload_Block_Too_LargeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Die Datei ist größer als ${i?.max}.`)
};

const fr_upload_block_too_large = /** @type {(inputs: Upload_Block_Too_LargeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Le fichier dépasse ${i?.max}.`)
};

const it_upload_block_too_large = /** @type {(inputs: Upload_Block_Too_LargeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Il file supera ${i?.max}.`)
};

const nl_upload_block_too_large = /** @type {(inputs: Upload_Block_Too_LargeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Het bestand is groter dan ${i?.max}.`)
};

const pl_upload_block_too_large = /** @type {(inputs: Upload_Block_Too_LargeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Plik jest większy niż ${i?.max}.`)
};

const pt_upload_block_too_large = /** @type {(inputs: Upload_Block_Too_LargeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`O arquivo é maior que ${i?.max}.`)
};

const ru_upload_block_too_large = /** @type {(inputs: Upload_Block_Too_LargeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Файл больше ${i?.max}.`)
};

const sv_upload_block_too_large = /** @type {(inputs: Upload_Block_Too_LargeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Filen är större än ${i?.max}.`)
};

const tr_upload_block_too_large = /** @type {(inputs: Upload_Block_Too_LargeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dosya ${i?.max} boyutundan büyük.`)
};

const zh_upload_block_too_large = /** @type {(inputs: Upload_Block_Too_LargeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`文件超过 ${i?.max}。`)
};

const ja_upload_block_too_large = /** @type {(inputs: Upload_Block_Too_LargeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`ファイルが ${i?.max} を超えています。`)
};

/**
* | output |
* | --- |
* | "The file is larger than {max}." |
*
* @param {Upload_Block_Too_LargeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_block_too_large = /** @type {((inputs: Upload_Block_Too_LargeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Block_Too_LargeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_block_too_large(inputs)
	if (locale === "de") return de_upload_block_too_large(inputs)
	if (locale === "fr") return fr_upload_block_too_large(inputs)
	if (locale === "it") return it_upload_block_too_large(inputs)
	if (locale === "nl") return nl_upload_block_too_large(inputs)
	if (locale === "pl") return pl_upload_block_too_large(inputs)
	if (locale === "pt") return pt_upload_block_too_large(inputs)
	if (locale === "ru") return ru_upload_block_too_large(inputs)
	if (locale === "sv") return sv_upload_block_too_large(inputs)
	if (locale === "tr") return tr_upload_block_too_large(inputs)
	if (locale === "zh") return zh_upload_block_too_large(inputs)
	if (locale === "ja") return ja_upload_block_too_large(inputs)
	return en_upload_block_too_large(inputs)
});
