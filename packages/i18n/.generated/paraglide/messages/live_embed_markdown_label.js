/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Live_Embed_Markdown_LabelInputs */

const en_live_embed_markdown_label = /** @type {(inputs: Live_Embed_Markdown_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown`)
};

const es_live_embed_markdown_label = /** @type {(inputs: Live_Embed_Markdown_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown`)
};

const de_live_embed_markdown_label = /** @type {(inputs: Live_Embed_Markdown_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown`)
};

const fr_live_embed_markdown_label = /** @type {(inputs: Live_Embed_Markdown_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown`)
};

const it_live_embed_markdown_label = /** @type {(inputs: Live_Embed_Markdown_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown`)
};

const nl_live_embed_markdown_label = /** @type {(inputs: Live_Embed_Markdown_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown`)
};

const pl_live_embed_markdown_label = /** @type {(inputs: Live_Embed_Markdown_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown`)
};

const pt_live_embed_markdown_label = /** @type {(inputs: Live_Embed_Markdown_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown`)
};

const ru_live_embed_markdown_label = /** @type {(inputs: Live_Embed_Markdown_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown`)
};

const sv_live_embed_markdown_label = /** @type {(inputs: Live_Embed_Markdown_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown`)
};

const tr_live_embed_markdown_label = /** @type {(inputs: Live_Embed_Markdown_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown`)
};

const zh_live_embed_markdown_label = /** @type {(inputs: Live_Embed_Markdown_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown`)
};

const ja_live_embed_markdown_label = /** @type {(inputs: Live_Embed_Markdown_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown`)
};

/**
* | output |
* | --- |
* | "Markdown" |
*
* @param {Live_Embed_Markdown_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const live_embed_markdown_label = /** @type {((inputs?: Live_Embed_Markdown_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Live_Embed_Markdown_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_live_embed_markdown_label(inputs)
	if (locale === "de") return de_live_embed_markdown_label(inputs)
	if (locale === "fr") return fr_live_embed_markdown_label(inputs)
	if (locale === "it") return it_live_embed_markdown_label(inputs)
	if (locale === "nl") return nl_live_embed_markdown_label(inputs)
	if (locale === "pl") return pl_live_embed_markdown_label(inputs)
	if (locale === "pt") return pt_live_embed_markdown_label(inputs)
	if (locale === "ru") return ru_live_embed_markdown_label(inputs)
	if (locale === "sv") return sv_live_embed_markdown_label(inputs)
	if (locale === "tr") return tr_live_embed_markdown_label(inputs)
	if (locale === "zh") return zh_live_embed_markdown_label(inputs)
	if (locale === "ja") return ja_live_embed_markdown_label(inputs)
	return en_live_embed_markdown_label(inputs)
});
