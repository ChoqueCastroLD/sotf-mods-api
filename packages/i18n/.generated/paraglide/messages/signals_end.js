/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_EndInputs */

const en_signals_end = /** @type {(inputs: Signals_EndInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`That’s every signal for now.`)
};

const es_signals_end = /** @type {(inputs: Signals_EndInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Estas son todas las señales por ahora.`)
};

const de_signals_end = /** @type {(inputs: Signals_EndInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das sind vorerst alle Signale.`)
};

const fr_signals_end = /** @type {(inputs: Signals_EndInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`C’est tout pour le moment.`)
};

const it_signals_end = /** @type {(inputs: Signals_EndInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Per ora questi sono tutti i segnali.`)
};

const nl_signals_end = /** @type {(inputs: Signals_EndInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dat zijn alle signalen voor nu.`)
};

const pl_signals_end = /** @type {(inputs: Signals_EndInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`To na razie wszystkie sygnały.`)
};

const pt_signals_end = /** @type {(inputs: Signals_EndInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esses são todos os sinais por enquanto.`)
};

const ru_signals_end = /** @type {(inputs: Signals_EndInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пока это все сигналы.`)
};

const sv_signals_end = /** @type {(inputs: Signals_EndInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det var alla signaler för nu.`)
};

const tr_signals_end = /** @type {(inputs: Signals_EndInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Şimdilik tüm sinyaller bu kadar.`)
};

const zh_signals_end = /** @type {(inputs: Signals_EndInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`目前就这些信号。`)
};

const ja_signals_end = /** @type {(inputs: Signals_EndInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`今のところシグナルはこれですべてです。`)
};

/**
* | output |
* | --- |
* | "That’s every signal for now." |
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
