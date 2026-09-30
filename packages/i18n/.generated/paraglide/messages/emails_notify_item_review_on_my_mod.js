/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ actor: NonNullable<unknown>, mod: NonNullable<unknown>, rating: NonNullable<unknown> }} Emails_Notify_Item_Review_On_My_ModInputs */

const en_emails_notify_item_review_on_my_mod = /** @type {(inputs: Emails_Notify_Item_Review_On_My_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} reviewed ${i?.mod}: ${i?.rating}/5`)
};

const es_emails_notify_item_review_on_my_mod = /** @type {(inputs: Emails_Notify_Item_Review_On_My_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} reseñó ${i?.mod}: ${i?.rating}/5`)
};

const de_emails_notify_item_review_on_my_mod = /** @type {(inputs: Emails_Notify_Item_Review_On_My_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} hat ${i?.mod} bewertet: ${i?.rating}/5`)
};

const fr_emails_notify_item_review_on_my_mod = /** @type {(inputs: Emails_Notify_Item_Review_On_My_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} a donné son avis sur ${i?.mod} : ${i?.rating}/5`)
};

const it_emails_notify_item_review_on_my_mod = /** @type {(inputs: Emails_Notify_Item_Review_On_My_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} ha recensito ${i?.mod}: ${i?.rating}/5`)
};

const nl_emails_notify_item_review_on_my_mod = /** @type {(inputs: Emails_Notify_Item_Review_On_My_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} beoordeelde ${i?.mod}: ${i?.rating}/5`)
};

const pl_emails_notify_item_review_on_my_mod = /** @type {(inputs: Emails_Notify_Item_Review_On_My_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} ocenił(a) ${i?.mod}: ${i?.rating}/5`)
};

const pt_emails_notify_item_review_on_my_mod = /** @type {(inputs: Emails_Notify_Item_Review_On_My_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} avaliou ${i?.mod}: ${i?.rating}/5`)
};

const ru_emails_notify_item_review_on_my_mod = /** @type {(inputs: Emails_Notify_Item_Review_On_My_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} оценил(а) ${i?.mod}: ${i?.rating}/5`)
};

const sv_emails_notify_item_review_on_my_mod = /** @type {(inputs: Emails_Notify_Item_Review_On_My_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} recenserade ${i?.mod}: ${i?.rating}/5`)
};

const tr_emails_notify_item_review_on_my_mod = /** @type {(inputs: Emails_Notify_Item_Review_On_My_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor}, ${i?.mod} için inceleme yazdı: ${i?.rating}/5`)
};

const zh_emails_notify_item_review_on_my_mod = /** @type {(inputs: Emails_Notify_Item_Review_On_My_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} 评价了 ${i?.mod}：${i?.rating}/5`)
};

const ja_emails_notify_item_review_on_my_mod = /** @type {(inputs: Emails_Notify_Item_Review_On_My_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} さんが ${i?.mod} をレビューしました：${i?.rating}/5`)
};

/**
* | output |
* | --- |
* | "{actor} reviewed {mod}: {rating}/5" |
*
* @param {Emails_Notify_Item_Review_On_My_ModInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_notify_item_review_on_my_mod = /** @type {((inputs: Emails_Notify_Item_Review_On_My_ModInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Item_Review_On_My_ModInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_notify_item_review_on_my_mod(inputs)
	if (locale === "de") return de_emails_notify_item_review_on_my_mod(inputs)
	if (locale === "fr") return fr_emails_notify_item_review_on_my_mod(inputs)
	if (locale === "it") return it_emails_notify_item_review_on_my_mod(inputs)
	if (locale === "nl") return nl_emails_notify_item_review_on_my_mod(inputs)
	if (locale === "pl") return pl_emails_notify_item_review_on_my_mod(inputs)
	if (locale === "pt") return pt_emails_notify_item_review_on_my_mod(inputs)
	if (locale === "ru") return ru_emails_notify_item_review_on_my_mod(inputs)
	if (locale === "sv") return sv_emails_notify_item_review_on_my_mod(inputs)
	if (locale === "tr") return tr_emails_notify_item_review_on_my_mod(inputs)
	if (locale === "zh") return zh_emails_notify_item_review_on_my_mod(inputs)
	if (locale === "ja") return ja_emails_notify_item_review_on_my_mod(inputs)
	return en_emails_notify_item_review_on_my_mod(inputs)
});
