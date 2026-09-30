/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Block_EmptyInputs */

const en_upload_block_empty = /** @type {(inputs: Upload_Block_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The file is empty.`)
};

const es_upload_block_empty = /** @type {(inputs: Upload_Block_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El archivo está vacío.`)
};

const de_upload_block_empty = /** @type {(inputs: Upload_Block_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Datei ist leer.`)
};

const fr_upload_block_empty = /** @type {(inputs: Upload_Block_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le fichier est vide.`)
};

const it_upload_block_empty = /** @type {(inputs: Upload_Block_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il file è vuoto.`)
};

const nl_upload_block_empty = /** @type {(inputs: Upload_Block_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het bestand is leeg.`)
};

const pl_upload_block_empty = /** @type {(inputs: Upload_Block_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plik jest pusty.`)
};

const pt_upload_block_empty = /** @type {(inputs: Upload_Block_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O arquivo está vazio.`)
};

const ru_upload_block_empty = /** @type {(inputs: Upload_Block_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Файл пустой.`)
};

const sv_upload_block_empty = /** @type {(inputs: Upload_Block_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filen är tom.`)
};

const tr_upload_block_empty = /** @type {(inputs: Upload_Block_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dosya boş.`)
};

const zh_upload_block_empty = /** @type {(inputs: Upload_Block_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文件是空的。`)
};

const ja_upload_block_empty = /** @type {(inputs: Upload_Block_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ファイルが空です。`)
};

/**
* | output |
* | --- |
* | "The file is empty." |
*
* @param {Upload_Block_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_block_empty = /** @type {((inputs?: Upload_Block_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Block_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_block_empty(inputs)
	if (locale === "de") return de_upload_block_empty(inputs)
	if (locale === "fr") return fr_upload_block_empty(inputs)
	if (locale === "it") return it_upload_block_empty(inputs)
	if (locale === "nl") return nl_upload_block_empty(inputs)
	if (locale === "pl") return pl_upload_block_empty(inputs)
	if (locale === "pt") return pt_upload_block_empty(inputs)
	if (locale === "ru") return ru_upload_block_empty(inputs)
	if (locale === "sv") return sv_upload_block_empty(inputs)
	if (locale === "tr") return tr_upload_block_empty(inputs)
	if (locale === "zh") return zh_upload_block_empty(inputs)
	if (locale === "ja") return ja_upload_block_empty(inputs)
	return en_upload_block_empty(inputs)
});
