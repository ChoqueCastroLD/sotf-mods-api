/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Build_Size_ClassInputs */

const en_upload_build_size_class = /** @type {(inputs: Upload_Build_Size_ClassInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Size`)
};

const es_upload_build_size_class = /** @type {(inputs: Upload_Build_Size_ClassInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tamaño`)
};

const de_upload_build_size_class = /** @type {(inputs: Upload_Build_Size_ClassInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Größe`)
};

const fr_upload_build_size_class = /** @type {(inputs: Upload_Build_Size_ClassInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taille`)
};

const it_upload_build_size_class = /** @type {(inputs: Upload_Build_Size_ClassInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dimensione`)
};

const nl_upload_build_size_class = /** @type {(inputs: Upload_Build_Size_ClassInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grootte`)
};

const pl_upload_build_size_class = /** @type {(inputs: Upload_Build_Size_ClassInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rozmiar`)
};

const pt_upload_build_size_class = /** @type {(inputs: Upload_Build_Size_ClassInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tamanho`)
};

const ru_upload_build_size_class = /** @type {(inputs: Upload_Build_Size_ClassInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Размер`)
};

const sv_upload_build_size_class = /** @type {(inputs: Upload_Build_Size_ClassInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Storlek`)
};

const tr_upload_build_size_class = /** @type {(inputs: Upload_Build_Size_ClassInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Boyut`)
};

const zh_upload_build_size_class = /** @type {(inputs: Upload_Build_Size_ClassInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`规模`)
};

const ja_upload_build_size_class = /** @type {(inputs: Upload_Build_Size_ClassInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`規模`)
};

/**
* | output |
* | --- |
* | "Size" |
*
* @param {Upload_Build_Size_ClassInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_build_size_class = /** @type {((inputs?: Upload_Build_Size_ClassInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Build_Size_ClassInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_build_size_class(inputs)
	if (locale === "de") return de_upload_build_size_class(inputs)
	if (locale === "fr") return fr_upload_build_size_class(inputs)
	if (locale === "it") return it_upload_build_size_class(inputs)
	if (locale === "nl") return nl_upload_build_size_class(inputs)
	if (locale === "pl") return pl_upload_build_size_class(inputs)
	if (locale === "pt") return pt_upload_build_size_class(inputs)
	if (locale === "ru") return ru_upload_build_size_class(inputs)
	if (locale === "sv") return sv_upload_build_size_class(inputs)
	if (locale === "tr") return tr_upload_build_size_class(inputs)
	if (locale === "zh") return zh_upload_build_size_class(inputs)
	if (locale === "ja") return ja_upload_build_size_class(inputs)
	return en_upload_build_size_class(inputs)
});
