/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Stat_FollowersInputs */

const en_mod_stat_followers = /** @type {(inputs: Mod_Stat_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Followers`)
};

const es_mod_stat_followers = /** @type {(inputs: Mod_Stat_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seguidores`)
};

const de_mod_stat_followers = /** @type {(inputs: Mod_Stat_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Follower`)
};

const fr_mod_stat_followers = /** @type {(inputs: Mod_Stat_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abonnés`)
};

const it_mod_stat_followers = /** @type {(inputs: Mod_Stat_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Follower`)
};

const nl_mod_stat_followers = /** @type {(inputs: Mod_Stat_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volgers`)
};

const pl_mod_stat_followers = /** @type {(inputs: Mod_Stat_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obserwujący`)
};

const pt_mod_stat_followers = /** @type {(inputs: Mod_Stat_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seguidores`)
};

const ru_mod_stat_followers = /** @type {(inputs: Mod_Stat_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подписчики`)
};

const sv_mod_stat_followers = /** @type {(inputs: Mod_Stat_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Följare`)
};

const tr_mod_stat_followers = /** @type {(inputs: Mod_Stat_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Takipçiler`)
};

const zh_mod_stat_followers = /** @type {(inputs: Mod_Stat_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`关注者`)
};

const ja_mod_stat_followers = /** @type {(inputs: Mod_Stat_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フォロワー`)
};

/**
* | output |
* | --- |
* | "Followers" |
*
* @param {Mod_Stat_FollowersInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_stat_followers = /** @type {((inputs?: Mod_Stat_FollowersInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Stat_FollowersInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_stat_followers(inputs)
	if (locale === "de") return de_mod_stat_followers(inputs)
	if (locale === "fr") return fr_mod_stat_followers(inputs)
	if (locale === "it") return it_mod_stat_followers(inputs)
	if (locale === "nl") return nl_mod_stat_followers(inputs)
	if (locale === "pl") return pl_mod_stat_followers(inputs)
	if (locale === "pt") return pt_mod_stat_followers(inputs)
	if (locale === "ru") return ru_mod_stat_followers(inputs)
	if (locale === "sv") return sv_mod_stat_followers(inputs)
	if (locale === "tr") return tr_mod_stat_followers(inputs)
	if (locale === "zh") return zh_mod_stat_followers(inputs)
	if (locale === "ja") return ja_mod_stat_followers(inputs)
	return en_mod_stat_followers(inputs)
});
