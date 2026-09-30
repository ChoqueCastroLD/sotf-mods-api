/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Badge_Group_AwardsInputs */

const en_profile_badge_group_awards = /** @type {(inputs: Profile_Badge_Group_AwardsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Awards`)
};

const es_profile_badge_group_awards = /** @type {(inputs: Profile_Badge_Group_AwardsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Premios`)
};

const de_profile_badge_group_awards = /** @type {(inputs: Profile_Badge_Group_AwardsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auszeichnungen`)
};

const fr_profile_badge_group_awards = /** @type {(inputs: Profile_Badge_Group_AwardsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Récompenses`)
};

const it_profile_badge_group_awards = /** @type {(inputs: Profile_Badge_Group_AwardsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Premi`)
};

const nl_profile_badge_group_awards = /** @type {(inputs: Profile_Badge_Group_AwardsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Onderscheidingen`)
};

const pl_profile_badge_group_awards = /** @type {(inputs: Profile_Badge_Group_AwardsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyróżnienia`)
};

const pt_profile_badge_group_awards = /** @type {(inputs: Profile_Badge_Group_AwardsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prêmios`)
};

const ru_profile_badge_group_awards = /** @type {(inputs: Profile_Badge_Group_AwardsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Награды`)
};

const sv_profile_badge_group_awards = /** @type {(inputs: Profile_Badge_Group_AwardsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utmärkelser`)
};

const tr_profile_badge_group_awards = /** @type {(inputs: Profile_Badge_Group_AwardsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ödüller`)
};

const zh_profile_badge_group_awards = /** @type {(inputs: Profile_Badge_Group_AwardsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`奖项`)
};

const ja_profile_badge_group_awards = /** @type {(inputs: Profile_Badge_Group_AwardsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アワード`)
};

/**
* | output |
* | --- |
* | "Awards" |
*
* @param {Profile_Badge_Group_AwardsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_badge_group_awards = /** @type {((inputs?: Profile_Badge_Group_AwardsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_Group_AwardsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_badge_group_awards(inputs)
	if (locale === "de") return de_profile_badge_group_awards(inputs)
	if (locale === "fr") return fr_profile_badge_group_awards(inputs)
	if (locale === "it") return it_profile_badge_group_awards(inputs)
	if (locale === "nl") return nl_profile_badge_group_awards(inputs)
	if (locale === "pl") return pl_profile_badge_group_awards(inputs)
	if (locale === "pt") return pt_profile_badge_group_awards(inputs)
	if (locale === "ru") return ru_profile_badge_group_awards(inputs)
	if (locale === "sv") return sv_profile_badge_group_awards(inputs)
	if (locale === "tr") return tr_profile_badge_group_awards(inputs)
	if (locale === "zh") return zh_profile_badge_group_awards(inputs)
	if (locale === "ja") return ja_profile_badge_group_awards(inputs)
	return en_profile_badge_group_awards(inputs)
});
