/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Stats_Range_30dInputs */

const en_mod_stats_range_30d = /** @type {(inputs: Mod_Stats_Range_30dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`30 days`)
};

const es_mod_stats_range_30d = /** @type {(inputs: Mod_Stats_Range_30dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`30 días`)
};

const de_mod_stats_range_30d = /** @type {(inputs: Mod_Stats_Range_30dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`30 Tage`)
};

const fr_mod_stats_range_30d = /** @type {(inputs: Mod_Stats_Range_30dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`30 jours`)
};

const it_mod_stats_range_30d = /** @type {(inputs: Mod_Stats_Range_30dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`30 giorni`)
};

const nl_mod_stats_range_30d = /** @type {(inputs: Mod_Stats_Range_30dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`30 dagen`)
};

const pl_mod_stats_range_30d = /** @type {(inputs: Mod_Stats_Range_30dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`30 dni`)
};

const pt_mod_stats_range_30d = /** @type {(inputs: Mod_Stats_Range_30dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`30 dias`)
};

const ru_mod_stats_range_30d = /** @type {(inputs: Mod_Stats_Range_30dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`30 дней`)
};

const sv_mod_stats_range_30d = /** @type {(inputs: Mod_Stats_Range_30dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`30 dagar`)
};

const tr_mod_stats_range_30d = /** @type {(inputs: Mod_Stats_Range_30dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`30 gün`)
};

const zh_mod_stats_range_30d = /** @type {(inputs: Mod_Stats_Range_30dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`30 天`)
};

const ja_mod_stats_range_30d = /** @type {(inputs: Mod_Stats_Range_30dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`30 日`)
};

/**
* | output |
* | --- |
* | "30 days" |
*
* @param {Mod_Stats_Range_30dInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_stats_range_30d = /** @type {((inputs?: Mod_Stats_Range_30dInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Stats_Range_30dInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_stats_range_30d(inputs)
	if (locale === "de") return de_mod_stats_range_30d(inputs)
	if (locale === "fr") return fr_mod_stats_range_30d(inputs)
	if (locale === "it") return it_mod_stats_range_30d(inputs)
	if (locale === "nl") return nl_mod_stats_range_30d(inputs)
	if (locale === "pl") return pl_mod_stats_range_30d(inputs)
	if (locale === "pt") return pt_mod_stats_range_30d(inputs)
	if (locale === "ru") return ru_mod_stats_range_30d(inputs)
	if (locale === "sv") return sv_mod_stats_range_30d(inputs)
	if (locale === "tr") return tr_mod_stats_range_30d(inputs)
	if (locale === "zh") return zh_mod_stats_range_30d(inputs)
	if (locale === "ja") return ja_mod_stats_range_30d(inputs)
	return en_mod_stats_range_30d(inputs)
});
