/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Search_Page_AchievementsInputs */

const en_search_page_achievements = /** @type {(inputs: Search_Page_AchievementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Achievements`)
};

const es_search_page_achievements = /** @type {(inputs: Search_Page_AchievementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logros`)
};

const de_search_page_achievements = /** @type {(inputs: Search_Page_AchievementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erfolge`)
};

const fr_search_page_achievements = /** @type {(inputs: Search_Page_AchievementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Succès`)
};

const it_search_page_achievements = /** @type {(inputs: Search_Page_AchievementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obiettivi`)
};

const nl_search_page_achievements = /** @type {(inputs: Search_Page_AchievementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prestaties`)
};

const pl_search_page_achievements = /** @type {(inputs: Search_Page_AchievementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Osiągnięcia`)
};

const pt_search_page_achievements = /** @type {(inputs: Search_Page_AchievementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conquistas`)
};

const ru_search_page_achievements = /** @type {(inputs: Search_Page_AchievementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Достижения`)
};

const sv_search_page_achievements = /** @type {(inputs: Search_Page_AchievementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prestationer`)
};

const tr_search_page_achievements = /** @type {(inputs: Search_Page_AchievementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başarımlar`)
};

const zh_search_page_achievements = /** @type {(inputs: Search_Page_AchievementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`成就`)
};

const ja_search_page_achievements = /** @type {(inputs: Search_Page_AchievementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`実績`)
};

/**
* | output |
* | --- |
* | "Achievements" |
*
* @param {Search_Page_AchievementsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const search_page_achievements = /** @type {((inputs?: Search_Page_AchievementsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Search_Page_AchievementsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_search_page_achievements(inputs)
	if (locale === "de") return de_search_page_achievements(inputs)
	if (locale === "fr") return fr_search_page_achievements(inputs)
	if (locale === "it") return it_search_page_achievements(inputs)
	if (locale === "nl") return nl_search_page_achievements(inputs)
	if (locale === "pl") return pl_search_page_achievements(inputs)
	if (locale === "pt") return pt_search_page_achievements(inputs)
	if (locale === "ru") return ru_search_page_achievements(inputs)
	if (locale === "sv") return sv_search_page_achievements(inputs)
	if (locale === "tr") return tr_search_page_achievements(inputs)
	if (locale === "zh") return zh_search_page_achievements(inputs)
	if (locale === "ja") return ja_search_page_achievements(inputs)
	return en_search_page_achievements(inputs)
});
