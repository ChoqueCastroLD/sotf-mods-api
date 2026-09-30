/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Achievements_Tiers_TitleInputs */

const en_profile_achievements_tiers_title = /** @type {(inputs: Profile_Achievements_Tiers_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creator tiers`)
};

const es_profile_achievements_tiers_title = /** @type {(inputs: Profile_Achievements_Tiers_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niveles de creador`)
};

const de_profile_achievements_tiers_title = /** @type {(inputs: Profile_Achievements_Tiers_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ersteller-Stufen`)
};

const fr_profile_achievements_tiers_title = /** @type {(inputs: Profile_Achievements_Tiers_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paliers de créateur`)
};

const it_profile_achievements_tiers_title = /** @type {(inputs: Profile_Achievements_Tiers_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Livelli da creatore`)
};

const nl_profile_achievements_tiers_title = /** @type {(inputs: Profile_Achievements_Tiers_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Makersniveaus`)
};

const pl_profile_achievements_tiers_title = /** @type {(inputs: Profile_Achievements_Tiers_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Poziomy twórców`)
};

const pt_profile_achievements_tiers_title = /** @type {(inputs: Profile_Achievements_Tiers_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Níveis de criador`)
};

const ru_profile_achievements_tiers_title = /** @type {(inputs: Profile_Achievements_Tiers_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Уровни авторов`)
};

const sv_profile_achievements_tiers_title = /** @type {(inputs: Profile_Achievements_Tiers_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skaparnivåer`)
};

const tr_profile_achievements_tiers_title = /** @type {(inputs: Profile_Achievements_Tiers_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Üretici seviyeleri`)
};

const zh_profile_achievements_tiers_title = /** @type {(inputs: Profile_Achievements_Tiers_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创作者段位`)
};

const ja_profile_achievements_tiers_title = /** @type {(inputs: Profile_Achievements_Tiers_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`クリエイターティア`)
};

/**
* | output |
* | --- |
* | "Creator tiers" |
*
* @param {Profile_Achievements_Tiers_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_achievements_tiers_title = /** @type {((inputs?: Profile_Achievements_Tiers_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Achievements_Tiers_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_achievements_tiers_title(inputs)
	if (locale === "de") return de_profile_achievements_tiers_title(inputs)
	if (locale === "fr") return fr_profile_achievements_tiers_title(inputs)
	if (locale === "it") return it_profile_achievements_tiers_title(inputs)
	if (locale === "nl") return nl_profile_achievements_tiers_title(inputs)
	if (locale === "pl") return pl_profile_achievements_tiers_title(inputs)
	if (locale === "pt") return pt_profile_achievements_tiers_title(inputs)
	if (locale === "ru") return ru_profile_achievements_tiers_title(inputs)
	if (locale === "sv") return sv_profile_achievements_tiers_title(inputs)
	if (locale === "tr") return tr_profile_achievements_tiers_title(inputs)
	if (locale === "zh") return zh_profile_achievements_tiers_title(inputs)
	if (locale === "ja") return ja_profile_achievements_tiers_title(inputs)
	return en_profile_achievements_tiers_title(inputs)
});
