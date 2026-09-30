/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Kind_KitInputs */

const en_cmdk_kind_kit = /** @type {(inputs: Cmdk_Kind_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit`)
};

const es_cmdk_kind_kit = /** @type {(inputs: Cmdk_Kind_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit`)
};

const de_cmdk_kind_kit = /** @type {(inputs: Cmdk_Kind_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit`)
};

const fr_cmdk_kind_kit = /** @type {(inputs: Cmdk_Kind_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit`)
};

const it_cmdk_kind_kit = /** @type {(inputs: Cmdk_Kind_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit`)
};

const nl_cmdk_kind_kit = /** @type {(inputs: Cmdk_Kind_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit`)
};

const pl_cmdk_kind_kit = /** @type {(inputs: Cmdk_Kind_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zestaw`)
};

const pt_cmdk_kind_kit = /** @type {(inputs: Cmdk_Kind_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit`)
};

const ru_cmdk_kind_kit = /** @type {(inputs: Cmdk_Kind_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Набор`)
};

const sv_cmdk_kind_kit = /** @type {(inputs: Cmdk_Kind_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit`)
};

const tr_cmdk_kind_kit = /** @type {(inputs: Cmdk_Kind_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit`)
};

const zh_cmdk_kind_kit = /** @type {(inputs: Cmdk_Kind_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`套装`)
};

const ja_cmdk_kind_kit = /** @type {(inputs: Cmdk_Kind_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キット`)
};

/**
* | output |
* | --- |
* | "Kit" |
*
* @param {Cmdk_Kind_KitInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_kind_kit = /** @type {((inputs?: Cmdk_Kind_KitInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Kind_KitInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_kind_kit(inputs)
	if (locale === "de") return de_cmdk_kind_kit(inputs)
	if (locale === "fr") return fr_cmdk_kind_kit(inputs)
	if (locale === "it") return it_cmdk_kind_kit(inputs)
	if (locale === "nl") return nl_cmdk_kind_kit(inputs)
	if (locale === "pl") return pl_cmdk_kind_kit(inputs)
	if (locale === "pt") return pt_cmdk_kind_kit(inputs)
	if (locale === "ru") return ru_cmdk_kind_kit(inputs)
	if (locale === "sv") return sv_cmdk_kind_kit(inputs)
	if (locale === "tr") return tr_cmdk_kind_kit(inputs)
	if (locale === "zh") return zh_cmdk_kind_kit(inputs)
	if (locale === "ja") return ja_cmdk_kind_kit(inputs)
	return en_cmdk_kind_kit(inputs)
});
