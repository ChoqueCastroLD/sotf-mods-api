/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Tier_FortressInputs */

const en_profile_tier_fortress = /** @type {(inputs: Profile_Tier_FortressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fortress`)
};

const es_profile_tier_fortress = /** @type {(inputs: Profile_Tier_FortressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fortaleza`)
};

const de_profile_tier_fortress = /** @type {(inputs: Profile_Tier_FortressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Festung`)
};

const fr_profile_tier_fortress = /** @type {(inputs: Profile_Tier_FortressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Forteresse`)
};

const it_profile_tier_fortress = /** @type {(inputs: Profile_Tier_FortressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fortezza`)
};

const nl_profile_tier_fortress = /** @type {(inputs: Profile_Tier_FortressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fort`)
};

const pl_profile_tier_fortress = /** @type {(inputs: Profile_Tier_FortressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twierdza`)
};

const pt_profile_tier_fortress = /** @type {(inputs: Profile_Tier_FortressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fortaleza`)
};

const ru_profile_tier_fortress = /** @type {(inputs: Profile_Tier_FortressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Крепость`)
};

const sv_profile_tier_fortress = /** @type {(inputs: Profile_Tier_FortressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fästning`)
};

const tr_profile_tier_fortress = /** @type {(inputs: Profile_Tier_FortressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kale`)
};

const zh_profile_tier_fortress = /** @type {(inputs: Profile_Tier_FortressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`堡垒`)
};

const ja_profile_tier_fortress = /** @type {(inputs: Profile_Tier_FortressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`要塞`)
};

/**
* | output |
* | --- |
* | "Fortress" |
*
* @param {Profile_Tier_FortressInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_tier_fortress = /** @type {((inputs?: Profile_Tier_FortressInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Tier_FortressInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_tier_fortress(inputs)
	if (locale === "de") return de_profile_tier_fortress(inputs)
	if (locale === "fr") return fr_profile_tier_fortress(inputs)
	if (locale === "it") return it_profile_tier_fortress(inputs)
	if (locale === "nl") return nl_profile_tier_fortress(inputs)
	if (locale === "pl") return pl_profile_tier_fortress(inputs)
	if (locale === "pt") return pt_profile_tier_fortress(inputs)
	if (locale === "ru") return ru_profile_tier_fortress(inputs)
	if (locale === "sv") return sv_profile_tier_fortress(inputs)
	if (locale === "tr") return tr_profile_tier_fortress(inputs)
	if (locale === "zh") return zh_profile_tier_fortress(inputs)
	if (locale === "ja") return ja_profile_tier_fortress(inputs)
	return en_profile_tier_fortress(inputs)
});
