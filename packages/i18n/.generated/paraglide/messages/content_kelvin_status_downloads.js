/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Kelvin_Status_DownloadsInputs */

const en_content_kelvin_status_downloads = /** @type {(inputs: Content_Kelvin_Status_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads`)
};

const es_content_kelvin_status_downloads = /** @type {(inputs: Content_Kelvin_Status_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descargas`)
};

const de_content_kelvin_status_downloads = /** @type {(inputs: Content_Kelvin_Status_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads`)
};

const fr_content_kelvin_status_downloads = /** @type {(inputs: Content_Kelvin_Status_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Téléchargements`)
};

const it_content_kelvin_status_downloads = /** @type {(inputs: Content_Kelvin_Status_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download`)
};

const nl_content_kelvin_status_downloads = /** @type {(inputs: Content_Kelvin_Status_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads`)
};

const pl_content_kelvin_status_downloads = /** @type {(inputs: Content_Kelvin_Status_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobrania`)
};

const pt_content_kelvin_status_downloads = /** @type {(inputs: Content_Kelvin_Status_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads`)
};

const ru_content_kelvin_status_downloads = /** @type {(inputs: Content_Kelvin_Status_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скачивания`)
};

const sv_content_kelvin_status_downloads = /** @type {(inputs: Content_Kelvin_Status_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nedladdningar`)
};

const tr_content_kelvin_status_downloads = /** @type {(inputs: Content_Kelvin_Status_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İndirmeler`)
};

const zh_content_kelvin_status_downloads = /** @type {(inputs: Content_Kelvin_Status_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载量`)
};

const ja_content_kelvin_status_downloads = /** @type {(inputs: Content_Kelvin_Status_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダウンロード数`)
};

/**
* | output |
* | --- |
* | "Downloads" |
*
* @param {Content_Kelvin_Status_DownloadsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_kelvin_status_downloads = /** @type {((inputs?: Content_Kelvin_Status_DownloadsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Kelvin_Status_DownloadsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_kelvin_status_downloads(inputs)
	if (locale === "de") return de_content_kelvin_status_downloads(inputs)
	if (locale === "fr") return fr_content_kelvin_status_downloads(inputs)
	if (locale === "it") return it_content_kelvin_status_downloads(inputs)
	if (locale === "nl") return nl_content_kelvin_status_downloads(inputs)
	if (locale === "pl") return pl_content_kelvin_status_downloads(inputs)
	if (locale === "pt") return pt_content_kelvin_status_downloads(inputs)
	if (locale === "ru") return ru_content_kelvin_status_downloads(inputs)
	if (locale === "sv") return sv_content_kelvin_status_downloads(inputs)
	if (locale === "tr") return tr_content_kelvin_status_downloads(inputs)
	if (locale === "zh") return zh_content_kelvin_status_downloads(inputs)
	if (locale === "ja") return ja_content_kelvin_status_downloads(inputs)
	return en_content_kelvin_status_downloads(inputs)
});
