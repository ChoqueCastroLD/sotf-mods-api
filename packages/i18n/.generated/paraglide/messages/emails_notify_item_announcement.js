/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Notify_Item_AnnouncementInputs */

const en_emails_notify_item_announcement = /** @type {(inputs: Emails_Notify_Item_AnnouncementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`There’s a new announcement from SOTF Mods`)
};

const es_emails_notify_item_announcement = /** @type {(inputs: Emails_Notify_Item_AnnouncementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hay un anuncio nuevo de SOTF Mods`)
};

const de_emails_notify_item_announcement = /** @type {(inputs: Emails_Notify_Item_AnnouncementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Es gibt eine neue Ankündigung von SOTF Mods`)
};

const fr_emails_notify_item_announcement = /** @type {(inputs: Emails_Notify_Item_AnnouncementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il y a une nouvelle annonce de SOTF Mods`)
};

const it_emails_notify_item_announcement = /** @type {(inputs: Emails_Notify_Item_AnnouncementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`C’è un nuovo annuncio di SOTF Mods`)
};

const nl_emails_notify_item_announcement = /** @type {(inputs: Emails_Notify_Item_AnnouncementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Er is een nieuwe aankondiging van SOTF Mods`)
};

const pl_emails_notify_item_announcement = /** @type {(inputs: Emails_Notify_Item_AnnouncementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jest nowe ogłoszenie od SOTF Mods`)
};

const pt_emails_notify_item_announcement = /** @type {(inputs: Emails_Notify_Item_AnnouncementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Há um novo anúncio do SOTF Mods`)
};

const ru_emails_notify_item_announcement = /** @type {(inputs: Emails_Notify_Item_AnnouncementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новое объявление от SOTF Mods`)
};

const sv_emails_notify_item_announcement = /** @type {(inputs: Emails_Notify_Item_AnnouncementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det finns ett nytt meddelande från SOTF Mods`)
};

const tr_emails_notify_item_announcement = /** @type {(inputs: Emails_Notify_Item_AnnouncementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods’tan yeni bir duyuru var`)
};

const zh_emails_notify_item_announcement = /** @type {(inputs: Emails_Notify_Item_AnnouncementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods 发布了新公告`)
};

const ja_emails_notify_item_announcement = /** @type {(inputs: Emails_Notify_Item_AnnouncementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods から新しいお知らせがあります`)
};

/**
* | output |
* | --- |
* | "There’s a new announcement from SOTF Mods" |
*
* @param {Emails_Notify_Item_AnnouncementInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_notify_item_announcement = /** @type {((inputs?: Emails_Notify_Item_AnnouncementInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Item_AnnouncementInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_notify_item_announcement(inputs)
	if (locale === "de") return de_emails_notify_item_announcement(inputs)
	if (locale === "fr") return fr_emails_notify_item_announcement(inputs)
	if (locale === "it") return it_emails_notify_item_announcement(inputs)
	if (locale === "nl") return nl_emails_notify_item_announcement(inputs)
	if (locale === "pl") return pl_emails_notify_item_announcement(inputs)
	if (locale === "pt") return pt_emails_notify_item_announcement(inputs)
	if (locale === "ru") return ru_emails_notify_item_announcement(inputs)
	if (locale === "sv") return sv_emails_notify_item_announcement(inputs)
	if (locale === "tr") return tr_emails_notify_item_announcement(inputs)
	if (locale === "zh") return zh_emails_notify_item_announcement(inputs)
	if (locale === "ja") return ja_emails_notify_item_announcement(inputs)
	return en_emails_notify_item_announcement(inputs)
});
