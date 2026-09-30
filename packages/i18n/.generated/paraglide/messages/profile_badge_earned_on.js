/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ date: NonNullable<unknown> }} Profile_Badge_Earned_OnInputs */

const en_profile_badge_earned_on = /** @type {(inputs: Profile_Badge_Earned_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Earned on ${i?.date}`)
};

const es_profile_badge_earned_on = /** @type {(inputs: Profile_Badge_Earned_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Conseguida el ${i?.date}`)
};

const de_profile_badge_earned_on = /** @type {(inputs: Profile_Badge_Earned_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Verdient am ${i?.date}`)
};

const fr_profile_badge_earned_on = /** @type {(inputs: Profile_Badge_Earned_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Obtenu le ${i?.date}`)
};

const it_profile_badge_earned_on = /** @type {(inputs: Profile_Badge_Earned_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ottenuto il ${i?.date}`)
};

const nl_profile_badge_earned_on = /** @type {(inputs: Profile_Badge_Earned_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Verdiend op ${i?.date}`)
};

const pl_profile_badge_earned_on = /** @type {(inputs: Profile_Badge_Earned_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zdobyta ${i?.date}`)
};

const pt_profile_badge_earned_on = /** @type {(inputs: Profile_Badge_Earned_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Conquistada em ${i?.date}`)
};

const ru_profile_badge_earned_on = /** @type {(inputs: Profile_Badge_Earned_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Получен ${i?.date}`)
};

const sv_profile_badge_earned_on = /** @type {(inputs: Profile_Badge_Earned_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Intjänat ${i?.date}`)
};

const tr_profile_badge_earned_on = /** @type {(inputs: Profile_Badge_Earned_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Kazanılma tarihi: ${i?.date}`)
};

const zh_profile_badge_earned_on = /** @type {(inputs: Profile_Badge_Earned_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`获得于 ${i?.date}`)
};

const ja_profile_badge_earned_on = /** @type {(inputs: Profile_Badge_Earned_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date} に獲得`)
};

/**
* | output |
* | --- |
* | "Earned on {date}" |
*
* @param {Profile_Badge_Earned_OnInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_badge_earned_on = /** @type {((inputs: Profile_Badge_Earned_OnInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_Earned_OnInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_badge_earned_on(inputs)
	if (locale === "de") return de_profile_badge_earned_on(inputs)
	if (locale === "fr") return fr_profile_badge_earned_on(inputs)
	if (locale === "it") return it_profile_badge_earned_on(inputs)
	if (locale === "nl") return nl_profile_badge_earned_on(inputs)
	if (locale === "pl") return pl_profile_badge_earned_on(inputs)
	if (locale === "pt") return pt_profile_badge_earned_on(inputs)
	if (locale === "ru") return ru_profile_badge_earned_on(inputs)
	if (locale === "sv") return sv_profile_badge_earned_on(inputs)
	if (locale === "tr") return tr_profile_badge_earned_on(inputs)
	if (locale === "zh") return zh_profile_badge_earned_on(inputs)
	if (locale === "ja") return ja_profile_badge_earned_on(inputs)
	return en_profile_badge_earned_on(inputs)
});
