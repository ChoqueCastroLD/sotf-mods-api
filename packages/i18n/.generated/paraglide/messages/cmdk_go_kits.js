/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Go_KitsInputs */

const en_cmdk_go_kits = /** @type {(inputs: Cmdk_Go_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits`)
};

const es_cmdk_go_kits = /** @type {(inputs: Cmdk_Go_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits`)
};

const de_cmdk_go_kits = /** @type {(inputs: Cmdk_Go_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits`)
};

const fr_cmdk_go_kits = /** @type {(inputs: Cmdk_Go_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits`)
};

const it_cmdk_go_kits = /** @type {(inputs: Cmdk_Go_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit`)
};

const nl_cmdk_go_kits = /** @type {(inputs: Cmdk_Go_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits`)
};

const pl_cmdk_go_kits = /** @type {(inputs: Cmdk_Go_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zestawy`)
};

const pt_cmdk_go_kits = /** @type {(inputs: Cmdk_Go_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits`)
};

const ru_cmdk_go_kits = /** @type {(inputs: Cmdk_Go_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Наборы`)
};

const sv_cmdk_go_kits = /** @type {(inputs: Cmdk_Go_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits`)
};

const tr_cmdk_go_kits = /** @type {(inputs: Cmdk_Go_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit'ler`)
};

const zh_cmdk_go_kits = /** @type {(inputs: Cmdk_Go_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`套件`)
};

const ja_cmdk_go_kits = /** @type {(inputs: Cmdk_Go_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キット`)
};

/**
* | output |
* | --- |
* | "Kits" |
*
* @param {Cmdk_Go_KitsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_go_kits = /** @type {((inputs?: Cmdk_Go_KitsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Go_KitsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_go_kits(inputs)
	if (locale === "de") return de_cmdk_go_kits(inputs)
	if (locale === "fr") return fr_cmdk_go_kits(inputs)
	if (locale === "it") return it_cmdk_go_kits(inputs)
	if (locale === "nl") return nl_cmdk_go_kits(inputs)
	if (locale === "pl") return pl_cmdk_go_kits(inputs)
	if (locale === "pt") return pt_cmdk_go_kits(inputs)
	if (locale === "ru") return ru_cmdk_go_kits(inputs)
	if (locale === "sv") return sv_cmdk_go_kits(inputs)
	if (locale === "tr") return tr_cmdk_go_kits(inputs)
	if (locale === "zh") return zh_cmdk_go_kits(inputs)
	if (locale === "ja") return ja_cmdk_go_kits(inputs)
	return en_cmdk_go_kits(inputs)
});
