/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Manifest_AuthorInputs */

const en_upload_manifest_author = /** @type {(inputs: Upload_Manifest_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Author`)
};

const es_upload_manifest_author = /** @type {(inputs: Upload_Manifest_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autor`)
};

const de_upload_manifest_author = /** @type {(inputs: Upload_Manifest_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autor`)
};

const fr_upload_manifest_author = /** @type {(inputs: Upload_Manifest_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auteur`)
};

const it_upload_manifest_author = /** @type {(inputs: Upload_Manifest_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autore`)
};

const nl_upload_manifest_author = /** @type {(inputs: Upload_Manifest_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auteur`)
};

const pl_upload_manifest_author = /** @type {(inputs: Upload_Manifest_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autor`)
};

const pt_upload_manifest_author = /** @type {(inputs: Upload_Manifest_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autor`)
};

const ru_upload_manifest_author = /** @type {(inputs: Upload_Manifest_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Автор`)
};

const sv_upload_manifest_author = /** @type {(inputs: Upload_Manifest_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skapare`)
};

const tr_upload_manifest_author = /** @type {(inputs: Upload_Manifest_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapımcı`)
};

const zh_upload_manifest_author = /** @type {(inputs: Upload_Manifest_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作者`)
};

const ja_upload_manifest_author = /** @type {(inputs: Upload_Manifest_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作者`)
};

/**
* | output |
* | --- |
* | "Author" |
*
* @param {Upload_Manifest_AuthorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_manifest_author = /** @type {((inputs?: Upload_Manifest_AuthorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Manifest_AuthorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_manifest_author(inputs)
	if (locale === "de") return de_upload_manifest_author(inputs)
	if (locale === "fr") return fr_upload_manifest_author(inputs)
	if (locale === "it") return it_upload_manifest_author(inputs)
	if (locale === "nl") return nl_upload_manifest_author(inputs)
	if (locale === "pl") return pl_upload_manifest_author(inputs)
	if (locale === "pt") return pt_upload_manifest_author(inputs)
	if (locale === "ru") return ru_upload_manifest_author(inputs)
	if (locale === "sv") return sv_upload_manifest_author(inputs)
	if (locale === "tr") return tr_upload_manifest_author(inputs)
	if (locale === "zh") return zh_upload_manifest_author(inputs)
	if (locale === "ja") return ja_upload_manifest_author(inputs)
	return en_upload_manifest_author(inputs)
});
