/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Readout_TagInputs */

const en_explore_readout_tag = /** @type {(inputs: Explore_Readout_TagInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tag`)
};

const es_explore_readout_tag = /** @type {(inputs: Explore_Readout_TagInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etiqueta`)
};

const de_explore_readout_tag = /** @type {(inputs: Explore_Readout_TagInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tag`)
};

const fr_explore_readout_tag = /** @type {(inputs: Explore_Readout_TagInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tag`)
};

const it_explore_readout_tag = /** @type {(inputs: Explore_Readout_TagInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tag`)
};

const nl_explore_readout_tag = /** @type {(inputs: Explore_Readout_TagInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tag`)
};

const pl_explore_readout_tag = /** @type {(inputs: Explore_Readout_TagInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tag`)
};

const pt_explore_readout_tag = /** @type {(inputs: Explore_Readout_TagInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tag`)
};

const ru_explore_readout_tag = /** @type {(inputs: Explore_Readout_TagInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Тег`)
};

const sv_explore_readout_tag = /** @type {(inputs: Explore_Readout_TagInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tagg`)
};

const tr_explore_readout_tag = /** @type {(inputs: Explore_Readout_TagInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etiket`)
};

const zh_explore_readout_tag = /** @type {(inputs: Explore_Readout_TagInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`标签`)
};

const ja_explore_readout_tag = /** @type {(inputs: Explore_Readout_TagInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`タグ`)
};

/**
* | output |
* | --- |
* | "Tag" |
*
* @param {Explore_Readout_TagInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_readout_tag = /** @type {((inputs?: Explore_Readout_TagInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Readout_TagInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_readout_tag(inputs)
	if (locale === "de") return de_explore_readout_tag(inputs)
	if (locale === "fr") return fr_explore_readout_tag(inputs)
	if (locale === "it") return it_explore_readout_tag(inputs)
	if (locale === "nl") return nl_explore_readout_tag(inputs)
	if (locale === "pl") return pl_explore_readout_tag(inputs)
	if (locale === "pt") return pt_explore_readout_tag(inputs)
	if (locale === "ru") return ru_explore_readout_tag(inputs)
	if (locale === "sv") return sv_explore_readout_tag(inputs)
	if (locale === "tr") return tr_explore_readout_tag(inputs)
	if (locale === "zh") return zh_explore_readout_tag(inputs)
	if (locale === "ja") return ja_explore_readout_tag(inputs)
	return en_explore_readout_tag(inputs)
});
