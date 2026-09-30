/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Preview_DownloadInputs */

const en_cmdk_preview_download = /** @type {(inputs: Cmdk_Preview_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download latest`)
};

const es_cmdk_preview_download = /** @type {(inputs: Cmdk_Preview_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descargar la última`)
};

const de_cmdk_preview_download = /** @type {(inputs: Cmdk_Preview_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neueste herunterladen`)
};

const fr_cmdk_preview_download = /** @type {(inputs: Cmdk_Preview_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Télécharger la dernière`)
};

const it_cmdk_preview_download = /** @type {(inputs: Cmdk_Preview_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scarica l’ultima`)
};

const nl_cmdk_preview_download = /** @type {(inputs: Cmdk_Preview_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuwste downloaden`)
};

const pl_cmdk_preview_download = /** @type {(inputs: Cmdk_Preview_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobierz najnowszą`)
};

const pt_cmdk_preview_download = /** @type {(inputs: Cmdk_Preview_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Baixar a mais recente`)
};

const ru_cmdk_preview_download = /** @type {(inputs: Cmdk_Preview_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скачать последнюю`)
};

const sv_cmdk_preview_download = /** @type {(inputs: Cmdk_Preview_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ladda ned senaste`)
};

const tr_cmdk_preview_download = /** @type {(inputs: Cmdk_Preview_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En yenisini indir`)
};

const zh_cmdk_preview_download = /** @type {(inputs: Cmdk_Preview_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载最新版`)
};

const ja_cmdk_preview_download = /** @type {(inputs: Cmdk_Preview_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最新版をダウンロード`)
};

/**
* | output |
* | --- |
* | "Download latest" |
*
* @param {Cmdk_Preview_DownloadInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_preview_download = /** @type {((inputs?: Cmdk_Preview_DownloadInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Preview_DownloadInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_preview_download(inputs)
	if (locale === "de") return de_cmdk_preview_download(inputs)
	if (locale === "fr") return fr_cmdk_preview_download(inputs)
	if (locale === "it") return it_cmdk_preview_download(inputs)
	if (locale === "nl") return nl_cmdk_preview_download(inputs)
	if (locale === "pl") return pl_cmdk_preview_download(inputs)
	if (locale === "pt") return pt_cmdk_preview_download(inputs)
	if (locale === "ru") return ru_cmdk_preview_download(inputs)
	if (locale === "sv") return sv_cmdk_preview_download(inputs)
	if (locale === "tr") return tr_cmdk_preview_download(inputs)
	if (locale === "zh") return zh_cmdk_preview_download(inputs)
	if (locale === "ja") return ja_cmdk_preview_download(inputs)
	return en_cmdk_preview_download(inputs)
});
