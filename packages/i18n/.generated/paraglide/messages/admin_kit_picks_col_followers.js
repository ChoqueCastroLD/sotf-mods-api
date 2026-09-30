/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Kit_Picks_Col_FollowersInputs */

const en_admin_kit_picks_col_followers = /** @type {(inputs: Admin_Kit_Picks_Col_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Followers`)
};

const es_admin_kit_picks_col_followers = /** @type {(inputs: Admin_Kit_Picks_Col_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seguidores`)
};

const de_admin_kit_picks_col_followers = /** @type {(inputs: Admin_Kit_Picks_Col_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Follower`)
};

const fr_admin_kit_picks_col_followers = /** @type {(inputs: Admin_Kit_Picks_Col_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abonnés`)
};

const it_admin_kit_picks_col_followers = /** @type {(inputs: Admin_Kit_Picks_Col_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Follower`)
};

const nl_admin_kit_picks_col_followers = /** @type {(inputs: Admin_Kit_Picks_Col_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volgers`)
};

const pl_admin_kit_picks_col_followers = /** @type {(inputs: Admin_Kit_Picks_Col_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obserwujący`)
};

const pt_admin_kit_picks_col_followers = /** @type {(inputs: Admin_Kit_Picks_Col_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seguidores`)
};

const ru_admin_kit_picks_col_followers = /** @type {(inputs: Admin_Kit_Picks_Col_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подписчики`)
};

const sv_admin_kit_picks_col_followers = /** @type {(inputs: Admin_Kit_Picks_Col_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Följare`)
};

const tr_admin_kit_picks_col_followers = /** @type {(inputs: Admin_Kit_Picks_Col_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Takipçiler`)
};

const zh_admin_kit_picks_col_followers = /** @type {(inputs: Admin_Kit_Picks_Col_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`关注者`)
};

const ja_admin_kit_picks_col_followers = /** @type {(inputs: Admin_Kit_Picks_Col_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フォロワー`)
};

/**
* | output |
* | --- |
* | "Followers" |
*
* @param {Admin_Kit_Picks_Col_FollowersInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_kit_picks_col_followers = /** @type {((inputs?: Admin_Kit_Picks_Col_FollowersInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Kit_Picks_Col_FollowersInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_kit_picks_col_followers(inputs)
	if (locale === "de") return de_admin_kit_picks_col_followers(inputs)
	if (locale === "fr") return fr_admin_kit_picks_col_followers(inputs)
	if (locale === "it") return it_admin_kit_picks_col_followers(inputs)
	if (locale === "nl") return nl_admin_kit_picks_col_followers(inputs)
	if (locale === "pl") return pl_admin_kit_picks_col_followers(inputs)
	if (locale === "pt") return pt_admin_kit_picks_col_followers(inputs)
	if (locale === "ru") return ru_admin_kit_picks_col_followers(inputs)
	if (locale === "sv") return sv_admin_kit_picks_col_followers(inputs)
	if (locale === "tr") return tr_admin_kit_picks_col_followers(inputs)
	if (locale === "zh") return zh_admin_kit_picks_col_followers(inputs)
	if (locale === "ja") return ja_admin_kit_picks_col_followers(inputs)
	return en_admin_kit_picks_col_followers(inputs)
});
