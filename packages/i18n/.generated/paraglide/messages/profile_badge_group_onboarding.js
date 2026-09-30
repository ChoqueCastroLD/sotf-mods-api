/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Badge_Group_OnboardingInputs */

const en_profile_badge_group_onboarding = /** @type {(inputs: Profile_Badge_Group_OnboardingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`First steps`)
};

const es_profile_badge_group_onboarding = /** @type {(inputs: Profile_Badge_Group_OnboardingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Primeros pasos`)
};

const de_profile_badge_group_onboarding = /** @type {(inputs: Profile_Badge_Group_OnboardingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erste Schritte`)
};

const fr_profile_badge_group_onboarding = /** @type {(inputs: Profile_Badge_Group_OnboardingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Premiers pas`)
};

const it_profile_badge_group_onboarding = /** @type {(inputs: Profile_Badge_Group_OnboardingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Primi passi`)
};

const nl_profile_badge_group_onboarding = /** @type {(inputs: Profile_Badge_Group_OnboardingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eerste stappen`)
};

const pl_profile_badge_group_onboarding = /** @type {(inputs: Profile_Badge_Group_OnboardingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pierwsze kroki`)
};

const pt_profile_badge_group_onboarding = /** @type {(inputs: Profile_Badge_Group_OnboardingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Primeiros passos`)
};

const ru_profile_badge_group_onboarding = /** @type {(inputs: Profile_Badge_Group_OnboardingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Первые шаги`)
};

const sv_profile_badge_group_onboarding = /** @type {(inputs: Profile_Badge_Group_OnboardingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Första stegen`)
};

const tr_profile_badge_group_onboarding = /** @type {(inputs: Profile_Badge_Group_OnboardingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İlk adımlar`)
};

const zh_profile_badge_group_onboarding = /** @type {(inputs: Profile_Badge_Group_OnboardingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新手起步`)
};

const ja_profile_badge_group_onboarding = /** @type {(inputs: Profile_Badge_Group_OnboardingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`はじめの一歩`)
};

/**
* | output |
* | --- |
* | "First steps" |
*
* @param {Profile_Badge_Group_OnboardingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_badge_group_onboarding = /** @type {((inputs?: Profile_Badge_Group_OnboardingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_Group_OnboardingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_badge_group_onboarding(inputs)
	if (locale === "de") return de_profile_badge_group_onboarding(inputs)
	if (locale === "fr") return fr_profile_badge_group_onboarding(inputs)
	if (locale === "it") return it_profile_badge_group_onboarding(inputs)
	if (locale === "nl") return nl_profile_badge_group_onboarding(inputs)
	if (locale === "pl") return pl_profile_badge_group_onboarding(inputs)
	if (locale === "pt") return pt_profile_badge_group_onboarding(inputs)
	if (locale === "ru") return ru_profile_badge_group_onboarding(inputs)
	if (locale === "sv") return sv_profile_badge_group_onboarding(inputs)
	if (locale === "tr") return tr_profile_badge_group_onboarding(inputs)
	if (locale === "zh") return zh_profile_badge_group_onboarding(inputs)
	if (locale === "ja") return ja_profile_badge_group_onboarding(inputs)
	return en_profile_badge_group_onboarding(inputs)
});
