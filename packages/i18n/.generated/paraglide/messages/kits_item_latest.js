/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Item_LatestInputs */

const en_kits_item_latest = /** @type {(inputs: Kits_Item_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Always the latest`)
};

const es_kits_item_latest = /** @type {(inputs: Kits_Item_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Siempre la última`)
};

const de_kits_item_latest = /** @type {(inputs: Kits_Item_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Immer die neueste`)
};

const fr_kits_item_latest = /** @type {(inputs: Kits_Item_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toujours la dernière`)
};

const it_kits_item_latest = /** @type {(inputs: Kits_Item_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sempre l’ultima`)
};

const nl_kits_item_latest = /** @type {(inputs: Kits_Item_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Altijd de nieuwste`)
};

const pl_kits_item_latest = /** @type {(inputs: Kits_Item_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zawsze najnowsza`)
};

const pt_kits_item_latest = /** @type {(inputs: Kits_Item_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sempre a mais recente`)
};

const ru_kits_item_latest = /** @type {(inputs: Kits_Item_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Всегда последняя`)
};

const sv_kits_item_latest = /** @type {(inputs: Kits_Item_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alltid den senaste`)
};

const tr_kits_item_latest = /** @type {(inputs: Kits_Item_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Her zaman en yenisi`)
};

const zh_kits_item_latest = /** @type {(inputs: Kits_Item_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`始终最新`)
};

const ja_kits_item_latest = /** @type {(inputs: Kits_Item_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`常に最新`)
};

/**
* | output |
* | --- |
* | "Always the latest" |
*
* @param {Kits_Item_LatestInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_item_latest = /** @type {((inputs?: Kits_Item_LatestInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Item_LatestInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_item_latest(inputs)
	if (locale === "de") return de_kits_item_latest(inputs)
	if (locale === "fr") return fr_kits_item_latest(inputs)
	if (locale === "it") return it_kits_item_latest(inputs)
	if (locale === "nl") return nl_kits_item_latest(inputs)
	if (locale === "pl") return pl_kits_item_latest(inputs)
	if (locale === "pt") return pt_kits_item_latest(inputs)
	if (locale === "ru") return ru_kits_item_latest(inputs)
	if (locale === "sv") return sv_kits_item_latest(inputs)
	if (locale === "tr") return tr_kits_item_latest(inputs)
	if (locale === "zh") return zh_kits_item_latest(inputs)
	if (locale === "ja") return ja_kits_item_latest(inputs)
	return en_kits_item_latest(inputs)
});
