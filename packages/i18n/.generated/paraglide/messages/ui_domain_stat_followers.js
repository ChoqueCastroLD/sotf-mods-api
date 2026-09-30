/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Stat_FollowersInputs */

const en_ui_domain_stat_followers = /** @type {(inputs: Ui_Domain_Stat_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Followers`)
};

const es_ui_domain_stat_followers = /** @type {(inputs: Ui_Domain_Stat_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seguidores`)
};

const de_ui_domain_stat_followers = /** @type {(inputs: Ui_Domain_Stat_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Follower`)
};

const fr_ui_domain_stat_followers = /** @type {(inputs: Ui_Domain_Stat_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abonnés`)
};

const it_ui_domain_stat_followers = /** @type {(inputs: Ui_Domain_Stat_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Follower`)
};

const nl_ui_domain_stat_followers = /** @type {(inputs: Ui_Domain_Stat_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volgers`)
};

const pl_ui_domain_stat_followers = /** @type {(inputs: Ui_Domain_Stat_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obserwujący`)
};

const pt_ui_domain_stat_followers = /** @type {(inputs: Ui_Domain_Stat_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seguidores`)
};

const ru_ui_domain_stat_followers = /** @type {(inputs: Ui_Domain_Stat_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подписчики`)
};

const sv_ui_domain_stat_followers = /** @type {(inputs: Ui_Domain_Stat_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Följare`)
};

const tr_ui_domain_stat_followers = /** @type {(inputs: Ui_Domain_Stat_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Takipçiler`)
};

const zh_ui_domain_stat_followers = /** @type {(inputs: Ui_Domain_Stat_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`关注者`)
};

const ja_ui_domain_stat_followers = /** @type {(inputs: Ui_Domain_Stat_FollowersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フォロワー`)
};

/**
* | output |
* | --- |
* | "Followers" |
*
* @param {Ui_Domain_Stat_FollowersInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_stat_followers = /** @type {((inputs?: Ui_Domain_Stat_FollowersInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Stat_FollowersInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_stat_followers(inputs)
	if (locale === "de") return de_ui_domain_stat_followers(inputs)
	if (locale === "fr") return fr_ui_domain_stat_followers(inputs)
	if (locale === "it") return it_ui_domain_stat_followers(inputs)
	if (locale === "nl") return nl_ui_domain_stat_followers(inputs)
	if (locale === "pl") return pl_ui_domain_stat_followers(inputs)
	if (locale === "pt") return pt_ui_domain_stat_followers(inputs)
	if (locale === "ru") return ru_ui_domain_stat_followers(inputs)
	if (locale === "sv") return sv_ui_domain_stat_followers(inputs)
	if (locale === "tr") return tr_ui_domain_stat_followers(inputs)
	if (locale === "zh") return zh_ui_domain_stat_followers(inputs)
	if (locale === "ja") return ja_ui_domain_stat_followers(inputs)
	return en_ui_domain_stat_followers(inputs)
});
