/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ display: NonNullable<unknown> }} Mod_Stats_Last30Inputs */

const en_mod_stats_last30 = /** @type {(inputs: Mod_Stats_Last30Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Last 30 days: ${i?.display}`)
};

const es_mod_stats_last30 = /** @type {(inputs: Mod_Stats_Last30Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Últimos 30 días: ${i?.display}`)
};

const de_mod_stats_last30 = /** @type {(inputs: Mod_Stats_Last30Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Letzte 30 Tage: ${i?.display}`)
};

const fr_mod_stats_last30 = /** @type {(inputs: Mod_Stats_Last30Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`30 derniers jours : ${i?.display}`)
};

const it_mod_stats_last30 = /** @type {(inputs: Mod_Stats_Last30Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ultimi 30 giorni: ${i?.display}`)
};

const nl_mod_stats_last30 = /** @type {(inputs: Mod_Stats_Last30Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Laatste 30 dagen: ${i?.display}`)
};

const pl_mod_stats_last30 = /** @type {(inputs: Mod_Stats_Last30Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ostatnie 30 dni: ${i?.display}`)
};

const pt_mod_stats_last30 = /** @type {(inputs: Mod_Stats_Last30Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Últimos 30 dias: ${i?.display}`)
};

const ru_mod_stats_last30 = /** @type {(inputs: Mod_Stats_Last30Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Последние 30 дней: ${i?.display}`)
};

const sv_mod_stats_last30 = /** @type {(inputs: Mod_Stats_Last30Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Senaste 30 dagarna: ${i?.display}`)
};

const tr_mod_stats_last30 = /** @type {(inputs: Mod_Stats_Last30Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Son 30 gün: ${i?.display}`)
};

const zh_mod_stats_last30 = /** @type {(inputs: Mod_Stats_Last30Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`最近 30 天：${i?.display}`)
};

const ja_mod_stats_last30 = /** @type {(inputs: Mod_Stats_Last30Inputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`過去 30 日間：${i?.display}`)
};

/**
* | output |
* | --- |
* | "Last 30 days: {display}" |
*
* @param {Mod_Stats_Last30Inputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_stats_last30 = /** @type {((inputs: Mod_Stats_Last30Inputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Stats_Last30Inputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_stats_last30(inputs)
	if (locale === "de") return de_mod_stats_last30(inputs)
	if (locale === "fr") return fr_mod_stats_last30(inputs)
	if (locale === "it") return it_mod_stats_last30(inputs)
	if (locale === "nl") return nl_mod_stats_last30(inputs)
	if (locale === "pl") return pl_mod_stats_last30(inputs)
	if (locale === "pt") return pt_mod_stats_last30(inputs)
	if (locale === "ru") return ru_mod_stats_last30(inputs)
	if (locale === "sv") return sv_mod_stats_last30(inputs)
	if (locale === "tr") return tr_mod_stats_last30(inputs)
	if (locale === "zh") return zh_mod_stats_last30(inputs)
	if (locale === "ja") return ja_mod_stats_last30(inputs)
	return en_mod_stats_last30(inputs)
});
