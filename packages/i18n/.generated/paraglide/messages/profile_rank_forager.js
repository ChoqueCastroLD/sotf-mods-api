/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Rank_ForagerInputs */

const en_profile_rank_forager = /** @type {(inputs: Profile_Rank_ForagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Forager`)
};

const es_profile_rank_forager = /** @type {(inputs: Profile_Rank_ForagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recolector`)
};

const de_profile_rank_forager = /** @type {(inputs: Profile_Rank_ForagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sammler`)
};

const fr_profile_rank_forager = /** @type {(inputs: Profile_Rank_ForagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cueilleur`)
};

const it_profile_rank_forager = /** @type {(inputs: Profile_Rank_ForagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Raccoglitore`)
};

const nl_profile_rank_forager = /** @type {(inputs: Profile_Rank_ForagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verzamelaar`)
};

const pl_profile_rank_forager = /** @type {(inputs: Profile_Rank_ForagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zbieracz`)
};

const pt_profile_rank_forager = /** @type {(inputs: Profile_Rank_ForagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Coletor`)
};

const ru_profile_rank_forager = /** @type {(inputs: Profile_Rank_ForagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Собиратель`)
};

const sv_profile_rank_forager = /** @type {(inputs: Profile_Rank_ForagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Samlare`)
};

const tr_profile_rank_forager = /** @type {(inputs: Profile_Rank_ForagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toplayıcı`)
};

const zh_profile_rank_forager = /** @type {(inputs: Profile_Rank_ForagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`采集者`)
};

const ja_profile_rank_forager = /** @type {(inputs: Profile_Rank_ForagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`採集者`)
};

/**
* | output |
* | --- |
* | "Forager" |
*
* @param {Profile_Rank_ForagerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_rank_forager = /** @type {((inputs?: Profile_Rank_ForagerInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Rank_ForagerInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_rank_forager(inputs)
	if (locale === "de") return de_profile_rank_forager(inputs)
	if (locale === "fr") return fr_profile_rank_forager(inputs)
	if (locale === "it") return it_profile_rank_forager(inputs)
	if (locale === "nl") return nl_profile_rank_forager(inputs)
	if (locale === "pl") return pl_profile_rank_forager(inputs)
	if (locale === "pt") return pt_profile_rank_forager(inputs)
	if (locale === "ru") return ru_profile_rank_forager(inputs)
	if (locale === "sv") return sv_profile_rank_forager(inputs)
	if (locale === "tr") return tr_profile_rank_forager(inputs)
	if (locale === "zh") return zh_profile_rank_forager(inputs)
	if (locale === "ja") return ja_profile_rank_forager(inputs)
	return en_profile_rank_forager(inputs)
});
