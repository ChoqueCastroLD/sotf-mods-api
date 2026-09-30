/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Attention_Reviews_ActionInputs */

const en_basecamp_attention_reviews_action = /** @type {(inputs: Basecamp_Attention_Reviews_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reply to reviews`)
};

const es_basecamp_attention_reviews_action = /** @type {(inputs: Basecamp_Attention_Reviews_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Responder reseñas`)
};

const de_basecamp_attention_reviews_action = /** @type {(inputs: Basecamp_Attention_Reviews_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bewertungen beantworten`)
};

const fr_basecamp_attention_reviews_action = /** @type {(inputs: Basecamp_Attention_Reviews_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Répondre aux avis`)
};

const it_basecamp_attention_reviews_action = /** @type {(inputs: Basecamp_Attention_Reviews_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rispondi alle recensioni`)
};

const nl_basecamp_attention_reviews_action = /** @type {(inputs: Basecamp_Attention_Reviews_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reviews beantwoorden`)
};

const pl_basecamp_attention_reviews_action = /** @type {(inputs: Basecamp_Attention_Reviews_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odpowiedz na recenzje`)
};

const pt_basecamp_attention_reviews_action = /** @type {(inputs: Basecamp_Attention_Reviews_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Responder avaliações`)
};

const ru_basecamp_attention_reviews_action = /** @type {(inputs: Basecamp_Attention_Reviews_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ответить на отзывы`)
};

const sv_basecamp_attention_reviews_action = /** @type {(inputs: Basecamp_Attention_Reviews_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Svara på recensioner`)
};

const tr_basecamp_attention_reviews_action = /** @type {(inputs: Basecamp_Attention_Reviews_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İncelemeleri yanıtla`)
};

const zh_basecamp_attention_reviews_action = /** @type {(inputs: Basecamp_Attention_Reviews_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`回复评价`)
};

const ja_basecamp_attention_reviews_action = /** @type {(inputs: Basecamp_Attention_Reviews_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レビューに返信`)
};

/**
* | output |
* | --- |
* | "Reply to reviews" |
*
* @param {Basecamp_Attention_Reviews_ActionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_attention_reviews_action = /** @type {((inputs?: Basecamp_Attention_Reviews_ActionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Attention_Reviews_ActionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_attention_reviews_action(inputs)
	if (locale === "de") return de_basecamp_attention_reviews_action(inputs)
	if (locale === "fr") return fr_basecamp_attention_reviews_action(inputs)
	if (locale === "it") return it_basecamp_attention_reviews_action(inputs)
	if (locale === "nl") return nl_basecamp_attention_reviews_action(inputs)
	if (locale === "pl") return pl_basecamp_attention_reviews_action(inputs)
	if (locale === "pt") return pt_basecamp_attention_reviews_action(inputs)
	if (locale === "ru") return ru_basecamp_attention_reviews_action(inputs)
	if (locale === "sv") return sv_basecamp_attention_reviews_action(inputs)
	if (locale === "tr") return tr_basecamp_attention_reviews_action(inputs)
	if (locale === "zh") return zh_basecamp_attention_reviews_action(inputs)
	if (locale === "ja") return ja_basecamp_attention_reviews_action(inputs)
	return en_basecamp_attention_reviews_action(inputs)
});
