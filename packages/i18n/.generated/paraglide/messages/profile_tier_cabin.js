/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Tier_CabinInputs */

const en_profile_tier_cabin = /** @type {(inputs: Profile_Tier_CabinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cabin`)
};

const es_profile_tier_cabin = /** @type {(inputs: Profile_Tier_CabinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cabaña`)
};

const de_profile_tier_cabin = /** @type {(inputs: Profile_Tier_CabinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hütte`)
};

const fr_profile_tier_cabin = /** @type {(inputs: Profile_Tier_CabinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cabane`)
};

const it_profile_tier_cabin = /** @type {(inputs: Profile_Tier_CabinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Capanna`)
};

const nl_profile_tier_cabin = /** @type {(inputs: Profile_Tier_CabinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Blokhut`)
};

const pl_profile_tier_cabin = /** @type {(inputs: Profile_Tier_CabinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chata`)
};

const pt_profile_tier_cabin = /** @type {(inputs: Profile_Tier_CabinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cabana`)
};

const ru_profile_tier_cabin = /** @type {(inputs: Profile_Tier_CabinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Хижина`)
};

const sv_profile_tier_cabin = /** @type {(inputs: Profile_Tier_CabinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stuga`)
};

const tr_profile_tier_cabin = /** @type {(inputs: Profile_Tier_CabinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kulübe`)
};

const zh_profile_tier_cabin = /** @type {(inputs: Profile_Tier_CabinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`小屋`)
};

const ja_profile_tier_cabin = /** @type {(inputs: Profile_Tier_CabinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キャビン`)
};

/**
* | output |
* | --- |
* | "Cabin" |
*
* @param {Profile_Tier_CabinInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_tier_cabin = /** @type {((inputs?: Profile_Tier_CabinInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Tier_CabinInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_tier_cabin(inputs)
	if (locale === "de") return de_profile_tier_cabin(inputs)
	if (locale === "fr") return fr_profile_tier_cabin(inputs)
	if (locale === "it") return it_profile_tier_cabin(inputs)
	if (locale === "nl") return nl_profile_tier_cabin(inputs)
	if (locale === "pl") return pl_profile_tier_cabin(inputs)
	if (locale === "pt") return pt_profile_tier_cabin(inputs)
	if (locale === "ru") return ru_profile_tier_cabin(inputs)
	if (locale === "sv") return sv_profile_tier_cabin(inputs)
	if (locale === "tr") return tr_profile_tier_cabin(inputs)
	if (locale === "zh") return zh_profile_tier_cabin(inputs)
	if (locale === "ja") return ja_profile_tier_cabin(inputs)
	return en_profile_tier_cabin(inputs)
});
