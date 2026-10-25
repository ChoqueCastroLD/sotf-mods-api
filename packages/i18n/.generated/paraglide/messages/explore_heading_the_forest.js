/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Heading_The_ForestInputs */

const en_explore_heading_the_forest = /** @type {(inputs: Explore_Heading_The_ForestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The Forest Mods`)
};

const es_explore_heading_the_forest = /** @type {(inputs: Explore_Heading_The_ForestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods de The Forest`)
};

const de_explore_heading_the_forest = /** @type {(inputs: Explore_Heading_The_ForestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods für The Forest`)
};

const fr_explore_heading_the_forest = /** @type {(inputs: Explore_Heading_The_ForestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods pour The Forest`)
};

const it_explore_heading_the_forest = /** @type {(inputs: Explore_Heading_The_ForestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod per The Forest`)
};

const nl_explore_heading_the_forest = /** @type {(inputs: Explore_Heading_The_ForestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods voor The Forest`)
};

const pl_explore_heading_the_forest = /** @type {(inputs: Explore_Heading_The_ForestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mody do The Forest`)
};

const pt_explore_heading_the_forest = /** @type {(inputs: Explore_Heading_The_ForestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods de The Forest`)
};

const ru_explore_heading_the_forest = /** @type {(inputs: Explore_Heading_The_ForestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Моды для The Forest`)
};

const sv_explore_heading_the_forest = /** @type {(inputs: Explore_Heading_The_ForestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moddar för The Forest`)
};

const tr_explore_heading_the_forest = /** @type {(inputs: Explore_Heading_The_ForestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The Forest modları`)
};

const zh_explore_heading_the_forest = /** @type {(inputs: Explore_Heading_The_ForestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The Forest 模组`)
};

const ja_explore_heading_the_forest = /** @type {(inputs: Explore_Heading_The_ForestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The Forest のMOD`)
};

/**
* | output |
* | --- |
* | "The Forest Mods" |
*
* @param {Explore_Heading_The_ForestInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_heading_the_forest = /** @type {((inputs?: Explore_Heading_The_ForestInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Heading_The_ForestInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_heading_the_forest(inputs)
	if (locale === "de") return de_explore_heading_the_forest(inputs)
	if (locale === "fr") return fr_explore_heading_the_forest(inputs)
	if (locale === "it") return it_explore_heading_the_forest(inputs)
	if (locale === "nl") return nl_explore_heading_the_forest(inputs)
	if (locale === "pl") return pl_explore_heading_the_forest(inputs)
	if (locale === "pt") return pt_explore_heading_the_forest(inputs)
	if (locale === "ru") return ru_explore_heading_the_forest(inputs)
	if (locale === "sv") return sv_explore_heading_the_forest(inputs)
	if (locale === "tr") return tr_explore_heading_the_forest(inputs)
	if (locale === "zh") return zh_explore_heading_the_forest(inputs)
	if (locale === "ja") return ja_explore_heading_the_forest(inputs)
	return en_explore_heading_the_forest(inputs)
});
