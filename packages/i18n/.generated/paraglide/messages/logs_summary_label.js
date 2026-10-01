/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Summary_LabelInputs */

const en_logs_summary_label = /** @type {(inputs: Logs_Summary_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log summary`)
};

const es_logs_summary_label = /** @type {(inputs: Logs_Summary_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resumen del log`)
};

const de_logs_summary_label = /** @type {(inputs: Logs_Summary_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log-Zusammenfassung`)
};

const fr_logs_summary_label = /** @type {(inputs: Logs_Summary_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Résumé du log`)
};

const it_logs_summary_label = /** @type {(inputs: Logs_Summary_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Riepilogo del log`)
};

const nl_logs_summary_label = /** @type {(inputs: Logs_Summary_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Samenvatting van de log`)
};

const pl_logs_summary_label = /** @type {(inputs: Logs_Summary_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Podsumowanie logu`)
};

const pt_logs_summary_label = /** @type {(inputs: Logs_Summary_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resumo do log`)
};

const ru_logs_summary_label = /** @type {(inputs: Logs_Summary_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сводка по логу`)
};

const sv_logs_summary_label = /** @type {(inputs: Logs_Summary_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sammanfattning av loggen`)
};

const tr_logs_summary_label = /** @type {(inputs: Logs_Summary_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log özeti`)
};

const zh_logs_summary_label = /** @type {(inputs: Logs_Summary_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`日志摘要`)
};

const ja_logs_summary_label = /** @type {(inputs: Logs_Summary_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ログの概要`)
};

/**
* | output |
* | --- |
* | "Log summary" |
*
* @param {Logs_Summary_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_summary_label = /** @type {((inputs?: Logs_Summary_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Summary_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_summary_label(inputs)
	if (locale === "de") return de_logs_summary_label(inputs)
	if (locale === "fr") return fr_logs_summary_label(inputs)
	if (locale === "it") return it_logs_summary_label(inputs)
	if (locale === "nl") return nl_logs_summary_label(inputs)
	if (locale === "pl") return pl_logs_summary_label(inputs)
	if (locale === "pt") return pt_logs_summary_label(inputs)
	if (locale === "ru") return ru_logs_summary_label(inputs)
	if (locale === "sv") return sv_logs_summary_label(inputs)
	if (locale === "tr") return tr_logs_summary_label(inputs)
	if (locale === "zh") return zh_logs_summary_label(inputs)
	if (locale === "ja") return ja_logs_summary_label(inputs)
	return en_logs_summary_label(inputs)
});
