/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Md_SpoilerInputs */

const en_content_md_spoiler = /** @type {(inputs: Content_Md_SpoilerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spoiler`)
};

const es_content_md_spoiler = /** @type {(inputs: Content_Md_SpoilerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spoiler`)
};

const de_content_md_spoiler = /** @type {(inputs: Content_Md_SpoilerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spoiler`)
};

const fr_content_md_spoiler = /** @type {(inputs: Content_Md_SpoilerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spoiler`)
};

const it_content_md_spoiler = /** @type {(inputs: Content_Md_SpoilerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spoiler`)
};

const nl_content_md_spoiler = /** @type {(inputs: Content_Md_SpoilerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spoiler`)
};

const pl_content_md_spoiler = /** @type {(inputs: Content_Md_SpoilerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spoiler`)
};

const pt_content_md_spoiler = /** @type {(inputs: Content_Md_SpoilerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spoiler`)
};

const ru_content_md_spoiler = /** @type {(inputs: Content_Md_SpoilerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Спойлер`)
};

const sv_content_md_spoiler = /** @type {(inputs: Content_Md_SpoilerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spoiler`)
};

const tr_content_md_spoiler = /** @type {(inputs: Content_Md_SpoilerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spoiler`)
};

const zh_content_md_spoiler = /** @type {(inputs: Content_Md_SpoilerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`剧透`)
};

const ja_content_md_spoiler = /** @type {(inputs: Content_Md_SpoilerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ネタバレ`)
};

/**
* | output |
* | --- |
* | "Spoiler" |
*
* @param {Content_Md_SpoilerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_md_spoiler = /** @type {((inputs?: Content_Md_SpoilerInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Md_SpoilerInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_md_spoiler(inputs)
	if (locale === "de") return de_content_md_spoiler(inputs)
	if (locale === "fr") return fr_content_md_spoiler(inputs)
	if (locale === "it") return it_content_md_spoiler(inputs)
	if (locale === "nl") return nl_content_md_spoiler(inputs)
	if (locale === "pl") return pl_content_md_spoiler(inputs)
	if (locale === "pt") return pt_content_md_spoiler(inputs)
	if (locale === "ru") return ru_content_md_spoiler(inputs)
	if (locale === "sv") return sv_content_md_spoiler(inputs)
	if (locale === "tr") return tr_content_md_spoiler(inputs)
	if (locale === "zh") return zh_content_md_spoiler(inputs)
	if (locale === "ja") return ja_content_md_spoiler(inputs)
	return en_content_md_spoiler(inputs)
});
