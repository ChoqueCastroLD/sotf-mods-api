/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_LanguageInputs */

const en_ui_language = /** @type {(inputs: Ui_LanguageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Language`)
};

const es_ui_language = /** @type {(inputs: Ui_LanguageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Idioma`)
};

const de_ui_language = /** @type {(inputs: Ui_LanguageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sprache`)
};

const fr_ui_language = /** @type {(inputs: Ui_LanguageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Langue`)
};

const it_ui_language = /** @type {(inputs: Ui_LanguageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lingua`)
};

const nl_ui_language = /** @type {(inputs: Ui_LanguageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taal`)
};

const pl_ui_language = /** @type {(inputs: Ui_LanguageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Język`)
};

const pt_ui_language = /** @type {(inputs: Ui_LanguageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Idioma`)
};

const ru_ui_language = /** @type {(inputs: Ui_LanguageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Язык`)
};

const sv_ui_language = /** @type {(inputs: Ui_LanguageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Språk`)
};

const tr_ui_language = /** @type {(inputs: Ui_LanguageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dil`)
};

const zh_ui_language = /** @type {(inputs: Ui_LanguageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`语言`)
};

const ja_ui_language = /** @type {(inputs: Ui_LanguageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`言語`)
};

/**
* | output |
* | --- |
* | "Language" |
*
* @param {Ui_LanguageInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_language = /** @type {((inputs?: Ui_LanguageInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_LanguageInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_language(inputs)
	if (locale === "de") return de_ui_language(inputs)
	if (locale === "fr") return fr_ui_language(inputs)
	if (locale === "it") return it_ui_language(inputs)
	if (locale === "nl") return nl_ui_language(inputs)
	if (locale === "pl") return pl_ui_language(inputs)
	if (locale === "pt") return pt_ui_language(inputs)
	if (locale === "ru") return ru_ui_language(inputs)
	if (locale === "sv") return sv_ui_language(inputs)
	if (locale === "tr") return tr_ui_language(inputs)
	if (locale === "zh") return zh_ui_language(inputs)
	if (locale === "ja") return ja_ui_language(inputs)
	return en_ui_language(inputs)
});
