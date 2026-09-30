/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Fact_FollowersInputs */

const en_cmdk_fact_followers = /** @type {(inputs: Cmdk_Fact_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Followers`)
};

const es_cmdk_fact_followers = /** @type {(inputs: Cmdk_Fact_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seguidores`)
};

const de_cmdk_fact_followers = /** @type {(inputs: Cmdk_Fact_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Follower`)
};

const fr_cmdk_fact_followers = /** @type {(inputs: Cmdk_Fact_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abonnés`)
};

const it_cmdk_fact_followers = /** @type {(inputs: Cmdk_Fact_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Follower`)
};

const nl_cmdk_fact_followers = /** @type {(inputs: Cmdk_Fact_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volgers`)
};

const pl_cmdk_fact_followers = /** @type {(inputs: Cmdk_Fact_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obserwujący`)
};

const pt_cmdk_fact_followers = /** @type {(inputs: Cmdk_Fact_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seguidores`)
};

const ru_cmdk_fact_followers = /** @type {(inputs: Cmdk_Fact_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подписчики`)
};

const sv_cmdk_fact_followers = /** @type {(inputs: Cmdk_Fact_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Följare`)
};

const tr_cmdk_fact_followers = /** @type {(inputs: Cmdk_Fact_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Takipçiler`)
};

const zh_cmdk_fact_followers = /** @type {(inputs: Cmdk_Fact_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`关注者`)
};

const ja_cmdk_fact_followers = /** @type {(inputs: Cmdk_Fact_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フォロワー`)
};

/**
* | output |
* | --- |
* | "Followers" |
*
* @param {Cmdk_Fact_FollowersInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_fact_followers = /** @type {((inputs?: Cmdk_Fact_FollowersInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Fact_FollowersInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_fact_followers(inputs)
	if (locale === "de") return de_cmdk_fact_followers(inputs)
	if (locale === "fr") return fr_cmdk_fact_followers(inputs)
	if (locale === "it") return it_cmdk_fact_followers(inputs)
	if (locale === "nl") return nl_cmdk_fact_followers(inputs)
	if (locale === "pl") return pl_cmdk_fact_followers(inputs)
	if (locale === "pt") return pt_cmdk_fact_followers(inputs)
	if (locale === "ru") return ru_cmdk_fact_followers(inputs)
	if (locale === "sv") return sv_cmdk_fact_followers(inputs)
	if (locale === "tr") return tr_cmdk_fact_followers(inputs)
	if (locale === "zh") return zh_cmdk_fact_followers(inputs)
	if (locale === "ja") return ja_cmdk_fact_followers(inputs)
	return en_cmdk_fact_followers(inputs)
});
