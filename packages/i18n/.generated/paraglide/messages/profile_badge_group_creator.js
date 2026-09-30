/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Badge_Group_CreatorInputs */

const en_profile_badge_group_creator = /** @type {(inputs: Profile_Badge_Group_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creator`)
};

const es_profile_badge_group_creator = /** @type {(inputs: Profile_Badge_Group_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creador`)
};

const de_profile_badge_group_creator = /** @type {(inputs: Profile_Badge_Group_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ersteller`)
};

const fr_profile_badge_group_creator = /** @type {(inputs: Profile_Badge_Group_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créateur`)
};

const it_profile_badge_group_creator = /** @type {(inputs: Profile_Badge_Group_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creatore`)
};

const nl_profile_badge_group_creator = /** @type {(inputs: Profile_Badge_Group_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Maker`)
};

const pl_profile_badge_group_creator = /** @type {(inputs: Profile_Badge_Group_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twórca`)
};

const pt_profile_badge_group_creator = /** @type {(inputs: Profile_Badge_Group_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Criador`)
};

const ru_profile_badge_group_creator = /** @type {(inputs: Profile_Badge_Group_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Автор`)
};

const sv_profile_badge_group_creator = /** @type {(inputs: Profile_Badge_Group_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skapare`)
};

const tr_profile_badge_group_creator = /** @type {(inputs: Profile_Badge_Group_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Üretici`)
};

const zh_profile_badge_group_creator = /** @type {(inputs: Profile_Badge_Group_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创作者`)
};

const ja_profile_badge_group_creator = /** @type {(inputs: Profile_Badge_Group_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`クリエイター`)
};

/**
* | output |
* | --- |
* | "Creator" |
*
* @param {Profile_Badge_Group_CreatorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_badge_group_creator = /** @type {((inputs?: Profile_Badge_Group_CreatorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_Group_CreatorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_badge_group_creator(inputs)
	if (locale === "de") return de_profile_badge_group_creator(inputs)
	if (locale === "fr") return fr_profile_badge_group_creator(inputs)
	if (locale === "it") return it_profile_badge_group_creator(inputs)
	if (locale === "nl") return nl_profile_badge_group_creator(inputs)
	if (locale === "pl") return pl_profile_badge_group_creator(inputs)
	if (locale === "pt") return pt_profile_badge_group_creator(inputs)
	if (locale === "ru") return ru_profile_badge_group_creator(inputs)
	if (locale === "sv") return sv_profile_badge_group_creator(inputs)
	if (locale === "tr") return tr_profile_badge_group_creator(inputs)
	if (locale === "zh") return zh_profile_badge_group_creator(inputs)
	if (locale === "ja") return ja_profile_badge_group_creator(inputs)
	return en_profile_badge_group_creator(inputs)
});
