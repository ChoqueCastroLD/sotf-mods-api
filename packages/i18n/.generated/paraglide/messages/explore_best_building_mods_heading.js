/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Best_Building_Mods_HeadingInputs */

const en_explore_best_building_mods_heading = /** @type {(inputs: Explore_Best_Building_Mods_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The best building mods`)
};

const es_explore_best_building_mods_heading = /** @type {(inputs: Explore_Best_Building_Mods_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los mejores mods de construcción`)
};

const de_explore_best_building_mods_heading = /** @type {(inputs: Explore_Best_Building_Mods_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die besten Bau-Mods`)
};

const fr_explore_best_building_mods_heading = /** @type {(inputs: Explore_Best_Building_Mods_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les meilleurs mods de construction`)
};

const it_explore_best_building_mods_heading = /** @type {(inputs: Explore_Best_Building_Mods_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le migliori mod di costruzione`)
};

const nl_explore_best_building_mods_heading = /** @type {(inputs: Explore_Best_Building_Mods_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De beste bouwmods`)
};

const pl_explore_best_building_mods_heading = /** @type {(inputs: Explore_Best_Building_Mods_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najlepsze mody do budowania`)
};

const pt_explore_best_building_mods_heading = /** @type {(inputs: Explore_Best_Building_Mods_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Os melhores mods de construção`)
};

const ru_explore_best_building_mods_heading = /** @type {(inputs: Explore_Best_Building_Mods_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Лучшие моды для строительства`)
};

const sv_explore_best_building_mods_heading = /** @type {(inputs: Explore_Best_Building_Mods_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De bästa byggmoddarna`)
};

const tr_explore_best_building_mods_heading = /** @type {(inputs: Explore_Best_Building_Mods_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En iyi inşa modları`)
};

const zh_explore_best_building_mods_heading = /** @type {(inputs: Explore_Best_Building_Mods_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最佳建造模组`)
};

const ja_explore_best_building_mods_heading = /** @type {(inputs: Explore_Best_Building_Mods_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`おすすめの建築 MOD`)
};

/**
* | output |
* | --- |
* | "The best building mods" |
*
* @param {Explore_Best_Building_Mods_HeadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_best_building_mods_heading = /** @type {((inputs?: Explore_Best_Building_Mods_HeadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Best_Building_Mods_HeadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_best_building_mods_heading(inputs)
	if (locale === "de") return de_explore_best_building_mods_heading(inputs)
	if (locale === "fr") return fr_explore_best_building_mods_heading(inputs)
	if (locale === "it") return it_explore_best_building_mods_heading(inputs)
	if (locale === "nl") return nl_explore_best_building_mods_heading(inputs)
	if (locale === "pl") return pl_explore_best_building_mods_heading(inputs)
	if (locale === "pt") return pt_explore_best_building_mods_heading(inputs)
	if (locale === "ru") return ru_explore_best_building_mods_heading(inputs)
	if (locale === "sv") return sv_explore_best_building_mods_heading(inputs)
	if (locale === "tr") return tr_explore_best_building_mods_heading(inputs)
	if (locale === "zh") return zh_explore_best_building_mods_heading(inputs)
	if (locale === "ja") return ja_explore_best_building_mods_heading(inputs)
	return en_explore_best_building_mods_heading(inputs)
});
