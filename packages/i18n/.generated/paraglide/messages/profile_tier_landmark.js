/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Tier_LandmarkInputs */

const en_profile_tier_landmark = /** @type {(inputs: Profile_Tier_LandmarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Landmark`)
};

const es_profile_tier_landmark = /** @type {(inputs: Profile_Tier_LandmarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hito`)
};

const de_profile_tier_landmark = /** @type {(inputs: Profile_Tier_LandmarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wahrzeichen`)
};

const fr_profile_tier_landmark = /** @type {(inputs: Profile_Tier_LandmarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Monument`)
};

const it_profile_tier_landmark = /** @type {(inputs: Profile_Tier_LandmarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Monumento`)
};

const nl_profile_tier_landmark = /** @type {(inputs: Profile_Tier_LandmarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Monument`)
};

const pl_profile_tier_landmark = /** @type {(inputs: Profile_Tier_LandmarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Punkt orientacyjny`)
};

const pt_profile_tier_landmark = /** @type {(inputs: Profile_Tier_LandmarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marco`)
};

const ru_profile_tier_landmark = /** @type {(inputs: Profile_Tier_LandmarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Достопримечательность`)
};

const sv_profile_tier_landmark = /** @type {(inputs: Profile_Tier_LandmarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Landmärke`)
};

const tr_profile_tier_landmark = /** @type {(inputs: Profile_Tier_LandmarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Simge yapı`)
};

const zh_profile_tier_landmark = /** @type {(inputs: Profile_Tier_LandmarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`地标`)
};

const ja_profile_tier_landmark = /** @type {(inputs: Profile_Tier_LandmarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ランドマーク`)
};

/**
* | output |
* | --- |
* | "Landmark" |
*
* @param {Profile_Tier_LandmarkInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_tier_landmark = /** @type {((inputs?: Profile_Tier_LandmarkInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Tier_LandmarkInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_tier_landmark(inputs)
	if (locale === "de") return de_profile_tier_landmark(inputs)
	if (locale === "fr") return fr_profile_tier_landmark(inputs)
	if (locale === "it") return it_profile_tier_landmark(inputs)
	if (locale === "nl") return nl_profile_tier_landmark(inputs)
	if (locale === "pl") return pl_profile_tier_landmark(inputs)
	if (locale === "pt") return pt_profile_tier_landmark(inputs)
	if (locale === "ru") return ru_profile_tier_landmark(inputs)
	if (locale === "sv") return sv_profile_tier_landmark(inputs)
	if (locale === "tr") return tr_profile_tier_landmark(inputs)
	if (locale === "zh") return zh_profile_tier_landmark(inputs)
	if (locale === "ja") return ja_profile_tier_landmark(inputs)
	return en_profile_tier_landmark(inputs)
});
