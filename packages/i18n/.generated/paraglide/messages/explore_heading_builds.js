/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Heading_BuildsInputs */

const en_explore_heading_builds = /** @type {(inputs: Explore_Heading_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Explore builds`)
};

const es_explore_heading_builds = /** @type {(inputs: Explore_Heading_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Explorar builds`)
};

const de_explore_heading_builds = /** @type {(inputs: Explore_Heading_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds entdecken`)
};

const fr_explore_heading_builds = /** @type {(inputs: Explore_Heading_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Explorer les builds`)
};

const it_explore_heading_builds = /** @type {(inputs: Explore_Heading_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esplora le build`)
};

const nl_explore_heading_builds = /** @type {(inputs: Explore_Heading_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds verkennen`)
};

const pl_explore_heading_builds = /** @type {(inputs: Explore_Heading_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przeglądaj buildy`)
};

const pt_explore_heading_builds = /** @type {(inputs: Explore_Heading_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Explorar builds`)
};

const ru_explore_heading_builds = /** @type {(inputs: Explore_Heading_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Обзор построек`)
};

const sv_explore_heading_builds = /** @type {(inputs: Explore_Heading_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utforska byggen`)
};

const tr_explore_heading_builds = /** @type {(inputs: Explore_Heading_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapıları keşfet`)
};

const zh_explore_heading_builds = /** @type {(inputs: Explore_Heading_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`探索建筑`)
};

const ja_explore_heading_builds = /** @type {(inputs: Explore_Heading_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`建築を探す`)
};

/**
* | output |
* | --- |
* | "Explore builds" |
*
* @param {Explore_Heading_BuildsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_heading_builds = /** @type {((inputs?: Explore_Heading_BuildsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Heading_BuildsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_heading_builds(inputs)
	if (locale === "de") return de_explore_heading_builds(inputs)
	if (locale === "fr") return fr_explore_heading_builds(inputs)
	if (locale === "it") return it_explore_heading_builds(inputs)
	if (locale === "nl") return nl_explore_heading_builds(inputs)
	if (locale === "pl") return pl_explore_heading_builds(inputs)
	if (locale === "pt") return pt_explore_heading_builds(inputs)
	if (locale === "ru") return ru_explore_heading_builds(inputs)
	if (locale === "sv") return sv_explore_heading_builds(inputs)
	if (locale === "tr") return tr_explore_heading_builds(inputs)
	if (locale === "zh") return zh_explore_heading_builds(inputs)
	if (locale === "ja") return ja_explore_heading_builds(inputs)
	return en_explore_heading_builds(inputs)
});
