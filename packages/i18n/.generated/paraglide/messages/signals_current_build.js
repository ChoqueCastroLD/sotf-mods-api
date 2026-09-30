/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_Current_BuildInputs */

const en_signals_current_build = /** @type {(inputs: Signals_Current_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`the current build`)
};

const es_signals_current_build = /** @type {(inputs: Signals_Current_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`la build actual`)
};

const de_signals_current_build = /** @type {(inputs: Signals_Current_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`dem aktuellen Build`)
};

const fr_signals_current_build = /** @type {(inputs: Signals_Current_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`la build actuelle`)
};

const it_signals_current_build = /** @type {(inputs: Signals_Current_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`la build attuale`)
};

const nl_signals_current_build = /** @type {(inputs: Signals_Current_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`de huidige build`)
};

const pl_signals_current_build = /** @type {(inputs: Signals_Current_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`bieżącym buildzie`)
};

const pt_signals_current_build = /** @type {(inputs: Signals_Current_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`a build atual`)
};

const ru_signals_current_build = /** @type {(inputs: Signals_Current_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`текущей сборке`)
};

const sv_signals_current_build = /** @type {(inputs: Signals_Current_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`det aktuella bygget`)
};

const tr_signals_current_build = /** @type {(inputs: Signals_Current_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`güncel sürüm`)
};

const zh_signals_current_build = /** @type {(inputs: Signals_Current_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`当前版本`)
};

const ja_signals_current_build = /** @type {(inputs: Signals_Current_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`現在のビルド`)
};

/**
* | output |
* | --- |
* | "the current build" |
*
* @param {Signals_Current_BuildInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_current_build = /** @type {((inputs?: Signals_Current_BuildInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Current_BuildInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_current_build(inputs)
	if (locale === "de") return de_signals_current_build(inputs)
	if (locale === "fr") return fr_signals_current_build(inputs)
	if (locale === "it") return it_signals_current_build(inputs)
	if (locale === "nl") return nl_signals_current_build(inputs)
	if (locale === "pl") return pl_signals_current_build(inputs)
	if (locale === "pt") return pt_signals_current_build(inputs)
	if (locale === "ru") return ru_signals_current_build(inputs)
	if (locale === "sv") return sv_signals_current_build(inputs)
	if (locale === "tr") return tr_signals_current_build(inputs)
	if (locale === "zh") return zh_signals_current_build(inputs)
	if (locale === "ja") return ja_signals_current_build(inputs)
	return en_signals_current_build(inputs)
});
