/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ display: NonNullable<unknown> }} Mod_Stat_This_Week_ValueInputs */

const en_mod_stat_this_week_value = /** @type {(inputs: Mod_Stat_This_Week_ValueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.display} this week`)
};

const es_mod_stat_this_week_value = /** @type {(inputs: Mod_Stat_This_Week_ValueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.display} esta semana`)
};

const de_mod_stat_this_week_value = /** @type {(inputs: Mod_Stat_This_Week_ValueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.display} diese Woche`)
};

const fr_mod_stat_this_week_value = /** @type {(inputs: Mod_Stat_This_Week_ValueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.display} cette semaine`)
};

const it_mod_stat_this_week_value = /** @type {(inputs: Mod_Stat_This_Week_ValueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.display} questa settimana`)
};

const nl_mod_stat_this_week_value = /** @type {(inputs: Mod_Stat_This_Week_ValueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.display} deze week`)
};

const pl_mod_stat_this_week_value = /** @type {(inputs: Mod_Stat_This_Week_ValueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.display} w tym tygodniu`)
};

const pt_mod_stat_this_week_value = /** @type {(inputs: Mod_Stat_This_Week_ValueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.display} nesta semana`)
};

const ru_mod_stat_this_week_value = /** @type {(inputs: Mod_Stat_This_Week_ValueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.display} за неделю`)
};

const sv_mod_stat_this_week_value = /** @type {(inputs: Mod_Stat_This_Week_ValueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.display} den här veckan`)
};

const tr_mod_stat_this_week_value = /** @type {(inputs: Mod_Stat_This_Week_ValueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`bu hafta ${i?.display}`)
};

const zh_mod_stat_this_week_value = /** @type {(inputs: Mod_Stat_This_Week_ValueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`本周 ${i?.display}`)
};

const ja_mod_stat_this_week_value = /** @type {(inputs: Mod_Stat_This_Week_ValueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`今週 ${i?.display}`)
};

/**
* | output |
* | --- |
* | "{display} this week" |
*
* @param {Mod_Stat_This_Week_ValueInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_stat_this_week_value = /** @type {((inputs: Mod_Stat_This_Week_ValueInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Stat_This_Week_ValueInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_stat_this_week_value(inputs)
	if (locale === "de") return de_mod_stat_this_week_value(inputs)
	if (locale === "fr") return fr_mod_stat_this_week_value(inputs)
	if (locale === "it") return it_mod_stat_this_week_value(inputs)
	if (locale === "nl") return nl_mod_stat_this_week_value(inputs)
	if (locale === "pl") return pl_mod_stat_this_week_value(inputs)
	if (locale === "pt") return pt_mod_stat_this_week_value(inputs)
	if (locale === "ru") return ru_mod_stat_this_week_value(inputs)
	if (locale === "sv") return sv_mod_stat_this_week_value(inputs)
	if (locale === "tr") return tr_mod_stat_this_week_value(inputs)
	if (locale === "zh") return zh_mod_stat_this_week_value(inputs)
	if (locale === "ja") return ja_mod_stat_this_week_value(inputs)
	return en_mod_stat_this_week_value(inputs)
});
