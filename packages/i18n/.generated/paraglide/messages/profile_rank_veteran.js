/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Rank_VeteranInputs */

const en_profile_rank_veteran = /** @type {(inputs: Profile_Rank_VeteranInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veteran`)
};

const es_profile_rank_veteran = /** @type {(inputs: Profile_Rank_VeteranInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veterano`)
};

const de_profile_rank_veteran = /** @type {(inputs: Profile_Rank_VeteranInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veteran`)
};

const fr_profile_rank_veteran = /** @type {(inputs: Profile_Rank_VeteranInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vétéran`)
};

const it_profile_rank_veteran = /** @type {(inputs: Profile_Rank_VeteranInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veterano`)
};

const nl_profile_rank_veteran = /** @type {(inputs: Profile_Rank_VeteranInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veteraan`)
};

const pl_profile_rank_veteran = /** @type {(inputs: Profile_Rank_VeteranInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Weteran`)
};

const pt_profile_rank_veteran = /** @type {(inputs: Profile_Rank_VeteranInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veterano`)
};

const ru_profile_rank_veteran = /** @type {(inputs: Profile_Rank_VeteranInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ветеран`)
};

const sv_profile_rank_veteran = /** @type {(inputs: Profile_Rank_VeteranInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veteran`)
};

const tr_profile_rank_veteran = /** @type {(inputs: Profile_Rank_VeteranInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kıdemli`)
};

const zh_profile_rank_veteran = /** @type {(inputs: Profile_Rank_VeteranInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`老手`)
};

const ja_profile_rank_veteran = /** @type {(inputs: Profile_Rank_VeteranInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ベテラン`)
};

/**
* | output |
* | --- |
* | "Veteran" |
*
* @param {Profile_Rank_VeteranInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_rank_veteran = /** @type {((inputs?: Profile_Rank_VeteranInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Rank_VeteranInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_rank_veteran(inputs)
	if (locale === "de") return de_profile_rank_veteran(inputs)
	if (locale === "fr") return fr_profile_rank_veteran(inputs)
	if (locale === "it") return it_profile_rank_veteran(inputs)
	if (locale === "nl") return nl_profile_rank_veteran(inputs)
	if (locale === "pl") return pl_profile_rank_veteran(inputs)
	if (locale === "pt") return pt_profile_rank_veteran(inputs)
	if (locale === "ru") return ru_profile_rank_veteran(inputs)
	if (locale === "sv") return sv_profile_rank_veteran(inputs)
	if (locale === "tr") return tr_profile_rank_veteran(inputs)
	if (locale === "zh") return zh_profile_rank_veteran(inputs)
	if (locale === "ja") return ja_profile_rank_veteran(inputs)
	return en_profile_rank_veteran(inputs)
});
