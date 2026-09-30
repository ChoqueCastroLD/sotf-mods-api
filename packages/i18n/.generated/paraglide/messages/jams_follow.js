/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_FollowInputs */

const en_jams_follow = /** @type {(inputs: Jams_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Follow jam`)
};

const es_jams_follow = /** @type {(inputs: Jams_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seguir jam`)
};

const de_jams_follow = /** @type {(inputs: Jams_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam folgen`)
};

const fr_jams_follow = /** @type {(inputs: Jams_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suivre le jam`)
};

const it_jams_follow = /** @type {(inputs: Jams_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segui il jam`)
};

const nl_jams_follow = /** @type {(inputs: Jams_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam volgen`)
};

const pl_jams_follow = /** @type {(inputs: Jams_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obserwuj jam`)
};

const pt_jams_follow = /** @type {(inputs: Jams_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seguir jam`)
};

const ru_jams_follow = /** @type {(inputs: Jams_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Следить за джемом`)
};

const sv_jams_follow = /** @type {(inputs: Jams_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Följ jammen`)
};

const tr_jams_follow = /** @type {(inputs: Jams_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam'i takip et`)
};

const zh_jams_follow = /** @type {(inputs: Jams_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`关注 Jam`)
};

const ja_jams_follow = /** @type {(inputs: Jams_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ジャムをフォロー`)
};

/**
* | output |
* | --- |
* | "Follow jam" |
*
* @param {Jams_FollowInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_follow = /** @type {((inputs?: Jams_FollowInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_FollowInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_follow(inputs)
	if (locale === "de") return de_jams_follow(inputs)
	if (locale === "fr") return fr_jams_follow(inputs)
	if (locale === "it") return it_jams_follow(inputs)
	if (locale === "nl") return nl_jams_follow(inputs)
	if (locale === "pl") return pl_jams_follow(inputs)
	if (locale === "pt") return pt_jams_follow(inputs)
	if (locale === "ru") return ru_jams_follow(inputs)
	if (locale === "sv") return sv_jams_follow(inputs)
	if (locale === "tr") return tr_jams_follow(inputs)
	if (locale === "zh") return zh_jams_follow(inputs)
	if (locale === "ja") return ja_jams_follow(inputs)
	return en_jams_follow(inputs)
});
