/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ language: NonNullable<unknown> }} Translations_Notice_OriginalInputs */

const en_translations_notice_original = /** @type {(inputs: Translations_Notice_OriginalInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Original text in ${i?.language}`)
};

const es_translations_notice_original = /** @type {(inputs: Translations_Notice_OriginalInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Texto original en ${i?.language}`)
};

const de_translations_notice_original = /** @type {(inputs: Translations_Notice_OriginalInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Originaltext auf ${i?.language}`)
};

const fr_translations_notice_original = /** @type {(inputs: Translations_Notice_OriginalInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Texte original en ${i?.language}`)
};

const it_translations_notice_original = /** @type {(inputs: Translations_Notice_OriginalInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Testo originale in ${i?.language}`)
};

const nl_translations_notice_original = /** @type {(inputs: Translations_Notice_OriginalInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Originele tekst in het ${i?.language}`)
};

const pl_translations_notice_original = /** @type {(inputs: Translations_Notice_OriginalInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Oryginalny tekst (${i?.language})`)
};

const pt_translations_notice_original = /** @type {(inputs: Translations_Notice_OriginalInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Texto original em ${i?.language}`)
};

const ru_translations_notice_original = /** @type {(inputs: Translations_Notice_OriginalInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Оригинальный текст (${i?.language})`)
};

const sv_translations_notice_original = /** @type {(inputs: Translations_Notice_OriginalInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Originaltext på ${i?.language}`)
};

const tr_translations_notice_original = /** @type {(inputs: Translations_Notice_OriginalInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Özgün metin (${i?.language})`)
};

const zh_translations_notice_original = /** @type {(inputs: Translations_Notice_OriginalInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`原文（${i?.language}）`)
};

const ja_translations_notice_original = /** @type {(inputs: Translations_Notice_OriginalInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`原文（${i?.language}）`)
};

/**
* | output |
* | --- |
* | "Original text in {language}" |
*
* @param {Translations_Notice_OriginalInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const translations_notice_original = /** @type {((inputs: Translations_Notice_OriginalInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Translations_Notice_OriginalInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_translations_notice_original(inputs)
	if (locale === "de") return de_translations_notice_original(inputs)
	if (locale === "fr") return fr_translations_notice_original(inputs)
	if (locale === "it") return it_translations_notice_original(inputs)
	if (locale === "nl") return nl_translations_notice_original(inputs)
	if (locale === "pl") return pl_translations_notice_original(inputs)
	if (locale === "pt") return pt_translations_notice_original(inputs)
	if (locale === "ru") return ru_translations_notice_original(inputs)
	if (locale === "sv") return sv_translations_notice_original(inputs)
	if (locale === "tr") return tr_translations_notice_original(inputs)
	if (locale === "zh") return zh_translations_notice_original(inputs)
	if (locale === "ja") return ja_translations_notice_original(inputs)
	return en_translations_notice_original(inputs)
});
