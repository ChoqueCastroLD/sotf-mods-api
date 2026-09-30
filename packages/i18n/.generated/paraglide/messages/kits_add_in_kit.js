/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Add_In_KitInputs */

const en_kits_add_in_kit = /** @type {(inputs: Kits_Add_In_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In this kit`)
};

const es_kits_add_in_kit = /** @type {(inputs: Kits_Add_In_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En este kit`)
};

const de_kits_add_in_kit = /** @type {(inputs: Kits_Add_In_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Im Kit`)
};

const fr_kits_add_in_kit = /** @type {(inputs: Kits_Add_In_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dans ce kit`)
};

const it_kits_add_in_kit = /** @type {(inputs: Kits_Add_In_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nel kit`)
};

const nl_kits_add_in_kit = /** @type {(inputs: Kits_Add_In_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In deze kit`)
};

const pl_kits_add_in_kit = /** @type {(inputs: Kits_Add_In_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`W zestawie`)
};

const pt_kits_add_in_kit = /** @type {(inputs: Kits_Add_In_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neste kit`)
};

const ru_kits_add_in_kit = /** @type {(inputs: Kits_Add_In_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`В наборе`)
};

const sv_kits_add_in_kit = /** @type {(inputs: Kits_Add_In_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I kitet`)
};

const tr_kits_add_in_kit = /** @type {(inputs: Kits_Add_In_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kitte`)
};

const zh_kits_add_in_kit = /** @type {(inputs: Kits_Add_In_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已在套装中`)
};

const ja_kits_add_in_kit = /** @type {(inputs: Kits_Add_In_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`追加済み`)
};

/**
* | output |
* | --- |
* | "In this kit" |
*
* @param {Kits_Add_In_KitInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_add_in_kit = /** @type {((inputs?: Kits_Add_In_KitInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Add_In_KitInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_add_in_kit(inputs)
	if (locale === "de") return de_kits_add_in_kit(inputs)
	if (locale === "fr") return fr_kits_add_in_kit(inputs)
	if (locale === "it") return it_kits_add_in_kit(inputs)
	if (locale === "nl") return nl_kits_add_in_kit(inputs)
	if (locale === "pl") return pl_kits_add_in_kit(inputs)
	if (locale === "pt") return pt_kits_add_in_kit(inputs)
	if (locale === "ru") return ru_kits_add_in_kit(inputs)
	if (locale === "sv") return sv_kits_add_in_kit(inputs)
	if (locale === "tr") return tr_kits_add_in_kit(inputs)
	if (locale === "zh") return zh_kits_add_in_kit(inputs)
	if (locale === "ja") return ja_kits_add_in_kit(inputs)
	return en_kits_add_in_kit(inputs)
});
