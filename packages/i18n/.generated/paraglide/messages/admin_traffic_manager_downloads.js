/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Traffic_Manager_DownloadsInputs */

const en_admin_traffic_manager_downloads = /** @type {(inputs: Admin_Traffic_Manager_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads by the manager`)
};

const es_admin_traffic_manager_downloads = /** @type {(inputs: Admin_Traffic_Manager_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descargas desde el manager`)
};

const de_admin_traffic_manager_downloads = /** @type {(inputs: Admin_Traffic_Manager_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads über den Manager`)
};

const fr_admin_traffic_manager_downloads = /** @type {(inputs: Admin_Traffic_Manager_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Téléchargements via le manager`)
};

const it_admin_traffic_manager_downloads = /** @type {(inputs: Admin_Traffic_Manager_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download dal manager`)
};

const nl_admin_traffic_manager_downloads = /** @type {(inputs: Admin_Traffic_Manager_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads via de manager`)
};

const pl_admin_traffic_manager_downloads = /** @type {(inputs: Admin_Traffic_Manager_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobrania przez menedżer`)
};

const pt_admin_traffic_manager_downloads = /** @type {(inputs: Admin_Traffic_Manager_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads pelo manager`)
};

const ru_admin_traffic_manager_downloads = /** @type {(inputs: Admin_Traffic_Manager_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скачивания через менеджер`)
};

const sv_admin_traffic_manager_downloads = /** @type {(inputs: Admin_Traffic_Manager_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nedladdningar via managern`)
};

const tr_admin_traffic_manager_downloads = /** @type {(inputs: Admin_Traffic_Manager_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yönetici üzerinden indirme`)
};

const zh_admin_traffic_manager_downloads = /** @type {(inputs: Admin_Traffic_Manager_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通过管理器的下载`)
};

const ja_admin_traffic_manager_downloads = /** @type {(inputs: Admin_Traffic_Manager_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`マネージャー経由のダウンロード`)
};

/**
* | output |
* | --- |
* | "Downloads by the manager" |
*
* @param {Admin_Traffic_Manager_DownloadsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_traffic_manager_downloads = /** @type {((inputs?: Admin_Traffic_Manager_DownloadsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Traffic_Manager_DownloadsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_traffic_manager_downloads(inputs)
	if (locale === "de") return de_admin_traffic_manager_downloads(inputs)
	if (locale === "fr") return fr_admin_traffic_manager_downloads(inputs)
	if (locale === "it") return it_admin_traffic_manager_downloads(inputs)
	if (locale === "nl") return nl_admin_traffic_manager_downloads(inputs)
	if (locale === "pl") return pl_admin_traffic_manager_downloads(inputs)
	if (locale === "pt") return pt_admin_traffic_manager_downloads(inputs)
	if (locale === "ru") return ru_admin_traffic_manager_downloads(inputs)
	if (locale === "sv") return sv_admin_traffic_manager_downloads(inputs)
	if (locale === "tr") return tr_admin_traffic_manager_downloads(inputs)
	if (locale === "zh") return zh_admin_traffic_manager_downloads(inputs)
	if (locale === "ja") return ja_admin_traffic_manager_downloads(inputs)
	return en_admin_traffic_manager_downloads(inputs)
});
