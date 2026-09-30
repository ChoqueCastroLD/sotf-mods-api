/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ title: NonNullable<unknown> }} Signals_Announcement_TitledInputs */

const en_signals_announcement_titled = /** @type {(inputs: Signals_Announcement_TitledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Announcement: ${i?.title}`)
};

const es_signals_announcement_titled = /** @type {(inputs: Signals_Announcement_TitledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Anuncio: ${i?.title}`)
};

const de_signals_announcement_titled = /** @type {(inputs: Signals_Announcement_TitledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ankündigung: ${i?.title}`)
};

const fr_signals_announcement_titled = /** @type {(inputs: Signals_Announcement_TitledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Annonce : ${i?.title}`)
};

const it_signals_announcement_titled = /** @type {(inputs: Signals_Announcement_TitledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Annuncio: ${i?.title}`)
};

const nl_signals_announcement_titled = /** @type {(inputs: Signals_Announcement_TitledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mededeling: ${i?.title}`)
};

const pl_signals_announcement_titled = /** @type {(inputs: Signals_Announcement_TitledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ogłoszenie: ${i?.title}`)
};

const pt_signals_announcement_titled = /** @type {(inputs: Signals_Announcement_TitledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Anúncio: ${i?.title}`)
};

const ru_signals_announcement_titled = /** @type {(inputs: Signals_Announcement_TitledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Объявление: ${i?.title}`)
};

const sv_signals_announcement_titled = /** @type {(inputs: Signals_Announcement_TitledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Meddelande: ${i?.title}`)
};

const tr_signals_announcement_titled = /** @type {(inputs: Signals_Announcement_TitledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Duyuru: ${i?.title}`)
};

const zh_signals_announcement_titled = /** @type {(inputs: Signals_Announcement_TitledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`公告：${i?.title}`)
};

const ja_signals_announcement_titled = /** @type {(inputs: Signals_Announcement_TitledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`お知らせ：${i?.title}`)
};

/**
* | output |
* | --- |
* | "Announcement: {title}" |
*
* @param {Signals_Announcement_TitledInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_announcement_titled = /** @type {((inputs: Signals_Announcement_TitledInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Announcement_TitledInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_announcement_titled(inputs)
	if (locale === "de") return de_signals_announcement_titled(inputs)
	if (locale === "fr") return fr_signals_announcement_titled(inputs)
	if (locale === "it") return it_signals_announcement_titled(inputs)
	if (locale === "nl") return nl_signals_announcement_titled(inputs)
	if (locale === "pl") return pl_signals_announcement_titled(inputs)
	if (locale === "pt") return pt_signals_announcement_titled(inputs)
	if (locale === "ru") return ru_signals_announcement_titled(inputs)
	if (locale === "sv") return sv_signals_announcement_titled(inputs)
	if (locale === "tr") return tr_signals_announcement_titled(inputs)
	if (locale === "zh") return zh_signals_announcement_titled(inputs)
	if (locale === "ja") return ja_signals_announcement_titled(inputs)
	return en_signals_announcement_titled(inputs)
});
