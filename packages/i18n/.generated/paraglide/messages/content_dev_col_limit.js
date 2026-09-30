/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Dev_Col_LimitInputs */

const en_content_dev_col_limit = /** @type {(inputs: Content_Dev_Col_LimitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Limit`)
};

const es_content_dev_col_limit = /** @type {(inputs: Content_Dev_Col_LimitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Límite`)
};

const de_content_dev_col_limit = /** @type {(inputs: Content_Dev_Col_LimitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Limit`)
};

const fr_content_dev_col_limit = /** @type {(inputs: Content_Dev_Col_LimitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Limite`)
};

const it_content_dev_col_limit = /** @type {(inputs: Content_Dev_Col_LimitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Limite`)
};

const nl_content_dev_col_limit = /** @type {(inputs: Content_Dev_Col_LimitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Limiet`)
};

const pl_content_dev_col_limit = /** @type {(inputs: Content_Dev_Col_LimitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Limit`)
};

const pt_content_dev_col_limit = /** @type {(inputs: Content_Dev_Col_LimitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Limite`)
};

const ru_content_dev_col_limit = /** @type {(inputs: Content_Dev_Col_LimitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Лимит`)
};

const sv_content_dev_col_limit = /** @type {(inputs: Content_Dev_Col_LimitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gräns`)
};

const tr_content_dev_col_limit = /** @type {(inputs: Content_Dev_Col_LimitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sınır`)
};

const zh_content_dev_col_limit = /** @type {(inputs: Content_Dev_Col_LimitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`限制`)
};

const ja_content_dev_col_limit = /** @type {(inputs: Content_Dev_Col_LimitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上限`)
};

/**
* | output |
* | --- |
* | "Limit" |
*
* @param {Content_Dev_Col_LimitInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_dev_col_limit = /** @type {((inputs?: Content_Dev_Col_LimitInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Dev_Col_LimitInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_dev_col_limit(inputs)
	if (locale === "de") return de_content_dev_col_limit(inputs)
	if (locale === "fr") return fr_content_dev_col_limit(inputs)
	if (locale === "it") return it_content_dev_col_limit(inputs)
	if (locale === "nl") return nl_content_dev_col_limit(inputs)
	if (locale === "pl") return pl_content_dev_col_limit(inputs)
	if (locale === "pt") return pt_content_dev_col_limit(inputs)
	if (locale === "ru") return ru_content_dev_col_limit(inputs)
	if (locale === "sv") return sv_content_dev_col_limit(inputs)
	if (locale === "tr") return tr_content_dev_col_limit(inputs)
	if (locale === "zh") return zh_content_dev_col_limit(inputs)
	if (locale === "ja") return ja_content_dev_col_limit(inputs)
	return en_content_dev_col_limit(inputs)
});
