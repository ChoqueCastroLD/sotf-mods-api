/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Heading_ModsInputs */

const en_explore_heading_mods = /** @type {(inputs: Explore_Heading_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Explore mods`)
};

const es_explore_heading_mods = /** @type {(inputs: Explore_Heading_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Explorar mods`)
};

const de_explore_heading_mods = /** @type {(inputs: Explore_Heading_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods entdecken`)
};

const fr_explore_heading_mods = /** @type {(inputs: Explore_Heading_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Explorer les mods`)
};

const it_explore_heading_mods = /** @type {(inputs: Explore_Heading_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esplora le mod`)
};

const nl_explore_heading_mods = /** @type {(inputs: Explore_Heading_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods verkennen`)
};

const pl_explore_heading_mods = /** @type {(inputs: Explore_Heading_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przeglądaj mody`)
};

const pt_explore_heading_mods = /** @type {(inputs: Explore_Heading_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Explorar mods`)
};

const ru_explore_heading_mods = /** @type {(inputs: Explore_Heading_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Обзор модов`)
};

const sv_explore_heading_mods = /** @type {(inputs: Explore_Heading_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utforska moddar`)
};

const tr_explore_heading_mods = /** @type {(inputs: Explore_Heading_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modları keşfet`)
};

const zh_explore_heading_mods = /** @type {(inputs: Explore_Heading_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`探索模组`)
};

const ja_explore_heading_mods = /** @type {(inputs: Explore_Heading_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD を探す`)
};

/**
* | output |
* | --- |
* | "Explore mods" |
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
