/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ mod: NonNullable<unknown> }} Signals_Award_Build_Of_MonthInputs */

const en_signals_award_build_of_month = /** @type {(inputs: Signals_Award_Build_Of_MonthInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} is Build of the Month`)
};

const es_signals_award_build_of_month = /** @type {(inputs: Signals_Award_Build_Of_MonthInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} es la Build del mes`)
};

const de_signals_award_build_of_month = /** @type {(inputs: Signals_Award_Build_Of_MonthInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} ist Build des Monats`)
};

const fr_signals_award_build_of_month = /** @type {(inputs: Signals_Award_Build_Of_MonthInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} est la Build du mois`)
};

const it_signals_award_build_of_month = /** @type {(inputs: Signals_Award_Build_Of_MonthInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} è la Build del mese`)
};

const nl_signals_award_build_of_month = /** @type {(inputs: Signals_Award_Build_Of_MonthInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} is Build van de maand`)
};

const pl_signals_award_build_of_month = /** @type {(inputs: Signals_Award_Build_Of_MonthInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} to Build miesiąca`)
};

const pt_signals_award_build_of_month = /** @type {(inputs: Signals_Award_Build_Of_MonthInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} é a Build do mês`)
};

const ru_signals_award_build_of_month = /** @type {(inputs: Signals_Award_Build_Of_MonthInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} — постройка месяца`)
};

const sv_signals_award_build_of_month = /** @type {(inputs: Signals_Award_Build_Of_MonthInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} är månadens bygge`)
};

const tr_signals_award_build_of_month = /** @type {(inputs: Signals_Award_Build_Of_MonthInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} Ayın Yapısı oldu`)
};

const zh_signals_award_build_of_month = /** @type {(inputs: Signals_Award_Build_Of_MonthInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} 当选本月建筑`)
};

const ja_signals_award_build_of_month = /** @type {(inputs: Signals_Award_Build_Of_MonthInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} が今月の建築に選ばれました`)
};

/**
* | output |
* | --- |
* | "{mod} is Build of the Month" |
*
* @param {Signals_Award_Build_Of_MonthInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_award_build_of_month = /** @type {((inputs: Signals_Award_Build_Of_MonthInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Award_Build_Of_MonthInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_award_build_of_month(inputs)
	if (locale === "de") return de_signals_award_build_of_month(inputs)
	if (locale === "fr") return fr_signals_award_build_of_month(inputs)
	if (locale === "it") return it_signals_award_build_of_month(inputs)
	if (locale === "nl") return nl_signals_award_build_of_month(inputs)
	if (locale === "pl") return pl_signals_award_build_of_month(inputs)
	if (locale === "pt") return pt_signals_award_build_of_month(inputs)
	if (locale === "ru") return ru_signals_award_build_of_month(inputs)
	if (locale === "sv") return sv_signals_award_build_of_month(inputs)
	if (locale === "tr") return tr_signals_award_build_of_month(inputs)
	if (locale === "zh") return zh_signals_award_build_of_month(inputs)
	if (locale === "ja") return ja_signals_award_build_of_month(inputs)
	return en_signals_award_build_of_month(inputs)
});
