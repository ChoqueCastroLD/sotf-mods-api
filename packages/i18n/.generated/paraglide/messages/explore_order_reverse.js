/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Order_ReverseInputs */

const en_explore_order_reverse = /** @type {(inputs: Explore_Order_ReverseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reverse order`)
};

const es_explore_order_reverse = /** @type {(inputs: Explore_Order_ReverseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invertir orden`)
};

const de_explore_order_reverse = /** @type {(inputs: Explore_Order_ReverseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reihenfolge umkehren`)
};

const fr_explore_order_reverse = /** @type {(inputs: Explore_Order_ReverseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inverser l’ordre`)
};

const it_explore_order_reverse = /** @type {(inputs: Explore_Order_ReverseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inverti l’ordine`)
};

const nl_explore_order_reverse = /** @type {(inputs: Explore_Order_ReverseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volgorde omkeren`)
};

const pl_explore_order_reverse = /** @type {(inputs: Explore_Order_ReverseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odwróć kolejność`)
};

const pt_explore_order_reverse = /** @type {(inputs: Explore_Order_ReverseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inverter ordem`)
};

const ru_explore_order_reverse = /** @type {(inputs: Explore_Order_ReverseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Обратный порядок`)
};

const sv_explore_order_reverse = /** @type {(inputs: Explore_Order_ReverseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vänd ordningen`)
};

const tr_explore_order_reverse = /** @type {(inputs: Explore_Order_ReverseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sırayı ters çevir`)
};

const zh_explore_order_reverse = /** @type {(inputs: Explore_Order_ReverseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`反转顺序`)
};

const ja_explore_order_reverse = /** @type {(inputs: Explore_Order_ReverseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`順番を逆にする`)
};

/**
* | output |
* | --- |
* | "Reverse order" |
*
* @param {Explore_Order_ReverseInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_order_reverse = /** @type {((inputs?: Explore_Order_ReverseInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Order_ReverseInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_order_reverse(inputs)
	if (locale === "de") return de_explore_order_reverse(inputs)
	if (locale === "fr") return fr_explore_order_reverse(inputs)
	if (locale === "it") return it_explore_order_reverse(inputs)
	if (locale === "nl") return nl_explore_order_reverse(inputs)
	if (locale === "pl") return pl_explore_order_reverse(inputs)
	if (locale === "pt") return pt_explore_order_reverse(inputs)
	if (locale === "ru") return ru_explore_order_reverse(inputs)
	if (locale === "sv") return sv_explore_order_reverse(inputs)
	if (locale === "tr") return tr_explore_order_reverse(inputs)
	if (locale === "zh") return zh_explore_order_reverse(inputs)
	if (locale === "ja") return ja_explore_order_reverse(inputs)
	return en_explore_order_reverse(inputs)
});
