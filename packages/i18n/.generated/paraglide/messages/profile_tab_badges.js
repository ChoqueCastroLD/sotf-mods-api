/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Tab_BadgesInputs */

const en_profile_tab_badges = /** @type {(inputs: Profile_Tab_BadgesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Badges`)
};

const es_profile_tab_badges = /** @type {(inputs: Profile_Tab_BadgesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Insignias`)
};

const de_profile_tab_badges = /** @type {(inputs: Profile_Tab_BadgesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abzeichen`)
};

const fr_profile_tab_badges = /** @type {(inputs: Profile_Tab_BadgesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Badges`)
};

const it_profile_tab_badges = /** @type {(inputs: Profile_Tab_BadgesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Distintivi`)
};

const nl_profile_tab_badges = /** @type {(inputs: Profile_Tab_BadgesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Badges`)
};

const pl_profile_tab_badges = /** @type {(inputs: Profile_Tab_BadgesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odznaki`)
};

const pt_profile_tab_badges = /** @type {(inputs: Profile_Tab_BadgesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Insígnias`)
};

const ru_profile_tab_badges = /** @type {(inputs: Profile_Tab_BadgesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Значки`)
};

const sv_profile_tab_badges = /** @type {(inputs: Profile_Tab_BadgesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Märken`)
};

const tr_profile_tab_badges = /** @type {(inputs: Profile_Tab_BadgesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rozetler`)
};

const zh_profile_tab_badges = /** @type {(inputs: Profile_Tab_BadgesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`徽章`)
};

const ja_profile_tab_badges = /** @type {(inputs: Profile_Tab_BadgesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バッジ`)
};

/**
* | output |
* | --- |
* | "Badges" |
*
* @param {Profile_Tab_BadgesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_tab_badges = /** @type {((inputs?: Profile_Tab_BadgesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Tab_BadgesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_tab_badges(inputs)
	if (locale === "de") return de_profile_tab_badges(inputs)
	if (locale === "fr") return fr_profile_tab_badges(inputs)
	if (locale === "it") return it_profile_tab_badges(inputs)
	if (locale === "nl") return nl_profile_tab_badges(inputs)
	if (locale === "pl") return pl_profile_tab_badges(inputs)
	if (locale === "pt") return pt_profile_tab_badges(inputs)
	if (locale === "ru") return ru_profile_tab_badges(inputs)
	if (locale === "sv") return sv_profile_tab_badges(inputs)
	if (locale === "tr") return tr_profile_tab_badges(inputs)
	if (locale === "zh") return zh_profile_tab_badges(inputs)
	if (locale === "ja") return ja_profile_tab_badges(inputs)
	return en_profile_tab_badges(inputs)
});
