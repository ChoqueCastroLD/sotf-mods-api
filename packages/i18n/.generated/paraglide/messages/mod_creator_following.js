/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Creator_FollowingInputs */

const en_mod_creator_following = /** @type {(inputs: Mod_Creator_FollowingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Following creator`)
};

const es_mod_creator_following = /** @type {(inputs: Mod_Creator_FollowingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Siguiendo al creador`)
};

const de_mod_creator_following = /** @type {(inputs: Mod_Creator_FollowingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du folgst dem Ersteller`)
};

const fr_mod_creator_following = /** @type {(inputs: Mod_Creator_FollowingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous suivez le créateur`)
};

const it_mod_creator_following = /** @type {(inputs: Mod_Creator_FollowingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segui il creatore`)
};

const nl_mod_creator_following = /** @type {(inputs: Mod_Creator_FollowingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je volgt de maker`)
};

const pl_mod_creator_following = /** @type {(inputs: Mod_Creator_FollowingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obserwujesz twórcę`)
};

const pt_mod_creator_following = /** @type {(inputs: Mod_Creator_FollowingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seguindo o criador`)
};

const ru_mod_creator_following = /** @type {(inputs: Mod_Creator_FollowingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вы подписаны на автора`)
};

const sv_mod_creator_following = /** @type {(inputs: Mod_Creator_FollowingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du följer skaparen`)
};

const tr_mod_creator_following = /** @type {(inputs: Mod_Creator_FollowingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapımcıyı takip ediyorsun`)
};

const zh_mod_creator_following = /** @type {(inputs: Mod_Creator_FollowingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已关注作者`)
};

const ja_mod_creator_following = /** @type {(inputs: Mod_Creator_FollowingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作者をフォロー中`)
};

/**
* | output |
* | --- |
* | "Following creator" |
*
* @param {Mod_Creator_FollowingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_creator_following = /** @type {((inputs?: Mod_Creator_FollowingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Creator_FollowingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_creator_following(inputs)
	if (locale === "de") return de_mod_creator_following(inputs)
	if (locale === "fr") return fr_mod_creator_following(inputs)
	if (locale === "it") return it_mod_creator_following(inputs)
	if (locale === "nl") return nl_mod_creator_following(inputs)
	if (locale === "pl") return pl_mod_creator_following(inputs)
	if (locale === "pt") return pt_mod_creator_following(inputs)
	if (locale === "ru") return ru_mod_creator_following(inputs)
	if (locale === "sv") return sv_mod_creator_following(inputs)
	if (locale === "tr") return tr_mod_creator_following(inputs)
	if (locale === "zh") return zh_mod_creator_following(inputs)
	if (locale === "ja") return ja_mod_creator_following(inputs)
	return en_mod_creator_following(inputs)
});
