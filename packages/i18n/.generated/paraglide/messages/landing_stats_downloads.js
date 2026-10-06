/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Stats_DownloadsInputs */

const en_landing_stats_downloads = /** @type {(inputs: Landing_Stats_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads`)
};

const es_landing_stats_downloads = /** @type {(inputs: Landing_Stats_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descargas`)
};

const de_landing_stats_downloads = /** @type {(inputs: Landing_Stats_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads`)
};

const fr_landing_stats_downloads = /** @type {(inputs: Landing_Stats_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Téléchargements`)
};

const it_landing_stats_downloads = /** @type {(inputs: Landing_Stats_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download`)
};

const nl_landing_stats_downloads = /** @type {(inputs: Landing_Stats_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads`)
};

const pl_landing_stats_downloads = /** @type {(inputs: Landing_Stats_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobrania`)
};

const pt_landing_stats_downloads = /** @type {(inputs: Landing_Stats_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads`)
};

const ru_landing_stats_downloads = /** @type {(inputs: Landing_Stats_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузки`)
};

const sv_landing_stats_downloads = /** @type {(inputs: Landing_Stats_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nedladdningar`)
};

const tr_landing_stats_downloads = /** @type {(inputs: Landing_Stats_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İndirmeler`)
};

const zh_landing_stats_downloads = /** @type {(inputs: Landing_Stats_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载`)
};

const ja_landing_stats_downloads = /** @type {(inputs: Landing_Stats_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダウンロード`)
};

/**
* | output |
* | --- |
* | "Downloads" |
*
* @param {Landing_Stats_DownloadsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_stats_downloads = /** @type {((inputs?: Landing_Stats_DownloadsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Stats_DownloadsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_stats_downloads(inputs)
	if (locale === "de") return de_landing_stats_downloads(inputs)
	if (locale === "fr") return fr_landing_stats_downloads(inputs)
	if (locale === "it") return it_landing_stats_downloads(inputs)
	if (locale === "nl") return nl_landing_stats_downloads(inputs)
	if (locale === "pl") return pl_landing_stats_downloads(inputs)
	if (locale === "pt") return pt_landing_stats_downloads(inputs)
	if (locale === "ru") return ru_landing_stats_downloads(inputs)
	if (locale === "sv") return sv_landing_stats_downloads(inputs)
	if (locale === "tr") return tr_landing_stats_downloads(inputs)
	if (locale === "zh") return zh_landing_stats_downloads(inputs)
	if (locale === "ja") return ja_landing_stats_downloads(inputs)
	return en_landing_stats_downloads(inputs)
});
