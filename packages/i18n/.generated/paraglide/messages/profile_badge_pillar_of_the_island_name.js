/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Badge_Pillar_Of_The_Island_NameInputs */

const en_profile_badge_pillar_of_the_island_name = /** @type {(inputs: Profile_Badge_Pillar_Of_The_Island_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pillar of the Island`)
};

const es_profile_badge_pillar_of_the_island_name = /** @type {(inputs: Profile_Badge_Pillar_Of_The_Island_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pilar de la isla`)
};

const de_profile_badge_pillar_of_the_island_name = /** @type {(inputs: Profile_Badge_Pillar_Of_The_Island_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Säule der Insel`)
};

const fr_profile_badge_pillar_of_the_island_name = /** @type {(inputs: Profile_Badge_Pillar_Of_The_Island_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pilier de l’île`)
};

const it_profile_badge_pillar_of_the_island_name = /** @type {(inputs: Profile_Badge_Pillar_Of_The_Island_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pilastro dell’isola`)
};

const nl_profile_badge_pillar_of_the_island_name = /** @type {(inputs: Profile_Badge_Pillar_Of_The_Island_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pijler van het eiland`)
};

const pl_profile_badge_pillar_of_the_island_name = /** @type {(inputs: Profile_Badge_Pillar_Of_The_Island_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filar wyspy`)
};

const pt_profile_badge_pillar_of_the_island_name = /** @type {(inputs: Profile_Badge_Pillar_Of_The_Island_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pilar da ilha`)
};

const ru_profile_badge_pillar_of_the_island_name = /** @type {(inputs: Profile_Badge_Pillar_Of_The_Island_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Опора острова`)
};

const sv_profile_badge_pillar_of_the_island_name = /** @type {(inputs: Profile_Badge_Pillar_Of_The_Island_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öns pelare`)
};

const tr_profile_badge_pillar_of_the_island_name = /** @type {(inputs: Profile_Badge_Pillar_Of_The_Island_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adanın Direği`)
};

const zh_profile_badge_pillar_of_the_island_name = /** @type {(inputs: Profile_Badge_Pillar_Of_The_Island_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`小岛支柱`)
};

const ja_profile_badge_pillar_of_the_island_name = /** @type {(inputs: Profile_Badge_Pillar_Of_The_Island_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`島の柱`)
};

/**
* | output |
* | --- |
* | "Pillar of the Island" |
*
* @param {Profile_Badge_Pillar_Of_The_Island_NameInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_badge_pillar_of_the_island_name = /** @type {((inputs?: Profile_Badge_Pillar_Of_The_Island_NameInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_Pillar_Of_The_Island_NameInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_badge_pillar_of_the_island_name(inputs)
	if (locale === "de") return de_profile_badge_pillar_of_the_island_name(inputs)
	if (locale === "fr") return fr_profile_badge_pillar_of_the_island_name(inputs)
	if (locale === "it") return it_profile_badge_pillar_of_the_island_name(inputs)
	if (locale === "nl") return nl_profile_badge_pillar_of_the_island_name(inputs)
	if (locale === "pl") return pl_profile_badge_pillar_of_the_island_name(inputs)
	if (locale === "pt") return pt_profile_badge_pillar_of_the_island_name(inputs)
	if (locale === "ru") return ru_profile_badge_pillar_of_the_island_name(inputs)
	if (locale === "sv") return sv_profile_badge_pillar_of_the_island_name(inputs)
	if (locale === "tr") return tr_profile_badge_pillar_of_the_island_name(inputs)
	if (locale === "zh") return zh_profile_badge_pillar_of_the_island_name(inputs)
	if (locale === "ja") return ja_profile_badge_pillar_of_the_island_name(inputs)
	return en_profile_badge_pillar_of_the_island_name(inputs)
});
