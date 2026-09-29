/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Action_UnfollowInputs */

const en_common_action_unfollow = /** @type {(inputs: Common_Action_UnfollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unfollow`)
};

const es_common_action_unfollow = /** @type {(inputs: Common_Action_UnfollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dejar de seguir`)
};

const de_common_action_unfollow = /** @type {(inputs: Common_Action_UnfollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nicht mehr folgen`)
};

const fr_common_action_unfollow = /** @type {(inputs: Common_Action_UnfollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ne plus suivre`)
};

const it_common_action_unfollow = /** @type {(inputs: Common_Action_UnfollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non seguire più`)
};

const nl_common_action_unfollow = /** @type {(inputs: Common_Action_UnfollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ontvolgen`)
};

const pl_common_action_unfollow = /** @type {(inputs: Common_Action_UnfollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przestań obserwować`)
};

const pt_common_action_unfollow = /** @type {(inputs: Common_Action_UnfollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deixar de seguir`)
};

const ru_common_action_unfollow = /** @type {(inputs: Common_Action_UnfollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не отслеживать`)
};

const sv_common_action_unfollow = /** @type {(inputs: Common_Action_UnfollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sluta följa`)
};

const tr_common_action_unfollow = /** @type {(inputs: Common_Action_UnfollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Takibi bırak`)
};

const zh_common_action_unfollow = /** @type {(inputs: Common_Action_UnfollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`取消关注`)
};

const ja_common_action_unfollow = /** @type {(inputs: Common_Action_UnfollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フォロー解除`)
};

/**
* | output |
* | --- |
* | "Unfollow" |
*
* @param {Common_Action_UnfollowInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_action_unfollow = /** @type {((inputs?: Common_Action_UnfollowInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Action_UnfollowInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_action_unfollow(inputs)
	if (locale === "de") return de_common_action_unfollow(inputs)
	if (locale === "fr") return fr_common_action_unfollow(inputs)
	if (locale === "it") return it_common_action_unfollow(inputs)
	if (locale === "nl") return nl_common_action_unfollow(inputs)
	if (locale === "pl") return pl_common_action_unfollow(inputs)
	if (locale === "pt") return pt_common_action_unfollow(inputs)
	if (locale === "ru") return ru_common_action_unfollow(inputs)
	if (locale === "sv") return sv_common_action_unfollow(inputs)
	if (locale === "tr") return tr_common_action_unfollow(inputs)
	if (locale === "zh") return zh_common_action_unfollow(inputs)
	if (locale === "ja") return ja_common_action_unfollow(inputs)
	return en_common_action_unfollow(inputs)
});
