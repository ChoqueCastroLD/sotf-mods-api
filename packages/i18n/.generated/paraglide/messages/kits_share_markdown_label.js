/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Share_Markdown_LabelInputs */

const en_kits_share_markdown_label = /** @type {(inputs: Kits_Share_Markdown_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown for Discord`)
};

const es_kits_share_markdown_label = /** @type {(inputs: Kits_Share_Markdown_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown para Discord`)
};

const de_kits_share_markdown_label = /** @type {(inputs: Kits_Share_Markdown_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown für Discord`)
};

const fr_kits_share_markdown_label = /** @type {(inputs: Kits_Share_Markdown_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown pour Discord`)
};

const it_kits_share_markdown_label = /** @type {(inputs: Kits_Share_Markdown_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown per Discord`)
};

const nl_kits_share_markdown_label = /** @type {(inputs: Kits_Share_Markdown_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown voor Discord`)
};

const pl_kits_share_markdown_label = /** @type {(inputs: Kits_Share_Markdown_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown dla Discorda`)
};

const pt_kits_share_markdown_label = /** @type {(inputs: Kits_Share_Markdown_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown para Discord`)
};

const ru_kits_share_markdown_label = /** @type {(inputs: Kits_Share_Markdown_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown для Discord`)
};

const sv_kits_share_markdown_label = /** @type {(inputs: Kits_Share_Markdown_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown för Discord`)
};

const tr_kits_share_markdown_label = /** @type {(inputs: Kits_Share_Markdown_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord için Markdown`)
};

const zh_kits_share_markdown_label = /** @type {(inputs: Kits_Share_Markdown_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`用于 Discord 的 Markdown`)
};

const ja_kits_share_markdown_label = /** @type {(inputs: Kits_Share_Markdown_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord 用 Markdown`)
};

/**
* | output |
* | --- |
* | "Markdown for Discord" |
*
* @param {Kits_Share_Markdown_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_share_markdown_label = /** @type {((inputs?: Kits_Share_Markdown_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Share_Markdown_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_share_markdown_label(inputs)
	if (locale === "de") return de_kits_share_markdown_label(inputs)
	if (locale === "fr") return fr_kits_share_markdown_label(inputs)
	if (locale === "it") return it_kits_share_markdown_label(inputs)
	if (locale === "nl") return nl_kits_share_markdown_label(inputs)
	if (locale === "pl") return pl_kits_share_markdown_label(inputs)
	if (locale === "pt") return pt_kits_share_markdown_label(inputs)
	if (locale === "ru") return ru_kits_share_markdown_label(inputs)
	if (locale === "sv") return sv_kits_share_markdown_label(inputs)
	if (locale === "tr") return tr_kits_share_markdown_label(inputs)
	if (locale === "zh") return zh_kits_share_markdown_label(inputs)
	if (locale === "ja") return ja_kits_share_markdown_label(inputs)
	return en_kits_share_markdown_label(inputs)
});
