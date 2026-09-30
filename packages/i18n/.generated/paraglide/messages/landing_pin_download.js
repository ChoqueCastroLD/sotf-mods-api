/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ version: NonNullable<unknown> }} Landing_Pin_DownloadInputs */

const en_landing_pin_download = /** @type {(inputs: Landing_Pin_DownloadInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Being downloaded · v${i?.version}`)
};

const es_landing_pin_download = /** @type {(inputs: Landing_Pin_DownloadInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Descargándose · v${i?.version}`)
};

const de_landing_pin_download = /** @type {(inputs: Landing_Pin_DownloadInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wird heruntergeladen · v${i?.version}`)
};

const fr_landing_pin_download = /** @type {(inputs: Landing_Pin_DownloadInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`En téléchargement · v${i?.version}`)
};

const it_landing_pin_download = /** @type {(inputs: Landing_Pin_DownloadInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`In download · v${i?.version}`)
};

const nl_landing_pin_download = /** @type {(inputs: Landing_Pin_DownloadInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wordt gedownload · v${i?.version}`)
};

const pl_landing_pin_download = /** @type {(inputs: Landing_Pin_DownloadInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Właśnie pobierany · v${i?.version}`)
};

const pt_landing_pin_download = /** @type {(inputs: Landing_Pin_DownloadInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sendo baixado · v${i?.version}`)
};

const ru_landing_pin_download = /** @type {(inputs: Landing_Pin_DownloadInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Скачивают · v${i?.version}`)
};

const sv_landing_pin_download = /** @type {(inputs: Landing_Pin_DownloadInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Laddas ned · v${i?.version}`)
};

const tr_landing_pin_download = /** @type {(inputs: Landing_Pin_DownloadInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`İndiriliyor · v${i?.version}`)
};

const zh_landing_pin_download = /** @type {(inputs: Landing_Pin_DownloadInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`正在下载 · v${i?.version}`)
};

const ja_landing_pin_download = /** @type {(inputs: Landing_Pin_DownloadInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`ダウンロード中 · v${i?.version}`)
};

/**
* | output |
* | --- |
* | "Being downloaded · v{version}" |
*
* @param {Landing_Pin_DownloadInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_pin_download = /** @type {((inputs: Landing_Pin_DownloadInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Pin_DownloadInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_pin_download(inputs)
	if (locale === "de") return de_landing_pin_download(inputs)
	if (locale === "fr") return fr_landing_pin_download(inputs)
	if (locale === "it") return it_landing_pin_download(inputs)
	if (locale === "nl") return nl_landing_pin_download(inputs)
	if (locale === "pl") return pl_landing_pin_download(inputs)
	if (locale === "pt") return pt_landing_pin_download(inputs)
	if (locale === "ru") return ru_landing_pin_download(inputs)
	if (locale === "sv") return sv_landing_pin_download(inputs)
	if (locale === "tr") return tr_landing_pin_download(inputs)
	if (locale === "zh") return zh_landing_pin_download(inputs)
	if (locale === "ja") return ja_landing_pin_download(inputs)
	return en_landing_pin_download(inputs)
});
