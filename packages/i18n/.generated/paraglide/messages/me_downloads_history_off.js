/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Downloads_History_OffInputs */

const en_me_downloads_history_off = /** @type {(inputs: Me_Downloads_History_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download history turned off`)
};

const es_me_downloads_history_off = /** @type {(inputs: Me_Downloads_History_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Historial de descargas desactivado`)
};

const de_me_downloads_history_off = /** @type {(inputs: Me_Downloads_History_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download-Verlauf ausgeschaltet`)
};

const fr_me_downloads_history_off = /** @type {(inputs: Me_Downloads_History_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Historique des téléchargements désactivé`)
};

const it_me_downloads_history_off = /** @type {(inputs: Me_Downloads_History_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cronologia dei download disattivata`)
};

const nl_me_downloads_history_off = /** @type {(inputs: Me_Downloads_History_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloadgeschiedenis uitgeschakeld`)
};

const pl_me_downloads_history_off = /** @type {(inputs: Me_Downloads_History_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Historia pobrań wyłączona`)
};

const pt_me_downloads_history_off = /** @type {(inputs: Me_Downloads_History_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Histórico de downloads desativado`)
};

const ru_me_downloads_history_off = /** @type {(inputs: Me_Downloads_History_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`История загрузок выключена`)
};

const sv_me_downloads_history_off = /** @type {(inputs: Me_Downloads_History_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nedladdningshistoriken är av`)
};

const tr_me_downloads_history_off = /** @type {(inputs: Me_Downloads_History_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İndirme geçmişi kapatıldı`)
};

const zh_me_downloads_history_off = /** @type {(inputs: Me_Downloads_History_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载记录已关闭`)
};

const ja_me_downloads_history_off = /** @type {(inputs: Me_Downloads_History_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダウンロード履歴をオフにしました`)
};

/**
* | output |
* | --- |
* | "Download history turned off" |
*
* @param {Me_Downloads_History_OffInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_downloads_history_off = /** @type {((inputs?: Me_Downloads_History_OffInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Downloads_History_OffInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_downloads_history_off(inputs)
	if (locale === "de") return de_me_downloads_history_off(inputs)
	if (locale === "fr") return fr_me_downloads_history_off(inputs)
	if (locale === "it") return it_me_downloads_history_off(inputs)
	if (locale === "nl") return nl_me_downloads_history_off(inputs)
	if (locale === "pl") return pl_me_downloads_history_off(inputs)
	if (locale === "pt") return pt_me_downloads_history_off(inputs)
	if (locale === "ru") return ru_me_downloads_history_off(inputs)
	if (locale === "sv") return sv_me_downloads_history_off(inputs)
	if (locale === "tr") return tr_me_downloads_history_off(inputs)
	if (locale === "zh") return zh_me_downloads_history_off(inputs)
	if (locale === "ja") return ja_me_downloads_history_off(inputs)
	return en_me_downloads_history_off(inputs)
});
