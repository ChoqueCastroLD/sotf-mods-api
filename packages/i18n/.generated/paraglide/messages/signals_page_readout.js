/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_Page_ReadoutInputs */

const en_signals_page_readout = /** @type {(inputs: Signals_Page_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Radio log`)
};

const es_signals_page_readout = /** @type {(inputs: Signals_Page_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registro de radio`)
};

const de_signals_page_readout = /** @type {(inputs: Signals_Page_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Funkprotokoll`)
};

const fr_signals_page_readout = /** @type {(inputs: Signals_Page_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Journal radio`)
};

const it_signals_page_readout = /** @type {(inputs: Signals_Page_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registro radio`)
};

const nl_signals_page_readout = /** @type {(inputs: Signals_Page_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Radiologboek`)
};

const pl_signals_page_readout = /** @type {(inputs: Signals_Page_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dziennik radiowy`)
};

const pt_signals_page_readout = /** @type {(inputs: Signals_Page_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registro de rádio`)
};

const ru_signals_page_readout = /** @type {(inputs: Signals_Page_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Радиожурнал`)
};

const sv_signals_page_readout = /** @type {(inputs: Signals_Page_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Radiologg`)
};

const tr_signals_page_readout = /** @type {(inputs: Signals_Page_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Telsiz kaydı`)
};

const zh_signals_page_readout = /** @type {(inputs: Signals_Page_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无线电日志`)
};

const ja_signals_page_readout = /** @type {(inputs: Signals_Page_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`無線ログ`)
};

/**
* | output |
* | --- |
* | "Radio log" |
*
* @param {Signals_Page_ReadoutInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_page_readout = /** @type {((inputs?: Signals_Page_ReadoutInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Page_ReadoutInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_page_readout(inputs)
	if (locale === "de") return de_signals_page_readout(inputs)
	if (locale === "fr") return fr_signals_page_readout(inputs)
	if (locale === "it") return it_signals_page_readout(inputs)
	if (locale === "nl") return nl_signals_page_readout(inputs)
	if (locale === "pl") return pl_signals_page_readout(inputs)
	if (locale === "pt") return pt_signals_page_readout(inputs)
	if (locale === "ru") return ru_signals_page_readout(inputs)
	if (locale === "sv") return sv_signals_page_readout(inputs)
	if (locale === "tr") return tr_signals_page_readout(inputs)
	if (locale === "zh") return zh_signals_page_readout(inputs)
	if (locale === "ja") return ja_signals_page_readout(inputs)
	return en_signals_page_readout(inputs)
});
