/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Footer_Content_PolicyInputs */

const en_common_footer_content_policy = /** @type {(inputs: Common_Footer_Content_PolicyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Content policy`)
};

const es_common_footer_content_policy = /** @type {(inputs: Common_Footer_Content_PolicyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Política de contenido`)
};

const de_common_footer_content_policy = /** @type {(inputs: Common_Footer_Content_PolicyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inhaltsrichtlinie`)
};

const fr_common_footer_content_policy = /** @type {(inputs: Common_Footer_Content_PolicyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Politique de contenu`)
};

const it_common_footer_content_policy = /** @type {(inputs: Common_Footer_Content_PolicyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Norme sui contenuti`)
};

const nl_common_footer_content_policy = /** @type {(inputs: Common_Footer_Content_PolicyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contentbeleid`)
};

const pl_common_footer_content_policy = /** @type {(inputs: Common_Footer_Content_PolicyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zasady treści`)
};

const pt_common_footer_content_policy = /** @type {(inputs: Common_Footer_Content_PolicyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Política de conteúdo`)
};

const ru_common_footer_content_policy = /** @type {(inputs: Common_Footer_Content_PolicyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Правила контента`)
};

const sv_common_footer_content_policy = /** @type {(inputs: Common_Footer_Content_PolicyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Innehållspolicy`)
};

const tr_common_footer_content_policy = /** @type {(inputs: Common_Footer_Content_PolicyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İçerik politikası`)
};

const zh_common_footer_content_policy = /** @type {(inputs: Common_Footer_Content_PolicyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`内容政策`)
};

const ja_common_footer_content_policy = /** @type {(inputs: Common_Footer_Content_PolicyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コンテンツポリシー`)
};

/**
* | output |
* | --- |
* | "Content policy" |
*
* @param {Common_Footer_Content_PolicyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_footer_content_policy = /** @type {((inputs?: Common_Footer_Content_PolicyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Footer_Content_PolicyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_footer_content_policy(inputs)
	if (locale === "de") return de_common_footer_content_policy(inputs)
	if (locale === "fr") return fr_common_footer_content_policy(inputs)
	if (locale === "it") return it_common_footer_content_policy(inputs)
	if (locale === "nl") return nl_common_footer_content_policy(inputs)
	if (locale === "pl") return pl_common_footer_content_policy(inputs)
	if (locale === "pt") return pt_common_footer_content_policy(inputs)
	if (locale === "ru") return ru_common_footer_content_policy(inputs)
	if (locale === "sv") return sv_common_footer_content_policy(inputs)
	if (locale === "tr") return tr_common_footer_content_policy(inputs)
	if (locale === "zh") return zh_common_footer_content_policy(inputs)
	if (locale === "ja") return ja_common_footer_content_policy(inputs)
	return en_common_footer_content_policy(inputs)
});
