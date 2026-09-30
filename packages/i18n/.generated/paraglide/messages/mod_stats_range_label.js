/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Stats_Range_LabelInputs */

const en_mod_stats_range_label = /** @type {(inputs: Mod_Stats_Range_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Time range`)
};

const es_mod_stats_range_label = /** @type {(inputs: Mod_Stats_Range_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Intervalo de tiempo`)
};

const de_mod_stats_range_label = /** @type {(inputs: Mod_Stats_Range_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zeitraum`)
};

const fr_mod_stats_range_label = /** @type {(inputs: Mod_Stats_Range_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Période`)
};

const it_mod_stats_range_label = /** @type {(inputs: Mod_Stats_Range_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Intervallo di tempo`)
};

const nl_mod_stats_range_label = /** @type {(inputs: Mod_Stats_Range_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Periode`)
};

const pl_mod_stats_range_label = /** @type {(inputs: Mod_Stats_Range_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zakres czasu`)
};

const pt_mod_stats_range_label = /** @type {(inputs: Mod_Stats_Range_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Período`)
};

const ru_mod_stats_range_label = /** @type {(inputs: Mod_Stats_Range_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Период`)
};

const sv_mod_stats_range_label = /** @type {(inputs: Mod_Stats_Range_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tidsperiod`)
};

const tr_mod_stats_range_label = /** @type {(inputs: Mod_Stats_Range_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaman aralığı`)
};

const zh_mod_stats_range_label = /** @type {(inputs: Mod_Stats_Range_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`时间范围`)
};

const ja_mod_stats_range_label = /** @type {(inputs: Mod_Stats_Range_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`期間`)
};

/**
* | output |
* | --- |
* | "Time range" |
*
* @param {Mod_Stats_Range_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_stats_range_label = /** @type {((inputs?: Mod_Stats_Range_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Stats_Range_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_stats_range_label(inputs)
	if (locale === "de") return de_mod_stats_range_label(inputs)
	if (locale === "fr") return fr_mod_stats_range_label(inputs)
	if (locale === "it") return it_mod_stats_range_label(inputs)
	if (locale === "nl") return nl_mod_stats_range_label(inputs)
	if (locale === "pl") return pl_mod_stats_range_label(inputs)
	if (locale === "pt") return pt_mod_stats_range_label(inputs)
	if (locale === "ru") return ru_mod_stats_range_label(inputs)
	if (locale === "sv") return sv_mod_stats_range_label(inputs)
	if (locale === "tr") return tr_mod_stats_range_label(inputs)
	if (locale === "zh") return zh_mod_stats_range_label(inputs)
	if (locale === "ja") return ja_mod_stats_range_label(inputs)
	return en_mod_stats_range_label(inputs)
});
