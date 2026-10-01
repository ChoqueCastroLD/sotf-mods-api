/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Unit_MinutesInputs */

const en_jams_unit_minutes = /** @type {(inputs: Jams_Unit_MinutesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Min`)
};

const es_jams_unit_minutes = /** @type {(inputs: Jams_Unit_MinutesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Min`)
};

const de_jams_unit_minutes = /** @type {(inputs: Jams_Unit_MinutesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Min.`)
};

const fr_jams_unit_minutes = /** @type {(inputs: Jams_Unit_MinutesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Min`)
};

const it_jams_unit_minutes = /** @type {(inputs: Jams_Unit_MinutesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Min`)
};

const nl_jams_unit_minutes = /** @type {(inputs: Jams_Unit_MinutesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Min`)
};

const pl_jams_unit_minutes = /** @type {(inputs: Jams_Unit_MinutesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Min`)
};

const pt_jams_unit_minutes = /** @type {(inputs: Jams_Unit_MinutesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Min`)
};

const ru_jams_unit_minutes = /** @type {(inputs: Jams_Unit_MinutesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Мин`)
};

const sv_jams_unit_minutes = /** @type {(inputs: Jams_Unit_MinutesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Min`)
};

const tr_jams_unit_minutes = /** @type {(inputs: Jams_Unit_MinutesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dk`)
};

const zh_jams_unit_minutes = /** @type {(inputs: Jams_Unit_MinutesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`分`)
};

const ja_jams_unit_minutes = /** @type {(inputs: Jams_Unit_MinutesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`分`)
};

/**
* | output |
* | --- |
* | "Min" |
*
* @param {Jams_Unit_MinutesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_unit_minutes = /** @type {((inputs?: Jams_Unit_MinutesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Unit_MinutesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_unit_minutes(inputs)
	if (locale === "de") return de_jams_unit_minutes(inputs)
	if (locale === "fr") return fr_jams_unit_minutes(inputs)
	if (locale === "it") return it_jams_unit_minutes(inputs)
	if (locale === "nl") return nl_jams_unit_minutes(inputs)
	if (locale === "pl") return pl_jams_unit_minutes(inputs)
	if (locale === "pt") return pt_jams_unit_minutes(inputs)
	if (locale === "ru") return ru_jams_unit_minutes(inputs)
	if (locale === "sv") return sv_jams_unit_minutes(inputs)
	if (locale === "tr") return tr_jams_unit_minutes(inputs)
	if (locale === "zh") return zh_jams_unit_minutes(inputs)
	if (locale === "ja") return ja_jams_unit_minutes(inputs)
	return en_jams_unit_minutes(inputs)
});
