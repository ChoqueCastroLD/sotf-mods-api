/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Facet_DownloadsInputs */

const en_explore_facet_downloads = /** @type {(inputs: Explore_Facet_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads`)
};

const es_explore_facet_downloads = /** @type {(inputs: Explore_Facet_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descargas`)
};

const de_explore_facet_downloads = /** @type {(inputs: Explore_Facet_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads`)
};

const fr_explore_facet_downloads = /** @type {(inputs: Explore_Facet_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Téléchargements`)
};

const it_explore_facet_downloads = /** @type {(inputs: Explore_Facet_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download`)
};

const nl_explore_facet_downloads = /** @type {(inputs: Explore_Facet_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads`)
};

const pl_explore_facet_downloads = /** @type {(inputs: Explore_Facet_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobrania`)
};

const pt_explore_facet_downloads = /** @type {(inputs: Explore_Facet_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads`)
};

const ru_explore_facet_downloads = /** @type {(inputs: Explore_Facet_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузки`)
};

const sv_explore_facet_downloads = /** @type {(inputs: Explore_Facet_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nedladdningar`)
};

const tr_explore_facet_downloads = /** @type {(inputs: Explore_Facet_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İndirmeler`)
};

const zh_explore_facet_downloads = /** @type {(inputs: Explore_Facet_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载量`)
};

const ja_explore_facet_downloads = /** @type {(inputs: Explore_Facet_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダウンロード数`)
};

/**
* | output |
* | --- |
* | "Downloads" |
*
* @param {Explore_Facet_DownloadsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_facet_downloads = /** @type {((inputs?: Explore_Facet_DownloadsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Facet_DownloadsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_facet_downloads(inputs)
	if (locale === "de") return de_explore_facet_downloads(inputs)
	if (locale === "fr") return fr_explore_facet_downloads(inputs)
	if (locale === "it") return it_explore_facet_downloads(inputs)
	if (locale === "nl") return nl_explore_facet_downloads(inputs)
	if (locale === "pl") return pl_explore_facet_downloads(inputs)
	if (locale === "pt") return pt_explore_facet_downloads(inputs)
	if (locale === "ru") return ru_explore_facet_downloads(inputs)
	if (locale === "sv") return sv_explore_facet_downloads(inputs)
	if (locale === "tr") return tr_explore_facet_downloads(inputs)
	if (locale === "zh") return zh_explore_facet_downloads(inputs)
	if (locale === "ja") return ja_explore_facet_downloads(inputs)
	return en_explore_facet_downloads(inputs)
});
