/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Dev_Col_MeaningInputs */

const en_content_dev_col_meaning = /** @type {(inputs: Content_Dev_Col_MeaningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meaning`)
};

const es_content_dev_col_meaning = /** @type {(inputs: Content_Dev_Col_MeaningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Significado`)
};

const de_content_dev_col_meaning = /** @type {(inputs: Content_Dev_Col_MeaningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bedeutung`)
};

const fr_content_dev_col_meaning = /** @type {(inputs: Content_Dev_Col_MeaningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signification`)
};

const it_content_dev_col_meaning = /** @type {(inputs: Content_Dev_Col_MeaningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Significato`)
};

const nl_content_dev_col_meaning = /** @type {(inputs: Content_Dev_Col_MeaningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Betekenis`)
};

const pl_content_dev_col_meaning = /** @type {(inputs: Content_Dev_Col_MeaningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Znaczenie`)
};

const pt_content_dev_col_meaning = /** @type {(inputs: Content_Dev_Col_MeaningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Significado`)
};

const ru_content_dev_col_meaning = /** @type {(inputs: Content_Dev_Col_MeaningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Значение`)
};

const sv_content_dev_col_meaning = /** @type {(inputs: Content_Dev_Col_MeaningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Betydelse`)
};

const tr_content_dev_col_meaning = /** @type {(inputs: Content_Dev_Col_MeaningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anlamı`)
};

const zh_content_dev_col_meaning = /** @type {(inputs: Content_Dev_Col_MeaningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`含义`)
};

const ja_content_dev_col_meaning = /** @type {(inputs: Content_Dev_Col_MeaningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`意味`)
};

/**
* | output |
* | --- |
* | "Meaning" |
*
* @param {Content_Dev_Col_MeaningInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_dev_col_meaning = /** @type {((inputs?: Content_Dev_Col_MeaningInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Dev_Col_MeaningInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_dev_col_meaning(inputs)
	if (locale === "de") return de_content_dev_col_meaning(inputs)
	if (locale === "fr") return fr_content_dev_col_meaning(inputs)
	if (locale === "it") return it_content_dev_col_meaning(inputs)
	if (locale === "nl") return nl_content_dev_col_meaning(inputs)
	if (locale === "pl") return pl_content_dev_col_meaning(inputs)
	if (locale === "pt") return pt_content_dev_col_meaning(inputs)
	if (locale === "ru") return ru_content_dev_col_meaning(inputs)
	if (locale === "sv") return sv_content_dev_col_meaning(inputs)
	if (locale === "tr") return tr_content_dev_col_meaning(inputs)
	if (locale === "zh") return zh_content_dev_col_meaning(inputs)
	if (locale === "ja") return ja_content_dev_col_meaning(inputs)
	return en_content_dev_col_meaning(inputs)
});
