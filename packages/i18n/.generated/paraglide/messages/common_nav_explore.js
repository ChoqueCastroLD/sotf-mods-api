/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Nav_ExploreInputs */

const en_common_nav_explore = /** @type {(inputs: Common_Nav_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const es_common_nav_explore = /** @type {(inputs: Common_Nav_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const de_common_nav_explore = /** @type {(inputs: Common_Nav_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const fr_common_nav_explore = /** @type {(inputs: Common_Nav_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const it_common_nav_explore = /** @type {(inputs: Common_Nav_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod`)
};

const nl_common_nav_explore = /** @type {(inputs: Common_Nav_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const pl_common_nav_explore = /** @type {(inputs: Common_Nav_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mody`)
};

const pt_common_nav_explore = /** @type {(inputs: Common_Nav_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const ru_common_nav_explore = /** @type {(inputs: Common_Nav_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Моды`)
};

const sv_common_nav_explore = /** @type {(inputs: Common_Nav_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moddar`)
};

const tr_common_nav_explore = /** @type {(inputs: Common_Nav_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modlar`)
};

const zh_common_nav_explore = /** @type {(inputs: Common_Nav_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模组`)
};

const ja_common_nav_explore = /** @type {(inputs: Common_Nav_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD`)
};

/**
* | output |
* | --- |
* | "Mods" |
*
* @param {Common_Nav_ExploreInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_nav_explore = /** @type {((inputs?: Common_Nav_ExploreInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Nav_ExploreInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_nav_explore(inputs)
	if (locale === "de") return de_common_nav_explore(inputs)
	if (locale === "fr") return fr_common_nav_explore(inputs)
	if (locale === "it") return it_common_nav_explore(inputs)
	if (locale === "nl") return nl_common_nav_explore(inputs)
	if (locale === "pl") return pl_common_nav_explore(inputs)
	if (locale === "pt") return pt_common_nav_explore(inputs)
	if (locale === "ru") return ru_common_nav_explore(inputs)
	if (locale === "sv") return sv_common_nav_explore(inputs)
	if (locale === "tr") return tr_common_nav_explore(inputs)
	if (locale === "zh") return zh_common_nav_explore(inputs)
	if (locale === "ja") return ja_common_nav_explore(inputs)
	return en_common_nav_explore(inputs)
});
