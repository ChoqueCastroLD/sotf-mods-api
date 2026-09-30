/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Xp_Limit_NoneInputs */

const en_profile_xp_limit_none = /** @type {(inputs: Profile_Xp_Limit_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No limit`)
};

const es_profile_xp_limit_none = /** @type {(inputs: Profile_Xp_Limit_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin límite`)
};

const de_profile_xp_limit_none = /** @type {(inputs: Profile_Xp_Limit_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unbegrenzt`)
};

const fr_profile_xp_limit_none = /** @type {(inputs: Profile_Xp_Limit_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sans limite`)
};

const it_profile_xp_limit_none = /** @type {(inputs: Profile_Xp_Limit_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessun limite`)
};

const nl_profile_xp_limit_none = /** @type {(inputs: Profile_Xp_Limit_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen limiet`)
};

const pl_profile_xp_limit_none = /** @type {(inputs: Profile_Xp_Limit_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bez limitu`)
};

const pt_profile_xp_limit_none = /** @type {(inputs: Profile_Xp_Limit_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sem limite`)
};

const ru_profile_xp_limit_none = /** @type {(inputs: Profile_Xp_Limit_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Без лимита`)
};

const sv_profile_xp_limit_none = /** @type {(inputs: Profile_Xp_Limit_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingen gräns`)
};

const tr_profile_xp_limit_none = /** @type {(inputs: Profile_Xp_Limit_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sınırsız`)
};

const zh_profile_xp_limit_none = /** @type {(inputs: Profile_Xp_Limit_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无上限`)
};

const ja_profile_xp_limit_none = /** @type {(inputs: Profile_Xp_Limit_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上限なし`)
};

/**
* | output |
* | --- |
* | "No limit" |
*
* @param {Profile_Xp_Limit_NoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_xp_limit_none = /** @type {((inputs?: Profile_Xp_Limit_NoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Xp_Limit_NoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_xp_limit_none(inputs)
	if (locale === "de") return de_profile_xp_limit_none(inputs)
	if (locale === "fr") return fr_profile_xp_limit_none(inputs)
	if (locale === "it") return it_profile_xp_limit_none(inputs)
	if (locale === "nl") return nl_profile_xp_limit_none(inputs)
	if (locale === "pl") return pl_profile_xp_limit_none(inputs)
	if (locale === "pt") return pt_profile_xp_limit_none(inputs)
	if (locale === "ru") return ru_profile_xp_limit_none(inputs)
	if (locale === "sv") return sv_profile_xp_limit_none(inputs)
	if (locale === "tr") return tr_profile_xp_limit_none(inputs)
	if (locale === "zh") return zh_profile_xp_limit_none(inputs)
	if (locale === "ja") return ja_profile_xp_limit_none(inputs)
	return en_profile_xp_limit_none(inputs)
});
