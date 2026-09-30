/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Go_DownloadsInputs */

const en_cmdk_go_downloads = /** @type {(inputs: Cmdk_Go_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads history`)
};

const es_cmdk_go_downloads = /** @type {(inputs: Cmdk_Go_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Historial de descargas`)
};

const de_cmdk_go_downloads = /** @type {(inputs: Cmdk_Go_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download-Verlauf`)
};

const fr_cmdk_go_downloads = /** @type {(inputs: Cmdk_Go_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Historique des téléchargements`)
};

const it_cmdk_go_downloads = /** @type {(inputs: Cmdk_Go_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cronologia download`)
};

const nl_cmdk_go_downloads = /** @type {(inputs: Cmdk_Go_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloadgeschiedenis`)
};

const pl_cmdk_go_downloads = /** @type {(inputs: Cmdk_Go_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Historia pobrań`)
};

const pt_cmdk_go_downloads = /** @type {(inputs: Cmdk_Go_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Histórico de transferências`)
};

const ru_cmdk_go_downloads = /** @type {(inputs: Cmdk_Go_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`История загрузок`)
};

const sv_cmdk_go_downloads = /** @type {(inputs: Cmdk_Go_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nedladdningshistorik`)
};

const tr_cmdk_go_downloads = /** @type {(inputs: Cmdk_Go_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İndirme geçmişi`)
};

const zh_cmdk_go_downloads = /** @type {(inputs: Cmdk_Go_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载历史`)
};

const ja_cmdk_go_downloads = /** @type {(inputs: Cmdk_Go_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダウンロード履歴`)
};

/**
* | output |
* | --- |
* | "Downloads history" |
*
* @param {Cmdk_Go_DownloadsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_go_downloads = /** @type {((inputs?: Cmdk_Go_DownloadsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Go_DownloadsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_go_downloads(inputs)
	if (locale === "de") return de_cmdk_go_downloads(inputs)
	if (locale === "fr") return fr_cmdk_go_downloads(inputs)
	if (locale === "it") return it_cmdk_go_downloads(inputs)
	if (locale === "nl") return nl_cmdk_go_downloads(inputs)
	if (locale === "pl") return pl_cmdk_go_downloads(inputs)
	if (locale === "pt") return pt_cmdk_go_downloads(inputs)
	if (locale === "ru") return ru_cmdk_go_downloads(inputs)
	if (locale === "sv") return sv_cmdk_go_downloads(inputs)
	if (locale === "tr") return tr_cmdk_go_downloads(inputs)
	if (locale === "zh") return zh_cmdk_go_downloads(inputs)
	if (locale === "ja") return ja_cmdk_go_downloads(inputs)
	return en_cmdk_go_downloads(inputs)
});
