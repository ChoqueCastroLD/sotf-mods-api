/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Downloads_ClearedInputs */

const en_me_downloads_cleared = /** @type {(inputs: Me_Downloads_ClearedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download history cleared`)
};

const es_me_downloads_cleared = /** @type {(inputs: Me_Downloads_ClearedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Historial de descargas borrado`)
};

const de_me_downloads_cleared = /** @type {(inputs: Me_Downloads_ClearedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download-Verlauf gelöscht`)
};

const fr_me_downloads_cleared = /** @type {(inputs: Me_Downloads_ClearedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Historique des téléchargements effacé`)
};

const it_me_downloads_cleared = /** @type {(inputs: Me_Downloads_ClearedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cronologia dei download cancellata`)
};

const nl_me_downloads_cleared = /** @type {(inputs: Me_Downloads_ClearedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloadgeschiedenis gewist`)
};

const pl_me_downloads_cleared = /** @type {(inputs: Me_Downloads_ClearedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Historia pobrań wyczyszczona`)
};

const pt_me_downloads_cleared = /** @type {(inputs: Me_Downloads_ClearedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Histórico de downloads limpo`)
};

const ru_me_downloads_cleared = /** @type {(inputs: Me_Downloads_ClearedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`История загрузок очищена`)
};

const sv_me_downloads_cleared = /** @type {(inputs: Me_Downloads_ClearedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nedladdningshistoriken är rensad`)
};

const tr_me_downloads_cleared = /** @type {(inputs: Me_Downloads_ClearedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İndirme geçmişi temizlendi`)
};

const zh_me_downloads_cleared = /** @type {(inputs: Me_Downloads_ClearedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载记录已清除`)
};

const ja_me_downloads_cleared = /** @type {(inputs: Me_Downloads_ClearedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダウンロード履歴を消去しました`)
};

/**
* | output |
* | --- |
* | "Download history cleared" |
*
* @param {Me_Downloads_ClearedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_downloads_cleared = /** @type {((inputs?: Me_Downloads_ClearedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Downloads_ClearedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_downloads_cleared(inputs)
	if (locale === "de") return de_me_downloads_cleared(inputs)
	if (locale === "fr") return fr_me_downloads_cleared(inputs)
	if (locale === "it") return it_me_downloads_cleared(inputs)
	if (locale === "nl") return nl_me_downloads_cleared(inputs)
	if (locale === "pl") return pl_me_downloads_cleared(inputs)
	if (locale === "pt") return pt_me_downloads_cleared(inputs)
	if (locale === "ru") return ru_me_downloads_cleared(inputs)
	if (locale === "sv") return sv_me_downloads_cleared(inputs)
	if (locale === "tr") return tr_me_downloads_cleared(inputs)
	if (locale === "zh") return zh_me_downloads_cleared(inputs)
	if (locale === "ja") return ja_me_downloads_cleared(inputs)
	return en_me_downloads_cleared(inputs)
});
