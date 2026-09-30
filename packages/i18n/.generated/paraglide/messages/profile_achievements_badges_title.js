/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Achievements_Badges_TitleInputs */

const en_profile_achievements_badges_title = /** @type {(inputs: Profile_Achievements_Badges_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Badges`)
};

const es_profile_achievements_badges_title = /** @type {(inputs: Profile_Achievements_Badges_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Insignias`)
};

const de_profile_achievements_badges_title = /** @type {(inputs: Profile_Achievements_Badges_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abzeichen`)
};

const fr_profile_achievements_badges_title = /** @type {(inputs: Profile_Achievements_Badges_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Badges`)
};

const it_profile_achievements_badges_title = /** @type {(inputs: Profile_Achievements_Badges_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Distintivi`)
};

const nl_profile_achievements_badges_title = /** @type {(inputs: Profile_Achievements_Badges_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Badges`)
};

const pl_profile_achievements_badges_title = /** @type {(inputs: Profile_Achievements_Badges_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odznaki`)
};

const pt_profile_achievements_badges_title = /** @type {(inputs: Profile_Achievements_Badges_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Insígnias`)
};

const ru_profile_achievements_badges_title = /** @type {(inputs: Profile_Achievements_Badges_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Значки`)
};

const sv_profile_achievements_badges_title = /** @type {(inputs: Profile_Achievements_Badges_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Märken`)
};

const tr_profile_achievements_badges_title = /** @type {(inputs: Profile_Achievements_Badges_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rozetler`)
};

const zh_profile_achievements_badges_title = /** @type {(inputs: Profile_Achievements_Badges_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`徽章`)
};

const ja_profile_achievements_badges_title = /** @type {(inputs: Profile_Achievements_Badges_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バッジ`)
};

/**
* | output |
* | --- |
* | "Badges" |
*
* @param {Profile_Achievements_Badges_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_achievements_badges_title = /** @type {((inputs?: Profile_Achievements_Badges_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Achievements_Badges_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_achievements_badges_title(inputs)
	if (locale === "de") return de_profile_achievements_badges_title(inputs)
	if (locale === "fr") return fr_profile_achievements_badges_title(inputs)
	if (locale === "it") return it_profile_achievements_badges_title(inputs)
	if (locale === "nl") return nl_profile_achievements_badges_title(inputs)
	if (locale === "pl") return pl_profile_achievements_badges_title(inputs)
	if (locale === "pt") return pt_profile_achievements_badges_title(inputs)
	if (locale === "ru") return ru_profile_achievements_badges_title(inputs)
	if (locale === "sv") return sv_profile_achievements_badges_title(inputs)
	if (locale === "tr") return tr_profile_achievements_badges_title(inputs)
	if (locale === "zh") return zh_profile_achievements_badges_title(inputs)
	if (locale === "ja") return ja_profile_achievements_badges_title(inputs)
	return en_profile_achievements_badges_title(inputs)
});
