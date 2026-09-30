/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Item_PinnedInputs */

const en_kits_item_pinned = /** @type {(inputs: Kits_Item_PinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(pinned version)`)
};

const es_kits_item_pinned = /** @type {(inputs: Kits_Item_PinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(versión fijada)`)
};

const de_kits_item_pinned = /** @type {(inputs: Kits_Item_PinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(feste Version)`)
};

const fr_kits_item_pinned = /** @type {(inputs: Kits_Item_PinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(version épinglée)`)
};

const it_kits_item_pinned = /** @type {(inputs: Kits_Item_PinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(versione fissata)`)
};

const nl_kits_item_pinned = /** @type {(inputs: Kits_Item_PinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(vastgezette versie)`)
};

const pl_kits_item_pinned = /** @type {(inputs: Kits_Item_PinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(przypięta wersja)`)
};

const pt_kits_item_pinned = /** @type {(inputs: Kits_Item_PinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(versão fixada)`)
};

const ru_kits_item_pinned = /** @type {(inputs: Kits_Item_PinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(закреплённая версия)`)
};

const sv_kits_item_pinned = /** @type {(inputs: Kits_Item_PinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(låst version)`)
};

const tr_kits_item_pinned = /** @type {(inputs: Kits_Item_PinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(sabitlenmiş sürüm)`)
};

const zh_kits_item_pinned = /** @type {(inputs: Kits_Item_PinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`（已固定版本）`)
};

const ja_kits_item_pinned = /** @type {(inputs: Kits_Item_PinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`（固定バージョン）`)
};

/**
* | output |
* | --- |
* | "(pinned version)" |
*
* @param {Kits_Item_PinnedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_item_pinned = /** @type {((inputs?: Kits_Item_PinnedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Item_PinnedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_item_pinned(inputs)
	if (locale === "de") return de_kits_item_pinned(inputs)
	if (locale === "fr") return fr_kits_item_pinned(inputs)
	if (locale === "it") return it_kits_item_pinned(inputs)
	if (locale === "nl") return nl_kits_item_pinned(inputs)
	if (locale === "pl") return pl_kits_item_pinned(inputs)
	if (locale === "pt") return pt_kits_item_pinned(inputs)
	if (locale === "ru") return ru_kits_item_pinned(inputs)
	if (locale === "sv") return sv_kits_item_pinned(inputs)
	if (locale === "tr") return tr_kits_item_pinned(inputs)
	if (locale === "zh") return zh_kits_item_pinned(inputs)
	if (locale === "ja") return ja_kits_item_pinned(inputs)
	return en_kits_item_pinned(inputs)
});
