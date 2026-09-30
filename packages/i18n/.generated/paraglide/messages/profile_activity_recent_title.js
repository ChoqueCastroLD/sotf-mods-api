/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Activity_Recent_TitleInputs */

const en_profile_activity_recent_title = /** @type {(inputs: Profile_Activity_Recent_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Latest days on the trail`)
};

const es_profile_activity_recent_title = /** @type {(inputs: Profile_Activity_Recent_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Últimos días en el camino`)
};

const de_profile_activity_recent_title = /** @type {(inputs: Profile_Activity_Recent_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Letzte Tage auf dem Pfad`)
};

const fr_profile_activity_recent_title = /** @type {(inputs: Profile_Activity_Recent_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Derniers jours sur le sentier`)
};

const it_profile_activity_recent_title = /** @type {(inputs: Profile_Activity_Recent_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ultimi giorni sul sentiero`)
};

const nl_profile_activity_recent_title = /** @type {(inputs: Profile_Activity_Recent_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Laatste dagen op het pad`)
};

const pl_profile_activity_recent_title = /** @type {(inputs: Profile_Activity_Recent_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ostatnie dni na szlaku`)
};

const pt_profile_activity_recent_title = /** @type {(inputs: Profile_Activity_Recent_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Últimos dias na trilha`)
};

const ru_profile_activity_recent_title = /** @type {(inputs: Profile_Activity_Recent_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Последние дни на тропе`)
};

const sv_profile_activity_recent_title = /** @type {(inputs: Profile_Activity_Recent_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Senaste dagarna på stigen`)
};

const tr_profile_activity_recent_title = /** @type {(inputs: Profile_Activity_Recent_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patikadaki son günler`)
};

const zh_profile_activity_recent_title = /** @type {(inputs: Profile_Activity_Recent_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最近的足迹`)
};

const ja_profile_activity_recent_title = /** @type {(inputs: Profile_Activity_Recent_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最近の足跡`)
};

/**
* | output |
* | --- |
* | "Latest days on the trail" |
*
* @param {Profile_Activity_Recent_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_activity_recent_title = /** @type {((inputs?: Profile_Activity_Recent_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Activity_Recent_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_activity_recent_title(inputs)
	if (locale === "de") return de_profile_activity_recent_title(inputs)
	if (locale === "fr") return fr_profile_activity_recent_title(inputs)
	if (locale === "it") return it_profile_activity_recent_title(inputs)
	if (locale === "nl") return nl_profile_activity_recent_title(inputs)
	if (locale === "pl") return pl_profile_activity_recent_title(inputs)
	if (locale === "pt") return pt_profile_activity_recent_title(inputs)
	if (locale === "ru") return ru_profile_activity_recent_title(inputs)
	if (locale === "sv") return sv_profile_activity_recent_title(inputs)
	if (locale === "tr") return tr_profile_activity_recent_title(inputs)
	if (locale === "zh") return zh_profile_activity_recent_title(inputs)
	if (locale === "ja") return ja_profile_activity_recent_title(inputs)
	return en_profile_activity_recent_title(inputs)
});
