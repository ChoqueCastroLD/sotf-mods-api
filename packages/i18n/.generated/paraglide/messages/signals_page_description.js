/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_Page_DescriptionInputs */

const en_signals_page_description = /** @type {(inputs: Signals_Page_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Updates on what you follow, replies, mentions and news about your mods.`)
};

const es_signals_page_description = /** @type {(inputs: Signals_Page_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Novedades de lo que sigues, respuestas, menciones y noticias sobre tus mods.`)
};

const de_signals_page_description = /** @type {(inputs: Signals_Page_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Updates von allem, dem du folgst, Antworten, Erwähnungen und Neuigkeiten zu deinen Mods.`)
};

const fr_signals_page_description = /** @type {(inputs: Signals_Page_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les nouveautés de ce que vous suivez, les réponses, les mentions et l’actualité de vos mods.`)
};

const it_signals_page_description = /** @type {(inputs: Signals_Page_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aggiornamenti di ciò che segui, risposte, menzioni e novità sulle tue mod.`)
};

const nl_signals_page_description = /** @type {(inputs: Signals_Page_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Updates van wat je volgt, antwoorden, vermeldingen en nieuws over je mods.`)
};

const pl_signals_page_description = /** @type {(inputs: Signals_Page_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nowości z tego, co obserwujesz, odpowiedzi, wzmianki i wiadomości o twoich modach.`)
};

const pt_signals_page_description = /** @type {(inputs: Signals_Page_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Novidades do que você segue, respostas, menções e notícias sobre seus mods.`)
};

const ru_signals_page_description = /** @type {(inputs: Signals_Page_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Обновления того, на что вы подписаны, ответы, упоминания и новости о ваших модах.`)
};

const sv_signals_page_description = /** @type {(inputs: Signals_Page_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uppdateringar från det du följer, svar, omnämnanden och nyheter om dina moddar.`)
};

const tr_signals_page_description = /** @type {(inputs: Signals_Page_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Takip ettiklerinden güncellemeler, yanıtlar, bahsedilmeler ve modlarınla ilgili haberler.`)
};

const zh_signals_page_description = /** @type {(inputs: Signals_Page_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你关注内容的更新、回复、提及以及你的模组动态。`)
};

const ja_signals_page_description = /** @type {(inputs: Signals_Page_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フォロー中の更新、返信、メンション、あなたのMODに関するニュース。`)
};

/**
* | output |
* | --- |
* | "Updates on what you follow, replies, mentions and news about your mods." |
*
* @param {Signals_Page_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_page_description = /** @type {((inputs?: Signals_Page_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Page_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_page_description(inputs)
	if (locale === "de") return de_signals_page_description(inputs)
	if (locale === "fr") return fr_signals_page_description(inputs)
	if (locale === "it") return it_signals_page_description(inputs)
	if (locale === "nl") return nl_signals_page_description(inputs)
	if (locale === "pl") return pl_signals_page_description(inputs)
	if (locale === "pt") return pt_signals_page_description(inputs)
	if (locale === "ru") return ru_signals_page_description(inputs)
	if (locale === "sv") return sv_signals_page_description(inputs)
	if (locale === "tr") return tr_signals_page_description(inputs)
	if (locale === "zh") return zh_signals_page_description(inputs)
	if (locale === "ja") return ja_signals_page_description(inputs)
	return en_signals_page_description(inputs)
});
