/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Kind_ModInputs */

const en_cmdk_kind_mod = /** @type {(inputs: Cmdk_Kind_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod`)
};

const es_cmdk_kind_mod = /** @type {(inputs: Cmdk_Kind_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod`)
};

const de_cmdk_kind_mod = /** @type {(inputs: Cmdk_Kind_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod`)
};

const fr_cmdk_kind_mod = /** @type {(inputs: Cmdk_Kind_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod`)
};

const it_cmdk_kind_mod = /** @type {(inputs: Cmdk_Kind_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod`)
};

const nl_cmdk_kind_mod = /** @type {(inputs: Cmdk_Kind_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod`)
};

const pl_cmdk_kind_mod = /** @type {(inputs: Cmdk_Kind_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod`)
};

const pt_cmdk_kind_mod = /** @type {(inputs: Cmdk_Kind_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod`)
};

const ru_cmdk_kind_mod = /** @type {(inputs: Cmdk_Kind_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Мод`)
};

const sv_cmdk_kind_mod = /** @type {(inputs: Cmdk_Kind_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modd`)
};

const tr_cmdk_kind_mod = /** @type {(inputs: Cmdk_Kind_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod`)
};

const zh_cmdk_kind_mod = /** @type {(inputs: Cmdk_Kind_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模组`)
};

const ja_cmdk_kind_mod = /** @type {(inputs: Cmdk_Kind_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD`)
};

/**
* | output |
* | --- |
* | "Mod" |
*
* @param {Cmdk_Kind_ModInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_kind_mod = /** @type {((inputs?: Cmdk_Kind_ModInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Kind_ModInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_kind_mod(inputs)
	if (locale === "de") return de_cmdk_kind_mod(inputs)
	if (locale === "fr") return fr_cmdk_kind_mod(inputs)
	if (locale === "it") return it_cmdk_kind_mod(inputs)
	if (locale === "nl") return nl_cmdk_kind_mod(inputs)
	if (locale === "pl") return pl_cmdk_kind_mod(inputs)
	if (locale === "pt") return pt_cmdk_kind_mod(inputs)
	if (locale === "ru") return ru_cmdk_kind_mod(inputs)
	if (locale === "sv") return sv_cmdk_kind_mod(inputs)
	if (locale === "tr") return tr_cmdk_kind_mod(inputs)
	if (locale === "zh") return zh_cmdk_kind_mod(inputs)
	if (locale === "ja") return ja_cmdk_kind_mod(inputs)
	return en_cmdk_kind_mod(inputs)
});
