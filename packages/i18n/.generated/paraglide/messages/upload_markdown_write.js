/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Markdown_WriteInputs */

const en_upload_markdown_write = /** @type {(inputs: Upload_Markdown_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Write`)
};

const es_upload_markdown_write = /** @type {(inputs: Upload_Markdown_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escribir`)
};

const de_upload_markdown_write = /** @type {(inputs: Upload_Markdown_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schreiben`)
};

const fr_upload_markdown_write = /** @type {(inputs: Upload_Markdown_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Écrire`)
};

const it_upload_markdown_write = /** @type {(inputs: Upload_Markdown_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scrivi`)
};

const nl_upload_markdown_write = /** @type {(inputs: Upload_Markdown_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schrijven`)
};

const pl_upload_markdown_write = /** @type {(inputs: Upload_Markdown_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pisz`)
};

const pt_upload_markdown_write = /** @type {(inputs: Upload_Markdown_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escrever`)
};

const ru_upload_markdown_write = /** @type {(inputs: Upload_Markdown_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Текст`)
};

const sv_upload_markdown_write = /** @type {(inputs: Upload_Markdown_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skriv`)
};

const tr_upload_markdown_write = /** @type {(inputs: Upload_Markdown_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yaz`)
};

const zh_upload_markdown_write = /** @type {(inputs: Upload_Markdown_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`编辑`)
};

const ja_upload_markdown_write = /** @type {(inputs: Upload_Markdown_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`編集`)
};

/**
* | output |
* | --- |
* | "Write" |
*
* @param {Upload_Markdown_WriteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_markdown_write = /** @type {((inputs?: Upload_Markdown_WriteInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Markdown_WriteInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_markdown_write(inputs)
	if (locale === "de") return de_upload_markdown_write(inputs)
	if (locale === "fr") return fr_upload_markdown_write(inputs)
	if (locale === "it") return it_upload_markdown_write(inputs)
	if (locale === "nl") return nl_upload_markdown_write(inputs)
	if (locale === "pl") return pl_upload_markdown_write(inputs)
	if (locale === "pt") return pt_upload_markdown_write(inputs)
	if (locale === "ru") return ru_upload_markdown_write(inputs)
	if (locale === "sv") return sv_upload_markdown_write(inputs)
	if (locale === "tr") return tr_upload_markdown_write(inputs)
	if (locale === "zh") return zh_upload_markdown_write(inputs)
	if (locale === "ja") return ja_upload_markdown_write(inputs)
	return en_upload_markdown_write(inputs)
});
