/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_By_PrefixInputs */

const en_modpacks_by_prefix = /** @type {(inputs: Modpacks_By_PrefixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`by`)
};

const es_modpacks_by_prefix = /** @type {(inputs: Modpacks_By_PrefixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`de`)
};

const de_modpacks_by_prefix = /** @type {(inputs: Modpacks_By_PrefixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`von`)
};

const fr_modpacks_by_prefix = /** @type {(inputs: Modpacks_By_PrefixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`par`)
};

const it_modpacks_by_prefix = /** @type {(inputs: Modpacks_By_PrefixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`di`)
};

const nl_modpacks_by_prefix = /** @type {(inputs: Modpacks_By_PrefixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`door`)
};

const pl_modpacks_by_prefix = /** @type {(inputs: Modpacks_By_PrefixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`autor:`)
};

const pt_modpacks_by_prefix = /** @type {(inputs: Modpacks_By_PrefixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`por`)
};

const ru_modpacks_by_prefix = /** @type {(inputs: Modpacks_By_PrefixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`автор:`)
};

const sv_modpacks_by_prefix = /** @type {(inputs: Modpacks_By_PrefixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`av`)
};

const tr_modpacks_by_prefix = /** @type {(inputs: Modpacks_By_PrefixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`yapan:`)
};

const zh_modpacks_by_prefix = /** @type {(inputs: Modpacks_By_PrefixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作者：`)
};

const ja_modpacks_by_prefix = /** @type {(inputs: Modpacks_By_PrefixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作者:`)
};

/**
* | output |
* | --- |
* | "by" |
*
* @param {Modpacks_By_PrefixInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_by_prefix = /** @type {((inputs?: Modpacks_By_PrefixInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_By_PrefixInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_by_prefix(inputs)
	if (locale === "de") return de_modpacks_by_prefix(inputs)
	if (locale === "fr") return fr_modpacks_by_prefix(inputs)
	if (locale === "it") return it_modpacks_by_prefix(inputs)
	if (locale === "nl") return nl_modpacks_by_prefix(inputs)
	if (locale === "pl") return pl_modpacks_by_prefix(inputs)
	if (locale === "pt") return pt_modpacks_by_prefix(inputs)
	if (locale === "ru") return ru_modpacks_by_prefix(inputs)
	if (locale === "sv") return sv_modpacks_by_prefix(inputs)
	if (locale === "tr") return tr_modpacks_by_prefix(inputs)
	if (locale === "zh") return zh_modpacks_by_prefix(inputs)
	if (locale === "ja") return ja_modpacks_by_prefix(inputs)
	return en_modpacks_by_prefix(inputs)
});
