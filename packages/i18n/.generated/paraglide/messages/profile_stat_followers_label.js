/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Stat_Followers_LabelInputs */

const en_profile_stat_followers_label = /** @type {(inputs: Profile_Stat_Followers_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Followers`)
};

const es_profile_stat_followers_label = /** @type {(inputs: Profile_Stat_Followers_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seguidores`)
};

const de_profile_stat_followers_label = /** @type {(inputs: Profile_Stat_Followers_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Follower`)
};

const fr_profile_stat_followers_label = /** @type {(inputs: Profile_Stat_Followers_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abonnés`)
};

const it_profile_stat_followers_label = /** @type {(inputs: Profile_Stat_Followers_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Follower`)
};

const nl_profile_stat_followers_label = /** @type {(inputs: Profile_Stat_Followers_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volgers`)
};

const pl_profile_stat_followers_label = /** @type {(inputs: Profile_Stat_Followers_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obserwujący`)
};

const pt_profile_stat_followers_label = /** @type {(inputs: Profile_Stat_Followers_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seguidores`)
};

const ru_profile_stat_followers_label = /** @type {(inputs: Profile_Stat_Followers_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подписчики`)
};

const sv_profile_stat_followers_label = /** @type {(inputs: Profile_Stat_Followers_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Följare`)
};

const tr_profile_stat_followers_label = /** @type {(inputs: Profile_Stat_Followers_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Takipçiler`)
};

const zh_profile_stat_followers_label = /** @type {(inputs: Profile_Stat_Followers_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`关注者`)
};

const ja_profile_stat_followers_label = /** @type {(inputs: Profile_Stat_Followers_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フォロワー`)
};

/**
* | output |
* | --- |
* | "Followers" |
*
* @param {Profile_Stat_Followers_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_stat_followers_label = /** @type {((inputs?: Profile_Stat_Followers_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Stat_Followers_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_stat_followers_label(inputs)
	if (locale === "de") return de_profile_stat_followers_label(inputs)
	if (locale === "fr") return fr_profile_stat_followers_label(inputs)
	if (locale === "it") return it_profile_stat_followers_label(inputs)
	if (locale === "nl") return nl_profile_stat_followers_label(inputs)
	if (locale === "pl") return pl_profile_stat_followers_label(inputs)
	if (locale === "pt") return pt_profile_stat_followers_label(inputs)
	if (locale === "ru") return ru_profile_stat_followers_label(inputs)
	if (locale === "sv") return sv_profile_stat_followers_label(inputs)
	if (locale === "tr") return tr_profile_stat_followers_label(inputs)
	if (locale === "zh") return zh_profile_stat_followers_label(inputs)
	if (locale === "ja") return ja_profile_stat_followers_label(inputs)
	return en_profile_stat_followers_label(inputs)
});
