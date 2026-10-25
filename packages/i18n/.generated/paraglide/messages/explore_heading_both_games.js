/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Heading_Both_GamesInputs */

const en_explore_heading_both_games = /** @type {(inputs: Explore_Heading_Both_GamesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest and The Forest Mods`)
};

const es_explore_heading_both_games = /** @type {(inputs: Explore_Heading_Both_GamesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods de Sons of the Forest y The Forest`)
};

const de_explore_heading_both_games = /** @type {(inputs: Explore_Heading_Both_GamesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods für Sons of the Forest und The Forest`)
};

const fr_explore_heading_both_games = /** @type {(inputs: Explore_Heading_Both_GamesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods pour Sons of the Forest et The Forest`)
};

const it_explore_heading_both_games = /** @type {(inputs: Explore_Heading_Both_GamesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod per Sons of the Forest e The Forest`)
};

const nl_explore_heading_both_games = /** @type {(inputs: Explore_Heading_Both_GamesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods voor Sons of the Forest en The Forest`)
};

const pl_explore_heading_both_games = /** @type {(inputs: Explore_Heading_Both_GamesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mody do Sons of the Forest i The Forest`)
};

const pt_explore_heading_both_games = /** @type {(inputs: Explore_Heading_Both_GamesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods de Sons of the Forest e The Forest`)
};

const ru_explore_heading_both_games = /** @type {(inputs: Explore_Heading_Both_GamesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Моды для Sons of the Forest и The Forest`)
};

const sv_explore_heading_both_games = /** @type {(inputs: Explore_Heading_Both_GamesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moddar för Sons of the Forest och The Forest`)
};

const tr_explore_heading_both_games = /** @type {(inputs: Explore_Heading_Both_GamesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest ve The Forest modları`)
};

const zh_explore_heading_both_games = /** @type {(inputs: Explore_Heading_Both_GamesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest 与 The Forest 模组`)
};

const ja_explore_heading_both_games = /** @type {(inputs: Explore_Heading_Both_GamesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest と The Forest のMOD`)
};

/**
* | output |
* | --- |
* | "Sons of the Forest and The Forest Mods" |
*
* @param {Explore_Heading_Both_GamesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_heading_both_games = /** @type {((inputs?: Explore_Heading_Both_GamesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Heading_Both_GamesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_heading_both_games(inputs)
	if (locale === "de") return de_explore_heading_both_games(inputs)
	if (locale === "fr") return fr_explore_heading_both_games(inputs)
	if (locale === "it") return it_explore_heading_both_games(inputs)
	if (locale === "nl") return nl_explore_heading_both_games(inputs)
	if (locale === "pl") return pl_explore_heading_both_games(inputs)
	if (locale === "pt") return pt_explore_heading_both_games(inputs)
	if (locale === "ru") return ru_explore_heading_both_games(inputs)
	if (locale === "sv") return sv_explore_heading_both_games(inputs)
	if (locale === "tr") return tr_explore_heading_both_games(inputs)
	if (locale === "zh") return zh_explore_heading_both_games(inputs)
	if (locale === "ja") return ja_explore_heading_both_games(inputs)
	return en_explore_heading_both_games(inputs)
});
