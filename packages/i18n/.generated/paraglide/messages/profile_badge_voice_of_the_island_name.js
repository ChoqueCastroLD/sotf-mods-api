/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Badge_Voice_Of_The_Island_NameInputs */

const en_profile_badge_voice_of_the_island_name = /** @type {(inputs: Profile_Badge_Voice_Of_The_Island_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voice of the Island`)
};

const es_profile_badge_voice_of_the_island_name = /** @type {(inputs: Profile_Badge_Voice_Of_The_Island_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voz de la isla`)
};

const de_profile_badge_voice_of_the_island_name = /** @type {(inputs: Profile_Badge_Voice_Of_The_Island_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stimme der Insel`)
};

const fr_profile_badge_voice_of_the_island_name = /** @type {(inputs: Profile_Badge_Voice_Of_The_Island_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voix de l’île`)
};

const it_profile_badge_voice_of_the_island_name = /** @type {(inputs: Profile_Badge_Voice_Of_The_Island_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voce dell’isola`)
};

const nl_profile_badge_voice_of_the_island_name = /** @type {(inputs: Profile_Badge_Voice_Of_The_Island_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stem van het eiland`)
};

const pl_profile_badge_voice_of_the_island_name = /** @type {(inputs: Profile_Badge_Voice_Of_The_Island_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Głos wyspy`)
};

const pt_profile_badge_voice_of_the_island_name = /** @type {(inputs: Profile_Badge_Voice_Of_The_Island_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voz da ilha`)
};

const ru_profile_badge_voice_of_the_island_name = /** @type {(inputs: Profile_Badge_Voice_Of_The_Island_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Голос острова`)
};

const sv_profile_badge_voice_of_the_island_name = /** @type {(inputs: Profile_Badge_Voice_Of_The_Island_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öns röst`)
};

const tr_profile_badge_voice_of_the_island_name = /** @type {(inputs: Profile_Badge_Voice_Of_The_Island_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adanın Sesi`)
};

const zh_profile_badge_voice_of_the_island_name = /** @type {(inputs: Profile_Badge_Voice_Of_The_Island_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`小岛之声`)
};

const ja_profile_badge_voice_of_the_island_name = /** @type {(inputs: Profile_Badge_Voice_Of_The_Island_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`島の声`)
};

/**
* | output |
* | --- |
* | "Voice of the Island" |
*
* @param {Profile_Badge_Voice_Of_The_Island_NameInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_badge_voice_of_the_island_name = /** @type {((inputs?: Profile_Badge_Voice_Of_The_Island_NameInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_Voice_Of_The_Island_NameInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_badge_voice_of_the_island_name(inputs)
	if (locale === "de") return de_profile_badge_voice_of_the_island_name(inputs)
	if (locale === "fr") return fr_profile_badge_voice_of_the_island_name(inputs)
	if (locale === "it") return it_profile_badge_voice_of_the_island_name(inputs)
	if (locale === "nl") return nl_profile_badge_voice_of_the_island_name(inputs)
	if (locale === "pl") return pl_profile_badge_voice_of_the_island_name(inputs)
	if (locale === "pt") return pt_profile_badge_voice_of_the_island_name(inputs)
	if (locale === "ru") return ru_profile_badge_voice_of_the_island_name(inputs)
	if (locale === "sv") return sv_profile_badge_voice_of_the_island_name(inputs)
	if (locale === "tr") return tr_profile_badge_voice_of_the_island_name(inputs)
	if (locale === "zh") return zh_profile_badge_voice_of_the_island_name(inputs)
	if (locale === "ja") return ja_profile_badge_voice_of_the_island_name(inputs)
	return en_profile_badge_voice_of_the_island_name(inputs)
});
