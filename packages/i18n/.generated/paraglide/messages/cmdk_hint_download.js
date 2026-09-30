/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Hint_DownloadInputs */

const en_cmdk_hint_download = /** @type {(inputs: Cmdk_Hint_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download`)
};

const es_cmdk_hint_download = /** @type {(inputs: Cmdk_Hint_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descargar`)
};

const de_cmdk_hint_download = /** @type {(inputs: Cmdk_Hint_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Herunterladen`)
};

const fr_cmdk_hint_download = /** @type {(inputs: Cmdk_Hint_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Télécharger`)
};

const it_cmdk_hint_download = /** @type {(inputs: Cmdk_Hint_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scarica`)
};

const nl_cmdk_hint_download = /** @type {(inputs: Cmdk_Hint_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloaden`)
};

const pl_cmdk_hint_download = /** @type {(inputs: Cmdk_Hint_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobierz`)
};

const pt_cmdk_hint_download = /** @type {(inputs: Cmdk_Hint_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Baixar`)
};

const ru_cmdk_hint_download = /** @type {(inputs: Cmdk_Hint_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скачать`)
};

const sv_cmdk_hint_download = /** @type {(inputs: Cmdk_Hint_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ladda ned`)
};

const tr_cmdk_hint_download = /** @type {(inputs: Cmdk_Hint_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İndir`)
};

const zh_cmdk_hint_download = /** @type {(inputs: Cmdk_Hint_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载`)
};

const ja_cmdk_hint_download = /** @type {(inputs: Cmdk_Hint_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダウンロード`)
};

/**
* | output |
* | --- |
* | "Download" |
*
* @param {Cmdk_Hint_DownloadInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_hint_download = /** @type {((inputs?: Cmdk_Hint_DownloadInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Hint_DownloadInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_hint_download(inputs)
	if (locale === "de") return de_cmdk_hint_download(inputs)
	if (locale === "fr") return fr_cmdk_hint_download(inputs)
	if (locale === "it") return it_cmdk_hint_download(inputs)
	if (locale === "nl") return nl_cmdk_hint_download(inputs)
	if (locale === "pl") return pl_cmdk_hint_download(inputs)
	if (locale === "pt") return pt_cmdk_hint_download(inputs)
	if (locale === "ru") return ru_cmdk_hint_download(inputs)
	if (locale === "sv") return sv_cmdk_hint_download(inputs)
	if (locale === "tr") return tr_cmdk_hint_download(inputs)
	if (locale === "zh") return zh_cmdk_hint_download(inputs)
	if (locale === "ja") return ja_cmdk_hint_download(inputs)
	return en_cmdk_hint_download(inputs)
});
