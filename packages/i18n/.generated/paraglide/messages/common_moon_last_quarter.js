/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Moon_Last_QuarterInputs */

const en_common_moon_last_quarter = /** @type {(inputs: Common_Moon_Last_QuarterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Last quarter`)
};

const es_common_moon_last_quarter = /** @type {(inputs: Common_Moon_Last_QuarterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cuarto menguante`)
};

const de_common_moon_last_quarter = /** @type {(inputs: Common_Moon_Last_QuarterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Letztes Viertel`)
};

const fr_common_moon_last_quarter = /** @type {(inputs: Common_Moon_Last_QuarterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dernier quartier`)
};

const it_common_moon_last_quarter = /** @type {(inputs: Common_Moon_Last_QuarterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ultimo quarto`)
};

const nl_common_moon_last_quarter = /** @type {(inputs: Common_Moon_Last_QuarterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Laatste kwartier`)
};

const pl_common_moon_last_quarter = /** @type {(inputs: Common_Moon_Last_QuarterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ostatnia kwadra`)
};

const pt_common_moon_last_quarter = /** @type {(inputs: Common_Moon_Last_QuarterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quarto minguante`)
};

const ru_common_moon_last_quarter = /** @type {(inputs: Common_Moon_Last_QuarterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Последняя четверть`)
};

const sv_common_moon_last_quarter = /** @type {(inputs: Common_Moon_Last_QuarterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sista kvarteret`)
};

const tr_common_moon_last_quarter = /** @type {(inputs: Common_Moon_Last_QuarterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Son dördün`)
};

const zh_common_moon_last_quarter = /** @type {(inputs: Common_Moon_Last_QuarterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下弦月`)
};

const ja_common_moon_last_quarter = /** @type {(inputs: Common_Moon_Last_QuarterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下弦の月`)
};

/**
* | output |
* | --- |
* | "Last quarter" |
*
* @param {Common_Moon_Last_QuarterInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_moon_last_quarter = /** @type {((inputs?: Common_Moon_Last_QuarterInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Moon_Last_QuarterInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_moon_last_quarter(inputs)
	if (locale === "de") return de_common_moon_last_quarter(inputs)
	if (locale === "fr") return fr_common_moon_last_quarter(inputs)
	if (locale === "it") return it_common_moon_last_quarter(inputs)
	if (locale === "nl") return nl_common_moon_last_quarter(inputs)
	if (locale === "pl") return pl_common_moon_last_quarter(inputs)
	if (locale === "pt") return pt_common_moon_last_quarter(inputs)
	if (locale === "ru") return ru_common_moon_last_quarter(inputs)
	if (locale === "sv") return sv_common_moon_last_quarter(inputs)
	if (locale === "tr") return tr_common_moon_last_quarter(inputs)
	if (locale === "zh") return zh_common_moon_last_quarter(inputs)
	if (locale === "ja") return ja_common_moon_last_quarter(inputs)
	return en_common_moon_last_quarter(inputs)
});
