/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Creators_Sort_FollowersInputs */

const en_profile_creators_sort_followers = /** @type {(inputs: Profile_Creators_Sort_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Most followed`)
};

const es_profile_creators_sort_followers = /** @type {(inputs: Profile_Creators_Sort_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Más seguidos`)
};

const de_profile_creators_sort_followers = /** @type {(inputs: Profile_Creators_Sort_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meiste Follower`)
};

const fr_profile_creators_sort_followers = /** @type {(inputs: Profile_Creators_Sort_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les plus suivis`)
};

const it_profile_creators_sort_followers = /** @type {(inputs: Profile_Creators_Sort_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Più seguiti`)
};

const nl_profile_creators_sort_followers = /** @type {(inputs: Profile_Creators_Sort_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meest gevolgd`)
};

const pl_profile_creators_sort_followers = /** @type {(inputs: Profile_Creators_Sort_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najczęściej obserwowani`)
};

const pt_profile_creators_sort_followers = /** @type {(inputs: Profile_Creators_Sort_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mais seguidos`)
};

const ru_profile_creators_sort_followers = /** @type {(inputs: Profile_Creators_Sort_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Больше всего подписчиков`)
};

const sv_profile_creators_sort_followers = /** @type {(inputs: Profile_Creators_Sort_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mest följda`)
};

const tr_profile_creators_sort_followers = /** @type {(inputs: Profile_Creators_Sort_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En çok takip edilen`)
};

const zh_profile_creators_sort_followers = /** @type {(inputs: Profile_Creators_Sort_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`关注最多`)
};

const ja_profile_creators_sort_followers = /** @type {(inputs: Profile_Creators_Sort_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フォロワー数順`)
};

/**
* | output |
* | --- |
* | "Most followed" |
*
* @param {Profile_Creators_Sort_FollowersInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_creators_sort_followers = /** @type {((inputs?: Profile_Creators_Sort_FollowersInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Creators_Sort_FollowersInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_creators_sort_followers(inputs)
	if (locale === "de") return de_profile_creators_sort_followers(inputs)
	if (locale === "fr") return fr_profile_creators_sort_followers(inputs)
	if (locale === "it") return it_profile_creators_sort_followers(inputs)
	if (locale === "nl") return nl_profile_creators_sort_followers(inputs)
	if (locale === "pl") return pl_profile_creators_sort_followers(inputs)
	if (locale === "pt") return pt_profile_creators_sort_followers(inputs)
	if (locale === "ru") return ru_profile_creators_sort_followers(inputs)
	if (locale === "sv") return sv_profile_creators_sort_followers(inputs)
	if (locale === "tr") return tr_profile_creators_sort_followers(inputs)
	if (locale === "zh") return zh_profile_creators_sort_followers(inputs)
	if (locale === "ja") return ja_profile_creators_sort_followers(inputs)
	return en_profile_creators_sort_followers(inputs)
});
