/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_Marked_AllInputs */

const en_signals_marked_all = /** @type {(inputs: Signals_Marked_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All signals marked as read`)
};

const es_signals_marked_all = /** @type {(inputs: Signals_Marked_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todas las señales marcadas como leídas`)
};

const de_signals_marked_all = /** @type {(inputs: Signals_Marked_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle Signale als gelesen markiert`)
};

const fr_signals_marked_all = /** @type {(inputs: Signals_Marked_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tous les signaux sont marqués comme lus`)
};

const it_signals_marked_all = /** @type {(inputs: Signals_Marked_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutti i segnali segnati come letti`)
};

const nl_signals_marked_all = /** @type {(inputs: Signals_Marked_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle signalen als gelezen gemarkeerd`)
};

const pl_signals_marked_all = /** @type {(inputs: Signals_Marked_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszystkie sygnały oznaczono jako przeczytane`)
};

const pt_signals_marked_all = /** @type {(inputs: Signals_Marked_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todos os sinais marcados como lidos`)
};

const ru_signals_marked_all = /** @type {(inputs: Signals_Marked_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Все сигналы отмечены прочитанными`)
};

const sv_signals_marked_all = /** @type {(inputs: Signals_Marked_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla signaler markerade som lästa`)
};

const tr_signals_marked_all = /** @type {(inputs: Signals_Marked_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tüm sinyaller okundu sayıldı`)
};

const zh_signals_marked_all = /** @type {(inputs: Signals_Marked_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`所有信号均已标为已读`)
};

const ja_signals_marked_all = /** @type {(inputs: Signals_Marked_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべてのシグナルを既読にしました`)
};

/**
* | output |
* | --- |
* | "All signals marked as read" |
*
* @param {Signals_Marked_AllInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_marked_all = /** @type {((inputs?: Signals_Marked_AllInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Marked_AllInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_marked_all(inputs)
	if (locale === "de") return de_signals_marked_all(inputs)
	if (locale === "fr") return fr_signals_marked_all(inputs)
	if (locale === "it") return it_signals_marked_all(inputs)
	if (locale === "nl") return nl_signals_marked_all(inputs)
	if (locale === "pl") return pl_signals_marked_all(inputs)
	if (locale === "pt") return pt_signals_marked_all(inputs)
	if (locale === "ru") return ru_signals_marked_all(inputs)
	if (locale === "sv") return sv_signals_marked_all(inputs)
	if (locale === "tr") return tr_signals_marked_all(inputs)
	if (locale === "zh") return zh_signals_marked_all(inputs)
	if (locale === "ja") return ja_signals_marked_all(inputs)
	return en_signals_marked_all(inputs)
});
