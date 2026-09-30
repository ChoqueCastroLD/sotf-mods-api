/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Hub_OthersInputs */

const en_explore_hub_others = /** @type {(inputs: Explore_Hub_OthersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`More field guides`)
};

const es_explore_hub_others = /** @type {(inputs: Explore_Hub_OthersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Más guías de campo`)
};

const de_explore_hub_others = /** @type {(inputs: Explore_Hub_OthersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Weitere Feldhandbücher`)
};

const fr_explore_hub_others = /** @type {(inputs: Explore_Hub_OthersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autres guides de terrain`)
};

const it_explore_hub_others = /** @type {(inputs: Explore_Hub_OthersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Altre guide sul campo`)
};

const nl_explore_hub_others = /** @type {(inputs: Explore_Hub_OthersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meer veldgidsen`)
};

const pl_explore_hub_others = /** @type {(inputs: Explore_Hub_OthersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Więcej przewodników terenowych`)
};

const pt_explore_hub_others = /** @type {(inputs: Explore_Hub_OthersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mais guias de campo`)
};

const ru_explore_hub_others = /** @type {(inputs: Explore_Hub_OthersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Другие полевые справочники`)
};

const sv_explore_hub_others = /** @type {(inputs: Explore_Hub_OthersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fler fälthandböcker`)
};

const tr_explore_hub_others = /** @type {(inputs: Explore_Hub_OthersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diğer saha rehberleri`)
};

const zh_explore_hub_others = /** @type {(inputs: Explore_Hub_OthersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更多野外指南`)
};

const ja_explore_hub_others = /** @type {(inputs: Explore_Hub_OthersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ほかのフィールドガイド`)
};

/**
* | output |
* | --- |
* | "More field guides" |
*
* @param {Explore_Hub_OthersInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_hub_others = /** @type {((inputs?: Explore_Hub_OthersInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Hub_OthersInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_hub_others(inputs)
	if (locale === "de") return de_explore_hub_others(inputs)
	if (locale === "fr") return fr_explore_hub_others(inputs)
	if (locale === "it") return it_explore_hub_others(inputs)
	if (locale === "nl") return nl_explore_hub_others(inputs)
	if (locale === "pl") return pl_explore_hub_others(inputs)
	if (locale === "pt") return pt_explore_hub_others(inputs)
	if (locale === "ru") return ru_explore_hub_others(inputs)
	if (locale === "sv") return sv_explore_hub_others(inputs)
	if (locale === "tr") return tr_explore_hub_others(inputs)
	if (locale === "zh") return zh_explore_hub_others(inputs)
	if (locale === "ja") return ja_explore_hub_others(inputs)
	return en_explore_hub_others(inputs)
});
