/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Language_LabelInputs */

const en_common_language_label = /** @type {(inputs: Common_Language_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Language`)
};

const es_common_language_label = /** @type {(inputs: Common_Language_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Idioma`)
};

const de_common_language_label = /** @type {(inputs: Common_Language_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sprache`)
};

const fr_common_language_label = /** @type {(inputs: Common_Language_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Langue`)
};

const it_common_language_label = /** @type {(inputs: Common_Language_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lingua`)
};

const nl_common_language_label = /** @type {(inputs: Common_Language_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taal`)
};

const pl_common_language_label = /** @type {(inputs: Common_Language_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Język`)
};

const pt_common_language_label = /** @type {(inputs: Common_Language_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Idioma`)
};

const ru_common_language_label = /** @type {(inputs: Common_Language_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Язык`)
};

const sv_common_language_label = /** @type {(inputs: Common_Language_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Språk`)
};

const tr_common_language_label = /** @type {(inputs: Common_Language_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dil`)
};

const zh_common_language_label = /** @type {(inputs: Common_Language_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`语言`)
};

const ja_common_language_label = /** @type {(inputs: Common_Language_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`言語`)
};

/**
* | output |
* | --- |
* | "Language" |
*
* @param {Common_Language_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_language_label = /** @type {((inputs?: Common_Language_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Language_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_language_label(inputs)
	if (locale === "de") return de_common_language_label(inputs)
	if (locale === "fr") return fr_common_language_label(inputs)
	if (locale === "it") return it_common_language_label(inputs)
	if (locale === "nl") return nl_common_language_label(inputs)
	if (locale === "pl") return pl_common_language_label(inputs)
	if (locale === "pt") return pt_common_language_label(inputs)
	if (locale === "ru") return ru_common_language_label(inputs)
	if (locale === "sv") return sv_common_language_label(inputs)
	if (locale === "tr") return tr_common_language_label(inputs)
	if (locale === "zh") return zh_common_language_label(inputs)
	if (locale === "ja") return ja_common_language_label(inputs)
	return en_common_language_label(inputs)
});
