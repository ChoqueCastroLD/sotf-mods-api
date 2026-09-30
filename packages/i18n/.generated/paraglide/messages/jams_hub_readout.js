/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Hub_ReadoutInputs */

const en_jams_hub_readout = /** @type {(inputs: Jams_Hub_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD JAMS`)
};

const es_jams_hub_readout = /** @type {(inputs: Jams_Hub_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD JAMS`)
};

const de_jams_hub_readout = /** @type {(inputs: Jams_Hub_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD-JAMS`)
};

const fr_jams_hub_readout = /** @type {(inputs: Jams_Hub_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD JAMS`)
};

const it_jams_hub_readout = /** @type {(inputs: Jams_Hub_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD JAM`)
};

const nl_jams_hub_readout = /** @type {(inputs: Jams_Hub_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD JAMS`)
};

const pl_jams_hub_readout = /** @type {(inputs: Jams_Hub_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD JAMY`)
};

const pt_jams_hub_readout = /** @type {(inputs: Jams_Hub_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD JAMS`)
};

const ru_jams_hub_readout = /** @type {(inputs: Jams_Hub_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`МОД-ДЖЕМЫ`)
};

const sv_jams_hub_readout = /** @type {(inputs: Jams_Hub_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD JAMS`)
};

const tr_jams_hub_readout = /** @type {(inputs: Jams_Hub_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD JAM'LERİ`)
};

const zh_jams_hub_readout = /** @type {(inputs: Jams_Hub_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模组 JAM`)
};

const ja_jams_hub_readout = /** @type {(inputs: Jams_Hub_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD ジャム`)
};

/**
* | output |
* | --- |
* | "MOD JAMS" |
*
* @param {Jams_Hub_ReadoutInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_hub_readout = /** @type {((inputs?: Jams_Hub_ReadoutInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Hub_ReadoutInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_hub_readout(inputs)
	if (locale === "de") return de_jams_hub_readout(inputs)
	if (locale === "fr") return fr_jams_hub_readout(inputs)
	if (locale === "it") return it_jams_hub_readout(inputs)
	if (locale === "nl") return nl_jams_hub_readout(inputs)
	if (locale === "pl") return pl_jams_hub_readout(inputs)
	if (locale === "pt") return pt_jams_hub_readout(inputs)
	if (locale === "ru") return ru_jams_hub_readout(inputs)
	if (locale === "sv") return sv_jams_hub_readout(inputs)
	if (locale === "tr") return tr_jams_hub_readout(inputs)
	if (locale === "zh") return zh_jams_hub_readout(inputs)
	if (locale === "ja") return ja_jams_hub_readout(inputs)
	return en_jams_hub_readout(inputs)
});
