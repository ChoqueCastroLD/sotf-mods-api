/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ start: NonNullable<unknown>, end: NonNullable<unknown> }} Admin_PeriodInputs */

const en_admin_period = /** @type {(inputs: Admin_PeriodInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.start} – ${i?.end}`)
};

const es_admin_period = /** @type {(inputs: Admin_PeriodInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.start} – ${i?.end}`)
};

const de_admin_period = /** @type {(inputs: Admin_PeriodInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.start} – ${i?.end}`)
};

const fr_admin_period = /** @type {(inputs: Admin_PeriodInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.start} – ${i?.end}`)
};

const it_admin_period = /** @type {(inputs: Admin_PeriodInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.start} – ${i?.end}`)
};

const nl_admin_period = /** @type {(inputs: Admin_PeriodInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.start} – ${i?.end}`)
};

const pl_admin_period = /** @type {(inputs: Admin_PeriodInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.start} – ${i?.end}`)
};

const pt_admin_period = /** @type {(inputs: Admin_PeriodInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.start} – ${i?.end}`)
};

const ru_admin_period = /** @type {(inputs: Admin_PeriodInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.start} – ${i?.end}`)
};

const sv_admin_period = /** @type {(inputs: Admin_PeriodInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.start} – ${i?.end}`)
};

const tr_admin_period = /** @type {(inputs: Admin_PeriodInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.start} – ${i?.end}`)
};

const zh_admin_period = /** @type {(inputs: Admin_PeriodInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.start} – ${i?.end}`)
};

const ja_admin_period = /** @type {(inputs: Admin_PeriodInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.start} – ${i?.end}`)
};

/**
* | output |
* | --- |
* | "{start} – {end}" |
*
* @param {Admin_PeriodInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_period = /** @type {((inputs: Admin_PeriodInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_PeriodInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_period(inputs)
	if (locale === "de") return de_admin_period(inputs)
	if (locale === "fr") return fr_admin_period(inputs)
	if (locale === "it") return it_admin_period(inputs)
	if (locale === "nl") return nl_admin_period(inputs)
	if (locale === "pl") return pl_admin_period(inputs)
	if (locale === "pt") return pt_admin_period(inputs)
	if (locale === "ru") return ru_admin_period(inputs)
	if (locale === "sv") return sv_admin_period(inputs)
	if (locale === "tr") return tr_admin_period(inputs)
	if (locale === "zh") return zh_admin_period(inputs)
	if (locale === "ja") return ja_admin_period(inputs)
	return en_admin_period(inputs)
});
