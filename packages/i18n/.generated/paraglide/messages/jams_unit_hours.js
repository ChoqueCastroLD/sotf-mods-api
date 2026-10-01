/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Unit_HoursInputs */

const en_jams_unit_hours = /** @type {(inputs: Jams_Unit_HoursInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hours`)
};

const es_jams_unit_hours = /** @type {(inputs: Jams_Unit_HoursInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Horas`)
};

const de_jams_unit_hours = /** @type {(inputs: Jams_Unit_HoursInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Std.`)
};

const fr_jams_unit_hours = /** @type {(inputs: Jams_Unit_HoursInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Heures`)
};

const it_jams_unit_hours = /** @type {(inputs: Jams_Unit_HoursInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ore`)
};

const nl_jams_unit_hours = /** @type {(inputs: Jams_Unit_HoursInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uren`)
};

const pl_jams_unit_hours = /** @type {(inputs: Jams_Unit_HoursInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Godz.`)
};

const pt_jams_unit_hours = /** @type {(inputs: Jams_Unit_HoursInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Horas`)
};

const ru_jams_unit_hours = /** @type {(inputs: Jams_Unit_HoursInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Часы`)
};

const sv_jams_unit_hours = /** @type {(inputs: Jams_Unit_HoursInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Timmar`)
};

const tr_jams_unit_hours = /** @type {(inputs: Jams_Unit_HoursInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saat`)
};

const zh_jams_unit_hours = /** @type {(inputs: Jams_Unit_HoursInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`时`)
};

const ja_jams_unit_hours = /** @type {(inputs: Jams_Unit_HoursInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`時間`)
};

/**
* | output |
* | --- |
* | "Hours" |
*
* @param {Jams_Unit_HoursInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_unit_hours = /** @type {((inputs?: Jams_Unit_HoursInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Unit_HoursInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_unit_hours(inputs)
	if (locale === "de") return de_jams_unit_hours(inputs)
	if (locale === "fr") return fr_jams_unit_hours(inputs)
	if (locale === "it") return it_jams_unit_hours(inputs)
	if (locale === "nl") return nl_jams_unit_hours(inputs)
	if (locale === "pl") return pl_jams_unit_hours(inputs)
	if (locale === "pt") return pt_jams_unit_hours(inputs)
	if (locale === "ru") return ru_jams_unit_hours(inputs)
	if (locale === "sv") return sv_jams_unit_hours(inputs)
	if (locale === "tr") return tr_jams_unit_hours(inputs)
	if (locale === "zh") return zh_jams_unit_hours(inputs)
	if (locale === "ja") return ja_jams_unit_hours(inputs)
	return en_jams_unit_hours(inputs)
});
