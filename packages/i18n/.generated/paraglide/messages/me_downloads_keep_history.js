/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Downloads_Keep_HistoryInputs */

const en_me_downloads_keep_history = /** @type {(inputs: Me_Downloads_Keep_HistoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keep a download history`)
};

const es_me_downloads_keep_history = /** @type {(inputs: Me_Downloads_Keep_HistoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guardar el historial de descargas`)
};

const de_me_downloads_keep_history = /** @type {(inputs: Me_Downloads_Keep_HistoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download-Verlauf speichern`)
};

const fr_me_downloads_keep_history = /** @type {(inputs: Me_Downloads_Keep_HistoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conserver un historique des téléchargements`)
};

const it_me_downloads_keep_history = /** @type {(inputs: Me_Downloads_Keep_HistoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conserva la cronologia dei download`)
};

const nl_me_downloads_keep_history = /** @type {(inputs: Me_Downloads_Keep_HistoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloadgeschiedenis bijhouden`)
};

const pl_me_downloads_keep_history = /** @type {(inputs: Me_Downloads_Keep_HistoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zapisuj historię pobrań`)
};

const pt_me_downloads_keep_history = /** @type {(inputs: Me_Downloads_Keep_HistoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manter histórico de downloads`)
};

const ru_me_downloads_keep_history = /** @type {(inputs: Me_Downloads_Keep_HistoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вести историю загрузок`)
};

const sv_me_downloads_keep_history = /** @type {(inputs: Me_Downloads_Keep_HistoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spara nedladdningshistorik`)
};

const tr_me_downloads_keep_history = /** @type {(inputs: Me_Downloads_Keep_HistoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İndirme geçmişini tut`)
};

const zh_me_downloads_keep_history = /** @type {(inputs: Me_Downloads_Keep_HistoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保留下载记录`)
};

const ja_me_downloads_keep_history = /** @type {(inputs: Me_Downloads_Keep_HistoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダウンロード履歴を保存する`)
};

/**
* | output |
* | --- |
* | "Keep a download history" |
*
* @param {Me_Downloads_Keep_HistoryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_downloads_keep_history = /** @type {((inputs?: Me_Downloads_Keep_HistoryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Downloads_Keep_HistoryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_downloads_keep_history(inputs)
	if (locale === "de") return de_me_downloads_keep_history(inputs)
	if (locale === "fr") return fr_me_downloads_keep_history(inputs)
	if (locale === "it") return it_me_downloads_keep_history(inputs)
	if (locale === "nl") return nl_me_downloads_keep_history(inputs)
	if (locale === "pl") return pl_me_downloads_keep_history(inputs)
	if (locale === "pt") return pt_me_downloads_keep_history(inputs)
	if (locale === "ru") return ru_me_downloads_keep_history(inputs)
	if (locale === "sv") return sv_me_downloads_keep_history(inputs)
	if (locale === "tr") return tr_me_downloads_keep_history(inputs)
	if (locale === "zh") return zh_me_downloads_keep_history(inputs)
	if (locale === "ja") return ja_me_downloads_keep_history(inputs)
	return en_me_downloads_keep_history(inputs)
});
