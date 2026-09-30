/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Kelvin_LeadInputs */

const en_content_kelvin_lead = /** @type {(inputs: Content_Kelvin_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Write to Kelvin in plain words and he answers — and does what you ask, from fetching logs to building a shelter.`)
};

const es_content_kelvin_lead = /** @type {(inputs: Content_Kelvin_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escríbele a Kelvin con tus palabras y te responde, y hace lo que le pides: desde traer troncos hasta levantar un refugio.`)
};

const de_content_kelvin_lead = /** @type {(inputs: Content_Kelvin_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schreib Kelvin in eigenen Worten, und er antwortet – und tut, worum du ihn bittest, vom Holzholen bis zum Unterstand.`)
};

const fr_content_kelvin_lead = /** @type {(inputs: Content_Kelvin_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Écrivez à Kelvin avec vos propres mots : il répond, et fait ce que vous demandez, de la récolte de bûches à la construction d’un abri.`)
};

const it_content_kelvin_lead = /** @type {(inputs: Content_Kelvin_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scrivi a Kelvin con parole tue: ti risponde e fa quello che chiedi, dal raccogliere tronchi al costruire un riparo.`)
};

const nl_content_kelvin_lead = /** @type {(inputs: Content_Kelvin_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schrijf Kelvin in je eigen woorden: hij antwoordt en doet wat je vraagt, van hout halen tot een schuilplaats bouwen.`)
};

const pl_content_kelvin_lead = /** @type {(inputs: Content_Kelvin_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Napisz do Kelvina własnymi słowami: odpowie i zrobi, o co prosisz, od przyniesienia drewna po zbudowanie schronienia.`)
};

const pt_content_kelvin_lead = /** @type {(inputs: Content_Kelvin_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escreva para o Kelvin com suas palavras: ele responde e faz o que você pede, de buscar toras a montar um abrigo.`)
};

const ru_content_kelvin_lead = /** @type {(inputs: Content_Kelvin_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Напишите Кельвину своими словами — он ответит и сделает, что просите: от сбора брёвен до постройки укрытия.`)
};

const sv_content_kelvin_lead = /** @type {(inputs: Content_Kelvin_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skriv till Kelvin med egna ord – han svarar och gör det du ber om, från att hämta stockar till att bygga ett skydd.`)
};

const tr_content_kelvin_lead = /** @type {(inputs: Content_Kelvin_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kelvin’e kendi sözlerinle yaz; cevap verir ve istediğini yapar: kütük toplamaktan barınak kurmaya kadar.`)
};

const zh_content_kelvin_lead = /** @type {(inputs: Content_Kelvin_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`用自己的话写给 Kelvin，他会回应并照做——从搬木头到搭建庇护所。`)
};

const ja_content_kelvin_lead = /** @type {(inputs: Content_Kelvin_LeadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自分の言葉でケルヴィンに書けば、返事をして頼んだことをやってくれます。丸太集めからシェルター作りまで。`)
};

/**
* | output |
* | --- |
* | "Write to Kelvin in plain words and he answers — and does what you ask, from fetching logs to building a shelter." |
*
* @param {Content_Kelvin_LeadInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_kelvin_lead = /** @type {((inputs?: Content_Kelvin_LeadInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Kelvin_LeadInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_kelvin_lead(inputs)
	if (locale === "de") return de_content_kelvin_lead(inputs)
	if (locale === "fr") return fr_content_kelvin_lead(inputs)
	if (locale === "it") return it_content_kelvin_lead(inputs)
	if (locale === "nl") return nl_content_kelvin_lead(inputs)
	if (locale === "pl") return pl_content_kelvin_lead(inputs)
	if (locale === "pt") return pt_content_kelvin_lead(inputs)
	if (locale === "ru") return ru_content_kelvin_lead(inputs)
	if (locale === "sv") return sv_content_kelvin_lead(inputs)
	if (locale === "tr") return tr_content_kelvin_lead(inputs)
	if (locale === "zh") return zh_content_kelvin_lead(inputs)
	if (locale === "ja") return ja_content_kelvin_lead(inputs)
	return en_content_kelvin_lead(inputs)
});
