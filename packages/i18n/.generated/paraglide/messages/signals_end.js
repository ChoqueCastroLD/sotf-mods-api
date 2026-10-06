/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_EndInputs */

const en_signals_end = /** @type {(inputs: Signals_EndInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No more notifications.`)
};

const es_signals_end = /** @type {(inputs: Signals_EndInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No hay más notificaciones.`)
};

const de_signals_end = /** @type {(inputs: Signals_EndInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine weiteren Benachrichtigungen.`)
};

const fr_signals_end = /** @type {(inputs: Signals_EndInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune autre notification.`)
};

const it_signals_end = /** @type {(inputs: Signals_EndInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non ci sono altre notifiche.`)
};

const nl_signals_end = /** @type {(inputs: Signals_EndInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen verdere meldingen.`)
};

const pl_signals_end = /** @type {(inputs: Signals_EndInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak kolejnych powiadomień.`)
};

const pt_signals_end = /** @type {(inputs: Signals_EndInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não há mais notificações.`)
};

const ru_signals_end = /** @type {(inputs: Signals_EndInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Больше уведомлений нет.`)
};

const sv_signals_end = /** @type {(inputs: Signals_EndInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga fler aviseringar.`)
};

const tr_signals_end = /** @type {(inputs: Signals_EndInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başka bildirim yok.`)
};

const zh_signals_end = /** @type {(inputs: Signals_EndInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有更多通知了。`)
};

const ja_signals_end = /** @type {(inputs: Signals_EndInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`これ以上の通知はありません。`)
};

/**
* | output |
* | --- |
* | "No more notifications." |
*
* @param {Signals_EndInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_end = /** @type {((inputs?: Signals_EndInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_EndInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_end(inputs)
	if (locale === "de") return de_signals_end(inputs)
	if (locale === "fr") return fr_signals_end(inputs)
	if (locale === "it") return it_signals_end(inputs)
	if (locale === "nl") return nl_signals_end(inputs)
	if (locale === "pl") return pl_signals_end(inputs)
	if (locale === "pt") return pt_signals_end(inputs)
	if (locale === "ru") return ru_signals_end(inputs)
	if (locale === "sv") return sv_signals_end(inputs)
	if (locale === "tr") return tr_signals_end(inputs)
	if (locale === "zh") return zh_signals_end(inputs)
	if (locale === "ja") return ja_signals_end(inputs)
	return en_signals_end(inputs)
});
