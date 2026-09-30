/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ actor: NonNullable<unknown>, mod: NonNullable<unknown> }} Emails_Notify_Item_Creator_Mod_PublishedInputs */

const en_emails_notify_item_creator_mod_published = /** @type {(inputs: Emails_Notify_Item_Creator_Mod_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} published ${i?.mod}`)
};

const es_emails_notify_item_creator_mod_published = /** @type {(inputs: Emails_Notify_Item_Creator_Mod_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} publicó ${i?.mod}`)
};

const de_emails_notify_item_creator_mod_published = /** @type {(inputs: Emails_Notify_Item_Creator_Mod_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} hat ${i?.mod} veröffentlicht`)
};

const fr_emails_notify_item_creator_mod_published = /** @type {(inputs: Emails_Notify_Item_Creator_Mod_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} a publié ${i?.mod}`)
};

const it_emails_notify_item_creator_mod_published = /** @type {(inputs: Emails_Notify_Item_Creator_Mod_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} ha pubblicato ${i?.mod}`)
};

const nl_emails_notify_item_creator_mod_published = /** @type {(inputs: Emails_Notify_Item_Creator_Mod_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} heeft ${i?.mod} gepubliceerd`)
};

const pl_emails_notify_item_creator_mod_published = /** @type {(inputs: Emails_Notify_Item_Creator_Mod_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} opublikował(a) ${i?.mod}`)
};

const pt_emails_notify_item_creator_mod_published = /** @type {(inputs: Emails_Notify_Item_Creator_Mod_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} publicou ${i?.mod}`)
};

const ru_emails_notify_item_creator_mod_published = /** @type {(inputs: Emails_Notify_Item_Creator_Mod_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} опубликовал(а) ${i?.mod}`)
};

const sv_emails_notify_item_creator_mod_published = /** @type {(inputs: Emails_Notify_Item_Creator_Mod_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} publicerade ${i?.mod}`)
};

const tr_emails_notify_item_creator_mod_published = /** @type {(inputs: Emails_Notify_Item_Creator_Mod_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor}, ${i?.mod} modunu yayımladı`)
};

const zh_emails_notify_item_creator_mod_published = /** @type {(inputs: Emails_Notify_Item_Creator_Mod_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} 发布了 ${i?.mod}`)
};

const ja_emails_notify_item_creator_mod_published = /** @type {(inputs: Emails_Notify_Item_Creator_Mod_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} さんが ${i?.mod} を公開しました`)
};

/**
* | output |
* | --- |
* | "{actor} published {mod}" |
*
* @param {Emails_Notify_Item_Creator_Mod_PublishedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_notify_item_creator_mod_published = /** @type {((inputs: Emails_Notify_Item_Creator_Mod_PublishedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Item_Creator_Mod_PublishedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_notify_item_creator_mod_published(inputs)
	if (locale === "de") return de_emails_notify_item_creator_mod_published(inputs)
	if (locale === "fr") return fr_emails_notify_item_creator_mod_published(inputs)
	if (locale === "it") return it_emails_notify_item_creator_mod_published(inputs)
	if (locale === "nl") return nl_emails_notify_item_creator_mod_published(inputs)
	if (locale === "pl") return pl_emails_notify_item_creator_mod_published(inputs)
	if (locale === "pt") return pt_emails_notify_item_creator_mod_published(inputs)
	if (locale === "ru") return ru_emails_notify_item_creator_mod_published(inputs)
	if (locale === "sv") return sv_emails_notify_item_creator_mod_published(inputs)
	if (locale === "tr") return tr_emails_notify_item_creator_mod_published(inputs)
	if (locale === "zh") return zh_emails_notify_item_creator_mod_published(inputs)
	if (locale === "ja") return ja_emails_notify_item_creator_mod_published(inputs)
	return en_emails_notify_item_creator_mod_published(inputs)
});
