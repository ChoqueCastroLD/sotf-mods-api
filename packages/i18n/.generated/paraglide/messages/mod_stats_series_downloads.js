/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Stats_Series_DownloadsInputs */

const en_mod_stats_series_downloads = /** @type {(inputs: Mod_Stats_Series_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads`)
};

const es_mod_stats_series_downloads = /** @type {(inputs: Mod_Stats_Series_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descargas`)
};

const de_mod_stats_series_downloads = /** @type {(inputs: Mod_Stats_Series_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads`)
};

const fr_mod_stats_series_downloads = /** @type {(inputs: Mod_Stats_Series_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Téléchargements`)
};

const it_mod_stats_series_downloads = /** @type {(inputs: Mod_Stats_Series_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download`)
};

const nl_mod_stats_series_downloads = /** @type {(inputs: Mod_Stats_Series_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads`)
};

const pl_mod_stats_series_downloads = /** @type {(inputs: Mod_Stats_Series_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobrania`)
};

const pt_mod_stats_series_downloads = /** @type {(inputs: Mod_Stats_Series_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads`)
};

const ru_mod_stats_series_downloads = /** @type {(inputs: Mod_Stats_Series_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузки`)
};

const sv_mod_stats_series_downloads = /** @type {(inputs: Mod_Stats_Series_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nedladdningar`)
};

const tr_mod_stats_series_downloads = /** @type {(inputs: Mod_Stats_Series_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İndirmeler`)
};

const zh_mod_stats_series_downloads = /** @type {(inputs: Mod_Stats_Series_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载量`)
};

const ja_mod_stats_series_downloads = /** @type {(inputs: Mod_Stats_Series_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダウンロード数`)
};

/**
* | output |
* | --- |
* | "Downloads" |
*
* @param {Mod_Stats_Series_DownloadsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_stats_series_downloads = /** @type {((inputs?: Mod_Stats_Series_DownloadsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Stats_Series_DownloadsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_stats_series_downloads(inputs)
	if (locale === "de") return de_mod_stats_series_downloads(inputs)
	if (locale === "fr") return fr_mod_stats_series_downloads(inputs)
	if (locale === "it") return it_mod_stats_series_downloads(inputs)
	if (locale === "nl") return nl_mod_stats_series_downloads(inputs)
	if (locale === "pl") return pl_mod_stats_series_downloads(inputs)
	if (locale === "pt") return pt_mod_stats_series_downloads(inputs)
	if (locale === "ru") return ru_mod_stats_series_downloads(inputs)
	if (locale === "sv") return sv_mod_stats_series_downloads(inputs)
	if (locale === "tr") return tr_mod_stats_series_downloads(inputs)
	if (locale === "zh") return zh_mod_stats_series_downloads(inputs)
	if (locale === "ja") return ja_mod_stats_series_downloads(inputs)
	return en_mod_stats_series_downloads(inputs)
});
