/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Action_FollowInputs */

const en_common_action_follow = /** @type {(inputs: Common_Action_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Follow`)
};

const es_common_action_follow = /** @type {(inputs: Common_Action_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seguir`)
};

const de_common_action_follow = /** @type {(inputs: Common_Action_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Folgen`)
};

const fr_common_action_follow = /** @type {(inputs: Common_Action_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suivre`)
};

const it_common_action_follow = /** @type {(inputs: Common_Action_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segui`)
};

const nl_common_action_follow = /** @type {(inputs: Common_Action_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volgen`)
};

const pl_common_action_follow = /** @type {(inputs: Common_Action_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obserwuj`)
};

const pt_common_action_follow = /** @type {(inputs: Common_Action_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seguir`)
};

const ru_common_action_follow = /** @type {(inputs: Common_Action_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отслеживать`)
};

const sv_common_action_follow = /** @type {(inputs: Common_Action_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Följ`)
};

const tr_common_action_follow = /** @type {(inputs: Common_Action_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Takip et`)
};

const zh_common_action_follow = /** @type {(inputs: Common_Action_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`关注`)
};

const ja_common_action_follow = /** @type {(inputs: Common_Action_FollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フォロー`)
};

/**
* | output |
* | --- |
* | "Follow" |
*
* @param {Common_Action_FollowInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_action_follow = /** @type {((inputs?: Common_Action_FollowInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Action_FollowInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_action_follow(inputs)
	if (locale === "de") return de_common_action_follow(inputs)
	if (locale === "fr") return fr_common_action_follow(inputs)
	if (locale === "it") return it_common_action_follow(inputs)
	if (locale === "nl") return nl_common_action_follow(inputs)
	if (locale === "pl") return pl_common_action_follow(inputs)
	if (locale === "pt") return pt_common_action_follow(inputs)
	if (locale === "ru") return ru_common_action_follow(inputs)
	if (locale === "sv") return sv_common_action_follow(inputs)
	if (locale === "tr") return tr_common_action_follow(inputs)
	if (locale === "zh") return zh_common_action_follow(inputs)
	if (locale === "ja") return ja_common_action_follow(inputs)
	return en_common_action_follow(inputs)
});
