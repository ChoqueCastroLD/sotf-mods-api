/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Inbox_Review_Reply_LabelInputs */

const en_basecamp_inbox_review_reply_label = /** @type {(inputs: Basecamp_Inbox_Review_Reply_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your public reply to this review`)
};

const es_basecamp_inbox_review_reply_label = /** @type {(inputs: Basecamp_Inbox_Review_Reply_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu respuesta pública a esta reseña`)
};

const de_basecamp_inbox_review_reply_label = /** @type {(inputs: Basecamp_Inbox_Review_Reply_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deine öffentliche Antwort auf diese Bewertung`)
};

const fr_basecamp_inbox_review_reply_label = /** @type {(inputs: Basecamp_Inbox_Review_Reply_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta réponse publique à cet avis`)
};

const it_basecamp_inbox_review_reply_label = /** @type {(inputs: Basecamp_Inbox_Review_Reply_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La tua risposta pubblica a questa recensione`)
};

const nl_basecamp_inbox_review_reply_label = /** @type {(inputs: Basecamp_Inbox_Review_Reply_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jouw openbare antwoord op deze review`)
};

const pl_basecamp_inbox_review_reply_label = /** @type {(inputs: Basecamp_Inbox_Review_Reply_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twoja publiczna odpowiedź na tę recenzję`)
};

const pt_basecamp_inbox_review_reply_label = /** @type {(inputs: Basecamp_Inbox_Review_Reply_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sua resposta pública a esta avaliação`)
};

const ru_basecamp_inbox_review_reply_label = /** @type {(inputs: Basecamp_Inbox_Review_Reply_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваш публичный ответ на этот отзыв`)
};

const sv_basecamp_inbox_review_reply_label = /** @type {(inputs: Basecamp_Inbox_Review_Reply_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ditt offentliga svar på den här recensionen`)
};

const tr_basecamp_inbox_review_reply_label = /** @type {(inputs: Basecamp_Inbox_Review_Reply_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu incelemeye herkese açık yanıtın`)
};

const zh_basecamp_inbox_review_reply_label = /** @type {(inputs: Basecamp_Inbox_Review_Reply_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你对此评价的公开回复`)
};

const ja_basecamp_inbox_review_reply_label = /** @type {(inputs: Basecamp_Inbox_Review_Reply_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このレビューへの公開返信`)
};

/**
* | output |
* | --- |
* | "Your public reply to this review" |
*
* @param {Basecamp_Inbox_Review_Reply_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_inbox_review_reply_label = /** @type {((inputs?: Basecamp_Inbox_Review_Reply_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Inbox_Review_Reply_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_inbox_review_reply_label(inputs)
	if (locale === "de") return de_basecamp_inbox_review_reply_label(inputs)
	if (locale === "fr") return fr_basecamp_inbox_review_reply_label(inputs)
	if (locale === "it") return it_basecamp_inbox_review_reply_label(inputs)
	if (locale === "nl") return nl_basecamp_inbox_review_reply_label(inputs)
	if (locale === "pl") return pl_basecamp_inbox_review_reply_label(inputs)
	if (locale === "pt") return pt_basecamp_inbox_review_reply_label(inputs)
	if (locale === "ru") return ru_basecamp_inbox_review_reply_label(inputs)
	if (locale === "sv") return sv_basecamp_inbox_review_reply_label(inputs)
	if (locale === "tr") return tr_basecamp_inbox_review_reply_label(inputs)
	if (locale === "zh") return zh_basecamp_inbox_review_reply_label(inputs)
	if (locale === "ja") return ja_basecamp_inbox_review_reply_label(inputs)
	return en_basecamp_inbox_review_reply_label(inputs)
});
