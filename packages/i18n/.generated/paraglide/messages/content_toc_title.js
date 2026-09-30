/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Toc_TitleInputs */

const en_content_toc_title = /** @type {(inputs: Content_Toc_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`On this page`)
};

const es_content_toc_title = /** @type {(inputs: Content_Toc_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En esta página`)
};

const de_content_toc_title = /** @type {(inputs: Content_Toc_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auf dieser Seite`)
};

const fr_content_toc_title = /** @type {(inputs: Content_Toc_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sur cette page`)
};

const it_content_toc_title = /** @type {(inputs: Content_Toc_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In questa pagina`)
};

const nl_content_toc_title = /** @type {(inputs: Content_Toc_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Op deze pagina`)
};

const pl_content_toc_title = /** @type {(inputs: Content_Toc_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Na tej stronie`)
};

const pt_content_toc_title = /** @type {(inputs: Content_Toc_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nesta página`)
};

const ru_content_toc_title = /** @type {(inputs: Content_Toc_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`На этой странице`)
};

const sv_content_toc_title = /** @type {(inputs: Content_Toc_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`På den här sidan`)
};

const tr_content_toc_title = /** @type {(inputs: Content_Toc_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu sayfada`)
};

const zh_content_toc_title = /** @type {(inputs: Content_Toc_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`本页内容`)
};

const ja_content_toc_title = /** @type {(inputs: Content_Toc_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このページの内容`)
};

/**
* | output |
* | --- |
* | "On this page" |
*
* @param {Content_Toc_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_toc_title = /** @type {((inputs?: Content_Toc_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Toc_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_toc_title(inputs)
	if (locale === "de") return de_content_toc_title(inputs)
	if (locale === "fr") return fr_content_toc_title(inputs)
	if (locale === "it") return it_content_toc_title(inputs)
	if (locale === "nl") return nl_content_toc_title(inputs)
	if (locale === "pl") return pl_content_toc_title(inputs)
	if (locale === "pt") return pt_content_toc_title(inputs)
	if (locale === "ru") return ru_content_toc_title(inputs)
	if (locale === "sv") return sv_content_toc_title(inputs)
	if (locale === "tr") return tr_content_toc_title(inputs)
	if (locale === "zh") return zh_content_toc_title(inputs)
	if (locale === "ja") return ja_content_toc_title(inputs)
	return en_content_toc_title(inputs)
});
