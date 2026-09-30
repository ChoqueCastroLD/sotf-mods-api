/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown>, mod: NonNullable<unknown> }} Emails_Notify_Item_Comment_Reply_ManyInputs */

const en_emails_notify_item_comment_reply_many = /** @type {(inputs: Emails_Notify_Item_Comment_Reply_ManyInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} new reply to your comment on ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${count__number} new replies to your comment on ${i?.mod}`)
	
};

const es_emails_notify_item_comment_reply_many = /** @type {(inputs: Emails_Notify_Item_Comment_Reply_ManyInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} respuesta nueva a tu comentario en ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${count__number} respuestas nuevas a tu comentario en ${i?.mod}`)
	
};

const de_emails_notify_item_comment_reply_many = /** @type {(inputs: Emails_Notify_Item_Comment_Reply_ManyInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} neue Antwort auf deinen Kommentar zu ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${count__number} neue Antworten auf deinen Kommentar zu ${i?.mod}`)
	
};

const fr_emails_notify_item_comment_reply_many = /** @type {(inputs: Emails_Notify_Item_Comment_Reply_ManyInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} nouvelle réponse à votre commentaire sur ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${count__number} nouvelles réponses à votre commentaire sur ${i?.mod}`)
	
};

const it_emails_notify_item_comment_reply_many = /** @type {(inputs: Emails_Notify_Item_Comment_Reply_ManyInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} nuova risposta al tuo commento su ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${count__number} nuove risposte al tuo commento su ${i?.mod}`)
	
};

const nl_emails_notify_item_comment_reply_many = /** @type {(inputs: Emails_Notify_Item_Comment_Reply_ManyInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} nieuw antwoord op je reactie bij ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${count__number} nieuwe antwoorden op je reactie bij ${i?.mod}`)
	
};

const pl_emails_notify_item_comment_reply_many = /** @type {(inputs: Emails_Notify_Item_Comment_Reply_ManyInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} nowa odpowiedź na Twój komentarz do ${i?.mod}`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} nowe odpowiedzi na Twój komentarz do ${i?.mod}`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} nowych odpowiedzi na Twój komentarz do ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${count__number} nowej odpowiedzi na Twój komentarz do ${i?.mod}`)
	
};

const pt_emails_notify_item_comment_reply_many = /** @type {(inputs: Emails_Notify_Item_Comment_Reply_ManyInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} nova resposta ao seu comentário em ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${count__number} novas respostas ao seu comentário em ${i?.mod}`)
	
};

const ru_emails_notify_item_comment_reply_many = /** @type {(inputs: Emails_Notify_Item_Comment_Reply_ManyInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} новый ответ на ваш комментарий к ${i?.mod}`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} новых ответа на ваш комментарий к ${i?.mod}`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} новых ответов на ваш комментарий к ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${count__number} нового ответа на ваш комментарий к ${i?.mod}`)
	
};

const sv_emails_notify_item_comment_reply_many = /** @type {(inputs: Emails_Notify_Item_Comment_Reply_ManyInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} nytt svar på din kommentar om ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${count__number} nya svar på din kommentar om ${i?.mod}`)
	
};

const tr_emails_notify_item_comment_reply_many = /** @type {(inputs: Emails_Notify_Item_Comment_Reply_ManyInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.mod} hakkındaki yorumuna ${count__number} yeni yanıt`);
	return /** @type {LocalizedString} */ (`${i?.mod} hakkındaki yorumuna ${count__number} yeni yanıt`)
	
};

const zh_emails_notify_item_comment_reply_many = /** @type {(inputs: Emails_Notify_Item_Comment_Reply_ManyInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`你在 ${i?.mod} 下的评论有 ${count__number} 条新回复`)
};

const ja_emails_notify_item_comment_reply_many = /** @type {(inputs: Emails_Notify_Item_Comment_Reply_ManyInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`${i?.mod} でのあなたのコメントに ${count__number} 件の新しい返信`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} new reply to your comment on {mod}" |
* | * | "{count__number} new replies to your comment on {mod}" |
*
* @param {Emails_Notify_Item_Comment_Reply_ManyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_notify_item_comment_reply_many = /** @type {((inputs: Emails_Notify_Item_Comment_Reply_ManyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Item_Comment_Reply_ManyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_notify_item_comment_reply_many(inputs)
	if (locale === "de") return de_emails_notify_item_comment_reply_many(inputs)
	if (locale === "fr") return fr_emails_notify_item_comment_reply_many(inputs)
	if (locale === "it") return it_emails_notify_item_comment_reply_many(inputs)
	if (locale === "nl") return nl_emails_notify_item_comment_reply_many(inputs)
	if (locale === "pl") return pl_emails_notify_item_comment_reply_many(inputs)
	if (locale === "pt") return pt_emails_notify_item_comment_reply_many(inputs)
	if (locale === "ru") return ru_emails_notify_item_comment_reply_many(inputs)
	if (locale === "sv") return sv_emails_notify_item_comment_reply_many(inputs)
	if (locale === "tr") return tr_emails_notify_item_comment_reply_many(inputs)
	if (locale === "zh") return zh_emails_notify_item_comment_reply_many(inputs)
	if (locale === "ja") return ja_emails_notify_item_comment_reply_many(inputs)
	return en_emails_notify_item_comment_reply_many(inputs)
});
