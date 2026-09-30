/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Achievements_Fair_Play_TitleInputs */

const en_profile_achievements_fair_play_title = /** @type {(inputs: Profile_Achievements_Fair_Play_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fair play`)
};

const es_profile_achievements_fair_play_title = /** @type {(inputs: Profile_Achievements_Fair_Play_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Juego limpio`)
};

const de_profile_achievements_fair_play_title = /** @type {(inputs: Profile_Achievements_Fair_Play_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fair Play`)
};

const fr_profile_achievements_fair_play_title = /** @type {(inputs: Profile_Achievements_Fair_Play_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fair-play`)
};

const it_profile_achievements_fair_play_title = /** @type {(inputs: Profile_Achievements_Fair_Play_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fair play`)
};

const nl_profile_achievements_fair_play_title = /** @type {(inputs: Profile_Achievements_Fair_Play_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fair play`)
};

const pl_profile_achievements_fair_play_title = /** @type {(inputs: Profile_Achievements_Fair_Play_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fair play`)
};

const pt_profile_achievements_fair_play_title = /** @type {(inputs: Profile_Achievements_Fair_Play_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jogo limpo`)
};

const ru_profile_achievements_fair_play_title = /** @type {(inputs: Profile_Achievements_Fair_Play_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Честная игра`)
};

const sv_profile_achievements_fair_play_title = /** @type {(inputs: Profile_Achievements_Fair_Play_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rent spel`)
};

const tr_profile_achievements_fair_play_title = /** @type {(inputs: Profile_Achievements_Fair_Play_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adil oyun`)
};

const zh_profile_achievements_fair_play_title = /** @type {(inputs: Profile_Achievements_Fair_Play_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公平竞技`)
};

const ja_profile_achievements_fair_play_title = /** @type {(inputs: Profile_Achievements_Fair_Play_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フェアプレー`)
};

/**
* | output |
* | --- |
* | "Fair play" |
*
* @param {Profile_Achievements_Fair_Play_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_achievements_fair_play_title = /** @type {((inputs?: Profile_Achievements_Fair_Play_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Achievements_Fair_Play_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_achievements_fair_play_title(inputs)
	if (locale === "de") return de_profile_achievements_fair_play_title(inputs)
	if (locale === "fr") return fr_profile_achievements_fair_play_title(inputs)
	if (locale === "it") return it_profile_achievements_fair_play_title(inputs)
	if (locale === "nl") return nl_profile_achievements_fair_play_title(inputs)
	if (locale === "pl") return pl_profile_achievements_fair_play_title(inputs)
	if (locale === "pt") return pt_profile_achievements_fair_play_title(inputs)
	if (locale === "ru") return ru_profile_achievements_fair_play_title(inputs)
	if (locale === "sv") return sv_profile_achievements_fair_play_title(inputs)
	if (locale === "tr") return tr_profile_achievements_fair_play_title(inputs)
	if (locale === "zh") return zh_profile_achievements_fair_play_title(inputs)
	if (locale === "ja") return ja_profile_achievements_fair_play_title(inputs)
	return en_profile_achievements_fair_play_title(inputs)
});
