/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ creator: NonNullable<unknown> }} Kits_Item_ByInputs */

const en_kits_item_by = /** @type {(inputs: Kits_Item_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`by ${i?.creator}`)
};

const es_kits_item_by = /** @type {(inputs: Kits_Item_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`de ${i?.creator}`)
};

const de_kits_item_by = /** @type {(inputs: Kits_Item_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`von ${i?.creator}`)
};

const fr_kits_item_by = /** @type {(inputs: Kits_Item_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`par ${i?.creator}`)
};

const it_kits_item_by = /** @type {(inputs: Kits_Item_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`di ${i?.creator}`)
};

const nl_kits_item_by = /** @type {(inputs: Kits_Item_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`door ${i?.creator}`)
};

const pl_kits_item_by = /** @type {(inputs: Kits_Item_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`autor: ${i?.creator}`)
};

const pt_kits_item_by = /** @type {(inputs: Kits_Item_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`de ${i?.creator}`)
};

const ru_kits_item_by = /** @type {(inputs: Kits_Item_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`автор: ${i?.creator}`)
};

const sv_kits_item_by = /** @type {(inputs: Kits_Item_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`av ${i?.creator}`)
};

const tr_kits_item_by = /** @type {(inputs: Kits_Item_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`yapan: ${i?.creator}`)
};

const zh_kits_item_by = /** @type {(inputs: Kits_Item_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`作者：${i?.creator}`)
};

const ja_kits_item_by = /** @type {(inputs: Kits_Item_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`作者：${i?.creator}`)
};

/**
* | output |
* | --- |
* | "by {creator}" |
*
* @param {Kits_Item_ByInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_item_by = /** @type {((inputs: Kits_Item_ByInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Item_ByInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_item_by(inputs)
	if (locale === "de") return de_kits_item_by(inputs)
	if (locale === "fr") return fr_kits_item_by(inputs)
	if (locale === "it") return it_kits_item_by(inputs)
	if (locale === "nl") return nl_kits_item_by(inputs)
	if (locale === "pl") return pl_kits_item_by(inputs)
	if (locale === "pt") return pt_kits_item_by(inputs)
	if (locale === "ru") return ru_kits_item_by(inputs)
	if (locale === "sv") return sv_kits_item_by(inputs)
	if (locale === "tr") return tr_kits_item_by(inputs)
	if (locale === "zh") return zh_kits_item_by(inputs)
	if (locale === "ja") return ja_kits_item_by(inputs)
	return en_kits_item_by(inputs)
});
