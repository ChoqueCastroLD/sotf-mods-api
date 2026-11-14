/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_DownloadInputs */

const en_manager_download = /** @type {(inputs: Manager_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download for Windows`)
};

const es_manager_download = /** @type {(inputs: Manager_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descargar para Windows`)
};

const de_manager_download = /** @type {(inputs: Manager_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Für Windows herunterladen`)
};

const fr_manager_download = /** @type {(inputs: Manager_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Télécharger pour Windows`)
};

const it_manager_download = /** @type {(inputs: Manager_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scarica per Windows`)
};

const nl_manager_download = /** @type {(inputs: Manager_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloaden voor Windows`)
};

const pl_manager_download = /** @type {(inputs: Manager_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobierz dla Windows`)
};

const pt_manager_download = /** @type {(inputs: Manager_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Baixar para Windows`)
};

const ru_manager_download = /** @type {(inputs: Manager_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скачать для Windows`)
};

const sv_manager_download = /** @type {(inputs: Manager_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ladda ner för Windows`)
};

const tr_manager_download = /** @type {(inputs: Manager_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Windows için indir`)
};

const zh_manager_download = /** @type {(inputs: Manager_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载 Windows 版`)
};

const ja_manager_download = /** @type {(inputs: Manager_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Windows 版をダウンロード`)
};

/**
* | output |
* | --- |
* | "Download for Windows" |
*
* @param {Manager_DownloadInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_download = /** @type {((inputs?: Manager_DownloadInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_DownloadInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_download(inputs)
	if (locale === "de") return de_manager_download(inputs)
	if (locale === "fr") return fr_manager_download(inputs)
	if (locale === "it") return it_manager_download(inputs)
	if (locale === "nl") return nl_manager_download(inputs)
	if (locale === "pl") return pl_manager_download(inputs)
	if (locale === "pt") return pt_manager_download(inputs)
	if (locale === "ru") return ru_manager_download(inputs)
	if (locale === "sv") return sv_manager_download(inputs)
	if (locale === "tr") return tr_manager_download(inputs)
	if (locale === "zh") return zh_manager_download(inputs)
	if (locale === "ja") return ja_manager_download(inputs)
	return en_manager_download(inputs)
});
