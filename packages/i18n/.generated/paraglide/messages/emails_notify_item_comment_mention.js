/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ actor: NonNullable<unknown>, mod: NonNullable<unknown> }} Emails_Notify_Item_Comment_MentionInputs */

const en_emails_notify_item_comment_mention = /** @type {(inputs: Emails_Notify_Item_Comment_MentionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} mentioned you in a comment on ${i?.mod}`)
};

const es_emails_notify_item_comment_mention = /** @type {(inputs: Emails_Notify_Item_Comment_MentionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} te mencionó en un comentario en ${i?.mod}`)
};

const de_emails_notify_item_comment_mention = /** @type {(inputs: Emails_Notify_Item_Comment_MentionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} hat dich in einem Kommentar zu ${i?.mod} erwähnt`)
};

const fr_emails_notify_item_comment_mention = /** @type {(inputs: Emails_Notify_Item_Comment_MentionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} vous a mentionné dans un commentaire sur ${i?.mod}`)
};

const it_emails_notify_item_comment_mention = /** @type {(inputs: Emails_Notify_Item_Comment_MentionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} ti ha menzionato in un commento su ${i?.mod}`)
};

const nl_emails_notify_item_comment_mention = /** @type {(inputs: Emails_Notify_Item_Comment_MentionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} noemde je in een reactie bij ${i?.mod}`)
};

const pl_emails_notify_item_comment_mention = /** @type {(inputs: Emails_Notify_Item_Comment_MentionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} wspomniał(a) o Tobie w komentarzu do ${i?.mod}`)
};

const pt_emails_notify_item_comment_mention = /** @type {(inputs: Emails_Notify_Item_Comment_MentionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} mencionou você em um comentário em ${i?.mod}`)
};

const ru_emails_notify_item_comment_mention = /** @type {(inputs: Emails_Notify_Item_Comment_MentionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} упомянул(а) вас в комментарии к ${i?.mod}`)
};

const sv_emails_notify_item_comment_mention = /** @type {(inputs: Emails_Notify_Item_Comment_MentionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} nämnde dig i en kommentar om ${i?.mod}`)
};

const tr_emails_notify_item_comment_mention = /** @type {(inputs: Emails_Notify_Item_Comment_MentionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor}, ${i?.mod} hakkındaki bir yorumda senden bahsetti`)
};

const zh_emails_notify_item_comment_mention = /** @type {(inputs: Emails_Notify_Item_Comment_MentionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} 在 ${i?.mod} 的评论中提到了你`)
};

const ja_emails_notify_item_comment_mention = /** @type {(inputs: Emails_Notify_Item_Comment_MentionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} さんが ${i?.mod} のコメントであなたをメンションしました`)
};

/**
* | output |
* | --- |
* | "{actor} mentioned you in a comment on {mod}" |
*
* @param {Emails_Notify_Item_Comment_MentionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_notify_item_comment_mention = /** @type {((inputs: Emails_Notify_Item_Comment_MentionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Item_Comment_MentionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_notify_item_comment_mention(inputs)
	if (locale === "de") return de_emails_notify_item_comment_mention(inputs)
	if (locale === "fr") return fr_emails_notify_item_comment_mention(inputs)
	if (locale === "it") return it_emails_notify_item_comment_mention(inputs)
	if (locale === "nl") return nl_emails_notify_item_comment_mention(inputs)
	if (locale === "pl") return pl_emails_notify_item_comment_mention(inputs)
	if (locale === "pt") return pt_emails_notify_item_comment_mention(inputs)
	if (locale === "ru") return ru_emails_notify_item_comment_mention(inputs)
	if (locale === "sv") return sv_emails_notify_item_comment_mention(inputs)
	if (locale === "tr") return tr_emails_notify_item_comment_mention(inputs)
	if (locale === "zh") return zh_emails_notify_item_comment_mention(inputs)
	if (locale === "ja") return ja_emails_notify_item_comment_mention(inputs)
	return en_emails_notify_item_comment_mention(inputs)
});
