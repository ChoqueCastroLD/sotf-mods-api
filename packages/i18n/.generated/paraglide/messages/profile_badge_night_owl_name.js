/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Badge_Night_Owl_NameInputs */

const en_profile_badge_night_owl_name = /** @type {(inputs: Profile_Badge_Night_Owl_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Night Owl`)
};

const es_profile_badge_night_owl_name = /** @type {(inputs: Profile_Badge_Night_Owl_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Búho nocturno`)
};

const de_profile_badge_night_owl_name = /** @type {(inputs: Profile_Badge_Night_Owl_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nachteule`)
};

const fr_profile_badge_night_owl_name = /** @type {(inputs: Profile_Badge_Night_Owl_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oiseau de nuit`)
};

const it_profile_badge_night_owl_name = /** @type {(inputs: Profile_Badge_Night_Owl_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nottambulo`)
};

const nl_profile_badge_night_owl_name = /** @type {(inputs: Profile_Badge_Night_Owl_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nachtuil`)
};

const pl_profile_badge_night_owl_name = /** @type {(inputs: Profile_Badge_Night_Owl_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nocny marek`)
};

const pt_profile_badge_night_owl_name = /** @type {(inputs: Profile_Badge_Night_Owl_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Coruja noturna`)
};

const ru_profile_badge_night_owl_name = /** @type {(inputs: Profile_Badge_Night_Owl_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ночная сова`)
};

const sv_profile_badge_night_owl_name = /** @type {(inputs: Profile_Badge_Night_Owl_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nattuggla`)
};

const tr_profile_badge_night_owl_name = /** @type {(inputs: Profile_Badge_Night_Owl_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gece Kuşu`)
};

const zh_profile_badge_night_owl_name = /** @type {(inputs: Profile_Badge_Night_Owl_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`夜猫子`)
};

const ja_profile_badge_night_owl_name = /** @type {(inputs: Profile_Badge_Night_Owl_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`夜ふかし`)
};

/**
* | output |
* | --- |
* | "Night Owl" |
*
* @param {Profile_Badge_Night_Owl_NameInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_badge_night_owl_name = /** @type {((inputs?: Profile_Badge_Night_Owl_NameInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_Night_Owl_NameInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_badge_night_owl_name(inputs)
	if (locale === "de") return de_profile_badge_night_owl_name(inputs)
	if (locale === "fr") return fr_profile_badge_night_owl_name(inputs)
	if (locale === "it") return it_profile_badge_night_owl_name(inputs)
	if (locale === "nl") return nl_profile_badge_night_owl_name(inputs)
	if (locale === "pl") return pl_profile_badge_night_owl_name(inputs)
	if (locale === "pt") return pt_profile_badge_night_owl_name(inputs)
	if (locale === "ru") return ru_profile_badge_night_owl_name(inputs)
	if (locale === "sv") return sv_profile_badge_night_owl_name(inputs)
	if (locale === "tr") return tr_profile_badge_night_owl_name(inputs)
	if (locale === "zh") return zh_profile_badge_night_owl_name(inputs)
	if (locale === "ja") return ja_profile_badge_night_owl_name(inputs)
	return en_profile_badge_night_owl_name(inputs)
});
