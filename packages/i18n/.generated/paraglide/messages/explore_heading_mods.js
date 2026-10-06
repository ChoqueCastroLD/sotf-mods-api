/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Heading_ModsInputs */

const en_explore_heading_mods = /** @type {(inputs: Explore_Heading_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const es_explore_heading_mods = /** @type {(inputs: Explore_Heading_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const de_explore_heading_mods = /** @type {(inputs: Explore_Heading_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const fr_explore_heading_mods = /** @type {(inputs: Explore_Heading_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const it_explore_heading_mods = /** @type {(inputs: Explore_Heading_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod`)
};

const nl_explore_heading_mods = /** @type {(inputs: Explore_Heading_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const pl_explore_heading_mods = /** @type {(inputs: Explore_Heading_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mody`)
};

const pt_explore_heading_mods = /** @type {(inputs: Explore_Heading_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const ru_explore_heading_mods = /** @type {(inputs: Explore_Heading_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Моды`)
};

const sv_explore_heading_mods = /** @type {(inputs: Explore_Heading_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moddar`)
};

const tr_explore_heading_mods = /** @type {(inputs: Explore_Heading_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modlar`)
};

const zh_explore_heading_mods = /** @type {(inputs: Explore_Heading_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模组`)
};

const ja_explore_heading_mods = /** @type {(inputs: Explore_Heading_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD`)
};

/**
* | output |
* | --- |
* | "Mods" |
*
* @param {Explore_Heading_ModsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_heading_mods = /** @type {((inputs?: Explore_Heading_ModsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Heading_ModsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_heading_mods(inputs)
	if (locale === "de") return de_explore_heading_mods(inputs)
	if (locale === "fr") return fr_explore_heading_mods(inputs)
	if (locale === "it") return it_explore_heading_mods(inputs)
	if (locale === "nl") return nl_explore_heading_mods(inputs)
	if (locale === "pl") return pl_explore_heading_mods(inputs)
	if (locale === "pt") return pt_explore_heading_mods(inputs)
	if (locale === "ru") return ru_explore_heading_mods(inputs)
	if (locale === "sv") return sv_explore_heading_mods(inputs)
	if (locale === "tr") return tr_explore_heading_mods(inputs)
	if (locale === "zh") return zh_explore_heading_mods(inputs)
	if (locale === "ja") return ja_explore_heading_mods(inputs)
	return en_explore_heading_mods(inputs)
});
