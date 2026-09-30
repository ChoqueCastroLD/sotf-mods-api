/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ language: NonNullable<unknown> }} Translations_Notice_AuthorInputs */

const en_translations_notice_author = /** @type {(inputs: Translations_Notice_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Translated from ${i?.language} by the creator`)
};

const es_translations_notice_author = /** @type {(inputs: Translations_Notice_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Traducido del ${i?.language} por el creador`)
};

const de_translations_notice_author = /** @type {(inputs: Translations_Notice_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Vom Ersteller übersetzt aus dem Original (${i?.language})`)
};

const fr_translations_notice_author = /** @type {(inputs: Translations_Notice_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Traduit de : ${i?.language}, par le créateur`)
};

const it_translations_notice_author = /** @type {(inputs: Translations_Notice_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tradotto da: ${i?.language}, dal creatore`)
};

const nl_translations_notice_author = /** @type {(inputs: Translations_Notice_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Door de maker vertaald uit het origineel (${i?.language})`)
};

const pl_translations_notice_author = /** @type {(inputs: Translations_Notice_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Przetłumaczone przez twórcę z języka: ${i?.language}`)
};

const pt_translations_notice_author = /** @type {(inputs: Translations_Notice_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Traduzido do ${i?.language} pelo criador`)
};

const ru_translations_notice_author = /** @type {(inputs: Translations_Notice_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Переведено автором с языка: ${i?.language}`)
};

const sv_translations_notice_author = /** @type {(inputs: Translations_Notice_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Översatt av skaparen från originalet (${i?.language})`)
};

const tr_translations_notice_author = /** @type {(inputs: Translations_Notice_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Şu dilden yapımcı tarafından çevrildi: ${i?.language}`)
};

const zh_translations_notice_author = /** @type {(inputs: Translations_Notice_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`由作者译自${i?.language}`)
};

const ja_translations_notice_author = /** @type {(inputs: Translations_Notice_AuthorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`作者が${i?.language}から翻訳`)
};

/**
* | output |
* | --- |
* | "Translated from {language} by the creator" |
*
* @param {Translations_Notice_AuthorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const translations_notice_author = /** @type {((inputs: Translations_Notice_AuthorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Translations_Notice_AuthorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_translations_notice_author(inputs)
	if (locale === "de") return de_translations_notice_author(inputs)
	if (locale === "fr") return fr_translations_notice_author(inputs)
	if (locale === "it") return it_translations_notice_author(inputs)
	if (locale === "nl") return nl_translations_notice_author(inputs)
	if (locale === "pl") return pl_translations_notice_author(inputs)
	if (locale === "pt") return pt_translations_notice_author(inputs)
	if (locale === "ru") return ru_translations_notice_author(inputs)
	if (locale === "sv") return sv_translations_notice_author(inputs)
	if (locale === "tr") return tr_translations_notice_author(inputs)
	if (locale === "zh") return zh_translations_notice_author(inputs)
	if (locale === "ja") return ja_translations_notice_author(inputs)
	return en_translations_notice_author(inputs)
});
