/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Rank_ScavengerInputs */

const en_profile_rank_scavenger = /** @type {(inputs: Profile_Rank_ScavengerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scavenger`)
};

const es_profile_rank_scavenger = /** @type {(inputs: Profile_Rank_ScavengerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Carroñero`)
};

const de_profile_rank_scavenger = /** @type {(inputs: Profile_Rank_ScavengerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plünderer`)
};

const fr_profile_rank_scavenger = /** @type {(inputs: Profile_Rank_ScavengerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pillard`)
};

const it_profile_rank_scavenger = /** @type {(inputs: Profile_Rank_ScavengerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Razziatore`)
};

const nl_profile_rank_scavenger = /** @type {(inputs: Profile_Rank_ScavengerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aaseter`)
};

const pl_profile_rank_scavenger = /** @type {(inputs: Profile_Rank_ScavengerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szabrownik`)
};

const pt_profile_rank_scavenger = /** @type {(inputs: Profile_Rank_ScavengerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Catador`)
};

const ru_profile_rank_scavenger = /** @type {(inputs: Profile_Rank_ScavengerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Мародёр`)
};

const sv_profile_rank_scavenger = /** @type {(inputs: Profile_Rank_ScavengerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Asätare`)
};

const tr_profile_rank_scavenger = /** @type {(inputs: Profile_Rank_ScavengerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leşçi`)
};

const zh_profile_rank_scavenger = /** @type {(inputs: Profile_Rank_ScavengerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`拾荒者`)
};

const ja_profile_rank_scavenger = /** @type {(inputs: Profile_Rank_ScavengerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`スカベンジャー`)
};

/**
* | output |
* | --- |
* | "Scavenger" |
*
* @param {Profile_Rank_ScavengerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_rank_scavenger = /** @type {((inputs?: Profile_Rank_ScavengerInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Rank_ScavengerInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_rank_scavenger(inputs)
	if (locale === "de") return de_profile_rank_scavenger(inputs)
	if (locale === "fr") return fr_profile_rank_scavenger(inputs)
	if (locale === "it") return it_profile_rank_scavenger(inputs)
	if (locale === "nl") return nl_profile_rank_scavenger(inputs)
	if (locale === "pl") return pl_profile_rank_scavenger(inputs)
	if (locale === "pt") return pt_profile_rank_scavenger(inputs)
	if (locale === "ru") return ru_profile_rank_scavenger(inputs)
	if (locale === "sv") return sv_profile_rank_scavenger(inputs)
	if (locale === "tr") return tr_profile_rank_scavenger(inputs)
	if (locale === "zh") return zh_profile_rank_scavenger(inputs)
	if (locale === "ja") return ja_profile_rank_scavenger(inputs)
	return en_profile_rank_scavenger(inputs)
});
