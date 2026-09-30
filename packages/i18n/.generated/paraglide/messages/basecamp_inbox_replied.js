/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Inbox_RepliedInputs */

const en_basecamp_inbox_replied = /** @type {(inputs: Basecamp_Inbox_RepliedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reply posted`)
};

const es_basecamp_inbox_replied = /** @type {(inputs: Basecamp_Inbox_RepliedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Respuesta publicada`)
};

const de_basecamp_inbox_replied = /** @type {(inputs: Basecamp_Inbox_RepliedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Antwort veröffentlicht`)
};

const fr_basecamp_inbox_replied = /** @type {(inputs: Basecamp_Inbox_RepliedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Réponse publiée`)
};

const it_basecamp_inbox_replied = /** @type {(inputs: Basecamp_Inbox_RepliedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Risposta pubblicata`)
};

const nl_basecamp_inbox_replied = /** @type {(inputs: Basecamp_Inbox_RepliedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Antwoord geplaatst`)
};

const pl_basecamp_inbox_replied = /** @type {(inputs: Basecamp_Inbox_RepliedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odpowiedź opublikowana`)
};

const pt_basecamp_inbox_replied = /** @type {(inputs: Basecamp_Inbox_RepliedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resposta publicada`)
};

const ru_basecamp_inbox_replied = /** @type {(inputs: Basecamp_Inbox_RepliedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ответ опубликован`)
};

const sv_basecamp_inbox_replied = /** @type {(inputs: Basecamp_Inbox_RepliedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Svaret publicerat`)
};

const tr_basecamp_inbox_replied = /** @type {(inputs: Basecamp_Inbox_RepliedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yanıt yayınlandı`)
};

const zh_basecamp_inbox_replied = /** @type {(inputs: Basecamp_Inbox_RepliedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`回复已发布`)
};

const ja_basecamp_inbox_replied = /** @type {(inputs: Basecamp_Inbox_RepliedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`返信を投稿しました`)
};

/**
* | output |
* | --- |
* | "Reply posted" |
*
* @param {Basecamp_Inbox_RepliedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_inbox_replied = /** @type {((inputs?: Basecamp_Inbox_RepliedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Inbox_RepliedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_inbox_replied(inputs)
	if (locale === "de") return de_basecamp_inbox_replied(inputs)
	if (locale === "fr") return fr_basecamp_inbox_replied(inputs)
	if (locale === "it") return it_basecamp_inbox_replied(inputs)
	if (locale === "nl") return nl_basecamp_inbox_replied(inputs)
	if (locale === "pl") return pl_basecamp_inbox_replied(inputs)
	if (locale === "pt") return pt_basecamp_inbox_replied(inputs)
	if (locale === "ru") return ru_basecamp_inbox_replied(inputs)
	if (locale === "sv") return sv_basecamp_inbox_replied(inputs)
	if (locale === "tr") return tr_basecamp_inbox_replied(inputs)
	if (locale === "zh") return zh_basecamp_inbox_replied(inputs)
	if (locale === "ja") return ja_basecamp_inbox_replied(inputs)
	return en_basecamp_inbox_replied(inputs)
});
