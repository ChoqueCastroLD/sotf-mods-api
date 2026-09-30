/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Number_FullInputs */

const en_settings_number_full = /** @type {(inputs: Settings_Number_FullInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Full`)
};

const es_settings_number_full = /** @type {(inputs: Settings_Number_FullInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Completos`)
};

const de_settings_number_full = /** @type {(inputs: Settings_Number_FullInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vollständig`)
};

const fr_settings_number_full = /** @type {(inputs: Settings_Number_FullInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Complets`)
};

const it_settings_number_full = /** @type {(inputs: Settings_Number_FullInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Completi`)
};

const nl_settings_number_full = /** @type {(inputs: Settings_Number_FullInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volledig`)
};

const pl_settings_number_full = /** @type {(inputs: Settings_Number_FullInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pełne`)
};

const pt_settings_number_full = /** @type {(inputs: Settings_Number_FullInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Completos`)
};

const ru_settings_number_full = /** @type {(inputs: Settings_Number_FullInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Полностью`)
};

const sv_settings_number_full = /** @type {(inputs: Settings_Number_FullInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fullständiga`)
};

const tr_settings_number_full = /** @type {(inputs: Settings_Number_FullInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tam`)
};

const zh_settings_number_full = /** @type {(inputs: Settings_Number_FullInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`完整`)
};

const ja_settings_number_full = /** @type {(inputs: Settings_Number_FullInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべて表示`)
};

/**
* | output |
* | --- |
* | "Full" |
*
* @param {Settings_Number_FullInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_number_full = /** @type {((inputs?: Settings_Number_FullInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Number_FullInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_number_full(inputs)
	if (locale === "de") return de_settings_number_full(inputs)
	if (locale === "fr") return fr_settings_number_full(inputs)
	if (locale === "it") return it_settings_number_full(inputs)
	if (locale === "nl") return nl_settings_number_full(inputs)
	if (locale === "pl") return pl_settings_number_full(inputs)
	if (locale === "pt") return pt_settings_number_full(inputs)
	if (locale === "ru") return ru_settings_number_full(inputs)
	if (locale === "sv") return sv_settings_number_full(inputs)
	if (locale === "tr") return tr_settings_number_full(inputs)
	if (locale === "zh") return zh_settings_number_full(inputs)
	if (locale === "ja") return ja_settings_number_full(inputs)
	return en_settings_number_full(inputs)
});
