/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Stat_This_WeekInputs */

const en_mod_stat_this_week = /** @type {(inputs: Mod_Stat_This_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads this week`)
};

const es_mod_stat_this_week = /** @type {(inputs: Mod_Stat_This_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descargas esta semana`)
};

const de_mod_stat_this_week = /** @type {(inputs: Mod_Stat_This_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads diese Woche`)
};

const fr_mod_stat_this_week = /** @type {(inputs: Mod_Stat_This_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Téléchargements cette semaine`)
};

const it_mod_stat_this_week = /** @type {(inputs: Mod_Stat_This_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download questa settimana`)
};

const nl_mod_stat_this_week = /** @type {(inputs: Mod_Stat_This_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads deze week`)
};

const pl_mod_stat_this_week = /** @type {(inputs: Mod_Stat_This_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobrania w tym tygodniu`)
};

const pt_mod_stat_this_week = /** @type {(inputs: Mod_Stat_This_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads nesta semana`)
};

const ru_mod_stat_this_week = /** @type {(inputs: Mod_Stat_This_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузки за неделю`)
};

const sv_mod_stat_this_week = /** @type {(inputs: Mod_Stat_This_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nedladdningar den här veckan`)
};

const tr_mod_stat_this_week = /** @type {(inputs: Mod_Stat_This_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu haftaki indirmeler`)
};

const zh_mod_stat_this_week = /** @type {(inputs: Mod_Stat_This_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`本周下载量`)
};

const ja_mod_stat_this_week = /** @type {(inputs: Mod_Stat_This_WeekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`今週のダウンロード数`)
};

/**
* | output |
* | --- |
* | "Downloads this week" |
*
* @param {Mod_Stat_This_WeekInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_stat_this_week = /** @type {((inputs?: Mod_Stat_This_WeekInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Stat_This_WeekInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_stat_this_week(inputs)
	if (locale === "de") return de_mod_stat_this_week(inputs)
	if (locale === "fr") return fr_mod_stat_this_week(inputs)
	if (locale === "it") return it_mod_stat_this_week(inputs)
	if (locale === "nl") return nl_mod_stat_this_week(inputs)
	if (locale === "pl") return pl_mod_stat_this_week(inputs)
	if (locale === "pt") return pt_mod_stat_this_week(inputs)
	if (locale === "ru") return ru_mod_stat_this_week(inputs)
	if (locale === "sv") return sv_mod_stat_this_week(inputs)
	if (locale === "tr") return tr_mod_stat_this_week(inputs)
	if (locale === "zh") return zh_mod_stat_this_week(inputs)
	if (locale === "ja") return ja_mod_stat_this_week(inputs)
	return en_mod_stat_this_week(inputs)
});
