/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Suggest_PopularInputs */

const en_explore_suggest_popular = /** @type {(inputs: Explore_Suggest_PopularInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Popular mods`)
};

const es_explore_suggest_popular = /** @type {(inputs: Explore_Suggest_PopularInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods populares`)
};

const de_explore_suggest_popular = /** @type {(inputs: Explore_Suggest_PopularInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beliebte Mods`)
};

const fr_explore_suggest_popular = /** @type {(inputs: Explore_Suggest_PopularInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods populaires`)
};

const it_explore_suggest_popular = /** @type {(inputs: Explore_Suggest_PopularInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod popolari`)
};

const nl_explore_suggest_popular = /** @type {(inputs: Explore_Suggest_PopularInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Populaire mods`)
};

const pl_explore_suggest_popular = /** @type {(inputs: Explore_Suggest_PopularInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Popularne mody`)
};

const pt_explore_suggest_popular = /** @type {(inputs: Explore_Suggest_PopularInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods populares`)
};

const ru_explore_suggest_popular = /** @type {(inputs: Explore_Suggest_PopularInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Популярные моды`)
};

const sv_explore_suggest_popular = /** @type {(inputs: Explore_Suggest_PopularInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Populära mods`)
};

const tr_explore_suggest_popular = /** @type {(inputs: Explore_Suggest_PopularInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Popüler modlar`)
};

const zh_explore_suggest_popular = /** @type {(inputs: Explore_Suggest_PopularInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`热门模组`)
};

const ja_explore_suggest_popular = /** @type {(inputs: Explore_Suggest_PopularInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`人気の MOD`)
};

/**
* | output |
* | --- |
* | "Popular mods" |
*
* @param {Explore_Suggest_PopularInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_suggest_popular = /** @type {((inputs?: Explore_Suggest_PopularInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Suggest_PopularInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_suggest_popular(inputs)
	if (locale === "de") return de_explore_suggest_popular(inputs)
	if (locale === "fr") return fr_explore_suggest_popular(inputs)
	if (locale === "it") return it_explore_suggest_popular(inputs)
	if (locale === "nl") return nl_explore_suggest_popular(inputs)
	if (locale === "pl") return pl_explore_suggest_popular(inputs)
	if (locale === "pt") return pt_explore_suggest_popular(inputs)
	if (locale === "ru") return ru_explore_suggest_popular(inputs)
	if (locale === "sv") return sv_explore_suggest_popular(inputs)
	if (locale === "tr") return tr_explore_suggest_popular(inputs)
	if (locale === "zh") return zh_explore_suggest_popular(inputs)
	if (locale === "ja") return ja_explore_suggest_popular(inputs)
	return en_explore_suggest_popular(inputs)
});
