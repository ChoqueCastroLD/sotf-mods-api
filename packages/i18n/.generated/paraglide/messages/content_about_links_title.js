/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_About_Links_TitleInputs */

const en_content_about_links_title = /** @type {(inputs: Content_About_Links_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Links`)
};

const es_content_about_links_title = /** @type {(inputs: Content_About_Links_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enlaces`)
};

const de_content_about_links_title = /** @type {(inputs: Content_About_Links_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Links`)
};

const fr_content_about_links_title = /** @type {(inputs: Content_About_Links_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Liens`)
};

const it_content_about_links_title = /** @type {(inputs: Content_About_Links_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link`)
};

const nl_content_about_links_title = /** @type {(inputs: Content_About_Links_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Links`)
};

const pl_content_about_links_title = /** @type {(inputs: Content_About_Links_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Linki`)
};

const pt_content_about_links_title = /** @type {(inputs: Content_About_Links_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Links`)
};

const ru_content_about_links_title = /** @type {(inputs: Content_About_Links_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ссылки`)
};

const sv_content_about_links_title = /** @type {(inputs: Content_About_Links_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Länkar`)
};

const tr_content_about_links_title = /** @type {(inputs: Content_About_Links_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bağlantılar`)
};

const zh_content_about_links_title = /** @type {(inputs: Content_About_Links_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`链接`)
};

const ja_content_about_links_title = /** @type {(inputs: Content_About_Links_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リンク`)
};

/**
* | output |
* | --- |
* | "Links" |
*
* @param {Content_About_Links_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_about_links_title = /** @type {((inputs?: Content_About_Links_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_About_Links_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_about_links_title(inputs)
	if (locale === "de") return de_content_about_links_title(inputs)
	if (locale === "fr") return fr_content_about_links_title(inputs)
	if (locale === "it") return it_content_about_links_title(inputs)
	if (locale === "nl") return nl_content_about_links_title(inputs)
	if (locale === "pl") return pl_content_about_links_title(inputs)
	if (locale === "pt") return pt_content_about_links_title(inputs)
	if (locale === "ru") return ru_content_about_links_title(inputs)
	if (locale === "sv") return sv_content_about_links_title(inputs)
	if (locale === "tr") return tr_content_about_links_title(inputs)
	if (locale === "zh") return zh_content_about_links_title(inputs)
	if (locale === "ja") return ja_content_about_links_title(inputs)
	return en_content_about_links_title(inputs)
});
