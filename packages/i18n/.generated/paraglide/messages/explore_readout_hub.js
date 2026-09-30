/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Readout_HubInputs */

const en_explore_readout_hub = /** @type {(inputs: Explore_Readout_HubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Field guide`)
};

const es_explore_readout_hub = /** @type {(inputs: Explore_Readout_HubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guía de campo`)
};

const de_explore_readout_hub = /** @type {(inputs: Explore_Readout_HubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Feldhandbuch`)
};

const fr_explore_readout_hub = /** @type {(inputs: Explore_Readout_HubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guide de terrain`)
};

const it_explore_readout_hub = /** @type {(inputs: Explore_Readout_HubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guida sul campo`)
};

const nl_explore_readout_hub = /** @type {(inputs: Explore_Readout_HubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veldgids`)
};

const pl_explore_readout_hub = /** @type {(inputs: Explore_Readout_HubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przewodnik terenowy`)
};

const pt_explore_readout_hub = /** @type {(inputs: Explore_Readout_HubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guia de campo`)
};

const ru_explore_readout_hub = /** @type {(inputs: Explore_Readout_HubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Полевой справочник`)
};

const sv_explore_readout_hub = /** @type {(inputs: Explore_Readout_HubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fälthandbok`)
};

const tr_explore_readout_hub = /** @type {(inputs: Explore_Readout_HubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saha rehberi`)
};

const zh_explore_readout_hub = /** @type {(inputs: Explore_Readout_HubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`野外指南`)
};

const ja_explore_readout_hub = /** @type {(inputs: Explore_Readout_HubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フィールドガイド`)
};

/**
* | output |
* | --- |
* | "Field guide" |
*
* @param {Explore_Readout_HubInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_readout_hub = /** @type {((inputs?: Explore_Readout_HubInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Readout_HubInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_readout_hub(inputs)
	if (locale === "de") return de_explore_readout_hub(inputs)
	if (locale === "fr") return fr_explore_readout_hub(inputs)
	if (locale === "it") return it_explore_readout_hub(inputs)
	if (locale === "nl") return nl_explore_readout_hub(inputs)
	if (locale === "pl") return pl_explore_readout_hub(inputs)
	if (locale === "pt") return pt_explore_readout_hub(inputs)
	if (locale === "ru") return ru_explore_readout_hub(inputs)
	if (locale === "sv") return sv_explore_readout_hub(inputs)
	if (locale === "tr") return tr_explore_readout_hub(inputs)
	if (locale === "zh") return zh_explore_readout_hub(inputs)
	if (locale === "ja") return ja_explore_readout_hub(inputs)
	return en_explore_readout_hub(inputs)
});
