/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Report_HistoryInputs */

const en_ranger_report_history = /** @type {(inputs: Ranger_Report_HistoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`History of this content`)
};

const es_ranger_report_history = /** @type {(inputs: Ranger_Report_HistoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Historial de este contenido`)
};

const de_ranger_report_history = /** @type {(inputs: Ranger_Report_HistoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verlauf dieses Inhalts`)
};

const fr_ranger_report_history = /** @type {(inputs: Ranger_Report_HistoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Historique de ce contenu`)
};

const it_ranger_report_history = /** @type {(inputs: Ranger_Report_HistoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Storico di questo contenuto`)
};

const nl_ranger_report_history = /** @type {(inputs: Ranger_Report_HistoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geschiedenis van deze inhoud`)
};

const pl_ranger_report_history = /** @type {(inputs: Ranger_Report_HistoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Historia tej treści`)
};

const pt_ranger_report_history = /** @type {(inputs: Ranger_Report_HistoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Histórico deste conteúdo`)
};

const ru_ranger_report_history = /** @type {(inputs: Ranger_Report_HistoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`История этого содержимого`)
};

const sv_ranger_report_history = /** @type {(inputs: Ranger_Report_HistoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Innehållets historik`)
};

const tr_ranger_report_history = /** @type {(inputs: Ranger_Report_HistoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu içeriğin geçmişi`)
};

const zh_ranger_report_history = /** @type {(inputs: Ranger_Report_HistoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此内容的记录`)
};

const ja_ranger_report_history = /** @type {(inputs: Ranger_Report_HistoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このコンテンツの履歴`)
};

/**
* | output |
* | --- |
* | "History of this content" |
*
* @param {Ranger_Report_HistoryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_report_history = /** @type {((inputs?: Ranger_Report_HistoryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Report_HistoryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_report_history(inputs)
	if (locale === "de") return de_ranger_report_history(inputs)
	if (locale === "fr") return fr_ranger_report_history(inputs)
	if (locale === "it") return it_ranger_report_history(inputs)
	if (locale === "nl") return nl_ranger_report_history(inputs)
	if (locale === "pl") return pl_ranger_report_history(inputs)
	if (locale === "pt") return pt_ranger_report_history(inputs)
	if (locale === "ru") return ru_ranger_report_history(inputs)
	if (locale === "sv") return sv_ranger_report_history(inputs)
	if (locale === "tr") return tr_ranger_report_history(inputs)
	if (locale === "zh") return zh_ranger_report_history(inputs)
	if (locale === "ja") return ja_ranger_report_history(inputs)
	return en_ranger_report_history(inputs)
});
