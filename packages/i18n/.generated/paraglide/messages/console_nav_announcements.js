/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Nav_AnnouncementsInputs */

const en_console_nav_announcements = /** @type {(inputs: Console_Nav_AnnouncementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Announcements`)
};

const es_console_nav_announcements = /** @type {(inputs: Console_Nav_AnnouncementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anuncios`)
};

const de_console_nav_announcements = /** @type {(inputs: Console_Nav_AnnouncementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ankündigungen`)
};

const fr_console_nav_announcements = /** @type {(inputs: Console_Nav_AnnouncementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annonces`)
};

const it_console_nav_announcements = /** @type {(inputs: Console_Nav_AnnouncementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annunci`)
};

const nl_console_nav_announcements = /** @type {(inputs: Console_Nav_AnnouncementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aankondigingen`)
};

const pl_console_nav_announcements = /** @type {(inputs: Console_Nav_AnnouncementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ogłoszenia`)
};

const pt_console_nav_announcements = /** @type {(inputs: Console_Nav_AnnouncementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avisos`)
};

const ru_console_nav_announcements = /** @type {(inputs: Console_Nav_AnnouncementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Объявления`)
};

const sv_console_nav_announcements = /** @type {(inputs: Console_Nav_AnnouncementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meddelanden`)
};

const tr_console_nav_announcements = /** @type {(inputs: Console_Nav_AnnouncementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Duyurular`)
};

const zh_console_nav_announcements = /** @type {(inputs: Console_Nav_AnnouncementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公告`)
};

const ja_console_nav_announcements = /** @type {(inputs: Console_Nav_AnnouncementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`お知らせ`)
};

/**
* | output |
* | --- |
* | "Announcements" |
*
* @param {Console_Nav_AnnouncementsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_nav_announcements = /** @type {((inputs?: Console_Nav_AnnouncementsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Nav_AnnouncementsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_nav_announcements(inputs)
	if (locale === "de") return de_console_nav_announcements(inputs)
	if (locale === "fr") return fr_console_nav_announcements(inputs)
	if (locale === "it") return it_console_nav_announcements(inputs)
	if (locale === "nl") return nl_console_nav_announcements(inputs)
	if (locale === "pl") return pl_console_nav_announcements(inputs)
	if (locale === "pt") return pt_console_nav_announcements(inputs)
	if (locale === "ru") return ru_console_nav_announcements(inputs)
	if (locale === "sv") return sv_console_nav_announcements(inputs)
	if (locale === "tr") return tr_console_nav_announcements(inputs)
	if (locale === "zh") return zh_console_nav_announcements(inputs)
	if (locale === "ja") return ja_console_nav_announcements(inputs)
	return en_console_nav_announcements(inputs)
});
