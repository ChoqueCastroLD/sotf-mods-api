/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Kelvin_How_3Inputs */

const en_content_kelvin_how_3 = /** @type {(inputs: Content_Kelvin_How_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Press T to type, write your message and press Enter.`)
};

const es_content_kelvin_how_3 = /** @type {(inputs: Content_Kelvin_How_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pulsa T para escribir, escribe tu mensaje y pulsa Intro.`)
};

const de_content_kelvin_how_3 = /** @type {(inputs: Content_Kelvin_How_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Drück T zum Schreiben, tippe deine Nachricht und drück Enter.`)
};

const fr_content_kelvin_how_3 = /** @type {(inputs: Content_Kelvin_How_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Appuyez sur T pour écrire, tapez votre message et appuyez sur Entrée.`)
};

const it_content_kelvin_how_3 = /** @type {(inputs: Content_Kelvin_How_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Premi T per scrivere, digita il messaggio e premi Invio.`)
};

const nl_content_kelvin_how_3 = /** @type {(inputs: Content_Kelvin_How_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Druk op T om te typen, schrijf je bericht en druk op Enter.`)
};

const pl_content_kelvin_how_3 = /** @type {(inputs: Content_Kelvin_How_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Naciśnij T, aby pisać, wpisz wiadomość i naciśnij Enter.`)
};

const pt_content_kelvin_how_3 = /** @type {(inputs: Content_Kelvin_How_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pressione T para digitar, escreva sua mensagem e pressione Enter.`)
};

const ru_content_kelvin_how_3 = /** @type {(inputs: Content_Kelvin_How_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нажмите T, напишите сообщение и нажмите Enter.`)
};

const sv_content_kelvin_how_3 = /** @type {(inputs: Content_Kelvin_How_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tryck T för att skriva, skriv ditt meddelande och tryck Enter.`)
};

const tr_content_kelvin_how_3 = /** @type {(inputs: Content_Kelvin_How_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yazmak için T’ye bas, mesajını yaz ve Enter’a bas.`)
};

const zh_content_kelvin_how_3 = /** @type {(inputs: Content_Kelvin_How_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`按 T 输入，写下消息后按回车。`)
};

const ja_content_kelvin_how_3 = /** @type {(inputs: Content_Kelvin_How_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`T キーで入力を始め、メッセージを書いて Enter を押します。`)
};

/**
* | output |
* | --- |
* | "Press T to type, write your message and press Enter." |
*
* @param {Content_Kelvin_How_3Inputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_kelvin_how_3 = /** @type {((inputs?: Content_Kelvin_How_3Inputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Kelvin_How_3Inputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_kelvin_how_3(inputs)
	if (locale === "de") return de_content_kelvin_how_3(inputs)
	if (locale === "fr") return fr_content_kelvin_how_3(inputs)
	if (locale === "it") return it_content_kelvin_how_3(inputs)
	if (locale === "nl") return nl_content_kelvin_how_3(inputs)
	if (locale === "pl") return pl_content_kelvin_how_3(inputs)
	if (locale === "pt") return pt_content_kelvin_how_3(inputs)
	if (locale === "ru") return ru_content_kelvin_how_3(inputs)
	if (locale === "sv") return sv_content_kelvin_how_3(inputs)
	if (locale === "tr") return tr_content_kelvin_how_3(inputs)
	if (locale === "zh") return zh_content_kelvin_how_3(inputs)
	if (locale === "ja") return ja_content_kelvin_how_3(inputs)
	return en_content_kelvin_how_3(inputs)
});
