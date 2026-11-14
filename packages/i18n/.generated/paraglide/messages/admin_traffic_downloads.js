/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Traffic_DownloadsInputs */

const en_admin_traffic_downloads = /** @type {(inputs: Admin_Traffic_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads`)
};

const es_admin_traffic_downloads = /** @type {(inputs: Admin_Traffic_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descargas`)
};

const de_admin_traffic_downloads = /** @type {(inputs: Admin_Traffic_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads`)
};

const fr_admin_traffic_downloads = /** @type {(inputs: Admin_Traffic_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Téléchargements`)
};

const it_admin_traffic_downloads = /** @type {(inputs: Admin_Traffic_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download`)
};

const nl_admin_traffic_downloads = /** @type {(inputs: Admin_Traffic_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads`)
};

const pl_admin_traffic_downloads = /** @type {(inputs: Admin_Traffic_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobrania`)
};

const pt_admin_traffic_downloads = /** @type {(inputs: Admin_Traffic_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads`)
};

const ru_admin_traffic_downloads = /** @type {(inputs: Admin_Traffic_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скачивания`)
};

const sv_admin_traffic_downloads = /** @type {(inputs: Admin_Traffic_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nedladdningar`)
};

const tr_admin_traffic_downloads = /** @type {(inputs: Admin_Traffic_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İndirme`)
};

const zh_admin_traffic_downloads = /** @type {(inputs: Admin_Traffic_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载`)
};

const ja_admin_traffic_downloads = /** @type {(inputs: Admin_Traffic_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダウンロード`)
};

/**
* | output |
* | --- |
* | "Downloads" |
*
* @param {Admin_Traffic_DownloadsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_traffic_downloads = /** @type {((inputs?: Admin_Traffic_DownloadsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Traffic_DownloadsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_traffic_downloads(inputs)
	if (locale === "de") return de_admin_traffic_downloads(inputs)
	if (locale === "fr") return fr_admin_traffic_downloads(inputs)
	if (locale === "it") return it_admin_traffic_downloads(inputs)
	if (locale === "nl") return nl_admin_traffic_downloads(inputs)
	if (locale === "pl") return pl_admin_traffic_downloads(inputs)
	if (locale === "pt") return pt_admin_traffic_downloads(inputs)
	if (locale === "ru") return ru_admin_traffic_downloads(inputs)
	if (locale === "sv") return sv_admin_traffic_downloads(inputs)
	if (locale === "tr") return tr_admin_traffic_downloads(inputs)
	if (locale === "zh") return zh_admin_traffic_downloads(inputs)
	if (locale === "ja") return ja_admin_traffic_downloads(inputs)
	return en_admin_traffic_downloads(inputs)
});
