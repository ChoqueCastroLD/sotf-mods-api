/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Rank_CastawayInputs */

const en_profile_rank_castaway = /** @type {(inputs: Profile_Rank_CastawayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Castaway`)
};

const es_profile_rank_castaway = /** @type {(inputs: Profile_Rank_CastawayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Náufrago`)
};

const de_profile_rank_castaway = /** @type {(inputs: Profile_Rank_CastawayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schiffbrüchiger`)
};

const fr_profile_rank_castaway = /** @type {(inputs: Profile_Rank_CastawayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Naufragé`)
};

const it_profile_rank_castaway = /** @type {(inputs: Profile_Rank_CastawayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Naufrago`)
};

const nl_profile_rank_castaway = /** @type {(inputs: Profile_Rank_CastawayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schipbreukeling`)
};

const pl_profile_rank_castaway = /** @type {(inputs: Profile_Rank_CastawayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rozbitek`)
};

const pt_profile_rank_castaway = /** @type {(inputs: Profile_Rank_CastawayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Náufrago`)
};

const ru_profile_rank_castaway = /** @type {(inputs: Profile_Rank_CastawayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Потерпевший крушение`)
};

const sv_profile_rank_castaway = /** @type {(inputs: Profile_Rank_CastawayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skeppsbruten`)
};

const tr_profile_rank_castaway = /** @type {(inputs: Profile_Rank_CastawayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kazazede`)
};

const zh_profile_rank_castaway = /** @type {(inputs: Profile_Rank_CastawayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`遇难者`)
};

const ja_profile_rank_castaway = /** @type {(inputs: Profile_Rank_CastawayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`漂流者`)
};

/**
* | output |
* | --- |
* | "Castaway" |
*
* @param {Profile_Rank_CastawayInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_rank_castaway = /** @type {((inputs?: Profile_Rank_CastawayInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Rank_CastawayInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_rank_castaway(inputs)
	if (locale === "de") return de_profile_rank_castaway(inputs)
	if (locale === "fr") return fr_profile_rank_castaway(inputs)
	if (locale === "it") return it_profile_rank_castaway(inputs)
	if (locale === "nl") return nl_profile_rank_castaway(inputs)
	if (locale === "pl") return pl_profile_rank_castaway(inputs)
	if (locale === "pt") return pt_profile_rank_castaway(inputs)
	if (locale === "ru") return ru_profile_rank_castaway(inputs)
	if (locale === "sv") return sv_profile_rank_castaway(inputs)
	if (locale === "tr") return tr_profile_rank_castaway(inputs)
	if (locale === "zh") return zh_profile_rank_castaway(inputs)
	if (locale === "ja") return ja_profile_rank_castaway(inputs)
	return en_profile_rank_castaway(inputs)
});
