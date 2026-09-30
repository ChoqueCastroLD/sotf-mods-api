/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Tag_Group_GameplayInputs */

const en_explore_tag_group_gameplay = /** @type {(inputs: Explore_Tag_Group_GameplayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gameplay`)
};

const es_explore_tag_group_gameplay = /** @type {(inputs: Explore_Tag_Group_GameplayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jugabilidad`)
};

const de_explore_tag_group_gameplay = /** @type {(inputs: Explore_Tag_Group_GameplayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gameplay`)
};

const fr_explore_tag_group_gameplay = /** @type {(inputs: Explore_Tag_Group_GameplayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gameplay`)
};

const it_explore_tag_group_gameplay = /** @type {(inputs: Explore_Tag_Group_GameplayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gameplay`)
};

const nl_explore_tag_group_gameplay = /** @type {(inputs: Explore_Tag_Group_GameplayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gameplay`)
};

const pl_explore_tag_group_gameplay = /** @type {(inputs: Explore_Tag_Group_GameplayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rozgrywka`)
};

const pt_explore_tag_group_gameplay = /** @type {(inputs: Explore_Tag_Group_GameplayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jogabilidade`)
};

const ru_explore_tag_group_gameplay = /** @type {(inputs: Explore_Tag_Group_GameplayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Геймплей`)
};

const sv_explore_tag_group_gameplay = /** @type {(inputs: Explore_Tag_Group_GameplayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spelmekanik`)
};

const tr_explore_tag_group_gameplay = /** @type {(inputs: Explore_Tag_Group_GameplayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oynanış`)
};

const zh_explore_tag_group_gameplay = /** @type {(inputs: Explore_Tag_Group_GameplayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`玩法`)
};

const ja_explore_tag_group_gameplay = /** @type {(inputs: Explore_Tag_Group_GameplayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ゲームプレイ`)
};

/**
* | output |
* | --- |
* | "Gameplay" |
*
* @param {Explore_Tag_Group_GameplayInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_tag_group_gameplay = /** @type {((inputs?: Explore_Tag_Group_GameplayInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Tag_Group_GameplayInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_tag_group_gameplay(inputs)
	if (locale === "de") return de_explore_tag_group_gameplay(inputs)
	if (locale === "fr") return fr_explore_tag_group_gameplay(inputs)
	if (locale === "it") return it_explore_tag_group_gameplay(inputs)
	if (locale === "nl") return nl_explore_tag_group_gameplay(inputs)
	if (locale === "pl") return pl_explore_tag_group_gameplay(inputs)
	if (locale === "pt") return pt_explore_tag_group_gameplay(inputs)
	if (locale === "ru") return ru_explore_tag_group_gameplay(inputs)
	if (locale === "sv") return sv_explore_tag_group_gameplay(inputs)
	if (locale === "tr") return tr_explore_tag_group_gameplay(inputs)
	if (locale === "zh") return zh_explore_tag_group_gameplay(inputs)
	if (locale === "ja") return ja_explore_tag_group_gameplay(inputs)
	return en_explore_tag_group_gameplay(inputs)
});
