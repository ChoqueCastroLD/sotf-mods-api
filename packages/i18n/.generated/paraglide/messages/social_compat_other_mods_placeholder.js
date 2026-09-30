/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Compat_Other_Mods_PlaceholderInputs */

const en_social_compat_other_mods_placeholder = /** @type {(inputs: Social_Compat_Other_Mods_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SonsAxLib, StackMod…`)
};

const es_social_compat_other_mods_placeholder = /** @type {(inputs: Social_Compat_Other_Mods_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SonsAxLib, StackMod…`)
};

const de_social_compat_other_mods_placeholder = /** @type {(inputs: Social_Compat_Other_Mods_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SonsAxLib, StackMod…`)
};

const fr_social_compat_other_mods_placeholder = /** @type {(inputs: Social_Compat_Other_Mods_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SonsAxLib, StackMod…`)
};

const it_social_compat_other_mods_placeholder = /** @type {(inputs: Social_Compat_Other_Mods_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SonsAxLib, StackMod…`)
};

const nl_social_compat_other_mods_placeholder = /** @type {(inputs: Social_Compat_Other_Mods_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SonsAxLib, StackMod…`)
};

const pl_social_compat_other_mods_placeholder = /** @type {(inputs: Social_Compat_Other_Mods_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SonsAxLib, StackMod…`)
};

const pt_social_compat_other_mods_placeholder = /** @type {(inputs: Social_Compat_Other_Mods_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SonsAxLib, StackMod…`)
};

const ru_social_compat_other_mods_placeholder = /** @type {(inputs: Social_Compat_Other_Mods_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SonsAxLib, StackMod…`)
};

const sv_social_compat_other_mods_placeholder = /** @type {(inputs: Social_Compat_Other_Mods_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SonsAxLib, StackMod…`)
};

const tr_social_compat_other_mods_placeholder = /** @type {(inputs: Social_Compat_Other_Mods_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SonsAxLib, StackMod…`)
};

const zh_social_compat_other_mods_placeholder = /** @type {(inputs: Social_Compat_Other_Mods_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SonsAxLib、StackMod…`)
};

const ja_social_compat_other_mods_placeholder = /** @type {(inputs: Social_Compat_Other_Mods_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SonsAxLib、StackMod…`)
};

/**
* | output |
* | --- |
* | "SonsAxLib, StackMod…" |
*
* @param {Social_Compat_Other_Mods_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_compat_other_mods_placeholder = /** @type {((inputs?: Social_Compat_Other_Mods_PlaceholderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Compat_Other_Mods_PlaceholderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_compat_other_mods_placeholder(inputs)
	if (locale === "de") return de_social_compat_other_mods_placeholder(inputs)
	if (locale === "fr") return fr_social_compat_other_mods_placeholder(inputs)
	if (locale === "it") return it_social_compat_other_mods_placeholder(inputs)
	if (locale === "nl") return nl_social_compat_other_mods_placeholder(inputs)
	if (locale === "pl") return pl_social_compat_other_mods_placeholder(inputs)
	if (locale === "pt") return pt_social_compat_other_mods_placeholder(inputs)
	if (locale === "ru") return ru_social_compat_other_mods_placeholder(inputs)
	if (locale === "sv") return sv_social_compat_other_mods_placeholder(inputs)
	if (locale === "tr") return tr_social_compat_other_mods_placeholder(inputs)
	if (locale === "zh") return zh_social_compat_other_mods_placeholder(inputs)
	if (locale === "ja") return ja_social_compat_other_mods_placeholder(inputs)
	return en_social_compat_other_mods_placeholder(inputs)
});
