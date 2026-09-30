/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Achievements_Badge_RepeatableInputs */

const en_profile_achievements_badge_repeatable = /** @type {(inputs: Profile_Achievements_Badge_RepeatableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Can be earned again`)
};

const es_profile_achievements_badge_repeatable = /** @type {(inputs: Profile_Achievements_Badge_RepeatableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se puede ganar varias veces`)
};

const de_profile_achievements_badge_repeatable = /** @type {(inputs: Profile_Achievements_Badge_RepeatableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mehrfach erreichbar`)
};

const fr_profile_achievements_badge_repeatable = /** @type {(inputs: Profile_Achievements_Badge_RepeatableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Peut s’obtenir plusieurs fois`)
};

const it_profile_achievements_badge_repeatable = /** @type {(inputs: Profile_Achievements_Badge_RepeatableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Si può ottenere più volte`)
};

const nl_profile_achievements_badge_repeatable = /** @type {(inputs: Profile_Achievements_Badge_RepeatableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kan vaker worden verdiend`)
};

const pl_profile_achievements_badge_repeatable = /** @type {(inputs: Profile_Achievements_Badge_RepeatableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Można zdobyć wielokrotnie`)
};

const pt_profile_achievements_badge_repeatable = /** @type {(inputs: Profile_Achievements_Badge_RepeatableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pode ser conquistada várias vezes`)
};

const ru_profile_achievements_badge_repeatable = /** @type {(inputs: Profile_Achievements_Badge_RepeatableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Можно получить несколько раз`)
};

const sv_profile_achievements_badge_repeatable = /** @type {(inputs: Profile_Achievements_Badge_RepeatableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kan tjänas in flera gånger`)
};

const tr_profile_achievements_badge_repeatable = /** @type {(inputs: Profile_Achievements_Badge_RepeatableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Birden çok kez kazanılabilir`)
};

const zh_profile_achievements_badge_repeatable = /** @type {(inputs: Profile_Achievements_Badge_RepeatableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`可重复获得`)
};

const ja_profile_achievements_badge_repeatable = /** @type {(inputs: Profile_Achievements_Badge_RepeatableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`何度でも獲得可能`)
};

/**
* | output |
* | --- |
* | "Can be earned again" |
*
* @param {Profile_Achievements_Badge_RepeatableInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_achievements_badge_repeatable = /** @type {((inputs?: Profile_Achievements_Badge_RepeatableInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Achievements_Badge_RepeatableInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_achievements_badge_repeatable(inputs)
	if (locale === "de") return de_profile_achievements_badge_repeatable(inputs)
	if (locale === "fr") return fr_profile_achievements_badge_repeatable(inputs)
	if (locale === "it") return it_profile_achievements_badge_repeatable(inputs)
	if (locale === "nl") return nl_profile_achievements_badge_repeatable(inputs)
	if (locale === "pl") return pl_profile_achievements_badge_repeatable(inputs)
	if (locale === "pt") return pt_profile_achievements_badge_repeatable(inputs)
	if (locale === "ru") return ru_profile_achievements_badge_repeatable(inputs)
	if (locale === "sv") return sv_profile_achievements_badge_repeatable(inputs)
	if (locale === "tr") return tr_profile_achievements_badge_repeatable(inputs)
	if (locale === "zh") return zh_profile_achievements_badge_repeatable(inputs)
	if (locale === "ja") return ja_profile_achievements_badge_repeatable(inputs)
	return en_profile_achievements_badge_repeatable(inputs)
});
