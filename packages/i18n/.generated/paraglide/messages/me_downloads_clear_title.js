/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Downloads_Clear_TitleInputs */

const en_me_downloads_clear_title = /** @type {(inputs: Me_Downloads_Clear_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clear your download history?`)
};

const es_me_downloads_clear_title = /** @type {(inputs: Me_Downloads_Clear_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Borrar tu historial de descargas?`)
};

const de_me_downloads_clear_title = /** @type {(inputs: Me_Downloads_Clear_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download-Verlauf löschen?`)
};

const fr_me_downloads_clear_title = /** @type {(inputs: Me_Downloads_Clear_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Effacer votre historique des téléchargements ?`)
};

const it_me_downloads_clear_title = /** @type {(inputs: Me_Downloads_Clear_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancellare la cronologia dei download?`)
};

const nl_me_downloads_clear_title = /** @type {(inputs: Me_Downloads_Clear_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je downloadgeschiedenis wissen?`)
};

const pl_me_downloads_clear_title = /** @type {(inputs: Me_Downloads_Clear_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyczyścić historię pobrań?`)
};

const pt_me_downloads_clear_title = /** @type {(inputs: Me_Downloads_Clear_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Limpar seu histórico de downloads?`)
};

const ru_me_downloads_clear_title = /** @type {(inputs: Me_Downloads_Clear_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Очистить историю загрузок?`)
};

const sv_me_downloads_clear_title = /** @type {(inputs: Me_Downloads_Clear_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rensa din nedladdningshistorik?`)
};

const tr_me_downloads_clear_title = /** @type {(inputs: Me_Downloads_Clear_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İndirme geçmişin temizlensin mi?`)
};

const zh_me_downloads_clear_title = /** @type {(inputs: Me_Downloads_Clear_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`要清除下载记录吗？`)
};

const ja_me_downloads_clear_title = /** @type {(inputs: Me_Downloads_Clear_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダウンロード履歴を消去しますか？`)
};

/**
* | output |
* | --- |
* | "Clear your download history?" |
*
* @param {Me_Downloads_Clear_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_downloads_clear_title = /** @type {((inputs?: Me_Downloads_Clear_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Downloads_Clear_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_downloads_clear_title(inputs)
	if (locale === "de") return de_me_downloads_clear_title(inputs)
	if (locale === "fr") return fr_me_downloads_clear_title(inputs)
	if (locale === "it") return it_me_downloads_clear_title(inputs)
	if (locale === "nl") return nl_me_downloads_clear_title(inputs)
	if (locale === "pl") return pl_me_downloads_clear_title(inputs)
	if (locale === "pt") return pt_me_downloads_clear_title(inputs)
	if (locale === "ru") return ru_me_downloads_clear_title(inputs)
	if (locale === "sv") return sv_me_downloads_clear_title(inputs)
	if (locale === "tr") return tr_me_downloads_clear_title(inputs)
	if (locale === "zh") return zh_me_downloads_clear_title(inputs)
	if (locale === "ja") return ja_me_downloads_clear_title(inputs)
	return en_me_downloads_clear_title(inputs)
});
