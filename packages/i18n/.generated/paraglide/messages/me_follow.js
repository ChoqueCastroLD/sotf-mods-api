/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_FollowInputs */

const en_me_follow = /** @type {(inputs: Me_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Follow`)
};

const es_me_follow = /** @type {(inputs: Me_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seguir`)
};

const de_me_follow = /** @type {(inputs: Me_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Folgen`)
};

const fr_me_follow = /** @type {(inputs: Me_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suivre`)
};

const it_me_follow = /** @type {(inputs: Me_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segui`)
};

const nl_me_follow = /** @type {(inputs: Me_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volgen`)
};

const pl_me_follow = /** @type {(inputs: Me_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obserwuj`)
};

const pt_me_follow = /** @type {(inputs: Me_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seguir`)
};

const ru_me_follow = /** @type {(inputs: Me_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подписаться`)
};

const sv_me_follow = /** @type {(inputs: Me_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Följ`)
};

const tr_me_follow = /** @type {(inputs: Me_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Takip et`)
};

const zh_me_follow = /** @type {(inputs: Me_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`关注`)
};

const ja_me_follow = /** @type {(inputs: Me_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フォロー`)
};

/**
* | output |
* | --- |
* | "Follow" |
*
* @param {Me_FollowInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_follow = /** @type {((inputs?: Me_FollowInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_FollowInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_follow(inputs)
	if (locale === "de") return de_me_follow(inputs)
	if (locale === "fr") return fr_me_follow(inputs)
	if (locale === "it") return it_me_follow(inputs)
	if (locale === "nl") return nl_me_follow(inputs)
	if (locale === "pl") return pl_me_follow(inputs)
	if (locale === "pt") return pt_me_follow(inputs)
	if (locale === "ru") return ru_me_follow(inputs)
	if (locale === "sv") return sv_me_follow(inputs)
	if (locale === "tr") return tr_me_follow(inputs)
	if (locale === "zh") return zh_me_follow(inputs)
	if (locale === "ja") return ja_me_follow(inputs)
	return en_me_follow(inputs)
});
