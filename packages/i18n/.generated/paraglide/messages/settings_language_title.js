/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Language_TitleInputs */

const en_settings_language_title = /** @type {(inputs: Settings_Language_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Language and numbers`)
};

const es_settings_language_title = /** @type {(inputs: Settings_Language_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Idioma y números`)
};

const de_settings_language_title = /** @type {(inputs: Settings_Language_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sprache und Zahlen`)
};

const fr_settings_language_title = /** @type {(inputs: Settings_Language_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Langue et nombres`)
};

const it_settings_language_title = /** @type {(inputs: Settings_Language_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lingua e numeri`)
};

const nl_settings_language_title = /** @type {(inputs: Settings_Language_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taal en getallen`)
};

const pl_settings_language_title = /** @type {(inputs: Settings_Language_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Język i liczby`)
};

const pt_settings_language_title = /** @type {(inputs: Settings_Language_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Idioma e números`)
};

const ru_settings_language_title = /** @type {(inputs: Settings_Language_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Язык и числа`)
};

const sv_settings_language_title = /** @type {(inputs: Settings_Language_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Språk och siffror`)
};

const tr_settings_language_title = /** @type {(inputs: Settings_Language_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dil ve sayılar`)
};

const zh_settings_language_title = /** @type {(inputs: Settings_Language_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`语言和数字`)
};

const ja_settings_language_title = /** @type {(inputs: Settings_Language_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`言語と数値`)
};

/**
* | output |
* | --- |
* | "Language and numbers" |
*
* @param {Settings_Language_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_language_title = /** @type {((inputs?: Settings_Language_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Language_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_language_title(inputs)
	if (locale === "de") return de_settings_language_title(inputs)
	if (locale === "fr") return fr_settings_language_title(inputs)
	if (locale === "it") return it_settings_language_title(inputs)
	if (locale === "nl") return nl_settings_language_title(inputs)
	if (locale === "pl") return pl_settings_language_title(inputs)
	if (locale === "pt") return pt_settings_language_title(inputs)
	if (locale === "ru") return ru_settings_language_title(inputs)
	if (locale === "sv") return sv_settings_language_title(inputs)
	if (locale === "tr") return tr_settings_language_title(inputs)
	if (locale === "zh") return zh_settings_language_title(inputs)
	if (locale === "ja") return ja_settings_language_title(inputs)
	return en_settings_language_title(inputs)
});
