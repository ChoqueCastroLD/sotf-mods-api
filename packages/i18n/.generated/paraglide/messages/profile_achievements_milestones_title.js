/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Achievements_Milestones_TitleInputs */

const en_profile_achievements_milestones_title = /** @type {(inputs: Profile_Achievements_Milestones_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod milestones`)
};

const es_profile_achievements_milestones_title = /** @type {(inputs: Profile_Achievements_Milestones_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hitos de los mods`)
};

const de_profile_achievements_milestones_title = /** @type {(inputs: Profile_Achievements_Milestones_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod-Meilensteine`)
};

const fr_profile_achievements_milestones_title = /** @type {(inputs: Profile_Achievements_Milestones_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jalons des mods`)
};

const it_profile_achievements_milestones_title = /** @type {(inputs: Profile_Achievements_Milestones_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Traguardi delle mod`)
};

const nl_profile_achievements_milestones_title = /** @type {(inputs: Profile_Achievements_Milestones_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modmijlpalen`)
};

const pl_profile_achievements_milestones_title = /** @type {(inputs: Profile_Achievements_Milestones_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kamienie milowe modów`)
};

const pt_profile_achievements_milestones_title = /** @type {(inputs: Profile_Achievements_Milestones_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marcos dos mods`)
};

const ru_profile_achievements_milestones_title = /** @type {(inputs: Profile_Achievements_Milestones_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вехи модов`)
};

const sv_profile_achievements_milestones_title = /** @type {(inputs: Profile_Achievements_Milestones_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moddmilstolpar`)
};

const tr_profile_achievements_milestones_title = /** @type {(inputs: Profile_Achievements_Milestones_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod kilometre taşları`)
};

const zh_profile_achievements_milestones_title = /** @type {(inputs: Profile_Achievements_Milestones_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模组里程碑`)
};

const ja_profile_achievements_milestones_title = /** @type {(inputs: Profile_Achievements_Milestones_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD マイルストーン`)
};

/**
* | output |
* | --- |
* | "Mod milestones" |
*
* @param {Profile_Achievements_Milestones_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_achievements_milestones_title = /** @type {((inputs?: Profile_Achievements_Milestones_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Achievements_Milestones_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_achievements_milestones_title(inputs)
	if (locale === "de") return de_profile_achievements_milestones_title(inputs)
	if (locale === "fr") return fr_profile_achievements_milestones_title(inputs)
	if (locale === "it") return it_profile_achievements_milestones_title(inputs)
	if (locale === "nl") return nl_profile_achievements_milestones_title(inputs)
	if (locale === "pl") return pl_profile_achievements_milestones_title(inputs)
	if (locale === "pt") return pt_profile_achievements_milestones_title(inputs)
	if (locale === "ru") return ru_profile_achievements_milestones_title(inputs)
	if (locale === "sv") return sv_profile_achievements_milestones_title(inputs)
	if (locale === "tr") return tr_profile_achievements_milestones_title(inputs)
	if (locale === "zh") return zh_profile_achievements_milestones_title(inputs)
	if (locale === "ja") return ja_profile_achievements_milestones_title(inputs)
	return en_profile_achievements_milestones_title(inputs)
});
