/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Dev_Col_CodeInputs */

const en_content_dev_col_code = /** @type {(inputs: Content_Dev_Col_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Code`)
};

const es_content_dev_col_code = /** @type {(inputs: Content_Dev_Col_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Código`)
};

const de_content_dev_col_code = /** @type {(inputs: Content_Dev_Col_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Code`)
};

const fr_content_dev_col_code = /** @type {(inputs: Content_Dev_Col_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Code`)
};

const it_content_dev_col_code = /** @type {(inputs: Content_Dev_Col_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Codice`)
};

const nl_content_dev_col_code = /** @type {(inputs: Content_Dev_Col_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Code`)
};

const pl_content_dev_col_code = /** @type {(inputs: Content_Dev_Col_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kod`)
};

const pt_content_dev_col_code = /** @type {(inputs: Content_Dev_Col_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Código`)
};

const ru_content_dev_col_code = /** @type {(inputs: Content_Dev_Col_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Код`)
};

const sv_content_dev_col_code = /** @type {(inputs: Content_Dev_Col_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kod`)
};

const tr_content_dev_col_code = /** @type {(inputs: Content_Dev_Col_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kod`)
};

const zh_content_dev_col_code = /** @type {(inputs: Content_Dev_Col_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`代码`)
};

const ja_content_dev_col_code = /** @type {(inputs: Content_Dev_Col_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コード`)
};

/**
* | output |
* | --- |
* | "Code" |
*
* @param {Content_Dev_Col_CodeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_dev_col_code = /** @type {((inputs?: Content_Dev_Col_CodeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Dev_Col_CodeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_dev_col_code(inputs)
	if (locale === "de") return de_content_dev_col_code(inputs)
	if (locale === "fr") return fr_content_dev_col_code(inputs)
	if (locale === "it") return it_content_dev_col_code(inputs)
	if (locale === "nl") return nl_content_dev_col_code(inputs)
	if (locale === "pl") return pl_content_dev_col_code(inputs)
	if (locale === "pt") return pt_content_dev_col_code(inputs)
	if (locale === "ru") return ru_content_dev_col_code(inputs)
	if (locale === "sv") return sv_content_dev_col_code(inputs)
	if (locale === "tr") return tr_content_dev_col_code(inputs)
	if (locale === "zh") return zh_content_dev_col_code(inputs)
	if (locale === "ja") return ja_content_dev_col_code(inputs)
	return en_content_dev_col_code(inputs)
});
