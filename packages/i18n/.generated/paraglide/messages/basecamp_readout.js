/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_ReadoutInputs */

const en_basecamp_readout = /** @type {(inputs: Basecamp_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Basecamp`)
};

const es_basecamp_readout = /** @type {(inputs: Basecamp_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Campamento`)
};

const de_basecamp_readout = /** @type {(inputs: Basecamp_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Basislager`)
};

const fr_basecamp_readout = /** @type {(inputs: Basecamp_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Camp de base`)
};

const it_basecamp_readout = /** @type {(inputs: Basecamp_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Campo base`)
};

const nl_basecamp_readout = /** @type {(inputs: Basecamp_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Basiskamp`)
};

const pl_basecamp_readout = /** @type {(inputs: Basecamp_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obóz`)
};

const pt_basecamp_readout = /** @type {(inputs: Basecamp_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Acampamento`)
};

const ru_basecamp_readout = /** @type {(inputs: Basecamp_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Лагерь`)
};

const sv_basecamp_readout = /** @type {(inputs: Basecamp_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Basläger`)
};

const tr_basecamp_readout = /** @type {(inputs: Basecamp_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ana Kamp`)
};

const zh_basecamp_readout = /** @type {(inputs: Basecamp_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`营地`)
};

const ja_basecamp_readout = /** @type {(inputs: Basecamp_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ベースキャンプ`)
};

/**
* | output |
* | --- |
* | "Basecamp" |
*
* @param {Basecamp_ReadoutInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_readout = /** @type {((inputs?: Basecamp_ReadoutInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_ReadoutInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_readout(inputs)
	if (locale === "de") return de_basecamp_readout(inputs)
	if (locale === "fr") return fr_basecamp_readout(inputs)
	if (locale === "it") return it_basecamp_readout(inputs)
	if (locale === "nl") return nl_basecamp_readout(inputs)
	if (locale === "pl") return pl_basecamp_readout(inputs)
	if (locale === "pt") return pt_basecamp_readout(inputs)
	if (locale === "ru") return ru_basecamp_readout(inputs)
	if (locale === "sv") return sv_basecamp_readout(inputs)
	if (locale === "tr") return tr_basecamp_readout(inputs)
	if (locale === "zh") return zh_basecamp_readout(inputs)
	if (locale === "ja") return ja_basecamp_readout(inputs)
	return en_basecamp_readout(inputs)
});
