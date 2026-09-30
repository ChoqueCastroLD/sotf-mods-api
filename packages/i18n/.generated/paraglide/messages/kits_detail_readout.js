/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Detail_ReadoutInputs */

const en_kits_detail_readout = /** @type {(inputs: Kits_Detail_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit`)
};

const es_kits_detail_readout = /** @type {(inputs: Kits_Detail_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit`)
};

const de_kits_detail_readout = /** @type {(inputs: Kits_Detail_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit`)
};

const fr_kits_detail_readout = /** @type {(inputs: Kits_Detail_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit`)
};

const it_kits_detail_readout = /** @type {(inputs: Kits_Detail_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit`)
};

const nl_kits_detail_readout = /** @type {(inputs: Kits_Detail_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit`)
};

const pl_kits_detail_readout = /** @type {(inputs: Kits_Detail_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zestaw`)
};

const pt_kits_detail_readout = /** @type {(inputs: Kits_Detail_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit`)
};

const ru_kits_detail_readout = /** @type {(inputs: Kits_Detail_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Набор`)
};

const sv_kits_detail_readout = /** @type {(inputs: Kits_Detail_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit`)
};

const tr_kits_detail_readout = /** @type {(inputs: Kits_Detail_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit`)
};

const zh_kits_detail_readout = /** @type {(inputs: Kits_Detail_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`套装`)
};

const ja_kits_detail_readout = /** @type {(inputs: Kits_Detail_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キット`)
};

/**
* | output |
* | --- |
* | "Kit" |
*
* @param {Kits_Detail_ReadoutInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_detail_readout = /** @type {((inputs?: Kits_Detail_ReadoutInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Detail_ReadoutInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_detail_readout(inputs)
	if (locale === "de") return de_kits_detail_readout(inputs)
	if (locale === "fr") return fr_kits_detail_readout(inputs)
	if (locale === "it") return it_kits_detail_readout(inputs)
	if (locale === "nl") return nl_kits_detail_readout(inputs)
	if (locale === "pl") return pl_kits_detail_readout(inputs)
	if (locale === "pt") return pt_kits_detail_readout(inputs)
	if (locale === "ru") return ru_kits_detail_readout(inputs)
	if (locale === "sv") return sv_kits_detail_readout(inputs)
	if (locale === "tr") return tr_kits_detail_readout(inputs)
	if (locale === "zh") return zh_kits_detail_readout(inputs)
	if (locale === "ja") return ja_kits_detail_readout(inputs)
	return en_kits_detail_readout(inputs)
});
