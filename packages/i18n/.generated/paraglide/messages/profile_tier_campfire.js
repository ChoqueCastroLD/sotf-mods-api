/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Tier_CampfireInputs */

const en_profile_tier_campfire = /** @type {(inputs: Profile_Tier_CampfireInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Campfire`)
};

const es_profile_tier_campfire = /** @type {(inputs: Profile_Tier_CampfireInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hoguera`)
};

const de_profile_tier_campfire = /** @type {(inputs: Profile_Tier_CampfireInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lagerfeuer`)
};

const fr_profile_tier_campfire = /** @type {(inputs: Profile_Tier_CampfireInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Feu de camp`)
};

const it_profile_tier_campfire = /** @type {(inputs: Profile_Tier_CampfireInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Falò`)
};

const nl_profile_tier_campfire = /** @type {(inputs: Profile_Tier_CampfireInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kampvuur`)
};

const pl_profile_tier_campfire = /** @type {(inputs: Profile_Tier_CampfireInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ognisko`)
};

const pt_profile_tier_campfire = /** @type {(inputs: Profile_Tier_CampfireInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fogueira`)
};

const ru_profile_tier_campfire = /** @type {(inputs: Profile_Tier_CampfireInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Костёр`)
};

const sv_profile_tier_campfire = /** @type {(inputs: Profile_Tier_CampfireInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lägereld`)
};

const tr_profile_tier_campfire = /** @type {(inputs: Profile_Tier_CampfireInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kamp ateşi`)
};

const zh_profile_tier_campfire = /** @type {(inputs: Profile_Tier_CampfireInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`篝火`)
};

const ja_profile_tier_campfire = /** @type {(inputs: Profile_Tier_CampfireInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`焚き火`)
};

/**
* | output |
* | --- |
* | "Campfire" |
*
* @param {Profile_Tier_CampfireInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_tier_campfire = /** @type {((inputs?: Profile_Tier_CampfireInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Tier_CampfireInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_tier_campfire(inputs)
	if (locale === "de") return de_profile_tier_campfire(inputs)
	if (locale === "fr") return fr_profile_tier_campfire(inputs)
	if (locale === "it") return it_profile_tier_campfire(inputs)
	if (locale === "nl") return nl_profile_tier_campfire(inputs)
	if (locale === "pl") return pl_profile_tier_campfire(inputs)
	if (locale === "pt") return pt_profile_tier_campfire(inputs)
	if (locale === "ru") return ru_profile_tier_campfire(inputs)
	if (locale === "sv") return sv_profile_tier_campfire(inputs)
	if (locale === "tr") return tr_profile_tier_campfire(inputs)
	if (locale === "zh") return zh_profile_tier_campfire(inputs)
	if (locale === "ja") return ja_profile_tier_campfire(inputs)
	return en_profile_tier_campfire(inputs)
});
