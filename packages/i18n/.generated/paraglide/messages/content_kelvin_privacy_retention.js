/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ days: NonNullable<unknown> }} Content_Kelvin_Privacy_RetentionInputs */

const en_content_kelvin_privacy_retention = /** @type {(inputs: Content_Kelvin_Privacy_RetentionInputs) => LocalizedString} */ (i) => {const days__plural = registry.plural("en", i?.days, {});
	const days__number = registry.number("en", i?.days, {});
	if (days__plural === "one") return /** @type {LocalizedString} */ (`The last messages of each conversation are kept for ${days__number} day so Kelvin remembers the context, then deleted.`);
	return /** @type {LocalizedString} */ (`The last messages of each conversation are kept for ${days__number} days so Kelvin remembers the context, then deleted.`)
	
};

const es_content_kelvin_privacy_retention = /** @type {(inputs: Content_Kelvin_Privacy_RetentionInputs) => LocalizedString} */ (i) => {const days__plural = registry.plural("es", i?.days, {});
	const days__number = registry.number("es", i?.days, {});
	if (days__plural === "one") return /** @type {LocalizedString} */ (`Los últimos mensajes de cada conversación se guardan ${days__number} día para que Kelvin recuerde el contexto y luego se borran.`);
	return /** @type {LocalizedString} */ (`Los últimos mensajes de cada conversación se guardan ${days__number} días para que Kelvin recuerde el contexto y luego se borran.`)
	
};

const de_content_kelvin_privacy_retention = /** @type {(inputs: Content_Kelvin_Privacy_RetentionInputs) => LocalizedString} */ (i) => {const days__plural = registry.plural("de", i?.days, {});
	const days__number = registry.number("de", i?.days, {});
	if (days__plural === "one") return /** @type {LocalizedString} */ (`Die letzten Nachrichten jedes Gesprächs werden ${days__number} Tag gespeichert, damit Kelvin den Zusammenhang kennt, und dann gelöscht.`);
	return /** @type {LocalizedString} */ (`Die letzten Nachrichten jedes Gesprächs werden ${days__number} Tage gespeichert, damit Kelvin den Zusammenhang kennt, und dann gelöscht.`)
	
};

const fr_content_kelvin_privacy_retention = /** @type {(inputs: Content_Kelvin_Privacy_RetentionInputs) => LocalizedString} */ (i) => {const days__plural = registry.plural("fr", i?.days, {});
	const days__number = registry.number("fr", i?.days, {});
	if (days__plural === "one") return /** @type {LocalizedString} */ (`Les derniers messages de chaque conversation sont conservés ${days__number} jour pour que Kelvin garde le contexte, puis supprimés.`);
	return /** @type {LocalizedString} */ (`Les derniers messages de chaque conversation sont conservés ${days__number} jours pour que Kelvin garde le contexte, puis supprimés.`)
	
};

const it_content_kelvin_privacy_retention = /** @type {(inputs: Content_Kelvin_Privacy_RetentionInputs) => LocalizedString} */ (i) => {const days__plural = registry.plural("it", i?.days, {});
	const days__number = registry.number("it", i?.days, {});
	if (days__plural === "one") return /** @type {LocalizedString} */ (`Gli ultimi messaggi di ogni conversazione vengono conservati per ${days__number} giorno perché Kelvin ricordi il contesto, poi vengono eliminati.`);
	return /** @type {LocalizedString} */ (`Gli ultimi messaggi di ogni conversazione vengono conservati per ${days__number} giorni perché Kelvin ricordi il contesto, poi vengono eliminati.`)
	
};

const nl_content_kelvin_privacy_retention = /** @type {(inputs: Content_Kelvin_Privacy_RetentionInputs) => LocalizedString} */ (i) => {const days__plural = registry.plural("nl", i?.days, {});
	const days__number = registry.number("nl", i?.days, {});
	if (days__plural === "one") return /** @type {LocalizedString} */ (`De laatste berichten van elk gesprek worden ${days__number} dag bewaard zodat Kelvin de context kent, en daarna verwijderd.`);
	return /** @type {LocalizedString} */ (`De laatste berichten van elk gesprek worden ${days__number} dagen bewaard zodat Kelvin de context kent, en daarna verwijderd.`)
	
};

const pl_content_kelvin_privacy_retention = /** @type {(inputs: Content_Kelvin_Privacy_RetentionInputs) => LocalizedString} */ (i) => {const days__plural = registry.plural("pl", i?.days, {});
	const days__number = registry.number("pl", i?.days, {});
	if (days__plural === "one") return /** @type {LocalizedString} */ (`Ostatnie wiadomości każdej rozmowy są przechowywane przez ${days__number} dzień, aby Kelvin pamiętał kontekst, a potem usuwane.`);
	if (days__plural === "few") return /** @type {LocalizedString} */ (`Ostatnie wiadomości każdej rozmowy są przechowywane przez ${days__number} dni, aby Kelvin pamiętał kontekst, a potem usuwane.`);
	if (days__plural === "many") return /** @type {LocalizedString} */ (`Ostatnie wiadomości każdej rozmowy są przechowywane przez ${days__number} dni, aby Kelvin pamiętał kontekst, a potem usuwane.`);
	return /** @type {LocalizedString} */ (`Ostatnie wiadomości każdej rozmowy są przechowywane przez ${days__number} dnia, aby Kelvin pamiętał kontekst, a potem usuwane.`)
	
};

