/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Tier_Lean_ToInputs */

const en_profile_tier_lean_to = /** @type {(inputs: Profile_Tier_Lean_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lean-to`)
};

const es_profile_tier_lean_to = /** @type {(inputs: Profile_Tier_Lean_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Refugio`)
};

const de_profile_tier_lean_to = /** @type {(inputs: Profile_Tier_Lean_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unterstand`)
};

const fr_profile_tier_lean_to = /** @type {(inputs: Profile_Tier_Lean_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Appentis`)
};

const it_profile_tier_lean_to = /** @type {(inputs: Profile_Tier_Lean_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Riparo`)
};

const nl_profile_tier_lean_to = /** @type {(inputs: Profile_Tier_Lean_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afdak`)
};

const pl_profile_tier_lean_to = /** @type {(inputs: Profile_Tier_Lean_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szałas`)
};

const pt_profile_tier_lean_to = /** @type {(inputs: Profile_Tier_Lean_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abrigo`)
};

const ru_profile_tier_lean_to = /** @type {(inputs: Profile_Tier_Lean_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Навес`)
};

const sv_profile_tier_lean_to = /** @type {(inputs: Profile_Tier_Lean_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vindskydd`)
};

const tr_profile_tier_lean_to = /** @type {(inputs: Profile_Tier_Lean_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sundurma`)
};

const zh_profile_tier_lean_to = /** @type {(inputs: Profile_Tier_Lean_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`窝棚`)
};

const ja_profile_tier_lean_to = /** @type {(inputs: Profile_Tier_Lean_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`差しかけ小屋`)
};

/**
* | output |
* | --- |
* | "Lean-to" |
*
* @param {Profile_Tier_Lean_ToInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_tier_lean_to = /** @type {((inputs?: Profile_Tier_Lean_ToInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Tier_Lean_ToInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_tier_lean_to(inputs)
	if (locale === "de") return de_profile_tier_lean_to(inputs)
	if (locale === "fr") return fr_profile_tier_lean_to(inputs)
	if (locale === "it") return it_profile_tier_lean_to(inputs)
	if (locale === "nl") return nl_profile_tier_lean_to(inputs)
	if (locale === "pl") return pl_profile_tier_lean_to(inputs)
	if (locale === "pt") return pt_profile_tier_lean_to(inputs)
	if (locale === "ru") return ru_profile_tier_lean_to(inputs)
	if (locale === "sv") return sv_profile_tier_lean_to(inputs)
	if (locale === "tr") return tr_profile_tier_lean_to(inputs)
	if (locale === "zh") return zh_profile_tier_lean_to(inputs)
	if (locale === "ja") return ja_profile_tier_lean_to(inputs)
	return en_profile_tier_lean_to(inputs)
});
