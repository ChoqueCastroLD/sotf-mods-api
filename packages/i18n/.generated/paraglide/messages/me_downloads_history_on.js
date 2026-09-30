/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Downloads_History_OnInputs */

const en_me_downloads_history_on = /** @type {(inputs: Me_Downloads_History_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download history turned on`)
};

const es_me_downloads_history_on = /** @type {(inputs: Me_Downloads_History_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Historial de descargas activado`)
};

const de_me_downloads_history_on = /** @type {(inputs: Me_Downloads_History_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download-Verlauf eingeschaltet`)
};

const fr_me_downloads_history_on = /** @type {(inputs: Me_Downloads_History_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Historique des téléchargements activé`)
};

const it_me_downloads_history_on = /** @type {(inputs: Me_Downloads_History_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cronologia dei download attivata`)
};

const nl_me_downloads_history_on = /** @type {(inputs: Me_Downloads_History_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloadgeschiedenis ingeschakeld`)
};

const pl_me_downloads_history_on = /** @type {(inputs: Me_Downloads_History_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Historia pobrań włączona`)
};

const pt_me_downloads_history_on = /** @type {(inputs: Me_Downloads_History_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Histórico de downloads ativado`)
};

const ru_me_downloads_history_on = /** @type {(inputs: Me_Downloads_History_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`История загрузок включена`)
};

const sv_me_downloads_history_on = /** @type {(inputs: Me_Downloads_History_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nedladdningshistoriken är på`)
};

const tr_me_downloads_history_on = /** @type {(inputs: Me_Downloads_History_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İndirme geçmişi açıldı`)
};

const zh_me_downloads_history_on = /** @type {(inputs: Me_Downloads_History_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载记录已开启`)
};

const ja_me_downloads_history_on = /** @type {(inputs: Me_Downloads_History_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダウンロード履歴をオンにしました`)
};

/**
* | output |
* | --- |
* | "Download history turned on" |
*
* @param {Me_Downloads_History_OnInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_downloads_history_on = /** @type {((inputs?: Me_Downloads_History_OnInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Downloads_History_OnInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_downloads_history_on(inputs)
	if (locale === "de") return de_me_downloads_history_on(inputs)
	if (locale === "fr") return fr_me_downloads_history_on(inputs)
	if (locale === "it") return it_me_downloads_history_on(inputs)
	if (locale === "nl") return nl_me_downloads_history_on(inputs)
	if (locale === "pl") return pl_me_downloads_history_on(inputs)
	if (locale === "pt") return pt_me_downloads_history_on(inputs)
	if (locale === "ru") return ru_me_downloads_history_on(inputs)
	if (locale === "sv") return sv_me_downloads_history_on(inputs)
	if (locale === "tr") return tr_me_downloads_history_on(inputs)
	if (locale === "zh") return zh_me_downloads_history_on(inputs)
	if (locale === "ja") return ja_me_downloads_history_on(inputs)
	return en_me_downloads_history_on(inputs)
});
