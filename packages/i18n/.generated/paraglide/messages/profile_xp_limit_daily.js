/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Profile_Xp_Limit_DailyInputs */

const en_profile_xp_limit_daily = /** @type {(inputs: Profile_Xp_Limit_DailyInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("en", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} per day`)
};

const es_profile_xp_limit_daily = /** @type {(inputs: Profile_Xp_Limit_DailyInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("es", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} al día`)
};

const de_profile_xp_limit_daily = /** @type {(inputs: Profile_Xp_Limit_DailyInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("de", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} pro Tag`)
};

const fr_profile_xp_limit_daily = /** @type {(inputs: Profile_Xp_Limit_DailyInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("fr", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} par jour`)
};

const it_profile_xp_limit_daily = /** @type {(inputs: Profile_Xp_Limit_DailyInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("it", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} al giorno`)
};

const nl_profile_xp_limit_daily = /** @type {(inputs: Profile_Xp_Limit_DailyInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("nl", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} per dag`)
};

const pl_profile_xp_limit_daily = /** @type {(inputs: Profile_Xp_Limit_DailyInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("pl", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} dziennie`)
};

const pt_profile_xp_limit_daily = /** @type {(inputs: Profile_Xp_Limit_DailyInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("pt", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} por dia`)
};

const ru_profile_xp_limit_daily = /** @type {(inputs: Profile_Xp_Limit_DailyInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("ru", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} в день`)
};

const sv_profile_xp_limit_daily = /** @type {(inputs: Profile_Xp_Limit_DailyInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("sv", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} per dag`)
};

const tr_profile_xp_limit_daily = /** @type {(inputs: Profile_Xp_Limit_DailyInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("tr", i?.count, {});return /** @type {LocalizedString} */ (`Günde ${count__number}`)
};

const zh_profile_xp_limit_daily = /** @type {(inputs: Profile_Xp_Limit_DailyInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`每天 ${count__number} 次`)
};

const ja_profile_xp_limit_daily = /** @type {(inputs: Profile_Xp_Limit_DailyInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`1 日 ${count__number} 回`)
};

/**
* | output |
* | --- |
* | "{count__number} per day" |
*
* @param {Profile_Xp_Limit_DailyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_xp_limit_daily = /** @type {((inputs: Profile_Xp_Limit_DailyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Xp_Limit_DailyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_xp_limit_daily(inputs)
	if (locale === "de") return de_profile_xp_limit_daily(inputs)
	if (locale === "fr") return fr_profile_xp_limit_daily(inputs)
	if (locale === "it") return it_profile_xp_limit_daily(inputs)
	if (locale === "nl") return nl_profile_xp_limit_daily(inputs)
	if (locale === "pl") return pl_profile_xp_limit_daily(inputs)
	if (locale === "pt") return pt_profile_xp_limit_daily(inputs)
	if (locale === "ru") return ru_profile_xp_limit_daily(inputs)
	if (locale === "sv") return sv_profile_xp_limit_daily(inputs)
	if (locale === "tr") return tr_profile_xp_limit_daily(inputs)
	if (locale === "zh") return zh_profile_xp_limit_daily(inputs)
	if (locale === "ja") return ja_profile_xp_limit_daily(inputs)
	return en_profile_xp_limit_daily(inputs)
});
