/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Number_FormatInputs */

const en_settings_number_format = /** @type {(inputs: Settings_Number_FormatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Big numbers`)
};

const es_settings_number_format = /** @type {(inputs: Settings_Number_FormatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Números grandes`)
};

const de_settings_number_format = /** @type {(inputs: Settings_Number_FormatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Große Zahlen`)
};

const fr_settings_number_format = /** @type {(inputs: Settings_Number_FormatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grands nombres`)
};

const it_settings_number_format = /** @type {(inputs: Settings_Number_FormatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Numeri grandi`)
};

const nl_settings_number_format = /** @type {(inputs: Settings_Number_FormatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grote getallen`)
};

const pl_settings_number_format = /** @type {(inputs: Settings_Number_FormatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Duże liczby`)
};

const pt_settings_number_format = /** @type {(inputs: Settings_Number_FormatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Números grandes`)
};

const ru_settings_number_format = /** @type {(inputs: Settings_Number_FormatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Большие числа`)
};

const sv_settings_number_format = /** @type {(inputs: Settings_Number_FormatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stora tal`)
};

const tr_settings_number_format = /** @type {(inputs: Settings_Number_FormatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Büyük sayılar`)
};

const zh_settings_number_format = /** @type {(inputs: Settings_Number_FormatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`大数字`)
};

const ja_settings_number_format = /** @type {(inputs: Settings_Number_FormatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`大きな数値`)
};

/**
* | output |
* | --- |
* | "Big numbers" |
*
* @param {Settings_Number_FormatInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_number_format = /** @type {((inputs?: Settings_Number_FormatInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Number_FormatInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_number_format(inputs)
	if (locale === "de") return de_settings_number_format(inputs)
	if (locale === "fr") return fr_settings_number_format(inputs)
	if (locale === "it") return it_settings_number_format(inputs)
	if (locale === "nl") return nl_settings_number_format(inputs)
	if (locale === "pl") return pl_settings_number_format(inputs)
	if (locale === "pt") return pt_settings_number_format(inputs)
	if (locale === "ru") return ru_settings_number_format(inputs)
	if (locale === "sv") return sv_settings_number_format(inputs)
	if (locale === "tr") return tr_settings_number_format(inputs)
	if (locale === "zh") return zh_settings_number_format(inputs)
	if (locale === "ja") return ja_settings_number_format(inputs)
	return en_settings_number_format(inputs)
});
