/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Stat_Downloads_TotalInputs */

const en_mod_stat_downloads_total = /** @type {(inputs: Mod_Stat_Downloads_TotalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`total`)
};

const es_mod_stat_downloads_total = /** @type {(inputs: Mod_Stat_Downloads_TotalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`en total`)
};

const de_mod_stat_downloads_total = /** @type {(inputs: Mod_Stat_Downloads_TotalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`insgesamt`)
};

const fr_mod_stat_downloads_total = /** @type {(inputs: Mod_Stat_Downloads_TotalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`au total`)
};

const it_mod_stat_downloads_total = /** @type {(inputs: Mod_Stat_Downloads_TotalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`in totale`)
};

const nl_mod_stat_downloads_total = /** @type {(inputs: Mod_Stat_Downloads_TotalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`in totaal`)
};

const pl_mod_stat_downloads_total = /** @type {(inputs: Mod_Stat_Downloads_TotalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`łącznie`)
};

const pt_mod_stat_downloads_total = /** @type {(inputs: Mod_Stat_Downloads_TotalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`no total`)
};

const ru_mod_stat_downloads_total = /** @type {(inputs: Mod_Stat_Downloads_TotalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`всего`)
};

const sv_mod_stat_downloads_total = /** @type {(inputs: Mod_Stat_Downloads_TotalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`totalt`)
};

const tr_mod_stat_downloads_total = /** @type {(inputs: Mod_Stat_Downloads_TotalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`toplam`)
};

const zh_mod_stat_downloads_total = /** @type {(inputs: Mod_Stat_Downloads_TotalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`总计`)
};

const ja_mod_stat_downloads_total = /** @type {(inputs: Mod_Stat_Downloads_TotalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`合計`)
};

/**
* | output |
* | --- |
* | "total" |
*
* @param {Mod_Stat_Downloads_TotalInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_stat_downloads_total = /** @type {((inputs?: Mod_Stat_Downloads_TotalInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Stat_Downloads_TotalInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_stat_downloads_total(inputs)
	if (locale === "de") return de_mod_stat_downloads_total(inputs)
	if (locale === "fr") return fr_mod_stat_downloads_total(inputs)
	if (locale === "it") return it_mod_stat_downloads_total(inputs)
	if (locale === "nl") return nl_mod_stat_downloads_total(inputs)
	if (locale === "pl") return pl_mod_stat_downloads_total(inputs)
	if (locale === "pt") return pt_mod_stat_downloads_total(inputs)
	if (locale === "ru") return ru_mod_stat_downloads_total(inputs)
	if (locale === "sv") return sv_mod_stat_downloads_total(inputs)
	if (locale === "tr") return tr_mod_stat_downloads_total(inputs)
	if (locale === "zh") return zh_mod_stat_downloads_total(inputs)
	if (locale === "ja") return ja_mod_stat_downloads_total(inputs)
	return en_mod_stat_downloads_total(inputs)
});
