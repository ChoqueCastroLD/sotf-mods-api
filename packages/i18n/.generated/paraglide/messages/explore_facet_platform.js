/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Facet_PlatformInputs */

const en_explore_facet_platform = /** @type {(inputs: Explore_Facet_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Platform`)
};

const es_explore_facet_platform = /** @type {(inputs: Explore_Facet_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plataforma`)
};

const de_explore_facet_platform = /** @type {(inputs: Explore_Facet_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plattform`)
};

const fr_explore_facet_platform = /** @type {(inputs: Explore_Facet_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plateforme`)
};

const it_explore_facet_platform = /** @type {(inputs: Explore_Facet_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Piattaforma`)
};

const nl_explore_facet_platform = /** @type {(inputs: Explore_Facet_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Platform`)
};

const pl_explore_facet_platform = /** @type {(inputs: Explore_Facet_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Platforma`)
};

const pt_explore_facet_platform = /** @type {(inputs: Explore_Facet_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plataforma`)
};

const ru_explore_facet_platform = /** @type {(inputs: Explore_Facet_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Платформа`)
};

const sv_explore_facet_platform = /** @type {(inputs: Explore_Facet_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plattform`)
};

const tr_explore_facet_platform = /** @type {(inputs: Explore_Facet_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Platform`)
};

const zh_explore_facet_platform = /** @type {(inputs: Explore_Facet_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`平台`)
};

const ja_explore_facet_platform = /** @type {(inputs: Explore_Facet_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プラットフォーム`)
};

/**
* | output |
* | --- |
* | "Platform" |
*
* @param {Explore_Facet_PlatformInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_facet_platform = /** @type {((inputs?: Explore_Facet_PlatformInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Facet_PlatformInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_facet_platform(inputs)
	if (locale === "de") return de_explore_facet_platform(inputs)
	if (locale === "fr") return fr_explore_facet_platform(inputs)
	if (locale === "it") return it_explore_facet_platform(inputs)
	if (locale === "nl") return nl_explore_facet_platform(inputs)
	if (locale === "pl") return pl_explore_facet_platform(inputs)
	if (locale === "pt") return pt_explore_facet_platform(inputs)
	if (locale === "ru") return ru_explore_facet_platform(inputs)
	if (locale === "sv") return sv_explore_facet_platform(inputs)
	if (locale === "tr") return tr_explore_facet_platform(inputs)
	if (locale === "zh") return zh_explore_facet_platform(inputs)
	if (locale === "ja") return ja_explore_facet_platform(inputs)
	return en_explore_facet_platform(inputs)
});
