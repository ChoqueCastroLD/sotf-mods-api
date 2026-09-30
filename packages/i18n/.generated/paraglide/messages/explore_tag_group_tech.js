/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Tag_Group_TechInputs */

const en_explore_tag_group_tech = /** @type {(inputs: Explore_Tag_Group_TechInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Technical`)
};

const es_explore_tag_group_tech = /** @type {(inputs: Explore_Tag_Group_TechInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Técnico`)
};

const de_explore_tag_group_tech = /** @type {(inputs: Explore_Tag_Group_TechInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Technik`)
};

const fr_explore_tag_group_tech = /** @type {(inputs: Explore_Tag_Group_TechInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Technique`)
};

const it_explore_tag_group_tech = /** @type {(inputs: Explore_Tag_Group_TechInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tecnica`)
};

const nl_explore_tag_group_tech = /** @type {(inputs: Explore_Tag_Group_TechInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Techniek`)
};

const pl_explore_tag_group_tech = /** @type {(inputs: Explore_Tag_Group_TechInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Technika`)
};

const pt_explore_tag_group_tech = /** @type {(inputs: Explore_Tag_Group_TechInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Técnico`)
};

const ru_explore_tag_group_tech = /** @type {(inputs: Explore_Tag_Group_TechInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Техническое`)
};

const sv_explore_tag_group_tech = /** @type {(inputs: Explore_Tag_Group_TechInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Teknik`)
};

const tr_explore_tag_group_tech = /** @type {(inputs: Explore_Tag_Group_TechInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Teknik`)
};

const zh_explore_tag_group_tech = /** @type {(inputs: Explore_Tag_Group_TechInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`技术`)
};

const ja_explore_tag_group_tech = /** @type {(inputs: Explore_Tag_Group_TechInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`技術`)
};

/**
* | output |
* | --- |
* | "Technical" |
*
* @param {Explore_Tag_Group_TechInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_tag_group_tech = /** @type {((inputs?: Explore_Tag_Group_TechInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Tag_Group_TechInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_tag_group_tech(inputs)
	if (locale === "de") return de_explore_tag_group_tech(inputs)
	if (locale === "fr") return fr_explore_tag_group_tech(inputs)
	if (locale === "it") return it_explore_tag_group_tech(inputs)
	if (locale === "nl") return nl_explore_tag_group_tech(inputs)
	if (locale === "pl") return pl_explore_tag_group_tech(inputs)
	if (locale === "pt") return pt_explore_tag_group_tech(inputs)
	if (locale === "ru") return ru_explore_tag_group_tech(inputs)
	if (locale === "sv") return sv_explore_tag_group_tech(inputs)
	if (locale === "tr") return tr_explore_tag_group_tech(inputs)
	if (locale === "zh") return zh_explore_tag_group_tech(inputs)
	if (locale === "ja") return ja_explore_tag_group_tech(inputs)
	return en_explore_tag_group_tech(inputs)
});
