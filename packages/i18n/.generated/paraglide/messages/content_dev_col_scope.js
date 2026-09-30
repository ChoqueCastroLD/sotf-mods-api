/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Dev_Col_ScopeInputs */

const en_content_dev_col_scope = /** @type {(inputs: Content_Dev_Col_ScopeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scope`)
};

const es_content_dev_col_scope = /** @type {(inputs: Content_Dev_Col_ScopeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ámbito`)
};

const de_content_dev_col_scope = /** @type {(inputs: Content_Dev_Col_ScopeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bereich`)
};

const fr_content_dev_col_scope = /** @type {(inputs: Content_Dev_Col_ScopeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Portée`)
};

const it_content_dev_col_scope = /** @type {(inputs: Content_Dev_Col_ScopeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ambito`)
};

const nl_content_dev_col_scope = /** @type {(inputs: Content_Dev_Col_ScopeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bereik`)
};

const pl_content_dev_col_scope = /** @type {(inputs: Content_Dev_Col_ScopeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zakres`)
};

const pt_content_dev_col_scope = /** @type {(inputs: Content_Dev_Col_ScopeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escopo`)
};

const ru_content_dev_col_scope = /** @type {(inputs: Content_Dev_Col_ScopeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Область`)
};

const sv_content_dev_col_scope = /** @type {(inputs: Content_Dev_Col_ScopeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Omfång`)
};

const tr_content_dev_col_scope = /** @type {(inputs: Content_Dev_Col_ScopeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kapsam`)
};

const zh_content_dev_col_scope = /** @type {(inputs: Content_Dev_Col_ScopeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`范围`)
};

const ja_content_dev_col_scope = /** @type {(inputs: Content_Dev_Col_ScopeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`対象`)
};

/**
* | output |
* | --- |
* | "Scope" |
*
* @param {Content_Dev_Col_ScopeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_dev_col_scope = /** @type {((inputs?: Content_Dev_Col_ScopeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Dev_Col_ScopeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_dev_col_scope(inputs)
	if (locale === "de") return de_content_dev_col_scope(inputs)
	if (locale === "fr") return fr_content_dev_col_scope(inputs)
	if (locale === "it") return it_content_dev_col_scope(inputs)
	if (locale === "nl") return nl_content_dev_col_scope(inputs)
	if (locale === "pl") return pl_content_dev_col_scope(inputs)
	if (locale === "pt") return pt_content_dev_col_scope(inputs)
	if (locale === "ru") return ru_content_dev_col_scope(inputs)
	if (locale === "sv") return sv_content_dev_col_scope(inputs)
	if (locale === "tr") return tr_content_dev_col_scope(inputs)
	if (locale === "zh") return zh_content_dev_col_scope(inputs)
	if (locale === "ja") return ja_content_dev_col_scope(inputs)
	return en_content_dev_col_scope(inputs)
});
