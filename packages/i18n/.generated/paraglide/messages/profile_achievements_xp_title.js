/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Achievements_Xp_TitleInputs */

const en_profile_achievements_xp_title = /** @type {(inputs: Profile_Achievements_Xp_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How to earn XP`)
};

const es_profile_achievements_xp_title = /** @type {(inputs: Profile_Achievements_Xp_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cómo ganar XP`)
};

const de_profile_achievements_xp_title = /** @type {(inputs: Profile_Achievements_Xp_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`So verdienst du XP`)
};

const fr_profile_achievements_xp_title = /** @type {(inputs: Profile_Achievements_Xp_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comment gagner de l’XP`)
};

const it_profile_achievements_xp_title = /** @type {(inputs: Profile_Achievements_Xp_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Come guadagnare XP`)
};

const nl_profile_achievements_xp_title = /** @type {(inputs: Profile_Achievements_Xp_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zo verdien je XP`)
};

const pl_profile_achievements_xp_title = /** @type {(inputs: Profile_Achievements_Xp_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jak zdobywać XP`)
};

const pt_profile_achievements_xp_title = /** @type {(inputs: Profile_Achievements_Xp_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Como ganhar XP`)
};

const ru_profile_achievements_xp_title = /** @type {(inputs: Profile_Achievements_Xp_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Как заработать XP`)
};

const sv_profile_achievements_xp_title = /** @type {(inputs: Profile_Achievements_Xp_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Så tjänar du XP`)
};

const tr_profile_achievements_xp_title = /** @type {(inputs: Profile_Achievements_Xp_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`XP nasıl kazanılır`)
};

const zh_profile_achievements_xp_title = /** @type {(inputs: Profile_Achievements_Xp_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`如何获得 XP`)
};

const ja_profile_achievements_xp_title = /** @type {(inputs: Profile_Achievements_Xp_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`XP の獲得方法`)
};

/**
* | output |
* | --- |
* | "How to earn XP" |
*
* @param {Profile_Achievements_Xp_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_achievements_xp_title = /** @type {((inputs?: Profile_Achievements_Xp_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Achievements_Xp_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_achievements_xp_title(inputs)
	if (locale === "de") return de_profile_achievements_xp_title(inputs)
	if (locale === "fr") return fr_profile_achievements_xp_title(inputs)
	if (locale === "it") return it_profile_achievements_xp_title(inputs)
	if (locale === "nl") return nl_profile_achievements_xp_title(inputs)
	if (locale === "pl") return pl_profile_achievements_xp_title(inputs)
	if (locale === "pt") return pt_profile_achievements_xp_title(inputs)
	if (locale === "ru") return ru_profile_achievements_xp_title(inputs)
	if (locale === "sv") return sv_profile_achievements_xp_title(inputs)
	if (locale === "tr") return tr_profile_achievements_xp_title(inputs)
	if (locale === "zh") return zh_profile_achievements_xp_title(inputs)
	if (locale === "ja") return ja_profile_achievements_xp_title(inputs)
	return en_profile_achievements_xp_title(inputs)
});
