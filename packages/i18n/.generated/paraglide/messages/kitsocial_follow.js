/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kitsocial_FollowInputs */

const en_kitsocial_follow = /** @type {(inputs: Kitsocial_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Follow`)
};

const es_kitsocial_follow = /** @type {(inputs: Kitsocial_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seguir`)
};

const de_kitsocial_follow = /** @type {(inputs: Kitsocial_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Folgen`)
};

const fr_kitsocial_follow = /** @type {(inputs: Kitsocial_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suivre`)
};

const it_kitsocial_follow = /** @type {(inputs: Kitsocial_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segui`)
};

const nl_kitsocial_follow = /** @type {(inputs: Kitsocial_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volgen`)
};

const pl_kitsocial_follow = /** @type {(inputs: Kitsocial_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obserwuj`)
};

const pt_kitsocial_follow = /** @type {(inputs: Kitsocial_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seguir`)
};

const ru_kitsocial_follow = /** @type {(inputs: Kitsocial_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подписаться`)
};

const sv_kitsocial_follow = /** @type {(inputs: Kitsocial_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Följ`)
};

const tr_kitsocial_follow = /** @type {(inputs: Kitsocial_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Takip et`)
};

const zh_kitsocial_follow = /** @type {(inputs: Kitsocial_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`关注`)
};

const ja_kitsocial_follow = /** @type {(inputs: Kitsocial_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フォロー`)
};

/**
* | output |
* | --- |
* | "Follow" |
*
* @param {Kitsocial_FollowInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kitsocial_follow = /** @type {((inputs?: Kitsocial_FollowInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kitsocial_FollowInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kitsocial_follow(inputs)
	if (locale === "de") return de_kitsocial_follow(inputs)
	if (locale === "fr") return fr_kitsocial_follow(inputs)
	if (locale === "it") return it_kitsocial_follow(inputs)
	if (locale === "nl") return nl_kitsocial_follow(inputs)
	if (locale === "pl") return pl_kitsocial_follow(inputs)
	if (locale === "pt") return pt_kitsocial_follow(inputs)
	if (locale === "ru") return ru_kitsocial_follow(inputs)
	if (locale === "sv") return sv_kitsocial_follow(inputs)
	if (locale === "tr") return tr_kitsocial_follow(inputs)
	if (locale === "zh") return zh_kitsocial_follow(inputs)
	if (locale === "ja") return ja_kitsocial_follow(inputs)
	return en_kitsocial_follow(inputs)
});