const pt_content_kelvin_privacy_retention = /** @type {(inputs: Content_Kelvin_Privacy_RetentionInputs) => LocalizedString} */ (i) => {const days__plural = registry.plural("pt", i?.days, {});
	const days__number = registry.number("pt", i?.days, {});
	if (days__plural === "one") return /** @type {LocalizedString} */ (`As últimas mensagens de cada conversa ficam guardadas por ${days__number} dia para o Kelvin lembrar do contexto e depois são apagadas.`);
	return /** @type {LocalizedString} */ (`As últimas mensagens de cada conversa ficam guardadas por ${days__number} dias para o Kelvin lembrar do contexto e depois são apagadas.`)
	
};

const ru_content_kelvin_privacy_retention = /** @type {(inputs: Content_Kelvin_Privacy_RetentionInputs) => LocalizedString} */ (i) => {const days__plural = registry.plural("ru", i?.days, {});
	const days__number = registry.number("ru", i?.days, {});
	if (days__plural === "one") return /** @type {LocalizedString} */ (`Последние сообщения каждого разговора хранятся ${days__number} день, чтобы Кельвин помнил контекст, а затем удаляются.`);
	if (days__plural === "few") return /** @type {LocalizedString} */ (`Последние сообщения каждого разговора хранятся ${days__number} дня, чтобы Кельвин помнил контекст, а затем удаляются.`);
	if (days__plural === "many") return /** @type {LocalizedString} */ (`Последние сообщения каждого разговора хранятся ${days__number} дней, чтобы Кельвин помнил контекст, а затем удаляются.`);
	return /** @type {LocalizedString} */ (`Последние сообщения каждого разговора хранятся ${days__number} дня, чтобы Кельвин помнил контекст, а затем удаляются.`)
	
};

const sv_content_kelvin_privacy_retention = /** @type {(inputs: Content_Kelvin_Privacy_RetentionInputs) => LocalizedString} */ (i) => {const days__plural = registry.plural("sv", i?.days, {});
	const days__number = registry.number("sv", i?.days, {});
	if (days__plural === "one") return /** @type {LocalizedString} */ (`De senaste meddelandena i varje konversation sparas i ${days__number} dag så att Kelvin minns sammanhanget, och raderas sedan.`);
	return /** @type {LocalizedString} */ (`De senaste meddelandena i varje konversation sparas i ${days__number} dagar så att Kelvin minns sammanhanget, och raderas sedan.`)
	
};

const tr_content_kelvin_privacy_retention = /** @type {(inputs: Content_Kelvin_Privacy_RetentionInputs) => LocalizedString} */ (i) => {const days__plural = registry.plural("tr", i?.days, {});
	const days__number = registry.number("tr", i?.days, {});
	if (days__plural === "one") return /** @type {LocalizedString} */ (`Kelvin bağlamı hatırlasın diye her sohbetin son mesajları ${days__number} gün saklanır, sonra silinir.`);
	return /** @type {LocalizedString} */ (`Kelvin bağlamı hatırlasın diye her sohbetin son mesajları ${days__number} gün saklanır, sonra silinir.`)
	
};

const zh_content_kelvin_privacy_retention = /** @type {(inputs: Content_Kelvin_Privacy_RetentionInputs) => LocalizedString} */ (i) => {
	const days__plural = registry.plural("zh", i?.days, {});
	const days__number = registry.number("zh", i?.days, {});return /** @type {LocalizedString} */ (`每段对话的最近消息会保存 ${days__number} 天，以便 Kelvin 记住上下文，之后删除。`)
};

const ja_content_kelvin_privacy_retention = /** @type {(inputs: Content_Kelvin_Privacy_RetentionInputs) => LocalizedString} */ (i) => {
	const days__plural = registry.plural("ja", i?.days, {});
	const days__number = registry.number("ja", i?.days, {});return /** @type {LocalizedString} */ (`ケルヴィンが文脈を覚えていられるよう、各会話の直近のメッセージは ${days__number} 日間保存され、その後削除されます。`)
};

/**
* | days__plural | output |
* | --- | --- |
* | "one" | "The last messages of each conversation are kept for {days__number} day so Kelvin remembers the context, then deleted." |
* | * | "The last messages of each conversation are kept for {days__number} days so Kelvin remembers the context, then deleted." |
*
* @param {Content_Kelvin_Privacy_RetentionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_kelvin_privacy_retention = /** @type {((inputs: Content_Kelvin_Privacy_RetentionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Kelvin_Privacy_RetentionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_kelvin_privacy_retention(inputs)
	if (locale === "de") return de_content_kelvin_privacy_retention(inputs)
	if (locale === "fr") return fr_content_kelvin_privacy_retention(inputs)
	if (locale === "it") return it_content_kelvin_privacy_retention(inputs)
	if (locale === "nl") return nl_content_kelvin_privacy_retention(inputs)
	if (locale === "pl") return pl_content_kelvin_privacy_retention(inputs)
	if (locale === "pt") return pt_content_kelvin_privacy_retention(inputs)
	if (locale === "ru") return ru_content_kelvin_privacy_retention(inputs)
	if (locale === "sv") return sv_content_kelvin_privacy_retention(inputs)
	if (locale === "tr") return tr_content_kelvin_privacy_retention(inputs)
	if (locale === "zh") return zh_content_kelvin_privacy_retention(inputs)
	if (locale === "ja") return ja_content_kelvin_privacy_retention(inputs)
	return en_content_kelvin_privacy_retention(inputs)
});
