/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Stats_Range_1yInputs */

const en_mod_stats_range_1y = /** @type {(inputs: Mod_Stats_Range_1yInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1 year`)
};

const es_mod_stats_range_1y = /** @type {(inputs: Mod_Stats_Range_1yInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1 año`)
};

const de_mod_stats_range_1y = /** @type {(inputs: Mod_Stats_Range_1yInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1 Jahr`)
};

const fr_mod_stats_range_1y = /** @type {(inputs: Mod_Stats_Range_1yInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1 an`)
};

const it_mod_stats_range_1y = /** @type {(inputs: Mod_Stats_Range_1yInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1 anno`)
};

const nl_mod_stats_range_1y = /** @type {(inputs: Mod_Stats_Range_1yInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1 jaar`)
};

const pl_mod_stats_range_1y = /** @type {(inputs: Mod_Stats_Range_1yInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1 rok`)
};

const pt_mod_stats_range_1y = /** @type {(inputs: Mod_Stats_Range_1yInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1 ano`)
};

const ru_mod_stats_range_1y = /** @type {(inputs: Mod_Stats_Range_1yInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1 год`)
};

const sv_mod_stats_range_1y = /** @type {(inputs: Mod_Stats_Range_1yInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1 år`)
};

const tr_mod_stats_range_1y = /** @type {(inputs: Mod_Stats_Range_1yInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1 yıl`)
};

const zh_mod_stats_range_1y = /** @type {(inputs: Mod_Stats_Range_1yInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1 年`)
};

const ja_mod_stats_range_1y = /** @type {(inputs: Mod_Stats_Range_1yInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1 年`)
};

/**
* | output |
* | --- |
* | "1 year" |
*
* @param {Mod_Stats_Range_1yInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_stats_range_1y = /** @type {((inputs?: Mod_Stats_Range_1yInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Stats_Range_1yInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_stats_range_1y(inputs)
	if (locale === "de") return de_mod_stats_range_1y(inputs)
	if (locale === "fr") return fr_mod_stats_range_1y(inputs)
	if (locale === "it") return it_mod_stats_range_1y(inputs)
	if (locale === "nl") return nl_mod_stats_range_1y(inputs)
	if (locale === "pl") return pl_mod_stats_range_1y(inputs)
	if (locale === "pt") return pt_mod_stats_range_1y(inputs)
	if (locale === "ru") return ru_mod_stats_range_1y(inputs)
	if (locale === "sv") return sv_mod_stats_range_1y(inputs)
	if (locale === "tr") return tr_mod_stats_range_1y(inputs)
	if (locale === "zh") return zh_mod_stats_range_1y(inputs)
	if (locale === "ja") return ja_mod_stats_range_1y(inputs)
	return en_mod_stats_range_1y(inputs)
});
