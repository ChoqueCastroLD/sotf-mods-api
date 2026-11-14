/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Sort_DownloadsInputs */

const en_modpacks_sort_downloads = /** @type {(inputs: Modpacks_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Most downloaded`)
};

const es_modpacks_sort_downloads = /** @type {(inputs: Modpacks_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Más descargados`)
};

const de_modpacks_sort_downloads = /** @type {(inputs: Modpacks_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meistgeladen`)
};

const fr_modpacks_sort_downloads = /** @type {(inputs: Modpacks_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les plus téléchargés`)
};

const it_modpacks_sort_downloads = /** @type {(inputs: Modpacks_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Più scaricati`)
};

const nl_modpacks_sort_downloads = /** @type {(inputs: Modpacks_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meest gedownload`)
};

const pl_modpacks_sort_downloads = /** @type {(inputs: Modpacks_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najczęściej pobierane`)
};

const pt_modpacks_sort_downloads = /** @type {(inputs: Modpacks_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mais baixados`)
};

const ru_modpacks_sort_downloads = /** @type {(inputs: Modpacks_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Популярные`)
};

const sv_modpacks_sort_downloads = /** @type {(inputs: Modpacks_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mest nedladdade`)
};

const tr_modpacks_sort_downloads = /** @type {(inputs: Modpacks_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En çok indirilen`)
};

const zh_modpacks_sort_downloads = /** @type {(inputs: Modpacks_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载最多`)
};

const ja_modpacks_sort_downloads = /** @type {(inputs: Modpacks_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダウンロード数順`)
};

/**
* | output |
* | --- |
* | "Most downloaded" |
*
* @param {Modpacks_Sort_DownloadsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_sort_downloads = /** @type {((inputs?: Modpacks_Sort_DownloadsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Sort_DownloadsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_sort_downloads(inputs)
	if (locale === "de") return de_modpacks_sort_downloads(inputs)
	if (locale === "fr") return fr_modpacks_sort_downloads(inputs)
	if (locale === "it") return it_modpacks_sort_downloads(inputs)
	if (locale === "nl") return nl_modpacks_sort_downloads(inputs)
	if (locale === "pl") return pl_modpacks_sort_downloads(inputs)
	if (locale === "pt") return pt_modpacks_sort_downloads(inputs)
	if (locale === "ru") return ru_modpacks_sort_downloads(inputs)
	if (locale === "sv") return sv_modpacks_sort_downloads(inputs)
	if (locale === "tr") return tr_modpacks_sort_downloads(inputs)
	if (locale === "zh") return zh_modpacks_sort_downloads(inputs)
	if (locale === "ja") return ja_modpacks_sort_downloads(inputs)
	return en_modpacks_sort_downloads(inputs)
});
