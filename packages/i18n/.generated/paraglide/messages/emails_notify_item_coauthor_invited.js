/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ actor: NonNullable<unknown>, mod: NonNullable<unknown> }} Emails_Notify_Item_Coauthor_InvitedInputs */

const en_emails_notify_item_coauthor_invited = /** @type {(inputs: Emails_Notify_Item_Coauthor_InvitedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} invited you to co-author ${i?.mod}`)
};

const es_emails_notify_item_coauthor_invited = /** @type {(inputs: Emails_Notify_Item_Coauthor_InvitedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} te invitó a ser coautor de ${i?.mod}`)
};

const de_emails_notify_item_coauthor_invited = /** @type {(inputs: Emails_Notify_Item_Coauthor_InvitedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} hat dich eingeladen, ${i?.mod} mitzuentwickeln`)
};

const fr_emails_notify_item_coauthor_invited = /** @type {(inputs: Emails_Notify_Item_Coauthor_InvitedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} vous a invité à co-créer ${i?.mod}`)
};

const it_emails_notify_item_coauthor_invited = /** @type {(inputs: Emails_Notify_Item_Coauthor_InvitedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} ti ha invitato a co-creare ${i?.mod}`)
};

const nl_emails_notify_item_coauthor_invited = /** @type {(inputs: Emails_Notify_Item_Coauthor_InvitedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} heeft je uitgenodigd als mede-auteur van ${i?.mod}`)
};

const pl_emails_notify_item_coauthor_invited = /** @type {(inputs: Emails_Notify_Item_Coauthor_InvitedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} zaprasza Cię do współtworzenia ${i?.mod}`)
};

const pt_emails_notify_item_coauthor_invited = /** @type {(inputs: Emails_Notify_Item_Coauthor_InvitedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} convidou você para ser coautor de ${i?.mod}`)
};

const ru_emails_notify_item_coauthor_invited = /** @type {(inputs: Emails_Notify_Item_Coauthor_InvitedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} приглашает вас стать соавтором ${i?.mod}`)
};

const sv_emails_notify_item_coauthor_invited = /** @type {(inputs: Emails_Notify_Item_Coauthor_InvitedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} bjöd in dig som medförfattare till ${i?.mod}`)
};

const tr_emails_notify_item_coauthor_invited = /** @type {(inputs: Emails_Notify_Item_Coauthor_InvitedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} seni ${i?.mod} için ortak yazar olarak davet etti`)
};

const zh_emails_notify_item_coauthor_invited = /** @type {(inputs: Emails_Notify_Item_Coauthor_InvitedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} 邀请你共同维护 ${i?.mod}`)
};

const ja_emails_notify_item_coauthor_invited = /** @type {(inputs: Emails_Notify_Item_Coauthor_InvitedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} さんが ${i?.mod} の共同作者にあなたを招待しました`)
};

/**
* | output |
* | --- |
* | "{actor} invited you to co-author {mod}" |
*
* @param {Emails_Notify_Item_Coauthor_InvitedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_notify_item_coauthor_invited = /** @type {((inputs: Emails_Notify_Item_Coauthor_InvitedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Item_Coauthor_InvitedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_notify_item_coauthor_invited(inputs)
	if (locale === "de") return de_emails_notify_item_coauthor_invited(inputs)
	if (locale === "fr") return fr_emails_notify_item_coauthor_invited(inputs)
	if (locale === "it") return it_emails_notify_item_coauthor_invited(inputs)
	if (locale === "nl") return nl_emails_notify_item_coauthor_invited(inputs)
	if (locale === "pl") return pl_emails_notify_item_coauthor_invited(inputs)
	if (locale === "pt") return pt_emails_notify_item_coauthor_invited(inputs)
	if (locale === "ru") return ru_emails_notify_item_coauthor_invited(inputs)
	if (locale === "sv") return sv_emails_notify_item_coauthor_invited(inputs)
	if (locale === "tr") return tr_emails_notify_item_coauthor_invited(inputs)
	if (locale === "zh") return zh_emails_notify_item_coauthor_invited(inputs)
	if (locale === "ja") return ja_emails_notify_item_coauthor_invited(inputs)
	return en_emails_notify_item_coauthor_invited(inputs)
});
