/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Heading_AllInputs */

const en_explore_heading_all = /** @type {(inputs: Explore_Heading_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods and builds`)
};

const es_explore_heading_all = /** @type {(inputs: Explore_Heading_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods y builds`)
};

const de_explore_heading_all = /** @type {(inputs: Explore_Heading_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods und Builds`)
};

const fr_explore_heading_all = /** @type {(inputs: Explore_Heading_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods et builds`)
};

const it_explore_heading_all = /** @type {(inputs: Explore_Heading_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod e build`)
};

const nl_explore_heading_all = /** @type {(inputs: Explore_Heading_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods en builds`)
};

const pl_explore_heading_all = /** @type {(inputs: Explore_Heading_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mody i buildy`)
};

const pt_explore_heading_all = /** @type {(inputs: Explore_Heading_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods e builds`)
};

const ru_explore_heading_all = /** @type {(inputs: Explore_Heading_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Моды и постройки`)
};

const sv_explore_heading_all = /** @type {(inputs: Explore_Heading_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moddar och byggen`)
};

const tr_explore_heading_all = /** @type {(inputs: Explore_Heading_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modlar ve yapılar`)
};

const zh_explore_heading_all = /** @type {(inputs: Explore_Heading_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模组和建筑`)
};

const ja_explore_heading_all = /** @type {(inputs: Explore_Heading_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD と建築`)
};

/**
* | output |
* | --- |
* | "Mods and builds" |
*
* @param {Explore_Heading_AllInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_heading_all = /** @type {((inputs?: Explore_Heading_AllInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Heading_AllInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_heading_all(inputs)
	if (locale === "de") return de_explore_heading_all(inputs)
	if (locale === "fr") return fr_explore_heading_all(inputs)
	if (locale === "it") return it_explore_heading_all(inputs)
	if (locale === "nl") return nl_explore_heading_all(inputs)
	if (locale === "pl") return pl_explore_heading_all(inputs)
	if (locale === "pt") return pt_explore_heading_all(inputs)
	if (locale === "ru") return ru_explore_heading_all(inputs)
	if (locale === "sv") return sv_explore_heading_all(inputs)
	if (locale === "tr") return tr_explore_heading_all(inputs)
	if (locale === "zh") return zh_explore_heading_all(inputs)
	if (locale === "ja") return ja_explore_heading_all(inputs)
	return en_explore_heading_all(inputs)
});
