/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Badge_Jam_Podium_NameInputs */

const en_profile_badge_jam_podium_name = /** @type {(inputs: Profile_Badge_Jam_Podium_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam Podium`)
};

const es_profile_badge_jam_podium_name = /** @type {(inputs: Profile_Badge_Jam_Podium_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Podio de Jam`)
};

const de_profile_badge_jam_podium_name = /** @type {(inputs: Profile_Badge_Jam_Podium_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam-Podium`)
};

const fr_profile_badge_jam_podium_name = /** @type {(inputs: Profile_Badge_Jam_Podium_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Podium de Jam`)
};

const it_profile_badge_jam_podium_name = /** @type {(inputs: Profile_Badge_Jam_Podium_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Podio della Jam`)
};

const nl_profile_badge_jam_podium_name = /** @type {(inputs: Profile_Badge_Jam_Podium_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam-podium`)
};

const pl_profile_badge_jam_podium_name = /** @type {(inputs: Profile_Badge_Jam_Podium_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Podium Jamu`)
};

const pt_profile_badge_jam_podium_name = /** @type {(inputs: Profile_Badge_Jam_Podium_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pódio da Jam`)
};

const ru_profile_badge_jam_podium_name = /** @type {(inputs: Profile_Badge_Jam_Podium_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пьедестал джема`)
};

const sv_profile_badge_jam_podium_name = /** @type {(inputs: Profile_Badge_Jam_Podium_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam-pallplats`)
};

const tr_profile_badge_jam_podium_name = /** @type {(inputs: Profile_Badge_Jam_Podium_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam Podyumu`)
};

const zh_profile_badge_jam_podium_name = /** @type {(inputs: Profile_Badge_Jam_Podium_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam 领奖台`)
};

const ja_profile_badge_jam_podium_name = /** @type {(inputs: Profile_Badge_Jam_Podium_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ジャム表彰台`)
};

/**
* | output |
* | --- |
* | "Jam Podium" |
*
* @param {Profile_Badge_Jam_Podium_NameInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_badge_jam_podium_name = /** @type {((inputs?: Profile_Badge_Jam_Podium_NameInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_Jam_Podium_NameInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_badge_jam_podium_name(inputs)
	if (locale === "de") return de_profile_badge_jam_podium_name(inputs)
	if (locale === "fr") return fr_profile_badge_jam_podium_name(inputs)
	if (locale === "it") return it_profile_badge_jam_podium_name(inputs)
	if (locale === "nl") return nl_profile_badge_jam_podium_name(inputs)
	if (locale === "pl") return pl_profile_badge_jam_podium_name(inputs)
	if (locale === "pt") return pt_profile_badge_jam_podium_name(inputs)
	if (locale === "ru") return ru_profile_badge_jam_podium_name(inputs)
	if (locale === "sv") return sv_profile_badge_jam_podium_name(inputs)
	if (locale === "tr") return tr_profile_badge_jam_podium_name(inputs)
	if (locale === "zh") return zh_profile_badge_jam_podium_name(inputs)
	if (locale === "ja") return ja_profile_badge_jam_podium_name(inputs)
	return en_profile_badge_jam_podium_name(inputs)
});
