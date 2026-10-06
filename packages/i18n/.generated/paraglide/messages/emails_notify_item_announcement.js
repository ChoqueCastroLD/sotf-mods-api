/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Notify_Item_AnnouncementInputs */

const en_emails_notify_item_announcement = /** @type {(inputs: Emails_Notify_Item_AnnouncementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New announcement from SOTF Mods`)
};

const es_emails_notify_item_announcement = /** @type {(inputs: Emails_Notify_Item_AnnouncementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuevo anuncio de SOTF Mods`)
};

const de_emails_notify_item_announcement = /** @type {(inputs: Emails_Notify_Item_AnnouncementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neue Ankündigung von SOTF Mods`)
};

const fr_emails_notify_item_announcement = /** @type {(inputs: Emails_Notify_Item_AnnouncementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nouvelle annonce de SOTF Mods`)
};

const it_emails_notify_item_announcement = /** @type {(inputs: Emails_Notify_Item_AnnouncementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuovo annuncio di SOTF Mods`)
};

const nl_emails_notify_item_announcement = /** @type {(inputs: Emails_Notify_Item_AnnouncementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuwe aankondiging van SOTF Mods`)
};

const pl_emails_notify_item_announcement = /** @type {(inputs: Emails_Notify_Item_AnnouncementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nowe ogłoszenie od SOTF Mods`)
};

const pt_emails_notify_item_announcement = /** @type {(inputs: Emails_Notify_Item_AnnouncementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Novo anúncio do SOTF Mods`)
};

const ru_emails_notify_item_announcement = /** @type {(inputs: Emails_Notify_Item_AnnouncementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новое объявление от SOTF Mods`)
};

const sv_emails_notify_item_announcement = /** @type {(inputs: Emails_Notify_Item_AnnouncementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nytt meddelande från SOTF Mods`)
};

const tr_emails_notify_item_announcement = /** @type {(inputs: Emails_Notify_Item_AnnouncementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods’tan yeni duyuru`)
};

const zh_emails_notify_item_announcement = /** @type {(inputs: Emails_Notify_Item_AnnouncementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods 的新公告`)
};

const ja_emails_notify_item_announcement = /** @type {(inputs: Emails_Notify_Item_AnnouncementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods からの新しいお知らせ`)
};

/**
* | output |
* | --- |
* | "New announcement from SOTF Mods" |
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
