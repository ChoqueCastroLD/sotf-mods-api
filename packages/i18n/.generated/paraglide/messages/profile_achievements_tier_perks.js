/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Achievements_Tier_PerksInputs */

const en_profile_achievements_tier_perks = /** @type {(inputs: Profile_Achievements_Tier_PerksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tier stamp and avatar frame.`)
};

const es_profile_achievements_tier_perks = /** @type {(inputs: Profile_Achievements_Tier_PerksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sello de nivel y marco de avatar.`)
};

const de_profile_achievements_tier_perks = /** @type {(inputs: Profile_Achievements_Tier_PerksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stufen-Stempel und Avatar-Rahmen.`)
};

const fr_profile_achievements_tier_perks = /** @type {(inputs: Profile_Achievements_Tier_PerksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tampon de palier et cadre d’avatar.`)
};

const it_profile_achievements_tier_perks = /** @type {(inputs: Profile_Achievements_Tier_PerksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Timbro di livello e cornice dell’avatar.`)
};

const nl_profile_achievements_tier_perks = /** @type {(inputs: Profile_Achievements_Tier_PerksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niveaustempel en avatarrand.`)
};

const pl_profile_achievements_tier_perks = /** @type {(inputs: Profile_Achievements_Tier_PerksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pieczątka poziomu i ramka awatara.`)
};

const pt_profile_achievements_tier_perks = /** @type {(inputs: Profile_Achievements_Tier_PerksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Carimbo de nível e moldura de avatar.`)
};

const ru_profile_achievements_tier_perks = /** @type {(inputs: Profile_Achievements_Tier_PerksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Штамп уровня и рамка аватара.`)
};

const sv_profile_achievements_tier_perks = /** @type {(inputs: Profile_Achievements_Tier_PerksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nivåstämpel och avatarram.`)
};

const tr_profile_achievements_tier_perks = /** @type {(inputs: Profile_Achievements_Tier_PerksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seviye damgası ve avatar çerçevesi.`)
};

const zh_profile_achievements_tier_perks = /** @type {(inputs: Profile_Achievements_Tier_PerksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`段位印章和头像边框。`)
};

const ja_profile_achievements_tier_perks = /** @type {(inputs: Profile_Achievements_Tier_PerksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ティアスタンプとアバター枠。`)
};

/**
* | output |
* | --- |
* | "Tier stamp and avatar frame." |
*
* @param {Profile_Achievements_Tier_PerksInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_achievements_tier_perks = /** @type {((inputs?: Profile_Achievements_Tier_PerksInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Achievements_Tier_PerksInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_achievements_tier_perks(inputs)
	if (locale === "de") return de_profile_achievements_tier_perks(inputs)
	if (locale === "fr") return fr_profile_achievements_tier_perks(inputs)
	if (locale === "it") return it_profile_achievements_tier_perks(inputs)
	if (locale === "nl") return nl_profile_achievements_tier_perks(inputs)
	if (locale === "pl") return pl_profile_achievements_tier_perks(inputs)
	if (locale === "pt") return pt_profile_achievements_tier_perks(inputs)
	if (locale === "ru") return ru_profile_achievements_tier_perks(inputs)
	if (locale === "sv") return sv_profile_achievements_tier_perks(inputs)
	if (locale === "tr") return tr_profile_achievements_tier_perks(inputs)
	if (locale === "zh") return zh_profile_achievements_tier_perks(inputs)
	if (locale === "ja") return ja_profile_achievements_tier_perks(inputs)
	return en_profile_achievements_tier_perks(inputs)
});
