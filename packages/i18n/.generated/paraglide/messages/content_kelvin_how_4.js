/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Kelvin_How_4Inputs */

const en_content_kelvin_how_4 = /** @type {(inputs: Content_Kelvin_How_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Or use the console: “askkelvin …” sends a message, “clearkelvinchathistory” starts a fresh conversation.`)
};

const es_content_kelvin_how_4 = /** @type {(inputs: Content_Kelvin_How_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O usa la consola: «askkelvin …» envía un mensaje y «clearkelvinchathistory» empieza una conversación nueva.`)
};

const de_content_kelvin_how_4 = /** @type {(inputs: Content_Kelvin_How_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oder nutze die Konsole: „askkelvin …“ sendet eine Nachricht, „clearkelvinchathistory“ startet ein neues Gespräch.`)
};

const fr_content_kelvin_how_4 = /** @type {(inputs: Content_Kelvin_How_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ou utilisez la console : « askkelvin … » envoie un message, « clearkelvinchathistory » démarre une nouvelle conversation.`)
};

const it_content_kelvin_how_4 = /** @type {(inputs: Content_Kelvin_How_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oppure usa la console: «askkelvin …» invia un messaggio, «clearkelvinchathistory» avvia una nuova conversazione.`)
};

const nl_content_kelvin_how_4 = /** @type {(inputs: Content_Kelvin_How_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Of gebruik de console: ‘askkelvin …’ stuurt een bericht, ‘clearkelvinchathistory’ begint een nieuw gesprek.`)
};

const pl_content_kelvin_how_4 = /** @type {(inputs: Content_Kelvin_How_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Albo użyj konsoli: „askkelvin …” wysyła wiadomość, a „clearkelvinchathistory” rozpoczyna nową rozmowę.`)
};

const pt_content_kelvin_how_4 = /** @type {(inputs: Content_Kelvin_How_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ou use o console: “askkelvin …” envia uma mensagem e “clearkelvinchathistory” começa uma conversa nova.`)
};

const ru_content_kelvin_how_4 = /** @type {(inputs: Content_Kelvin_How_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Или используйте консоль: «askkelvin …» отправляет сообщение, «clearkelvinchathistory» начинает разговор заново.`)
};

const sv_content_kelvin_how_4 = /** @type {(inputs: Content_Kelvin_How_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eller använd konsolen: ”askkelvin …” skickar ett meddelande och ”clearkelvinchathistory” startar en ny konversation.`)
};

const tr_content_kelvin_how_4 = /** @type {(inputs: Content_Kelvin_How_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ya da konsolu kullan: “askkelvin …” mesaj gönderir, “clearkelvinchathistory” yeni bir sohbet başlatır.`)
};

const zh_content_kelvin_how_4 = /** @type {(inputs: Content_Kelvin_How_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`或者使用控制台：“askkelvin …”发送消息，“clearkelvinchathistory”开始新对话。`)
};

const ja_content_kelvin_how_4 = /** @type {(inputs: Content_Kelvin_How_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`またはコンソールで「askkelvin …」と入力するとメッセージを送信、「clearkelvinchathistory」で新しい会話を始めます。`)
};

/**
* | output |
* | --- |
* | "Or use the console: “askkelvin …” sends a message, “clearkelvinchathistory” starts a fresh conversation." |
*
* @param {Content_Kelvin_How_4Inputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_kelvin_how_4 = /** @type {((inputs?: Content_Kelvin_How_4Inputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Kelvin_How_4Inputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_kelvin_how_4(inputs)
	if (locale === "de") return de_content_kelvin_how_4(inputs)
	if (locale === "fr") return fr_content_kelvin_how_4(inputs)
	if (locale === "it") return it_content_kelvin_how_4(inputs)
	if (locale === "nl") return nl_content_kelvin_how_4(inputs)
	if (locale === "pl") return pl_content_kelvin_how_4(inputs)
	if (locale === "pt") return pt_content_kelvin_how_4(inputs)
	if (locale === "ru") return ru_content_kelvin_how_4(inputs)
	if (locale === "sv") return sv_content_kelvin_how_4(inputs)
	if (locale === "tr") return tr_content_kelvin_how_4(inputs)
	if (locale === "zh") return zh_content_kelvin_how_4(inputs)
	if (locale === "ja") return ja_content_kelvin_how_4(inputs)
	return en_content_kelvin_how_4(inputs)
});
