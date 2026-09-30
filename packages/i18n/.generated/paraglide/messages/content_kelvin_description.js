/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Kelvin_DescriptionInputs */

const en_content_kelvin_description = /** @type {(inputs: Content_Kelvin_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek lets you chat with Kelvin in Sons of the Forest and give him orders in plain words. How it works, its limits and what happens to your messages.`)
};

const es_content_kelvin_description = /** @type {(inputs: Content_Kelvin_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek te permite chatear con Kelvin en Sons of the Forest y darle órdenes con tus palabras. Cómo funciona, sus límites y qué pasa con tus mensajes.`)
};

const de_content_kelvin_description = /** @type {(inputs: Content_Kelvin_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mit KelvinSeek chattest du in Sons of the Forest mit Kelvin und gibst ihm Befehle in eigenen Worten. Wie es funktioniert, seine Grenzen und was mit deinen Nachrichten passiert.`)
};

const fr_content_kelvin_description = /** @type {(inputs: Content_Kelvin_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek vous permet de discuter avec Kelvin dans Sons of the Forest et de lui donner des ordres avec vos mots. Fonctionnement, limites et devenir de vos messages.`)
};

const it_content_kelvin_description = /** @type {(inputs: Content_Kelvin_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek ti permette di chattare con Kelvin in Sons of the Forest e dargli ordini con parole tue. Come funziona, i suoi limiti e cosa succede ai tuoi messaggi.`)
};

const nl_content_kelvin_description = /** @type {(inputs: Content_Kelvin_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Met KelvinSeek chat je met Kelvin in Sons of the Forest en geef je hem opdrachten in je eigen woorden. Hoe het werkt, de limieten en wat er met je berichten gebeurt.`)
};

const pl_content_kelvin_description = /** @type {(inputs: Content_Kelvin_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek pozwala rozmawiać z Kelvinem w Sons of the Forest i wydawać mu polecenia własnymi słowami. Jak działa, jakie ma limity i co dzieje się z twoimi wiadomościami.`)
};

const pt_content_kelvin_description = /** @type {(inputs: Content_Kelvin_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O KelvinSeek permite conversar com o Kelvin em Sons of the Forest e dar ordens com suas palavras. Como funciona, os limites e o que acontece com suas mensagens.`)
};

const ru_content_kelvin_description = /** @type {(inputs: Content_Kelvin_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek позволяет переписываться с Кельвином в Sons of the Forest и отдавать ему команды своими словами. Как это работает, какие есть ограничения и что происходит с вашими сообщениями.`)
};

const sv_content_kelvin_description = /** @type {(inputs: Content_Kelvin_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Med KelvinSeek chattar du med Kelvin i Sons of the Forest och ger honom order med egna ord. Hur det fungerar, gränserna och vad som händer med dina meddelanden.`)
};

const tr_content_kelvin_description = /** @type {(inputs: Content_Kelvin_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek ile Sons of the Forest’ta Kelvin’le sohbet edebilir, ona kendi sözlerinle emir verebilirsin. Nasıl çalıştığı, sınırları ve mesajlarına ne olduğu.`)
};

const zh_content_kelvin_description = /** @type {(inputs: Content_Kelvin_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek 让你在 Sons of the Forest 中与 Kelvin 聊天，并用自己的话给他下命令。了解它的工作方式、使用限制以及你的消息会如何处理。`)
};

const ja_content_kelvin_description = /** @type {(inputs: Content_Kelvin_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek を使うと、Sons of the Forest でケルヴィンとチャットし、自分の言葉で指示を出せます。仕組み、制限、メッセージの扱いについて。`)
};

/**
* | output |
* | --- |
* | "KelvinSeek lets you chat with Kelvin in Sons of the Forest and give him orders in plain words. How it works, its limits and what happens to your messages." |
*
* @param {Content_Kelvin_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_kelvin_description = /** @type {((inputs?: Content_Kelvin_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Kelvin_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_kelvin_description(inputs)
	if (locale === "de") return de_content_kelvin_description(inputs)
	if (locale === "fr") return fr_content_kelvin_description(inputs)
	if (locale === "it") return it_content_kelvin_description(inputs)
	if (locale === "nl") return nl_content_kelvin_description(inputs)
	if (locale === "pl") return pl_content_kelvin_description(inputs)
	if (locale === "pt") return pt_content_kelvin_description(inputs)
	if (locale === "ru") return ru_content_kelvin_description(inputs)
	if (locale === "sv") return sv_content_kelvin_description(inputs)
	if (locale === "tr") return tr_content_kelvin_description(inputs)
	if (locale === "zh") return zh_content_kelvin_description(inputs)
	if (locale === "ja") return ja_content_kelvin_description(inputs)
	return en_content_kelvin_description(inputs)
});
