/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Achievements_Xp_NeededInputs */

const en_profile_achievements_xp_needed = /** @type {(inputs: Profile_Achievements_Xp_NeededInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`XP needed`)
};

const es_profile_achievements_xp_needed = /** @type {(inputs: Profile_Achievements_Xp_NeededInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`XP necesaria`)
};

const de_profile_achievements_xp_needed = /** @type {(inputs: Profile_Achievements_Xp_NeededInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Benötigte XP`)
};

const fr_profile_achievements_xp_needed = /** @type {(inputs: Profile_Achievements_Xp_NeededInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`XP requise`)
};

const it_profile_achievements_xp_needed = /** @type {(inputs: Profile_Achievements_Xp_NeededInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`XP necessaria`)
};

const nl_profile_achievements_xp_needed = /** @type {(inputs: Profile_Achievements_Xp_NeededInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Benodigde XP`)
};

const pl_profile_achievements_xp_needed = /** @type {(inputs: Profile_Achievements_Xp_NeededInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wymagane XP`)
};

const pt_profile_achievements_xp_needed = /** @type {(inputs: Profile_Achievements_Xp_NeededInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`XP necessário`)
};

const ru_profile_achievements_xp_needed = /** @type {(inputs: Profile_Achievements_Xp_NeededInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нужно XP`)
};

const sv_profile_achievements_xp_needed = /** @type {(inputs: Profile_Achievements_Xp_NeededInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`XP som krävs`)
};

const tr_profile_achievements_xp_needed = /** @type {(inputs: Profile_Achievements_Xp_NeededInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gereken XP`)
};

const zh_profile_achievements_xp_needed = /** @type {(inputs: Profile_Achievements_Xp_NeededInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`所需 XP`)
};

const ja_profile_achievements_xp_needed = /** @type {(inputs: Profile_Achievements_Xp_NeededInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`必要 XP`)
};

/**
* | output |
* | --- |
* | "XP needed" |
*
* @param {Profile_Achievements_Xp_NeededInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_achievements_xp_needed = /** @type {((inputs?: Profile_Achievements_Xp_NeededInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Achievements_Xp_NeededInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_achievements_xp_needed(inputs)
	if (locale === "de") return de_profile_achievements_xp_needed(inputs)
	if (locale === "fr") return fr_profile_achievements_xp_needed(inputs)
	if (locale === "it") return it_profile_achievements_xp_needed(inputs)
	if (locale === "nl") return nl_profile_achievements_xp_needed(inputs)
	if (locale === "pl") return pl_profile_achievements_xp_needed(inputs)
	if (locale === "pt") return pt_profile_achievements_xp_needed(inputs)
	if (locale === "ru") return ru_profile_achievements_xp_needed(inputs)
	if (locale === "sv") return sv_profile_achievements_xp_needed(inputs)
	if (locale === "tr") return tr_profile_achievements_xp_needed(inputs)
	if (locale === "zh") return zh_profile_achievements_xp_needed(inputs)
	if (locale === "ja") return ja_profile_achievements_xp_needed(inputs)
	return en_profile_achievements_xp_needed(inputs)
});
