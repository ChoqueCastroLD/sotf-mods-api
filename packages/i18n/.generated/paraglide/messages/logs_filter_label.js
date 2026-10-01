/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Filter_LabelInputs */

const en_logs_filter_label = /** @type {(inputs: Logs_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filter by level`)
};

const es_logs_filter_label = /** @type {(inputs: Logs_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtrar por nivel`)
};

const de_logs_filter_label = /** @type {(inputs: Logs_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nach Stufe filtern`)
};

const fr_logs_filter_label = /** @type {(inputs: Logs_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtrer par niveau`)
};

const it_logs_filter_label = /** @type {(inputs: Logs_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtra per livello`)
};

const nl_logs_filter_label = /** @type {(inputs: Logs_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filteren op niveau`)
};

const pl_logs_filter_label = /** @type {(inputs: Logs_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtruj według poziomu`)
};

const pt_logs_filter_label = /** @type {(inputs: Logs_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtrar por nível`)
};

const ru_logs_filter_label = /** @type {(inputs: Logs_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Фильтр по уровню`)
};

const sv_logs_filter_label = /** @type {(inputs: Logs_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtrera efter nivå`)
};

const tr_logs_filter_label = /** @type {(inputs: Logs_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Düzeye göre filtrele`)
};

const zh_logs_filter_label = /** @type {(inputs: Logs_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`按级别筛选`)
};

const ja_logs_filter_label = /** @type {(inputs: Logs_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レベルで絞り込み`)
};

/**
* | output |
* | --- |
* | "Filter by level" |
*
* @param {Logs_Filter_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_filter_label = /** @type {((inputs?: Logs_Filter_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Filter_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_filter_label(inputs)
	if (locale === "de") return de_logs_filter_label(inputs)
	if (locale === "fr") return fr_logs_filter_label(inputs)
	if (locale === "it") return it_logs_filter_label(inputs)
	if (locale === "nl") return nl_logs_filter_label(inputs)
	if (locale === "pl") return pl_logs_filter_label(inputs)
	if (locale === "pt") return pt_logs_filter_label(inputs)
	if (locale === "ru") return ru_logs_filter_label(inputs)
	if (locale === "sv") return sv_logs_filter_label(inputs)
	if (locale === "tr") return tr_logs_filter_label(inputs)
	if (locale === "zh") return zh_logs_filter_label(inputs)
	if (locale === "ja") return ja_logs_filter_label(inputs)
	return en_logs_filter_label(inputs)
});
