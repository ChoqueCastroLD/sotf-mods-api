/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Live_Embed_Html_LabelInputs */

const en_live_embed_html_label = /** @type {(inputs: Live_Embed_Html_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`HTML`)
};

const es_live_embed_html_label = /** @type {(inputs: Live_Embed_Html_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`HTML`)
};

const de_live_embed_html_label = /** @type {(inputs: Live_Embed_Html_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`HTML`)
};

const fr_live_embed_html_label = /** @type {(inputs: Live_Embed_Html_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`HTML`)
};

const it_live_embed_html_label = /** @type {(inputs: Live_Embed_Html_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`HTML`)
};

const nl_live_embed_html_label = /** @type {(inputs: Live_Embed_Html_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`HTML`)
};

const pl_live_embed_html_label = /** @type {(inputs: Live_Embed_Html_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`HTML`)
};

const pt_live_embed_html_label = /** @type {(inputs: Live_Embed_Html_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`HTML`)
};

const ru_live_embed_html_label = /** @type {(inputs: Live_Embed_Html_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`HTML`)
};

const sv_live_embed_html_label = /** @type {(inputs: Live_Embed_Html_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`HTML`)
};

const tr_live_embed_html_label = /** @type {(inputs: Live_Embed_Html_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`HTML`)
};

const zh_live_embed_html_label = /** @type {(inputs: Live_Embed_Html_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`HTML`)
};

const ja_live_embed_html_label = /** @type {(inputs: Live_Embed_Html_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`HTML`)
};

/**
* | output |
* | --- |
* | "HTML" |
*
* @param {Live_Embed_Html_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const live_embed_html_label = /** @type {((inputs?: Live_Embed_Html_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Live_Embed_Html_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_live_embed_html_label(inputs)
	if (locale === "de") return de_live_embed_html_label(inputs)
	if (locale === "fr") return fr_live_embed_html_label(inputs)
	if (locale === "it") return it_live_embed_html_label(inputs)
	if (locale === "nl") return nl_live_embed_html_label(inputs)
	if (locale === "pl") return pl_live_embed_html_label(inputs)
	if (locale === "pt") return pt_live_embed_html_label(inputs)
	if (locale === "ru") return ru_live_embed_html_label(inputs)
	if (locale === "sv") return sv_live_embed_html_label(inputs)
	if (locale === "tr") return tr_live_embed_html_label(inputs)
	if (locale === "zh") return zh_live_embed_html_label(inputs)
	if (locale === "ja") return ja_live_embed_html_label(inputs)
	return en_live_embed_html_label(inputs)
});
