/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_FollowingInputs */

const en_jams_following = /** @type {(inputs: Jams_FollowingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Following`)
};

const es_jams_following = /** @type {(inputs: Jams_FollowingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Siguiendo`)
};

const de_jams_following = /** @type {(inputs: Jams_FollowingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Folgst du`)
};

const fr_jams_following = /** @type {(inputs: Jams_FollowingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suivi`)
};

const it_jams_following = /** @type {(inputs: Jams_FollowingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seguito`)
};

const nl_jams_following = /** @type {(inputs: Jams_FollowingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volgend`)
};

const pl_jams_following = /** @type {(inputs: Jams_FollowingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obserwujesz`)
};

const pt_jams_following = /** @type {(inputs: Jams_FollowingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seguindo`)
};

const ru_jams_following = /** @type {(inputs: Jams_FollowingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вы следите`)
};

const sv_jams_following = /** @type {(inputs: Jams_FollowingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Följer`)
};

const tr_jams_following = /** @type {(inputs: Jams_FollowingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Takip ediliyor`)
};

const zh_jams_following = /** @type {(inputs: Jams_FollowingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已关注`)
};

const ja_jams_following = /** @type {(inputs: Jams_FollowingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フォロー中`)
};

/**
* | output |
* | --- |
* | "Following" |
*
* @param {Jams_FollowingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_following = /** @type {((inputs?: Jams_FollowingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_FollowingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_following(inputs)
	if (locale === "de") return de_jams_following(inputs)
	if (locale === "fr") return fr_jams_following(inputs)
	if (locale === "it") return it_jams_following(inputs)
	if (locale === "nl") return nl_jams_following(inputs)
	if (locale === "pl") return pl_jams_following(inputs)
	if (locale === "pt") return pt_jams_following(inputs)
	if (locale === "ru") return ru_jams_following(inputs)
	if (locale === "sv") return sv_jams_following(inputs)
	if (locale === "tr") return tr_jams_following(inputs)
	if (locale === "zh") return zh_jams_following(inputs)
	if (locale === "ja") return ja_jams_following(inputs)
	return en_jams_following(inputs)
});
