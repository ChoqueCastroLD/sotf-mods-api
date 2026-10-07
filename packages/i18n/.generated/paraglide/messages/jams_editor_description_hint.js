/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Description_HintInputs */

const en_jams_editor_description_hint = /** @type {(inputs: Jams_Editor_Description_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What the jam is about. Markdown is supported.`)
};

const es_jams_editor_description_hint = /** @type {(inputs: Jams_Editor_Description_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De qué trata el jam. Admite Markdown.`)
};

const de_jams_editor_description_hint = /** @type {(inputs: Jams_Editor_Description_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Worum es im Jam geht. Markdown wird unterstützt.`)
};

const fr_jams_editor_description_hint = /** @type {(inputs: Jams_Editor_Description_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De quoi parle le jam. Le Markdown est pris en charge.`)
};

const it_jams_editor_description_hint = /** @type {(inputs: Jams_Editor_Description_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Di cosa parla il jam. Markdown supportato.`)
};

const nl_jams_editor_description_hint = /** @type {(inputs: Jams_Editor_Description_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Waar de jam over gaat. Markdown wordt ondersteund.`)
};

const pl_jams_editor_description_hint = /** @type {(inputs: Jams_Editor_Description_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O czym jest jam. Obsługiwany jest Markdown.`)
};

const pt_jams_editor_description_hint = /** @type {(inputs: Jams_Editor_Description_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sobre o que é a jam. Aceita Markdown.`)
};

const ru_jams_editor_description_hint = /** @type {(inputs: Jams_Editor_Description_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`О чём этот джем. Поддерживается Markdown.`)
};

const sv_jams_editor_description_hint = /** @type {(inputs: Jams_Editor_Description_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vad jammen handlar om. Markdown stöds.`)
};

const tr_jams_editor_description_hint = /** @type {(inputs: Jams_Editor_Description_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam’in konusu. Markdown desteklenir.`)
};

const zh_jams_editor_description_hint = /** @type {(inputs: Jams_Editor_Description_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam 的内容介绍，支持 Markdown。`)
};

const ja_jams_editor_description_hint = /** @type {(inputs: Jams_Editor_Description_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ジャムの内容です。Markdown が使えます。`)
};

/**
* | output |
* | --- |
* | "What the jam is about. Markdown is supported." |
*
* @param {Jams_Editor_Description_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_description_hint = /** @type {((inputs?: Jams_Editor_Description_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Description_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_description_hint(inputs)
	if (locale === "de") return de_jams_editor_description_hint(inputs)
	if (locale === "fr") return fr_jams_editor_description_hint(inputs)
	if (locale === "it") return it_jams_editor_description_hint(inputs)
	if (locale === "nl") return nl_jams_editor_description_hint(inputs)
	if (locale === "pl") return pl_jams_editor_description_hint(inputs)
	if (locale === "pt") return pt_jams_editor_description_hint(inputs)
	if (locale === "ru") return ru_jams_editor_description_hint(inputs)
	if (locale === "sv") return sv_jams_editor_description_hint(inputs)
	if (locale === "tr") return tr_jams_editor_description_hint(inputs)
	if (locale === "zh") return zh_jams_editor_description_hint(inputs)
	if (locale === "ja") return ja_jams_editor_description_hint(inputs)
	return en_jams_editor_description_hint(inputs)
});
