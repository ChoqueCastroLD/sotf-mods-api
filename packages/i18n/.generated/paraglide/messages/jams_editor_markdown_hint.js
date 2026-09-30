/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Markdown_HintInputs */

const en_jams_editor_markdown_hint = /** @type {(inputs: Jams_Editor_Markdown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown is supported.`)
};

const es_jams_editor_markdown_hint = /** @type {(inputs: Jams_Editor_Markdown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se admite Markdown.`)
};

const de_jams_editor_markdown_hint = /** @type {(inputs: Jams_Editor_Markdown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown wird unterstützt.`)
};

const fr_jams_editor_markdown_hint = /** @type {(inputs: Jams_Editor_Markdown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown pris en charge.`)
};

const it_jams_editor_markdown_hint = /** @type {(inputs: Jams_Editor_Markdown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown supportato.`)
};

const nl_jams_editor_markdown_hint = /** @type {(inputs: Jams_Editor_Markdown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown wordt ondersteund.`)
};

const pl_jams_editor_markdown_hint = /** @type {(inputs: Jams_Editor_Markdown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obsługiwany jest Markdown.`)
};

const pt_jams_editor_markdown_hint = /** @type {(inputs: Jams_Editor_Markdown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown é compatível.`)
};

const ru_jams_editor_markdown_hint = /** @type {(inputs: Jams_Editor_Markdown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Поддерживается Markdown.`)
};

const sv_jams_editor_markdown_hint = /** @type {(inputs: Jams_Editor_Markdown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown stöds.`)
};

const tr_jams_editor_markdown_hint = /** @type {(inputs: Jams_Editor_Markdown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown desteklenir.`)
};

const zh_jams_editor_markdown_hint = /** @type {(inputs: Jams_Editor_Markdown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`支持 Markdown。`)
};

const ja_jams_editor_markdown_hint = /** @type {(inputs: Jams_Editor_Markdown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown を使用できます。`)
};

/**
* | output |
* | --- |
* | "Markdown is supported." |
*
* @param {Jams_Editor_Markdown_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_markdown_hint = /** @type {((inputs?: Jams_Editor_Markdown_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Markdown_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_markdown_hint(inputs)
	if (locale === "de") return de_jams_editor_markdown_hint(inputs)
	if (locale === "fr") return fr_jams_editor_markdown_hint(inputs)
	if (locale === "it") return it_jams_editor_markdown_hint(inputs)
	if (locale === "nl") return nl_jams_editor_markdown_hint(inputs)
	if (locale === "pl") return pl_jams_editor_markdown_hint(inputs)
	if (locale === "pt") return pt_jams_editor_markdown_hint(inputs)
	if (locale === "ru") return ru_jams_editor_markdown_hint(inputs)
	if (locale === "sv") return sv_jams_editor_markdown_hint(inputs)
	if (locale === "tr") return tr_jams_editor_markdown_hint(inputs)
	if (locale === "zh") return zh_jams_editor_markdown_hint(inputs)
	if (locale === "ja") return ja_jams_editor_markdown_hint(inputs)
	return en_jams_editor_markdown_hint(inputs)
});
