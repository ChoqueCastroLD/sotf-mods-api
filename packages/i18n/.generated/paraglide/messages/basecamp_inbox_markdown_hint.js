/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Inbox_Markdown_HintInputs */

const en_basecamp_inbox_markdown_hint = /** @type {(inputs: Basecamp_Inbox_Markdown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown works. Ctrl+Enter sends.`)
};

const es_basecamp_inbox_markdown_hint = /** @type {(inputs: Basecamp_Inbox_Markdown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Admite Markdown. Ctrl+Intro envía.`)
};

const de_basecamp_inbox_markdown_hint = /** @type {(inputs: Basecamp_Inbox_Markdown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown funktioniert. Strg+Enter sendet.`)
};

const fr_basecamp_inbox_markdown_hint = /** @type {(inputs: Basecamp_Inbox_Markdown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown accepté. Ctrl+Entrée pour envoyer.`)
};

const it_basecamp_inbox_markdown_hint = /** @type {(inputs: Basecamp_Inbox_Markdown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supporta Markdown. Ctrl+Invio invia.`)
};

const nl_basecamp_inbox_markdown_hint = /** @type {(inputs: Basecamp_Inbox_Markdown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown werkt. Ctrl+Enter verstuurt.`)
};

const pl_basecamp_inbox_markdown_hint = /** @type {(inputs: Basecamp_Inbox_Markdown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Działa Markdown. Ctrl+Enter wysyła.`)
};

const pt_basecamp_inbox_markdown_hint = /** @type {(inputs: Basecamp_Inbox_Markdown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aceita Markdown. Ctrl+Enter envia.`)
};

const ru_basecamp_inbox_markdown_hint = /** @type {(inputs: Basecamp_Inbox_Markdown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Поддерживается Markdown. Ctrl+Enter — отправить.`)
};

const sv_basecamp_inbox_markdown_hint = /** @type {(inputs: Basecamp_Inbox_Markdown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown fungerar. Ctrl+Enter skickar.`)
};

const tr_basecamp_inbox_markdown_hint = /** @type {(inputs: Basecamp_Inbox_Markdown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown desteklenir. Ctrl+Enter gönderir.`)
};

const zh_basecamp_inbox_markdown_hint = /** @type {(inputs: Basecamp_Inbox_Markdown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`支持 Markdown。按 Ctrl+Enter 发送。`)
};

const ja_basecamp_inbox_markdown_hint = /** @type {(inputs: Basecamp_Inbox_Markdown_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown が使えます。Ctrl+Enter で送信。`)
};

/**
* | output |
* | --- |
* | "Markdown works. Ctrl+Enter sends." |
*
* @param {Basecamp_Inbox_Markdown_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_inbox_markdown_hint = /** @type {((inputs?: Basecamp_Inbox_Markdown_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Inbox_Markdown_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_inbox_markdown_hint(inputs)
	if (locale === "de") return de_basecamp_inbox_markdown_hint(inputs)
	if (locale === "fr") return fr_basecamp_inbox_markdown_hint(inputs)
	if (locale === "it") return it_basecamp_inbox_markdown_hint(inputs)
	if (locale === "nl") return nl_basecamp_inbox_markdown_hint(inputs)
	if (locale === "pl") return pl_basecamp_inbox_markdown_hint(inputs)
	if (locale === "pt") return pt_basecamp_inbox_markdown_hint(inputs)
	if (locale === "ru") return ru_basecamp_inbox_markdown_hint(inputs)
	if (locale === "sv") return sv_basecamp_inbox_markdown_hint(inputs)
	if (locale === "tr") return tr_basecamp_inbox_markdown_hint(inputs)
	if (locale === "zh") return zh_basecamp_inbox_markdown_hint(inputs)
	if (locale === "ja") return ja_basecamp_inbox_markdown_hint(inputs)
	return en_basecamp_inbox_markdown_hint(inputs)
});
