/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ actor: NonNullable<unknown>, mod: NonNullable<unknown> }} Emails_Notify_Item_Comment_On_My_ModInputs */

const en_emails_notify_item_comment_on_my_mod = /** @type {(inputs: Emails_Notify_Item_Comment_On_My_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} commented on ${i?.mod}`)
};

const es_emails_notify_item_comment_on_my_mod = /** @type {(inputs: Emails_Notify_Item_Comment_On_My_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} comentó en ${i?.mod}`)
};

const de_emails_notify_item_comment_on_my_mod = /** @type {(inputs: Emails_Notify_Item_Comment_On_My_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} hat ${i?.mod} kommentiert`)
};

const fr_emails_notify_item_comment_on_my_mod = /** @type {(inputs: Emails_Notify_Item_Comment_On_My_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} a commenté ${i?.mod}`)
};

const it_emails_notify_item_comment_on_my_mod = /** @type {(inputs: Emails_Notify_Item_Comment_On_My_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} ha commentato ${i?.mod}`)
};

const nl_emails_notify_item_comment_on_my_mod = /** @type {(inputs: Emails_Notify_Item_Comment_On_My_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} reageerde op ${i?.mod}`)
};

const pl_emails_notify_item_comment_on_my_mod = /** @type {(inputs: Emails_Notify_Item_Comment_On_My_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} skomentował(a) ${i?.mod}`)
};

const pt_emails_notify_item_comment_on_my_mod = /** @type {(inputs: Emails_Notify_Item_Comment_On_My_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} comentou em ${i?.mod}`)
};

const ru_emails_notify_item_comment_on_my_mod = /** @type {(inputs: Emails_Notify_Item_Comment_On_My_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} прокомментировал(а) ${i?.mod}`)
};

const sv_emails_notify_item_comment_on_my_mod = /** @type {(inputs: Emails_Notify_Item_Comment_On_My_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} kommenterade ${i?.mod}`)
};

const tr_emails_notify_item_comment_on_my_mod = /** @type {(inputs: Emails_Notify_Item_Comment_On_My_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor}, ${i?.mod} hakkında yorum yaptı`)
};

const zh_emails_notify_item_comment_on_my_mod = /** @type {(inputs: Emails_Notify_Item_Comment_On_My_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} 评论了 ${i?.mod}`)
};

const ja_emails_notify_item_comment_on_my_mod = /** @type {(inputs: Emails_Notify_Item_Comment_On_My_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} さんが ${i?.mod} にコメントしました`)
};

/**
* | output |
* | --- |
* | "{actor} commented on {mod}" |
*
* @param {Emails_Notify_Item_Comment_On_My_ModInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_notify_item_comment_on_my_mod = /** @type {((inputs: Emails_Notify_Item_Comment_On_My_ModInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Item_Comment_On_My_ModInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_notify_item_comment_on_my_mod(inputs)
	if (locale === "de") return de_emails_notify_item_comment_on_my_mod(inputs)
	if (locale === "fr") return fr_emails_notify_item_comment_on_my_mod(inputs)
	if (locale === "it") return it_emails_notify_item_comment_on_my_mod(inputs)
	if (locale === "nl") return nl_emails_notify_item_comment_on_my_mod(inputs)
	if (locale === "pl") return pl_emails_notify_item_comment_on_my_mod(inputs)
	if (locale === "pt") return pt_emails_notify_item_comment_on_my_mod(inputs)
	if (locale === "ru") return ru_emails_notify_item_comment_on_my_mod(inputs)
	if (locale === "sv") return sv_emails_notify_item_comment_on_my_mod(inputs)
	if (locale === "tr") return tr_emails_notify_item_comment_on_my_mod(inputs)
	if (locale === "zh") return zh_emails_notify_item_comment_on_my_mod(inputs)
	if (locale === "ja") return ja_emails_notify_item_comment_on_my_mod(inputs)
	return en_emails_notify_item_comment_on_my_mod(inputs)
});
