/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Sort_DownloadsInputs */

const en_profile_sort_downloads = /** @type {(inputs: Profile_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Most downloaded`)
};

const es_profile_sort_downloads = /** @type {(inputs: Profile_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Más descargados`)
};

const de_profile_sort_downloads = /** @type {(inputs: Profile_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meiste Downloads`)
};

const fr_profile_sort_downloads = /** @type {(inputs: Profile_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les plus téléchargés`)
};

const it_profile_sort_downloads = /** @type {(inputs: Profile_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Più scaricati`)
};

const nl_profile_sort_downloads = /** @type {(inputs: Profile_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meest gedownload`)
};

const pl_profile_sort_downloads = /** @type {(inputs: Profile_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najczęściej pobierane`)
};

const pt_profile_sort_downloads = /** @type {(inputs: Profile_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mais baixados`)
};

const ru_profile_sort_downloads = /** @type {(inputs: Profile_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Больше всего скачиваний`)
};

const sv_profile_sort_downloads = /** @type {(inputs: Profile_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mest nedladdade`)
};

const tr_profile_sort_downloads = /** @type {(inputs: Profile_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En çok indirilen`)
};

const zh_profile_sort_downloads = /** @type {(inputs: Profile_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载最多`)
};

const ja_profile_sort_downloads = /** @type {(inputs: Profile_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダウンロード数順`)
};

/**
* | output |
* | --- |
* | "Most downloaded" |
*
* @param {Profile_Sort_DownloadsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_sort_downloads = /** @type {((inputs?: Profile_Sort_DownloadsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Sort_DownloadsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_sort_downloads(inputs)
	if (locale === "de") return de_profile_sort_downloads(inputs)
	if (locale === "fr") return fr_profile_sort_downloads(inputs)
	if (locale === "it") return it_profile_sort_downloads(inputs)
	if (locale === "nl") return nl_profile_sort_downloads(inputs)
	if (locale === "pl") return pl_profile_sort_downloads(inputs)
	if (locale === "pt") return pt_profile_sort_downloads(inputs)
	if (locale === "ru") return ru_profile_sort_downloads(inputs)
	if (locale === "sv") return sv_profile_sort_downloads(inputs)
	if (locale === "tr") return tr_profile_sort_downloads(inputs)
	if (locale === "zh") return zh_profile_sort_downloads(inputs)
	if (locale === "ja") return ja_profile_sort_downloads(inputs)
	return en_profile_sort_downloads(inputs)
});
