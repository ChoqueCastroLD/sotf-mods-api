/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_Mark_ReadInputs */

const en_signals_mark_read = /** @type {(inputs: Signals_Mark_ReadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mark as read`)
};

const es_signals_mark_read = /** @type {(inputs: Signals_Mark_ReadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marcar como leída`)
};

const de_signals_mark_read = /** @type {(inputs: Signals_Mark_ReadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Als gelesen markieren`)
};

const fr_signals_mark_read = /** @type {(inputs: Signals_Mark_ReadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marquer comme lu`)
};

const it_signals_mark_read = /** @type {(inputs: Signals_Mark_ReadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segna come letto`)
};

const nl_signals_mark_read = /** @type {(inputs: Signals_Mark_ReadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Als gelezen markeren`)
};

const pl_signals_mark_read = /** @type {(inputs: Signals_Mark_ReadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oznacz jako przeczytane`)
};

const pt_signals_mark_read = /** @type {(inputs: Signals_Mark_ReadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marcar como lido`)
};

const ru_signals_mark_read = /** @type {(inputs: Signals_Mark_ReadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отметить прочитанным`)
};

const sv_signals_mark_read = /** @type {(inputs: Signals_Mark_ReadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markera som läst`)
};

const tr_signals_mark_read = /** @type {(inputs: Signals_Mark_ReadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Okundu say`)
};

const zh_signals_mark_read = /** @type {(inputs: Signals_Mark_ReadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`标为已读`)
};

const ja_signals_mark_read = /** @type {(inputs: Signals_Mark_ReadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`既読にする`)
};

/**
* | output |
* | --- |
* | "Mark as read" |
*
* @param {Signals_Mark_ReadInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_mark_read = /** @type {((inputs?: Signals_Mark_ReadInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Mark_ReadInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_mark_read(inputs)
	if (locale === "de") return de_signals_mark_read(inputs)
	if (locale === "fr") return fr_signals_mark_read(inputs)
	if (locale === "it") return it_signals_mark_read(inputs)
	if (locale === "nl") return nl_signals_mark_read(inputs)
	if (locale === "pl") return pl_signals_mark_read(inputs)
	if (locale === "pt") return pt_signals_mark_read(inputs)
	if (locale === "ru") return ru_signals_mark_read(inputs)
	if (locale === "sv") return sv_signals_mark_read(inputs)
	if (locale === "tr") return tr_signals_mark_read(inputs)
	if (locale === "zh") return zh_signals_mark_read(inputs)
	if (locale === "ja") return ja_signals_mark_read(inputs)
	return en_signals_mark_read(inputs)
});
