/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_Badge_Name_Voice_Of_The_IslandInputs */

const en_signals_badge_name_voice_of_the_island = /** @type {(inputs: Signals_Badge_Name_Voice_Of_The_IslandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voice of the Island`)
};

const es_signals_badge_name_voice_of_the_island = /** @type {(inputs: Signals_Badge_Name_Voice_Of_The_IslandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voz de la isla`)
};

const de_signals_badge_name_voice_of_the_island = /** @type {(inputs: Signals_Badge_Name_Voice_Of_The_IslandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stimme der Insel`)
};

const fr_signals_badge_name_voice_of_the_island = /** @type {(inputs: Signals_Badge_Name_Voice_Of_The_IslandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voix de l’île`)
};

const it_signals_badge_name_voice_of_the_island = /** @type {(inputs: Signals_Badge_Name_Voice_Of_The_IslandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voce dell’isola`)
};

const nl_signals_badge_name_voice_of_the_island = /** @type {(inputs: Signals_Badge_Name_Voice_Of_The_IslandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stem van het eiland`)
};

const pl_signals_badge_name_voice_of_the_island = /** @type {(inputs: Signals_Badge_Name_Voice_Of_The_IslandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Głos wyspy`)
};

const pt_signals_badge_name_voice_of_the_island = /** @type {(inputs: Signals_Badge_Name_Voice_Of_The_IslandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voz da ilha`)
};

const ru_signals_badge_name_voice_of_the_island = /** @type {(inputs: Signals_Badge_Name_Voice_Of_The_IslandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Голос острова`)
};

const sv_signals_badge_name_voice_of_the_island = /** @type {(inputs: Signals_Badge_Name_Voice_Of_The_IslandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öns röst`)
};

const tr_signals_badge_name_voice_of_the_island = /** @type {(inputs: Signals_Badge_Name_Voice_Of_The_IslandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adanın Sesi`)
};

const zh_signals_badge_name_voice_of_the_island = /** @type {(inputs: Signals_Badge_Name_Voice_Of_The_IslandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`小岛之声`)
};

const ja_signals_badge_name_voice_of_the_island = /** @type {(inputs: Signals_Badge_Name_Voice_Of_The_IslandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`島の声`)
};

/**
* | output |
* | --- |
* | "Voice of the Island" |
*
* @param {Signals_Badge_Name_Voice_Of_The_IslandInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_badge_name_voice_of_the_island = /** @type {((inputs?: Signals_Badge_Name_Voice_Of_The_IslandInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Badge_Name_Voice_Of_The_IslandInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_badge_name_voice_of_the_island(inputs)
	if (locale === "de") return de_signals_badge_name_voice_of_the_island(inputs)
	if (locale === "fr") return fr_signals_badge_name_voice_of_the_island(inputs)
	if (locale === "it") return it_signals_badge_name_voice_of_the_island(inputs)
	if (locale === "nl") return nl_signals_badge_name_voice_of_the_island(inputs)
	if (locale === "pl") return pl_signals_badge_name_voice_of_the_island(inputs)
	if (locale === "pt") return pt_signals_badge_name_voice_of_the_island(inputs)
	if (locale === "ru") return ru_signals_badge_name_voice_of_the_island(inputs)
	if (locale === "sv") return sv_signals_badge_name_voice_of_the_island(inputs)
	if (locale === "tr") return tr_signals_badge_name_voice_of_the_island(inputs)
	if (locale === "zh") return zh_signals_badge_name_voice_of_the_island(inputs)
	if (locale === "ja") return ja_signals_badge_name_voice_of_the_island(inputs)
	return en_signals_badge_name_voice_of_the_island(inputs)
});
