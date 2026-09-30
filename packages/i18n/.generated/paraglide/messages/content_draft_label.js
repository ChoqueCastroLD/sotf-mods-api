/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Draft_LabelInputs */

const en_content_draft_label = /** @type {(inputs: Content_Draft_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Draft notice`)
};

const es_content_draft_label = /** @type {(inputs: Content_Draft_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aviso de borrador`)
};

const de_content_draft_label = /** @type {(inputs: Content_Draft_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entwurfshinweis`)
};

const fr_content_draft_label = /** @type {(inputs: Content_Draft_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avis de brouillon`)
};

const it_content_draft_label = /** @type {(inputs: Content_Draft_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avviso di bozza`)
};

const nl_content_draft_label = /** @type {(inputs: Content_Draft_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conceptmelding`)
};

const pl_content_draft_label = /** @type {(inputs: Content_Draft_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Informacja o wersji roboczej`)
};

const pt_content_draft_label = /** @type {(inputs: Content_Draft_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aviso de rascunho`)
};

const ru_content_draft_label = /** @type {(inputs: Content_Draft_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Черновик`)
};

const sv_content_draft_label = /** @type {(inputs: Content_Draft_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utkast`)
};

const tr_content_draft_label = /** @type {(inputs: Content_Draft_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taslak bildirimi`)
};

const zh_content_draft_label = /** @type {(inputs: Content_Draft_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`草稿说明`)
};

const ja_content_draft_label = /** @type {(inputs: Content_Draft_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`草案のお知らせ`)
};

/**
* | output |
* | --- |
* | "Draft notice" |
*
* @param {Content_Draft_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_draft_label = /** @type {((inputs?: Content_Draft_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Draft_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_draft_label(inputs)
	if (locale === "de") return de_content_draft_label(inputs)
	if (locale === "fr") return fr_content_draft_label(inputs)
	if (locale === "it") return it_content_draft_label(inputs)
	if (locale === "nl") return nl_content_draft_label(inputs)
	if (locale === "pl") return pl_content_draft_label(inputs)
	if (locale === "pt") return pt_content_draft_label(inputs)
	if (locale === "ru") return ru_content_draft_label(inputs)
	if (locale === "sv") return sv_content_draft_label(inputs)
	if (locale === "tr") return tr_content_draft_label(inputs)
	if (locale === "zh") return zh_content_draft_label(inputs)
	if (locale === "ja") return ja_content_draft_label(inputs)
	return en_content_draft_label(inputs)
});
