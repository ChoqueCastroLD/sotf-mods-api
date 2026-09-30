/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ title: NonNullable<unknown> }} Cmdk_Download_StartedInputs */

const en_cmdk_download_started = /** @type {(inputs: Cmdk_Download_StartedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Download started: ${i?.title}`)
};

const es_cmdk_download_started = /** @type {(inputs: Cmdk_Download_StartedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Descarga iniciada: ${i?.title}`)
};

const de_cmdk_download_started = /** @type {(inputs: Cmdk_Download_StartedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Download gestartet: ${i?.title}`)
};

const fr_cmdk_download_started = /** @type {(inputs: Cmdk_Download_StartedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Téléchargement lancé : ${i?.title}`)
};

const it_cmdk_download_started = /** @type {(inputs: Cmdk_Download_StartedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Download avviato: ${i?.title}`)
};

const nl_cmdk_download_started = /** @type {(inputs: Cmdk_Download_StartedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Download gestart: ${i?.title}`)
};

const pl_cmdk_download_started = /** @type {(inputs: Cmdk_Download_StartedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rozpoczęto pobieranie: ${i?.title}`)
};

const pt_cmdk_download_started = /** @type {(inputs: Cmdk_Download_StartedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Download iniciado: ${i?.title}`)
};

const ru_cmdk_download_started = /** @type {(inputs: Cmdk_Download_StartedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Загрузка началась: ${i?.title}`)
};

const sv_cmdk_download_started = /** @type {(inputs: Cmdk_Download_StartedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nedladdningen har startat: ${i?.title}`)
};

const tr_cmdk_download_started = /** @type {(inputs: Cmdk_Download_StartedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`İndirme başladı: ${i?.title}`)
};

const zh_cmdk_download_started = /** @type {(inputs: Cmdk_Download_StartedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已开始下载：${i?.title}`)
};

const ja_cmdk_download_started = /** @type {(inputs: Cmdk_Download_StartedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`ダウンロードを開始しました：${i?.title}`)
};

/**
* | output |
* | --- |
* | "Download started: {title}" |
*
* @param {Cmdk_Download_StartedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_download_started = /** @type {((inputs: Cmdk_Download_StartedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Download_StartedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_download_started(inputs)
	if (locale === "de") return de_cmdk_download_started(inputs)
	if (locale === "fr") return fr_cmdk_download_started(inputs)
	if (locale === "it") return it_cmdk_download_started(inputs)
	if (locale === "nl") return nl_cmdk_download_started(inputs)
	if (locale === "pl") return pl_cmdk_download_started(inputs)
	if (locale === "pt") return pt_cmdk_download_started(inputs)
	if (locale === "ru") return ru_cmdk_download_started(inputs)
	if (locale === "sv") return sv_cmdk_download_started(inputs)
	if (locale === "tr") return tr_cmdk_download_started(inputs)
	if (locale === "zh") return zh_cmdk_download_started(inputs)
	if (locale === "ja") return ja_cmdk_download_started(inputs)
	return en_cmdk_download_started(inputs)
});
