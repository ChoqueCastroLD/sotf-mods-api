/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Translations_Original_NoteInputs */

const en_translations_original_note = /** @type {(inputs: Translations_Original_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Original text`)
};

const es_translations_original_note = /** @type {(inputs: Translations_Original_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Texto original`)
};

const de_translations_original_note = /** @type {(inputs: Translations_Original_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Originaltext`)
};

const fr_translations_original_note = /** @type {(inputs: Translations_Original_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Texte original`)
};

const it_translations_original_note = /** @type {(inputs: Translations_Original_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Testo originale`)
};

const nl_translations_original_note = /** @type {(inputs: Translations_Original_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Originele tekst`)
};

const pl_translations_original_note = /** @type {(inputs: Translations_Original_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tekst oryginalny`)
};

const pt_translations_original_note = /** @type {(inputs: Translations_Original_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Texto original`)
};

const ru_translations_original_note = /** @type {(inputs: Translations_Original_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Исходный текст`)
};

const sv_translations_original_note = /** @type {(inputs: Translations_Original_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Originaltext`)
};

const tr_translations_original_note = /** @type {(inputs: Translations_Original_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Orijinal metin`)
};

const zh_translations_original_note = /** @type {(inputs: Translations_Original_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`原文`)
};

const ja_translations_original_note = /** @type {(inputs: Translations_Original_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`原文`)
};

/**
* | output |
* | --- |
* | "Original text" |
*
* @param {Translations_Original_NoteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const translations_original_note = /** @type {((inputs?: Translations_Original_NoteInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Translations_Original_NoteInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_translations_original_note(inputs)
	if (locale === "de") return de_translations_original_note(inputs)
	if (locale === "fr") return fr_translations_original_note(inputs)
	if (locale === "it") return it_translations_original_note(inputs)
	if (locale === "nl") return nl_translations_original_note(inputs)
	if (locale === "pl") return pl_translations_original_note(inputs)
	if (locale === "pt") return pt_translations_original_note(inputs)
	if (locale === "ru") return ru_translations_original_note(inputs)
	if (locale === "sv") return sv_translations_original_note(inputs)
	if (locale === "tr") return tr_translations_original_note(inputs)
	if (locale === "zh") return zh_translations_original_note(inputs)
	if (locale === "ja") return ja_translations_original_note(inputs)
	return en_translations_original_note(inputs)
});
