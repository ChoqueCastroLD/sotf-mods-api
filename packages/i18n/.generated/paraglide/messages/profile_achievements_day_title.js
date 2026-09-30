/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Achievements_Day_TitleInputs */

const en_profile_achievements_day_title = /** @type {(inputs: Profile_Achievements_Day_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Day N on the island`)
};

const es_profile_achievements_day_title = /** @type {(inputs: Profile_Achievements_Day_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Día N en la isla`)
};

const de_profile_achievements_day_title = /** @type {(inputs: Profile_Achievements_Day_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tag N auf der Insel`)
};

const fr_profile_achievements_day_title = /** @type {(inputs: Profile_Achievements_Day_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jour N sur l’île`)
};

const it_profile_achievements_day_title = /** @type {(inputs: Profile_Achievements_Day_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Giorno N sull’isola`)
};

const nl_profile_achievements_day_title = /** @type {(inputs: Profile_Achievements_Day_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dag N op het eiland`)
};

const pl_profile_achievements_day_title = /** @type {(inputs: Profile_Achievements_Day_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dzień N na wyspie`)
};

const pt_profile_achievements_day_title = /** @type {(inputs: Profile_Achievements_Day_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dia N na ilha`)
};

const ru_profile_achievements_day_title = /** @type {(inputs: Profile_Achievements_Day_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`День N на острове`)
};

const sv_profile_achievements_day_title = /** @type {(inputs: Profile_Achievements_Day_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dag N på ön`)
};

const tr_profile_achievements_day_title = /** @type {(inputs: Profile_Achievements_Day_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adada N. gün`)
};

const zh_profile_achievements_day_title = /** @type {(inputs: Profile_Achievements_Day_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`登岛第 N 天`)
};

const ja_profile_achievements_day_title = /** @type {(inputs: Profile_Achievements_Day_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`島での N 日目`)
};

/**
* | output |
* | --- |
* | "Day N on the island" |
*
* @param {Profile_Achievements_Day_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_achievements_day_title = /** @type {((inputs?: Profile_Achievements_Day_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Achievements_Day_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_achievements_day_title(inputs)
	if (locale === "de") return de_profile_achievements_day_title(inputs)
	if (locale === "fr") return fr_profile_achievements_day_title(inputs)
	if (locale === "it") return it_profile_achievements_day_title(inputs)
	if (locale === "nl") return nl_profile_achievements_day_title(inputs)
	if (locale === "pl") return pl_profile_achievements_day_title(inputs)
	if (locale === "pt") return pt_profile_achievements_day_title(inputs)
	if (locale === "ru") return ru_profile_achievements_day_title(inputs)
	if (locale === "sv") return sv_profile_achievements_day_title(inputs)
	if (locale === "tr") return tr_profile_achievements_day_title(inputs)
	if (locale === "zh") return zh_profile_achievements_day_title(inputs)
	if (locale === "ja") return ja_profile_achievements_day_title(inputs)
	return en_profile_achievements_day_title(inputs)
});
