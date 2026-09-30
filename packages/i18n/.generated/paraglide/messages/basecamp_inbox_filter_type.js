/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Inbox_Filter_TypeInputs */

const en_basecamp_inbox_filter_type = /** @type {(inputs: Basecamp_Inbox_Filter_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kind`)
};

const es_basecamp_inbox_filter_type = /** @type {(inputs: Basecamp_Inbox_Filter_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tipo`)
};

const de_basecamp_inbox_filter_type = /** @type {(inputs: Basecamp_Inbox_Filter_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Art`)
};

const fr_basecamp_inbox_filter_type = /** @type {(inputs: Basecamp_Inbox_Filter_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Type`)
};

const it_basecamp_inbox_filter_type = /** @type {(inputs: Basecamp_Inbox_Filter_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tipo`)
};

const nl_basecamp_inbox_filter_type = /** @type {(inputs: Basecamp_Inbox_Filter_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Soort`)
};

const pl_basecamp_inbox_filter_type = /** @type {(inputs: Basecamp_Inbox_Filter_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rodzaj`)
};

const pt_basecamp_inbox_filter_type = /** @type {(inputs: Basecamp_Inbox_Filter_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tipo`)
};

const ru_basecamp_inbox_filter_type = /** @type {(inputs: Basecamp_Inbox_Filter_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Тип`)
};

const sv_basecamp_inbox_filter_type = /** @type {(inputs: Basecamp_Inbox_Filter_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Typ`)
};

const tr_basecamp_inbox_filter_type = /** @type {(inputs: Basecamp_Inbox_Filter_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tür`)
};

const zh_basecamp_inbox_filter_type = /** @type {(inputs: Basecamp_Inbox_Filter_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`类型`)
};

const ja_basecamp_inbox_filter_type = /** @type {(inputs: Basecamp_Inbox_Filter_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`種類`)
};

/**
* | output |
* | --- |
* | "Kind" |
*
* @param {Basecamp_Inbox_Filter_TypeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_inbox_filter_type = /** @type {((inputs?: Basecamp_Inbox_Filter_TypeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Inbox_Filter_TypeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_inbox_filter_type(inputs)
	if (locale === "de") return de_basecamp_inbox_filter_type(inputs)
	if (locale === "fr") return fr_basecamp_inbox_filter_type(inputs)
	if (locale === "it") return it_basecamp_inbox_filter_type(inputs)
	if (locale === "nl") return nl_basecamp_inbox_filter_type(inputs)
	if (locale === "pl") return pl_basecamp_inbox_filter_type(inputs)
	if (locale === "pt") return pt_basecamp_inbox_filter_type(inputs)
	if (locale === "ru") return ru_basecamp_inbox_filter_type(inputs)
	if (locale === "sv") return sv_basecamp_inbox_filter_type(inputs)
	if (locale === "tr") return tr_basecamp_inbox_filter_type(inputs)
	if (locale === "zh") return zh_basecamp_inbox_filter_type(inputs)
	if (locale === "ja") return ja_basecamp_inbox_filter_type(inputs)
	return en_basecamp_inbox_filter_type(inputs)
});
