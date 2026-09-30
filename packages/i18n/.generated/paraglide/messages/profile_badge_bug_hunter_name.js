/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Badge_Bug_Hunter_NameInputs */

const en_profile_badge_bug_hunter_name = /** @type {(inputs: Profile_Badge_Bug_Hunter_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bug Hunter`)
};

const es_profile_badge_bug_hunter_name = /** @type {(inputs: Profile_Badge_Bug_Hunter_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cazador de bugs`)
};

const de_profile_badge_bug_hunter_name = /** @type {(inputs: Profile_Badge_Bug_Hunter_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bugjäger`)
};

const fr_profile_badge_bug_hunter_name = /** @type {(inputs: Profile_Badge_Bug_Hunter_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chasseur de bugs`)
};

const it_profile_badge_bug_hunter_name = /** @type {(inputs: Profile_Badge_Bug_Hunter_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cacciatore di bug`)
};

const nl_profile_badge_bug_hunter_name = /** @type {(inputs: Profile_Badge_Bug_Hunter_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buggenjager`)
};

const pl_profile_badge_bug_hunter_name = /** @type {(inputs: Profile_Badge_Bug_Hunter_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Łowca bugów`)
};

const pt_profile_badge_bug_hunter_name = /** @type {(inputs: Profile_Badge_Bug_Hunter_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Caçador de bugs`)
};

const ru_profile_badge_bug_hunter_name = /** @type {(inputs: Profile_Badge_Bug_Hunter_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Охотник за багами`)
};

const sv_profile_badge_bug_hunter_name = /** @type {(inputs: Profile_Badge_Bug_Hunter_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buggjägare`)
};

const tr_profile_badge_bug_hunter_name = /** @type {(inputs: Profile_Badge_Bug_Hunter_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hata Avcısı`)
};

const zh_profile_badge_bug_hunter_name = /** @type {(inputs: Profile_Badge_Bug_Hunter_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`漏洞猎手`)
};

const ja_profile_badge_bug_hunter_name = /** @type {(inputs: Profile_Badge_Bug_Hunter_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バグハンター`)
};

/**
* | output |
* | --- |
* | "Bug Hunter" |
*
* @param {Profile_Badge_Bug_Hunter_NameInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_badge_bug_hunter_name = /** @type {((inputs?: Profile_Badge_Bug_Hunter_NameInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_Bug_Hunter_NameInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_badge_bug_hunter_name(inputs)
	if (locale === "de") return de_profile_badge_bug_hunter_name(inputs)
	if (locale === "fr") return fr_profile_badge_bug_hunter_name(inputs)
	if (locale === "it") return it_profile_badge_bug_hunter_name(inputs)
	if (locale === "nl") return nl_profile_badge_bug_hunter_name(inputs)
	if (locale === "pl") return pl_profile_badge_bug_hunter_name(inputs)
	if (locale === "pt") return pt_profile_badge_bug_hunter_name(inputs)
	if (locale === "ru") return ru_profile_badge_bug_hunter_name(inputs)
	if (locale === "sv") return sv_profile_badge_bug_hunter_name(inputs)
	if (locale === "tr") return tr_profile_badge_bug_hunter_name(inputs)
	if (locale === "zh") return zh_profile_badge_bug_hunter_name(inputs)
	if (locale === "ja") return ja_profile_badge_bug_hunter_name(inputs)
	return en_profile_badge_bug_hunter_name(inputs)
});
