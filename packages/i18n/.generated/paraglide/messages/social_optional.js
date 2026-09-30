/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_OptionalInputs */

const en_social_optional = /** @type {(inputs: Social_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(optional)`)
};

const es_social_optional = /** @type {(inputs: Social_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(opcional)`)
};

const de_social_optional = /** @type {(inputs: Social_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(optional)`)
};

const fr_social_optional = /** @type {(inputs: Social_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(facultatif)`)
};

const it_social_optional = /** @type {(inputs: Social_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(facoltativo)`)
};

const nl_social_optional = /** @type {(inputs: Social_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(optioneel)`)
};

const pl_social_optional = /** @type {(inputs: Social_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(opcjonalnie)`)
};

const pt_social_optional = /** @type {(inputs: Social_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(opcional)`)
};

const ru_social_optional = /** @type {(inputs: Social_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(необязательно)`)
};

const sv_social_optional = /** @type {(inputs: Social_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(valfritt)`)
};

const tr_social_optional = /** @type {(inputs: Social_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`(isteğe bağlı)`)
};

const zh_social_optional = /** @type {(inputs: Social_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`（可选）`)
};

const ja_social_optional = /** @type {(inputs: Social_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`（任意）`)
};

/**
* | output |
* | --- |
* | "(optional)" |
*
* @param {Social_OptionalInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_optional = /** @type {((inputs?: Social_OptionalInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_OptionalInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_optional(inputs)
	if (locale === "de") return de_social_optional(inputs)
	if (locale === "fr") return fr_social_optional(inputs)
	if (locale === "it") return it_social_optional(inputs)
	if (locale === "nl") return nl_social_optional(inputs)
	if (locale === "pl") return pl_social_optional(inputs)
	if (locale === "pt") return pt_social_optional(inputs)
	if (locale === "ru") return ru_social_optional(inputs)
	if (locale === "sv") return sv_social_optional(inputs)
	if (locale === "tr") return tr_social_optional(inputs)
	if (locale === "zh") return zh_social_optional(inputs)
	if (locale === "ja") return ja_social_optional(inputs)
	return en_social_optional(inputs)
});
