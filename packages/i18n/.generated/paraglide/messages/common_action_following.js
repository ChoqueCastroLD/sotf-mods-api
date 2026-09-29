/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Action_FollowingInputs */

const en_common_action_following = /** @type {(inputs: Common_Action_FollowingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Following`)
};

const es_common_action_following = /** @type {(inputs: Common_Action_FollowingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Siguiendo`)
};

const de_common_action_following = /** @type {(inputs: Common_Action_FollowingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Folge ich`)
};

const fr_common_action_following = /** @type {(inputs: Common_Action_FollowingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suivi`)
};

const it_common_action_following = /** @type {(inputs: Common_Action_FollowingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segui già`)
};

const nl_common_action_following = /** @type {(inputs: Common_Action_FollowingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volgend`)
};

const pl_common_action_following = /** @type {(inputs: Common_Action_FollowingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obserwujesz`)
};

const pt_common_action_following = /** @type {(inputs: Common_Action_FollowingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seguindo`)
};

const ru_common_action_following = /** @type {(inputs: Common_Action_FollowingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отслеживается`)
};

const sv_common_action_following = /** @type {(inputs: Common_Action_FollowingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Följer`)
};

const tr_common_action_following = /** @type {(inputs: Common_Action_FollowingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Takip ediliyor`)
};

const zh_common_action_following = /** @type {(inputs: Common_Action_FollowingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已关注`)
};

const ja_common_action_following = /** @type {(inputs: Common_Action_FollowingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フォロー中`)
};

/**
* | output |
* | --- |
* | "Following" |
*
* @param {Common_Action_FollowingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_action_following = /** @type {((inputs?: Common_Action_FollowingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Action_FollowingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_action_following(inputs)
	if (locale === "de") return de_common_action_following(inputs)
	if (locale === "fr") return fr_common_action_following(inputs)
	if (locale === "it") return it_common_action_following(inputs)
	if (locale === "nl") return nl_common_action_following(inputs)
	if (locale === "pl") return pl_common_action_following(inputs)
	if (locale === "pt") return pt_common_action_following(inputs)
	if (locale === "ru") return ru_common_action_following(inputs)
	if (locale === "sv") return sv_common_action_following(inputs)
	if (locale === "tr") return tr_common_action_following(inputs)
	if (locale === "zh") return zh_common_action_following(inputs)
	if (locale === "ja") return ja_common_action_following(inputs)
	return en_common_action_following(inputs)
});
