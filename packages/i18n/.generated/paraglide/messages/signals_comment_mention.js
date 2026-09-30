/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ actor: NonNullable<unknown>, mod: NonNullable<unknown> }} Signals_Comment_MentionInputs */

const en_signals_comment_mention = /** @type {(inputs: Signals_Comment_MentionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} mentioned you in the comments of ${i?.mod}`)
};

const es_signals_comment_mention = /** @type {(inputs: Signals_Comment_MentionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} te ha mencionado en los comentarios de ${i?.mod}`)
};

const de_signals_comment_mention = /** @type {(inputs: Signals_Comment_MentionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} hat dich in den Kommentaren zu ${i?.mod} erwähnt`)
};

const fr_signals_comment_mention = /** @type {(inputs: Signals_Comment_MentionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} vous a mentionné dans les commentaires de ${i?.mod}`)
};

const it_signals_comment_mention = /** @type {(inputs: Signals_Comment_MentionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} ti ha menzionato nei commenti di ${i?.mod}`)
};

const nl_signals_comment_mention = /** @type {(inputs: Signals_Comment_MentionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} noemde je in de reacties bij ${i?.mod}`)
};

const pl_signals_comment_mention = /** @type {(inputs: Signals_Comment_MentionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} wspomniał(a) o tobie w komentarzach do ${i?.mod}`)
};

const pt_signals_comment_mention = /** @type {(inputs: Signals_Comment_MentionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} mencionou você nos comentários de ${i?.mod}`)
};

const ru_signals_comment_mention = /** @type {(inputs: Signals_Comment_MentionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} упомянул(а) вас в комментариях к ${i?.mod}`)
};

const sv_signals_comment_mention = /** @type {(inputs: Signals_Comment_MentionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} nämnde dig i kommentarerna på ${i?.mod}`)
};

const tr_signals_comment_mention = /** @type {(inputs: Signals_Comment_MentionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor}, ${i?.mod} yorumlarında senden bahsetti`)
};

const zh_signals_comment_mention = /** @type {(inputs: Signals_Comment_MentionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} 在 ${i?.mod} 的评论中提到了你`)
};

const ja_signals_comment_mention = /** @type {(inputs: Signals_Comment_MentionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} が ${i?.mod} のコメントであなたをメンションしました`)
};

/**
* | output |
* | --- |
* | "{actor} mentioned you in the comments of {mod}" |
*
* @param {Signals_Comment_MentionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_comment_mention = /** @type {((inputs: Signals_Comment_MentionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Comment_MentionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_comment_mention(inputs)
	if (locale === "de") return de_signals_comment_mention(inputs)
	if (locale === "fr") return fr_signals_comment_mention(inputs)
	if (locale === "it") return it_signals_comment_mention(inputs)
	if (locale === "nl") return nl_signals_comment_mention(inputs)
	if (locale === "pl") return pl_signals_comment_mention(inputs)
	if (locale === "pt") return pt_signals_comment_mention(inputs)
	if (locale === "ru") return ru_signals_comment_mention(inputs)
	if (locale === "sv") return sv_signals_comment_mention(inputs)
	if (locale === "tr") return tr_signals_comment_mention(inputs)
	if (locale === "zh") return zh_signals_comment_mention(inputs)
	if (locale === "ja") return ja_signals_comment_mention(inputs)
	return en_signals_comment_mention(inputs)
});
