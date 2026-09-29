/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Footer_ExploreInputs */

const en_common_footer_explore = /** @type {(inputs: Common_Footer_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Explore`)
};

const es_common_footer_explore = /** @type {(inputs: Common_Footer_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Explorar`)
};

const de_common_footer_explore = /** @type {(inputs: Common_Footer_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entdecken`)
};

const fr_common_footer_explore = /** @type {(inputs: Common_Footer_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Explorer`)
};

const it_common_footer_explore = /** @type {(inputs: Common_Footer_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esplora`)
};

const nl_common_footer_explore = /** @type {(inputs: Common_Footer_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verkennen`)
};

const pl_common_footer_explore = /** @type {(inputs: Common_Footer_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przeglądaj`)
};

const pt_common_footer_explore = /** @type {(inputs: Common_Footer_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Explorar`)
};

const ru_common_footer_explore = /** @type {(inputs: Common_Footer_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Обзор`)
};

const sv_common_footer_explore = /** @type {(inputs: Common_Footer_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utforska`)
};

const tr_common_footer_explore = /** @type {(inputs: Common_Footer_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keşfet`)
};

const zh_common_footer_explore = /** @type {(inputs: Common_Footer_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`探索`)
};

const ja_common_footer_explore = /** @type {(inputs: Common_Footer_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`探す`)
};

/**
* | output |
* | --- |
* | "Explore" |
*
* @param {Common_Footer_ExploreInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_footer_explore = /** @type {((inputs?: Common_Footer_ExploreInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Footer_ExploreInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_footer_explore(inputs)
	if (locale === "de") return de_common_footer_explore(inputs)
	if (locale === "fr") return fr_common_footer_explore(inputs)
	if (locale === "it") return it_common_footer_explore(inputs)
	if (locale === "nl") return nl_common_footer_explore(inputs)
	if (locale === "pl") return pl_common_footer_explore(inputs)
	if (locale === "pt") return pt_common_footer_explore(inputs)
	if (locale === "ru") return ru_common_footer_explore(inputs)
	if (locale === "sv") return sv_common_footer_explore(inputs)
	if (locale === "tr") return tr_common_footer_explore(inputs)
	if (locale === "zh") return zh_common_footer_explore(inputs)
	if (locale === "ja") return ja_common_footer_explore(inputs)
	return en_common_footer_explore(inputs)
});
