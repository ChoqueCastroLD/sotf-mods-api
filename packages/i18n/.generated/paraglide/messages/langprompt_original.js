/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ language: NonNullable<unknown> }} Langprompt_OriginalInputs */

const en_langprompt_original = /** @type {(inputs: Langprompt_OriginalInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`View original (${i?.language})`)
};

const es_langprompt_original = /** @type {(inputs: Langprompt_OriginalInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ver el original (${i?.language})`)
};

const de_langprompt_original = /** @type {(inputs: Langprompt_OriginalInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Original ansehen (${i?.language})`)
};

const fr_langprompt_original = /** @type {(inputs: Langprompt_OriginalInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Voir l’original (${i?.language})`)
};

const it_langprompt_original = /** @type {(inputs: Langprompt_OriginalInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Vedi l’originale (${i?.language})`)
};

const nl_langprompt_original = /** @type {(inputs: Langprompt_OriginalInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Origineel bekijken (${i?.language})`)
};

const pl_langprompt_original = /** @type {(inputs: Langprompt_OriginalInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zobacz oryginał (${i?.language})`)
};

const pt_langprompt_original = /** @type {(inputs: Langprompt_OriginalInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ver o original (${i?.language})`)
};

const ru_langprompt_original = /** @type {(inputs: Langprompt_OriginalInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Смотреть оригинал (${i?.language})`)
};

const sv_langprompt_original = /** @type {(inputs: Langprompt_OriginalInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Visa originalet (${i?.language})`)
};

const tr_langprompt_original = /** @type {(inputs: Langprompt_OriginalInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Orijinali gör (${i?.language})`)
};

const zh_langprompt_original = /** @type {(inputs: Langprompt_OriginalInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`查看原文（${i?.language}）`)
};

const ja_langprompt_original = /** @type {(inputs: Langprompt_OriginalInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`原文を見る（${i?.language}）`)
};

/**
* | output |
* | --- |
* | "View original ({language})" |
*
* @param {Langprompt_OriginalInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const langprompt_original = /** @type {((inputs: Langprompt_OriginalInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Langprompt_OriginalInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_langprompt_original(inputs)
	if (locale === "de") return de_langprompt_original(inputs)
	if (locale === "fr") return fr_langprompt_original(inputs)
	if (locale === "it") return it_langprompt_original(inputs)
	if (locale === "nl") return nl_langprompt_original(inputs)
	if (locale === "pl") return pl_langprompt_original(inputs)
	if (locale === "pt") return pt_langprompt_original(inputs)
	if (locale === "ru") return ru_langprompt_original(inputs)
	if (locale === "sv") return sv_langprompt_original(inputs)
	if (locale === "tr") return tr_langprompt_original(inputs)
	if (locale === "zh") return zh_langprompt_original(inputs)
	if (locale === "ja") return ja_langprompt_original(inputs)
	return en_langprompt_original(inputs)
});
