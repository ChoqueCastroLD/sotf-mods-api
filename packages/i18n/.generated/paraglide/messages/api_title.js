/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Api_TitleInputs */

const en_api_title = /** @type {(inputs: Api_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API`)
};

const es_api_title = /** @type {(inputs: Api_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API`)
};

const de_api_title = /** @type {(inputs: Api_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API`)
};

const fr_api_title = /** @type {(inputs: Api_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API`)
};

const it_api_title = /** @type {(inputs: Api_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API`)
};

const nl_api_title = /** @type {(inputs: Api_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API`)
};

const pl_api_title = /** @type {(inputs: Api_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API`)
};

const pt_api_title = /** @type {(inputs: Api_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API`)
};

const ru_api_title = /** @type {(inputs: Api_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API`)
};

const sv_api_title = /** @type {(inputs: Api_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API`)
};

const tr_api_title = /** @type {(inputs: Api_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API`)
};

const zh_api_title = /** @type {(inputs: Api_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API`)
};

const ja_api_title = /** @type {(inputs: Api_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API`)
};

/**
* | output |
* | --- |
* | "API" |
*
* @param {Api_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const api_title = /** @type {((inputs?: Api_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Api_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_api_title(inputs)
	if (locale === "de") return de_api_title(inputs)
	if (locale === "fr") return fr_api_title(inputs)
	if (locale === "it") return it_api_title(inputs)
	if (locale === "nl") return nl_api_title(inputs)
	if (locale === "pl") return pl_api_title(inputs)
	if (locale === "pt") return pt_api_title(inputs)
	if (locale === "ru") return ru_api_title(inputs)
	if (locale === "sv") return sv_api_title(inputs)
	if (locale === "tr") return tr_api_title(inputs)
	if (locale === "zh") return zh_api_title(inputs)
	if (locale === "ja") return ja_api_title(inputs)
	return en_api_title(inputs)
});
