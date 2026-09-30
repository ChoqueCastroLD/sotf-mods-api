/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Share_Markdown_LabelInputs */

const en_mod_share_markdown_label = /** @type {(inputs: Mod_Share_Markdown_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown for Discord`)
};

const es_mod_share_markdown_label = /** @type {(inputs: Mod_Share_Markdown_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown para Discord`)
};

const de_mod_share_markdown_label = /** @type {(inputs: Mod_Share_Markdown_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown für Discord`)
};

const fr_mod_share_markdown_label = /** @type {(inputs: Mod_Share_Markdown_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown pour Discord`)
};

const it_mod_share_markdown_label = /** @type {(inputs: Mod_Share_Markdown_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown per Discord`)
};

const nl_mod_share_markdown_label = /** @type {(inputs: Mod_Share_Markdown_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown voor Discord`)
};

const pl_mod_share_markdown_label = /** @type {(inputs: Mod_Share_Markdown_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown dla Discorda`)
};

const pt_mod_share_markdown_label = /** @type {(inputs: Mod_Share_Markdown_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown para o Discord`)
};

const ru_mod_share_markdown_label = /** @type {(inputs: Mod_Share_Markdown_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown для Discord`)
};

const sv_mod_share_markdown_label = /** @type {(inputs: Mod_Share_Markdown_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown för Discord`)
};

const tr_mod_share_markdown_label = /** @type {(inputs: Mod_Share_Markdown_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord için Markdown`)
};

const zh_mod_share_markdown_label = /** @type {(inputs: Mod_Share_Markdown_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord 用 Markdown`)
};

const ja_mod_share_markdown_label = /** @type {(inputs: Mod_Share_Markdown_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord 用 Markdown`)
};

/**
* | output |
* | --- |
* | "Markdown for Discord" |
*
* @param {Mod_Share_Markdown_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_share_markdown_label = /** @type {((inputs?: Mod_Share_Markdown_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Share_Markdown_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_share_markdown_label(inputs)
	if (locale === "de") return de_mod_share_markdown_label(inputs)
	if (locale === "fr") return fr_mod_share_markdown_label(inputs)
	if (locale === "it") return it_mod_share_markdown_label(inputs)
	if (locale === "nl") return nl_mod_share_markdown_label(inputs)
	if (locale === "pl") return pl_mod_share_markdown_label(inputs)
	if (locale === "pt") return pt_mod_share_markdown_label(inputs)
	if (locale === "ru") return ru_mod_share_markdown_label(inputs)
	if (locale === "sv") return sv_mod_share_markdown_label(inputs)
	if (locale === "tr") return tr_mod_share_markdown_label(inputs)
	if (locale === "zh") return zh_mod_share_markdown_label(inputs)
	if (locale === "ja") return ja_mod_share_markdown_label(inputs)
	return en_mod_share_markdown_label(inputs)
});
