/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_SomeoneInputs */

const en_signals_someone = /** @type {(inputs: Signals_SomeoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Someone`)
};

const es_signals_someone = /** @type {(inputs: Signals_SomeoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alguien`)
};

const de_signals_someone = /** @type {(inputs: Signals_SomeoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jemand`)
};

const fr_signals_someone = /** @type {(inputs: Signals_SomeoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quelqu’un`)
};

const it_signals_someone = /** @type {(inputs: Signals_SomeoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualcuno`)
};

const nl_signals_someone = /** @type {(inputs: Signals_SomeoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Iemand`)
};

const pl_signals_someone = /** @type {(inputs: Signals_SomeoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ktoś`)
};

const pt_signals_someone = /** @type {(inputs: Signals_SomeoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alguém`)
};

const ru_signals_someone = /** @type {(inputs: Signals_SomeoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Кто-то`)
};

const sv_signals_someone = /** @type {(inputs: Signals_SomeoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Någon`)
};

const tr_signals_someone = /** @type {(inputs: Signals_SomeoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Biri`)
};

const zh_signals_someone = /** @type {(inputs: Signals_SomeoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`有人`)
};

const ja_signals_someone = /** @type {(inputs: Signals_SomeoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`誰か`)
};

/**
* | output |
* | --- |
* | "Someone" |
*
* @param {Signals_SomeoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_someone = /** @type {((inputs?: Signals_SomeoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_SomeoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_someone(inputs)
	if (locale === "de") return de_signals_someone(inputs)
	if (locale === "fr") return fr_signals_someone(inputs)
	if (locale === "it") return it_signals_someone(inputs)
	if (locale === "nl") return nl_signals_someone(inputs)
	if (locale === "pl") return pl_signals_someone(inputs)
	if (locale === "pt") return pt_signals_someone(inputs)
	if (locale === "ru") return ru_signals_someone(inputs)
	if (locale === "sv") return sv_signals_someone(inputs)
	if (locale === "tr") return tr_signals_someone(inputs)
	if (locale === "zh") return zh_signals_someone(inputs)
	if (locale === "ja") return ja_signals_someone(inputs)
	return en_signals_someone(inputs)
});
