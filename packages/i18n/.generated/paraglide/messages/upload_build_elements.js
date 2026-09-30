/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Build_ElementsInputs */

const en_upload_build_elements = /** @type {(inputs: Upload_Build_ElementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elements`)
};

const es_upload_build_elements = /** @type {(inputs: Upload_Build_ElementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elementos`)
};

const de_upload_build_elements = /** @type {(inputs: Upload_Build_ElementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elemente`)
};

const fr_upload_build_elements = /** @type {(inputs: Upload_Build_ElementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Éléments`)
};

const it_upload_build_elements = /** @type {(inputs: Upload_Build_ElementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elementi`)
};

const nl_upload_build_elements = /** @type {(inputs: Upload_Build_ElementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elementen`)
};

const pl_upload_build_elements = /** @type {(inputs: Upload_Build_ElementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elementy`)
};

const pt_upload_build_elements = /** @type {(inputs: Upload_Build_ElementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elementos`)
};

const ru_upload_build_elements = /** @type {(inputs: Upload_Build_ElementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Элементы`)
};

const sv_upload_build_elements = /** @type {(inputs: Upload_Build_ElementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Element`)
};

const tr_upload_build_elements = /** @type {(inputs: Upload_Build_ElementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öğeler`)
};

const zh_upload_build_elements = /** @type {(inputs: Upload_Build_ElementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`元素`)
};

const ja_upload_build_elements = /** @type {(inputs: Upload_Build_ElementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`要素数`)
};

/**
* | output |
* | --- |
* | "Elements" |
*
* @param {Upload_Build_ElementsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_build_elements = /** @type {((inputs?: Upload_Build_ElementsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Build_ElementsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_build_elements(inputs)
	if (locale === "de") return de_upload_build_elements(inputs)
	if (locale === "fr") return fr_upload_build_elements(inputs)
	if (locale === "it") return it_upload_build_elements(inputs)
	if (locale === "nl") return nl_upload_build_elements(inputs)
	if (locale === "pl") return pl_upload_build_elements(inputs)
	if (locale === "pt") return pt_upload_build_elements(inputs)
	if (locale === "ru") return ru_upload_build_elements(inputs)
	if (locale === "sv") return sv_upload_build_elements(inputs)
	if (locale === "tr") return tr_upload_build_elements(inputs)
	if (locale === "zh") return zh_upload_build_elements(inputs)
	if (locale === "ja") return ja_upload_build_elements(inputs)
	return en_upload_build_elements(inputs)
});
