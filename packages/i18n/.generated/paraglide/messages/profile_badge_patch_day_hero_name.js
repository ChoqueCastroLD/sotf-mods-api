/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Badge_Patch_Day_Hero_NameInputs */

const en_profile_badge_patch_day_hero_name = /** @type {(inputs: Profile_Badge_Patch_Day_Hero_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patch Day Hero`)
};

const es_profile_badge_patch_day_hero_name = /** @type {(inputs: Profile_Badge_Patch_Day_Hero_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Héroe del parche`)
};

const de_profile_badge_patch_day_hero_name = /** @type {(inputs: Profile_Badge_Patch_Day_Hero_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patch-Day-Held`)
};

const fr_profile_badge_patch_day_hero_name = /** @type {(inputs: Profile_Badge_Patch_Day_Hero_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Héros du patch`)
};

const it_profile_badge_patch_day_hero_name = /** @type {(inputs: Profile_Badge_Patch_Day_Hero_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eroe della patch`)
};

const nl_profile_badge_patch_day_hero_name = /** @type {(inputs: Profile_Badge_Patch_Day_Hero_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patchdagheld`)
};

const pl_profile_badge_patch_day_hero_name = /** @type {(inputs: Profile_Badge_Patch_Day_Hero_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bohater dnia łatki`)
};

const pt_profile_badge_patch_day_hero_name = /** @type {(inputs: Profile_Badge_Patch_Day_Hero_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Herói do patch`)
};

const ru_profile_badge_patch_day_hero_name = /** @type {(inputs: Profile_Badge_Patch_Day_Hero_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Герой дня патча`)
};

const sv_profile_badge_patch_day_hero_name = /** @type {(inputs: Profile_Badge_Patch_Day_Hero_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patchdagens hjälte`)
};

const tr_profile_badge_patch_day_hero_name = /** @type {(inputs: Profile_Badge_Patch_Day_Hero_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yama Günü Kahramanı`)
};

const zh_profile_badge_patch_day_hero_name = /** @type {(inputs: Profile_Badge_Patch_Day_Hero_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`补丁日英雄`)
};

const ja_profile_badge_patch_day_hero_name = /** @type {(inputs: Profile_Badge_Patch_Day_Hero_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`パッチデーの英雄`)
};

/**
* | output |
* | --- |
* | "Patch Day Hero" |
*
* @param {Profile_Badge_Patch_Day_Hero_NameInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_badge_patch_day_hero_name = /** @type {((inputs?: Profile_Badge_Patch_Day_Hero_NameInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_Patch_Day_Hero_NameInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_badge_patch_day_hero_name(inputs)
	if (locale === "de") return de_profile_badge_patch_day_hero_name(inputs)
	if (locale === "fr") return fr_profile_badge_patch_day_hero_name(inputs)
	if (locale === "it") return it_profile_badge_patch_day_hero_name(inputs)
	if (locale === "nl") return nl_profile_badge_patch_day_hero_name(inputs)
	if (locale === "pl") return pl_profile_badge_patch_day_hero_name(inputs)
	if (locale === "pt") return pt_profile_badge_patch_day_hero_name(inputs)
	if (locale === "ru") return ru_profile_badge_patch_day_hero_name(inputs)
	if (locale === "sv") return sv_profile_badge_patch_day_hero_name(inputs)
	if (locale === "tr") return tr_profile_badge_patch_day_hero_name(inputs)
	if (locale === "zh") return zh_profile_badge_patch_day_hero_name(inputs)
	if (locale === "ja") return ja_profile_badge_patch_day_hero_name(inputs)
	return en_profile_badge_patch_day_hero_name(inputs)
});
