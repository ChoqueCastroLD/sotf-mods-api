/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Achievements_Xp_LimitInputs */

const en_profile_achievements_xp_limit = /** @type {(inputs: Profile_Achievements_Xp_LimitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Limit`)
};

const es_profile_achievements_xp_limit = /** @type {(inputs: Profile_Achievements_Xp_LimitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Límite`)
};

const de_profile_achievements_xp_limit = /** @type {(inputs: Profile_Achievements_Xp_LimitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Limit`)
};

const fr_profile_achievements_xp_limit = /** @type {(inputs: Profile_Achievements_Xp_LimitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Limite`)
};

const it_profile_achievements_xp_limit = /** @type {(inputs: Profile_Achievements_Xp_LimitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Limite`)
};

const nl_profile_achievements_xp_limit = /** @type {(inputs: Profile_Achievements_Xp_LimitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Limiet`)
};

const pl_profile_achievements_xp_limit = /** @type {(inputs: Profile_Achievements_Xp_LimitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Limit`)
};

const pt_profile_achievements_xp_limit = /** @type {(inputs: Profile_Achievements_Xp_LimitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Limite`)
};

const ru_profile_achievements_xp_limit = /** @type {(inputs: Profile_Achievements_Xp_LimitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Лимит`)
};

const sv_profile_achievements_xp_limit = /** @type {(inputs: Profile_Achievements_Xp_LimitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gräns`)
};

const tr_profile_achievements_xp_limit = /** @type {(inputs: Profile_Achievements_Xp_LimitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sınır`)
};

const zh_profile_achievements_xp_limit = /** @type {(inputs: Profile_Achievements_Xp_LimitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上限`)
};

const ja_profile_achievements_xp_limit = /** @type {(inputs: Profile_Achievements_Xp_LimitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上限`)
};

/**
* | output |
* | --- |
* | "Limit" |
*
* @param {Profile_Achievements_Xp_LimitInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_achievements_xp_limit = /** @type {((inputs?: Profile_Achievements_Xp_LimitInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Achievements_Xp_LimitInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_achievements_xp_limit(inputs)
	if (locale === "de") return de_profile_achievements_xp_limit(inputs)
	if (locale === "fr") return fr_profile_achievements_xp_limit(inputs)
	if (locale === "it") return it_profile_achievements_xp_limit(inputs)
	if (locale === "nl") return nl_profile_achievements_xp_limit(inputs)
	if (locale === "pl") return pl_profile_achievements_xp_limit(inputs)
	if (locale === "pt") return pt_profile_achievements_xp_limit(inputs)
	if (locale === "ru") return ru_profile_achievements_xp_limit(inputs)
	if (locale === "sv") return sv_profile_achievements_xp_limit(inputs)
	if (locale === "tr") return tr_profile_achievements_xp_limit(inputs)
	if (locale === "zh") return zh_profile_achievements_xp_limit(inputs)
	if (locale === "ja") return ja_profile_achievements_xp_limit(inputs)
	return en_profile_achievements_xp_limit(inputs)
});
