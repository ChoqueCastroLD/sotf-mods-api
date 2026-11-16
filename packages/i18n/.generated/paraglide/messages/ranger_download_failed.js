/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Download_FailedInputs */

const en_ranger_download_failed = /** @type {(inputs: Ranger_Download_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn't get the download link`)
};

const es_ranger_download_failed = /** @type {(inputs: Ranger_Download_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo obtener el enlace de descarga`)
};

const de_ranger_download_failed = /** @type {(inputs: Ranger_Download_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download-Link konnte nicht abgerufen werden`)
};

const fr_ranger_download_failed = /** @type {(inputs: Ranger_Download_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible d’obtenir le lien de téléchargement`)
};

const it_ranger_download_failed = /** @type {(inputs: Ranger_Download_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile ottenere il link di download`)
};

const nl_ranger_download_failed = /** @type {(inputs: Ranger_Download_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kan de downloadlink niet ophalen`)
};

const pl_ranger_download_failed = /** @type {(inputs: Ranger_Download_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się pobrać linku`)
};

const pt_ranger_download_failed = /** @type {(inputs: Ranger_Download_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível obter o link de download`)
};

const ru_ranger_download_failed = /** @type {(inputs: Ranger_Download_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось получить ссылку на скачивание`)
};

const sv_ranger_download_failed = /** @type {(inputs: Ranger_Download_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det gick inte att hämta nedladdningslänken`)
};

const tr_ranger_download_failed = /** @type {(inputs: Ranger_Download_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İndirme bağlantısı alınamadı`)
};

const zh_ranger_download_failed = /** @type {(inputs: Ranger_Download_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法获取下载链接`)
};

const ja_ranger_download_failed = /** @type {(inputs: Ranger_Download_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダウンロードリンクを取得できませんでした`)
};

/**
* | output |
* | --- |
* | "Couldn't get the download link" |
*
* @param {Ranger_Download_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_download_failed = /** @type {((inputs?: Ranger_Download_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Download_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_download_failed(inputs)
	if (locale === "de") return de_ranger_download_failed(inputs)
	if (locale === "fr") return fr_ranger_download_failed(inputs)
	if (locale === "it") return it_ranger_download_failed(inputs)
	if (locale === "nl") return nl_ranger_download_failed(inputs)
	if (locale === "pl") return pl_ranger_download_failed(inputs)
	if (locale === "pt") return pt_ranger_download_failed(inputs)
	if (locale === "ru") return ru_ranger_download_failed(inputs)
	if (locale === "sv") return sv_ranger_download_failed(inputs)
	if (locale === "tr") return tr_ranger_download_failed(inputs)
	if (locale === "zh") return zh_ranger_download_failed(inputs)
	if (locale === "ja") return ja_ranger_download_failed(inputs)
	return en_ranger_download_failed(inputs)
});
