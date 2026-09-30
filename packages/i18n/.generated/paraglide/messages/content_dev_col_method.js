/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Dev_Col_MethodInputs */

const en_content_dev_col_method = /** @type {(inputs: Content_Dev_Col_MethodInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Method`)
};

const es_content_dev_col_method = /** @type {(inputs: Content_Dev_Col_MethodInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Método`)
};

const de_content_dev_col_method = /** @type {(inputs: Content_Dev_Col_MethodInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Methode`)
};

const fr_content_dev_col_method = /** @type {(inputs: Content_Dev_Col_MethodInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Méthode`)
};

const it_content_dev_col_method = /** @type {(inputs: Content_Dev_Col_MethodInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Metodo`)
};

const nl_content_dev_col_method = /** @type {(inputs: Content_Dev_Col_MethodInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Methode`)
};

const pl_content_dev_col_method = /** @type {(inputs: Content_Dev_Col_MethodInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Metoda`)
};

const pt_content_dev_col_method = /** @type {(inputs: Content_Dev_Col_MethodInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Método`)
};

const ru_content_dev_col_method = /** @type {(inputs: Content_Dev_Col_MethodInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Метод`)
};

const sv_content_dev_col_method = /** @type {(inputs: Content_Dev_Col_MethodInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Metod`)
};

const tr_content_dev_col_method = /** @type {(inputs: Content_Dev_Col_MethodInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yöntem`)
};

const zh_content_dev_col_method = /** @type {(inputs: Content_Dev_Col_MethodInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`方法`)
};

const ja_content_dev_col_method = /** @type {(inputs: Content_Dev_Col_MethodInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メソッド`)
};

/**
* | output |
* | --- |
* | "Method" |
*
* @param {Content_Dev_Col_MethodInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_dev_col_method = /** @type {((inputs?: Content_Dev_Col_MethodInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Dev_Col_MethodInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_dev_col_method(inputs)
	if (locale === "de") return de_content_dev_col_method(inputs)
	if (locale === "fr") return fr_content_dev_col_method(inputs)
	if (locale === "it") return it_content_dev_col_method(inputs)
	if (locale === "nl") return nl_content_dev_col_method(inputs)
	if (locale === "pl") return pl_content_dev_col_method(inputs)
	if (locale === "pt") return pt_content_dev_col_method(inputs)
	if (locale === "ru") return ru_content_dev_col_method(inputs)
	if (locale === "sv") return sv_content_dev_col_method(inputs)
	if (locale === "tr") return tr_content_dev_col_method(inputs)
	if (locale === "zh") return zh_content_dev_col_method(inputs)
	if (locale === "ja") return ja_content_dev_col_method(inputs)
	return en_content_dev_col_method(inputs)
});
