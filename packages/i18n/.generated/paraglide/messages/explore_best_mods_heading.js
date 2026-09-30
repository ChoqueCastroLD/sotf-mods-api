/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Best_Mods_HeadingInputs */

const en_explore_best_mods_heading = /** @type {(inputs: Explore_Best_Mods_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The best Sons of the Forest mods`)
};

const es_explore_best_mods_heading = /** @type {(inputs: Explore_Best_Mods_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los mejores mods de Sons of the Forest`)
};

const de_explore_best_mods_heading = /** @type {(inputs: Explore_Best_Mods_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die besten Sons of the Forest Mods`)
};

const fr_explore_best_mods_heading = /** @type {(inputs: Explore_Best_Mods_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les meilleurs mods Sons of the Forest`)
};

const it_explore_best_mods_heading = /** @type {(inputs: Explore_Best_Mods_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le migliori mod di Sons of the Forest`)
};

const nl_explore_best_mods_heading = /** @type {(inputs: Explore_Best_Mods_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De beste Sons of the Forest-mods`)
};

const pl_explore_best_mods_heading = /** @type {(inputs: Explore_Best_Mods_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najlepsze mody do Sons of the Forest`)
};

const pt_explore_best_mods_heading = /** @type {(inputs: Explore_Best_Mods_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Os melhores mods de Sons of the Forest`)
};

const ru_explore_best_mods_heading = /** @type {(inputs: Explore_Best_Mods_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Лучшие моды для Sons of the Forest`)
};

const sv_explore_best_mods_heading = /** @type {(inputs: Explore_Best_Mods_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De bästa moddarna till Sons of the Forest`)
};

const tr_explore_best_mods_heading = /** @type {(inputs: Explore_Best_Mods_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En iyi Sons of the Forest modları`)
};

const zh_explore_best_mods_heading = /** @type {(inputs: Explore_Best_Mods_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最佳 Sons of the Forest 模组`)
};

const ja_explore_best_mods_heading = /** @type {(inputs: Explore_Best_Mods_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest のおすすめ MOD`)
};

/**
* | output |
* | --- |
* | "The best Sons of the Forest mods" |
*
* @param {Explore_Best_Mods_HeadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_best_mods_heading = /** @type {((inputs?: Explore_Best_Mods_HeadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Best_Mods_HeadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_best_mods_heading(inputs)
	if (locale === "de") return de_explore_best_mods_heading(inputs)
	if (locale === "fr") return fr_explore_best_mods_heading(inputs)
	if (locale === "it") return it_explore_best_mods_heading(inputs)
	if (locale === "nl") return nl_explore_best_mods_heading(inputs)
	if (locale === "pl") return pl_explore_best_mods_heading(inputs)
	if (locale === "pt") return pt_explore_best_mods_heading(inputs)
	if (locale === "ru") return ru_explore_best_mods_heading(inputs)
	if (locale === "sv") return sv_explore_best_mods_heading(inputs)
	if (locale === "tr") return tr_explore_best_mods_heading(inputs)
	if (locale === "zh") return zh_explore_best_mods_heading(inputs)
	if (locale === "ja") return ja_explore_best_mods_heading(inputs)
	return en_explore_best_mods_heading(inputs)
});
