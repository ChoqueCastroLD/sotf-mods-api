/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Achievements_Xp_ActionInputs */

const en_profile_achievements_xp_action = /** @type {(inputs: Profile_Achievements_Xp_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Action`)
};

const es_profile_achievements_xp_action = /** @type {(inputs: Profile_Achievements_Xp_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Acción`)
};

const de_profile_achievements_xp_action = /** @type {(inputs: Profile_Achievements_Xp_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktion`)
};

const fr_profile_achievements_xp_action = /** @type {(inputs: Profile_Achievements_Xp_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Action`)
};

const it_profile_achievements_xp_action = /** @type {(inputs: Profile_Achievements_Xp_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Azione`)
};

const nl_profile_achievements_xp_action = /** @type {(inputs: Profile_Achievements_Xp_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actie`)
};

const pl_profile_achievements_xp_action = /** @type {(inputs: Profile_Achievements_Xp_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Działanie`)
};

const pt_profile_achievements_xp_action = /** @type {(inputs: Profile_Achievements_Xp_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ação`)
};

const ru_profile_achievements_xp_action = /** @type {(inputs: Profile_Achievements_Xp_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Действие`)
};

const sv_profile_achievements_xp_action = /** @type {(inputs: Profile_Achievements_Xp_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Handling`)
};

const tr_profile_achievements_xp_action = /** @type {(inputs: Profile_Achievements_Xp_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eylem`)
};

const zh_profile_achievements_xp_action = /** @type {(inputs: Profile_Achievements_Xp_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`行为`)
};

const ja_profile_achievements_xp_action = /** @type {(inputs: Profile_Achievements_Xp_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`行動`)
};

/**
* | output |
* | --- |
* | "Action" |
*
* @param {Profile_Achievements_Xp_ActionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_achievements_xp_action = /** @type {((inputs?: Profile_Achievements_Xp_ActionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Achievements_Xp_ActionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_achievements_xp_action(inputs)
	if (locale === "de") return de_profile_achievements_xp_action(inputs)
	if (locale === "fr") return fr_profile_achievements_xp_action(inputs)
	if (locale === "it") return it_profile_achievements_xp_action(inputs)
	if (locale === "nl") return nl_profile_achievements_xp_action(inputs)
	if (locale === "pl") return pl_profile_achievements_xp_action(inputs)
	if (locale === "pt") return pt_profile_achievements_xp_action(inputs)
	if (locale === "ru") return ru_profile_achievements_xp_action(inputs)
	if (locale === "sv") return sv_profile_achievements_xp_action(inputs)
	if (locale === "tr") return tr_profile_achievements_xp_action(inputs)
	if (locale === "zh") return zh_profile_achievements_xp_action(inputs)
	if (locale === "ja") return ja_profile_achievements_xp_action(inputs)
	return en_profile_achievements_xp_action(inputs)
});
