/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Brand_Snippet_LabelInputs */

const en_content_brand_snippet_label = /** @type {(inputs: Content_Brand_Snippet_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`HTML snippet`)
};

const es_content_brand_snippet_label = /** @type {(inputs: Content_Brand_Snippet_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fragmento HTML`)
};

const de_content_brand_snippet_label = /** @type {(inputs: Content_Brand_Snippet_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`HTML-Code`)
};

const fr_content_brand_snippet_label = /** @type {(inputs: Content_Brand_Snippet_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Code HTML`)
};

const it_content_brand_snippet_label = /** @type {(inputs: Content_Brand_Snippet_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Codice HTML`)
};

const nl_content_brand_snippet_label = /** @type {(inputs: Content_Brand_Snippet_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`HTML-code`)
};

const pl_content_brand_snippet_label = /** @type {(inputs: Content_Brand_Snippet_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kod HTML`)
};

const pt_content_brand_snippet_label = /** @type {(inputs: Content_Brand_Snippet_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Código HTML`)
};

const ru_content_brand_snippet_label = /** @type {(inputs: Content_Brand_Snippet_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`HTML-код`)
};

const sv_content_brand_snippet_label = /** @type {(inputs: Content_Brand_Snippet_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`HTML-kod`)
};

const tr_content_brand_snippet_label = /** @type {(inputs: Content_Brand_Snippet_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`HTML kodu`)
};

const zh_content_brand_snippet_label = /** @type {(inputs: Content_Brand_Snippet_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`HTML 代码`)
};

const ja_content_brand_snippet_label = /** @type {(inputs: Content_Brand_Snippet_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`HTML コード`)
};

/**
* | output |
* | --- |
* | "HTML snippet" |
*
* @param {Content_Brand_Snippet_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_brand_snippet_label = /** @type {((inputs?: Content_Brand_Snippet_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Brand_Snippet_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_brand_snippet_label(inputs)
	if (locale === "de") return de_content_brand_snippet_label(inputs)
	if (locale === "fr") return fr_content_brand_snippet_label(inputs)
	if (locale === "it") return it_content_brand_snippet_label(inputs)
	if (locale === "nl") return nl_content_brand_snippet_label(inputs)
	if (locale === "pl") return pl_content_brand_snippet_label(inputs)
	if (locale === "pt") return pt_content_brand_snippet_label(inputs)
	if (locale === "ru") return ru_content_brand_snippet_label(inputs)
	if (locale === "sv") return sv_content_brand_snippet_label(inputs)
	if (locale === "tr") return tr_content_brand_snippet_label(inputs)
	if (locale === "zh") return zh_content_brand_snippet_label(inputs)
	if (locale === "ja") return ja_content_brand_snippet_label(inputs)
	return en_content_brand_snippet_label(inputs)
});
