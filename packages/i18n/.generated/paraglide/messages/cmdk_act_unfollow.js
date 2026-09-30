/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Act_UnfollowInputs */

const en_cmdk_act_unfollow = /** @type {(inputs: Cmdk_Act_UnfollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unfollow`)
};

const es_cmdk_act_unfollow = /** @type {(inputs: Cmdk_Act_UnfollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dejar de seguir`)
};

const de_cmdk_act_unfollow = /** @type {(inputs: Cmdk_Act_UnfollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nicht mehr folgen`)
};

const fr_cmdk_act_unfollow = /** @type {(inputs: Cmdk_Act_UnfollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ne plus suivre`)
};

const it_cmdk_act_unfollow = /** @type {(inputs: Cmdk_Act_UnfollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Smetti di seguire`)
};

const nl_cmdk_act_unfollow = /** @type {(inputs: Cmdk_Act_UnfollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ontvolgen`)
};

const pl_cmdk_act_unfollow = /** @type {(inputs: Cmdk_Act_UnfollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przestań obserwować`)
};

const pt_cmdk_act_unfollow = /** @type {(inputs: Cmdk_Act_UnfollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deixar de seguir`)
};

const ru_cmdk_act_unfollow = /** @type {(inputs: Cmdk_Act_UnfollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отписаться`)
};

const sv_cmdk_act_unfollow = /** @type {(inputs: Cmdk_Act_UnfollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sluta följa`)
};

const tr_cmdk_act_unfollow = /** @type {(inputs: Cmdk_Act_UnfollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Takibi bırak`)
};

const zh_cmdk_act_unfollow = /** @type {(inputs: Cmdk_Act_UnfollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`取消关注`)
};

const ja_cmdk_act_unfollow = /** @type {(inputs: Cmdk_Act_UnfollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フォロー解除`)
};

/**
* | output |
* | --- |
* | "Unfollow" |
*
* @param {Cmdk_Act_UnfollowInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_act_unfollow = /** @type {((inputs?: Cmdk_Act_UnfollowInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Act_UnfollowInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_act_unfollow(inputs)
	if (locale === "de") return de_cmdk_act_unfollow(inputs)
	if (locale === "fr") return fr_cmdk_act_unfollow(inputs)
	if (locale === "it") return it_cmdk_act_unfollow(inputs)
	if (locale === "nl") return nl_cmdk_act_unfollow(inputs)
	if (locale === "pl") return pl_cmdk_act_unfollow(inputs)
	if (locale === "pt") return pt_cmdk_act_unfollow(inputs)
	if (locale === "ru") return ru_cmdk_act_unfollow(inputs)
	if (locale === "sv") return sv_cmdk_act_unfollow(inputs)
	if (locale === "tr") return tr_cmdk_act_unfollow(inputs)
	if (locale === "zh") return zh_cmdk_act_unfollow(inputs)
	if (locale === "ja") return ja_cmdk_act_unfollow(inputs)
	return en_cmdk_act_unfollow(inputs)
});
