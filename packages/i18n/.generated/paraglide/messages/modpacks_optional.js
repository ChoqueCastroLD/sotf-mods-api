/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_OptionalInputs */

const en_modpacks_optional = /** @type {(inputs: Modpacks_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`optional`)
};

const es_modpacks_optional = /** @type {(inputs: Modpacks_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`opcional`)
};

const de_modpacks_optional = /** @type {(inputs: Modpacks_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`optional`)
};

const fr_modpacks_optional = /** @type {(inputs: Modpacks_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`facultatif`)
};

const it_modpacks_optional = /** @type {(inputs: Modpacks_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`facoltativo`)
};

const nl_modpacks_optional = /** @type {(inputs: Modpacks_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`optioneel`)
};

const pl_modpacks_optional = /** @type {(inputs: Modpacks_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`opcjonalnie`)
};

const pt_modpacks_optional = /** @type {(inputs: Modpacks_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`opcional`)
};

const ru_modpacks_optional = /** @type {(inputs: Modpacks_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`необязательно`)
};

const sv_modpacks_optional = /** @type {(inputs: Modpacks_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`valfritt`)
};

const tr_modpacks_optional = /** @type {(inputs: Modpacks_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`isteğe bağlı`)
};

const zh_modpacks_optional = /** @type {(inputs: Modpacks_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`可选`)
};

const ja_modpacks_optional = /** @type {(inputs: Modpacks_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`任意`)
};

/**
* | output |
* | --- |
* | "optional" |
*
* @param {Modpacks_OptionalInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_optional = /** @type {((inputs?: Modpacks_OptionalInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_OptionalInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_optional(inputs)
	if (locale === "de") return de_modpacks_optional(inputs)
	if (locale === "fr") return fr_modpacks_optional(inputs)
	if (locale === "it") return it_modpacks_optional(inputs)
	if (locale === "nl") return nl_modpacks_optional(inputs)
	if (locale === "pl") return pl_modpacks_optional(inputs)
	if (locale === "pt") return pt_modpacks_optional(inputs)
	if (locale === "ru") return ru_modpacks_optional(inputs)
	if (locale === "sv") return sv_modpacks_optional(inputs)
	if (locale === "tr") return tr_modpacks_optional(inputs)
	if (locale === "zh") return zh_modpacks_optional(inputs)
	if (locale === "ja") return ja_modpacks_optional(inputs)
	return en_modpacks_optional(inputs)
});
