/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Fact_DownloadsInputs */

const en_cmdk_fact_downloads = /** @type {(inputs: Cmdk_Fact_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads`)
};

const es_cmdk_fact_downloads = /** @type {(inputs: Cmdk_Fact_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descargas`)
};

const de_cmdk_fact_downloads = /** @type {(inputs: Cmdk_Fact_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads`)
};

const fr_cmdk_fact_downloads = /** @type {(inputs: Cmdk_Fact_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Téléchargements`)
};

const it_cmdk_fact_downloads = /** @type {(inputs: Cmdk_Fact_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download`)
};

const nl_cmdk_fact_downloads = /** @type {(inputs: Cmdk_Fact_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads`)
};

const pl_cmdk_fact_downloads = /** @type {(inputs: Cmdk_Fact_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobrania`)
};

const pt_cmdk_fact_downloads = /** @type {(inputs: Cmdk_Fact_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads`)
};

const ru_cmdk_fact_downloads = /** @type {(inputs: Cmdk_Fact_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скачивания`)
};

const sv_cmdk_fact_downloads = /** @type {(inputs: Cmdk_Fact_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nedladdningar`)
};

const tr_cmdk_fact_downloads = /** @type {(inputs: Cmdk_Fact_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İndirmeler`)
};

const zh_cmdk_fact_downloads = /** @type {(inputs: Cmdk_Fact_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载量`)
};

const ja_cmdk_fact_downloads = /** @type {(inputs: Cmdk_Fact_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダウンロード数`)
};

/**
* | output |
* | --- |
* | "Downloads" |
*
* @param {Cmdk_Fact_DownloadsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_fact_downloads = /** @type {((inputs?: Cmdk_Fact_DownloadsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Fact_DownloadsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_fact_downloads(inputs)
	if (locale === "de") return de_cmdk_fact_downloads(inputs)
	if (locale === "fr") return fr_cmdk_fact_downloads(inputs)
	if (locale === "it") return it_cmdk_fact_downloads(inputs)
	if (locale === "nl") return nl_cmdk_fact_downloads(inputs)
	if (locale === "pl") return pl_cmdk_fact_downloads(inputs)
	if (locale === "pt") return pt_cmdk_fact_downloads(inputs)
	if (locale === "ru") return ru_cmdk_fact_downloads(inputs)
	if (locale === "sv") return sv_cmdk_fact_downloads(inputs)
	if (locale === "tr") return tr_cmdk_fact_downloads(inputs)
	if (locale === "zh") return zh_cmdk_fact_downloads(inputs)
	if (locale === "ja") return ja_cmdk_fact_downloads(inputs)
	return en_cmdk_fact_downloads(inputs)
});
