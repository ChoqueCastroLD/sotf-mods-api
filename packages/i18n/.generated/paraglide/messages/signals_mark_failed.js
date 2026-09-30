/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_Mark_FailedInputs */

const en_signals_mark_failed = /** @type {(inputs: Signals_Mark_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn’t mark the signals as read`)
};

const es_signals_mark_failed = /** @type {(inputs: Signals_Mark_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se han podido marcar las señales como leídas`)
};

const de_signals_mark_failed = /** @type {(inputs: Signals_Mark_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Signale konnten nicht als gelesen markiert werden`)
};

const fr_signals_mark_failed = /** @type {(inputs: Signals_Mark_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de marquer les signaux comme lus`)
};

const it_signals_mark_failed = /** @type {(inputs: Signals_Mark_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile segnare i segnali come letti`)
};

const nl_signals_mark_failed = /** @type {(inputs: Signals_Mark_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De signalen konden niet als gelezen worden gemarkeerd`)
};

const pl_signals_mark_failed = /** @type {(inputs: Signals_Mark_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się oznaczyć sygnałów jako przeczytanych`)
};

const pt_signals_mark_failed = /** @type {(inputs: Signals_Mark_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível marcar os sinais como lidos`)
};

const ru_signals_mark_failed = /** @type {(inputs: Signals_Mark_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось отметить сигналы прочитанными`)
};

const sv_signals_mark_failed = /** @type {(inputs: Signals_Mark_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det gick inte att markera signalerna som lästa`)
};

const tr_signals_mark_failed = /** @type {(inputs: Signals_Mark_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sinyaller okundu sayılamadı`)
};

const zh_signals_mark_failed = /** @type {(inputs: Signals_Mark_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法将信号标为已读`)
};

const ja_signals_mark_failed = /** @type {(inputs: Signals_Mark_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`シグナルを既読にできませんでした`)
};

/**
* | output |
* | --- |
* | "Couldn’t mark the signals as read" |
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
