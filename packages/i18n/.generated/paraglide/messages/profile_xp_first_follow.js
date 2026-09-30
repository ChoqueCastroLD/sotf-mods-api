/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Xp_First_FollowInputs */

const en_profile_xp_first_follow = /** @type {(inputs: Profile_Xp_First_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Follow your first mod or creator`)
};

const es_profile_xp_first_follow = /** @type {(inputs: Profile_Xp_First_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sigue tu primer mod o creador`)
};

const de_profile_xp_first_follow = /** @type {(inputs: Profile_Xp_First_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deinem ersten Mod oder Ersteller folgen`)
};

const fr_profile_xp_first_follow = /** @type {(inputs: Profile_Xp_First_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suivre votre premier mod ou créateur`)
};

const it_profile_xp_first_follow = /** @type {(inputs: Profile_Xp_First_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segui la tua prima mod o il tuo primo creatore`)
};

const nl_profile_xp_first_follow = /** @type {(inputs: Profile_Xp_First_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je eerste mod of maker volgen`)
};

const pl_profile_xp_first_follow = /** @type {(inputs: Profile_Xp_First_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaobserwuj pierwszy mod lub twórcę`)
};

const pt_profile_xp_first_follow = /** @type {(inputs: Profile_Xp_First_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seguir seu primeiro mod ou criador`)
};

const ru_profile_xp_first_follow = /** @type {(inputs: Profile_Xp_First_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подписаться на первый мод или автора`)
};

const sv_profile_xp_first_follow = /** @type {(inputs: Profile_Xp_First_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Följ din första modd eller skapare`)
};

const tr_profile_xp_first_follow = /** @type {(inputs: Profile_Xp_First_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İlk modunu veya üreticini takip et`)
};

const zh_profile_xp_first_follow = /** @type {(inputs: Profile_Xp_First_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`关注你的第一个模组或创作者`)
};

const ja_profile_xp_first_follow = /** @type {(inputs: Profile_Xp_First_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最初の MOD またはクリエイターをフォローする`)
};

/**
* | output |
* | --- |
* | "Follow your first mod or creator" |
*
* @param {Profile_Xp_First_FollowInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_xp_first_follow = /** @type {((inputs?: Profile_Xp_First_FollowInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Xp_First_FollowInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_xp_first_follow(inputs)
	if (locale === "de") return de_profile_xp_first_follow(inputs)
	if (locale === "fr") return fr_profile_xp_first_follow(inputs)
	if (locale === "it") return it_profile_xp_first_follow(inputs)
	if (locale === "nl") return nl_profile_xp_first_follow(inputs)
	if (locale === "pl") return pl_profile_xp_first_follow(inputs)
	if (locale === "pt") return pt_profile_xp_first_follow(inputs)
	if (locale === "ru") return ru_profile_xp_first_follow(inputs)
	if (locale === "sv") return sv_profile_xp_first_follow(inputs)
	if (locale === "tr") return tr_profile_xp_first_follow(inputs)
	if (locale === "zh") return zh_profile_xp_first_follow(inputs)
	if (locale === "ja") return ja_profile_xp_first_follow(inputs)
	return en_profile_xp_first_follow(inputs)
});
