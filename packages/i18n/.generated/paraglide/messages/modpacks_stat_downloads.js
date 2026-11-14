/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Stat_DownloadsInputs */

const en_modpacks_stat_downloads = /** @type {(inputs: Modpacks_Stat_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads`)
};

const es_modpacks_stat_downloads = /** @type {(inputs: Modpacks_Stat_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descargas`)
};

const de_modpacks_stat_downloads = /** @type {(inputs: Modpacks_Stat_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads`)
};

const fr_modpacks_stat_downloads = /** @type {(inputs: Modpacks_Stat_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Téléchargements`)
};

const it_modpacks_stat_downloads = /** @type {(inputs: Modpacks_Stat_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download`)
};

const nl_modpacks_stat_downloads = /** @type {(inputs: Modpacks_Stat_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads`)
};

const pl_modpacks_stat_downloads = /** @type {(inputs: Modpacks_Stat_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobrania`)
};

const pt_modpacks_stat_downloads = /** @type {(inputs: Modpacks_Stat_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads`)
};

const ru_modpacks_stat_downloads = /** @type {(inputs: Modpacks_Stat_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скачивания`)
};

const sv_modpacks_stat_downloads = /** @type {(inputs: Modpacks_Stat_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nedladdningar`)
};

const tr_modpacks_stat_downloads = /** @type {(inputs: Modpacks_Stat_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İndirme`)
};

const zh_modpacks_stat_downloads = /** @type {(inputs: Modpacks_Stat_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载`)
};

const ja_modpacks_stat_downloads = /** @type {(inputs: Modpacks_Stat_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダウンロード`)
};

/**
* | output |
* | --- |
* | "Downloads" |
*
* @param {Modpacks_Stat_DownloadsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_stat_downloads = /** @type {((inputs?: Modpacks_Stat_DownloadsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Stat_DownloadsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_stat_downloads(inputs)
	if (locale === "de") return de_modpacks_stat_downloads(inputs)
	if (locale === "fr") return fr_modpacks_stat_downloads(inputs)
	if (locale === "it") return it_modpacks_stat_downloads(inputs)
	if (locale === "nl") return nl_modpacks_stat_downloads(inputs)
	if (locale === "pl") return pl_modpacks_stat_downloads(inputs)
	if (locale === "pt") return pt_modpacks_stat_downloads(inputs)
	if (locale === "ru") return ru_modpacks_stat_downloads(inputs)
	if (locale === "sv") return sv_modpacks_stat_downloads(inputs)
	if (locale === "tr") return tr_modpacks_stat_downloads(inputs)
	if (locale === "zh") return zh_modpacks_stat_downloads(inputs)
	if (locale === "ja") return ja_modpacks_stat_downloads(inputs)
	return en_modpacks_stat_downloads(inputs)
});
