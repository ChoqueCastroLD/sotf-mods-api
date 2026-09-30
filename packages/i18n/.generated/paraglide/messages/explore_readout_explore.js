/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Readout_ExploreInputs */

const en_explore_readout_explore = /** @type {(inputs: Explore_Readout_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Explore`)
};

const es_explore_readout_explore = /** @type {(inputs: Explore_Readout_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Explorar`)
};

const de_explore_readout_explore = /** @type {(inputs: Explore_Readout_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entdecken`)
};

const fr_explore_readout_explore = /** @type {(inputs: Explore_Readout_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Explorer`)
};

const it_explore_readout_explore = /** @type {(inputs: Explore_Readout_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esplora`)
};

const nl_explore_readout_explore = /** @type {(inputs: Explore_Readout_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verkennen`)
};

const pl_explore_readout_explore = /** @type {(inputs: Explore_Readout_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przeglądaj`)
};

const pt_explore_readout_explore = /** @type {(inputs: Explore_Readout_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Explorar`)
};

const ru_explore_readout_explore = /** @type {(inputs: Explore_Readout_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Обзор`)
};

const sv_explore_readout_explore = /** @type {(inputs: Explore_Readout_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utforska`)
};

const tr_explore_readout_explore = /** @type {(inputs: Explore_Readout_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keşfet`)
};

const zh_explore_readout_explore = /** @type {(inputs: Explore_Readout_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`探索`)
};

const ja_explore_readout_explore = /** @type {(inputs: Explore_Readout_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`探す`)
};

/**
* | output |
* | --- |
* | "Explore" |
*
* @param {Explore_Readout_ExploreInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_readout_explore = /** @type {((inputs?: Explore_Readout_ExploreInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Readout_ExploreInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_readout_explore(inputs)
	if (locale === "de") return de_explore_readout_explore(inputs)
	if (locale === "fr") return fr_explore_readout_explore(inputs)
	if (locale === "it") return it_explore_readout_explore(inputs)
	if (locale === "nl") return nl_explore_readout_explore(inputs)
	if (locale === "pl") return pl_explore_readout_explore(inputs)
	if (locale === "pt") return pt_explore_readout_explore(inputs)
	if (locale === "ru") return ru_explore_readout_explore(inputs)
	if (locale === "sv") return sv_explore_readout_explore(inputs)
	if (locale === "tr") return tr_explore_readout_explore(inputs)
	if (locale === "zh") return zh_explore_readout_explore(inputs)
	if (locale === "ja") return ja_explore_readout_explore(inputs)
	return en_explore_readout_explore(inputs)
});
