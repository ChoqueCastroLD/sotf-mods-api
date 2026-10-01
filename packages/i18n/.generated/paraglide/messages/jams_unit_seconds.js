/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Unit_SecondsInputs */

const en_jams_unit_seconds = /** @type {(inputs: Jams_Unit_SecondsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sec`)
};

const es_jams_unit_seconds = /** @type {(inputs: Jams_Unit_SecondsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seg`)
};

const de_jams_unit_seconds = /** @type {(inputs: Jams_Unit_SecondsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sek.`)
};

const fr_jams_unit_seconds = /** @type {(inputs: Jams_Unit_SecondsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sec`)
};

const it_jams_unit_seconds = /** @type {(inputs: Jams_Unit_SecondsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sec`)
};

const nl_jams_unit_seconds = /** @type {(inputs: Jams_Unit_SecondsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sec`)
};

const pl_jams_unit_seconds = /** @type {(inputs: Jams_Unit_SecondsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sek.`)
};

const pt_jams_unit_seconds = /** @type {(inputs: Jams_Unit_SecondsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seg`)
};

const ru_jams_unit_seconds = /** @type {(inputs: Jams_Unit_SecondsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сек`)
};

const sv_jams_unit_seconds = /** @type {(inputs: Jams_Unit_SecondsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sek`)
};

const tr_jams_unit_seconds = /** @type {(inputs: Jams_Unit_SecondsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sn`)
};

const zh_jams_unit_seconds = /** @type {(inputs: Jams_Unit_SecondsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`秒`)
};

const ja_jams_unit_seconds = /** @type {(inputs: Jams_Unit_SecondsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`秒`)
};

/**
* | output |
* | --- |
* | "Sec" |
*
* @param {Jams_Unit_SecondsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_unit_seconds = /** @type {((inputs?: Jams_Unit_SecondsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Unit_SecondsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_unit_seconds(inputs)
	if (locale === "de") return de_jams_unit_seconds(inputs)
	if (locale === "fr") return fr_jams_unit_seconds(inputs)
	if (locale === "it") return it_jams_unit_seconds(inputs)
	if (locale === "nl") return nl_jams_unit_seconds(inputs)
	if (locale === "pl") return pl_jams_unit_seconds(inputs)
	if (locale === "pt") return pt_jams_unit_seconds(inputs)
	if (locale === "ru") return ru_jams_unit_seconds(inputs)
	if (locale === "sv") return sv_jams_unit_seconds(inputs)
	if (locale === "tr") return tr_jams_unit_seconds(inputs)
	if (locale === "zh") return zh_jams_unit_seconds(inputs)
	if (locale === "ja") return ja_jams_unit_seconds(inputs)
	return en_jams_unit_seconds(inputs)
});
