/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Item_Kind_BuildInputs */

const en_kits_item_kind_build = /** @type {(inputs: Kits_Item_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build`)
};

const es_kits_item_kind_build = /** @type {(inputs: Kits_Item_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Construcción`)
};

const de_kits_item_kind_build = /** @type {(inputs: Kits_Item_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bauwerk`)
};

const fr_kits_item_kind_build = /** @type {(inputs: Kits_Item_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Construction`)
};

const it_kits_item_kind_build = /** @type {(inputs: Kits_Item_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Costruzione`)
};

const nl_kits_item_kind_build = /** @type {(inputs: Kits_Item_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bouwwerk`)
};

const pl_kits_item_kind_build = /** @type {(inputs: Kits_Item_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Budowla`)
};

const pt_kits_item_kind_build = /** @type {(inputs: Kits_Item_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Construção`)
};

const ru_kits_item_kind_build = /** @type {(inputs: Kits_Item_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Постройка`)
};

const sv_kits_item_kind_build = /** @type {(inputs: Kits_Item_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bygge`)
};

const tr_kits_item_kind_build = /** @type {(inputs: Kits_Item_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapı`)
};

const zh_kits_item_kind_build = /** @type {(inputs: Kits_Item_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`建筑`)
};

const ja_kits_item_kind_build = /** @type {(inputs: Kits_Item_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`建築物`)
};

/**
* | output |
* | --- |
* | "Build" |
*
* @param {Kits_Item_Kind_BuildInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_item_kind_build = /** @type {((inputs?: Kits_Item_Kind_BuildInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Item_Kind_BuildInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_item_kind_build(inputs)
	if (locale === "de") return de_kits_item_kind_build(inputs)
	if (locale === "fr") return fr_kits_item_kind_build(inputs)
	if (locale === "it") return it_kits_item_kind_build(inputs)
	if (locale === "nl") return nl_kits_item_kind_build(inputs)
	if (locale === "pl") return pl_kits_item_kind_build(inputs)
	if (locale === "pt") return pt_kits_item_kind_build(inputs)
	if (locale === "ru") return ru_kits_item_kind_build(inputs)
	if (locale === "sv") return sv_kits_item_kind_build(inputs)
	if (locale === "tr") return tr_kits_item_kind_build(inputs)
	if (locale === "zh") return zh_kits_item_kind_build(inputs)
	if (locale === "ja") return ja_kits_item_kind_build(inputs)
	return en_kits_item_kind_build(inputs)
});
