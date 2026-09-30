/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown>, mod: NonNullable<unknown> }} Signals_Comment_Reply_GroupedInputs */

const en_signals_comment_reply_grouped = /** @type {(inputs: Signals_Comment_Reply_GroupedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} reply to your comment on ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${count__number} replies to your comment on ${i?.mod}`)
	
};

const es_signals_comment_reply_grouped = /** @type {(inputs: Signals_Comment_Reply_GroupedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} respuesta a tu comentario en ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${count__number} respuestas a tu comentario en ${i?.mod}`)
	
};

const de_signals_comment_reply_grouped = /** @type {(inputs: Signals_Comment_Reply_GroupedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Antwort auf deinen Kommentar zu ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${count__number} Antworten auf deinen Kommentar zu ${i?.mod}`)
	
};

const fr_signals_comment_reply_grouped = /** @type {(inputs: Signals_Comment_Reply_GroupedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} réponse à votre commentaire sur ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${count__number} réponses à votre commentaire sur ${i?.mod}`)
	
};

const it_signals_comment_reply_grouped = /** @type {(inputs: Signals_Comment_Reply_GroupedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} risposta al tuo commento su ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${count__number} risposte al tuo commento su ${i?.mod}`)
	
};

const nl_signals_comment_reply_grouped = /** @type {(inputs: Signals_Comment_Reply_GroupedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} antwoord op je reactie bij ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${count__number} antwoorden op je reactie bij ${i?.mod}`)
	
};

const pl_signals_comment_reply_grouped = /** @type {(inputs: Signals_Comment_Reply_GroupedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} odpowiedź na twój komentarz do ${i?.mod}`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} odpowiedzi na twój komentarz do ${i?.mod}`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} odpowiedzi na twój komentarz do ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${count__number} odpowiedzi na twój komentarz do ${i?.mod}`)
	
};

const pt_signals_comment_reply_grouped = /** @type {(inputs: Signals_Comment_Reply_GroupedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} resposta ao seu comentário em ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${count__number} respostas ao seu comentário em ${i?.mod}`)
	
};

const ru_signals_comment_reply_grouped = /** @type {(inputs: Signals_Comment_Reply_GroupedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} ответ на ваш комментарий к ${i?.mod}`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} ответа на ваш комментарий к ${i?.mod}`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} ответов на ваш комментарий к ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${count__number} ответа на ваш комментарий к ${i?.mod}`)
	
};

const sv_signals_comment_reply_grouped = /** @type {(inputs: Signals_Comment_Reply_GroupedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} svar på din kommentar på ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${count__number} svar på din kommentar på ${i?.mod}`)
	
};

const tr_signals_comment_reply_grouped = /** @type {(inputs: Signals_Comment_Reply_GroupedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.mod} hakkındaki yorumuna ${count__number} yanıt`);
	return /** @type {LocalizedString} */ (`${i?.mod} hakkındaki yorumuna ${count__number} yanıt`)
	
};

const zh_signals_comment_reply_grouped = /** @type {(inputs: Signals_Comment_Reply_GroupedInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`你在 ${i?.mod} 下的评论收到 ${count__number} 条回复`)
};

const ja_signals_comment_reply_grouped = /** @type {(inputs: Signals_Comment_Reply_GroupedInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`${i?.mod} でのあなたのコメントに返信 ${count__number} 件`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} reply to your comment on {mod}" |
* | * | "{count__number} replies to your comment on {mod}" |
*
* @param {Signals_Comment_Reply_GroupedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_comment_reply_grouped = /** @type {((inputs: Signals_Comment_Reply_GroupedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Comment_Reply_GroupedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_comment_reply_grouped(inputs)
	if (locale === "de") return de_signals_comment_reply_grouped(inputs)
	if (locale === "fr") return fr_signals_comment_reply_grouped(inputs)
	if (locale === "it") return it_signals_comment_reply_grouped(inputs)
	if (locale === "nl") return nl_signals_comment_reply_grouped(inputs)
	if (locale === "pl") return pl_signals_comment_reply_grouped(inputs)
	if (locale === "pt") return pt_signals_comment_reply_grouped(inputs)
	if (locale === "ru") return ru_signals_comment_reply_grouped(inputs)
	if (locale === "sv") return sv_signals_comment_reply_grouped(inputs)
	if (locale === "tr") return tr_signals_comment_reply_grouped(inputs)
	if (locale === "zh") return zh_signals_comment_reply_grouped(inputs)
	if (locale === "ja") return ja_signals_comment_reply_grouped(inputs)
	return en_signals_comment_reply_grouped(inputs)
});
