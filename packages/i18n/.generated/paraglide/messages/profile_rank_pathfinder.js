/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Rank_PathfinderInputs */

const en_profile_rank_pathfinder = /** @type {(inputs: Profile_Rank_PathfinderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pathfinder`)
};

const es_profile_rank_pathfinder = /** @type {(inputs: Profile_Rank_PathfinderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pionero`)
};

const de_profile_rank_pathfinder = /** @type {(inputs: Profile_Rank_PathfinderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pfadfinder`)
};

const fr_profile_rank_pathfinder = /** @type {(inputs: Profile_Rank_PathfinderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Éclaireur`)
};

const it_profile_rank_pathfinder = /** @type {(inputs: Profile_Rank_PathfinderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pioniere`)
};

const nl_profile_rank_pathfinder = /** @type {(inputs: Profile_Rank_PathfinderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Padvinder`)
};

const pl_profile_rank_pathfinder = /** @type {(inputs: Profile_Rank_PathfinderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tropiciel`)
};

const pt_profile_rank_pathfinder = /** @type {(inputs: Profile_Rank_PathfinderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desbravador`)
};

const ru_profile_rank_pathfinder = /** @type {(inputs: Profile_Rank_PathfinderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Следопыт`)
};

const sv_profile_rank_pathfinder = /** @type {(inputs: Profile_Rank_PathfinderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stigfinnare`)
};

const tr_profile_rank_pathfinder = /** @type {(inputs: Profile_Rank_PathfinderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İzci`)
};

const zh_profile_rank_pathfinder = /** @type {(inputs: Profile_Rank_PathfinderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`开拓者`)
};

const ja_profile_rank_pathfinder = /** @type {(inputs: Profile_Rank_PathfinderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`開拓者`)
};

/**
* | output |
* | --- |
* | "Pathfinder" |
*
* @param {Profile_Rank_PathfinderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_rank_pathfinder = /** @type {((inputs?: Profile_Rank_PathfinderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Rank_PathfinderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_rank_pathfinder(inputs)
	if (locale === "de") return de_profile_rank_pathfinder(inputs)
	if (locale === "fr") return fr_profile_rank_pathfinder(inputs)
	if (locale === "it") return it_profile_rank_pathfinder(inputs)
	if (locale === "nl") return nl_profile_rank_pathfinder(inputs)
	if (locale === "pl") return pl_profile_rank_pathfinder(inputs)
	if (locale === "pt") return pt_profile_rank_pathfinder(inputs)
	if (locale === "ru") return ru_profile_rank_pathfinder(inputs)
	if (locale === "sv") return sv_profile_rank_pathfinder(inputs)
	if (locale === "tr") return tr_profile_rank_pathfinder(inputs)
	if (locale === "zh") return zh_profile_rank_pathfinder(inputs)
	if (locale === "ja") return ja_profile_rank_pathfinder(inputs)
	return en_profile_rank_pathfinder(inputs)
});
