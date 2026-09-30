/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Kelvin_Privacy_AiInputs */

const en_content_kelvin_privacy_ai = /** @type {(inputs: Content_Kelvin_Privacy_AiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The text of your messages is sent to the AI provider to generate the answer. Don’t write personal information.`)
};

const es_content_kelvin_privacy_ai = /** @type {(inputs: Content_Kelvin_Privacy_AiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El texto de tus mensajes se envía al proveedor de IA para generar la respuesta. No escribas información personal.`)
};

const de_content_kelvin_privacy_ai = /** @type {(inputs: Content_Kelvin_Privacy_AiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der Text deiner Nachrichten wird an den KI-Anbieter gesendet, um die Antwort zu erzeugen. Schreib keine persönlichen Daten.`)
};

const fr_content_kelvin_privacy_ai = /** @type {(inputs: Content_Kelvin_Privacy_AiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le texte de vos messages est envoyé au fournisseur d’IA pour générer la réponse. N’écrivez pas d’informations personnelles.`)
};

const it_content_kelvin_privacy_ai = /** @type {(inputs: Content_Kelvin_Privacy_AiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il testo dei tuoi messaggi viene inviato al fornitore di IA per generare la risposta. Non scrivere dati personali.`)
};

const nl_content_kelvin_privacy_ai = /** @type {(inputs: Content_Kelvin_Privacy_AiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De tekst van je berichten wordt naar de AI-aanbieder gestuurd om het antwoord te maken. Schrijf geen persoonlijke gegevens.`)
};

const pl_content_kelvin_privacy_ai = /** @type {(inputs: Content_Kelvin_Privacy_AiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Treść twoich wiadomości trafia do dostawcy AI, aby wygenerować odpowiedź. Nie wpisuj danych osobowych.`)
};

const pt_content_kelvin_privacy_ai = /** @type {(inputs: Content_Kelvin_Privacy_AiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O texto das suas mensagens é enviado ao provedor de IA para gerar a resposta. Não escreva dados pessoais.`)
};

const ru_content_kelvin_privacy_ai = /** @type {(inputs: Content_Kelvin_Privacy_AiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Текст ваших сообщений отправляется ИИ-провайдеру, чтобы сгенерировать ответ. Не пишите личные данные.`)
};

const sv_content_kelvin_privacy_ai = /** @type {(inputs: Content_Kelvin_Privacy_AiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Texten i dina meddelanden skickas till AI-leverantören för att skapa svaret. Skriv inga personuppgifter.`)
};

const tr_content_kelvin_privacy_ai = /** @type {(inputs: Content_Kelvin_Privacy_AiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yanıtı oluşturmak için mesajlarının metni yapay zekâ sağlayıcısına gönderilir. Kişisel bilgi yazma.`)
};

const zh_content_kelvin_privacy_ai = /** @type {(inputs: Content_Kelvin_Privacy_AiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的消息文本会发送给 AI 提供商以生成回复。请不要填写个人信息。`)
};

const ja_content_kelvin_privacy_ai = /** @type {(inputs: Content_Kelvin_Privacy_AiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`返事を生成するため、メッセージの本文は AI プロバイダーに送信されます。個人情報は書かないでください。`)
};

/**
* | output |
* | --- |
* | "The text of your messages is sent to the AI provider to generate the answer. Don’t write personal information." |
*
* @param {Content_Kelvin_Privacy_AiInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_kelvin_privacy_ai = /** @type {((inputs?: Content_Kelvin_Privacy_AiInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Kelvin_Privacy_AiInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_kelvin_privacy_ai(inputs)
	if (locale === "de") return de_content_kelvin_privacy_ai(inputs)
	if (locale === "fr") return fr_content_kelvin_privacy_ai(inputs)
	if (locale === "it") return it_content_kelvin_privacy_ai(inputs)
	if (locale === "nl") return nl_content_kelvin_privacy_ai(inputs)
	if (locale === "pl") return pl_content_kelvin_privacy_ai(inputs)
	if (locale === "pt") return pt_content_kelvin_privacy_ai(inputs)
	if (locale === "ru") return ru_content_kelvin_privacy_ai(inputs)
	if (locale === "sv") return sv_content_kelvin_privacy_ai(inputs)
	if (locale === "tr") return tr_content_kelvin_privacy_ai(inputs)
	if (locale === "zh") return zh_content_kelvin_privacy_ai(inputs)
	if (locale === "ja") return ja_content_kelvin_privacy_ai(inputs)
	return en_content_kelvin_privacy_ai(inputs)
});
