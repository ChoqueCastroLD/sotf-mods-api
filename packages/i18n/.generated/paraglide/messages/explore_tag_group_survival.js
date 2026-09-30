/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Tag_Group_SurvivalInputs */

const en_explore_tag_group_survival = /** @type {(inputs: Explore_Tag_Group_SurvivalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Survival`)
};

const es_explore_tag_group_survival = /** @type {(inputs: Explore_Tag_Group_SurvivalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supervivencia`)
};

const de_explore_tag_group_survival = /** @type {(inputs: Explore_Tag_Group_SurvivalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Überleben`)
};

const fr_explore_tag_group_survival = /** @type {(inputs: Explore_Tag_Group_SurvivalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Survie`)
};

const it_explore_tag_group_survival = /** @type {(inputs: Explore_Tag_Group_SurvivalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sopravvivenza`)
};

const nl_explore_tag_group_survival = /** @type {(inputs: Explore_Tag_Group_SurvivalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Overleven`)
};

const pl_explore_tag_group_survival = /** @type {(inputs: Explore_Tag_Group_SurvivalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przetrwanie`)
};

const pt_explore_tag_group_survival = /** @type {(inputs: Explore_Tag_Group_SurvivalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sobrevivência`)
};

const ru_explore_tag_group_survival = /** @type {(inputs: Explore_Tag_Group_SurvivalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выживание`)
};

const sv_explore_tag_group_survival = /** @type {(inputs: Explore_Tag_Group_SurvivalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Överlevnad`)
};

const tr_explore_tag_group_survival = /** @type {(inputs: Explore_Tag_Group_SurvivalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hayatta kalma`)
};

const zh_explore_tag_group_survival = /** @type {(inputs: Explore_Tag_Group_SurvivalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`生存`)
};

const ja_explore_tag_group_survival = /** @type {(inputs: Explore_Tag_Group_SurvivalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`サバイバル`)
};

/**
* | output |
* | --- |
* | "Survival" |
*
* @param {Explore_Tag_Group_SurvivalInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_tag_group_survival = /** @type {((inputs?: Explore_Tag_Group_SurvivalInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Tag_Group_SurvivalInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_tag_group_survival(inputs)
	if (locale === "de") return de_explore_tag_group_survival(inputs)
	if (locale === "fr") return fr_explore_tag_group_survival(inputs)
	if (locale === "it") return it_explore_tag_group_survival(inputs)
	if (locale === "nl") return nl_explore_tag_group_survival(inputs)
	if (locale === "pl") return pl_explore_tag_group_survival(inputs)
	if (locale === "pt") return pt_explore_tag_group_survival(inputs)
	if (locale === "ru") return ru_explore_tag_group_survival(inputs)
	if (locale === "sv") return sv_explore_tag_group_survival(inputs)
	if (locale === "tr") return tr_explore_tag_group_survival(inputs)
	if (locale === "zh") return zh_explore_tag_group_survival(inputs)
	if (locale === "ja") return ja_explore_tag_group_survival(inputs)
	return en_explore_tag_group_survival(inputs)
});
