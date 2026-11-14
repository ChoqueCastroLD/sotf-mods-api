/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ days: NonNullable<unknown> }} Admin_Traffic_Range_DaysInputs */

const en_admin_traffic_range_days = /** @type {(inputs: Admin_Traffic_Range_DaysInputs) => LocalizedString} */ (i) => {
	const days__number = registry.number("en", i?.days, {});return /** @type {LocalizedString} */ (`Last ${days__number} days`)
};

const es_admin_traffic_range_days = /** @type {(inputs: Admin_Traffic_Range_DaysInputs) => LocalizedString} */ (i) => {
	const days__number = registry.number("es", i?.days, {});return /** @type {LocalizedString} */ (`Últimos ${days__number} días`)
};

const de_admin_traffic_range_days = /** @type {(inputs: Admin_Traffic_Range_DaysInputs) => LocalizedString} */ (i) => {
	const days__number = registry.number("de", i?.days, {});return /** @type {LocalizedString} */ (`Letzte ${days__number} Tage`)
};

const fr_admin_traffic_range_days = /** @type {(inputs: Admin_Traffic_Range_DaysInputs) => LocalizedString} */ (i) => {
	const days__number = registry.number("fr", i?.days, {});return /** @type {LocalizedString} */ (`${days__number} derniers jours`)
};

const it_admin_traffic_range_days = /** @type {(inputs: Admin_Traffic_Range_DaysInputs) => LocalizedString} */ (i) => {
	const days__number = registry.number("it", i?.days, {});return /** @type {LocalizedString} */ (`Ultimi ${days__number} giorni`)
};

const nl_admin_traffic_range_days = /** @type {(inputs: Admin_Traffic_Range_DaysInputs) => LocalizedString} */ (i) => {
	const days__number = registry.number("nl", i?.days, {});return /** @type {LocalizedString} */ (`Laatste ${days__number} dagen`)
};

const pl_admin_traffic_range_days = /** @type {(inputs: Admin_Traffic_Range_DaysInputs) => LocalizedString} */ (i) => {
	const days__number = registry.number("pl", i?.days, {});return /** @type {LocalizedString} */ (`Ostatnie ${days__number} dni`)
};

const pt_admin_traffic_range_days = /** @type {(inputs: Admin_Traffic_Range_DaysInputs) => LocalizedString} */ (i) => {
	const days__number = registry.number("pt", i?.days, {});return /** @type {LocalizedString} */ (`Últimos ${days__number} dias`)
};

const ru_admin_traffic_range_days = /** @type {(inputs: Admin_Traffic_Range_DaysInputs) => LocalizedString} */ (i) => {
	const days__number = registry.number("ru", i?.days, {});return /** @type {LocalizedString} */ (`Последние ${days__number} дн.`)
};

const sv_admin_traffic_range_days = /** @type {(inputs: Admin_Traffic_Range_DaysInputs) => LocalizedString} */ (i) => {
	const days__number = registry.number("sv", i?.days, {});return /** @type {LocalizedString} */ (`Senaste ${days__number} dagarna`)
};

const tr_admin_traffic_range_days = /** @type {(inputs: Admin_Traffic_Range_DaysInputs) => LocalizedString} */ (i) => {
	const days__number = registry.number("tr", i?.days, {});return /** @type {LocalizedString} */ (`Son ${days__number} gün`)
};

const zh_admin_traffic_range_days = /** @type {(inputs: Admin_Traffic_Range_DaysInputs) => LocalizedString} */ (i) => {
	const days__number = registry.number("zh", i?.days, {});return /** @type {LocalizedString} */ (`最近 ${days__number} 天`)
};

const ja_admin_traffic_range_days = /** @type {(inputs: Admin_Traffic_Range_DaysInputs) => LocalizedString} */ (i) => {
	const days__number = registry.number("ja", i?.days, {});return /** @type {LocalizedString} */ (`過去 ${days__number} 日`)
};

/**
* | output |
* | --- |
* | "Last {days__number} days" |
*
* @param {Admin_Traffic_Range_DaysInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_traffic_range_days = /** @type {((inputs: Admin_Traffic_Range_DaysInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Traffic_Range_DaysInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_traffic_range_days(inputs)
	if (locale === "de") return de_admin_traffic_range_days(inputs)
	if (locale === "fr") return fr_admin_traffic_range_days(inputs)
	if (locale === "it") return it_admin_traffic_range_days(inputs)
	if (locale === "nl") return nl_admin_traffic_range_days(inputs)
	if (locale === "pl") return pl_admin_traffic_range_days(inputs)
	if (locale === "pt") return pt_admin_traffic_range_days(inputs)
	if (locale === "ru") return ru_admin_traffic_range_days(inputs)
	if (locale === "sv") return sv_admin_traffic_range_days(inputs)
	if (locale === "tr") return tr_admin_traffic_range_days(inputs)
	if (locale === "zh") return zh_admin_traffic_range_days(inputs)
	if (locale === "ja") return ja_admin_traffic_range_days(inputs)
	return en_admin_traffic_range_days(inputs)
});
