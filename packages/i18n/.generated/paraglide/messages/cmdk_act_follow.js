/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Act_FollowInputs */

const en_cmdk_act_follow = /** @type {(inputs: Cmdk_Act_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Follow`)
};

const es_cmdk_act_follow = /** @type {(inputs: Cmdk_Act_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seguir`)
};

const de_cmdk_act_follow = /** @type {(inputs: Cmdk_Act_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Folgen`)
};

const fr_cmdk_act_follow = /** @type {(inputs: Cmdk_Act_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suivre`)
};

const it_cmdk_act_follow = /** @type {(inputs: Cmdk_Act_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segui`)
};

const nl_cmdk_act_follow = /** @type {(inputs: Cmdk_Act_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volgen`)
};

const pl_cmdk_act_follow = /** @type {(inputs: Cmdk_Act_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obserwuj`)
};

const pt_cmdk_act_follow = /** @type {(inputs: Cmdk_Act_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seguir`)
};

const ru_cmdk_act_follow = /** @type {(inputs: Cmdk_Act_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подписаться`)
};

const sv_cmdk_act_follow = /** @type {(inputs: Cmdk_Act_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Följ`)
};

const tr_cmdk_act_follow = /** @type {(inputs: Cmdk_Act_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Takip et`)
};

const zh_cmdk_act_follow = /** @type {(inputs: Cmdk_Act_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`关注`)
};

const ja_cmdk_act_follow = /** @type {(inputs: Cmdk_Act_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フォロー`)
};

/**
* | output |
* | --- |
* | "Follow" |
*
* @param {Cmdk_Act_FollowInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_act_follow = /** @type {((inputs?: Cmdk_Act_FollowInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Act_FollowInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_act_follow(inputs)
	if (locale === "de") return de_cmdk_act_follow(inputs)
	if (locale === "fr") return fr_cmdk_act_follow(inputs)
	if (locale === "it") return it_cmdk_act_follow(inputs)
	if (locale === "nl") return nl_cmdk_act_follow(inputs)
	if (locale === "pl") return pl_cmdk_act_follow(inputs)
	if (locale === "pt") return pt_cmdk_act_follow(inputs)
	if (locale === "ru") return ru_cmdk_act_follow(inputs)
	if (locale === "sv") return sv_cmdk_act_follow(inputs)
	if (locale === "tr") return tr_cmdk_act_follow(inputs)
	if (locale === "zh") return zh_cmdk_act_follow(inputs)
	if (locale === "ja") return ja_cmdk_act_follow(inputs)
	return en_cmdk_act_follow(inputs)
});
