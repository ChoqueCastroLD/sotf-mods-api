/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Sort_DownloadsInputs */

const en_cmdk_sort_downloads = /** @type {(inputs: Cmdk_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Most downloaded`)
};

const es_cmdk_sort_downloads = /** @type {(inputs: Cmdk_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Más descargados`)
};

const de_cmdk_sort_downloads = /** @type {(inputs: Cmdk_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meiste Downloads`)
};

const fr_cmdk_sort_downloads = /** @type {(inputs: Cmdk_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les plus téléchargés`)
};

const it_cmdk_sort_downloads = /** @type {(inputs: Cmdk_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Più scaricati`)
};

const nl_cmdk_sort_downloads = /** @type {(inputs: Cmdk_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meest gedownload`)
};

const pl_cmdk_sort_downloads = /** @type {(inputs: Cmdk_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najczęściej pobierane`)
};

const pt_cmdk_sort_downloads = /** @type {(inputs: Cmdk_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mais transferidos`)
};

const ru_cmdk_sort_downloads = /** @type {(inputs: Cmdk_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`По загрузкам`)
};

const sv_cmdk_sort_downloads = /** @type {(inputs: Cmdk_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mest nedladdade`)
};

const tr_cmdk_sort_downloads = /** @type {(inputs: Cmdk_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En çok indirilen`)
};

const zh_cmdk_sort_downloads = /** @type {(inputs: Cmdk_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载最多`)
};

const ja_cmdk_sort_downloads = /** @type {(inputs: Cmdk_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダウンロード数順`)
};

/**
* | output |
* | --- |
* | "Most downloaded" |
*
* @param {Cmdk_Sort_DownloadsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_sort_downloads = /** @type {((inputs?: Cmdk_Sort_DownloadsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Sort_DownloadsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_sort_downloads(inputs)
	if (locale === "de") return de_cmdk_sort_downloads(inputs)
	if (locale === "fr") return fr_cmdk_sort_downloads(inputs)
	if (locale === "it") return it_cmdk_sort_downloads(inputs)
	if (locale === "nl") return nl_cmdk_sort_downloads(inputs)
	if (locale === "pl") return pl_cmdk_sort_downloads(inputs)
	if (locale === "pt") return pt_cmdk_sort_downloads(inputs)
	if (locale === "ru") return ru_cmdk_sort_downloads(inputs)
	if (locale === "sv") return sv_cmdk_sort_downloads(inputs)
	if (locale === "tr") return tr_cmdk_sort_downloads(inputs)
	if (locale === "zh") return zh_cmdk_sort_downloads(inputs)
	if (locale === "ja") return ja_cmdk_sort_downloads(inputs)
	return en_cmdk_sort_downloads(inputs)
});
