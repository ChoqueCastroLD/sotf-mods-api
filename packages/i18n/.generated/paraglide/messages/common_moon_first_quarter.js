/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Moon_First_QuarterInputs */

const en_common_moon_first_quarter = /** @type {(inputs: Common_Moon_First_QuarterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`First quarter`)
};

const es_common_moon_first_quarter = /** @type {(inputs: Common_Moon_First_QuarterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cuarto creciente`)
};

const de_common_moon_first_quarter = /** @type {(inputs: Common_Moon_First_QuarterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erstes Viertel`)
};

const fr_common_moon_first_quarter = /** @type {(inputs: Common_Moon_First_QuarterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Premier quartier`)
};

const it_common_moon_first_quarter = /** @type {(inputs: Common_Moon_First_QuarterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Primo quarto`)
};

const nl_common_moon_first_quarter = /** @type {(inputs: Common_Moon_First_QuarterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eerste kwartier`)
};

const pl_common_moon_first_quarter = /** @type {(inputs: Common_Moon_First_QuarterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pierwsza kwadra`)
};

const pt_common_moon_first_quarter = /** @type {(inputs: Common_Moon_First_QuarterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quarto crescente`)
};

const ru_common_moon_first_quarter = /** @type {(inputs: Common_Moon_First_QuarterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Первая четверть`)
};

const sv_common_moon_first_quarter = /** @type {(inputs: Common_Moon_First_QuarterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Första kvarteret`)
};

const tr_common_moon_first_quarter = /** @type {(inputs: Common_Moon_First_QuarterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İlk dördün`)
};

const zh_common_moon_first_quarter = /** @type {(inputs: Common_Moon_First_QuarterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上弦月`)
};

const ja_common_moon_first_quarter = /** @type {(inputs: Common_Moon_First_QuarterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上弦の月`)
};

/**
* | output |
* | --- |
* | "First quarter" |
*
* @param {Common_Moon_First_QuarterInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_moon_first_quarter = /** @type {((inputs?: Common_Moon_First_QuarterInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Moon_First_QuarterInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_moon_first_quarter(inputs)
	if (locale === "de") return de_common_moon_first_quarter(inputs)
	if (locale === "fr") return fr_common_moon_first_quarter(inputs)
	if (locale === "it") return it_common_moon_first_quarter(inputs)
	if (locale === "nl") return nl_common_moon_first_quarter(inputs)
	if (locale === "pl") return pl_common_moon_first_quarter(inputs)
	if (locale === "pt") return pt_common_moon_first_quarter(inputs)
	if (locale === "ru") return ru_common_moon_first_quarter(inputs)
	if (locale === "sv") return sv_common_moon_first_quarter(inputs)
	if (locale === "tr") return tr_common_moon_first_quarter(inputs)
	if (locale === "zh") return zh_common_moon_first_quarter(inputs)
	if (locale === "ja") return ja_common_moon_first_quarter(inputs)
	return en_common_moon_first_quarter(inputs)
});
