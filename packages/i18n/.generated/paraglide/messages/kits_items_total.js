/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown>, max: NonNullable<unknown> }} Kits_Items_TotalInputs */

const en_kits_items_total = /** @type {(inputs: Kits_Items_TotalInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Items: ${i?.count}/${i?.max}`)
};

const es_kits_items_total = /** @type {(inputs: Kits_Items_TotalInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Elementos: ${i?.count}/${i?.max}`)
};

const de_kits_items_total = /** @type {(inputs: Kits_Items_TotalInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Einträge: ${i?.count}/${i?.max}`)
};

const fr_kits_items_total = /** @type {(inputs: Kits_Items_TotalInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Éléments : ${i?.count}/${i?.max}`)
};

const it_kits_items_total = /** @type {(inputs: Kits_Items_TotalInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Elementi: ${i?.count}/${i?.max}`)
};

const nl_kits_items_total = /** @type {(inputs: Kits_Items_TotalInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Items: ${i?.count}/${i?.max}`)
};

const pl_kits_items_total = /** @type {(inputs: Kits_Items_TotalInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Elementy: ${i?.count}/${i?.max}`)
};

const pt_kits_items_total = /** @type {(inputs: Kits_Items_TotalInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Itens: ${i?.count}/${i?.max}`)
};

const ru_kits_items_total = /** @type {(inputs: Kits_Items_TotalInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Элементы: ${i?.count}/${i?.max}`)
};

const sv_kits_items_total = /** @type {(inputs: Kits_Items_TotalInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Objekt: ${i?.count}/${i?.max}`)
};

const tr_kits_items_total = /** @type {(inputs: Kits_Items_TotalInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Öğeler: ${i?.count}/${i?.max}`)
};

const zh_kits_items_total = /** @type {(inputs: Kits_Items_TotalInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`项目：${i?.count}/${i?.max}`)
};

const ja_kits_items_total = /** @type {(inputs: Kits_Items_TotalInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`アイテム：${i?.count}/${i?.max}`)
};

/**
* | output |
* | --- |
* | "Items: {count}/{max}" |
*
* @param {Kits_Items_TotalInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_items_total = /** @type {((inputs: Kits_Items_TotalInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Items_TotalInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_items_total(inputs)
	if (locale === "de") return de_kits_items_total(inputs)
	if (locale === "fr") return fr_kits_items_total(inputs)
	if (locale === "it") return it_kits_items_total(inputs)
	if (locale === "nl") return nl_kits_items_total(inputs)
	if (locale === "pl") return pl_kits_items_total(inputs)
	if (locale === "pt") return pt_kits_items_total(inputs)
	if (locale === "ru") return ru_kits_items_total(inputs)
	if (locale === "sv") return sv_kits_items_total(inputs)
	if (locale === "tr") return tr_kits_items_total(inputs)
	if (locale === "zh") return zh_kits_items_total(inputs)
	if (locale === "ja") return ja_kits_items_total(inputs)
	return en_kits_items_total(inputs)
});
