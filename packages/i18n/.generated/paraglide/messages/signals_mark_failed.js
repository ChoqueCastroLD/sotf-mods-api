/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_Mark_FailedInputs */

const en_signals_mark_failed = /** @type {(inputs: Signals_Mark_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn’t mark the notifications as read`)
};

const es_signals_mark_failed = /** @type {(inputs: Signals_Mark_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se han podido marcar las notificaciones como leídas`)
};

const de_signals_mark_failed = /** @type {(inputs: Signals_Mark_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Benachrichtigungen konnten nicht als gelesen markiert werden`)
};

const fr_signals_mark_failed = /** @type {(inputs: Signals_Mark_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de marquer les notifications comme lues`)
};

const it_signals_mark_failed = /** @type {(inputs: Signals_Mark_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile segnare le notifiche come lette`)
};

const nl_signals_mark_failed = /** @type {(inputs: Signals_Mark_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De meldingen konden niet als gelezen worden gemarkeerd`)
};

const pl_signals_mark_failed = /** @type {(inputs: Signals_Mark_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się oznaczyć powiadomień jako przeczytanych`)
};

const pt_signals_mark_failed = /** @type {(inputs: Signals_Mark_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível marcar as notificações como lidas`)
};

const ru_signals_mark_failed = /** @type {(inputs: Signals_Mark_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось отметить уведомления прочитанными`)
};

const sv_signals_mark_failed = /** @type {(inputs: Signals_Mark_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det gick inte att markera aviseringarna som lästa`)
};

const tr_signals_mark_failed = /** @type {(inputs: Signals_Mark_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bildirimler okundu sayılamadı`)
};

const zh_signals_mark_failed = /** @type {(inputs: Signals_Mark_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法将通知标为已读`)
};

const ja_signals_mark_failed = /** @type {(inputs: Signals_Mark_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通知を既読にできませんでした`)
};

/**
* | output |
* | --- |
* | "Couldn’t mark the notifications as read" |
*
* @param {Signals_Mark_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_mark_failed = /** @type {((inputs?: Signals_Mark_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Mark_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_mark_failed(inputs)
	if (locale === "de") return de_signals_mark_failed(inputs)
	if (locale === "fr") return fr_signals_mark_failed(inputs)
	if (locale === "it") return it_signals_mark_failed(inputs)
	if (locale === "nl") return nl_signals_mark_failed(inputs)
	if (locale === "pl") return pl_signals_mark_failed(inputs)
	if (locale === "pt") return pt_signals_mark_failed(inputs)
	if (locale === "ru") return ru_signals_mark_failed(inputs)
	if (locale === "sv") return sv_signals_mark_failed(inputs)
	if (locale === "tr") return tr_signals_mark_failed(inputs)
	if (locale === "zh") return zh_signals_mark_failed(inputs)
	if (locale === "ja") return ja_signals_mark_failed(inputs)
	return en_signals_mark_failed(inputs)
});
