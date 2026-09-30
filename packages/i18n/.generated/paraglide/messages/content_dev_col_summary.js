/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Dev_Col_SummaryInputs */

const en_content_dev_col_summary = /** @type {(inputs: Content_Dev_Col_SummaryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What it does`)
};

const es_content_dev_col_summary = /** @type {(inputs: Content_Dev_Col_SummaryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qué hace`)
};

const de_content_dev_col_summary = /** @type {(inputs: Content_Dev_Col_SummaryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Was er tut`)
};

const fr_content_dev_col_summary = /** @type {(inputs: Content_Dev_Col_SummaryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rôle`)
};

const it_content_dev_col_summary = /** @type {(inputs: Content_Dev_Col_SummaryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cosa fa`)
};

const nl_content_dev_col_summary = /** @type {(inputs: Content_Dev_Col_SummaryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wat het doet`)
};

const pl_content_dev_col_summary = /** @type {(inputs: Content_Dev_Col_SummaryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Co robi`)
};

const pt_content_dev_col_summary = /** @type {(inputs: Content_Dev_Col_SummaryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O que faz`)
};

const ru_content_dev_col_summary = /** @type {(inputs: Content_Dev_Col_SummaryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Что делает`)
};

const sv_content_dev_col_summary = /** @type {(inputs: Content_Dev_Col_SummaryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vad den gör`)
};

const tr_content_dev_col_summary = /** @type {(inputs: Content_Dev_Col_SummaryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ne yapar`)
};

const zh_content_dev_col_summary = /** @type {(inputs: Content_Dev_Col_SummaryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作用`)
};

const ja_content_dev_col_summary = /** @type {(inputs: Content_Dev_Col_SummaryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`内容`)
};

/**
* | output |
* | --- |
* | "What it does" |
*
* @param {Content_Dev_Col_SummaryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_dev_col_summary = /** @type {((inputs?: Content_Dev_Col_SummaryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Dev_Col_SummaryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_dev_col_summary(inputs)
	if (locale === "de") return de_content_dev_col_summary(inputs)
	if (locale === "fr") return fr_content_dev_col_summary(inputs)
	if (locale === "it") return it_content_dev_col_summary(inputs)
	if (locale === "nl") return nl_content_dev_col_summary(inputs)
	if (locale === "pl") return pl_content_dev_col_summary(inputs)
	if (locale === "pt") return pt_content_dev_col_summary(inputs)
	if (locale === "ru") return ru_content_dev_col_summary(inputs)
	if (locale === "sv") return sv_content_dev_col_summary(inputs)
	if (locale === "tr") return tr_content_dev_col_summary(inputs)
	if (locale === "zh") return zh_content_dev_col_summary(inputs)
	if (locale === "ja") return ja_content_dev_col_summary(inputs)
	return en_content_dev_col_summary(inputs)
});
