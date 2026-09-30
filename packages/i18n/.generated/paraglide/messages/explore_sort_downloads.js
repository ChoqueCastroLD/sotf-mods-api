/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Sort_DownloadsInputs */

const en_explore_sort_downloads = /** @type {(inputs: Explore_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Most downloaded`)
};

const es_explore_sort_downloads = /** @type {(inputs: Explore_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Más descargados`)
};

const de_explore_sort_downloads = /** @type {(inputs: Explore_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meiste Downloads`)
};

const fr_explore_sort_downloads = /** @type {(inputs: Explore_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les plus téléchargés`)
};

const it_explore_sort_downloads = /** @type {(inputs: Explore_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Più scaricate`)
};

const nl_explore_sort_downloads = /** @type {(inputs: Explore_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meest gedownload`)
};

const pl_explore_sort_downloads = /** @type {(inputs: Explore_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najczęściej pobierane`)
};

const pt_explore_sort_downloads = /** @type {(inputs: Explore_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mais baixados`)
};

const ru_explore_sort_downloads = /** @type {(inputs: Explore_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Больше загрузок`)
};

const sv_explore_sort_downloads = /** @type {(inputs: Explore_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mest nedladdade`)
};

const tr_explore_sort_downloads = /** @type {(inputs: Explore_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En çok indirilen`)
};

const zh_explore_sort_downloads = /** @type {(inputs: Explore_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载最多`)
};

const ja_explore_sort_downloads = /** @type {(inputs: Explore_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダウンロード数順`)
};

/**
* | output |
* | --- |
* | "Most downloaded" |
*
* @param {Explore_Sort_DownloadsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_sort_downloads = /** @type {((inputs?: Explore_Sort_DownloadsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Sort_DownloadsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_sort_downloads(inputs)
	if (locale === "de") return de_explore_sort_downloads(inputs)
	if (locale === "fr") return fr_explore_sort_downloads(inputs)
	if (locale === "it") return it_explore_sort_downloads(inputs)
	if (locale === "nl") return nl_explore_sort_downloads(inputs)
	if (locale === "pl") return pl_explore_sort_downloads(inputs)
	if (locale === "pt") return pt_explore_sort_downloads(inputs)
	if (locale === "ru") return ru_explore_sort_downloads(inputs)
	if (locale === "sv") return sv_explore_sort_downloads(inputs)
	if (locale === "tr") return tr_explore_sort_downloads(inputs)
	if (locale === "zh") return zh_explore_sort_downloads(inputs)
	if (locale === "ja") return ja_explore_sort_downloads(inputs)
	return en_explore_sort_downloads(inputs)
});
