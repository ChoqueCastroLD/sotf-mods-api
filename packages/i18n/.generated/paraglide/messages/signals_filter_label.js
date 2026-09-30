/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_Filter_LabelInputs */

const en_signals_filter_label = /** @type {(inputs: Signals_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filter signals`)
};

const es_signals_filter_label = /** @type {(inputs: Signals_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtrar señales`)
};

const de_signals_filter_label = /** @type {(inputs: Signals_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signale filtern`)
};

const fr_signals_filter_label = /** @type {(inputs: Signals_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtrer les signaux`)
};

const it_signals_filter_label = /** @type {(inputs: Signals_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtra i segnali`)
};

const nl_signals_filter_label = /** @type {(inputs: Signals_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signalen filteren`)
};

const pl_signals_filter_label = /** @type {(inputs: Signals_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtruj sygnały`)
};

const pt_signals_filter_label = /** @type {(inputs: Signals_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtrar sinais`)
};

const ru_signals_filter_label = /** @type {(inputs: Signals_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Фильтр сигналов`)
};

const sv_signals_filter_label = /** @type {(inputs: Signals_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtrera signaler`)
};

const tr_signals_filter_label = /** @type {(inputs: Signals_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sinyalleri filtrele`)
};

const zh_signals_filter_label = /** @type {(inputs: Signals_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`筛选信号`)
};

const ja_signals_filter_label = /** @type {(inputs: Signals_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`シグナルを絞り込む`)
};

/**
* | output |
* | --- |
* | "Filter signals" |
*
* @param {Signals_Filter_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_filter_label = /** @type {((inputs?: Signals_Filter_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Filter_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_filter_label(inputs)
	if (locale === "de") return de_signals_filter_label(inputs)
	if (locale === "fr") return fr_signals_filter_label(inputs)
	if (locale === "it") return it_signals_filter_label(inputs)
	if (locale === "nl") return nl_signals_filter_label(inputs)
	if (locale === "pl") return pl_signals_filter_label(inputs)
	if (locale === "pt") return pt_signals_filter_label(inputs)
	if (locale === "ru") return ru_signals_filter_label(inputs)
	if (locale === "sv") return sv_signals_filter_label(inputs)
	if (locale === "tr") return tr_signals_filter_label(inputs)
	if (locale === "zh") return zh_signals_filter_label(inputs)
	if (locale === "ja") return ja_signals_filter_label(inputs)
	return en_signals_filter_label(inputs)
});
