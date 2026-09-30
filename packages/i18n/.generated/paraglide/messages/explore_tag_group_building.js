/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Tag_Group_BuildingInputs */

const en_explore_tag_group_building = /** @type {(inputs: Explore_Tag_Group_BuildingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Building`)
};

const es_explore_tag_group_building = /** @type {(inputs: Explore_Tag_Group_BuildingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Construcción`)
};

const de_explore_tag_group_building = /** @type {(inputs: Explore_Tag_Group_BuildingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bauen`)
};

const fr_explore_tag_group_building = /** @type {(inputs: Explore_Tag_Group_BuildingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Construction`)
};

const it_explore_tag_group_building = /** @type {(inputs: Explore_Tag_Group_BuildingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Costruzione`)
};

const nl_explore_tag_group_building = /** @type {(inputs: Explore_Tag_Group_BuildingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bouwen`)
};

const pl_explore_tag_group_building = /** @type {(inputs: Explore_Tag_Group_BuildingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Budowanie`)
};

const pt_explore_tag_group_building = /** @type {(inputs: Explore_Tag_Group_BuildingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Construção`)
};

const ru_explore_tag_group_building = /** @type {(inputs: Explore_Tag_Group_BuildingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Строительство`)
};

const sv_explore_tag_group_building = /** @type {(inputs: Explore_Tag_Group_BuildingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bygga`)
};

const tr_explore_tag_group_building = /** @type {(inputs: Explore_Tag_Group_BuildingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İnşa`)
};

const zh_explore_tag_group_building = /** @type {(inputs: Explore_Tag_Group_BuildingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`建造`)
};

const ja_explore_tag_group_building = /** @type {(inputs: Explore_Tag_Group_BuildingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`建築`)
};

/**
* | output |
* | --- |
* | "Building" |
*
* @param {Explore_Tag_Group_BuildingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_tag_group_building = /** @type {((inputs?: Explore_Tag_Group_BuildingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Tag_Group_BuildingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_tag_group_building(inputs)
	if (locale === "de") return de_explore_tag_group_building(inputs)
	if (locale === "fr") return fr_explore_tag_group_building(inputs)
	if (locale === "it") return it_explore_tag_group_building(inputs)
	if (locale === "nl") return nl_explore_tag_group_building(inputs)
	if (locale === "pl") return pl_explore_tag_group_building(inputs)
	if (locale === "pt") return pt_explore_tag_group_building(inputs)
	if (locale === "ru") return ru_explore_tag_group_building(inputs)
	if (locale === "sv") return sv_explore_tag_group_building(inputs)
	if (locale === "tr") return tr_explore_tag_group_building(inputs)
	if (locale === "zh") return zh_explore_tag_group_building(inputs)
	if (locale === "ja") return ja_explore_tag_group_building(inputs)
	return en_explore_tag_group_building(inputs)
});
