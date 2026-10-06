/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Catalog_NsfwInputs */

const en_explore_catalog_nsfw = /** @type {(inputs: Explore_Catalog_NsfwInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`NSFW`)
};

const es_explore_catalog_nsfw = /** @type {(inputs: Explore_Catalog_NsfwInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`NSFW`)
};

const de_explore_catalog_nsfw = /** @type {(inputs: Explore_Catalog_NsfwInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`NSFW`)
};

const fr_explore_catalog_nsfw = /** @type {(inputs: Explore_Catalog_NsfwInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`NSFW`)
};

const it_explore_catalog_nsfw = /** @type {(inputs: Explore_Catalog_NsfwInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`NSFW`)
};

const nl_explore_catalog_nsfw = /** @type {(inputs: Explore_Catalog_NsfwInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`NSFW`)
};

const pl_explore_catalog_nsfw = /** @type {(inputs: Explore_Catalog_NsfwInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`NSFW`)
};

const pt_explore_catalog_nsfw = /** @type {(inputs: Explore_Catalog_NsfwInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`NSFW`)
};

const ru_explore_catalog_nsfw = /** @type {(inputs: Explore_Catalog_NsfwInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`NSFW`)
};

const sv_explore_catalog_nsfw = /** @type {(inputs: Explore_Catalog_NsfwInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`NSFW`)
};

const tr_explore_catalog_nsfw = /** @type {(inputs: Explore_Catalog_NsfwInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`NSFW`)
};

const zh_explore_catalog_nsfw = /** @type {(inputs: Explore_Catalog_NsfwInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`NSFW`)
};

const ja_explore_catalog_nsfw = /** @type {(inputs: Explore_Catalog_NsfwInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`NSFW`)
};

/**
* | output |
* | --- |
* | "NSFW" |
*
* @param {Explore_Catalog_NsfwInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_catalog_nsfw = /** @type {((inputs?: Explore_Catalog_NsfwInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Catalog_NsfwInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_catalog_nsfw(inputs)
	if (locale === "de") return de_explore_catalog_nsfw(inputs)
	if (locale === "fr") return fr_explore_catalog_nsfw(inputs)
	if (locale === "it") return it_explore_catalog_nsfw(inputs)
	if (locale === "nl") return nl_explore_catalog_nsfw(inputs)
	if (locale === "pl") return pl_explore_catalog_nsfw(inputs)
	if (locale === "pt") return pt_explore_catalog_nsfw(inputs)
	if (locale === "ru") return ru_explore_catalog_nsfw(inputs)
	if (locale === "sv") return sv_explore_catalog_nsfw(inputs)
	if (locale === "tr") return tr_explore_catalog_nsfw(inputs)
	if (locale === "zh") return zh_explore_catalog_nsfw(inputs)
	if (locale === "ja") return ja_explore_catalog_nsfw(inputs)
	return en_explore_catalog_nsfw(inputs)
});
