/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Tag_Group_AudioInputs */

const en_explore_tag_group_audio = /** @type {(inputs: Explore_Tag_Group_AudioInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Audio`)
};

const es_explore_tag_group_audio = /** @type {(inputs: Explore_Tag_Group_AudioInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sonido`)
};

const de_explore_tag_group_audio = /** @type {(inputs: Explore_Tag_Group_AudioInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Audio`)
};

const fr_explore_tag_group_audio = /** @type {(inputs: Explore_Tag_Group_AudioInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Audio`)
};

const it_explore_tag_group_audio = /** @type {(inputs: Explore_Tag_Group_AudioInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Audio`)
};

const nl_explore_tag_group_audio = /** @type {(inputs: Explore_Tag_Group_AudioInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Audio`)
};

const pl_explore_tag_group_audio = /** @type {(inputs: Explore_Tag_Group_AudioInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dźwięk`)
};

const pt_explore_tag_group_audio = /** @type {(inputs: Explore_Tag_Group_AudioInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Áudio`)
};

const ru_explore_tag_group_audio = /** @type {(inputs: Explore_Tag_Group_AudioInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Звук`)
};

const sv_explore_tag_group_audio = /** @type {(inputs: Explore_Tag_Group_AudioInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ljud`)
};

const tr_explore_tag_group_audio = /** @type {(inputs: Explore_Tag_Group_AudioInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ses`)
};

const zh_explore_tag_group_audio = /** @type {(inputs: Explore_Tag_Group_AudioInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`音频`)
};

const ja_explore_tag_group_audio = /** @type {(inputs: Explore_Tag_Group_AudioInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`サウンド`)
};

/**
* | output |
* | --- |
* | "Audio" |
*
* @param {Explore_Tag_Group_AudioInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_tag_group_audio = /** @type {((inputs?: Explore_Tag_Group_AudioInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Tag_Group_AudioInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_tag_group_audio(inputs)
	if (locale === "de") return de_explore_tag_group_audio(inputs)
	if (locale === "fr") return fr_explore_tag_group_audio(inputs)
	if (locale === "it") return it_explore_tag_group_audio(inputs)
	if (locale === "nl") return nl_explore_tag_group_audio(inputs)
	if (locale === "pl") return pl_explore_tag_group_audio(inputs)
	if (locale === "pt") return pt_explore_tag_group_audio(inputs)
	if (locale === "ru") return ru_explore_tag_group_audio(inputs)
	if (locale === "sv") return sv_explore_tag_group_audio(inputs)
	if (locale === "tr") return tr_explore_tag_group_audio(inputs)
	if (locale === "zh") return zh_explore_tag_group_audio(inputs)
	if (locale === "ja") return ja_explore_tag_group_audio(inputs)
	return en_explore_tag_group_audio(inputs)
});
