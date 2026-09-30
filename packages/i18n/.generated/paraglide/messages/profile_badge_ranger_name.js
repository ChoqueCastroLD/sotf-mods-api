/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Badge_Ranger_NameInputs */

const en_profile_badge_ranger_name = /** @type {(inputs: Profile_Badge_Ranger_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ranger`)
};

const es_profile_badge_ranger_name = /** @type {(inputs: Profile_Badge_Ranger_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guardabosques`)
};

const de_profile_badge_ranger_name = /** @type {(inputs: Profile_Badge_Ranger_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ranger`)
};

const fr_profile_badge_ranger_name = /** @type {(inputs: Profile_Badge_Ranger_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ranger`)
};

const it_profile_badge_ranger_name = /** @type {(inputs: Profile_Badge_Ranger_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ranger`)
};

const nl_profile_badge_ranger_name = /** @type {(inputs: Profile_Badge_Ranger_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ranger`)
};

const pl_profile_badge_ranger_name = /** @type {(inputs: Profile_Badge_Ranger_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Strażnik`)
};

const pt_profile_badge_ranger_name = /** @type {(inputs: Profile_Badge_Ranger_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guarda`)
};

const ru_profile_badge_ranger_name = /** @type {(inputs: Profile_Badge_Ranger_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Рейнджер`)
};

const sv_profile_badge_ranger_name = /** @type {(inputs: Profile_Badge_Ranger_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ranger`)
};

const tr_profile_badge_ranger_name = /** @type {(inputs: Profile_Badge_Ranger_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Korucu`)
};

const zh_profile_badge_ranger_name = /** @type {(inputs: Profile_Badge_Ranger_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`护林员`)
};

const ja_profile_badge_ranger_name = /** @type {(inputs: Profile_Badge_Ranger_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レンジャー`)
};

/**
* | output |
* | --- |
* | "Ranger" |
*
* @param {Profile_Badge_Ranger_NameInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_badge_ranger_name = /** @type {((inputs?: Profile_Badge_Ranger_NameInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_Ranger_NameInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_badge_ranger_name(inputs)
	if (locale === "de") return de_profile_badge_ranger_name(inputs)
	if (locale === "fr") return fr_profile_badge_ranger_name(inputs)
	if (locale === "it") return it_profile_badge_ranger_name(inputs)
	if (locale === "nl") return nl_profile_badge_ranger_name(inputs)
	if (locale === "pl") return pl_profile_badge_ranger_name(inputs)
	if (locale === "pt") return pt_profile_badge_ranger_name(inputs)
	if (locale === "ru") return ru_profile_badge_ranger_name(inputs)
	if (locale === "sv") return sv_profile_badge_ranger_name(inputs)
	if (locale === "tr") return tr_profile_badge_ranger_name(inputs)
	if (locale === "zh") return zh_profile_badge_ranger_name(inputs)
	if (locale === "ja") return ja_profile_badge_ranger_name(inputs)
	return en_profile_badge_ranger_name(inputs)
});
