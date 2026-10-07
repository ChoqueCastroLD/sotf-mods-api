/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Versions_Sort_DownloadsInputs */

const en_basecamp_versions_sort_downloads = /** @type {(inputs: Basecamp_Versions_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Most downloaded`)
};

const es_basecamp_versions_sort_downloads = /** @type {(inputs: Basecamp_Versions_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Más descargadas`)
};

const de_basecamp_versions_sort_downloads = /** @type {(inputs: Basecamp_Versions_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meiste Downloads`)
};

const fr_basecamp_versions_sort_downloads = /** @type {(inputs: Basecamp_Versions_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plus téléchargées`)
};

const it_basecamp_versions_sort_downloads = /** @type {(inputs: Basecamp_Versions_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Più scaricate`)
};

const nl_basecamp_versions_sort_downloads = /** @type {(inputs: Basecamp_Versions_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meest gedownload`)
};

const pl_basecamp_versions_sort_downloads = /** @type {(inputs: Basecamp_Versions_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najczęściej pobierane`)
};

const pt_basecamp_versions_sort_downloads = /** @type {(inputs: Basecamp_Versions_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mais baixadas`)
};

const ru_basecamp_versions_sort_downloads = /** @type {(inputs: Basecamp_Versions_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Больше загрузок`)
};

const sv_basecamp_versions_sort_downloads = /** @type {(inputs: Basecamp_Versions_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mest nedladdade`)
};

const tr_basecamp_versions_sort_downloads = /** @type {(inputs: Basecamp_Versions_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En çok indirilen`)
};

const zh_basecamp_versions_sort_downloads = /** @type {(inputs: Basecamp_Versions_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载最多`)
};

const ja_basecamp_versions_sort_downloads = /** @type {(inputs: Basecamp_Versions_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダウンロード数順`)
};

/**
* | output |
* | --- |
* | "Most downloaded" |
*
* @param {Basecamp_Versions_Sort_DownloadsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_versions_sort_downloads = /** @type {((inputs?: Basecamp_Versions_Sort_DownloadsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Versions_Sort_DownloadsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_versions_sort_downloads(inputs)
	if (locale === "de") return de_basecamp_versions_sort_downloads(inputs)
	if (locale === "fr") return fr_basecamp_versions_sort_downloads(inputs)
	if (locale === "it") return it_basecamp_versions_sort_downloads(inputs)
	if (locale === "nl") return nl_basecamp_versions_sort_downloads(inputs)
	if (locale === "pl") return pl_basecamp_versions_sort_downloads(inputs)
	if (locale === "pt") return pt_basecamp_versions_sort_downloads(inputs)
	if (locale === "ru") return ru_basecamp_versions_sort_downloads(inputs)
	if (locale === "sv") return sv_basecamp_versions_sort_downloads(inputs)
	if (locale === "tr") return tr_basecamp_versions_sort_downloads(inputs)
	if (locale === "zh") return zh_basecamp_versions_sort_downloads(inputs)
	if (locale === "ja") return ja_basecamp_versions_sort_downloads(inputs)
	return en_basecamp_versions_sort_downloads(inputs)
});
