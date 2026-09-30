/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_AnnouncementInputs */

const en_signals_announcement = /** @type {(inputs: Signals_AnnouncementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New announcement from the Rangers`)
};

const es_signals_announcement = /** @type {(inputs: Signals_AnnouncementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuevo anuncio de los guardabosques`)
};

const de_signals_announcement = /** @type {(inputs: Signals_AnnouncementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neue Ankündigung der Ranger`)
};

const fr_signals_announcement = /** @type {(inputs: Signals_AnnouncementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nouvelle annonce des rangers`)
};

const it_signals_announcement = /** @type {(inputs: Signals_AnnouncementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuovo annuncio dei ranger`)
};

const nl_signals_announcement = /** @type {(inputs: Signals_AnnouncementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuwe mededeling van de rangers`)
};

const pl_signals_announcement = /** @type {(inputs: Signals_AnnouncementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nowe ogłoszenie od strażników`)
};

const pt_signals_announcement = /** @type {(inputs: Signals_AnnouncementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Novo anúncio dos guardas`)
};

const ru_signals_announcement = /** @type {(inputs: Signals_AnnouncementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новое объявление от рейнджеров`)
};

const sv_signals_announcement = /** @type {(inputs: Signals_AnnouncementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nytt meddelande från rangers`)
};

const tr_signals_announcement = /** @type {(inputs: Signals_AnnouncementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Koruculardan yeni duyuru`)
};

const zh_signals_announcement = /** @type {(inputs: Signals_AnnouncementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`护林员发布了新公告`)
};

const ja_signals_announcement = /** @type {(inputs: Signals_AnnouncementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レンジャーからの新しいお知らせ`)
};

/**
* | output |
* | --- |
* | "New announcement from the Rangers" |
*
* @param {Signals_AnnouncementInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_announcement = /** @type {((inputs?: Signals_AnnouncementInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_AnnouncementInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_announcement(inputs)
	if (locale === "de") return de_signals_announcement(inputs)
	if (locale === "fr") return fr_signals_announcement(inputs)
	if (locale === "it") return it_signals_announcement(inputs)
	if (locale === "nl") return nl_signals_announcement(inputs)
	if (locale === "pl") return pl_signals_announcement(inputs)
	if (locale === "pt") return pt_signals_announcement(inputs)
	if (locale === "ru") return ru_signals_announcement(inputs)
	if (locale === "sv") return sv_signals_announcement(inputs)
	if (locale === "tr") return tr_signals_announcement(inputs)
	if (locale === "zh") return zh_signals_announcement(inputs)
	if (locale === "ja") return ja_signals_announcement(inputs)
	return en_signals_announcement(inputs)
});
