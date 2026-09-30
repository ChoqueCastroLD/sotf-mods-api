/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Kpi_FollowersInputs */

const en_basecamp_kpi_followers = /** @type {(inputs: Basecamp_Kpi_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Followers`)
};

const es_basecamp_kpi_followers = /** @type {(inputs: Basecamp_Kpi_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seguidores`)
};

const de_basecamp_kpi_followers = /** @type {(inputs: Basecamp_Kpi_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Follower`)
};

const fr_basecamp_kpi_followers = /** @type {(inputs: Basecamp_Kpi_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abonnés`)
};

const it_basecamp_kpi_followers = /** @type {(inputs: Basecamp_Kpi_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Follower`)
};

const nl_basecamp_kpi_followers = /** @type {(inputs: Basecamp_Kpi_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volgers`)
};

const pl_basecamp_kpi_followers = /** @type {(inputs: Basecamp_Kpi_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obserwujący`)
};

const pt_basecamp_kpi_followers = /** @type {(inputs: Basecamp_Kpi_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seguidores`)
};

const ru_basecamp_kpi_followers = /** @type {(inputs: Basecamp_Kpi_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подписчики`)
};

const sv_basecamp_kpi_followers = /** @type {(inputs: Basecamp_Kpi_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Följare`)
};

const tr_basecamp_kpi_followers = /** @type {(inputs: Basecamp_Kpi_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Takipçi`)
};

const zh_basecamp_kpi_followers = /** @type {(inputs: Basecamp_Kpi_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`关注者`)
};

const ja_basecamp_kpi_followers = /** @type {(inputs: Basecamp_Kpi_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フォロワー`)
};

/**
* | output |
* | --- |
* | "Followers" |
*
* @param {Basecamp_Kpi_FollowersInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_kpi_followers = /** @type {((inputs?: Basecamp_Kpi_FollowersInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Kpi_FollowersInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_kpi_followers(inputs)
	if (locale === "de") return de_basecamp_kpi_followers(inputs)
	if (locale === "fr") return fr_basecamp_kpi_followers(inputs)
	if (locale === "it") return it_basecamp_kpi_followers(inputs)
	if (locale === "nl") return nl_basecamp_kpi_followers(inputs)
	if (locale === "pl") return pl_basecamp_kpi_followers(inputs)
	if (locale === "pt") return pt_basecamp_kpi_followers(inputs)
	if (locale === "ru") return ru_basecamp_kpi_followers(inputs)
	if (locale === "sv") return sv_basecamp_kpi_followers(inputs)
	if (locale === "tr") return tr_basecamp_kpi_followers(inputs)
	if (locale === "zh") return zh_basecamp_kpi_followers(inputs)
	if (locale === "ja") return ja_basecamp_kpi_followers(inputs)
	return en_basecamp_kpi_followers(inputs)
});
