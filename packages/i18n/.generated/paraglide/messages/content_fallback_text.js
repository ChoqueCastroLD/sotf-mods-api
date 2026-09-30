/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ language: NonNullable<unknown>, original: NonNullable<unknown> }} Content_Fallback_TextInputs */

const en_content_fallback_text = /** @type {(inputs: Content_Fallback_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`This page is not available in ${i?.language} yet, so you are reading the ${i?.original} original.`)
};

const es_content_fallback_text = /** @type {(inputs: Content_Fallback_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Esta página aún no está disponible en ${i?.language}, así que estás leyendo el original en ${i?.original}.`)
};

const de_content_fallback_text = /** @type {(inputs: Content_Fallback_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Diese Seite ist noch nicht auf ${i?.language} verfügbar, daher liest du das Original auf ${i?.original}.`)
};

const fr_content_fallback_text = /** @type {(inputs: Content_Fallback_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Cette page n’est pas encore disponible en ${i?.language}, vous lisez donc l’original en ${i?.original}.`)
};

const it_content_fallback_text = /** @type {(inputs: Content_Fallback_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Questa pagina non è ancora disponibile in ${i?.language}, quindi stai leggendo l’originale in ${i?.original}.`)
};

const nl_content_fallback_text = /** @type {(inputs: Content_Fallback_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Deze pagina is nog niet beschikbaar in het ${i?.language}, dus je leest het origineel in het ${i?.original}.`)
};

const pl_content_fallback_text = /** @type {(inputs: Content_Fallback_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ta strona nie jest jeszcze dostępna w języku: ${i?.language}, więc czytasz oryginał w języku: ${i?.original}.`)
};

const pt_content_fallback_text = /** @type {(inputs: Content_Fallback_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Esta página ainda não está disponível em ${i?.language}, então você está lendo o original em ${i?.original}.`)
};

const ru_content_fallback_text = /** @type {(inputs: Content_Fallback_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Эта страница пока недоступна на языке «${i?.language}», поэтому вы читаете оригинал на языке «${i?.original}».`)
};

const sv_content_fallback_text = /** @type {(inputs: Content_Fallback_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Den här sidan finns inte på ${i?.language} än, så du läser originalet på ${i?.original}.`)
};

const tr_content_fallback_text = /** @type {(inputs: Content_Fallback_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bu sayfa henüz ${i?.language} dilinde yok, bu yüzden ${i?.original} aslını okuyorsun.`)
};

const zh_content_fallback_text = /** @type {(inputs: Content_Fallback_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`本页尚无${i?.language}版本，你正在阅读${i?.original}原文。`)
};

const ja_content_fallback_text = /** @type {(inputs: Content_Fallback_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`このページはまだ${i?.language}に対応していないため、${i?.original}の原文を表示しています。`)
};

/**
* | output |
* | --- |
* | "This page is not available in {language} yet, so you are reading the {original} original." |
*
* @param {Content_Fallback_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_fallback_text = /** @type {((inputs: Content_Fallback_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Fallback_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_fallback_text(inputs)
	if (locale === "de") return de_content_fallback_text(inputs)
	if (locale === "fr") return fr_content_fallback_text(inputs)
	if (locale === "it") return it_content_fallback_text(inputs)
	if (locale === "nl") return nl_content_fallback_text(inputs)
	if (locale === "pl") return pl_content_fallback_text(inputs)
	if (locale === "pt") return pt_content_fallback_text(inputs)
	if (locale === "ru") return ru_content_fallback_text(inputs)
	if (locale === "sv") return sv_content_fallback_text(inputs)
	if (locale === "tr") return tr_content_fallback_text(inputs)
	if (locale === "zh") return zh_content_fallback_text(inputs)
	if (locale === "ja") return ja_content_fallback_text(inputs)
	return en_content_fallback_text(inputs)
});
