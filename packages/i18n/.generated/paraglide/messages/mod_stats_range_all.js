/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Stats_Range_AllInputs */

const en_mod_stats_range_all = /** @type {(inputs: Mod_Stats_Range_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All time`)
};

const es_mod_stats_range_all = /** @type {(inputs: Mod_Stats_Range_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todo el tiempo`)
};

const de_mod_stats_range_all = /** @type {(inputs: Mod_Stats_Range_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gesamter Zeitraum`)
};

const fr_mod_stats_range_all = /** @type {(inputs: Mod_Stats_Range_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Depuis toujours`)
};

const it_mod_stats_range_all = /** @type {(inputs: Mod_Stats_Range_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sempre`)
};

const nl_mod_stats_range_all = /** @type {(inputs: Mod_Stats_Range_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Altijd`)
};

const pl_mod_stats_range_all = /** @type {(inputs: Mod_Stats_Range_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cały okres`)
};

const pt_mod_stats_range_all = /** @type {(inputs: Mod_Stats_Range_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todo o período`)
};

const ru_mod_stats_range_all = /** @type {(inputs: Mod_Stats_Range_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`За всё время`)
};

const sv_mod_stats_range_all = /** @type {(inputs: Mod_Stats_Range_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla tider`)
};

const tr_mod_stats_range_all = /** @type {(inputs: Mod_Stats_Range_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tüm zamanlar`)
};

const zh_mod_stats_range_all = /** @type {(inputs: Mod_Stats_Range_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`全部时间`)
};

const ja_mod_stats_range_all = /** @type {(inputs: Mod_Stats_Range_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`全期間`)
};

/**
* | output |
* | --- |
* | "All time" |
*
* @param {Mod_Stats_Range_AllInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_stats_range_all = /** @type {((inputs?: Mod_Stats_Range_AllInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Stats_Range_AllInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_stats_range_all(inputs)
	if (locale === "de") return de_mod_stats_range_all(inputs)
	if (locale === "fr") return fr_mod_stats_range_all(inputs)
	if (locale === "it") return it_mod_stats_range_all(inputs)
	if (locale === "nl") return nl_mod_stats_range_all(inputs)
	if (locale === "pl") return pl_mod_stats_range_all(inputs)
	if (locale === "pt") return pt_mod_stats_range_all(inputs)
	if (locale === "ru") return ru_mod_stats_range_all(inputs)
	if (locale === "sv") return sv_mod_stats_range_all(inputs)
	if (locale === "tr") return tr_mod_stats_range_all(inputs)
	if (locale === "zh") return zh_mod_stats_range_all(inputs)
	if (locale === "ja") return ja_mod_stats_range_all(inputs)
	return en_mod_stats_range_all(inputs)
});
