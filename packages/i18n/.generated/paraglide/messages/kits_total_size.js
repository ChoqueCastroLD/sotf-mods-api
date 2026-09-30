/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ size: NonNullable<unknown> }} Kits_Total_SizeInputs */

const en_kits_total_size = /** @type {(inputs: Kits_Total_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Total download: ${i?.size}`)
};

const es_kits_total_size = /** @type {(inputs: Kits_Total_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Descarga total: ${i?.size}`)
};

const de_kits_total_size = /** @type {(inputs: Kits_Total_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Download gesamt: ${i?.size}`)
};

const fr_kits_total_size = /** @type {(inputs: Kits_Total_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Téléchargement total : ${i?.size}`)
};

const it_kits_total_size = /** @type {(inputs: Kits_Total_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Download totale: ${i?.size}`)
};

const nl_kits_total_size = /** @type {(inputs: Kits_Total_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Totale download: ${i?.size}`)
};

const pl_kits_total_size = /** @type {(inputs: Kits_Total_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Łącznie do pobrania: ${i?.size}`)
};

const pt_kits_total_size = /** @type {(inputs: Kits_Total_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Download total: ${i?.size}`)
};

const ru_kits_total_size = /** @type {(inputs: Kits_Total_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Всего к загрузке: ${i?.size}`)
};

const sv_kits_total_size = /** @type {(inputs: Kits_Total_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Total nedladdning: ${i?.size}`)
};

const tr_kits_total_size = /** @type {(inputs: Kits_Total_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Toplam indirme: ${i?.size}`)
};

const zh_kits_total_size = /** @type {(inputs: Kits_Total_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`下载总大小：${i?.size}`)
};

const ja_kits_total_size = /** @type {(inputs: Kits_Total_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`合計ダウンロード：${i?.size}`)
};

/**
* | output |
* | --- |
* | "Total download: {size}" |
*
* @param {Kits_Total_SizeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_total_size = /** @type {((inputs: Kits_Total_SizeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Total_SizeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_total_size(inputs)
	if (locale === "de") return de_kits_total_size(inputs)
	if (locale === "fr") return fr_kits_total_size(inputs)
	if (locale === "it") return it_kits_total_size(inputs)
	if (locale === "nl") return nl_kits_total_size(inputs)
	if (locale === "pl") return pl_kits_total_size(inputs)
	if (locale === "pt") return pt_kits_total_size(inputs)
	if (locale === "ru") return ru_kits_total_size(inputs)
	if (locale === "sv") return sv_kits_total_size(inputs)
	if (locale === "tr") return tr_kits_total_size(inputs)
	if (locale === "zh") return zh_kits_total_size(inputs)
	if (locale === "ja") return ja_kits_total_size(inputs)
	return en_kits_total_size(inputs)
});
