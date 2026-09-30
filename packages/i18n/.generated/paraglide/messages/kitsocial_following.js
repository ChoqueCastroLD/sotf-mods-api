/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kitsocial_FollowingInputs */

const en_kitsocial_following = /** @type {(inputs: Kitsocial_FollowingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Following`)
};

const es_kitsocial_following = /** @type {(inputs: Kitsocial_FollowingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Siguiendo`)
};

const de_kitsocial_following = /** @type {(inputs: Kitsocial_FollowingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gefolgt`)
};

const fr_kitsocial_following = /** @type {(inputs: Kitsocial_FollowingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suivi`)
};

const it_kitsocial_following = /** @type {(inputs: Kitsocial_FollowingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seguito`)
};

const nl_kitsocial_following = /** @type {(inputs: Kitsocial_FollowingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volgend`)
};

const pl_kitsocial_following = /** @type {(inputs: Kitsocial_FollowingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obserwujesz`)
};

const pt_kitsocial_following = /** @type {(inputs: Kitsocial_FollowingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seguindo`)
};

const ru_kitsocial_following = /** @type {(inputs: Kitsocial_FollowingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вы подписаны`)
};

const sv_kitsocial_following = /** @type {(inputs: Kitsocial_FollowingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Följer`)
};

const tr_kitsocial_following = /** @type {(inputs: Kitsocial_FollowingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Takip ediliyor`)
};

const zh_kitsocial_following = /** @type {(inputs: Kitsocial_FollowingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已关注`)
};

const ja_kitsocial_following = /** @type {(inputs: Kitsocial_FollowingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フォロー中`)
};

/**
* | output |
* | --- |
* | "Following" |
*
* @param {Kitsocial_FollowingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kitsocial_following = /** @type {((inputs?: Kitsocial_FollowingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kitsocial_FollowingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kitsocial_following(inputs)
	if (locale === "de") return de_kitsocial_following(inputs)
	if (locale === "fr") return fr_kitsocial_following(inputs)
	if (locale === "it") return it_kitsocial_following(inputs)
	if (locale === "nl") return nl_kitsocial_following(inputs)
	if (locale === "pl") return pl_kitsocial_following(inputs)
	if (locale === "pt") return pt_kitsocial_following(inputs)
	if (locale === "ru") return ru_kitsocial_following(inputs)
	if (locale === "sv") return sv_kitsocial_following(inputs)
	if (locale === "tr") return tr_kitsocial_following(inputs)
	if (locale === "zh") return zh_kitsocial_following(inputs)
	if (locale === "ja") return ja_kitsocial_following(inputs)
	return en_kitsocial_following(inputs)
});
