/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Tag_Group_WorldInputs */

const en_explore_tag_group_world = /** @type {(inputs: Explore_Tag_Group_WorldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`World`)
};

const es_explore_tag_group_world = /** @type {(inputs: Explore_Tag_Group_WorldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mundo`)
};

const de_explore_tag_group_world = /** @type {(inputs: Explore_Tag_Group_WorldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Welt`)
};

const fr_explore_tag_group_world = /** @type {(inputs: Explore_Tag_Group_WorldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Monde`)
};

const it_explore_tag_group_world = /** @type {(inputs: Explore_Tag_Group_WorldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mondo`)
};

const nl_explore_tag_group_world = /** @type {(inputs: Explore_Tag_Group_WorldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wereld`)
};

const pl_explore_tag_group_world = /** @type {(inputs: Explore_Tag_Group_WorldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Świat`)
};

const pt_explore_tag_group_world = /** @type {(inputs: Explore_Tag_Group_WorldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mundo`)
};

const ru_explore_tag_group_world = /** @type {(inputs: Explore_Tag_Group_WorldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Мир`)
};

const sv_explore_tag_group_world = /** @type {(inputs: Explore_Tag_Group_WorldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Värld`)
};

const tr_explore_tag_group_world = /** @type {(inputs: Explore_Tag_Group_WorldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dünya`)
};

const zh_explore_tag_group_world = /** @type {(inputs: Explore_Tag_Group_WorldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`世界`)
};

const ja_explore_tag_group_world = /** @type {(inputs: Explore_Tag_Group_WorldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ワールド`)
};

/**
* | output |
* | --- |
* | "World" |
*
* @param {Explore_Tag_Group_WorldInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_tag_group_world = /** @type {((inputs?: Explore_Tag_Group_WorldInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Tag_Group_WorldInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_tag_group_world(inputs)
	if (locale === "de") return de_explore_tag_group_world(inputs)
	if (locale === "fr") return fr_explore_tag_group_world(inputs)
	if (locale === "it") return it_explore_tag_group_world(inputs)
	if (locale === "nl") return nl_explore_tag_group_world(inputs)
	if (locale === "pl") return pl_explore_tag_group_world(inputs)
	if (locale === "pt") return pt_explore_tag_group_world(inputs)
	if (locale === "ru") return ru_explore_tag_group_world(inputs)
	if (locale === "sv") return sv_explore_tag_group_world(inputs)
	if (locale === "tr") return tr_explore_tag_group_world(inputs)
	if (locale === "zh") return zh_explore_tag_group_world(inputs)
	if (locale === "ja") return ja_explore_tag_group_world(inputs)
	return en_explore_tag_group_world(inputs)
});
