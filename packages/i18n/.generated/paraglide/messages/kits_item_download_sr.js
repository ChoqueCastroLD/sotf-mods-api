/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown>, version: NonNullable<unknown> }} Kits_Item_Download_SrInputs */

const en_kits_item_download_sr = /** @type {(inputs: Kits_Item_Download_SrInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} v${i?.version}`)
};

const es_kits_item_download_sr = /** @type {(inputs: Kits_Item_Download_SrInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} v${i?.version}`)
};

const de_kits_item_download_sr = /** @type {(inputs: Kits_Item_Download_SrInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} v${i?.version}`)
};

const fr_kits_item_download_sr = /** @type {(inputs: Kits_Item_Download_SrInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} v${i?.version}`)
};

const it_kits_item_download_sr = /** @type {(inputs: Kits_Item_Download_SrInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} v${i?.version}`)
};

const nl_kits_item_download_sr = /** @type {(inputs: Kits_Item_Download_SrInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} v${i?.version}`)
};

const pl_kits_item_download_sr = /** @type {(inputs: Kits_Item_Download_SrInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} v${i?.version}`)
};

const pt_kits_item_download_sr = /** @type {(inputs: Kits_Item_Download_SrInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} v${i?.version}`)
};

const ru_kits_item_download_sr = /** @type {(inputs: Kits_Item_Download_SrInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} v${i?.version}`)
};

const sv_kits_item_download_sr = /** @type {(inputs: Kits_Item_Download_SrInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} v${i?.version}`)
};

const tr_kits_item_download_sr = /** @type {(inputs: Kits_Item_Download_SrInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} v${i?.version}`)
};

const zh_kits_item_download_sr = /** @type {(inputs: Kits_Item_Download_SrInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} v${i?.version}`)
};

const ja_kits_item_download_sr = /** @type {(inputs: Kits_Item_Download_SrInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} v${i?.version}`)
};

/**
* | output |
* | --- |
* | "{name} v{version}" |
*
* @param {Kits_Item_Download_SrInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_item_download_sr = /** @type {((inputs: Kits_Item_Download_SrInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Item_Download_SrInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_item_download_sr(inputs)
	if (locale === "de") return de_kits_item_download_sr(inputs)
	if (locale === "fr") return fr_kits_item_download_sr(inputs)
	if (locale === "it") return it_kits_item_download_sr(inputs)
	if (locale === "nl") return nl_kits_item_download_sr(inputs)
	if (locale === "pl") return pl_kits_item_download_sr(inputs)
	if (locale === "pt") return pt_kits_item_download_sr(inputs)
	if (locale === "ru") return ru_kits_item_download_sr(inputs)
	if (locale === "sv") return sv_kits_item_download_sr(inputs)
	if (locale === "tr") return tr_kits_item_download_sr(inputs)
	if (locale === "zh") return zh_kits_item_download_sr(inputs)
	if (locale === "ja") return ja_kits_item_download_sr(inputs)
	return en_kits_item_download_sr(inputs)
});
