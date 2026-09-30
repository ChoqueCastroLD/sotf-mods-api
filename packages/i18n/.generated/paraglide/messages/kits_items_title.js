/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Items_TitleInputs */

const en_kits_items_title = /** @type {(inputs: Kits_Items_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In this kit`)
};

const es_kits_items_title = /** @type {(inputs: Kits_Items_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En este kit`)
};

const de_kits_items_title = /** @type {(inputs: Kits_Items_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In diesem Kit`)
};

const fr_kits_items_title = /** @type {(inputs: Kits_Items_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dans ce kit`)
};

const it_kits_items_title = /** @type {(inputs: Kits_Items_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In questo kit`)
};

const nl_kits_items_title = /** @type {(inputs: Kits_Items_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In deze kit`)
};

const pl_kits_items_title = /** @type {(inputs: Kits_Items_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`W tym zestawie`)
};

const pt_kits_items_title = /** @type {(inputs: Kits_Items_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neste kit`)
};

const ru_kits_items_title = /** @type {(inputs: Kits_Items_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`В этом наборе`)
};

const sv_kits_items_title = /** @type {(inputs: Kits_Items_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I det här kitet`)
};

const tr_kits_items_title = /** @type {(inputs: Kits_Items_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu kitte`)
};

const zh_kits_items_title = /** @type {(inputs: Kits_Items_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`套装内容`)
};

const ja_kits_items_title = /** @type {(inputs: Kits_Items_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このキットの中身`)
};

/**
* | output |
* | --- |
* | "In this kit" |
*
* @param {Kits_Items_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_items_title = /** @type {((inputs?: Kits_Items_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Items_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_items_title(inputs)
	if (locale === "de") return de_kits_items_title(inputs)
	if (locale === "fr") return fr_kits_items_title(inputs)
	if (locale === "it") return it_kits_items_title(inputs)
	if (locale === "nl") return nl_kits_items_title(inputs)
	if (locale === "pl") return pl_kits_items_title(inputs)
	if (locale === "pt") return pt_kits_items_title(inputs)
	if (locale === "ru") return ru_kits_items_title(inputs)
	if (locale === "sv") return sv_kits_items_title(inputs)
	if (locale === "tr") return tr_kits_items_title(inputs)
	if (locale === "zh") return zh_kits_items_title(inputs)
	if (locale === "ja") return ja_kits_items_title(inputs)
	return en_kits_items_title(inputs)
});
