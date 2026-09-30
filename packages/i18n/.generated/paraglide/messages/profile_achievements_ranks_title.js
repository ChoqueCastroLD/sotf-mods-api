/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Achievements_Ranks_TitleInputs */

const en_profile_achievements_ranks_title = /** @type {(inputs: Profile_Achievements_Ranks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Survivor ranks`)
};

const es_profile_achievements_ranks_title = /** @type {(inputs: Profile_Achievements_Ranks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rangos de superviviente`)
};

const de_profile_achievements_ranks_title = /** @type {(inputs: Profile_Achievements_Ranks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Überlebenden-Ränge`)
};

const fr_profile_achievements_ranks_title = /** @type {(inputs: Profile_Achievements_Ranks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rangs de survivant`)
};

const it_profile_achievements_ranks_title = /** @type {(inputs: Profile_Achievements_Ranks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gradi di sopravvissuto`)
};

const nl_profile_achievements_ranks_title = /** @type {(inputs: Profile_Achievements_Ranks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Overlevingsrangen`)
};

const pl_profile_achievements_ranks_title = /** @type {(inputs: Profile_Achievements_Ranks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rangi ocalałych`)
};

const pt_profile_achievements_ranks_title = /** @type {(inputs: Profile_Achievements_Ranks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patentes de sobrevivente`)
};

const ru_profile_achievements_ranks_title = /** @type {(inputs: Profile_Achievements_Ranks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ранги выживших`)
};

const sv_profile_achievements_ranks_title = /** @type {(inputs: Profile_Achievements_Ranks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Överlevarranger`)
};

const tr_profile_achievements_ranks_title = /** @type {(inputs: Profile_Achievements_Ranks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hayatta kalan rütbeleri`)
};

const zh_profile_achievements_ranks_title = /** @type {(inputs: Profile_Achievements_Ranks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`幸存者等级`)
};

const ja_profile_achievements_ranks_title = /** @type {(inputs: Profile_Achievements_Ranks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`サバイバーランク`)
};

/**
* | output |
* | --- |
* | "Survivor ranks" |
*
* @param {Profile_Achievements_Ranks_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_achievements_ranks_title = /** @type {((inputs?: Profile_Achievements_Ranks_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Achievements_Ranks_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_achievements_ranks_title(inputs)
	if (locale === "de") return de_profile_achievements_ranks_title(inputs)
	if (locale === "fr") return fr_profile_achievements_ranks_title(inputs)
	if (locale === "it") return it_profile_achievements_ranks_title(inputs)
	if (locale === "nl") return nl_profile_achievements_ranks_title(inputs)
	if (locale === "pl") return pl_profile_achievements_ranks_title(inputs)
	if (locale === "pt") return pt_profile_achievements_ranks_title(inputs)
	if (locale === "ru") return ru_profile_achievements_ranks_title(inputs)
	if (locale === "sv") return sv_profile_achievements_ranks_title(inputs)
	if (locale === "tr") return tr_profile_achievements_ranks_title(inputs)
	if (locale === "zh") return zh_profile_achievements_ranks_title(inputs)
	if (locale === "ja") return ja_profile_achievements_ranks_title(inputs)
	return en_profile_achievements_ranks_title(inputs)
});
