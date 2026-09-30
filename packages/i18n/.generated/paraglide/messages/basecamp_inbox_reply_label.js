/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Inbox_Reply_LabelInputs */

const en_basecamp_inbox_reply_label = /** @type {(inputs: Basecamp_Inbox_Reply_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your reply`)
};

const es_basecamp_inbox_reply_label = /** @type {(inputs: Basecamp_Inbox_Reply_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu respuesta`)
};

const de_basecamp_inbox_reply_label = /** @type {(inputs: Basecamp_Inbox_Reply_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deine Antwort`)
};

const fr_basecamp_inbox_reply_label = /** @type {(inputs: Basecamp_Inbox_Reply_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta réponse`)
};

const it_basecamp_inbox_reply_label = /** @type {(inputs: Basecamp_Inbox_Reply_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La tua risposta`)
};

const nl_basecamp_inbox_reply_label = /** @type {(inputs: Basecamp_Inbox_Reply_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jouw antwoord`)
};

const pl_basecamp_inbox_reply_label = /** @type {(inputs: Basecamp_Inbox_Reply_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twoja odpowiedź`)
};

const pt_basecamp_inbox_reply_label = /** @type {(inputs: Basecamp_Inbox_Reply_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sua resposta`)
};

const ru_basecamp_inbox_reply_label = /** @type {(inputs: Basecamp_Inbox_Reply_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваш ответ`)
};

const sv_basecamp_inbox_reply_label = /** @type {(inputs: Basecamp_Inbox_Reply_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ditt svar`)
};

const tr_basecamp_inbox_reply_label = /** @type {(inputs: Basecamp_Inbox_Reply_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yanıtın`)
};

const zh_basecamp_inbox_reply_label = /** @type {(inputs: Basecamp_Inbox_Reply_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的回复`)
};

const ja_basecamp_inbox_reply_label = /** @type {(inputs: Basecamp_Inbox_Reply_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`あなたの返信`)
};

/**
* | output |
* | --- |
* | "Your reply" |
*
* @param {Basecamp_Inbox_Reply_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_inbox_reply_label = /** @type {((inputs?: Basecamp_Inbox_Reply_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Inbox_Reply_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_inbox_reply_label(inputs)
	if (locale === "de") return de_basecamp_inbox_reply_label(inputs)
	if (locale === "fr") return fr_basecamp_inbox_reply_label(inputs)
	if (locale === "it") return it_basecamp_inbox_reply_label(inputs)
	if (locale === "nl") return nl_basecamp_inbox_reply_label(inputs)
	if (locale === "pl") return pl_basecamp_inbox_reply_label(inputs)
	if (locale === "pt") return pt_basecamp_inbox_reply_label(inputs)
	if (locale === "ru") return ru_basecamp_inbox_reply_label(inputs)
	if (locale === "sv") return sv_basecamp_inbox_reply_label(inputs)
	if (locale === "tr") return tr_basecamp_inbox_reply_label(inputs)
	if (locale === "zh") return zh_basecamp_inbox_reply_label(inputs)
	if (locale === "ja") return ja_basecamp_inbox_reply_label(inputs)
	return en_basecamp_inbox_reply_label(inputs)
});
