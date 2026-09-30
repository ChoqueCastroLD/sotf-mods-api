/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Tags_Other_GroupInputs */

const en_explore_tags_other_group = /** @type {(inputs: Explore_Tags_Other_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Other`)
};

const es_explore_tags_other_group = /** @type {(inputs: Explore_Tags_Other_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otras`)
};

const de_explore_tags_other_group = /** @type {(inputs: Explore_Tags_Other_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sonstige`)
};

const fr_explore_tags_other_group = /** @type {(inputs: Explore_Tags_Other_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autres`)
};

const it_explore_tags_other_group = /** @type {(inputs: Explore_Tags_Other_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Altro`)
};

const nl_explore_tags_other_group = /** @type {(inputs: Explore_Tags_Other_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Overig`)
};

const pl_explore_tags_other_group = /** @type {(inputs: Explore_Tags_Other_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inne`)
};

const pt_explore_tags_other_group = /** @type {(inputs: Explore_Tags_Other_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Outras`)
};

const ru_explore_tags_other_group = /** @type {(inputs: Explore_Tags_Other_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Другое`)
};

const sv_explore_tags_other_group = /** @type {(inputs: Explore_Tags_Other_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Övrigt`)
};

const tr_explore_tags_other_group = /** @type {(inputs: Explore_Tags_Other_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diğer`)
};

const zh_explore_tags_other_group = /** @type {(inputs: Explore_Tags_Other_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`其他`)
};

const ja_explore_tags_other_group = /** @type {(inputs: Explore_Tags_Other_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`その他`)
};

/**
* | output |
* | --- |
* | "Other" |
*
* @param {Explore_Tags_Other_GroupInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_tags_other_group = /** @type {((inputs?: Explore_Tags_Other_GroupInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Tags_Other_GroupInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_tags_other_group(inputs)
	if (locale === "de") return de_explore_tags_other_group(inputs)
	if (locale === "fr") return fr_explore_tags_other_group(inputs)
	if (locale === "it") return it_explore_tags_other_group(inputs)
	if (locale === "nl") return nl_explore_tags_other_group(inputs)
	if (locale === "pl") return pl_explore_tags_other_group(inputs)
	if (locale === "pt") return pt_explore_tags_other_group(inputs)
	if (locale === "ru") return ru_explore_tags_other_group(inputs)
	if (locale === "sv") return sv_explore_tags_other_group(inputs)
	if (locale === "tr") return tr_explore_tags_other_group(inputs)
	if (locale === "zh") return zh_explore_tags_other_group(inputs)
	if (locale === "ja") return ja_explore_tags_other_group(inputs)
	return en_explore_tags_other_group(inputs)
});
