/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Badge_Group_CommunityInputs */

const en_profile_badge_group_community = /** @type {(inputs: Profile_Badge_Group_CommunityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Community`)
};

const es_profile_badge_group_community = /** @type {(inputs: Profile_Badge_Group_CommunityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comunidad`)
};

const de_profile_badge_group_community = /** @type {(inputs: Profile_Badge_Group_CommunityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Community`)
};

const fr_profile_badge_group_community = /** @type {(inputs: Profile_Badge_Group_CommunityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Communauté`)
};

const it_profile_badge_group_community = /** @type {(inputs: Profile_Badge_Group_CommunityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Community`)
};

const nl_profile_badge_group_community = /** @type {(inputs: Profile_Badge_Group_CommunityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Community`)
};

const pl_profile_badge_group_community = /** @type {(inputs: Profile_Badge_Group_CommunityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Społeczność`)
};

const pt_profile_badge_group_community = /** @type {(inputs: Profile_Badge_Group_CommunityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comunidade`)
};

const ru_profile_badge_group_community = /** @type {(inputs: Profile_Badge_Group_CommunityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сообщество`)
};

const sv_profile_badge_group_community = /** @type {(inputs: Profile_Badge_Group_CommunityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gemenskap`)
};

const tr_profile_badge_group_community = /** @type {(inputs: Profile_Badge_Group_CommunityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Topluluk`)
};

const zh_profile_badge_group_community = /** @type {(inputs: Profile_Badge_Group_CommunityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`社区`)
};

const ja_profile_badge_group_community = /** @type {(inputs: Profile_Badge_Group_CommunityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コミュニティ`)
};

/**
* | output |
* | --- |
* | "Community" |
*
* @param {Profile_Badge_Group_CommunityInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_badge_group_community = /** @type {((inputs?: Profile_Badge_Group_CommunityInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_Group_CommunityInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_badge_group_community(inputs)
	if (locale === "de") return de_profile_badge_group_community(inputs)
	if (locale === "fr") return fr_profile_badge_group_community(inputs)
	if (locale === "it") return it_profile_badge_group_community(inputs)
	if (locale === "nl") return nl_profile_badge_group_community(inputs)
	if (locale === "pl") return pl_profile_badge_group_community(inputs)
	if (locale === "pt") return pt_profile_badge_group_community(inputs)
	if (locale === "ru") return ru_profile_badge_group_community(inputs)
	if (locale === "sv") return sv_profile_badge_group_community(inputs)
	if (locale === "tr") return tr_profile_badge_group_community(inputs)
	if (locale === "zh") return zh_profile_badge_group_community(inputs)
	if (locale === "ja") return ja_profile_badge_group_community(inputs)
	return en_profile_badge_group_community(inputs)
});
