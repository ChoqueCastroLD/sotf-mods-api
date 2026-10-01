/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ actor: NonNullable<unknown>, kit: NonNullable<unknown> }} Signals_Kit_Comment_ReplyInputs */

const en_signals_kit_comment_reply = /** @type {(inputs: Signals_Kit_Comment_ReplyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} replied to your comment on the kit “${i?.kit}”`)
};

const es_signals_kit_comment_reply = /** @type {(inputs: Signals_Kit_Comment_ReplyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} respondió a tu comentario en el kit «${i?.kit}»`)
};

const de_signals_kit_comment_reply = /** @type {(inputs: Signals_Kit_Comment_ReplyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} hat auf deinen Kommentar beim Kit „${i?.kit}“ geantwortet`)
};

const fr_signals_kit_comment_reply = /** @type {(inputs: Signals_Kit_Comment_ReplyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} a répondu à votre commentaire sur le kit « ${i?.kit} »`)
};

const it_signals_kit_comment_reply = /** @type {(inputs: Signals_Kit_Comment_ReplyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} ha risposto al tuo commento sul kit «${i?.kit}»`)
};

const nl_signals_kit_comment_reply = /** @type {(inputs: Signals_Kit_Comment_ReplyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} heeft gereageerd op je reactie bij de kit “${i?.kit}”`)
};

const pl_signals_kit_comment_reply = /** @type {(inputs: Signals_Kit_Comment_ReplyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} odpowiedział(a) na Twój komentarz w zestawie „${i?.kit}”`)
};

const pt_signals_kit_comment_reply = /** @type {(inputs: Signals_Kit_Comment_ReplyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} respondeu ao seu comentário no kit “${i?.kit}”`)
};

const ru_signals_kit_comment_reply = /** @type {(inputs: Signals_Kit_Comment_ReplyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} ответил(а) на ваш комментарий к набору «${i?.kit}»`)
};

const sv_signals_kit_comment_reply = /** @type {(inputs: Signals_Kit_Comment_ReplyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} svarade på din kommentar på kitet ”${i?.kit}”`)
};

const tr_signals_kit_comment_reply = /** @type {(inputs: Signals_Kit_Comment_ReplyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor}, “${i?.kit}” kitindeki yorumuna yanıt verdi`)
};

const zh_signals_kit_comment_reply = /** @type {(inputs: Signals_Kit_Comment_ReplyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} 回复了你在套件“${i?.kit}”下的评论`)
};

const ja_signals_kit_comment_reply = /** @type {(inputs: Signals_Kit_Comment_ReplyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} さんがキット「${i?.kit}」のあなたのコメントに返信しました`)
};

/**
* | output |
* | --- |
* | "{actor} replied to your comment on the kit “{kit}”" |
*
* @param {Signals_Kit_Comment_ReplyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_kit_comment_reply = /** @type {((inputs: Signals_Kit_Comment_ReplyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Kit_Comment_ReplyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_kit_comment_reply(inputs)
	if (locale === "de") return de_signals_kit_comment_reply(inputs)
	if (locale === "fr") return fr_signals_kit_comment_reply(inputs)
	if (locale === "it") return it_signals_kit_comment_reply(inputs)
	if (locale === "nl") return nl_signals_kit_comment_reply(inputs)
	if (locale === "pl") return pl_signals_kit_comment_reply(inputs)
	if (locale === "pt") return pt_signals_kit_comment_reply(inputs)
	if (locale === "ru") return ru_signals_kit_comment_reply(inputs)
	if (locale === "sv") return sv_signals_kit_comment_reply(inputs)
	if (locale === "tr") return tr_signals_kit_comment_reply(inputs)
	if (locale === "zh") return zh_signals_kit_comment_reply(inputs)
	if (locale === "ja") return ja_signals_kit_comment_reply(inputs)
	return en_signals_kit_comment_reply(inputs)
});
