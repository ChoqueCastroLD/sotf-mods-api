/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Editor_ItalicInputs */

const en_social_editor_italic = /** @type {(inputs: Social_Editor_ItalicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Italic`)
};

const es_social_editor_italic = /** @type {(inputs: Social_Editor_ItalicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cursiva`)
};

const de_social_editor_italic = /** @type {(inputs: Social_Editor_ItalicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kursiv`)
};

const fr_social_editor_italic = /** @type {(inputs: Social_Editor_ItalicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Italique`)
};

const it_social_editor_italic = /** @type {(inputs: Social_Editor_ItalicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Corsivo`)
};

const nl_social_editor_italic = /** @type {(inputs: Social_Editor_ItalicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cursief`)
};

const pl_social_editor_italic = /** @type {(inputs: Social_Editor_ItalicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kursywa`)
};

const pt_social_editor_italic = /** @type {(inputs: Social_Editor_ItalicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Itálico`)
};

const ru_social_editor_italic = /** @type {(inputs: Social_Editor_ItalicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Курсив`)
};

const sv_social_editor_italic = /** @type {(inputs: Social_Editor_ItalicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kursiv`)
};

const tr_social_editor_italic = /** @type {(inputs: Social_Editor_ItalicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İtalik`)
};

const zh_social_editor_italic = /** @type {(inputs: Social_Editor_ItalicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`斜体`)
};

const ja_social_editor_italic = /** @type {(inputs: Social_Editor_ItalicInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`斜体`)
};

/**
* | output |
* | --- |
* | "Italic" |
*
* @param {Social_Editor_ItalicInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_editor_italic = /** @type {((inputs?: Social_Editor_ItalicInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Editor_ItalicInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_editor_italic(inputs)
	if (locale === "de") return de_social_editor_italic(inputs)
	if (locale === "fr") return fr_social_editor_italic(inputs)
	if (locale === "it") return it_social_editor_italic(inputs)
	if (locale === "nl") return nl_social_editor_italic(inputs)
	if (locale === "pl") return pl_social_editor_italic(inputs)
	if (locale === "pt") return pt_social_editor_italic(inputs)
	if (locale === "ru") return ru_social_editor_italic(inputs)
	if (locale === "sv") return sv_social_editor_italic(inputs)
	if (locale === "tr") return tr_social_editor_italic(inputs)
	if (locale === "zh") return zh_social_editor_italic(inputs)
	if (locale === "ja") return ja_social_editor_italic(inputs)
	return en_social_editor_italic(inputs)
});
