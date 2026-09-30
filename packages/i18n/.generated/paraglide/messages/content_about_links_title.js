/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_About_Links_TitleInputs */

const en_content_about_links_title = /** @type {(inputs: Content_About_Links_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Around the camp`)
};

const es_content_about_links_title = /** @type {(inputs: Content_About_Links_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Por el campamento`)
};

const de_content_about_links_title = /** @type {(inputs: Content_About_Links_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rund ums Lager`)
};

const fr_content_about_links_title = /** @type {(inputs: Content_About_Links_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autour du camp`)
};

const it_content_about_links_title = /** @type {(inputs: Content_About_Links_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In giro per il campo`)
};

const nl_content_about_links_title = /** @type {(inputs: Content_About_Links_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rond het kamp`)
};

const pl_content_about_links_title = /** @type {(inputs: Content_About_Links_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wokół obozu`)
};

const pt_content_about_links_title = /** @type {(inputs: Content_About_Links_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pelo acampamento`)
};

const ru_content_about_links_title = /** @type {(inputs: Content_About_Links_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`По лагерю`)
};

const sv_content_about_links_title = /** @type {(inputs: Content_About_Links_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Runt lägret`)
};

const tr_content_about_links_title = /** @type {(inputs: Content_About_Links_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kampın etrafında`)
};

const zh_content_about_links_title = /** @type {(inputs: Content_About_Links_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`营地周边`)
};

const ja_content_about_links_title = /** @type {(inputs: Content_About_Links_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キャンプの周辺`)
};

/**
* | output |
* | --- |
* | "Around the camp" |
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
