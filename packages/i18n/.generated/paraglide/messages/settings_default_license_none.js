/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Default_License_NoneInputs */

const en_settings_default_license_none = /** @type {(inputs: Settings_Default_License_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ask me every time`)
};

const es_settings_default_license_none = /** @type {(inputs: Settings_Default_License_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preguntarme siempre`)
};

const de_settings_default_license_none = /** @type {(inputs: Settings_Default_License_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jedes Mal fragen`)
};

const fr_settings_default_license_none = /** @type {(inputs: Settings_Default_License_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Me demander à chaque fois`)
};

const it_settings_default_license_none = /** @type {(inputs: Settings_Default_License_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chiedimelo ogni volta`)
};

const nl_settings_default_license_none = /** @type {(inputs: Settings_Default_License_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elke keer vragen`)
};

const pl_settings_default_license_none = /** @type {(inputs: Settings_Default_License_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pytaj za każdym razem`)
};

const pt_settings_default_license_none = /** @type {(inputs: Settings_Default_License_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Perguntar sempre`)
};

const ru_settings_default_license_none = /** @type {(inputs: Settings_Default_License_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Спрашивать каждый раз`)
};

const sv_settings_default_license_none = /** @type {(inputs: Settings_Default_License_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fråga varje gång`)
};

const tr_settings_default_license_none = /** @type {(inputs: Settings_Default_License_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Her seferinde sor`)
};

const zh_settings_default_license_none = /** @type {(inputs: Settings_Default_License_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`每次都询问我`)
};

const ja_settings_default_license_none = /** @type {(inputs: Settings_Default_License_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`毎回確認する`)
};

/**
* | output |
* | --- |
* | "Ask me every time" |
*
* @param {Settings_Default_License_NoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_default_license_none = /** @type {((inputs?: Settings_Default_License_NoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Default_License_NoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_default_license_none(inputs)
	if (locale === "de") return de_settings_default_license_none(inputs)
	if (locale === "fr") return fr_settings_default_license_none(inputs)
	if (locale === "it") return it_settings_default_license_none(inputs)
	if (locale === "nl") return nl_settings_default_license_none(inputs)
	if (locale === "pl") return pl_settings_default_license_none(inputs)
	if (locale === "pt") return pt_settings_default_license_none(inputs)
	if (locale === "ru") return ru_settings_default_license_none(inputs)
	if (locale === "sv") return sv_settings_default_license_none(inputs)
	if (locale === "tr") return tr_settings_default_license_none(inputs)
	if (locale === "zh") return zh_settings_default_license_none(inputs)
	if (locale === "ja") return ja_settings_default_license_none(inputs)
	return en_settings_default_license_none(inputs)
});
