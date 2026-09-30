/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_AnnouncementInputs */

const en_settings_notif_announcement = /** @type {(inputs: Settings_Notif_AnnouncementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Announcements`)
};

const es_settings_notif_announcement = /** @type {(inputs: Settings_Notif_AnnouncementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anuncios`)
};

const de_settings_notif_announcement = /** @type {(inputs: Settings_Notif_AnnouncementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ankündigungen`)
};

const fr_settings_notif_announcement = /** @type {(inputs: Settings_Notif_AnnouncementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annonces`)
};

const it_settings_notif_announcement = /** @type {(inputs: Settings_Notif_AnnouncementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annunci`)
};

const nl_settings_notif_announcement = /** @type {(inputs: Settings_Notif_AnnouncementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mededelingen`)
};

const pl_settings_notif_announcement = /** @type {(inputs: Settings_Notif_AnnouncementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ogłoszenia`)
};

const pt_settings_notif_announcement = /** @type {(inputs: Settings_Notif_AnnouncementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anúncios`)
};

const ru_settings_notif_announcement = /** @type {(inputs: Settings_Notif_AnnouncementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Объявления`)
};

const sv_settings_notif_announcement = /** @type {(inputs: Settings_Notif_AnnouncementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meddelanden`)
};

const tr_settings_notif_announcement = /** @type {(inputs: Settings_Notif_AnnouncementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Duyurular`)
};

const zh_settings_notif_announcement = /** @type {(inputs: Settings_Notif_AnnouncementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公告`)
};

const ja_settings_notif_announcement = /** @type {(inputs: Settings_Notif_AnnouncementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`お知らせ`)
};

/**
* | output |
* | --- |
* | "Announcements" |
*
* @param {Settings_Notif_AnnouncementInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_announcement = /** @type {((inputs?: Settings_Notif_AnnouncementInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_AnnouncementInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_announcement(inputs)
	if (locale === "de") return de_settings_notif_announcement(inputs)
	if (locale === "fr") return fr_settings_notif_announcement(inputs)
	if (locale === "it") return it_settings_notif_announcement(inputs)
	if (locale === "nl") return nl_settings_notif_announcement(inputs)
	if (locale === "pl") return pl_settings_notif_announcement(inputs)
	if (locale === "pt") return pt_settings_notif_announcement(inputs)
	if (locale === "ru") return ru_settings_notif_announcement(inputs)
	if (locale === "sv") return sv_settings_notif_announcement(inputs)
	if (locale === "tr") return tr_settings_notif_announcement(inputs)
	if (locale === "zh") return zh_settings_notif_announcement(inputs)
	if (locale === "ja") return ja_settings_notif_announcement(inputs)
	return en_settings_notif_announcement(inputs)
});
