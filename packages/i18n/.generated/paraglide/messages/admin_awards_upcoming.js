/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Awards_UpcomingInputs */

const en_admin_awards_upcoming = /** @type {(inputs: Admin_Awards_UpcomingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upcoming`)
};

const es_admin_awards_upcoming = /** @type {(inputs: Admin_Awards_UpcomingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Próximo`)
};

const de_admin_awards_upcoming = /** @type {(inputs: Admin_Awards_UpcomingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Demnächst`)
};

const fr_admin_awards_upcoming = /** @type {(inputs: Admin_Awards_UpcomingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`À venir`)
};

const it_admin_awards_upcoming = /** @type {(inputs: Admin_Awards_UpcomingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In arrivo`)
};

const nl_admin_awards_upcoming = /** @type {(inputs: Admin_Awards_UpcomingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Binnenkort`)
};

const pl_admin_awards_upcoming = /** @type {(inputs: Admin_Awards_UpcomingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wkrótce`)
};

const pt_admin_awards_upcoming = /** @type {(inputs: Admin_Awards_UpcomingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Em breve`)
};

const ru_admin_awards_upcoming = /** @type {(inputs: Admin_Awards_UpcomingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скоро`)
};

const sv_admin_awards_upcoming = /** @type {(inputs: Admin_Awards_UpcomingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommande`)
};

const tr_admin_awards_upcoming = /** @type {(inputs: Admin_Awards_UpcomingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yakında`)
};

const zh_admin_awards_upcoming = /** @type {(inputs: Admin_Awards_UpcomingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`即将开始`)
};

const ja_admin_awards_upcoming = /** @type {(inputs: Admin_Awards_UpcomingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`予定`)
};

/**
* | output |
* | --- |
* | "Upcoming" |
*
* @param {Admin_Awards_UpcomingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_awards_upcoming = /** @type {((inputs?: Admin_Awards_UpcomingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Awards_UpcomingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_awards_upcoming(inputs)
	if (locale === "de") return de_admin_awards_upcoming(inputs)
	if (locale === "fr") return fr_admin_awards_upcoming(inputs)
	if (locale === "it") return it_admin_awards_upcoming(inputs)
	if (locale === "nl") return nl_admin_awards_upcoming(inputs)
	if (locale === "pl") return pl_admin_awards_upcoming(inputs)
	if (locale === "pt") return pt_admin_awards_upcoming(inputs)
	if (locale === "ru") return ru_admin_awards_upcoming(inputs)
	if (locale === "sv") return sv_admin_awards_upcoming(inputs)
	if (locale === "tr") return tr_admin_awards_upcoming(inputs)
	if (locale === "zh") return zh_admin_awards_upcoming(inputs)
	if (locale === "ja") return ja_admin_awards_upcoming(inputs)
	return en_admin_awards_upcoming(inputs)
});
