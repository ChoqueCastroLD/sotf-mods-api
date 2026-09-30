/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Language_LabelInputs */

const en_settings_language_label = /** @type {(inputs: Settings_Language_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Language`)
};

const es_settings_language_label = /** @type {(inputs: Settings_Language_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Idioma`)
};

const de_settings_language_label = /** @type {(inputs: Settings_Language_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sprache`)
};

const fr_settings_language_label = /** @type {(inputs: Settings_Language_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Langue`)
};

const it_settings_language_label = /** @type {(inputs: Settings_Language_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lingua`)
};

const nl_settings_language_label = /** @type {(inputs: Settings_Language_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taal`)
};

const pl_settings_language_label = /** @type {(inputs: Settings_Language_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Język`)
};

const pt_settings_language_label = /** @type {(inputs: Settings_Language_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Idioma`)
};

const ru_settings_language_label = /** @type {(inputs: Settings_Language_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Язык`)
};

const sv_settings_language_label = /** @type {(inputs: Settings_Language_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Språk`)
};

const tr_settings_language_label = /** @type {(inputs: Settings_Language_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dil`)
};

const zh_settings_language_label = /** @type {(inputs: Settings_Language_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`语言`)
};

const ja_settings_language_label = /** @type {(inputs: Settings_Language_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`言語`)
};

/**
* | output |
* | --- |
* | "Language" |
*
* @param {Settings_Language_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_language_label = /** @type {((inputs?: Settings_Language_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Language_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_language_label(inputs)
	if (locale === "de") return de_settings_language_label(inputs)
	if (locale === "fr") return fr_settings_language_label(inputs)
	if (locale === "it") return it_settings_language_label(inputs)
	if (locale === "nl") return nl_settings_language_label(inputs)
	if (locale === "pl") return pl_settings_language_label(inputs)
	if (locale === "pt") return pt_settings_language_label(inputs)
	if (locale === "ru") return ru_settings_language_label(inputs)
	if (locale === "sv") return sv_settings_language_label(inputs)
	if (locale === "tr") return tr_settings_language_label(inputs)
	if (locale === "zh") return zh_settings_language_label(inputs)
	if (locale === "ja") return ja_settings_language_label(inputs)
	return en_settings_language_label(inputs)
});
