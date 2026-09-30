/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Field_Name_PlaceholderInputs */

const en_kits_field_name_placeholder = /** @type {(inputs: Kits_Field_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hardcore QoL`)
};

const es_kits_field_name_placeholder = /** @type {(inputs: Kits_Field_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`QoL extremo`)
};

const de_kits_field_name_placeholder = /** @type {(inputs: Kits_Field_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hardcore-QoL`)
};

const fr_kits_field_name_placeholder = /** @type {(inputs: Kits_Field_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`QoL hardcore`)
};

const it_kits_field_name_placeholder = /** @type {(inputs: Kits_Field_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`QoL hardcore`)
};

const nl_kits_field_name_placeholder = /** @type {(inputs: Kits_Field_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hardcore QoL`)
};

const pl_kits_field_name_placeholder = /** @type {(inputs: Kits_Field_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hardkorowe QoL`)
};

const pt_kits_field_name_placeholder = /** @type {(inputs: Kits_Field_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`QoL hardcore`)
};

const ru_kits_field_name_placeholder = /** @type {(inputs: Kits_Field_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Хардкорный QoL`)
};

const sv_kits_field_name_placeholder = /** @type {(inputs: Kits_Field_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hardcore-QoL`)
};

const tr_kits_field_name_placeholder = /** @type {(inputs: Kits_Field_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zorlu QoL`)
};

const zh_kits_field_name_placeholder = /** @type {(inputs: Kits_Field_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`硬核便利包`)
};

const ja_kits_field_name_placeholder = /** @type {(inputs: Kits_Field_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ハードコア快適化`)
};

/**
* | output |
* | --- |
* | "Hardcore QoL" |
*
* @param {Kits_Field_Name_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_field_name_placeholder = /** @type {((inputs?: Kits_Field_Name_PlaceholderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Field_Name_PlaceholderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_field_name_placeholder(inputs)
	if (locale === "de") return de_kits_field_name_placeholder(inputs)
	if (locale === "fr") return fr_kits_field_name_placeholder(inputs)
	if (locale === "it") return it_kits_field_name_placeholder(inputs)
	if (locale === "nl") return nl_kits_field_name_placeholder(inputs)
	if (locale === "pl") return pl_kits_field_name_placeholder(inputs)
	if (locale === "pt") return pt_kits_field_name_placeholder(inputs)
	if (locale === "ru") return ru_kits_field_name_placeholder(inputs)
	if (locale === "sv") return sv_kits_field_name_placeholder(inputs)
	if (locale === "tr") return tr_kits_field_name_placeholder(inputs)
	if (locale === "zh") return zh_kits_field_name_placeholder(inputs)
	if (locale === "ja") return ja_kits_field_name_placeholder(inputs)
	return en_kits_field_name_placeholder(inputs)
});
