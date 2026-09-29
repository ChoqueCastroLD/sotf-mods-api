/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Nav_AchievementsInputs */

const en_common_nav_achievements = /** @type {(inputs: Common_Nav_AchievementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Achievements`)
};

const es_common_nav_achievements = /** @type {(inputs: Common_Nav_AchievementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logros`)
};

const de_common_nav_achievements = /** @type {(inputs: Common_Nav_AchievementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erfolge`)
};

const fr_common_nav_achievements = /** @type {(inputs: Common_Nav_AchievementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Succès`)
};

const it_common_nav_achievements = /** @type {(inputs: Common_Nav_AchievementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Traguardi`)
};

const nl_common_nav_achievements = /** @type {(inputs: Common_Nav_AchievementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prestaties`)
};

const pl_common_nav_achievements = /** @type {(inputs: Common_Nav_AchievementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Osiągnięcia`)
};

const pt_common_nav_achievements = /** @type {(inputs: Common_Nav_AchievementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conquistas`)
};

const ru_common_nav_achievements = /** @type {(inputs: Common_Nav_AchievementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Достижения`)
};

const sv_common_nav_achievements = /** @type {(inputs: Common_Nav_AchievementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prestationer`)
};

const tr_common_nav_achievements = /** @type {(inputs: Common_Nav_AchievementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başarımlar`)
};

const zh_common_nav_achievements = /** @type {(inputs: Common_Nav_AchievementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`成就`)
};

const ja_common_nav_achievements = /** @type {(inputs: Common_Nav_AchievementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`実績`)
};

/**
* | output |
* | --- |
* | "Achievements" |
*
* @param {Common_Nav_AchievementsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_nav_achievements = /** @type {((inputs?: Common_Nav_AchievementsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Nav_AchievementsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_nav_achievements(inputs)
	if (locale === "de") return de_common_nav_achievements(inputs)
	if (locale === "fr") return fr_common_nav_achievements(inputs)
	if (locale === "it") return it_common_nav_achievements(inputs)
	if (locale === "nl") return nl_common_nav_achievements(inputs)
	if (locale === "pl") return pl_common_nav_achievements(inputs)
	if (locale === "pt") return pt_common_nav_achievements(inputs)
	if (locale === "ru") return ru_common_nav_achievements(inputs)
	if (locale === "sv") return sv_common_nav_achievements(inputs)
	if (locale === "tr") return tr_common_nav_achievements(inputs)
	if (locale === "zh") return zh_common_nav_achievements(inputs)
	if (locale === "ja") return ja_common_nav_achievements(inputs)
	return en_common_nav_achievements(inputs)
});
