/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_DownloadInputs */

const en_logs_download = /** @type {(inputs: Logs_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download`)
};

const es_logs_download = /** @type {(inputs: Logs_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descargar`)
};

const de_logs_download = /** @type {(inputs: Logs_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Herunterladen`)
};

const fr_logs_download = /** @type {(inputs: Logs_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Télécharger`)
};

const it_logs_download = /** @type {(inputs: Logs_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scarica`)
};

const nl_logs_download = /** @type {(inputs: Logs_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloaden`)
};

const pl_logs_download = /** @type {(inputs: Logs_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobierz`)
};

const pt_logs_download = /** @type {(inputs: Logs_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Transferir`)
};

const ru_logs_download = /** @type {(inputs: Logs_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скачать`)
};

const sv_logs_download = /** @type {(inputs: Logs_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ladda ner`)
};

const tr_logs_download = /** @type {(inputs: Logs_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İndir`)
};

const zh_logs_download = /** @type {(inputs: Logs_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载`)
};

const ja_logs_download = /** @type {(inputs: Logs_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダウンロード`)
};

/**
* | output |
* | --- |
* | "Download" |
*
* @param {Logs_DownloadInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_download = /** @type {((inputs?: Logs_DownloadInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_DownloadInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_download(inputs)
	if (locale === "de") return de_logs_download(inputs)
	if (locale === "fr") return fr_logs_download(inputs)
	if (locale === "it") return it_logs_download(inputs)
	if (locale === "nl") return nl_logs_download(inputs)
	if (locale === "pl") return pl_logs_download(inputs)
	if (locale === "pt") return pt_logs_download(inputs)
	if (locale === "ru") return ru_logs_download(inputs)
	if (locale === "sv") return sv_logs_download(inputs)
	if (locale === "tr") return tr_logs_download(inputs)
	if (locale === "zh") return zh_logs_download(inputs)
	if (locale === "ja") return ja_logs_download(inputs)
	return en_logs_download(inputs)
});
