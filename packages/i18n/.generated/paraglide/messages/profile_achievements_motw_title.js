/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Achievements_Motw_TitleInputs */

const en_profile_achievements_motw_title = /** @type {(inputs: Profile_Achievements_Motw_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod of the Week`)
};

const es_profile_achievements_motw_title = /** @type {(inputs: Profile_Achievements_Motw_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod de la semana`)
};

const de_profile_achievements_motw_title = /** @type {(inputs: Profile_Achievements_Motw_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod der Woche`)
};

const fr_profile_achievements_motw_title = /** @type {(inputs: Profile_Achievements_Motw_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod de la semaine`)
};

const it_profile_achievements_motw_title = /** @type {(inputs: Profile_Achievements_Motw_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod della settimana`)
};

const nl_profile_achievements_motw_title = /** @type {(inputs: Profile_Achievements_Motw_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod van de week`)
};

const pl_profile_achievements_motw_title = /** @type {(inputs: Profile_Achievements_Motw_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod tygodnia`)
};

const pt_profile_achievements_motw_title = /** @type {(inputs: Profile_Achievements_Motw_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod da semana`)
};

const ru_profile_achievements_motw_title = /** @type {(inputs: Profile_Achievements_Motw_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Мод недели`)
};

const sv_profile_achievements_motw_title = /** @type {(inputs: Profile_Achievements_Motw_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veckans modd`)
};

const tr_profile_achievements_motw_title = /** @type {(inputs: Profile_Achievements_Motw_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Haftanın Modu`)
};

const zh_profile_achievements_motw_title = /** @type {(inputs: Profile_Achievements_Motw_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`本周模组`)
};

const ja_profile_achievements_motw_title = /** @type {(inputs: Profile_Achievements_Motw_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`今週の MOD`)
};

/**
* | output |
* | --- |
* | "Mod of the Week" |
*
* @param {Profile_Achievements_Motw_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_achievements_motw_title = /** @type {((inputs?: Profile_Achievements_Motw_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Achievements_Motw_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_achievements_motw_title(inputs)
	if (locale === "de") return de_profile_achievements_motw_title(inputs)
	if (locale === "fr") return fr_profile_achievements_motw_title(inputs)
	if (locale === "it") return it_profile_achievements_motw_title(inputs)
	if (locale === "nl") return nl_profile_achievements_motw_title(inputs)
	if (locale === "pl") return pl_profile_achievements_motw_title(inputs)
	if (locale === "pt") return pt_profile_achievements_motw_title(inputs)
	if (locale === "ru") return ru_profile_achievements_motw_title(inputs)
	if (locale === "sv") return sv_profile_achievements_motw_title(inputs)
	if (locale === "tr") return tr_profile_achievements_motw_title(inputs)
	if (locale === "zh") return zh_profile_achievements_motw_title(inputs)
	if (locale === "ja") return ja_profile_achievements_motw_title(inputs)
	return en_profile_achievements_motw_title(inputs)
});
