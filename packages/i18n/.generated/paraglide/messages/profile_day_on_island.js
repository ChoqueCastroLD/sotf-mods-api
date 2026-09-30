/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ day: NonNullable<unknown> }} Profile_Day_On_IslandInputs */

const en_profile_day_on_island = /** @type {(inputs: Profile_Day_On_IslandInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Day ${i?.day} on the island`)
};

const es_profile_day_on_island = /** @type {(inputs: Profile_Day_On_IslandInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Día ${i?.day} en la isla`)
};

const de_profile_day_on_island = /** @type {(inputs: Profile_Day_On_IslandInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tag ${i?.day} auf der Insel`)
};

const fr_profile_day_on_island = /** @type {(inputs: Profile_Day_On_IslandInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Jour ${i?.day} sur l’île`)
};

const it_profile_day_on_island = /** @type {(inputs: Profile_Day_On_IslandInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Giorno ${i?.day} sull’isola`)
};

const nl_profile_day_on_island = /** @type {(inputs: Profile_Day_On_IslandInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dag ${i?.day} op het eiland`)
};

const pl_profile_day_on_island = /** @type {(inputs: Profile_Day_On_IslandInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dzień ${i?.day} na wyspie`)
};

const pt_profile_day_on_island = /** @type {(inputs: Profile_Day_On_IslandInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dia ${i?.day} na ilha`)
};

const ru_profile_day_on_island = /** @type {(inputs: Profile_Day_On_IslandInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`День ${i?.day} на острове`)
};

const sv_profile_day_on_island = /** @type {(inputs: Profile_Day_On_IslandInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dag ${i?.day} på ön`)
};

const tr_profile_day_on_island = /** @type {(inputs: Profile_Day_On_IslandInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Adada ${i?.day}. gün`)
};

const zh_profile_day_on_island = /** @type {(inputs: Profile_Day_On_IslandInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`登岛第 ${i?.day} 天`)
};

const ja_profile_day_on_island = /** @type {(inputs: Profile_Day_On_IslandInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`島での ${i?.day} 日目`)
};

/**
* | output |
* | --- |
* | "Day {day} on the island" |
*
* @param {Profile_Day_On_IslandInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_day_on_island = /** @type {((inputs: Profile_Day_On_IslandInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Day_On_IslandInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_day_on_island(inputs)
	if (locale === "de") return de_profile_day_on_island(inputs)
	if (locale === "fr") return fr_profile_day_on_island(inputs)
	if (locale === "it") return it_profile_day_on_island(inputs)
	if (locale === "nl") return nl_profile_day_on_island(inputs)
	if (locale === "pl") return pl_profile_day_on_island(inputs)
	if (locale === "pt") return pt_profile_day_on_island(inputs)
	if (locale === "ru") return ru_profile_day_on_island(inputs)
	if (locale === "sv") return sv_profile_day_on_island(inputs)
	if (locale === "tr") return tr_profile_day_on_island(inputs)
	if (locale === "zh") return zh_profile_day_on_island(inputs)
	if (locale === "ja") return ja_profile_day_on_island(inputs)
	return en_profile_day_on_island(inputs)
});
