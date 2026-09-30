/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Xp_Limit_OnceInputs */

const en_profile_xp_limit_once = /** @type {(inputs: Profile_Xp_Limit_OnceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Once`)
};

const es_profile_xp_limit_once = /** @type {(inputs: Profile_Xp_Limit_OnceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Una vez`)
};

const de_profile_xp_limit_once = /** @type {(inputs: Profile_Xp_Limit_OnceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Einmalig`)
};

const fr_profile_xp_limit_once = /** @type {(inputs: Profile_Xp_Limit_OnceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Une fois`)
};

const it_profile_xp_limit_once = /** @type {(inputs: Profile_Xp_Limit_OnceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Una volta`)
};

const nl_profile_xp_limit_once = /** @type {(inputs: Profile_Xp_Limit_OnceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eenmalig`)
};

const pl_profile_xp_limit_once = /** @type {(inputs: Profile_Xp_Limit_OnceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jednorazowo`)
};

const pt_profile_xp_limit_once = /** @type {(inputs: Profile_Xp_Limit_OnceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uma vez`)
};

const ru_profile_xp_limit_once = /** @type {(inputs: Profile_Xp_Limit_OnceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Один раз`)
};

const sv_profile_xp_limit_once = /** @type {(inputs: Profile_Xp_Limit_OnceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En gång`)
};

const tr_profile_xp_limit_once = /** @type {(inputs: Profile_Xp_Limit_OnceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir kez`)
};

const zh_profile_xp_limit_once = /** @type {(inputs: Profile_Xp_Limit_OnceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一次`)
};

const ja_profile_xp_limit_once = /** @type {(inputs: Profile_Xp_Limit_OnceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1 回のみ`)
};

/**
* | output |
* | --- |
* | "Once" |
*
* @param {Profile_Xp_Limit_OnceInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_xp_limit_once = /** @type {((inputs?: Profile_Xp_Limit_OnceInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Xp_Limit_OnceInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_xp_limit_once(inputs)
	if (locale === "de") return de_profile_xp_limit_once(inputs)
	if (locale === "fr") return fr_profile_xp_limit_once(inputs)
	if (locale === "it") return it_profile_xp_limit_once(inputs)
	if (locale === "nl") return nl_profile_xp_limit_once(inputs)
	if (locale === "pl") return pl_profile_xp_limit_once(inputs)
	if (locale === "pt") return pt_profile_xp_limit_once(inputs)
	if (locale === "ru") return ru_profile_xp_limit_once(inputs)
	if (locale === "sv") return sv_profile_xp_limit_once(inputs)
	if (locale === "tr") return tr_profile_xp_limit_once(inputs)
	if (locale === "zh") return zh_profile_xp_limit_once(inputs)
	if (locale === "ja") return ja_profile_xp_limit_once(inputs)
	return en_profile_xp_limit_once(inputs)
});
