/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_Empty_Unread_TitleInputs */

const en_signals_empty_unread_title = /** @type {(inputs: Signals_Empty_Unread_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No unread notifications`)
};

const es_signals_empty_unread_title = /** @type {(inputs: Signals_Empty_Unread_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No hay notificaciones sin leer`)
};

const de_signals_empty_unread_title = /** @type {(inputs: Signals_Empty_Unread_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine ungelesenen Benachrichtigungen`)
};

const fr_signals_empty_unread_title = /** @type {(inputs: Signals_Empty_Unread_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune notification non lue`)
};

const it_signals_empty_unread_title = /** @type {(inputs: Signals_Empty_Unread_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessuna notifica non letta`)
};

const nl_signals_empty_unread_title = /** @type {(inputs: Signals_Empty_Unread_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen ongelezen meldingen`)
};

const pl_signals_empty_unread_title = /** @type {(inputs: Signals_Empty_Unread_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak nieprzeczytanych powiadomień`)
};

const pt_signals_empty_unread_title = /** @type {(inputs: Signals_Empty_Unread_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhuma notificação não lida`)
};

const ru_signals_empty_unread_title = /** @type {(inputs: Signals_Empty_Unread_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нет непрочитанных уведомлений`)
};

const sv_signals_empty_unread_title = /** @type {(inputs: Signals_Empty_Unread_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga olästa aviseringar`)
};

const tr_signals_empty_unread_title = /** @type {(inputs: Signals_Empty_Unread_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Okunmamış bildirim yok`)
};

const zh_signals_empty_unread_title = /** @type {(inputs: Signals_Empty_Unread_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有未读通知`)
};

const ja_signals_empty_unread_title = /** @type {(inputs: Signals_Empty_Unread_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未読の通知はありません`)
};

/**
* | output |
* | --- |
* | "No unread notifications" |
*
* @param {Signals_Empty_Unread_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_empty_unread_title = /** @type {((inputs?: Signals_Empty_Unread_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Empty_Unread_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_empty_unread_title(inputs)
	if (locale === "de") return de_signals_empty_unread_title(inputs)
	if (locale === "fr") return fr_signals_empty_unread_title(inputs)
	if (locale === "it") return it_signals_empty_unread_title(inputs)
	if (locale === "nl") return nl_signals_empty_unread_title(inputs)
	if (locale === "pl") return pl_signals_empty_unread_title(inputs)
	if (locale === "pt") return pt_signals_empty_unread_title(inputs)
	if (locale === "ru") return ru_signals_empty_unread_title(inputs)
	if (locale === "sv") return sv_signals_empty_unread_title(inputs)
	if (locale === "tr") return tr_signals_empty_unread_title(inputs)
	if (locale === "zh") return zh_signals_empty_unread_title(inputs)
	if (locale === "ja") return ja_signals_empty_unread_title(inputs)
	return en_signals_empty_unread_title(inputs)
});
