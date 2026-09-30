/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Rank_TrapperInputs */

const en_profile_rank_trapper = /** @type {(inputs: Profile_Rank_TrapperInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trapper`)
};

const es_profile_rank_trapper = /** @type {(inputs: Profile_Rank_TrapperInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trampero`)
};

const de_profile_rank_trapper = /** @type {(inputs: Profile_Rank_TrapperInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fallensteller`)
};

const fr_profile_rank_trapper = /** @type {(inputs: Profile_Rank_TrapperInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trappeur`)
};

const it_profile_rank_trapper = /** @type {(inputs: Profile_Rank_TrapperInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cacciatore di trappole`)
};

const nl_profile_rank_trapper = /** @type {(inputs: Profile_Rank_TrapperInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Strikzetter`)
};

const pl_profile_rank_trapper = /** @type {(inputs: Profile_Rank_TrapperInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Traper`)
};

const pt_profile_rank_trapper = /** @type {(inputs: Profile_Rank_TrapperInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Caçador`)
};

const ru_profile_rank_trapper = /** @type {(inputs: Profile_Rank_TrapperInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Охотник-ловчий`)
};

const sv_profile_rank_trapper = /** @type {(inputs: Profile_Rank_TrapperInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pälsjägare`)
};

const tr_profile_rank_trapper = /** @type {(inputs: Profile_Rank_TrapperInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tuzakçı`)
};

const zh_profile_rank_trapper = /** @type {(inputs: Profile_Rank_TrapperInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`猎人`)
};

const ja_profile_rank_trapper = /** @type {(inputs: Profile_Rank_TrapperInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`罠師`)
};

/**
* | output |
* | --- |
* | "Trapper" |
*
* @param {Profile_Rank_TrapperInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_rank_trapper = /** @type {((inputs?: Profile_Rank_TrapperInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Rank_TrapperInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_rank_trapper(inputs)
	if (locale === "de") return de_profile_rank_trapper(inputs)
	if (locale === "fr") return fr_profile_rank_trapper(inputs)
	if (locale === "it") return it_profile_rank_trapper(inputs)
	if (locale === "nl") return nl_profile_rank_trapper(inputs)
	if (locale === "pl") return pl_profile_rank_trapper(inputs)
	if (locale === "pt") return pt_profile_rank_trapper(inputs)
	if (locale === "ru") return ru_profile_rank_trapper(inputs)
	if (locale === "sv") return sv_profile_rank_trapper(inputs)
	if (locale === "tr") return tr_profile_rank_trapper(inputs)
	if (locale === "zh") return zh_profile_rank_trapper(inputs)
	if (locale === "ja") return ja_profile_rank_trapper(inputs)
	return en_profile_rank_trapper(inputs)
});
