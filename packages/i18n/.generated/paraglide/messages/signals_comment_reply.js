/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ actor: NonNullable<unknown>, mod: NonNullable<unknown> }} Signals_Comment_ReplyInputs */

const en_signals_comment_reply = /** @type {(inputs: Signals_Comment_ReplyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} replied to your comment on ${i?.mod}`)
};

const es_signals_comment_reply = /** @type {(inputs: Signals_Comment_ReplyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} ha respondido a tu comentario en ${i?.mod}`)
};

const de_signals_comment_reply = /** @type {(inputs: Signals_Comment_ReplyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} hat auf deinen Kommentar zu ${i?.mod} geantwortet`)
};

const fr_signals_comment_reply = /** @type {(inputs: Signals_Comment_ReplyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} a répondu à votre commentaire sur ${i?.mod}`)
};

const it_signals_comment_reply = /** @type {(inputs: Signals_Comment_ReplyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} ha risposto al tuo commento su ${i?.mod}`)
};

const nl_signals_comment_reply = /** @type {(inputs: Signals_Comment_ReplyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} antwoordde op je reactie bij ${i?.mod}`)
};

const pl_signals_comment_reply = /** @type {(inputs: Signals_Comment_ReplyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} odpowiedział(a) na twój komentarz do ${i?.mod}`)
};

const pt_signals_comment_reply = /** @type {(inputs: Signals_Comment_ReplyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} respondeu ao seu comentário em ${i?.mod}`)
};

const ru_signals_comment_reply = /** @type {(inputs: Signals_Comment_ReplyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} ответил(а) на ваш комментарий к ${i?.mod}`)
};

const sv_signals_comment_reply = /** @type {(inputs: Signals_Comment_ReplyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} svarade på din kommentar på ${i?.mod}`)
};

const tr_signals_comment_reply = /** @type {(inputs: Signals_Comment_ReplyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor}, ${i?.mod} hakkındaki yorumunu yanıtladı`)
};

const zh_signals_comment_reply = /** @type {(inputs: Signals_Comment_ReplyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} 回复了你在 ${i?.mod} 下的评论`)
};

const ja_signals_comment_reply = /** @type {(inputs: Signals_Comment_ReplyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} が ${i?.mod} でのあなたのコメントに返信しました`)
};

/**
* | output |
* | --- |
* | "{actor} replied to your comment on {mod}" |
*
* @param {Signals_Comment_ReplyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_comment_reply = /** @type {((inputs: Signals_Comment_ReplyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Comment_ReplyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_comment_reply(inputs)
	if (locale === "de") return de_signals_comment_reply(inputs)
	if (locale === "fr") return fr_signals_comment_reply(inputs)
	if (locale === "it") return it_signals_comment_reply(inputs)
	if (locale === "nl") return nl_signals_comment_reply(inputs)
	if (locale === "pl") return pl_signals_comment_reply(inputs)
	if (locale === "pt") return pt_signals_comment_reply(inputs)
	if (locale === "ru") return ru_signals_comment_reply(inputs)
	if (locale === "sv") return sv_signals_comment_reply(inputs)
	if (locale === "tr") return tr_signals_comment_reply(inputs)
	if (locale === "zh") return zh_signals_comment_reply(inputs)
	if (locale === "ja") return ja_signals_comment_reply(inputs)
	return en_signals_comment_reply(inputs)
});
