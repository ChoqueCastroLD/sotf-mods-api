/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ actor: NonNullable<unknown>, kit: NonNullable<unknown> }} Emails_Notify_Item_Kit_CommentInputs */

const en_emails_notify_item_kit_comment = /** @type {(inputs: Emails_Notify_Item_Kit_CommentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} commented on your kit ${i?.kit}`)
};

const es_emails_notify_item_kit_comment = /** @type {(inputs: Emails_Notify_Item_Kit_CommentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} comentó en tu kit ${i?.kit}`)
};

const de_emails_notify_item_kit_comment = /** @type {(inputs: Emails_Notify_Item_Kit_CommentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} hat dein Kit ${i?.kit} kommentiert`)
};

const fr_emails_notify_item_kit_comment = /** @type {(inputs: Emails_Notify_Item_Kit_CommentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} a commenté votre kit ${i?.kit}`)
};

const it_emails_notify_item_kit_comment = /** @type {(inputs: Emails_Notify_Item_Kit_CommentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} ha commentato il tuo kit ${i?.kit}`)
};

const nl_emails_notify_item_kit_comment = /** @type {(inputs: Emails_Notify_Item_Kit_CommentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} heeft gereageerd op je kit ${i?.kit}`)
};

const pl_emails_notify_item_kit_comment = /** @type {(inputs: Emails_Notify_Item_Kit_CommentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} skomentował(a) Twój zestaw ${i?.kit}`)
};

const pt_emails_notify_item_kit_comment = /** @type {(inputs: Emails_Notify_Item_Kit_CommentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} comentou no seu kit ${i?.kit}`)
};

const ru_emails_notify_item_kit_comment = /** @type {(inputs: Emails_Notify_Item_Kit_CommentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} прокомментировал(а) ваш набор ${i?.kit}`)
};

const sv_emails_notify_item_kit_comment = /** @type {(inputs: Emails_Notify_Item_Kit_CommentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} kommenterade ditt kit ${i?.kit}`)
};

const tr_emails_notify_item_kit_comment = /** @type {(inputs: Emails_Notify_Item_Kit_CommentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor}, ${i?.kit} kitine yorum yaptı`)
};

const zh_emails_notify_item_kit_comment = /** @type {(inputs: Emails_Notify_Item_Kit_CommentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} 评论了你的套件 ${i?.kit}`)
};

const ja_emails_notify_item_kit_comment = /** @type {(inputs: Emails_Notify_Item_Kit_CommentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} さんがあなたのキット ${i?.kit} にコメントしました`)
};

/**
* | output |
* | --- |
* | "{actor} commented on your kit {kit}" |
*
* @param {Emails_Notify_Item_Kit_CommentInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_notify_item_kit_comment = /** @type {((inputs: Emails_Notify_Item_Kit_CommentInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Item_Kit_CommentInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_notify_item_kit_comment(inputs)
	if (locale === "de") return de_emails_notify_item_kit_comment(inputs)
	if (locale === "fr") return fr_emails_notify_item_kit_comment(inputs)
	if (locale === "it") return it_emails_notify_item_kit_comment(inputs)
	if (locale === "nl") return nl_emails_notify_item_kit_comment(inputs)
	if (locale === "pl") return pl_emails_notify_item_kit_comment(inputs)
	if (locale === "pt") return pt_emails_notify_item_kit_comment(inputs)
	if (locale === "ru") return ru_emails_notify_item_kit_comment(inputs)
	if (locale === "sv") return sv_emails_notify_item_kit_comment(inputs)
	if (locale === "tr") return tr_emails_notify_item_kit_comment(inputs)
	if (locale === "zh") return zh_emails_notify_item_kit_comment(inputs)
	if (locale === "ja") return ja_emails_notify_item_kit_comment(inputs)
	return en_emails_notify_item_kit_comment(inputs)
});
